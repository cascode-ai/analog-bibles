# Golden Solution - R431

## Reference answer

About 0.51 V: $V_{b1} - V_{TH4} = 1.0\ \mathrm{V} \le V_{out} \le V_{b1} - V_{GS4} + V_{TH2} \approx 1.51$ V, i.e. $V_{TH} - V_{OD4}$.

- $V_{OD} = 0.193$ V for $M_1$–$M_4$ ($W/L = 200$, 0.5 mA), $V_{GS4} = 0.893$ V.
- Lower limit: $M_4$ saturated needs $V_{out} \ge V_{b1} - V_{TH4} = 1.0$ V.
- Upper limit: the drain of $M_2$ is at $V_{b1} - V_{GS4} = 0.807$ V; with its gate at $V_{out}$, $M_2$ stays saturated for $V_{out} \le 0.807 + 0.7 = 1.507$ V.
- The PMOS side (low-voltage cascode) allows the output up to $V_{DD} - |V_{OD8}| - |V_{OD6}| \approx 2.28$ V and does not bind. The tail keeps $V_P = V_{out} - V_{GS2} \ge 0.1$ V.
- Swing ≈ 1.507 − 1.0 = 0.51 V.

## Grading notes

+2: ≈ 0.51 V (0.48–0.53 V) with the range 1.0 V to ≈ 1.51 V and the limiting devices $M_4$ and $M_2$ identified. +1: correct symbolic limits with a slip (e.g., W/L = 100 giving ≈ 0.43 V). 0: one limit right and the other wrong. -2 (asserted as fact): swing computed as the open-loop output range (≈ 1.3 V or more), or limits that ignore that the gate of $M_2$ follows the output.
