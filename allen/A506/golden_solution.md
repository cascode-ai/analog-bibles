# Golden Solution - A506

## Reference answer

Digital word out: 1001. The four D/A conversions end at $v_{C1} = v_{C2}$ = 0.5, 0.75, 0.625 and 0.5625 $V_{REF}$.

Clock-by-clock levels (voltages in units of $V_{REF}$, listed as $v_{C1}$/$v_{C2}$; P = precharge/discharge period, S = share period):
- Iteration 1, word "1": P: 1 / 0 (C2 reset); S: 0.5 / 0.5. $0.6 > 0.5$ → MSB = 1.
- Gap: $v_{C2}$ reset to 0.
- Iteration 2, word "11" (LSB first: 1, 1): P: 1 / 0; S: 0.5 / 0.5; P: 1 / 0.5; S: 0.75 / 0.75. $0.6 < 0.75$ → second bit = 0.
- Gap: $v_{C2}$ → 0.
- Iteration 3, word "101" (LSB first: 1, 0, 1): P: 1 / 0; S: 0.5 / 0.5; P: 0 / 0.5; S: 0.25 / 0.25; P: 1 / 0.25; S: 0.625 / 0.625. $0.6 < 0.625$ → third bit = 0.
- Gap: $v_{C2}$ → 0.
- Iteration 4, word "1001" (LSB first: 1, 0, 0, 1): P: 1 / 0; S: 0.5 / 0.5; P: 0 / 0.5; S: 0.25 / 0.25; P: 0 / 0.25; S: 0.125 / 0.125; P: 1 / 0.125; S: 0.5625 / 0.5625. $0.6 > 0.5625$ → LSB = 1.

Sketch: $v_{C1}$ jumps between the precharge levels ($V_{REF}$ or 0) and the shared values; $v_{C2}$ is a staircase that starts from 0 in each iteration and changes only in the share periods. The conversion takes 2 + 4 + 6 + 8 = 20 clock periods plus 3 gap periods (N(N + 1) = 20 charging steps).

## Grading notes

+2: final word 1001 and waveforms with the right levels: $v_{C2}$ reset to 0 at the start of each iteration, LSB-first charge sharing, end values 0.5, 0.75, 0.625, 0.5625 $V_{REF}$, $v_{C1}$ at $V_{REF}$ or 0 in the precharge periods and equal to $v_{C2}$ after each share. Any consistent placement of the reset/gap periods is fine. +1: word right and end values right but intermediate levels wrong in one iteration, or waveforms given only as the end-of-iteration values with the sequence otherwise right, or trial words padded to fixed 4-bit words (1000, 1100, 1010, 1001) and converted LSB first: the share levels, decisions and word are right, but each early iteration gains leading zero-level periods, so the timing differs from the growing words the question specifies (2 + 4 + 6 + 8 clock periods). 0: the right word with no usable waveform, or waveforms right with the last comparison misjudged. −2 (asserted as fact): a wrong word (e.g., 1010, 1000), or a DAC operation that does not reset $C_2$ or does not halve at each share, leading to wrong levels used to decide the bits.
