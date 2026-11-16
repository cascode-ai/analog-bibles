# Golden Solution - G119

## Reference answer

Maximum instantaneous dissipation: 0.45 W for $R_L = 0$; ≈ 85 mW for $R_L \to \infty$.
- $I_Q = 2.86$ mA; quiescent point (15 V, 2.86 mA).
- $R_L = 0$: $V_o$ is held at 0, so $V_{ce1} = V_{CC} = 15$ V always: a vertical line at 15 V from $I_c = 0$ ($Q_1$ cut off, $Q_2$ drawing $I_Q$ from the short) up to $I_{c1} = \beta_F \times 0.3\ \mathrm{mA} = 30$ mA (drive limit). It crosses the 0.1, 0.2, 0.3 W hyperbolas at 6.7, 13.3, 20 mA and ends at $P = 15\ \mathrm{V} \times 30\ \mathrm{mA} = 0.45$ W, above all three.
- $R_L \to \infty$: $I_{c1} = I_Q = 2.86$ mA constant: a horizontal line from $V_{ce1} = 0.2$ V ($Q_1$ saturated) to $2V_{CC} - V_{CE2(\text{sat})} = 29.8$ V ($Q_2$ saturated). Maximum $P = 29.8 \times 2.86\ \mathrm{mA} \approx 85$ mW ($\approx 2V_{CC}I_Q$), below the 0.1 W hyperbola (which reaches 2.86 mA only at 35 V).
- Hyperbolas $I_c = P/V_{ce}$: 0.1 W passes through (3.33 V, 30 mA), (5 V, 20 mA), (10 V, 10 mA), (20 V, 5 mA); 0.2 W through (6.67 V, 30 mA), (10 V, 20 mA), (20 V, 10 mA); 0.3 W through (10 V, 30 mA), (15 V, 20 mA), (30 V, 10 mA).

## Grading notes

+2: vertical line at 15 V up to 30 mA with $P_{max} = 0.45$ W, horizontal line at $I_Q \approx 2.86$ mA from ≈0.2 V to ≈29.8 V with $P_{max} \approx 85$ mW (80–86 mW accepted), and hyperbolas described correctly. +1: both maxima right but the hyperbolas or the line end points missing or vague. 0: only one load line and its maximum right. −2 (asserted as fact): $R_L = 0$ drawn as a horizontal line or $R_L \to \infty$ as a vertical line, maximum for $R_L = 0$ limited to the quiescent value, or the drive limit ignored so that the dissipation is claimed unbounded without noting the 30 mA limit.
