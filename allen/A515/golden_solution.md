# Golden Solution - A515

## Reference answer

01111111: the MSB is already wrong, and all later bits except the 5th and 6th differ from the ideal 10001100.

- Stage 1: $0.1V_{REF} < 0.3V_{REF}$ → bit 0 (ideal 1), so the first stage adds $V_{REF}$: $V_1 = 0.2 + 1 = 1.2V_{REF}$, outside the ±$V_{REF}$ range.
- From then on every stage input exceeds $0.3V_{REF}$ and keeps growing: 1.2 → 1, 1.4 → 1, 1.8 → 1, 2.6 → 1, 4.2 → 1, 7.4 → 1, 13.8 → 1 (in a real circuit the residue clips at the positive limit, which still gives 1s).
- The output reconstructs to $V_{analog} = V_{REF}(-\frac12 + \frac14 + \cdots + \frac1{256}) = -0.004V_{REF}$ instead of $0.1V_{REF}$.

## Grading notes

+2: 01111111 with the MSB error explained ($0.1V_{REF}$ below the $0.3V_{REF}$ threshold) and the residue leaving the ±$V_{REF}$ range so all later bits are 1. +1: correct word with an incomplete explanation (e.g., the out-of-range residue not noted). 0: right threshold rule with a residue slip changing later bits. −2 (asserted as fact): a threshold of −0.3$V_{REF}$ used contrary to the stated convention (10010000), the offset treated as amplified by later stages, or the claim that only the 7th bit is wrong.
