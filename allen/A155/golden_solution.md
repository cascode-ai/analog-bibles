# Golden Solution - A155

## Reference answer

$v_s = \dfrac{g_{ds1}g_{m1}g_{m3}}{(g_{ds1} + g_{ds3})\left[2g_{m1}g_{m3} + 2g_{m1}g_{ds3} + 2g_{m3}g_{ds1} + g_{m3}g_{ds5} + 2g_{ds1}g_{ds3} + g_{ds1}g_{ds5} + g_{ds3}g_{ds5}\right]}\,v_{id} \approx \dfrac{g_{ds2}}{2(g_{ds2} + g_{ds4})}\,v_{id}$

This is in phase with $v_{id}$. With $\lambda_N = 0.04$ and $\lambda_P = 0.05$ V⁻¹ it is ≈ 0.22 $v_{id}$, not small.

- Node equations: KCL at D1 (diode M3, conductance $g_{m3} + g_{ds3}$), at D2 (M4 delivers $-g_{m4}v_{d1}$ and loads the node with $g_{ds4}$) and at S ($i_{d1} + i_{d2} = g_{ds5}v_s$), with $i_{d1} = g_{m1}(v_{id}/2 - v_s) + g_{ds1}(v_{d1} - v_s)$ and $i_{d2} = g_{m2}(-v_{id}/2 - v_s) + g_{ds2}(v_{out} - v_s)$.
- Leading order: $v_{d1} \approx -g_{m1}v_{id}/(2g_{m3})$ is small, while $v_{out} \approx g_{m1}v_{id}/(g_{ds2} + g_{ds4})$ is large. Summing at S: $-2g_mv_s + g_{ds2}v_{out} \approx 0$, so $v_s \approx g_{ds2}v_{out}/(2g_m) = g_{ds2}v_{id}/[2(g_{ds2} + g_{ds4})]$.
- Reason: the drain loads of M1 and M2 are different. M1's drain sits on the low-impedance diode M3 and barely moves, whereas M2's drain is the high-impedance output and swings by the full output voltage. Through $r_{ds2}$ this swing injects a current into the common source node that has no counterpart on the M1 side. The half circuits are not symmetric, so the source node is not an ac ground. With equal loads, or with $r_{ds2} \to \infty$, $v_s \to 0$.

## Grading notes

+2: a correct nonzero expression (exact or the leading-order form $g_{ds2}v_{id}/[2(g_{ds2}+g_{ds4})]$) and the reason (unequal drain loads: the large output swing coupled through $r_{ds2}$ while M1's drain is held by the diode). +1: the right reason with a slip in the expression (e.g. missing factor 1/2), or a correct expression with a vague reason. 0: the set-up right but not solved, with the right reason; or the expression right and no reason. −2 (asserted as fact): $v_s = 0$, a value of order $v_{id}/2$ explained as a common-mode leak (input polarity misread), or the reason given as device mismatch although matching is assumed.
