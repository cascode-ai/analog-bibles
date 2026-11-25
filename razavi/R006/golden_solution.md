# Golden Solution - R006

## Reference answer

Gate and drain are at 3 V, the source is at $V_X$, and the bulk is grounded. Thus $V_{GS}=V_{DS}=3-V_X$ and $V_{SB}=V_X$. Use $\beta=\mu_nC_{ox}W/L$ and neglect unspecified CLM. The body-effect threshold and saturation relations are:

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).$$
$$I_D=\frac12\beta(V_{GS}-V_{TH})^2,\qquad g_m=\left.\frac{\partial I_D}{\partial V_{GS}}\right|_{V_{DS},V_{SB}}=\beta(V_{GS}-V_{TH}).$$

Substituting the given parameters gives (voltages in V in numerical expressions):

$$V_{TH}(V_X)=0.7+0.45\left(\sqrt{0.9+V_X}-\sqrt{0.9}\right),$$
$$\frac{I_X}{\beta}=\frac12[3-V_X-V_{TH}(V_X)]^2,\qquad \frac{g_m}{\beta}=3-V_X-V_{TH}(V_X).$$

The device remains on and saturated over $0\le V_X\le1.5$ V; the minimum overdrive is about 0.530 V.

| $V_X$ (V) | $I_X/\beta$ (V²) | $g_m/\beta$ (V) |
|---|---|---|
| 0 | 2.645 | 2.300 |
| 0.5 | 1.436 | 1.694 |
| 1 | 0.612 | 1.107 |
| 1.5 | 0.140 | 0.530 |

Both curves decrease; $I_X$ is convex and $g_m$ is nearly linear. Body effect makes the decrease steeper than without it. Gate transconductance $g_m$ differs from the source-sweep slope $dI_X/dV_X$. Keep normalized results because device dimensions are unspecified.

![R006 answer curves](/q/R006/solution-curves.svg)

## Grading notes

+2: saturation throughout, $I_X$ decreasing (square-law) to about 0.14β at 1.5 V, body effect included ($V_{TH}$ rising to ≈ 0.97 V), $g_m$ decreasing nearly linearly from 2.3β to ≈ 0.53β; values within ±10%. +1: body effect neglected (giving $I_X$ ≈ 0.32β and $g_m$ ≈ 0.8β at 1.5 V) with an otherwise correct analysis, or correct shapes without numbers. 0: right method with a slip that changes the curves noticeably. -2 (asserted as fact): $M_1$ claimed to be in triode, $I_X$ increasing with $V_X$, $g_m$ constant, or the source/drain misidentified. If a response also reports the source-terminal small-signal quantity $g_m+g_{mb}$ (about $2.85\beta$ to $0.61\beta$) and clearly distinguishes it from the requested gate transconductance $g_m$, accept it as a compatible additional result; grade the requested $g_m$ against the values above.
