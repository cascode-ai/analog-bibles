# Detailed solution - R476

**Approach.** With $\beta = 1$ the loop gain is the amplifier's own two-pole transfer function. Set its magnitude equal to 1 to find the gain crossover, evaluate the phase there, and take the phase margin as the distance of that phase from $-180°$.

### Step 1 — Loop gain in normalized form

With $\beta = 1$, $A_0 = 1000$ and $\omega_{p2} = 2\omega_{p1}$, the loop gain is

$$H(j\omega) = \frac{A_0}{\left(1 + j\dfrac{\omega}{\omega_{p1}}\right)\left(1 + j\dfrac{\omega}{\omega_{p2}}\right)}.$$

With $x = \omega/\omega_{p1}$, so that $\omega/\omega_{p2} = x/2$:

$$
\begin{aligned}
|H| &= \frac{1000}{\sqrt{1 + x^2}\,\sqrt{1 + x^2/4}},\\
\angle H &= -\tan^{-1}x - \tan^{-1}\frac{x}{2}.
\end{aligned}
$$

Only the *ratio* of the pole frequencies enters, so the value $\omega_{p1} = 1$ MHz (whether read as an angular or an ordinary frequency) sets only the frequency scale, not the phase margin.

### Step 2 — Gain-crossover frequency

Square the condition $|H| = 1$:

$$(1 + x^2)\left(1 + \frac{x^2}{4}\right) = 1000^2 = 10^6 .$$

With $u = x^2$:

$$
\begin{aligned}
1 + \frac{u}{4} + u + \frac{u^2}{4} &= 10^6\\
\frac{u^2}{4} + \frac{5u}{4} + 1 - 10^6 &= 0\\
u^2 + 5u + 4 - 4\times10^6 &= 0 .
\end{aligned}
$$

The positive root is

$$u = \frac{-5 + \sqrt{25 - 4(4 - 4\times10^6)}}{2} = \frac{-5 + \sqrt{16\,000\,009}}{2} = \frac{-5 + 4000.001}{2} = 1997.5 ,$$

so

$$x_u = \sqrt{1997.5} = 44.69, \qquad \omega_u \approx 44.7\,\omega_{p1}.$$

**Quick estimate.** Both poles lie far below the crossover ($x \gg 1$ and $x/2 \gg 1$), so $\sqrt{1 + x^2} \approx x$ and $\sqrt{1 + x^2/4} \approx x/2$. Then $|H| \approx 1000/(x\cdot x/2) = 2000/x^2 = 1$, i.e. $x_u \approx \sqrt{2000} = 44.72$, essentially the exact value. With 60 dB of gain to lose and the poles only a factor of 2 apart, the crossover lands deep in the $-40$ dB/decade region.

### Step 3 — Phase at the crossover

At $x_u = 44.69$:

$$
\begin{aligned}
\tan^{-1}(44.69) &= 88.72°,\\
\tan^{-1}\left(\frac{44.69}{2}\right) = \tan^{-1}(22.35) &= 87.44°,\\
\angle H(j\omega_u) &= -(88.72° + 87.44°) = -176.16° .
\end{aligned}
$$

Each pole has contributed almost its full 90°.

### Step 4 — Phase margin

$$\mathrm{PM} = 180° + \angle H(j\omega_u) = 180° - 176.16° = 3.84° .$$

**Check.** For large arguments, $\tan^{-1}z \approx 90° - 1/z$ (in radians), so the two "missing" phases are $1/x_u$ and $2/x_u$:

$$\mathrm{PM} \approx \frac{1}{x_u} + \frac{2}{x_u} = \frac{3}{44.69}\ \mathrm{rad} = 0.0671\ \mathrm{rad} = 3.85° .\ \checkmark$$

A margin of about 4° means the loop is barely stable: the step response rings for many cycles, and the closed-loop response peaks near $\omega_u$ at roughly $1/(2\sin(\mathrm{PM}/2)) \approx 15$ times the low-frequency gain. The amplifier must be compensated before it is used with unity feedback.

### Result

$$\omega_u \approx 44.7\,\omega_{p1}\ (\approx 44.7\ \mathrm{MHz}), \qquad \angle H(j\omega_u) \approx -176.2°, \qquad \mathrm{PM} \approx 3.8° .$$

The loop is stable, but only barely.

**Common mistake.** Placing the crossover at $A_0\,\omega_{p1} = 1000\,\omega_{p1}$, as for a single-pole amplifier, which ignores the extra magnitude drop caused by the second pole. At $1000\,\omega_{p1}$ the loop gain is only about 0.002, and the phase there would give PM ≈ 0.2°, a meaningless number for this circuit.

**Common mistake.** Assuming the crossover lies near or below the second pole (for example at $\omega_{p2}$, where each pole contributes less than 90°), which gives a phase margin of tens of degrees. With 60 dB of low-frequency gain and only a factor of 2 between the poles, the gain is still about 316 at $\omega_{p2}$, so the crossover must be much higher.

**Common mistake.** Reporting a negative PM. For two real left-half-plane poles the total phase approaches but never reaches $-180°$, so the phase margin of this loop is always positive, however small.
