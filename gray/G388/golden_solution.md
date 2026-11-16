# Golden Solution - G388

## Reference answer

$|dV_{od}/dt| = 40$ V/μs.

- During slewing a large differential input turns one input transistor off; say $M_2$ is off and $M_1$ carries the whole tail current, 200 μA.
- Node $V_{o1}$: $M_3$ supplies 100 μA and $M_1$ sinks 200 μA, so 100 μA discharges the 5-pF capacitor: $dV_{o1}/dt = -20$ V/μs.
- Node $V_{o2}$: $M_4$ supplies 100 μA and $M_2$ sinks nothing, so 100 μA charges its capacitor: $dV_{o2}/dt = +20$ V/μs.
- $dV_{od}/dt = -40$ V/μs (and +40 V/μs in the other direction). Equivalently $(I_{D5}/2)/(C/2)$, since the differential load is two 5-pF capacitors in series. The CM output does not change, so the CMFB does not intervene.

## Grading notes

+2: 40 V/μs (either sign), with the mechanism (one device off, 100 μA net into each capacitor in opposite directions). +1: correct per-output slew rate 20 V/μs with the differential value stated but an explanation gap. 0: only the single-ended 20 V/μs given as the answer for $V_{od}$, with sound mechanism. −2 (asserted as fact): 80 V/μs (full 200 μA into each capacitor), 20 V/μs as the DM slew rate with wrong reasoning, or 10 V/μs.
