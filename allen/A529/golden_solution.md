# Golden Solution - A529

## Reference answer

Reference divider: $\Delta R/R \le 1/8 = \pm 12.5\,\%$. Interpolating resistors: $\Delta R/R \le 1/4 = \pm 25\,\%$ (each group of four lies between two driven nodes; worst case at the middle taps $V_{2b}$ and $V_{1b}$).

Reference divider ($V_{REF}$–$R$–$V_{REF}/2$–$R$–ground):
- Worst case: one resistor $R(1+\delta)$, the other $R(1-\delta)$, so the tap is $\tfrac{V_{REF}}{2}(1 \pm \delta)$, an error of $\delta V_{REF}/2$.
- This tap is $A_1$'s reference, so $A_1$'s crossing point (comparator 4), and with it the transitions tied to $V_1$, shift by $\delta V_{REF}/2 = 4\delta$ LSB. (With the book's resistor-string result, worst-case INL $= 2^{N-1}\Delta R/R$ LSBs of the string; here $N = 1$, i.e. $\Delta R/R \times V_{REF}/2$.)
- $4\delta \le 0.5$ → $\delta \le 1/8$ = ±12.5 %.

Interpolating resistors ($V_2$–4R–$V_1$–4R–ground, $V_1$ driven by $A_1$):
- Within a group of four, the transitions are spread over 4 LSB in proportion to the tap's division ratio $\alpha$: a change $\Delta\alpha$ moves the transition by $4\Delta\alpha$ LSB.
- Middle tap: $\alpha = (R_a + R_b)/(R_a + R_b + R_c + R_d)$; worst case $R_a, R_b = R(1+\delta)$, $R_c, R_d = R(1-\delta)$ gives $\alpha = (1+\delta)/2$, $\Delta\alpha = \delta/2$, a shift of $2\delta$ LSB (the 4-resistor-string result $2^{2-1}\Delta R/R$).
- Quarter taps: $\Delta\alpha \approx 3\delta/8$, a shift of $1.5\delta$ LSB.
- $2\delta \le 0.5$ → $\delta \le 1/4$ = ±25 %.
- If the eight resistors were treated as one undriven 3-bit string (ignoring that $A_1$ fixes $V_1$), the same formula would give $4\delta \le 0.5$ → ±12.5 %, a conservative bound.

## Grading notes

+2: ±12.5 % for the $V_{REF}$ divider (tap error $\delta V_{REF}/2 = 4\delta$ LSB ≤ 0.5 LSB) and ±25 % for the interpolating resistors, with the reasoning that $V_1$ is driven by $A_1$ so each group of four is a separate 2-bit string whose worst case is at the middle tap ($2\delta$ LSB). +1: divider ±12.5 % correct and interpolating resistors ±12.5 % from treating the eight resistors as a single 3-bit string (conservative, ignores the driven midpoint); or both correct with a sketchy derivation. 0: one of the two results correct and the other wrong, e.g. a divider tolerance of ±25 % from letting only one of the two resistors deviate. −2 (asserted as fact): both results wrong, or tolerances of the order of ±1 % or less from using a wrong LSB (e.g., an 8-bit LSB).
