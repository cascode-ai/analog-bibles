# Golden Solution - A460

## Reference answer

Divisor 2: $+INL = +3$ LSB, $-INL = 0$ LSB; $+DNL = +1$ LSB, $-DNL = -3$ LSB; not monotonic.
Divisor 6: $+INL = 0$ LSB, $-INL = -1$ LSB; $+DNL = +1$ LSB, $-DNL = -1/3$ LSB (≈ −0.33); monotonic.

Derivation (1 LSB = $V_{REF}/16$; write the code as $4m + n$ with $m = 2b_0 + b_1$ and $n = 2b_2 + b_3$, each 0…3):
- MSB subDAC output = $4m$ LSB. LSB subDAC output = $(n/4)V_{REF} = 4n$ LSB, divided by the divisor $d$: $4n/d$ LSB. Ideal ($d = 4$): $n$ LSB.
- $d = 2$: LSB part $= 2n$, so the output is $4m + 2n$ LSB: 0, 2, 4, 6, 4, 6, 8, 10, 8, 10, 12, 14, 12, 14, 16, 18 for codes 0000…1111. Error $= n$: 0 to +3 LSB. Steps: 2 LSB inside each group (DNL = +1), and $4 - 6 = -2$ LSB at 0011→0100, 0111→1000, 1011→1100 (DNL = −3). The output decreases at these transitions, so the DAC is nonmonotonic.
- $d = 6$: LSB part $= 2n/3$, so the error is $-n/3$: 0, −1/3, −2/3, −1 LSB. Steps: 2/3 LSB inside each group (DNL = −1/3) and $4 - 2 = 2$ LSB at the group transitions (DNL = +1). Every step is positive, so the DAC is monotonic.

## Grading notes

+2: all eight values correct (divisor 2: INL +3/0, DNL +1/−3; divisor 6: INL 0/−1, DNL +1/−1/3, ±0.02 LSB) and the verdicts nonmonotonic (2) and monotonic (6). Magnitudes given without signs are acceptable if it is clear which side each value is on. +1: one value wrong by a slip, or one monotonicity verdict missing, with the rest correct. 0: one divisor case fully correct and the other wrong or missing. −2 (asserted as fact): the divisor-2 DAC called monotonic, the divisor treated as a multiplier, INL taken against an endpoint or best-fit line contrary to the stated definition with different numbers, or LSB taken as $V_{REF}/4$ or $V_{REF}/8$.
