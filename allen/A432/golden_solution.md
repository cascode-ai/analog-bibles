# Golden Solution - A432

## Reference answer

$A_{vd}(0) \ge 56.2$ V/V.

- Feedback factor $\beta = G_0/(G_0 + \sum b_i/R_{i+1}) = 1/(1 + D)$ with $D = \sum b_i/2^{i+1}$; $v_{out} = -D V_{REF}\,\dfrac{A\beta}{1 + A\beta}$, so the error is $D V_{REF}/(1 + A\beta)$.
- Worst case at 1111: $D = 15/16$, $\beta = 16/31$: $\dfrac{15/16}{1 + 16A/31} \le \dfrac{1}{32}$ → $1 + 16A/31 \ge 30$ → $A \ge 29\cdot31/16 = 56.2$.

## Grading notes

+2: 56–61 V/V obtained with the code-dependent feedback factor (16/31 at full scale) and a 0.5-LSB limit. +1: correct method with a small slip in the final number. 0: the right idea but β taken as 1/2 without justification. −2 (asserted as fact): β = 1 (A ≈ 29–31), a 1-LSB or full-scale-free criterion giving a clearly different value, or $A$ in the thousands from a wrong error expression.
