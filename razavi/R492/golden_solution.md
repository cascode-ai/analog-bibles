# Golden Solution - R492

## Reference answer

≈ 0.14 V/ns (≈ 139 V/µs) at each output, i.e. ≈ 0.28 V/ns (278 V/µs) for the differential output.
- With a large differential input one input device takes all of $I_{SS}$ and the other turns off. On the "off" side the PMOS load still delivers $I_{SS}/2$ into its $C_C$. On the "on" side the input device sinks $I_{SS}$ while its load supplies $I_{SS}/2$, so the net $I_{SS}/2$ is pulled through that $C_C$.
- X and Y stay near virtual ground (held by the second stage), so each output slews at $(I_{SS}/2)/C_C$ = 0.125 mA/0.9 pF ≈ 0.139 V/ns, in opposite directions.
- The output stage is not limiting: the falling side needs only $(C_L + C_C) \times$ SR ≈ 0.26 mA from the 1-mA sink, and $M_5$/$M_6$ can source more than 1 mA on the rising side.

## Grading notes

+2: $(I_{SS}/2)/C_C$ ≈ 0.14 V/ns per output (or ≈ 0.28 V/ns differential, clearly labeled), with the current-steering argument. A rough output-stage check that ignores the current drawn by $C_C$ (e.g., 1 mA/$C_L$ ≫ SR) is an acceptable approximation, not a false claim. +1: correct value with a vague mechanism. 0: correct mechanism with an arithmetic slip. -2 (asserted as fact): per-output slew rate $I_{SS}/C_C$ (0.28 V/ns) from assuming the full tail current charges one $C_C$, slew limited by $(C_L + C_C)$ or by the 1-mA output current, or $I_{SS}/C_L$.
