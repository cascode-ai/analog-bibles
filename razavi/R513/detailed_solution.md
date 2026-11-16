# Detailed solution - R513

**Approach.** Model the loop gain as $\beta H(s)$ with $H(s) = A_0/[(1 + s/\omega_{p1})(1 + s/\omega_{p2})]$. The phase margin depends only on where the gain-crossover frequency $\omega_u$ falls relative to $\omega_{p2}$. First use the given 60° (at $\beta = 1$) to find the op amp's "gain–bandwidth" $A_0\omega_{p1}$ in units of $\omega_{p2}$. Then find the new crossover with $\beta_1$ and compute the new phase margin.

### Step 1 — Loop gain of the two-pole model

The compensated op amp has a dominant pole $\omega_{p1}$, a nondominant pole $\omega_{p2}$ and DC gain $A_0$:

$$H(s) = \frac{A_0}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_{p2}}\right)} .$$

With feedback factor $\beta$ (the fraction of the output fed back to the input), the loop gain is $\beta H(s)$.

**Magnitude.** The crossover lies far above the dominant pole ($\omega \gg \omega_{p1}$, true whenever $\beta A_0 \gg 1$), so $|1 + j\omega/\omega_{p1}| \approx \omega/\omega_{p1}$ and

$$|\beta H(j\omega)| \approx \frac{\beta A_0\,\omega_{p1}}{\omega\sqrt{1 + (\omega/\omega_{p2})^2}} .$$

**Phase.** Each pole contributes $-\tan^{-1}(\omega/\omega_p)$. In the same range the dominant pole contributes almost exactly $-90^\circ$:

$$\angle\beta H(j\omega) \approx -90^\circ - \tan^{-1}\frac{\omega}{\omega_{p2}} .$$

**Phase margin** (PM), the distance from $-180^\circ$ at the gain-crossover frequency $\omega_u$ where $|\beta H| = 1$:

$$\mathrm{PM} = 180^\circ + \angle\beta H(j\omega_u) = 90^\circ - \tan^{-1}\frac{\omega_u}{\omega_{p2}} .$$

Note that $\beta$ does not enter the phase at all. It only moves the crossover frequency $\omega_u$, so everything hinges on how $\omega_u$ changes.

### Step 2 — Use the 60° design at $\beta = 1$

With $\beta = 1$ and PM = 60°:

$$90^\circ - \tan^{-1}\frac{\omega_{u1}}{\omega_{p2}} = 60^\circ
\quad\Longrightarrow\quad
\frac{\omega_{u1}}{\omega_{p2}} = \tan30^\circ = \frac{1}{\sqrt3} = 0.577 .$$

The magnitude condition $|H(j\omega_{u1})| = 1$ then fixes $A_0\omega_{p1}$:

$$\frac{A_0\,\omega_{p1}}{\omega_{u1}\sqrt{1 + (\omega_{u1}/\omega_{p2})^2}} = 1
\quad\Longrightarrow\quad
A_0\,\omega_{p1} = \omega_{u1}\sqrt{1 + \tfrac13} = \frac{\omega_{p2}}{\sqrt3}\cdot\frac{2}{\sqrt3} = \frac23\,\omega_{p2}.$$

This is the "unity-gain bandwidth" of the compensated op amp expressed in terms of its second pole. It is a property of the op amp alone and stays the same when $\beta$ changes.

### Step 3 — New crossover frequency with $\beta = \beta_1$

The crossover now satisfies $|\beta_1 H(j\omega_u)| = 1$:

$$\frac{\beta_1A_0\,\omega_{p1}}{\omega_u\sqrt{1 + (\omega_u/\omega_{p2})^2}} = 1 .$$

Substitute $A_0\omega_{p1} = \tfrac23\omega_{p2}$ and divide both sides by $\omega_{p2}$. With the normalized crossover $x = \omega_u/\omega_{p2}$:

$$x\sqrt{1 + x^2} = \frac{2\beta_1}{3}.$$

Square both sides:

$$x^2(1 + x^2) = \frac{4\beta_1^2}{9}
\quad\Longrightarrow\quad
x^4 + x^2 - \frac{4\beta_1^2}{9} = 0 .$$

This is a quadratic in $x^2$. Keep the positive root:

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

If we ignore the second pole's effect on the **magnitude** (it reduces $|H|$ by only $\sqrt{1 + x^2}$, a factor 1.15 at $\beta = 1$), the loop gain is that of a single-pole system above $\omega_{p1}$. Its crossover is simply proportional to $\beta$:

$$\omega_u \approx \beta_1A_0\omega_{p1}\quad\text{and}\quad\omega_{u1} \approx A_0\omega_{p1}\ \ \Longrightarrow\ \ \omega_u \approx \beta_1\,\omega_{u1} = \frac{\beta_1}{\sqrt3}\,\omega_{p2}.$$

Here $\omega_{u1} = \omega_{p2}/\sqrt3$ is taken from the 60° condition. Then

$$\mathrm{PM} \approx 90^\circ - \tan^{-1}\frac{\beta_1}{\sqrt3},$$

which gives 73.9° for $\beta_1 = 0.5$ and 81.8° for $\beta_1 = 0.25$, within 1.5° of the two-pole result (last column of the table).

**Why the PM improves.** Lowering $\beta$ scales the whole loop-gain magnitude plot down by $\beta_1$ without changing its phase. The magnitude therefore crosses unity at a lower frequency, where the nondominant pole $\omega_{p2}$ has contributed less phase lag. As $\beta_1 \to 0$, $\omega_u \to 0$ relative to $\omega_{p2}$ and the PM approaches 90°, the value set by the dominant pole alone. This is why an amplifier compensated for unity feedback (the worst case) is stable, with even more margin, for any $\beta < 1$.

**Validity.** The analysis requires $\beta_1A_0 \gg 1$, so that the crossover still lies far above $\omega_{p1}$ and the dominant pole still contributes ≈ 90°.

### Result

$$\mathrm{PM}(\beta_1) = 90^\circ - \tan^{-1}x,\qquad x = \frac{\omega_u}{\omega_{p2}} \text{ solving } x\sqrt{1 + x^2} = \frac{2\beta_1}{3},\ \text{ i.e. } x = \sqrt{\frac{\sqrt{1 + 16\beta_1^2/9} - 1}{2}} .$$

The phase margin **increases** toward 90° as $\beta_1$ decreases, e.g. ≈ 72° for $\beta_1 = 0.5$ and ≈ 81° for $\beta_1 = 0.25$. Neglecting the second pole's effect on the magnitude gives the simpler estimate $\mathrm{PM} \approx 90^\circ - \tan^{-1}(\beta_1/\sqrt3)$ (≈ 74° and ≈ 82°).

**Common mistake.** Concluding that the phase margin gets worse (or stays the same) with smaller $\beta$. The phase of $\beta H$ does not depend on $\beta$; only the crossover frequency moves, and it moves *down*, away from $\omega_{p2}$. Less feedback means more stability.

**Common mistake.** Scaling the phase margin itself with $\beta$, e.g. PM = 60°/$\beta_1$. The phase margin is a phase evaluated at a frequency. You must first find the new crossover frequency from the magnitude condition, and then evaluate the phase there.

**Common mistake.** Forgetting that the 60° condition fixes the ratio $\omega_{u1}/\omega_{p2} = \tan30^\circ$, not $\omega_{u1} = \omega_{p2}$. The latter would correspond to a 45° phase margin.
