# Detailed solution - R477

**Approach.** In unity-gain feedback ($\beta = 1$) the loop gain is the amplifier's two-pole transfer function. Set the loop-gain magnitude to 1 to find the gain-crossover frequency, evaluate the phase there, and take the phase margin as the distance of that phase from $-180°$.

### Step 1 — Loop gain in normalized form

The amplifier has $A_0 = 1000$ and poles at $\omega_{p1}$ and $\omega_{p2} = 4\omega_{p1}$:

$$H(j\omega) = \frac{A_0}{\left(1 + j\dfrac{\omega}{\omega_{p1}}\right)\left(1 + j\dfrac{\omega}{\omega_{p2}}\right)}.$$

With unity feedback the feedback factor is $\beta = 1$, so the loop gain is $\beta H = H$.

Normalize the frequency to the first pole, $x = \omega/\omega_{p1}$. Then $\omega/\omega_{p2} = x/4$, and

$$
\begin{aligned}
|H| &= \frac{1000}{\sqrt{1 + x^2}\,\sqrt{1 + x^2/16}},\\
\angle H &= -\tan^{-1}x - \tan^{-1}\frac{x}{4}.
\end{aligned}
$$

Only the ratio $\omega_{p2}/\omega_{p1} = 4$ matters; the value $\omega_{p1} = 1$ MHz merely sets the frequency scale.

### Step 2 — Gain-crossover frequency

At the *gain-crossover frequency* $\omega_u$, $|H| = 1$. Squaring:

$$(1 + x^2)\left(1 + \frac{x^2}{16}\right) = 10^6 .$$

Let $u = x^2$ and expand:

$$
\begin{aligned}
1 + \frac{u}{16} + u + \frac{u^2}{16} &= 10^6\\
\frac{u^2}{16} + \frac{17u}{16} + 1 - 10^6 &= 0\\
u^2 + 17u + 16 - 16\times10^6 &= 0 .
\end{aligned}
$$

Quadratic formula, positive root:

$$u = \frac{-17 + \sqrt{17^2 - 4(16 - 16\times10^6)}}{2} = \frac{-17 + \sqrt{64\,000\,225}}{2} = \frac{-17 + 8000.014}{2} = 3991.5 .$$

Therefore

$$x_u = \sqrt{3991.5} = 63.18, \qquad \omega_u \approx 63.2\,\omega_{p1}.$$

**Quick estimate.** Both poles lie far below the crossover, so $\sqrt{1 + x^2} \approx x$ and $\sqrt{1 + x^2/16} \approx x/4$: $|H| \approx 1000/(x\cdot x/4) = 4000/x^2 = 1$, giving $x_u \approx \sqrt{4000} = 63.25$, within 0.1 % of the exact value.

### Step 3 — Phase at the crossover

$$
\begin{aligned}
\tan^{-1}(63.18) &= 89.09°,\\
\tan^{-1}\left(\frac{63.18}{4}\right) = \tan^{-1}(15.79) &= 86.38°,\\
\angle H(j\omega_u) &= -(89.09° + 86.38°) = -175.47° .
\end{aligned}
$$

### Step 4 — Phase margin

The *phase margin* is the distance of the loop phase at $\omega_u$ from $-180°$:

$$\mathrm{PM} = 180° + \angle H(j\omega_u) = 180° - 175.47° = 4.53° .$$

**Check with a small-angle approximation.** For large $z$, $\tan^{-1}z \approx 90° - 1/z$ (radians), so the two "missing" phases are $1/x_u$ and $4/x_u$:

$$\mathrm{PM} \approx \frac{1 + 4}{x_u} = \frac{5}{63.18}\ \mathrm{rad} = 0.0791\ \mathrm{rad} = 4.53° .\ \checkmark$$

### Step 5 — Why moving the second pole helps so little

The approximations of Steps 2 and 4 give, for a pole ratio $k = \omega_{p2}/\omega_{p1}$ and $A_0 \gg k$:

$$x_u \approx \sqrt{kA_0}, \qquad \mathrm{PM} \approx \frac{1 + k}{\sqrt{kA_0}}\ \mathrm{rad}.$$

| $k$ | $x_u$ | PM |
|---|---|---|
| 2 | 44.7 | 3.8° |
| 4 | 63.2 | 4.5° |

Doubling the pole spacing pushes the crossover up by only $\sqrt2$ while the second pole moves up by 2, so the phase margin improves only slightly. As long as $A_0 = 1000$ puts the crossover far above *both* poles, the loop phase is close to $-180°$. To get a healthy margin (for example 60°), the second pole must lie *above* the crossover, which requires either a much larger pole separation or a much smaller loop gain; this is what frequency compensation achieves.

### Result

$$\omega_u \approx 63.2\,\omega_{p1}\ (\approx 63.2\ \mathrm{MHz}), \qquad \angle H(j\omega_u) \approx -175.5°, \qquad \mathrm{PM} \approx 4.5° .$$

The loop is stable but very poorly damped.

**Common mistake.** Taking the crossover at $A_0\,\omega_{p1} = 1000\,\omega_{p1}$, as for a one-pole amplifier. That ignores the extra roll-off of the second pole: at $1000\,\omega_{p1}$ the loop gain is only about 0.004. The phase there gives a meaningless PM of about 0.3°.

**Common mistake.** Placing the crossover at or below the second pole and reporting a margin of tens of degrees. At $\omega_{p2} = 4\omega_{p1}$ the loop gain is still $1000/(\sqrt{17}\,\sqrt2) \approx 171$, far above 1.

**Common mistake.** Expecting a large improvement from moving $\omega_{p2}$ from $2\omega_{p1}$ to $4\omega_{p1}$. The phase margin only goes from about 3.8° to about 4.5°, because both poles are still far below the crossover.
