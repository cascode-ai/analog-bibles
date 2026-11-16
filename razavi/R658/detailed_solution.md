# Detailed solution - R658

**Approach.** The PFD and charge pump turn a phase difference into current pulses whose width is proportional to $\Delta\phi$; averaged over one input period this is a current $I_P\Delta\phi/2\pi$. That current flows through the series $R_P$–$C_P$ branch, impedance $R_P + 1/(C_Ps)$. Multiplying the two gives the transfer function, and a phase step confirms it in the time domain.

### Step 1 — Pulse width produced by the PFD

Near lock both inputs have period $T_{in}$. If $V_{in}$ leads by a constant $\Delta\phi$ (rad), the time lead is

$$\Delta T = \frac{\Delta\phi}{2\pi}\,T_{in}.$$

The $V_{in}$ edge sets $Q_A$, the $V_{out}$ edge $\Delta T$ later sets $Q_B$, and the AND gate then resets both. So $Q_A$ is high for $\Delta T$ per cycle and $Q_B$ only for a negligible reset glitch (during which the two equal currents cancel). If $V_{out}$ leads ($\Delta\phi < 0$), $Q_B$ is high for $|\Delta T|$ instead.

### Step 2 — Charge per cycle and average current

While $Q_A$ is high, $S_1$ pushes $I_1 = I_P$ into the filter, so the charge per cycle is

$$Q_{cycle} = I_P\,\Delta T = I_P\,\frac{\Delta\phi}{2\pi}\,T_{in},$$

and the average current is

$$\overline{I_{CP}} = \frac{Q_{cycle}}{T_{in}} = \frac{I_P\,\Delta\phi\,T_{in}/2\pi}{T_{in}} = \frac{I_P}{2\pi}\,\Delta\phi .$$

For $\Delta\phi < 0$, $S_2$ draws $I_2 = I_P$ for $|\Delta T|$, giving $-I_P|\Delta\phi|/2\pi$: the same formula with the sign included. The PFD/charge-pump characteristic is a straight line through the origin with slope $I_P/2\pi$ (A/rad).

**Continuous-time approximation.** If $\Delta\phi(t)$ varies slowly compared with $T_{in}$ (loop bandwidth much smaller than the input frequency), the pulse train can be replaced by its cycle average, $I_{CP}(t) = (I_P/2\pi)\,\Delta\phi(t)$. This relation has no dynamics, so

$$\frac{I_{CP}(s)}{\Delta\phi(s)} = \frac{I_P}{2\pi}.$$

### Step 3 — The loop filter as an impedance

The VCO input draws no current, so all of $I_{CP}$ flows through $R_P$ and then $C_P$ to ground, and $V_{cont}$ is taken across the whole branch: $V_{R_P}(s) = R_P\,I_{CP}(s)$ and $V_{C_P}(s) = I_{CP}(s)/(C_Ps)$ (from $V_{C_P}(t) = \frac{1}{C_P}\int_0^t I_{CP}\,dt'$). Adding,

$$V_{cont}(s) = I_{CP}(s)\left(R_P + \frac{1}{C_Ps}\right) = I_{CP}(s)\,Z(s), \qquad Z(s) = R_P + \frac{1}{C_Ps},$$

the impedance of the series $R_P$–$C_P$ branch.

### Step 4 — Combine the two parts

Substituting $I_{CP}(s) = (I_P/2\pi)\,\Delta\phi(s)$ and dividing by $\Delta\phi(s)$:

$$\boxed{\frac{V_{cont}}{\Delta\phi}(s) = \frac{I_P}{2\pi}\left(R_P + \frac{1}{C_Ps}\right)}$$

Over a common denominator,

$$\frac{V_{cont}}{\Delta\phi}(s) = \frac{I_P}{2\pi C_P}\cdot\frac{R_PC_Ps + 1}{s}.$$

- The pole at the origin comes from $C_P$, which integrates the charge: a constant phase error makes $V_{cont}$ grow without limit.
- The zero at $s = -1/(R_PC_P)$ comes from $R_P$, which adds a term proportional to the present phase error; in the PLL this zero provides the damping.

### Step 5 — Time-domain check with a phase step

Apply $\Delta\phi(t) = \phi_0u(t)$ with the loop opened, so that the pump injects $I_P$ for $\Delta T = \phi_0T_{in}/2\pi$ in every cycle.

- The resistor voltage is $I_PR_P$ during the pulse and zero between pulses, so its average is
$$\overline{V_{R_P}} = I_PR_P\,\frac{\Delta T}{T_{in}} = \frac{I_P\phi_0}{2\pi}\,R_P .$$
- The capacitor voltage rises by $I_P\Delta T/C_P = I_P\phi_0T_{in}/(2\pi C_P)$ per cycle and holds between pulses: a staircase of average slope
$$\frac{I_P\phi_0T_{in}/(2\pi C_P)}{T_{in}} = \frac{I_P\phi_0}{2\pi C_P}\ \text{per second}.$$

So the averaged control voltage is a step plus a ramp:

$$V_{cont}(t) = \frac{I_P\phi_0}{2\pi}\left(R_P + \frac{t}{C_P}\right),\qquad t \ge 0 .$$

From the transfer function, with $\Delta\phi(s) = \phi_0/s$:

$$
\begin{aligned}
V_{cont}(s) &= \frac{I_P}{2\pi}\left(R_P + \frac{1}{C_Ps}\right)\frac{\phi_0}{s} = \frac{I_P\phi_0}{2\pi}\left(\frac{R_P}{s} + \frac{1}{C_Ps^2}\right)\\
V_{cont}(t) &= \frac{I_P\phi_0}{2\pi}\left(R_P + \frac{t}{C_P}\right)u(t),
\end{aligned}
$$

which agrees. Differentiating the step response gives the impulse response $h(t) = \frac{I_P}{2\pi}\left[R_P\,\delta(t) + u(t)/C_P\right]$, whose Laplace transform is again the stated result.

**Limits of the approximation.** The averaged model holds only when the loop bandwidth is well below the input frequency (roughly a factor of 10 or more), and it ignores the short reset pulses, during which both sources are on and (if matched) cancel.

### Result

The PFD/charge pump delivers an average current $\overline{I_{CP}} = I_P\Delta\phi/2\pi$ (pulses of width $\Delta\phi\,T_{in}/2\pi$ per period), and the series $R_P$–$C_P$ branch converts it into a voltage through its impedance $R_P + 1/(C_Ps)$. Therefore

$$\frac{V_{cont}}{\Delta\phi}(s) = \frac{I_P}{2\pi}\left(R_P + \frac{1}{C_Ps}\right) = \frac{I_P}{2\pi C_P}\cdot\frac{R_PC_Ps + 1}{s},$$

with a pole at the origin (the integrating capacitor) and a zero at $-1/(R_PC_P)$ (the proportional path through $R_P$).

**Common mistake.** Treating $R_P$ and $C_P$ as if they were in parallel, which gives $Z = R_P/(1 + R_PC_Ps)$, a low-pass with no integrator. They are in series between the pump output and ground, so their impedances add.

**Common mistake.** Writing $\overline{I_{CP}} = I_P\Delta\phi$. The pump is on for the fraction $\Delta\phi/2\pi$ of each period, since a full period is $2\pi$ rad.

**Common mistake.** Claiming that $V_{cont}$ is simply proportional to $\Delta\phi$. $C_P$ accumulates charge every cycle, so a constant phase error makes $V_{cont}$ ramp indefinitely: the transfer function must contain $1/s$.
