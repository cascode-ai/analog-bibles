# Golden Solution - A198

## Reference answer

$R_{in} = \dfrac{r_{ds1}+r_{ds2}}{1 + g_{m2}r_{ds}(g_{m3}+g_{m4})(r_{ds3}\|r_{ds4})} = \dfrac{2r_{ds}}{1+g_mr_{ds}(g_{m3}+g_{m4})(r_{ds3}\|r_{ds4})} \approx \dfrac{2}{g_m(g_{m3}+g_{m4})(r_{ds3}\|r_{ds4})}$, with $g_m = g_{m1} = g_{m2}$, $r_{ds} = r_{ds1} = r_{ds2}$.

- Inverter: $v_C = -A v_{in}$ with $A = (g_{m3}+g_{m4})(r_{ds3}\|r_{ds4})$; M2's gate follows $v_C$.
- Common source node S (tail current constant since $r_{ds5}$ is ignored): $i_{D1}+i_{D2} = 0$ with $i_{D1} = g_{m1}v_S + g_{ds1}(v_S - v_{in})$ and $i_{D2} = g_{m2}(v_S - v_C) + g_{ds2}v_S$ → $v_S = v_{in}\dfrac{g_{ds1} - g_{m2}A}{g_{m1}+g_{m2}+g_{ds1}+g_{ds2}}$.
- The input current is the negative of M1's drain current into the node: $i_{in} = g_{ds1}v_{in} - (g_{m1}+g_{ds1})v_S$, giving in general $R_{in} = \dfrac{g_{m1}+g_{m2}+g_{ds1}+g_{ds2}}{g_{ds1}(g_{m2}+g_{ds2}) + g_{m2}A(g_{m1}+g_{ds1})}$, which reduces to the expression above for identical M1, M2.
- Interpretation: a rise of the input voltage makes the inverter pull M2's gate down, steering tail current from M1 to M2, so less current flows into the input node: shunt negative feedback with loop gain ≈ $g_mA/2$ divides the open-loop $2r_{ds}$.

## Grading notes

+2: exact expression equivalent to the reference (general or identical-device form, simplified or not) with the inverter gain $(g_{m3}+g_{m4})(r_{ds3}\|r_{ds4})$; the high-loop-gain approximation $2/[g_m(g_{m3}+g_{m4})(r_{ds3}\|r_{ds4})]$ is welcome but not required, since the question asks only for the exact expression. +1: correct approximate result $2/[g_m(g_{m3}+g_{m4})(r_{ds3}\|r_{ds4})]$ with an incomplete exact form. 0: the exact form with a factor-2 slip (method right), or method right (feedback recognized) but the inverter gain taken as $g_{m3}r_{ds3}$ only. −2 (asserted as fact): $R_{in} \approx 1/g_{m1}$ or $r_{ds1}$ (feedback missed), positive feedback claimed, or the source node treated as ac ground.
