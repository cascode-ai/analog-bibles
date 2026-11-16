# Golden Solution - G390

## Reference answer

$|dV_{od}/dt| \approx 144$ V/μs (≈ 72 V/μs at each output, in opposite directions).

- With a large differential input, one input device turns off; say $M_2$ is off and $M_1$ carries all 200 μA.
- At the drain of $M_1$ (gate of $M_9$): $M_1$ supplies 200 μA and $M_3$ sinks only 100 μA, so 100 μA flows through the Miller capacitor $C$ into the $M_9$ stage. The second stage keeps its input node nearly fixed (Miller integrator), so $V_{o2}$ ramps at $100\ \mu\text{A}/1.39\ \text{pF} = 72$ V/μs (downward).
- At the drain of $M_2$: no current from $M_2$ and 100 μA into $M_4$, so −100 μA flows through the other $C$ and $V_{o1}$ ramps up at 72 V/μs.
- $dV_{od}/dt = 2 \times 72 = 144$ V/μs $= |I_{D5}|/C$. (This internal slew rate holds provided the second stages can supply the capacitor currents plus the load current, which depends on the load.)

## Grading notes

+2: ≈ 144 V/μs (±5%), from 100 μA (= the load-current imbalance, half the tail current) through each compensation capacitor and the two outputs moving in opposite directions. A remark that a heavily loaded output stage could limit slewing is acceptable. +1: 72 V/μs per output correctly derived, but the differential value not stated or given as 72. 0: right mechanism with a slip. −2 (asserted as fact): 288 V/μs (full 200 μA through each C), 36 V/μs, or a slew rate computed from the output-stage current alone as the answer (e.g. 400 μA/1.39 pF).
