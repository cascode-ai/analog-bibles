# Detailed solution - R505

**Approach.** The poles are the roots of the denominator, a quadratic $as^2 + bs + c$. When the two roots are far apart, the sum of the roots is dominated by the large one and the product contains both, which gives simple approximations: the large root is about $b/a$ and the small root about $c/b$ in magnitude. Apply this to the given coefficients.

### Step 1 — Identify the coefficients

Write the denominator of $H_{closed}$ as $as^2 + bs + c$ with

$$a = \frac{1}{\omega_{p1}\omega_{p2}}, \qquad b = \frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}, \qquad c = 1 + A_0 .$$

All three are positive (positive pole and zero frequencies, $A_0 > 0$).

### Step 2 — Widely spaced roots: the general rule

Let the poles be $s = -\omega_{pA}$ and $s = -\omega_{pB}$ with $\omega_{pA} \ll \omega_{pB}$. Then

$$as^2 + bs + c = a\,(s + \omega_{pA})(s + \omega_{pB}) = as^2 + a(\omega_{pA} + \omega_{pB})s + a\,\omega_{pA}\omega_{pB} .$$

Matching coefficients:

$$\omega_{pA} + \omega_{pB} = \frac ba, \qquad \omega_{pA}\,\omega_{pB} = \frac ca .$$

- Since $\omega_{pB} \gg \omega_{pA}$, the sum is dominated by $\omega_{pB}$: $\omega_{pB} \approx b/a$.
- Dividing the product by this: $\omega_{pA} = \dfrac{c/a}{\omega_{pB}} \approx \dfrac{c/a}{b/a} = \dfrac cb$.

**Same result from the quadratic formula.** The roots are $s = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} = \dfrac{-b}{2a}\left(1 \mp \sqrt{1 - \dfrac{4ac}{b^2}}\right)$. If $4ac/b^2 \ll 1$, use $\sqrt{1 - x} \approx 1 - x/2$:

$$
\begin{aligned}
s_A &\approx \frac{-b}{2a}\cdot\frac{2ac}{b^2} = -\frac cb, &\quad& (\text{"}-\text{" sign, small root})\\
s_B &\approx \frac{-b}{2a}\left(2 - \frac{2ac}{b^2}\right) \approx -\frac ba, && (\text{"}+\text{" sign, large root}).
\end{aligned}
$$

The condition for the approximation is therefore $b^2 \gg 4ac$, i.e. $\omega_{pB}/\omega_{pA} \gg 1$.

### Step 3 — Apply to $H_{closed}$

**Low-frequency pole:**

$$\omega_{pA} \approx \frac cb = \frac{1 + A_0}{\dfrac{1}{\omega_{p1}} + \dfrac{1}{\omega_{p2}} + \dfrac{A_0}{\omega_z}} .$$

**High-frequency pole:**

$$
\begin{aligned}
\omega_{pB} \approx \frac ba &= \omega_{p1}\omega_{p2}\left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}\right)\\
&= \omega_{p2} + \omega_{p1} + \frac{A_0\,\omega_{p1}\omega_{p2}}{\omega_z} .
\end{aligned}
$$

Both poles are in the left half plane: $s = -\omega_{pA}$ and $s = -\omega_{pB}$, with $\omega_{pA}, \omega_{pB} > 0$ (all coefficients of the quadratic are positive).

**Validity:** $b^2 \gg 4ac$, i.e.

$$\left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}\right)^2 \gg \frac{4(1 + A_0)}{\omega_{p1}\omega_{p2}} .$$

### Step 4 — Interpretation and a check

**Near-cancellation case** ($\omega_z \approx \omega_{p2}$, $A_0 \gg 1$, and $\omega_{p2} \ll (1 + A_0)\omega_{p1}$): then $A_0/\omega_z \approx A_0/\omega_{p2}$ dominates $b$, and

$$\omega_{pA} \approx \frac{1 + A_0}{(1 + A_0)/\omega_{p2}} \approx \omega_{p2}\ (\approx \omega_z), \qquad \omega_{pB} \approx \omega_{p1} + \omega_{p2} + A_0\omega_{p1} \approx (1 + A_0)\,\omega_{p1} .$$

**Exact check.** For $\omega_z = \omega_{p2}$ the denominator factors exactly as $(1 + s/\omega_{p2})(1 + A_0 + s/\omega_{p1})$, with roots at $\omega_{p2}$ and $(1 + A_0)\omega_{p1}$, consistent with the approximations above.

**Physical picture.** The high-frequency pole is the familiar closed-loop pole of a one-pole amplifier, about $A_0\omega_{p1}$ (the gain-bandwidth product). The low-frequency pole is pulled toward the zero: in the closed loop it ends up close to $\omega_z$, forming a pole–zero "doublet" with it.

### Result

$$\omega_{pA} \approx \frac{1 + A_0}{\dfrac{1}{\omega_{p1}} + \dfrac{1}{\omega_{p2}} + \dfrac{A_0}{\omega_z}}, \qquad \omega_{pB} \approx \omega_{p1}\omega_{p2}\left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}\right) = \omega_{p1} + \omega_{p2} + \frac{A_0\,\omega_{p1}\omega_{p2}}{\omega_z},$$

with the poles at $s = -\omega_{pA}$ and $s = -\omega_{pB}$ (left half plane), valid when $b^2 \gg 4ac$. For $\omega_z \approx \omega_{p2}$ these reduce to $\omega_{pA} \approx \omega_{p2}$ and $\omega_{pB} \approx (1 + A_0)\omega_{p1}$.

**Common mistake.** Taking the roots as $c/a$ and $b/a$. $c/a$ is the *product* of the two pole frequencies, not one of them; the small root is $c/b$.

**Common mistake.** Placing the poles in the right half plane by dropping the minus sign: since $a$, $b$, $c > 0$, both roots of $as^2 + bs + c$ are negative, i.e. $s = -\omega_{pA}$ and $s = -\omega_{pB}$.

**Common mistake.** Using the approximations without checking that the roots really are widely spaced. If $b^2$ is not much larger than $4ac$, the exact quadratic formula must be used (and the roots may even be complex).
