# Golden Solution - A428

## Reference answer

INL = +0.5 LSB and −1.0 LSB; DNL = +0.5 LSB and −1.5 LSB; the DAC is not monotonic.

- Bit weights ($R_0/R_{i+1}$, in LSB = $V_{REF}/16$): $b_0$ 8, $b_1$ 3 (ideal 4), $b_2$ 2.5 (ideal 2), $b_3$ 1. $v_{out} = -(8b_0 + 3b_1 + 2.5b_2 + b_3)V_{REF}/16$.
- |v_out| in LSB for codes 0000 … 1111: 0, 1, 2.5, 3.5, 3, 4, 5.5, 6.5, 8, 9, 10.5, 11.5, 11, 12, 13.5, 14.5 (ideal 0 … 15).
- INL: +0.5 where $b_2 = 1, b_1 = 0$; −1.0 where $b_1 = 1, b_2 = 0$; −0.5 where both are 1.
- DNL: +0.5 at 0001→0010, 0101→0110, 0111→1000, 1001→1010, 1101→1110; −1.5 at 0011→0100 and 1011→1100, where the output falls by 0.5 LSB, so the DAC is nonmonotonic.

## Grading notes

+2: correct levels (weights 8, 3, 2.5, 1 LSB), INL +0.5/−1.0 LSB, DNL +0.5/−1.5 LSB, and "not monotonic". Because the DAC is inverting, INL computed from the signed output voltage, $(v_{out} - v_{ideal})$/LSB, has all signs reversed (−0.5/+1.0 LSB); this is equivalent and earns full credit, as does max |INL| = 1 LSB with a correct code-by-code profile. An endpoint-fit INL (≈ ±0.87–0.90 LSB) is also acceptable when the convention is stated. +1: one of the four INL/DNL values wrong by a slip, the rest right. 0: correct weights but INL/DNL mostly wrong, or values right but monotonicity wrong. −2 (asserted as fact): wrong bit weights (e.g. $R_0/R_2$ read as 16/3), the DAC called monotonic with wrong values, or INL and DNL confused.
