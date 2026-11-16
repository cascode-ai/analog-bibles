# Detailed solution - R658

**Approach.** Split the path into two parts. First, the PFD and charge pump turn a phase difference into current pulses whose width is proportional to $\Delta\phi$; averaged over one input period this is a current $I_P\Delta\phi/2\pi$. Second, that current flows through the series $R_P$–$C_P$ branch, whose impedance is $R_P + 1/(C_Ps)$. Multiplying the two gives the transfer function. A time-domain check with a phase step confirms the result.

### Step 1 — Pulse width produced by the PFD

Let the reference $V_{in}$ and the feedback signal $V_{out}$ both have period $T_{in}$ (the loop is near lock), and let $V_{in}$ lead by a constant phase $\Delta\phi$ (in rad). The corresponding time lead is a fraction $\Delta\phi/2\pi$ of a period:

$$\Delta T = \frac{\Delta\phi}{2\pi}\,T_{in}.$$

PFD operation in each cycle:

- the rising edge of $V_{in}$ clocks the upper flip-flop, so $Q_A$ goes high (its $D$ input is tied high);
- $\Delta T$ later the rising edge of $V_{out}$ clocks the lower flip-flop, so $Q_B$ goes high;
- with both outputs high, the AND gate resets both flip-flops (after a short delay, during which both switches are on and their equal currents cancel).

So $Q_A$ is high for $\Delta T$ per cycle and $Q_B$ only for a negligible reset glitch. If $V_{out}$ leads instead ($\Delta\phi < 0$), the roles swap: $Q_B$ is high for $|\Delta T|$.

### Step 2 — Charge per cycle and average current

While $Q_A$ is high, $S_1$ is closed and the source $I_1 = I_P$ pushes current into the filter. The charge delivered in one cycle is current times time:

$$Q_{cycle} = I_P\,\Delta T = I_P\,\frac{\Delta\phi}{2\pi}\,T_{in}.$$

Averaged over one period, this is the mean current:

$$\overline{I_{CP}} = \frac{Q_{cycle}}{T_{in}} = \frac{I_P\,\Delta\phi\,T_{in}/2\pi}{T_{in}} = \frac{I_P}{2\pi}\,\Delta\phi .$$

For $\Delta\phi < 0$, $S_2$ draws $I_2 = I_P$ out of the filter for $|\Delta T|$, giving $-I_P|\Delta\phi|/2\pi$, the same formula with the sign included. The PFD/charge-pump characteristic is therefore a straight line through the origin with slope $I_P/2\pi$ (A/rad).

**Continuous-time approximation.** If $\Delta\phi(t)$ varies slowly compared with $T_{in}$ (loop bandwidth much smaller than the input frequency), the pulse train can be replaced by its cycle average, so $I_{CP}(t) = (I_P/2\pi)\,\Delta\phi(t)$. This relation has no dynamics (it is just a constant), so in the Laplace domain

$$\frac{I_{CP}(s)}{\Delta\phi(s)} = \frac{I_P}{2\pi}.$$

### Step 3 — The loop filter as an impedance

The VCO input draws no current, so all of $I_{CP}$ flows through $R_P$ and then through $C_P$ to ground. The control voltage is taken at the charge-pump output, i.e. across the whole branch. By KVL along the branch:

$$V_{cont} = V_{R_P} + V_{C_P}.$$

- Ohm's law for the resistor: $V_{R_P}(t) = R_P\,I_{CP}(t)$, so $V_{R_P}(s) = R_P\,I_{CP}(s)$.
- The capacitor voltage is its charge divided by $C_P$: $V_{C_P}(t) = \dfrac{1}{C_P}\displaystyle\int_0^t I_{CP}\,dt'$. Integration becomes division by $s$, so $V_{C_P}(s) = \dfrac{I_{CP}(s)}{C_Ps}$.

Adding:

$$V_{cont}(s) = I_{CP}(s)\left(R_P + \frac{1}{C_Ps}\right) = I_{CP}(s)\,Z(s), \qquad Z(s) = R_P + \frac{1}{C_Ps}.$$

$Z(s)$ is simply the impedance of the series $R_P$–$C_P$ branch.

### Step 4 — Combine the two parts

Substitute $I_{CP}(s) = (I_P/2\pi)\,\Delta\phi(s)$:

$$V_{cont}(s) = \frac{I_P}{2\pi}\,\Delta\phi(s)\left(R_P + \frac{1}{C_Ps}\right),$$

and divide by $\Delta\phi(s)$:

$$\boxed{\frac{V_{cont}}{\Delta\phi}(s) = \frac{I_P}{2\pi}\left(R_P + \frac{1}{C_Ps}\right)}$$

Writing it over a common denominator shows the pole and the zero:

$$\frac{V_{cont}}{\Delta\phi}(s) = \frac{I_P}{2\pi C_P}\cdot\frac{R_PC_Ps + 1}{s}.$$

- The pole at the origin comes from $C_P$, which integrates the charge: a constant phase error makes $V_{cont}$ grow without limit.
- The zero at $s = -1/(R_PC_P)$ comes from $R_P$, which adds a term proportional to the present phase error. In the PLL this zero provides the damping.

### Step 5 — Time-domain check with a phase step

Apply a phase step $\Delta\phi(t) = \phi_0u(t)$ (with the loop opened, so $\Delta\phi$ stays at $\phi_0$).

**Cycle by cycle.** In every cycle the pump injects $I_P$ for $\Delta T = \phi_0T_{in}/2\pi$.

- During the pulse the resistor voltage jumps by $I_PR_P$; between pulses it is zero. Its average is
$$\overline{V_{R_P}} = I_PR_P\,\frac{\Delta T}{T_{in}} = \frac{I_P\phi_0}{2\pi}\,R_P .$$
- The capacitor voltage rises by $I_P\Delta T/C_P = I_P\phi_0T_{in}/(2\pi C_P)$ per cycle and holds between pulses: a staircase whose average slope is
$$\frac{I_P\phi_0T_{in}/(2\pi C_P)}{T_{in}} = \frac{I_P\phi_0}{2\pi C_P}\ \text{per second}.$$

So the averaged control voltage is a step plus a ramp:

$$V_{cont}(t) = \frac{I_P\phi_0}{2\pi}\left(R_P + \frac{t}{C_P}\right),\qquad t \ge 0 .$$

**From the transfer function.** With $\Delta\phi(s) = \phi_0/s$:

$$
\begin{aligned}
V_{cont}(s) &= \frac{I_P}{2\pi}\left(R_P + \frac{1}{C_Ps}\right)\frac{\phi_0}{s} = \frac{I_P\phi_0}{2\pi}\left(\frac{R_P}{s} + \frac{1}{C_Ps^2}\right)\\
V_{cont}(t) &= \frac{I_P\phi_0}{2\pi}\left(R_P + \frac{t}{C_P}\right)u(t),
\end{aligned}
$$

using $\mathcal{L}^{-1}\{1/s\} = u(t)$ and $\mathcal{L}^{-1}\{1/s^2\} = t\,u(t)$. The two agree. Differentiating the step response gives the impulse response $h(t) = \frac{I_P}{2\pi}\left[R_P\,\delta(t) + u(t)/C_P\right]$, whose Laplace transform is again the stated result.

**Limits of the approximation.** The model replaces discrete pulses by their average, so it holds only when the loop bandwidth is well below the input frequency (roughly a factor of 10 or more). It also ignores the short reset pulses, during which both sources are on and (if matched) cancel.

### Result

The PFD/charge pump delivers an average current $\overline{I_{CP}} = I_P\Delta\phi/2\pi$ (pulses of width $\Delta\phi\,T_{in}/2\pi$ per period), and the series $R_P$–$C_P$ branch converts it into a voltage through its impedance $R_P + 1/(C_Ps)$. Therefore

$$\frac{V_{cont}}{\Delta\phi}(s) = \frac{I_P}{2\pi}\left(R_P + \frac{1}{C_Ps}\right) = \frac{I_P}{2\pi C_P}\cdot\frac{R_PC_Ps + 1}{s},$$

with a pole at the origin (the integrating capacitor) and a zero at $-1/(R_PC_P)$ (the proportional path through $R_P$).

**Common mistake.** Treating $R_P$ and $C_P$ as if they were in parallel, which gives $Z = R_P/(1 + R_PC_Ps)$, a low-pass filter with no integrator. In the figure they are in series between the pump output and ground, so their impedances add.

**Common mistake.** Dropping the $2\pi$ or writing $\overline{I_{CP}} = I_P\Delta\phi$. The pump is on for the fraction $\Delta\phi/2\pi$ of each period, because a full period corresponds to $2\pi$ rad, not to 1 rad.

**Common mistake.** Claiming that $V_{cont}$ is simply proportional to $\Delta\phi$. Because $C_P$ accumulates charge every cycle, a constant phase error makes $V_{cont}$ ramp indefinitely: the transfer function must contain $1/s$.
