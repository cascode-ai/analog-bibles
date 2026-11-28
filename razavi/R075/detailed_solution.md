# Detailed solution - R075

Approach: With $W$ and $L$ fixed, $\beta = \mu_nC_{ox}W/L$ and $\lambda$ are fixed, so both $g_m$ and $I_D$ change with $V_{GS}$. Write $g_m$ and $r_O = 1/(\lambda I_D)$ in terms of the overdrive $V_{ov} = V_{GS} - V_{TH}$, multiply, and describe the resulting curve versus $V_{GS}$.

### Step 1 — The two factors in terms of the overdrive

$\lambda$ (which scales as $1/L$) and $\beta = \mu_nC_{ox}W/L$ are constant, while the drain current follows the square law as $V_{GS}$ changes:

$$I_D = \frac12\,\beta\,V_{ov}^2, \qquad g_m = \frac{\partial I_D}{\partial V_{GS}} = \beta V_{ov}, \qquad r_O = \frac{1}{\lambda I_D} = \frac{1}{\lambda\cdot\tfrac12\beta V_{ov}^2} = \frac{2}{\lambda\beta V_{ov}^2} .$$

So $g_m$ grows linearly with the overdrive, $I_D$ grows quadratically, and $r_O$ falls as $1/V_{ov}^2$.

### Step 2 — The intrinsic gain

Cancelling $\beta$ and one factor of $V_{ov}$:

$$g_mr_O = \beta V_{ov}\cdot\frac{2}{\lambda\beta V_{ov}^2} = \frac{2}{\lambda V_{ov}} = \frac{2}{\lambda\,(V_{GS} - V_{TH})} .$$

Raising $V_{GS}$ increases $g_m$ in proportion to the overdrive, but the output conductance $1/r_O = \lambda I_D$ in proportion to its *square*, so the product falls as $1/V_{ov}$.

This is exactly the expression found when $I_D$ is held constant and $W$ is adjusted: for any square-law device $g_mr_O = (2I_D/V_{ov})\cdot1/(\lambda I_D) = 2/(\lambda V_{ov})$, which depends only on the overdrive (and $\lambda$), whatever combination of $W$ and $I_D$ produces it.

### Step 3 — Shape of the curve versus $V_{GS}$

The plotted points have $V_{ov}>0$ and assume $V_{DS}\geq V_{ov}$. The example uses $V_{TH}=0.7$ V. The solid curves start at $V_{GS}=0.8$ V ($V_{ov}=0.1$ V). The shaded interval requires a separate transition model.

![Intrinsic gain g_m r_O](/q/R075/solution-gain.svg)
- Decreasing hyperbola, with $g_mr_O\cdot(V_{GS} - V_{TH}) = 2/\lambda$ constant.
- Vertical asymptote at $V_{GS} = V_{TH}$ (in the square-law model); horizontal asymptote $g_mr_O \to 0$ for large $V_{GS}$.
- Each doubling of the overdrive halves the gain.

For a numerical example, use $\lambda = 0.1\ \mathrm{V^{-1}}$ and, to show the individual factors, $\beta = 10\ \mathrm{mA/V^2}$. At $V_{ov} = 0.2$ V:

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

### Step 4 — Behaviour near threshold

Close to $V_{TH}$ the device leaves strong inversion. In weak inversion $g_m = I_D/(\zeta V_T)$ (subthreshold slope factor $\zeta \approx 1.5$, thermal voltage $V_T \approx 26$ mV), so with $r_O = 1/(\lambda I_D)$:

$$g_mr_O \approx \frac{1}{\lambda\zeta V_T} \approx \frac{1}{(0.1)(1.5)(0.026)} \approx 256 .$$

This is a weak-inversion estimate using the same $\lambda$. The square-law hyperbola reaches the same gain at $V_{ov}=2\zeta V_T\approx78$ mV. The transition requires a separate model.

### Result

With $W$ and $L$ fixed, $g_m = \beta(V_{GS} - V_{TH})$ rises linearly while $r_O = 2/[\lambda\beta(V_{GS} - V_{TH})^2]$ falls as the square, so

$$g_mr_O = \frac{2}{\lambda\,(V_{GS} - V_{TH})},$$

a decreasing hyperbola versus $V_{GS}$ with a vertical asymptote at $V_{GS} = V_{TH}$, the same curve as for constant drain current (e.g. 100, 40 and 20 at overdrives of 0.2, 0.5 and 1 V for $\lambda = 0.1\ \mathrm{V^{-1}}$). In practice weak inversion limits it near $1/(\lambda\zeta V_T)$ close to threshold.

Common mistake: Concluding that the intrinsic gain rises with $V_{GS}$ because $g_m$ rises. The current rises faster (as $V_{ov}^2$), and $r_O = 1/(\lambda I_D)$ falls accordingly, so the product decreases.

Common mistake: Treating $r_O$ as constant at fixed $W$. With the width fixed, the drain current, and hence $r_O$, changes with $V_{GS}$; only at constant current is $r_O$ constant.
