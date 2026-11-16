# Golden Solution - A455

## Reference answer

$A_{vd}(0) \ge 1022$.

- Ideal output: $v_{out} = -(C/C)(-V_{REF}) = +V_{REF}$ (full scale).
- Feedback factor $\beta = C/(C + C) = 1/2$, loop gain $A/2$: $v_{out} = V_{REF}\dfrac{A/2}{1 + A/2}$, relative error $1/(1 + A/2)$.
- 0.5 LSB of an 8-bit DAC is $V_{REF}/2^9$: $1/(1 + A/2) \le 1/512$ → $A \ge 2(512 - 1) = 1022$.

## Grading notes

+2: ≈ 1022 (1020–1024) with β = 1/2 and the 0.5-LSB (1/512) criterion. +1: correct method with a small slip. 0: 510 from a 1-LSB criterion with β = 1/2 stated. −2 (asserted as fact): β = 1 (≈ 511), or values of the order of $2^8$ from a wrong error expression.
