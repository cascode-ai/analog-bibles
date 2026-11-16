# Golden Solution - A430

## Reference answer

$R_1 = 2R_0$, $R_2 = 16R_0/3 \approx 5.33R_0$, $R_3 = 32R_0/5 = 6.4R_0$, $R_4 = 16R_0$.

- $|v_{out}| = V_{REF}\sum b_i R_0/R_{i+1}$, so each single-bit level gives one ratio.
- 1000 → 8/16: $R_0/R_1 = 1/2$; 0100 → 3/16: $R_2 = 16R_0/3$; 0010 → 2.5/16: $R_3 = 32R_0/5$; 0001 → 1/16: $R_4 = 16R_0$. The other codes are consistent with these weights (8, 3, 2.5, 1 LSB).

## Grading notes

+2: all four ratios. +1: three correct, one misread. 0: two correct. −2 (asserted as fact): inverted ratios (e.g. $R_2 = 3R_0/16$), the ideal binary values 2, 4, 8, 16 $R_0$ given as the answer, or a misread circuit (resistors placed in the feedback path).
