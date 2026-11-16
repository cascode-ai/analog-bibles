# Golden Solution - G406

## Reference answer

$A_{dm} \approx -5.000$ (−5.00008), $A_{cm} = 0$, $A_{dm-cm} = 0$, $A_{cm-dm} \approx +0.0167$.

- With $v_{i1} = v_{i2} = v_i$ and $v_{o2} = -v_{o1}$: $v_{o1} = v_i(1 + R_3/R_1) - (R_3/R_1)v_{s1}$, $v_{o2} = v_i(1 + R_3/R_2) - (R_3/R_2)v_{s2}$.
- $v_{o1} + v_{o2} = 0$ gives $v_i = \dfrac{R_3(v_{s1}/R_1 + v_{s2}/R_2)}{2 + R_3/R_1 + R_3/R_2} = \dfrac{4.9505v_{s1} + 5.0505v_{s2}}{12.001}$.
- $v_{od} = v_i(R_3/R_1 - R_3/R_2) - R_3(v_{s1}/R_1 - v_{s2}/R_2)$.
- CM input ($v_{s1} = v_{s2} = v_{sc}$): $v_i = 0.8333v_{sc}$, $v_{od} = -0.1(0.8333)v_{sc} + 0.1v_{sc} = 0.0167v_{sc}$; exactly $1000/59999$. This equals $(R_3/R)(\Delta R/(R + R_3)) = 5(0.02)/6$ with $R$ = 1 kΩ, $\Delta R$ = 0.02 kΩ.
- DM input: $v_{od} \approx -5.0001v_{sd}$.
- Since the op amp forces $v_{oc} = 0$, $A_{cm} = A_{dm-cm} = 0$ even with the resistor mismatch.

## Grading notes

+2: $A_{dm}$ ≈ −5, $A_{cm}$ = 0, $A_{dm-cm}$ = 0, $A_{cm-dm}$ ≈ +0.0167 (±5%; sign must match the stated definitions). +1: all right except the sign of $A_{cm-dm}$, or a small slip in it. 0: $A_{dm}$, $A_{cm}$, $A_{dm-cm}$ right but $A_{cm-dm}$ missing or wrong. −2 (asserted as fact): $A_{cm-dm}$ = 0 (mismatch effect missed), nonzero $A_{cm}$ or $A_{dm-cm}$ despite $a_{cm} = 0$, or $A_{dm}$ noticeably different from −5 (e.g. −4.95).
