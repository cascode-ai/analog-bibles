# Golden Solution - A494

## Reference answer

At the 4th bit conversion.

Outputs (units of $V_{REF}$; bits LSB first 1, 1, 0, 0, 1; tolerance after $k$ conversions $\pm2^{1-k}$):
- $k = 1$: ideal 1, actual 0.9, error −0.1 (tolerance 1).
- $k = 2$: ideal 1.5, actual $0.9 + 0.45 = 1.35$, error −0.15 (tolerance 0.5).
- $k = 3$: ideal −0.25, actual $-0.8 + 0.675 = -0.125$, error +0.125 (tolerance 0.25).
- $k = 4$: ideal −1.125, actual $-0.8 - 0.0625 = -0.8625$, error +0.2625 > 0.125 → error.
- $k = 5$: ideal 0.4375, actual $0.9 - 0.43125 = 0.46875$, error +0.031 (within the final tolerance 0.0625: the halving in the last step and the −0.1 error of the MSB reference partly cancel, so the final 5-bit value happens to come out within ±½ LSB).

## Grading notes

+2: "4th bit" with the iteration values (0.9, 1.35, −0.125, −0.8625, 0.469) and the ±½ LSB comparison. A tolerance of $\pm2^{-k}V_{REF}$ also gives the 4th bit (the 3rd-bit error then equals the limit) and is accepted. Noting that the final output is nevertheless within tolerance is a plus. +1: correct answer with a slip in a non-critical value. 0: correct iteration but only the final output checked, concluding "no error" or not locating the bit. −2 (asserted as fact): an error claimed at the 1st, 2nd or 3rd bit under the stated criterion, bits applied MSB first, or $V_{REF1}$/$V_{REF2}$ assigned to the wrong bit values.
