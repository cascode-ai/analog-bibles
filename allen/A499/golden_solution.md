# Golden Solution - A499

## Reference answer

±0.5 LSB.

- Let $e_1, \dots, e_7$ be the deviations (in LSB) of the seven transitions; $e_1 = e_7 = 0$, and each of the six interior codes changes the deviation by its width error, so $|e_{k+1} - e_k| \le 0.5$ LSB.
- To reach $+x$ at transition $i$ and $-x$ at transition $j$ (or the reverse order) the path needs $a$ steps from $e_1$ to the first extreme, $b$ steps between the extremes and $c$ steps back to $e_7$, with $a + b + c = 6$, $x \le 0.5a$, $2x \le 0.5b$, $x \le 0.5c$. With integer step counts the best split (1, 4, 1 or 2, 2, 2) gives $x = 0.5$ LSB; $x = 0.75$ LSB would need 1.5 + 3 + 1.5 = 6 steps with fractional counts, i.e. at least 2 + 3 + 2 = 7, which a 3-bit converter does not have.
- Example (ideal transitions at 0.5, 1.5, …, 6.5 LSB): code widths of 001…110 = 1.5, 0.5, 0.5, 1.0, 1.5, 1.0 LSB (DNL +0.5, −0.5, −0.5, 0, +0.5, 0), giving transitions at 0.5, 2.0, 2.5, 3.0, 4.0, 5.5, 6.5 LSB, i.e. INL = 0, +0.5, 0, −0.5, −0.5, 0, 0 LSB.
- (If only one polarity is required, the deviation can accumulate to 1.5 LSB at the middle transition: codes 001–011 1.5 LSB wide and 100–110 0.5 LSB wide.)

## Grading notes

+2: ±0.5 LSB with a valid argument (deviations change by at most 0.5 LSB per code, endpoints fixed, too few codes to reach ±0.75) and a sketch or transition list whose DNL stays within ±0.5 LSB and whose INL reaches +0.5 and −0.5 LSB. +1: ±0.5 LSB with a valid example but no argument that larger symmetric values are impossible, or a correct argument without the sketch. 0: the one-sided bound 1.5 LSB correctly derived but the symmetric requirement ignored, or ±0.25 LSB from the DNL ≤ 2·INL relation with sound reasoning but not answering the question asked. −2 (asserted as fact): ±1.5 LSB or ±3 LSB presented as the symmetric value, or an example characteristic that violates the ±0.5 LSB DNL limit used to justify a larger value.
