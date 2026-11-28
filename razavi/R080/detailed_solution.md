# Detailed solution - R080

### Step 1 — Determine how body bias changes the operating region

With the source grounded, $V_{SB}=-V_B$. Substituting into the body-effect law gives

$$V_{ov}=V_{GS}-V_{TH},\qquad
V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|-V_B}-\sqrt{2|\phi_F|}\right).$$

The threshold derivative with respect to the reverse bias is

$$\frac{dV_{TH}}{dV_{SB}}=\frac{\gamma}{2\sqrt{2|\phi_F|+V_{SB}}}>0.$$

It is largest at $V_{SB}=0$ and decreases as reverse bias grows. Consequently $V_{ov}$ falls fastest at the start of the sweep.

Let $V_{ov0}=V_{GS}-V_{TH0}>0$. At $V_B=0$ the saturation condition is $V_{DS}\ge V_{ov0}$. A fixed $V_{DS}$ continues to satisfy $V_{DS}\ge V_{ov}$ as $V_{ov}$ decreases toward zero. Setting $V_{TH}=V_{GS}$ and isolating the square root gives $\sqrt{2|\phi_F|-V_{B,\mathrm{off}}}=\sqrt{2|\phi_F|}+V_{ov0}/\gamma$. Squaring gives a finite cutoff voltage:

$$V_{B,\mathrm{off}}=
2|\phi_F|-\left[\sqrt{2|\phi_F|}+\frac{V_{GS}-V_{TH0}}{\gamma}\right]^2.$$

### Step 2 — Derive the curves in saturation

Let $\beta=\mu_nC_{ox}W/L$. For positive overdrive, use the saturation square law $I_D=\tfrac12\beta V_{ov}^2$. At fixed drain and bulk voltages, $\partial V_{ov}/\partial V_{GS}=1$, so differentiation gives $g_m=\beta V_{ov}$. The prescribed resistance relation then gives

$$r_O=\frac{1}{\lambda I_D}=\frac{2}{\lambda\beta V_{ov}^2},\qquad
g_mr_O=\frac{2}{\lambda V_{ov}}.$$

Using $V_{SB}=-V_B$ and holding $V_{GS}$ fixed, differentiate $g_m=\beta V_{ov}$ on the conducting side.

$$\frac{dg_m}{dV_B}=-\beta\frac{dV_{TH}}{dV_B}=\frac{\beta\gamma}{2\sqrt{2|\phi_F|-V_B}}>0.$$

As $V_B$ sweeps toward more negative voltages, $g_m$ falls and the slope magnitude decreases. The slope at the cutoff boundary is finite and nonzero on the conducting side, then zero in cutoff, giving a corner at $g_m=0$. The resistance rises as the inverse square of overdrive, while the gain rises as the inverse first power. Near cutoff the finite threshold derivative makes $V_{ov}$ vanish linearly with voltage distance to the boundary.

### Step 3 — Evaluate an illustrative bias

The problem leaves $\beta$ and the fixed terminal voltages unspecified. The plots use $V_{GS}=1.2\ \mathrm V$, $V_{DS}=1.0\ \mathrm V$, $\beta=13.4\ \mathrm{mA/V^2}$. This gives $V_{ov0}=0.5\ \mathrm V$, so saturation holds from $V_B=0$ until $V_{B,\mathrm{off}}\approx-3.342753\ \mathrm V$ from Step 1.

At $V_B=-1\ \mathrm V$, for example,

$$V_{TH}=0.7\ \mathrm V +(0.45\ \mathrm{V}^{1/2})
\bigl(\sqrt{1.9\ \mathrm V}-\sqrt{0.9\ \mathrm V}\bigr)
\approx 0.893375\ \mathrm V,\qquad V_{ov}\approx0.306625\ \mathrm V.$$

Substituting into the formulas in Step 2 gives $I_D\approx0.630\ \mathrm{mA}$, $g_m\approx4.11\ \mathrm{mS}$, $r_O\approx15.9\ \mathrm{k}\Omega$, and $g_mr_O\approx65.2\ \mathrm{V/V}$.

| $V_B$ (V) | $I_D$ (mA) | $g_m$ (mS) | $r_O$ (kΩ) | $g_mr_O$ (V/V) |
|---:|---:|---:|---:|---:|
| 0 | 1.675 | 6.70 | 5.97 | 40.0 |
| −1 | 0.630 | 4.11 | 15.9 | 65.2 |
| −2 | 0.173 | 2.15 | 57.9 | 124.5 |
| −3 | 0.00979 | 0.512 | 1021 | 523.2 |
| Limit approaching cutoff | 0 | 0 | $+\infty$ | $+\infty$ |

### Step 4 — Follow the curves into cutoff

At and beyond cutoff, the ideal square-law model sets $I_D=0$, $g_m=0$ and $g_{ds}=0$. The output resistance is formally infinite. The product $g_mr_O$ is undefined in cutoff, with divergence only as a limit approached from saturation. Weak inversion and junction breakdown require additional device models and parameters.

The horizontal axes follow the sweep toward more negative $V_B$. The cutoff region continues beyond the right edge. The two diverging curves leave the plotted vertical ranges before cutoff.

![Gate transconductance g_m](/q/R080/solution-transconductance.svg)

![Output resistance r_O](/q/R080/solution-output-resistance.svg)

![Intrinsic gain g_m r_O](/q/R080/solution-intrinsic-gain.svg)

![Supporting plot of drain current I_D](/q/R080/solution-current.svg)
