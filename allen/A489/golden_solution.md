# Golden Solution - A489

## Reference answer

$v_{OUT} = V_{REF}\left[\frac{b_0}{2} + \frac{3}{16}b_1 + \frac{15}{128}b_2 + \frac{15}{256}b_3\right]$; INL: +0 LSB and −1.1875 LSB; DNL: +1.1875 LSB and −0.8125 LSB (the DAC remains monotonic).

Derivation: $v_{OUT} = \frac12\left[b_0 + \frac38\left(b_1 + \frac58\left(b_2 + \frac12b_3\right)\right)\right]V_{REF}$.
- Outputs in units of $V_{REF}/256$ for codes 0000 … 1111: 0, 15, 30, 45, 48, 63, 78, 93, 128, 143, 158, 173, 176, 191, 206, 221 (ideal: 16 × code).
- INL $= -(16b_1 + 2b_2 + b_3)/16$ LSB: 0 at 0000 and 1000, down to −19/16 = −1.1875 LSB at 0111 and 1111; never positive.
- Steps: 15/16 LSB within each group of four codes (DNL −0.0625), 3/16 LSB at 0011→0100 and 1011→1100 (DNL −0.8125), 35/16 LSB at 0111→1000 (DNL +1.1875).
- Sketch: a staircase lying on or below the ideal line, with small shortfalls growing within each group, a near-flat step at the $b_1$ transitions and a large jump at the MSB transition.

## Grading notes

+2: correct output expression or the 16 levels, INL 0/−1.1875 LSB and DNL +1.1875/−0.8125 LSB (±0.01), with a sketch description consistent with them. +1: one of the four values wrong by a slip, or the values right with no description of the characteristic. 0: correct expression but INL/DNL wrong, or only INL right. −2 (asserted as fact): the 5/8 and 3/8 applied to the wrong bits (e.g. weights computed in the reversed order), the DAC called nonmonotonic, or INL measured against an endpoint line contrary to the stated reference giving different numbers.
