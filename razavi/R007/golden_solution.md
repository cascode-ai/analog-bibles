# Golden Solution - R007

## Reference answer

Use $\beta=\mu_nC_{ox}W/L$ and neglect CLM. Here $g_m$ is the positive magnitude of device gate transconductance. The general threshold and conducting-region relations are:

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).$$
$$\begin{aligned}
\text{Triode:}\quad &I_D=\beta\left[(V_{GS}-V_{TH})V_{DS}-\frac12V_{DS}^2\right],\qquad g_m=\beta V_{DS},\\
\text{Saturation:}\quad &I_D=\frac12\beta(V_{GS}-V_{TH})^2,\qquad g_m=\beta(V_{GS}-V_{TH}).
\end{aligned}$$

For $V_X<1$ V the $V_X$ terminal is the source and $I_X=-I_D$; for $V_X>1$ V the 1-V terminal is the source and $I_X=I_D$. Substituting the given parameters gives (voltages in V in numerical expressions):

$$V_{TH}(V_X)=0.7+0.45\left(\sqrt{0.9+V_X}-\sqrt{0.9}\right),\qquad 0\le V_X\le1,$$
$$I_X=-\beta[(1.9-V_X-V_{TH})(1-V_X)-\tfrac12(1-V_X)^2],\qquad g_m=\beta(1-V_X),\quad V_X<1.$$

| $V_X$ (V) | $I_X/\beta$ (V²) | $g_m/\beta$ (V) |
|---|---|---|
| 0 | −0.70000 | 1.00 |
| 0.25 | −0.38950 | 0.75 |
| 0.5 | −0.17223 | 0.50 |
| 0.75 | −0.04347 | 0.25 |
| 1 | 0 | 0 |

Current crosses zero at 1 V, where source and drain exchange roles. Above this point $V_{TH}=0.893375$ V and the fixed overdrive is about 0.006625 V. In the short triode interval:

$$I_X=\beta[0.006625(V_X-1)-\tfrac12(V_X-1)^2],\quad g_m=\beta(V_X-1),\quad1<V_X<1.006625.$$

The subsequent saturation plateau is $I_X/\beta\approx2.195\times10^{-5}$ V² and $g_m/\beta\approx0.006625$ V. These tiny numbers are formal strong-inversion square-law results, with limited near-threshold accuracy. Without body effect the plateau starts at 1.2 V, with $I_X/\beta=0.020$ V² and $g_m/\beta=0.200$ V.

![R007: normalized current and gate transconductance](/q/R007/review-curves.svg)

## Grading notes

+2: source/drain role swap recognized (negative $I_X$ in triode for $V_X < 1$ V, ≈ −0.7β at $V_X = 0$), zero crossing at 1 V, and for $V_X > 1$ V the body effect raising $V_{TH}$ to ≈ 0.89 V so that $M_1$ is barely on and $I_X \approx 0$; $g_m \approx \beta(1 - V_X)$ then ≈ 0. +1: same analysis but neglecting the body effect (plateau $0.02\beta$ above 1.2 V), or correct description without numbers. 0: misses the negative-current region (says $I_X = 0$ for $V_X < 1$ V) while the $V_X > 1$ V part is right. -2 (asserted as fact): positive $I_X$ for $V_X < 1$ V, a large saturated current for $V_X > 1$ V, or the 1-V node treated as the source for all $V_X$.
