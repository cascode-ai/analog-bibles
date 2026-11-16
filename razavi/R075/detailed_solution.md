# Detailed solution - R075

**Approach.** With $W$ and $L$ fixed, the device constant $\beta = \mu_nC_{ox}W/L$ is fixed, so both $g_m$ and $I_D$ change with $V_{GS}$. Write $g_m$ and $r_O = 1/(\lambda I_D)$ in terms of the overdrive, multiply, and describe the resulting curve versus $V_{GS}$.

### Step 1 — What is held constant

- $L$ is constant, so $\lambda$ (which scales as $1/L$) is constant.
- $W$ is constant, so the device constant
$$\beta = \mu_nC_{ox}\frac{W}{L}$$
is constant. Here $\mu_nC_{ox}$ is the process transconductance parameter.
- The drain current is *not* fixed: it follows the square law as $V_{GS}$ changes.

Let $V_{ov} = V_{GS} - V_{TH}$ be the overdrive voltage ($V_{TH}$ is the threshold voltage).

### Step 2 — The two factors in terms of the overdrive

**Drain current** (square law, saturation):

$$I_D = \frac12\,\beta\,V_{ov}^2 .$$

It grows **quadratically** with the overdrive.

**Transconductance** (derivative of $I_D$ with respect to $V_{GS}$):

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \beta V_{ov} .$$

It grows **linearly** with the overdrive.

**Output resistance:**

$$r_O = \frac{1}{\lambda I_D} = \frac{1}{\lambda\cdot\tfrac12\beta V_{ov}^2} = \frac{2}{\lambda\beta V_{ov}^2} .$$

It **falls as $1/V_{ov}^2$**, because the current rises.

### Step 3 — The intrinsic gain

Multiply the two:

$$g_mr_O = \beta V_{ov}\cdot\frac{2}{\lambda\beta V_{ov}^2} .$$

Cancel $\beta$ and one factor of $V_{ov}$:

$$g_mr_O = \frac{2}{\lambda V_{ov}} = \frac{2}{\lambda\,(V_{GS} - V_{TH})} .$$

**Intuition.** Raising $V_{GS}$ increases $g_m$ in proportion to the overdrive, but it increases the current, and with it the output conductance $1/r_O = \lambda I_D$, in proportion to the overdrive *squared*. The loss in $r_O$ outweighs the gain in $g_m$, so the product falls as $1/V_{ov}$.

**Same curve as at constant current.** This is exactly the expression found when $I_D$ is held constant and $W$ is adjusted. The reason is that for any square-law device $g_mr_O = (2I_D/V_{ov})\cdot1/(\lambda I_D) = 2/(\lambda V_{ov})$: the intrinsic gain depends only on the overdrive (and $\lambda$), whatever combination of $W$ and $I_D$ produces that overdrive.

### Step 4 — Shape of the curve versus $V_{GS}$

- **Decreasing hyperbola**, with $g_mr_O\cdot(V_{GS} - V_{TH}) = 2/\lambda$ constant.
- **Vertical asymptote** at $V_{GS} = V_{TH}$ (in the square-law model); **horizontal asymptote** $g_mr_O \to 0$ for large $V_{GS}$.
- **Each doubling of the overdrive halves the gain.**

**Numerical example** with $\lambda = 0.1\ \mathrm{V^{-1}}$ and, to show the individual factors, $\beta = 10\ \mathrm{mA/V^2}$. At $V_{ov} = 0.2$ V:

$$
\begin{aligned}
I_D &= \tfrac12(10\ \mathrm{mA/V^2})(0.2\ \mathrm{V})^2 = 0.2\ \mathrm{mA},\\
g_m &= (10\ \mathrm{mA/V^2})(0.2\ \mathrm{V}) = 2\ \mathrm{mS},\\
r_O &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.2\ \mathrm{mA})} = 50\ \mathrm{k}\Omega,\\
g_mr_O &= (2\ \mathrm{mS})(50\ \mathrm{k}\Omega) = 100 = \frac{2}{(0.1)(0.2)}.\ \checkmark
\end{aligned}
$$

| $V_{GS} - V_{TH}$ (V) | 0.1 | 0.2 | 0.5 | 1.0 |
|---|---|---|---|---|
| $I_D$ (mA) | 0.05 | 0.2 | 1.25 | 5 |
| $g_m$ (mS) | 1 | 2 | 5 | 10 |
| $r_O$ (kΩ) | 200 | 50 | 8 | 2 |
| $g_mr_O$ | 200 | 100 | 40 | 20 |

$g_m$ increases tenfold over this range while $r_O$ drops a hundredfold, so the gain falls tenfold.

### Step 5 — Behaviour near threshold

Close to $V_{TH}$ the device leaves strong inversion. In weak inversion $g_m = I_D/(\zeta V_T)$ (subthreshold slope factor $\zeta \approx 1.5$, thermal voltage $V_T \approx 26$ mV), so with $r_O = 1/(\lambda I_D)$:

$$g_mr_O \approx \frac{1}{\lambda\zeta V_T} \approx \frac{1}{(0.1)(1.5)(0.026)} \approx 256 .$$

The real curve therefore levels off at this value instead of diverging; the square-law hyperbola reaches it at $V_{ov} \approx 2\zeta V_T \approx 78$ mV. In this region the current, and hence the speed, is very low.

### Result

With $W$ and $L$ fixed, $g_m = \beta(V_{GS} - V_{TH})$ rises linearly while $r_O = 2/[\lambda\beta(V_{GS} - V_{TH})^2]$ falls as the square, so

$$g_mr_O = \frac{2}{\lambda\,(V_{GS} - V_{TH})},$$

a decreasing hyperbola versus $V_{GS}$ with a vertical asymptote at $V_{GS} = V_{TH}$, the same curve as for constant drain current (e.g. 100, 40 and 20 at overdrives of 0.2, 0.5 and 1 V for $\lambda = 0.1\ \mathrm{V^{-1}}$). In practice weak inversion limits it near $1/(\lambda\zeta V_T)$ close to threshold.

**Common mistake.** Concluding that the intrinsic gain rises with $V_{GS}$ because $g_m$ rises. The current rises faster (as $V_{ov}^2$), and $r_O = 1/(\lambda I_D)$ falls accordingly, so the product decreases.

**Common mistake.** Treating $r_O$ as constant at fixed $W$. $r_O$ depends on the drain current, which changes with $V_{GS}$ when the width is fixed; only at constant current is $r_O$ constant.
