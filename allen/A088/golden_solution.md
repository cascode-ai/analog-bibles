# Golden Solution - A088

## Reference answer

$V_{Bias} = V_T + 2V_{ON} \approx 1.55$ V gives the smallest $V_{min} = 2V_{ON} \approx 0.85$ V; $R_{out} \approx g_{m4}r_{ds4}r_{ds2} \approx 29$ MΩ.

- Each device carries 100 µA: $V_{ON} = \sqrt{2\times100\ \mu/(110\ \mu\times10)} = 0.426$ V, $V_{GS} = 1.126$ V. M1's gate (the drain of M3) settles at $V_{GS1}$ = 1.126 V.
- M3 and M4 have the same current and size, so both sources are at $V_{Bias} - V_{GS}$, which is the $V_{DS}$ of M1 and M2. Keeping M1 and M2 saturated requires $V_{Bias} - V_{GS} \ge V_{ON}$, so the smallest bias is $V_{Bias} = V_T + 2V_{ON} = 1.553$ V.
- Then $V_{min} = V_{DS2} + V_{ON4} = V_{Bias} - V_T = 2V_{ON} = 0.853$ V.
- M3 stays saturated: $V_{DS3} = 1.126 - 0.426 = 0.70$ V > $V_{ON}$. (The usable bias range is up to $V_T + V_{GS1}$ = 1.83 V.)
- $g_m = \sqrt{2\times110\ \mu\times10\times100\ \mu} = 469\ \mu\mathrm{A/V}$, $r_{ds} = 1/(0.04\times100\ \mu) = 250$ kΩ. $R_{out} = r_{ds2} + r_{ds4} + g_{m4}r_{ds4}r_{ds2} = 0.5 + 29.3 = 29.8$ MΩ (≈ 29.3 MΩ with the dominant term only).

## Grading notes

+2: $V_{Bias}$ = 1.52–1.58 V, $V_{min}$ = 0.82–0.88 V (= $2V_{ON}$), and $R_{out}$ = 28–31 MΩ. +1: all three right in method with one value off by a slip, or the body effect included ($V_{Bias}$ ≈ 1.64 V, $R_{out}$ ≈ 35 MΩ, $V_{min}$ still 0.85 V) although the question neglects it. 0: two of the three right. −2 (asserted as fact): $V_{min} = V_T + 2V_{ON}$ (≈ 1.55 V) claimed as the minimum output voltage, $V_{min}$ ≈ 0.31 V or $V_{ON}$ alone, $R_{out} = r_{ds}$ or $2r_{ds}$, or M1 treated as a device whose gate is at $V_{Bias}$.
