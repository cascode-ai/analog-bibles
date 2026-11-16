# Golden Solution - A493

## Reference answer

At the 4th bit conversion.

Outputs (units of $V_{REF}$; bits LSB first +1, −1, −1, +1, +1; after $k$ conversions the levels are spaced $2^{2-k}$, so the tolerance is $\pm2^{1-k}$):
- $k = 1$: ideal 1, actual 1, error 0 (tolerance 1).
- $k = 2$: ideal −0.5, actual $-1 + 0.7 = -0.3$, error +0.2 (tolerance 0.5).
- $k = 3$: ideal −1.25, actual $-1 + 0.7(-0.3) = -1.21$, error +0.04 (tolerance 0.25).
- $k = 4$: ideal 0.375, actual $1 + 0.7(-1.21) = 0.153$, error −0.222 > 0.125 → error.
- $k = 5$: ideal 1.1875, actual $1 + 0.7(0.153) = 1.107$, error −0.080 > 0.0625 (the final result is also wrong).

## Grading notes

+2: "4th bit conversion" with the iteration values (−0.3, −1.21, 0.153, 1.107) and a ±½ LSB comparison. A tolerance of $\pm2^{-k}V_{REF}$ (half of the one used here) gives the same answer and is accepted. +1: correct answer with one arithmetic slip in a non-critical step. 0: correct iteration but only the final output checked (concluding "the result is wrong" without locating the bit). −2 (asserted as fact): an error claimed at the 2nd or 3rd conversion, bits applied MSB first, or the gain 0.7 applied to the reference instead of the feedback.
