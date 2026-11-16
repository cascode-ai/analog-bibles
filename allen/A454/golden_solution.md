# Golden Solution - A454

## Reference answer

N = 7.

- Worst-case DNL at the MSB transition: $(2^N - 1)\Delta C/C$ LSB. N = 7: 127 × 0.002 = 0.254 LSB; N = 8: 255 × 0.002 = 0.51 LSB > 0.5 LSB.
- Because the capacitors are referred to $C_X$, the worst-case INL at full scale (all capacitors off by +0.2 % relative to nominal) is also up to $(2^N - 1)\Delta C/C$, giving the same limit.
- The single-bit INL estimate $2^{N-1}\Delta C/C \le 0.5$ alone would allow N = 8 (0.256 LSB), but the DNL at the MSB transition would then be 0.51 LSB.

## Grading notes

+2: N = 7 from the worst-case DNL (or full-scale INL) $(2^N - 1)\cdot0.002 \le 0.5$. +1: N = 8 from the single-bit INL criterion $2^{N-1}\cdot0.002 \le 0.5$ with correct arithmetic (DNL overlooked), or N = 8 from a stated monotonicity criterion. 0: right formula with an arithmetic slip leading to a different N. −2 (asserted as fact): N ≥ 9, or N ≤ 6 from a wrong formula.
