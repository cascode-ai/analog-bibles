# Golden Solution - G405

## Reference answer

$A_{dm} = -5$, $A_{cm} = 0$, $A_{dm-cm} = 0$, $A_{cm-dm} = 0$.

- $a_{dm} \to -\infty$ forces $v_{i1} = v_{i2} = v_i$; $a_{cm} = 0$ forces $v_{o2} = -v_{o1}$.
- KCL at the inputs: $(v_{s1} - v_i)/R_1 = (v_i - v_{o1})/R_3$ and $(v_{s2} - v_i)/R_2 = (v_i - v_{o2})/R_4$.
- Subtracting with $R_1 = R_2$, $R_3 = R_4$: $v_{od} = -(R_3/R_1)v_{sd} = -5v_{sd}$, independent of $v_{sc}$.
- $v_{oc} = 0$ for any input, so $A_{cm} = A_{dm-cm} = 0$. (The CM input only moves $v_i = \tfrac{5}{12}(v_{s1} + v_{s2})$.)

## Grading notes

+2: all four values right (−5, 0, 0, 0). +1: three right with one slip. 0: about half right. −2 (asserted as fact): $A_{dm} = -10$ or −2.5 (definition errors), or nonzero cross-gains claimed for the balanced circuit, or $A_{cm} = -5$.
