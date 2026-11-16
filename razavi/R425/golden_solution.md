# Golden Solution - R425

## Reference answer

Maximum swing ≈ 0.51 V: $V_{out}$ can range from $V_b - V_{TH4} = 0.70$ V to $V_b - V_{GS4} + V_{TH2} \approx 1.21$ V, i.e. $V_{TH} - V_{OD4}$.

- $V_{OD1-4} = \sqrt{2(0.5\ \mathrm{m})/(134\ \mu \cdot 200)} = 0.193$ V, $V_{GS4} = 0.893$ V.
- Lower end: $M_4$ saturated needs $V_{out} \ge V_b - V_{TH4} = 0.70$ V.
- Upper end: node X sits at $V_b - V_{GS4} = 0.507$ V; $M_2$ (gate at $V_{out}$) saturated needs $V_X \ge V_{out} - V_{TH2}$ → $V_{out} \le 1.207$ V (the same limit holds for $M_1$, whose gate follows $V_{out}$).
- PMOS side does not bind: the gates of $M_5$/$M_6$ sit at $V_{DD} - 2(1.15) = 0.70$ V, so $M_6$ stays saturated up to $V_{out} = 1.5$ V.
- Swing = 1.207 − 0.70 ≈ 0.51 V.
- (If the tail source is required to keep $V_P \ge 0$, the lower end becomes $V_{GS1} = 0.89$ V and the swing shrinks to ≈ 0.31 V; with the ideal $I_{SS}$ assumed here this is not a limit.)

## Grading notes

+2: range ≈ 0.70 V to ≈ 1.21 V (±0.03 V) giving ≈ 0.51 V, with the limits from $M_4$ (lower) and $M_2$ (upper). Also +2 if the answer additionally imposes an explicit tail-headroom limit (e.g., $V_P \ge 0$ → 0.89–1.21 V) and states it as an extra assumption. +1: the swing correct but one limit not justified. 0: correct limits in symbolic form ($V_b - V_{TH4} \le V_{out} \le V_b - V_{GS4} + V_{TH2}$) with a numerical slip in the final values (a slip, not −2), or one limit right, the other wrong. -2 (asserted as fact): swing computed as for an open-loop telescopic output ($V_{DD}$ minus overdrives, ≈ 2 V or more), or limits that ignore that the input follows the output.
