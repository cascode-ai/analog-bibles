# Golden Solution - A156

## Reference answer

$v_{IC}(\max) \approx 1.50$ V (essentially $V_{DD}$) and $v_{IC}(\min) \approx 0.93$ V.

- Bias: M9 sets 100 µA, mirrored by M6, M7 and M8. M8 feeds M10, which mirrors 100 µA into the tail M5. M1 and M2 carry 50 µA each. M6 supplies 100 µA to the M1 drain node, of which 50 µA goes to M1 and 50 µA to the diode-connected M3. M3/M4 mirror 50 µA, and M7's 100 µA at the output splits into 50 µA in M2 and 50 µA in M4.
- $v_{IC}(\max)$: M1's drain is clamped by the diode M3 at $V_{GS3} = 0.7 + \sqrt{2 \cdot 50\ \mu/(110\ \mu \cdot 100)} = 0.795$ V. M1 stays saturated while $v_{IC} \le V_{GS3} + V_{TN} = 1.495$ V. The output side gives the same limit in balance. M6 remains saturated, since $V_{SD6} = 0.705$ V > 0.2 V.
- $v_{IC}(\min) = V_{DS5}(\mathrm{sat}) + V_{GS1} = \sqrt{2 \cdot 100\ \mu/(110\ \mu \cdot 100)} + 0.795 = 0.135 + 0.795 = 0.930$ V.

## Grading notes

Credit is split equally between the two limits. +2: $v_{IC}(\max)$ = 1.48–1.51 V (with M1's drain at $V_{GS3}$) and $v_{IC}(\min)$ = 0.92–0.94 V. +1: one limit right and the other off by a slip (e.g. a wrong current in one overdrive). 0: one limit right and the other from a wrong path. −2 (asserted as fact): $v_{IC}(\max) = V_{DD} - V_{SD6}(\mathrm{sat}) + V_{TN} = 2.0$ V (treating M1's drain as free to rise to $V_{DD} - V_{SD6}(\mathrm{sat})$ although the diode M3 clamps it), $V_{DS5}(\mathrm{sat})$ omitted, or M1, M2 read as p-channel.
