# Golden Solution - A377

## Reference answer

Useful values: $V_{SD4}(\mathrm{sat})$ at 15 µA = $\sqrt{2\cdot15/(50\cdot4.5)} = 0.37$ V; $V_{GS}$ of M1/M2 at $I_{SS}/2$ = $0.7+\sqrt{30/330} = 1.00$ V and $V_{DS2}(\mathrm{sat}) = 0.30$ V; output high level from the triode-M6 / saturated-M7 balance $V_{OH} = V_{DD}-(V_{DD}-v_{o1}-|V_{TP}|)\left[1-\sqrt{1-2I_7/[\beta_6(V_{DD}-v_{o1}-|V_{TP}|)^2]}\right]$, $\beta_6 = 1900\ \mu\mathrm{A/V^2}$.

| condition | $v_{o1}$ | $v_{out}$ |
|---|---|---|
| (1) $v_{G1} > V_{G2}$ | $V_{DD}-V_{SD4}(\mathrm{sat}) < v_{o1} < V_{DD}$: ≈ 2.13–2.5 V | $V_{SS} = -2.5$ V (M6 off) |
| (2) $v_{G1} \gg V_{G2}$ | ≈ $V_{DD}$ = 2.5 V | −2.5 V |
| (3) $v_{G1} < V_{G2}$ | $V_{S2} < v_{o1} < V_{S2}+V_{DS2}(\mathrm{sat})$, $V_{S2} = v_{G1}-V_{GS1}(I_{SS}/2)$: ≈ −1.0 to −0.7 V | high, ≈ 2.45 V |
| (4) $v_{G1} \ll V_{G2}$ | → $V_{SS}$ ≈ −2.5 V | high, ≈ 2.47 V |
| (5) $v_{G2} > V_{G1}$ | $V_{S2}(I_{SS}/2) < v_{o1} < V_{S2}(I_{SS}/2)+V_{DS2}(\mathrm{sat})$: ≈ −1.0 to −0.7 V | ≈ 2.45 V |
| (6) $v_{G2} \gg V_{G1}$ | ≈ −1.0 V (just above $V_S$) | ≈ 2.46 V |
| (7) $v_{G2} < V_{G1}$ | ≈ 2.13–2.5 V | −2.5 V |
| (8) $v_{G2} \ll V_{G1}$ | ≈ 2.5 V | −2.5 V |

Reasoning:
- When M1 carries more than M2, the mirror (M3–M4) pushes more current into the $v_{o1}$ node than M2 sinks, so $v_{o1}$ rises until M4 leaves saturation and $i_4 = i_2$ (or to $V_{DD}$ if $i_2 = 0$). Then $V_{SG6} < 0.37$ V < $|V_{TP}|$, M6 is off and M7 pulls $v_{out}$ to $V_{SS}$.
- When M2 carries more, $v_{o1}$ falls until M2 enters triode. In dc steady state KCL at $v_{o1}$ forces $i_2 = i_4 = i_1$, i.e. $i_1 = i_2 = I_{SS}/2$; the common-source node sits at the lower gate voltage minus $V_{GS}(15\ \mu\mathrm{A}) = 1.0$ V, so $v_{o1} \approx -1.0$ V (to −0.7 V) when the lower gate is near 0 V. M6 is then strongly on (triode) and $v_{out} \approx 2.45$–2.46 V.
- (6): with $V_{G1} = 0$ fixed, M1 pins the source node at ≈ −1.0 V however high $v_{G2}$ goes (M5 stays saturated), so $v_{o1}$ stays ≈ −1.0 V; $i_1 = 0$, $i_2 = I_{SS}$ holds only transiently.
- (4): with M1 cut off ($i_1 = 0$) no current reaches the node from M4, so $C_I$ discharges through M2 and M5 until M5 leaves saturation: $v_{o1} \to V_{SS}$ and $v_{out} = V_{DD}-4.3[1-\sqrt{1-468/(1900\cdot18.49)}] \approx 2.47$ V.

## Grading notes

+2: all eight rows with the correct high/low states and values within the stated ranges (high $v_{o1}$ ≈ 2.1–2.5 V; low $v_{o1}$ ≈ −1.0 to −0.7 V for (3), (5), (6); ≈ $V_{SS}$ for (4); $v_{out}$ = −2.5 V or ≈ 2.45 V). +1: one row wrong, e.g. (6) given as $V_{SS}$ (as some tables state) or (4) given as ≈ −1.0 V, with the rest right. 0: the high/low pattern right everywhere but no numerical values or ranges, or about half the rows right. −2 (asserted as fact): inverted logic (e.g. $v_{G1} > V_{G2}$ giving a high output), $v_{o1} = V_{DD}$ together with a high $v_{out}$ (self-contradictory), or M6 assumed on when $v_{o1}$ is near $V_{DD}$. For (4), a remark that an ideal 30-µA tail source admits no dc solution, followed by the limit in which M5 loses its current ($v_{o1} \to V_{SS}$, $v_{out}$ ≈ 2.47 V), is the correct row, not an error.
