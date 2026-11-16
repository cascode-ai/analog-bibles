# Detailed solution - R659

**Approach.** In lock the average control voltage must be constant, so the loop-filter capacitor must receive zero net charge in every reference cycle. With mismatched UP and DOWN currents that is impossible if the two pulses are aligned, so the loop shifts the phase of the feedback edge until the weaker branch conducts long enough to cancel the charge of the stronger one. Writing this charge balance gives the time offset, which is then converted to a phase.

### Step 1 — What each branch does and when it conducts

- **UP branch.** $M_2$ is a PMOS current source; $M_4$ is a PMOS switch driven by $\overline{Q_A}$. When $Q_A$ is high, $\overline{Q_A}$ is low, $M_4$ conducts, and $|I_{D4}|$ flows *into* the capacitor.
- **DOWN branch.** $M_3$ is an NMOS switch driven by $Q_{B\Delta}$ ($Q_B$ delayed by the same amount as the inverter that makes $\overline{Q_A}$, so that both switches see their control edges at the same time). When $Q_B$ is high, $M_3$ conducts, and the NMOS source $M_1$ draws $I_{D3}$ *out of* the capacitor.

The mismatch is

$$\Delta I = |I_{D4}| - I_{D3} > 0, \qquad \Delta I \ll I_{D3} \approx I_P,$$

so the UP branch is slightly stronger.

**Reset pulse.** In the PFD, once both $Q_A$ and $Q_B$ are high, the AND gate resets both flip-flops after a delay. Both outputs therefore stay high together for a time $T_P$ in every cycle, even with zero phase error. This overlap is deliberate: it avoids the dead zone that very narrow pulses would cause.

### Step 2 — Waveform (a): aligned pulses are not a steady state

Suppose the input and feedback edges coincide (zero phase difference). Then both branches turn on together and stay on for exactly $T_P$. During that time the net current into the capacitor $C$ is

$$I_{net} = |I_{D4}| - I_{D3} = \Delta I > 0 .$$

The net charge deposited per cycle is

$$Q_{net} = \Delta I\,T_P,$$

and the control voltage rises by

$$\Delta V_{cont} = \frac{\Delta I\,T_P}{C}$$

in every cycle. This is the ramp in waveform (a). $V_{cont}$ keeps creeping up, the VCO frequency keeps increasing, and the loop cannot remain in this state.

### Step 3 — Waveform (b): the loop shifts the phase until the net charge is zero

In true lock the VCO frequency, and hence the average $V_{cont}$, is constant. The capacitor integrates current, so this requires zero net charge per cycle. Since the UP current is larger, the DOWN branch must conduct for longer.

The loop achieves this by letting the **feedback edge arrive earlier** than the reference edge by a time $\Delta t$:

1. The feedback edge sets $Q_B$, so the DOWN branch turns on first. For a time $\Delta t$ only $I_{D3}$ flows: the net current is $-I_{D3}$ and $V_{cont}$ dips.
2. The reference edge then sets $Q_A$, so the UP branch turns on as well. With both outputs high, the reset fires after $T_P$. During this overlap the net current is $+\Delta I$ and $V_{cont}$ ramps back up.
3. Both branches then turn off together.

So the DOWN branch conducts for $T_P + \Delta t$ and the UP branch for $T_P$. This is the shape of the current traces in waveform (b): $I_{D3}$ starts first, $|I_{D4}|$ joins later, both end together, and the net current is a negative pulse followed by a small positive one. (The $\overline{Q_A}$ and $Q_{B\Delta}$ traces in (b) are drawn with the opposite order of edges; the current traces are what determine the charge, and the physical argument above confirms them: the weaker branch must start first.)

### Step 4 — Charge balance

**Charge delivered by the UP branch per cycle:**

$$Q_{UP} = |I_{D4}|\,T_P .$$

**Charge removed by the DOWN branch per cycle:**

$$Q_{DN} = I_{D3}\,(T_P + \Delta t).$$

**Lock condition** (zero net charge):

$$
\begin{aligned}
|I_{D4}|\,T_P &= I_{D3}\,(T_P + \Delta t)\\
|I_{D4}|\,T_P &= I_{D3}\,T_P + I_{D3}\,\Delta t\\
(|I_{D4}| - I_{D3})\,T_P &= I_{D3}\,\Delta t\\
\Delta I\,T_P &= I_{D3}\,\Delta t\\
\Delta t &= T_P\,\frac{\Delta I}{I_{D3}} .
\end{aligned}
$$

The same result follows from the net-current picture in waveform (b): the negative area $I_{D3}\Delta t$ must equal the positive area $\Delta I\,T_P$.

### Step 5 — Convert the time offset to a phase offset

One input period $T_{in}$ corresponds to $2\pi$ rad, so a time offset $\Delta t$ corresponds to

$$\Delta\phi = 2\pi\,\frac{\Delta t}{T_{in}} .$$

Substitute $\Delta t$:

$$\Delta\phi = 2\pi\,\frac{\Delta I}{I_{D3}}\cdot\frac{T_P}{T_{in}} \approx 2\pi\,\frac{\Delta I}{I_P}\cdot\frac{T_P}{T_{in}},$$

where the last form uses $I_{D3} \approx I_P$ (valid because $\Delta I \ll I_P$). The feedback (VCO) edge leads the reference edge by this amount.

**Numerical illustration.** Take $T_{in} = 10$ ns (100 MHz reference), $T_P = 0.5$ ns and a 10 % mismatch, $\Delta I/I_P = 0.1$:

$$
\begin{aligned}
\Delta t &= (0.5\ \mathrm{ns})(0.1) = 50\ \mathrm{ps},\\
\Delta\phi &= 2\pi\,\frac{50\ \mathrm{ps}}{10\ \mathrm{ns}} = 2\pi(0.005) = 0.0314\ \mathrm{rad} \approx 1.8^\circ .
\end{aligned}
$$

### Step 6 — Interpretation

- **The offset scales with $T_P$, not with $T_{in}$.** The mismatch only matters while both branches are on, which is the reset time $T_P$. A shorter reset pulse reduces the offset, but $T_P$ must stay long enough for the switches and current sources to turn fully on, or the PFD/charge pump develops a dead zone.
- **The offset scales with $\Delta I/I_P$.** Careful matching of the UP and DOWN currents (including their dependence on the output voltage) is the main remedy.
- **Ripple remains.** Even in lock, $V_{cont}$ dips by about $I_{D3}\Delta t/C$ and then ramps back by $\Delta I\,T_P/C$ in every cycle (plus jumps across any series resistor). This periodic disturbance at the reference frequency modulates the VCO and produces reference sidebands ("spurs") at the output.

### Result

In lock the net charge per cycle must be zero, which requires the weaker (DOWN) branch to conduct for $T_P + \Delta t$ while the UP branch conducts for $T_P$:

$$|I_{D4}|\,T_P = I_{D3}\,(T_P + \Delta t) \quad\Rightarrow\quad \Delta t = T_P\,\frac{\Delta I}{I_{D3}},$$

$$\Delta\phi = 2\pi\,\frac{\Delta t}{T_{in}} = 2\pi\,\frac{\Delta I}{I_{D3}}\cdot\frac{T_P}{T_{in}} \approx 2\pi\,\frac{\Delta I}{I_P}\cdot\frac{T_P}{T_{in}} .$$

The feedback edge leads the reference edge by $\Delta t$. The offset is proportional to both the relative current mismatch and the reset-pulse width.

**Common mistake.** Writing $\Delta\phi = 2\pi\,\Delta I/I_P$, independent of $T_P$. The mismatch current flows only during the overlap $T_P$; for the rest of the period both branches are off and the mismatch has no effect.

**Common mistake.** Claiming the offset is zero because "the PFD always aligns the edges". A PFD drives the *net charge* to zero, not the edge timing. With unequal currents, zero net charge requires unequal on-times, i.e. a phase offset.

**Common mistake.** Forgetting the $2\pi$ when converting time to phase, or dividing by $T_P$ instead of $T_{in}$. A full period $T_{in}$ is $2\pi$ rad, so $\Delta\phi = 2\pi\Delta t/T_{in}$.
