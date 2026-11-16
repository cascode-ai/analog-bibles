# Golden Solution - A461

## Reference answer

Divisor 3: $+INL = +1$ LSB, $-INL = 0$ LSB; $+DNL = +1/3$ LSB (≈ 0.33), $-DNL = -1$ LSB. The output never decreases, but at 0011→0100, 0111→1000 and 1011→1100 the step is zero (two codes give the same output), so the DAC is just at the limit: monotonic only in the non-decreasing sense, not strictly monotonic.
Divisor 5: $+INL = 0$ LSB, $-INL = -0.6$ LSB; $+DNL = +0.6$ LSB, $-DNL = -0.2$ LSB; monotonic.

Derivation (1 LSB = $V_{REF}/16$; code $= 4m + n$ with $m = 2b_0 + b_1$, $n = 2b_2 + b_3$):
- Output $= 4m + 4n/d$ LSB; ideal $= 4m + n$.
- $d = 3$: LSB part $4n/3$, error $+n/3$ = 0, 1/3, 2/3, 1 LSB. Steps inside a group: 4/3 LSB (DNL = +1/3); at a group transition the output goes from $4m + 4$ to $4(m+1)$, a step of 0 (DNL = −1).
- $d = 5$: LSB part $0.8n$, error $-0.2n$ = 0 … −0.6 LSB. Steps inside a group: 0.8 LSB (DNL = −0.2); at a group transition: $4 - 2.4 = 1.6$ LSB (DNL = +0.6). All steps positive: monotonic.

## Grading notes

+2: all eight values correct (±0.02 LSB) and the monotonicity verdicts: divisor 5 monotonic; divisor 3 recognised as the borderline case with zero steps (DNL = −1 LSB), whether called "monotonic (non-decreasing)" or "not strictly monotonic". +1: one value wrong by a slip or the borderline nature of the divisor-3 case not mentioned while its DNL of −1 LSB is right. 0: one divisor case correct and the other wrong or missing. −2 (asserted as fact): the divisor-3 output said to decrease at a transition, the divisor-5 DAC called nonmonotonic, or a wrong LSB size or divisor treated as a multiplier.
