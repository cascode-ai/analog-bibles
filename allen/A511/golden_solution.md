# Golden Solution - A511

## Reference answer

$|V_{OS}| = 0.2V_{REF}$ (either sign).

- Ideal stage inputs: $V_0 = 0.7$, $V_1 = 0.4$, $V_2 = -0.2$, $V_3 = 0.6$, $V_4 = 0.2$ ($V_{REF}$ units) → 11011. The residues depend only on the bits, so an offset changes nothing until a decision flips.
- The inputs closest to the threshold are $V_2 = -0.2V_{REF}$ and $V_4 = +0.2V_{REF}$: a threshold at $+0.2V_{REF}$ or above flips the 5th bit, one at $-0.2V_{REF}$ or below flips the 3rd bit.

## Grading notes

+2: 0.2$V_{REF}$ (±0.01$V_{REF}$), from the stage input nearest zero; either sign accepted. +1: right value with incomplete reasoning, or quoted as "0.2 V" with $V_{REF}$ = 1 V stated. 0: right method but the residues miscomputed in one stage. −2 (asserted as fact): offsets treated as amplified by the following stages (giving 0.2$V_{REF}$/2ⁿ), or a value set by the LSB size (e.g., $V_{REF}/32$).
