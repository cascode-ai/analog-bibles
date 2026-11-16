# Golden Solution - A001

## Reference answer

$D = 13/16 = 0.8125$.

With $b_4 = 1$, $b_3 = 1$, $b_2 = 0$, $b_1 = 1$, $b_0 = 0$ and $N = 5$: $D = 1\cdot2^{-1} + 1\cdot2^{-2} + 0\cdot2^{-3} + 1\cdot2^{-4} + 0\cdot2^{-5} = 0.5 + 0.25 + 0.0625 = 0.8125 = 13/16$ (the integer value 26 of the word, scaled by $2^{-5}$: 26/32).

## Grading notes

+2: 0.8125 (or 13/16, 26/32) obtained with the given weighting, MSB $b_4$ weighted by 1/2. +1: correct weights and value with a harmless slip in a side remark. 0: correct weights listed but the sum added up wrong. −2 (asserted as the answer): 26 (plain integer value, ignoring the stated fractional weighting), 11/32 = 0.34375 (bit order reversed), or any other value.
