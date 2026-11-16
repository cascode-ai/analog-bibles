# Detailed solution - R505

**Approach.** The poles are the roots of the quadratic denominator $as^2 + bs + c$. For widely spaced roots, the sum of the roots is dominated by the large one, which gives the large root ≈ $b/a$ and the small root ≈ $c/b$ in magnitude; apply this to the given coefficients.

### Step 1 — Coefficients and the widely-spaced-root rule

The denominator of $H_{closed}$ is $as^2 + bs + c$ with

$$a = \frac{1}{\omega_{p1}\omega_{p2}}, \qquad b = \frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}, \qquad c = 1 + A_0 ,$$

all positive. With the poles at $s = -\omega_{pA}$ and $s = -\omega_{pB}$, $\omega_{pA} \ll \omega_{pB}$:

$$as^2 + bs + c = a\,(s + \omega_{pA})(s + \omega_{pB}) = as^2 + a(\omega_{pA} + \omega_{pB})s + a\,\omega_{pA}\omega_{pB} ,$$

so

$$\omega_{pA} + \omega_{pB} = \frac ba, \qquad \omega_{pA}\,\omega_{pB} = \frac ca .$$

The sum is dominated by $\omega_{pB}$, so $\omega_{pB} \approx b/a$, and then $\omega_{pA} = (c/a)/\omega_{pB} \approx c/b$. (The same follows from the quadratic formula with $\sqrt{1 - 4ac/b^2} \approx 1 - 2ac/b^2$, which shows that the condition is $b^2 \gg 4ac$, i.e. $\omega_{pB}/\omega_{pA} \gg 1$.)

### Step 2 — Apply to $H_{closed}$

**Low-frequency pole:**

$$\omega_{pA} \approx \frac cb = \frac{1 + A_0}{\dfrac{1}{\omega_{p1}} + \dfrac{1}{\omega_{p2}} + \dfrac{A_0}{\omega_z}} .$$

**High-frequency pole:**

$$
\begin{aligned}
\omega_{pB} \approx \frac ba &= \omega_{p1}\omega_{p2}\left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}\right)\\
&= \omega_{p2} + \omega_{p1} + \frac{A_0\,\omega_{p1}\omega_{p2}}{\omega_z} .
\end{aligned}
$$

Both poles are in the left half plane, $s = -\omega_{pA}$ and $s = -\omega_{pB}$ with $\omega_{pA}, \omega_{pB} > 0$, since all coefficients are positive. The approximation requires $b^2 \gg 4ac$:

$$\left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}\right)^2 \gg \frac{4(1 + A_0)}{\omega_{p1}\omega_{p2}} .$$

### Step 3 — Interpretation and a check

**Near-cancellation case** ($\omega_z \approx \omega_{p2}$, $A_0 \gg 1$, and $\omega_{p2} \ll (1 + A_0)\omega_{p1}$): $A_0/\omega_z \approx A_0/\omega_{p2}$ dominates $b$, and

$$\omega_{pA} \approx \frac{1 + A_0}{(1 + A_0)/\omega_{p2}} \approx \omega_{p2}\ (\approx \omega_z), \qquad \omega_{pB} \approx \omega_{p1} + \omega_{p2} + A_0\omega_{p1} \approx (1 + A_0)\,\omega_{p1} .$$

**Exact check.** For $\omega_z = \omega_{p2}$ the denominator factors as $(1 + s/\omega_{p2})(1 + A_0 + s/\omega_{p1})$, with roots at $\omega_{p2}$ and $(1 + A_0)\omega_{p1}$, consistent with the approximations.

The high-frequency pole is the familiar closed-loop pole of a one-pole amplifier, about $A_0\omega_{p1}$ (the gain-bandwidth product), while the low-frequency pole is pulled toward the zero and forms a pole–zero "doublet" with it.

### Result

$$\omega_{pA} \approx \frac{1 + A_0}{\dfrac{1}{\omega_{p1}} + \dfrac{1}{\omega_{p2}} + \dfrac{A_0}{\omega_z}}, \qquad \omega_{pB} \approx \omega_{p1}\omega_{p2}\left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}\right) = \omega_{p1} + \omega_{p2} + \frac{A_0\,\omega_{p1}\omega_{p2}}{\omega_z},$$

with the poles at $s = -\omega_{pA}$ and $s = -\omega_{pB}$ (left half plane), valid when $b^2 \gg 4ac$. For $\omega_z \approx \omega_{p2}$ these reduce to $\omega_{pA} \approx \omega_{p2}$ and $\omega_{pB} \approx (1 + A_0)\omega_{p1}$.

**Common mistake.** Taking the roots as $c/a$ and $b/a$. $c/a$ is the *product* of the two pole frequencies; the small root is $c/b$.

**Common mistake.** Placing the poles in the right half plane by dropping the minus sign: with $a$, $b$, $c > 0$, both roots of $as^2 + bs + c$ are negative.

**Common mistake.** Using the approximations without checking that the roots really are widely spaced; if $b^2$ is not much larger than $4ac$, the exact quadratic formula must be used (and the roots may even be complex).
