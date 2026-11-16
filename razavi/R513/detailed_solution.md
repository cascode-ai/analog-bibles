# Detailed solution - R513

**Approach.** With $H(s) = A_0/[(1 + s/\omega_{p1})(1 + s/\omega_{p2})]$, the phase margin depends only on where the gain crossover $\omega_u$ falls relative to $\omega_{p2}$. Use the 60° design at $\beta = 1$ to find $A_0\omega_{p1}$ in units of $\omega_{p2}$, then find the new crossover with $\beta_1$ and the new phase margin.

### Step 1 — Loop gain of the two-pole model

The crossover lies far above the dominant pole ($\omega \gg \omega_{p1}$, true whenever $\beta A_0 \gg 1$), so $|1 + j\omega/\omega_{p1}| \approx \omega/\omega_{p1}$, the dominant pole contributes almost exactly $-90^\circ$, and

$$|\beta H(j\omega)| \approx \frac{\beta A_0\,\omega_{p1}}{\omega\sqrt{1 + (\omega/\omega_{p2})^2}} ,\qquad \angle\beta H(j\omega) \approx -90^\circ - \tan^{-1}\frac{\omega}{\omega_{p2}} .$$

At the crossover $\omega_u$, where $|\beta H| = 1$,

$$\mathrm{PM} = 180^\circ + \angle\beta H(j\omega_u) = 90^\circ - \tan^{-1}\frac{\omega_u}{\omega_{p2}} .$$

$\beta$ does not enter the phase; it only moves $\omega_u$.

### Step 2 — Use the 60° design at $\beta = 1$

$$90^\circ - \tan^{-1}\frac{\omega_{u1}}{\omega_{p2}} = 60^\circ
\quad\Longrightarrow\quad
\frac{\omega_{u1}}{\omega_{p2}} = \tan30^\circ = \frac{1}{\sqrt3} = 0.577 .$$

The magnitude condition $|H(j\omega_{u1})| = 1$ then fixes $A_0\omega_{p1}$:

$$\frac{A_0\,\omega_{p1}}{\omega_{u1}\sqrt{1 + (\omega_{u1}/\omega_{p2})^2}} = 1
\quad\Longrightarrow\quad
A_0\,\omega_{p1} = \omega_{u1}\sqrt{1 + \tfrac13} = \frac{\omega_{p2}}{\sqrt3}\cdot\frac{2}{\sqrt3} = \frac23\,\omega_{p2}.$$

This gain–bandwidth product is a property of the op amp alone and does not change with $\beta$.

### Step 3 — New crossover frequency with $\beta = \beta_1$

The crossover now satisfies

$$\frac{\beta_1A_0\,\omega_{p1}}{\omega_u\sqrt{1 + (\omega_u/\omega_{p2})^2}} = 1 .$$

Substituting $A_0\omega_{p1} = \tfrac23\omega_{p2}$, with the normalized crossover $x = \omega_u/\omega_{p2}$:

$$x\sqrt{1 + x^2} = \frac{2\beta_1}{3}
\quad\Longrightarrow\quad
x^2(1 + x^2) = \frac{4\beta_1^2}{9}
\quad\Longrightarrow\quad
x^4 + x^2 - \frac{4\beta_1^2}{9} = 0 .$$

Keeping the positive root of this quadratic in $x^2$:

$$x^2 = \frac{-1 + \sqrt{1 + 16\beta_1^2/9}}{2}
\quad\Longrightarrow\quad
x = \sqrt{\frac{\sqrt{1 + 16\beta_1^2/9} - 1}{2}} .$$

Check with $\beta_1 = 1$: $\sqrt{1 + 16/9} = 5/3$, so $x^2 = (5/3 - 1)/2 = 1/3$ and $x = 1/\sqrt3$, as in Step 2. ✓

### Step 4 — New phase margin

$$\boxed{\mathrm{PM}(\beta_1) = 90^\circ - \tan^{-1}x,\qquad x = \sqrt{\frac{\sqrt{1 + 16\beta_1^2/9} - 1}{2}}}$$

**Example, $\beta_1 = 0.5$:**

$$
\begin{aligned}
\frac{16\beta_1^2}{9} &= \frac{16\times0.25}{9} = 0.444,\\
\sqrt{1.444} &= 1.2019,\\
x^2 &= \frac{1.2019 - 1}{2} = 0.1009, \qquad x = 0.318,\\
\mathrm{PM} &= 90^\circ - \tan^{-1}0.318 = 90^\circ - 17.6^\circ = 72.4^\circ .
\end{aligned}
$$

**Example, $\beta_1 = 0.25$:**

$$
\begin{aligned}
\frac{16\beta_1^2}{9} &= \frac{16\times0.0625}{9} = 0.111,\\
\sqrt{1.111} &= 1.0541,\\
x^2 &= \frac{1.0541 - 1}{2} = 0.0270, \qquad x = 0.164,\\
\mathrm{PM} &= 90^\circ - \tan^{-1}0.164 = 90^\circ - 9.3^\circ = 80.7^\circ .
\end{aligned}
$$

| $\beta_1$ | $x = \omega_u/\omega_{p2}$ | PM (two-pole) | PM $\approx 90^\circ - \tan^{-1}(\beta_1/\sqrt3)$ |
|---|---|---|---|
| 1 | 0.577 | 60.0° | 60.0° |
| 0.75 | 0.455 | 65.5° | 66.6° |
| 0.5 | 0.318 | 72.4° | 73.9° |
| 0.25 | 0.164 | 80.7° | 81.8° |
| 0.1 | 0.067 | 86.2° | 86.7° |

### Step 5 — A simpler approximation and the physical picture

Ignoring the second pole's effect on the **magnitude** (a factor $\sqrt{1 + x^2}$, only 1.15 at $\beta = 1$), the crossover is proportional to $\beta$:

$$\omega_u \approx \beta_1A_0\omega_{p1}\quad\text{and}\quad\omega_{u1} \approx A_0\omega_{p1}\ \ \Longrightarrow\ \ \omega_u \approx \beta_1\,\omega_{u1} = \frac{\beta_1}{\sqrt3}\,\omega_{p2},$$

with $\omega_{u1} = \omega_{p2}/\sqrt3$ from the 60° condition. Then

$$\mathrm{PM} \approx 90^\circ - \tan^{-1}\frac{\beta_1}{\sqrt3},$$

which gives 73.9° for $\beta_1 = 0.5$ and 81.8° for $\beta_1 = 0.25$, within 1.5° of the two-pole result (last column of the table).

Lowering $\beta$ scales the loop-gain magnitude down without changing its phase, so the crossover moves down, where $\omega_{p2}$ adds less lag; as $\beta_1 \to 0$ the PM approaches 90°. An amplifier compensated for unity feedback (the worst case) is therefore stable, with more margin, for any $\beta < 1$. The analysis requires $\beta_1A_0 \gg 1$, so that the dominant pole still contributes ≈ 90° at the crossover.

### Result

$$\mathrm{PM}(\beta_1) = 90^\circ - \tan^{-1}x,\qquad x = \frac{\omega_u}{\omega_{p2}} \text{ solving } x\sqrt{1 + x^2} = \frac{2\beta_1}{3},\ \text{ i.e. } x = \sqrt{\frac{\sqrt{1 + 16\beta_1^2/9} - 1}{2}} .$$

The phase margin **increases** toward 90° as $\beta_1$ decreases, e.g. ≈ 72° for $\beta_1 = 0.5$ and ≈ 81° for $\beta_1 = 0.25$. Neglecting the second pole's effect on the magnitude gives the simpler estimate $\mathrm{PM} \approx 90^\circ - \tan^{-1}(\beta_1/\sqrt3)$ (≈ 74° and ≈ 82°).

**Common mistake.** Concluding that the phase margin gets worse (or stays the same) with smaller $\beta$. The phase of $\beta H$ does not depend on $\beta$; only the crossover moves, and it moves *down*, away from $\omega_{p2}$.

**Common mistake.** Scaling the phase margin itself with $\beta$, e.g. PM = 60°/$\beta_1$. First find the new crossover from the magnitude condition, then evaluate the phase there.

**Common mistake.** Taking the 60° condition as $\omega_{u1} = \omega_{p2}$. It fixes $\omega_{u1}/\omega_{p2} = \tan30^\circ$; $\omega_{u1} = \omega_{p2}$ would mean a 45° phase margin.
