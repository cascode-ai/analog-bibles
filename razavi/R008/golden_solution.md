# Golden Solution - R008

## Reference answer

Use $\beta=\mu_nC_{ox}W/L$ and neglect CLM. The general body-effect threshold and saturation relations are:

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).$$
$$I_D=\frac12\beta(V_{GS}-V_{TH})^2,\qquad g_m=\left.\frac{\partial I_D}{\partial V_{GS}}\right|_{V_{DS},V_{SB}}=\beta(V_{GS}-V_{TH}).$$

While on, the $V_X$ terminal is the source and current opposes the arrow, so $I_X=-I_D$. Substituting the given parameters gives:

Numerical expressions use voltages in V:
$$V_{TH}=0.7+0.45(\sqrt{0.9+V_X}-\sqrt{0.9}).$$
The cutoff boundary solves $1-V_X=V_{TH}$: $V_X=0.2453$ V. For $0\le V_X<0.2453$ V the device is saturated because $V_{DS}=1.9-V_X$ exceeds the overdrive:
$$I_X=-\tfrac12\beta(1-V_X-V_{TH})^2,\qquad g_m=\beta(1-V_X-V_{TH}).$$
The current is negative because it flows out of the $V_X$ terminal, opposite the arrow. Both quantities are zero beyond cutoff in the square-law model.

Zero beyond cutoff neglects subthreshold current; $g_m$ denotes the positive device magnitude.

| $V_X$ (V) | $I_X/\beta$ (V²) | $g_m/\beta$ (V) |
|---|---|---|
| 0 | −0.0450 | 0.300 |
| 0.1 | −0.0157 | 0.177 |
| 0.2 | −0.00149 | 0.0549 |
| 0.2453 | 0 | 0 |

$I_X$ rises to zero while $g_m$ decreases to zero. Ignoring body effect would move cutoff to 0.3 V.


![R008 model curves; beta_p for R009; high-bias R010 unresolved](/q/R008/review-curves.svg)

## Grading notes

+2: conduction only for small $V_X$ (cutoff ≈ 0.25 V with body effect), with the $V_X$ node as source, negative saturated $I_X$ of magnitude $\tfrac12\beta(0.3\ \mathrm{V})^2 = 0.045\beta$ at $V_X = 0$, zero elsewhere; $g_m$ from 0.3β to 0. +1: cutoff placed at 0.3 V (body effect neglected) or the sign convention of $I_X$ unclear, otherwise correct. 0: "M1 is always off" with otherwise sound reasoning (misses the small-$V_X$ conduction). -2 (asserted as fact): positive $I_X$ with the 1.9-V node as source, conduction over a wide range of $V_X$, or $M_1$ treated as a PMOS.
