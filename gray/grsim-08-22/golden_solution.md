# Golden Solution - grsim-08-22

## Reference answer

- Bias (no dc current in the 30-kΩ resistor, so $V_{G1} = V_o$): the reference chain (10 kΩ, diode-connected $Q_2$ and $M_2$) carries ≈ 0.32 mA, putting the base of $Q_1$ at ≈ 1.75 V; $Q_1$'s emitter (drain of $M_1$) is at ≈ 1.00 V, so $R_{L1}$ carries 4.0 mA, and $Q_1$'s emitter current (≈ 0.32 mA) flows into the same node, so $M_1$ sinks both: $I_{D1} \approx 4.0 + 0.32 = 4.31$ mA. $I_{D1}$ sets $V_{GS1} = 0.6 + \sqrt{4.31/30} = 0.98$ V $= V_o$; $I_{C3} \approx V_o/1\text{k} \approx 0.97$ mA; collector of $Q_1$ ≈ 1.76 V.
- Small signal: $g_{m(M1)} = 22.8$ mS, $g_{m(Q1)} = 12.2$ mS ($r_\pi = 8.2$ kΩ), $g_{m(Q3)} = 37$ mS ($r_\pi = 2.7$ kΩ); the base of $Q_1$ sees ≈ 0.66 kΩ (10 kΩ in parallel with the two diodes).
- Shunt-shunt two-port: $f = -1/30$ kΩ; basic amplifier with 30 kΩ at the input and at the output: open-loop voltage gain from gate to output ≈ −183 (CS stage $M_1$ into the cascode-like $Q_1$, 10-kΩ load, follower $Q_3$), $a \approx -5.5$ MΩ, $T = af \approx 183$.
- $v_o/i_i = a/(1+T) \approx -29.8$ kΩ (ideal $-30$ kΩ).
- $R_{in} = 30\text{k}/(1+T) \approx 163$ Ω; $R_{out} = z_{oa}/(1+T) \approx 111/184 \approx 0.60$ Ω.
- Large-signal: the output follows $V_o \approx 0.98\text{ V} - 30\text{k}\cdot i_i$ in the linear range; for positive input current the output falls until $Q_3$ cuts off (output ≈ 0 V, reached at $i_i \approx 0.98\text{ V}/30\text{ k}\Omega \approx +33$ μA) and stays there; for negative input current the output rises until $Q_1$ is cut off and $Q_3$ is driven only through the 10-kΩ resistor, giving an upper limit of about $(5 - 0.77)/1.1 \approx 3.8$ V, reached near $i_i \approx -0.1$ mA.

## Grading notes

A correct result shows: dc output ≈ 0.98 V; $v_o/i_i$ ≈ −29.5 to −29.9 kΩ; loop gain ≈ 175–190; input resistance ≈ 155–170 Ω; output resistance ≈ 0.55–0.65 Ω; a transfer characteristic with slope ≈ −30 kΩ through the operating point and saturating at both ends. Simulated small-signal values should agree with the hand values within ≈ 5%. A positive transresistance or impedances multiplied (rather than divided) by the loop gain indicate errors.
