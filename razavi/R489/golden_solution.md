# Golden Solution - R489

## Reference answer

Each output can swing from ≈ 0.39 V to ≈ 2.34 V, i.e. ≈ 1.95 V peak-to-peak single-ended. The differential output ($V_{out1} - V_{out2}$) swings ≈ 3.9 V peak-to-peak.
- Lower limit: $M_7$ must stay saturated, $V_{out} \ge V_{GS7} - V_{TH7} = \sqrt{2(1\ \mathrm{mA})/[(134\ \mu)(100)]} = 0.386$ V.
- Upper limit: $M_5$ must stay saturated, $V_{out} \le V_{DD} - |V_{GS5} - V_{TH5}| = 3 - \sqrt{2(1\ \mathrm{mA})/[(38.4\ \mu)(120)]} = 3 - 0.659 = 2.341$ V.
- Single-ended swing: 2.341 − 0.386 ≈ 1.95 V; differential: 2 × 1.95 ≈ 3.9 V p-p.

## Grading notes

+2: limits 0.39 V and 2.34 V (±0.02 V), with 1.95 V per output and/or 3.9 V differential, clearly labeled. +1: correct limits but the swing reported ambiguously (e.g., differential vs single-ended unclear). 0: one limit right. -2 (asserted as fact): limits based on $V_{TH}$ or full $V_{GS}$ (e.g., $V_{DD} - |V_{GS5}|$), the 50/0.5 size used for $M_5$, or an output limited by first-stage devices.
