# Golden Solution - A157

## Reference answer

ICMR ≈ 0.57 V, from $v_{IC}(\min) \approx 0.93$ V to $v_{IC}(\max) \approx 1.50$ V.

- Currents: 100 µA in M5–M10, 50 µA in M1–M4.
- $v_{IC}(\max) = V_{GS3} + V_{TN}$: M1's drain is clamped by the diode-connected M3 at $V_{GS3} = 0.7 + \sqrt{2 \cdot 50/(110 \cdot 100)} = 0.795$ V, giving 1.495 V.
- $v_{IC}(\min) = V_{DS5}(\mathrm{sat}) + V_{GS1} = 0.135 + 0.795 = 0.930$ V.
- ICMR = 1.495 − 0.930 = 0.565 V.

## Grading notes

+2: ICMR = 0.55–0.58 V with both limits ≈ 1.50 V and ≈ 0.93 V. +1: right method with a slip in one limit (ICMR within ±0.05 V). 0: one limit right and the other wrong. −2 (asserted as fact): ICMR ≈ 1.07 V from $v_{IC}(\max) = 2.0$ V (M1's drain treated as free to rise to $V_{DD} - V_{SD6}(\mathrm{sat})$), an ICMR extending beyond what the clamped drain allows, or limits taken from the wrong transistors.
