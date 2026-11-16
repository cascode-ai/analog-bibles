# Detailed solution - R529

**Approach.** Model $\beta H$ with a dominant pole $\omega_{p1}$ (far below the crossover, contributing −90°) and the output pole $\omega_{p2}$. The 45° design fixes $\omega_T = \beta A_0\omega_{p1}$ relative to $\omega_{p2}$. Doubling $C_L$ halves $\omega_{p2}$ but leaves the dominant pole and $\omega_T$ unchanged; find the new crossover and the phase there.

### Step 1 — Loop-gain model and what $C_L$ affects

$$\beta H(s) = \frac{\beta A_0}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_{p2}}\right)} .$$

In a Miller-compensated two-stage op amp the output pole is $\omega_{p2} \approx g_{m2}/C_L$ (with $C_L$ dominating the output-node capacitance), so doubling $C_L$ **halves** $\omega_{p2}$. The dominant pole, set at the first-stage output by the Miller-multiplied $C_C$, does not depend on $C_L$, and neither do $A_0$ and $\beta$; so $\omega_T \equiv \beta A_0\omega_{p1}$, where the single-pole asymptote of $|\beta H|$ reaches 1, is unchanged. Well above $\omega_{p1}$,

$$|\beta H(j\omega)| \approx \frac{\omega_T}{\omega\sqrt{1 + (\omega/\omega_{p2})^2}},\qquad \angle\beta H(j\omega) \approx -90^\circ - \tan^{-1}\frac{\omega}{\omega_{p2}} ,$$

and $\mathrm{PM} = 180^\circ + \angle\beta H$ at the crossover $\omega_c$, where $|\beta H| = 1$.

### Step 2 — The original 45° design

With the crossover at $\omega_c = \omega_{p2}$:

$$\angle\beta H(j\omega_{p2}) = -90^\circ - \tan^{-1}1 = -135^\circ \quad\Longrightarrow\quad \mathrm{PM} = 45^\circ. \ \checkmark$$

The magnitude condition fixes $\omega_T$:

$$|\beta H(j\omega_{p2})| = \frac{\omega_T}{\omega_{p2}\sqrt{1 + 1}} = 1 \quad\Longrightarrow\quad \omega_T = \sqrt2\,\omega_{p2} .$$

### Step 3 — After doubling $C_L$: a quick upper bound on the damage

The new output pole is $\omega'_{p2} = \omega_{p2}/2$. If the crossover stayed at the old $\omega_{p2}$, the phase there would be

$$-90^\circ - \tan^{-1}\frac{\omega_{p2}}{\omega_{p2}/2} = -90^\circ - \tan^{-1}2 = -90^\circ - 63.4^\circ = -153.4^\circ,$$

giving $\mathrm{PM} \approx 26.6^\circ$, a loss of about 18°. This overestimates the loss: the lower pole also **reduces the magnitude**, to $|\beta H| = \sqrt2/\sqrt{1 + 2^2} = \sqrt2/\sqrt5 = 0.63$ at $\omega_{p2}$, so the crossover moves down, where the phase lag is smaller.

### Step 4 — New crossover frequency

With $\omega_T = \sqrt2\,\omega_{p2}$, the new pole $\omega_{p2}/2$ and $x = \omega_c/\omega_{p2}$:

$$\frac{\sqrt2\,\omega_{p2}}{\omega_c\sqrt{1 + \left(\dfrac{2\omega_c}{\omega_{p2}}\right)^2}} = 1 \quad\Longrightarrow\quad x\sqrt{1 + 4x^2} = \sqrt2
\quad\Longrightarrow\quad 4x^4 + x^2 - 2 = 0 .$$

The positive root of this quadratic in $x^2$ is

$$x^2 = \frac{-1 + \sqrt{1 + 32}}{8} = \frac{-1 + 5.745}{8} = 0.593,\qquad x = 0.770 .$$

So $\omega_c \approx 0.77\,\omega_{p2}$. Check: $0.770\sqrt{1 + 4(0.593)} = 0.770\times1.837 = 1.414 = \sqrt2$. ✓

### Step 5 — New phase margin

Against the **new** pole $\omega_{p2}/2$:

$$\angle\beta H(j\omega_c) = -90^\circ - \tan^{-1}\frac{0.770\,\omega_{p2}}{\omega_{p2}/2} = -90^\circ - \tan^{-1}1.540 = -90^\circ - 57.0^\circ = -147.0^\circ ,$$

$$\mathrm{PM}_{new} = 180^\circ - 147.0^\circ \approx 33^\circ .$$

**Degradation:** $45^\circ - 33^\circ \approx 12^\circ$.

| | output pole | crossover $\omega_c$ | PM |
|---|---|---|---|
| original | $\omega_{p2}$ | $\omega_{p2}$ | 45° |
| $C_L$ doubled (exact two-pole) | $\omega_{p2}/2$ | $0.77\,\omega_{p2}$ | ≈ 33° |
| $C_L$ doubled (crossover kept at $\omega_{p2}$) | $\omega_{p2}/2$ | $\omega_{p2}$ (assumed) | ≈ 26.6° |

If "$|\beta H|$ drops to unity at $\omega_{p2}$" is read on the straight-line asymptote ($\omega_T = \omega_{p2}$), the same method gives an original PM of 51.8° and a new PM of 38.7°: again a loss of about 13°. Every self-consistent reading gives a degradation of roughly 12–13° (or 18° with the cruder fixed-crossover estimate).

### Result

Doubling $C_L$ halves the output pole ($\omega_{p2} \approx g_{m2}/C_L$), while the dominant pole and the gain asymptote $\omega_T/\omega$ ($\omega_T = \beta A_0\omega_{p1} = \sqrt2\,\omega_{p2}$) stay the same. The crossover moves down to $\omega_c \approx 0.77\,\omega_{p2}$, where the phase is $-90^\circ - \tan^{-1}(1.54) \approx -147^\circ$. So

$$\mathrm{PM}: 45^\circ \rightarrow \approx 33^\circ,\quad \text{a degradation of about } 12^\circ .$$

A quicker estimate that keeps the crossover at the old $\omega_{p2}$ gives $\mathrm{PM} = 90^\circ - \tan^{-1}2 \approx 26.6^\circ$ (≈ 18° loss), which overstates the damage because the lowered pole also pulls the crossover down.

**Common mistake.** Assuming the dominant pole moves with $C_L$ as well, so that the PM stays at 45°. With Miller compensation the dominant pole is set by $C_C$ at the first-stage output; only the output pole scales with $1/C_L$.

**Common mistake.** Moving the output pole the wrong way. A larger load capacitance makes the output node *slower*, so $\omega_{p2}$ is halved, not doubled.

**Common mistake.** Claiming that the loop becomes unstable. The two-pole loop's phase never reaches −180°, so the PM stays positive (≈ 33°); the response just rings more.
