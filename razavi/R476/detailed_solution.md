# Detailed solution - R476

**Approach.** In unity-gain feedback ($\beta = 1$) the loop gain is the amplifier's own two-pole transfer function. We find the gain-crossover frequency by setting the loop-gain magnitude equal to 1, evaluate the phase there, and take the phase margin as the distance of that phase from $-180°$.

### Step 1 — Loop gain in normalized form

The amplifier has $A_0 = 1000$ and poles at $\omega_{p1}$ and $\omega_{p2} = 2\omega_{p1}$:

$$H(j\omega) = \frac{A_0}{\left(1 + j\dfrac{\omega}{\omega_{p1}}\right)\left(1 + j\dfrac{\omega}{\omega_{p2}}\right)}.$$

In a unity-gain loop the whole output is fed back, so the feedback factor is $\beta = 1$ and the loop gain is $\beta H = H$.

Normalize the frequency to the first pole, $x = \omega/\omega_{p1}$. Then $\omega/\omega_{p2} = x/2$, and

$$
\begin{aligned}
|H| &= \frac{1000}{\sqrt{1 + x^2}\,\sqrt{1 + x^2/4}},\\
\angle H &= -\tan^{-1}x - \tan^{-1}\frac{x}{2}.
\end{aligned}
$$

Only the *ratio* of the pole frequencies enters, so the actual value $\omega_{p1} = 1$ MHz (whether read as an angular or an ordinary frequency) affects only the scale of the answer, not the phase margin.

### Step 2 — Gain-crossover frequency

The *gain-crossover frequency* $\omega_u$ is where $|H| = 1$. Square the magnitude condition:

$$(1 + x^2)\left(1 + \frac{x^2}{4}\right) = 1000^2 = 10^6 .$$

Let $u = x^2$ and expand:

$$
\begin{aligned}
1 + \frac{u}{4} + u + \frac{u^2}{4} &= 10^6\\
\frac{u^2}{4} + \frac{5u}{4} + 1 - 10^6 &= 0\\
u^2 + 5u + 4 - 4\times10^6 &= 0 .
\end{aligned}
$$

Quadratic formula (positive root, since $u = x^2 > 0$):

$$u = \frac{-5 + \sqrt{25 - 4(4 - 4\times10^6)}}{2} = \frac{-5 + \sqrt{16\,000\,009}}{2} = \frac{-5 + 4000.001}{2} = 1997.5 .$$

Therefore

$$x_u = \sqrt{1997.5} = 44.69, \qquad \omega_u \approx 44.7\,\omega_{p1}.$$

**Quick estimate.** Both poles lie far below the crossover ($x \gg 1$ and $x/2 \gg 1$), so $\sqrt{1 + x^2} \approx x$ and $\sqrt{1 + x^2/4} \approx x/2$. Then $|H| \approx 1000/(x\cdot x/2) = 2000/x^2 = 1$, i.e. $x_u \approx \sqrt{2000} = 44.72$, essentially the exact value.

**Bode-plot picture.** The magnitude is flat at 1000 (60 dB) up to $\omega_{p1}$, falls at $-20$ dB/decade between the poles, and at $-40$ dB/decade above $\omega_{p2}$. With 60 dB to lose and the poles only a factor of 2 apart, the crossover lands deep in the $-40$ dB/decade region.

### Step 3 — Phase at the crossover

Evaluate each pole's phase contribution at $x_u = 44.69$:

$$
\begin{aligned}
\tan^{-1}(44.69) &= 88.72°,\\
\tan^{-1}\left(\frac{44.69}{2}\right) = \tan^{-1}(22.35) &= 87.44°,\\
\angle H(j\omega_u) &= -(88.72° + 87.44°) = -176.16° .
\end{aligned}
$$

Both poles are so far below the crossover that each has contributed almost its full 90°.

### Step 4 — Phase margin

The *phase margin* is the distance of the loop phase at $\omega_u$ from $-180°$:

$$\mathrm{PM} = 180° + \angle H(j\omega_u) = 180° - 176.16° = 3.84° .$$

**Check with a small-angle approximation.** For large arguments, $\tan^{-1}z \approx 90° - 1/z$ (in radians). The two "missing" phases are then $1/x_u$ and $2/x_u$:

$$\mathrm{PM} \approx \frac{1}{x_u} + \frac{2}{x_u} = \frac{3}{44.69}\ \mathrm{rad} = 0.0671\ \mathrm{rad} = 3.85° .\ \checkmark$$

**Interpretation.** A phase margin of only about 4° means the loop is barely stable. The closed-loop step response would ring for many cycles, and the closed-loop frequency response has a large peak near $\omega_u$ (roughly $1/(2\sin(\mathrm{PM}/2)) \approx 15$ times the low-frequency gain). Such an amplifier must be compensated before it is used with unity feedback.

### Result

$$\omega_u \approx 44.7\,\omega_{p1}\ (\approx 44.7\ \mathrm{MHz}), \qquad \angle H(j\omega_u) \approx -176.2°, \qquad \mathrm{PM} \approx 3.8° .$$

The loop is stable, but only barely.

**Common mistake.** Placing the crossover at $A_0\,\omega_{p1} = 1000\,\omega_{p1}$, as for a single-pole amplifier. That ignores the extra magnitude drop caused by the second pole. At $1000\,\omega_{p1}$ the loop gain is actually only about 0.002, and the phase there would give PM ≈ 0.2°, a meaningless number for this circuit.

**Common mistake.** Assuming the crossover lies near or below the second pole (for example at $\omega_{p2}$, where each pole contributes less than 90°), which gives a phase margin of tens of degrees. With 60 dB of low-frequency gain and only a factor of 2 between the poles, the gain is still about 316 at $\omega_{p2}$, so the crossover must be much higher.

**Common mistake.** Getting the sign of the margin wrong and reporting a negative PM. For two real left-half-plane poles the total phase can approach but never reach $-180°$, so the phase margin of this loop is always positive, however small.
