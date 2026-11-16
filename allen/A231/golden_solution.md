# Golden Solution - A231

## Reference answer

$R_{out} = \dfrac{1}{\dfrac{g_{m1}+g_{m2}}{2} + g_{ds1}+g_{ds2} + \dfrac{1}{R_1+R_2}} \approx \dfrac{2}{g_{m1}+g_{m2}}$; including $R_L$: $R_{out} \approx \left[\dfrac{2}{g_{m1}+g_{m2}}\right]\Big\|\,R_L$.

- Apply $v_x$ at the output with $v_{IN}$ = 0: the gates sit at $v_g = v_xR_1/(R_1+R_2) = v_x/2$.
- Current drawn from the test source: $i_x = (g_{m1}+g_{m2})v_g + (g_{ds1}+g_{ds2})v_x + v_x/(R_1+R_2)$ (both common-source transistors respond to the gate voltage; the feedback resistors form a path to ac ground).
- With $g_m \gg g_{ds}$ and $1/(R_1+R_2)$ small, $R_{out} \approx 2/(g_{m1}+g_{m2})$, much smaller than the open-loop $1/(g_{ds1}+g_{ds2})$; the reduction factor is the loop gain ≈ $(g_{m1}+g_{m2})/[2(g_{ds1}+g_{ds2})]$.
- $R_L$ simply appears in parallel at the output node: add $1/R_L$ to the denominator.

## Grading notes

+2: $R_{out} \approx 2/(g_{m1}+g_{m2})$ (exact form accepted) and the version with $R_L$ in parallel. +1: correct with a missing minor term or with $R_L$ handled only qualitatively. 0: shunt feedback idea right but feedback factor wrong (e.g. $1/(g_{m1}+g_{m2})$). −2 (asserted as fact): $R_{out} = r_{ds1}\|r_{ds2}$ (feedback ignored), $R_{out}$ increased by the feedback, or $R_L$ placed in series.
