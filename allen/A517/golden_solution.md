# Golden Solution - A517

## Reference answer

$|V_{OS}| = 0.2V_{REF}$.

- Node voltages: $v(0) = 0.6$, $v(1) = 0.2$, $v(2) = -0.6$, $v(3) = -0.2$, $v(4) = 0.6$ ($V_{REF}$ units). The offsets move only the decision thresholds, and the residues depend only on the bits, so nothing changes until the offset reaches the smallest |v(i)|, 0.2$V_{REF}$.
- With the polarity drawn (the comparator sees $v(i) + V_{OS}$), $V_{OS} = +0.2V_{REF}$ flips $b_3$ ($v(3) = -0.2V_{REF}$) and $V_{OS} = -0.2V_{REF}$ flips $b_1$ ($v(1) = +0.2V_{REF}$).

## Grading notes

+2: 0.2$V_{REF}$ (±0.01$V_{REF}$) from the node closest to zero; either sign or both accepted. "0.2 V" is fine if $V_{REF}$ = 1 V is stated. +1: right value with incomplete reasoning. 0: right method with one residue miscomputed. −2 (asserted as fact): an offset tolerance that shrinks by 2 per stage (offsets treated as amplified), a value tied to the LSB size, or 0.6$V_{REF}$ from the first stage only.
