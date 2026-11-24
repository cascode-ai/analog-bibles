# Golden Solution - R015

## Reference answer

$V_{GS}=V_X$ and $V_{DS}=V_D$. Drain KCL gives
$$V_D=V_X+R_1(I_1-I_X).$$
For $V_X<0.7\,\mathrm V$, $I_X=g_m=0$. In saturation, $I_X=\tfrac12\beta(V_X-0.7)^2$ and $g_m=\beta(V_X-0.7)$. The boundary is $I_X=I_1+V_{TH}/R_1$, or $V_{X1}=0.7+\sqrt{2(I_1+0.7/R_1)/\beta}$. Above it, triode operation keeps $I_X$ increasing more slowly and $g_m=\beta V_D$; $g_m$ usually peaks at the boundary but can keep rising when $\beta R_1u_B<1$, $u_B=\sqrt{2(I_1+0.7/R_1)/\beta}$. Compliance requires $V_D<V_{DD}$.

![Illustrative solution curve](/q/R015/solution-r015.svg)

![Illustrative transistor transconductance g_m versus V_X](/q/R015/solution-r015-gm.svg)

Plots use I_1 = 0.2 mA, R_1 = 1 kOhm, beta = 2 mA/V^2, assuming sufficient current-source compliance.



## Grading notes

+2: off below threshold, square-law saturation rise, correct triode boundary, and slower triode rise with $g_m=\beta V_D$. +1: correct trend with incomplete boundary. 0: wrong transition. -2: $I_X$ held at $I_1$ or polarity reversed.\n