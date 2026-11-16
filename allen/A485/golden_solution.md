# Golden Solution - A485

## Reference answer

Two bits; the error occurs at the third bit.

Derivation (worst case: all bits 1, since each 1 brings the 10% loss):
- With every bit 1, $C_1$ holds $0.9V_{REF}$ before each redistribution: $v_n = (0.9 + v_{n-1})/2$, $v_0 = 0$ → $v_n = 0.9(1 - 2^{-n})$ V, while the ideal is $1 - 2^{-n}$ V.
- Error $= 0.1(1 - 2^{-n})$ V: $n = 1$: 0.050 V < ½ LSB = 0.25 V; $n = 2$: 0.075 V < 0.125 V; $n = 3$: 0.0875 V > 0.0625 V → error.

## Grading notes

+2: 2 bits (error at the third bit) with the all-ones worst case and the ±½ LSB comparison at each $n$. +1: correct conclusion with a slip in one intermediate number, or the worst case not justified. 0: correct recursion but a different criterion used and stated (e.g. ±1 LSB, giving 3 bits). −2 (asserted as fact): 1 bit, 4 or more bits under the stated criterion, or the 10% loss applied to bits that are 0.
