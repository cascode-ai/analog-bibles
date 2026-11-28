# Golden Solution - R080

## Reference answer

With the source grounded, $V_{SB}=-V_B$. Body effect raises $V_{TH}$ as $V_B$ becomes more negative. Define $V_{ov}=V_{GS}-V_{TH}$ and $\beta=\mu_nC_{ox}W/L$. If $V_{DS}\ge V_{GS}-V_{TH0}>0$ initially, saturation continues while $V_{ov}>0$.

$$
\begin{aligned}
V_{TH}&=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|-V_B}-\sqrt{2|\phi_F|}\right),\\
V_{B,\mathrm{off}}&=2|\phi_F|-\left[\sqrt{2|\phi_F|}+\frac{V_{GS}-V_{TH0}}{\gamma}\right]^2,\\
g_m&=\beta V_{ov},\qquad r_O=\frac{2}{\lambda\beta V_{ov}^2},\qquad
g_mr_O=\frac{2}{\lambda V_{ov}}.
\end{aligned}
$$

Before cutoff, $g_m$ decreases toward zero with a diminishing slope magnitude, while $r_O$ and $g_mr_O$ diverge. In ideal cutoff $g_m=g_{ds}=0$, so $r_O$ is formally infinite and $g_mr_O$ is undefined. The illustrated bias gives $V_{B,\mathrm{off}}\approx-3.343\ \mathrm V$.

![Gate transconductance g_m](/q/R080/solution-transconductance.svg)

![Output resistance r_O](/q/R080/solution-output-resistance.svg)

![Intrinsic gain g_m r_O](/q/R080/solution-intrinsic-gain.svg)

## Grading notes

- +2 for decreasing $g_m$, increasing $r_O$, and increasing $g_mr_O$ before cutoff, explained by the body-effect increase in $V_{TH}$, with either cutoff at a finite negative bulk voltage or the square-root dependence with diminishing rate of threshold change.
- +1 for all three trends and the body-effect explanation, with no cutoff or shape detail.
- 0 for two correct trends.
- −2 for asserting that $g_m$ increases, $r_O$ decreases, $V_{TH}$ falls with negative bulk bias, or $g_mr_O$ is constant.

