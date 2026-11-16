# Detailed solution - R659

**Approach.** In lock the average control voltage is constant, so the loop-filter capacitor must receive zero net charge per reference cycle. With mismatched UP and DOWN currents that is impossible with aligned pulses, so the loop shifts the feedback edge until the weaker branch conducts long enough to cancel the charge of the stronger one. This charge balance gives the time offset, which is then converted to a phase.

### Step 1 — Which branch is stronger

$M_4$ conducts while $Q_A$ is high and delivers $|I_{D4}|$ *into* the capacitor; $M_3$ conducts while $Q_{B\Delta}$ is high and $M_1$ draws $I_{D3}$ *out of* it. The mismatch is

$$\Delta I = |I_{D4}| - I_{D3} > 0, \qquad \Delta I \ll I_{D3} \approx I_P,$$

so the UP branch is slightly stronger. The reset overlap $T_P$ is deliberate: it avoids the dead zone that very narrow pulses would cause.

### Step 2 — Waveform (a): aligned pulses are not a steady state

With zero phase difference both branches turn on together for exactly $T_P$, during which the net current into the capacitor $C$ is

$$I_{net} = |I_{D4}| - I_{D3} = \Delta I > 0 .$$

The net charge per cycle is $Q_{net} = \Delta I\,T_P$, so the control voltage rises by

$$\Delta V_{cont} = \frac{\Delta I\,T_P}{C}$$

in every cycle: the ramp in waveform (a). $V_{cont}$, and with it the VCO frequency, keeps creeping up, so this is not lock.

### Step 3 — Waveform (b): the loop shifts the phase until the net charge is zero

In lock the average $V_{cont}$ is constant, so the net charge per cycle must be zero, and since the UP current is larger, the DOWN branch must conduct longer. The loop achieves this with the **feedback edge arriving earlier** than the reference edge by $\Delta t$:

1. The feedback edge sets $Q_B$, so only $I_{D3}$ flows for $\Delta t$: net current $-I_{D3}$, and $V_{cont}$ dips.
2. The reference edge then sets $Q_A$, and the reset fires after $T_P$. During this overlap the net current is $+\Delta I$ and $V_{cont}$ ramps back up.
3. Both branches then turn off together.

So the DOWN branch conducts for $T_P + \Delta t$ and the UP branch for $T_P$, as in the current traces of waveform (b). (The $\overline{Q_A}$ and $Q_{B\Delta}$ traces in (b) are drawn with the opposite order of edges; the current traces determine the charge, and the weaker branch must start first.)

### Step 4 — Charge balance

Per cycle the UP branch delivers $Q_{UP} = |I_{D4}|\,T_P$ and the DOWN branch removes $Q_{DN} = I_{D3}\,(T_P + \Delta t)$. Zero net charge:

$$
\begin{aligned}
|I_{D4}|\,T_P &= I_{D3}\,(T_P + \Delta t)\\
(|I_{D4}| - I_{D3})\,T_P &= I_{D3}\,\Delta t\\
\Delta I\,T_P &= I_{D3}\,\Delta t\\
\Delta t &= T_P\,\frac{\Delta I}{I_{D3}} .
\end{aligned}
$$

Equivalently, in waveform (b) the negative area $I_{D3}\Delta t$ of the net current equals the positive area $\Delta I\,T_P$.

### Step 5 — Convert the time offset to a phase offset

One input period $T_{in}$ is $2\pi$ rad, so

$$\Delta\phi = 2\pi\,\frac{\Delta t}{T_{in}} = 2\pi\,\frac{\Delta I}{I_{D3}}\cdot\frac{T_P}{T_{in}} \approx 2\pi\,\frac{\Delta I}{I_P}\cdot\frac{T_P}{T_{in}},$$

using $I_{D3} \approx I_P$ ($\Delta I \ll I_P$). The feedback (VCO) edge leads the reference edge by this amount.

**Numerical illustration.** Take $T_{in} = 10$ ns (100 MHz reference), $T_P = 0.5$ ns and a 10 % mismatch, $\Delta I/I_P = 0.1$:

$$
\begin{aligned}
\Delta t &= (0.5\ \mathrm{ns})(0.1) = 50\ \mathrm{ps},\\
\Delta\phi &= 2\pi\,\frac{50\ \mathrm{ps}}{10\ \mathrm{ns}} = 2\pi(0.005) = 0.0314\ \mathrm{rad} \approx 1.8^\circ .
\end{aligned}
$$

### Step 6 — Interpretation

- **The offset scales with $T_P$, not with $T_{in}$**, because the mismatch matters only while both branches are on. A shorter reset pulse reduces it, but $T_P$ must stay long enough for the switches and sources to turn fully on, or a dead zone appears.
- **The offset scales with $\Delta I/I_P$**, so careful matching of the UP and DOWN currents (including their dependence on the output voltage) is the main remedy.
- **Ripple remains.** Even in lock, $V_{cont}$ dips by about $I_{D3}\Delta t/C$ and ramps back by $\Delta I\,T_P/C$ in every cycle (plus jumps across any series resistor), which produces reference sidebands ("spurs") at the output.

### Result

In lock the net charge per cycle must be zero, which requires the weaker (DOWN) branch to conduct for $T_P + \Delta t$ while the UP branch conducts for $T_P$:

$$|I_{D4}|\,T_P = I_{D3}\,(T_P + \Delta t) \quad\Rightarrow\quad \Delta t = T_P\,\frac{\Delta I}{I_{D3}},$$

$$\Delta\phi = 2\pi\,\frac{\Delta t}{T_{in}} = 2\pi\,\frac{\Delta I}{I_{D3}}\cdot\frac{T_P}{T_{in}} \approx 2\pi\,\frac{\Delta I}{I_P}\cdot\frac{T_P}{T_{in}} .$$

The feedback edge leads the reference edge by $\Delta t$. The offset is proportional to both the relative current mismatch and the reset-pulse width.

**Common mistake.** Writing $\Delta\phi = 2\pi\,\Delta I/I_P$, independent of $T_P$. The mismatch current flows only during the overlap $T_P$; for the rest of the period both branches are off.

**Common mistake.** Claiming the offset is zero because "the PFD always aligns the edges". The loop drives the *net charge* to zero, not the edge timing; with unequal currents that requires unequal on-times.

**Common mistake.** Dividing by $T_P$ instead of $T_{in}$ when converting time to phase: a full period $T_{in}$ is $2\pi$ rad, so $\Delta\phi = 2\pi\Delta t/T_{in}$.
