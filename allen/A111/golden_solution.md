# Golden Solution - A111

## Reference answer

Keeping $R_2/R_1$ = 9.39 ($V_{REF}$ = 1.262 V, temperature independent): $R_4/R_1 = 4.74$, $I_{REF} = 0.386\ \mathrm{V}/R_1$. Hence $R_1 = 0.386\ \mathrm{V}/I_{REF}$, $R_2 = R_3 = 3.62\ \mathrm{V}/I_{REF}$, $R_4 = 1.83\ \mathrm{V}/I_{REF}$; e.g. for $I_{REF}$ = 100 µA: $R_1$ = 3.86 kΩ, $R_2 = R_3$ = 36.2 kΩ, $R_4$ = 18.3 kΩ.

- The op amp makes the voltages below $R_2$ and $R_3$ equal; with $R_2 = R_3$, $I_1 = I_2 = V_{R1}/R_1$, and $V_{R1} = V_{EB2} - V_{EB1} = V_t\ln10$ = 0.0599 V (PTAT). $V_{REF} = V_{EB2} + (R_2/R_1)V_t\ln10$.
- M1 supplies all three branches: $I_{REF} = I_1 + I_2 + V_{REF}/R_4 = 2V_t\ln10/R_1 + V_{REF}/R_4$.
- With $R_2/R_1$ = 9.39, $V_{REF} = 0.7 + 9.39\times0.0599 = 1.262$ V and $dV_{REF}/dT = 0$. The PTAT part rises at $2V_t\ln10/(R_1T_0)$; the $R_4$ part falls at $(V_{REF}/R_4)\,TC_{R4}$. Zero TC: $\dfrac{2V_t\ln10}{R_1T_0} = \dfrac{V_{REF}\,TC_{R4}}{R_4}$, so $\dfrac{R_4}{R_1} = \dfrac{V_{REF}\,TC_{R4}\,T_0}{2V_t\ln10} = \dfrac{1.262\times0.0015\times300}{0.1197} = 4.74$.
- Then $I_{REF} = (0.1197 + 1.262/4.74)/R_1 = 0.386\ \mathrm{V}/R_1$. In this model $I_{REF}$ changes by only +0.1% at 0 °C and +0.24% at 70 °C (second-order curvature).
- Other combinations also work: in general $2V_t\ln10\,(R_4/R_1) = V_{G0} + (\gamma - \alpha)V_{t0} - V_{REF}(1 - TC_{R4}T_0)$ with $V_{REF} = V_{EB2} + (R_2/R_1)V_t\ln10$ (requires $R_2/R_1$ < 26.6).

## Grading notes

Design problem: accept any $R_1$, $R_2$ (= $R_3$), $R_4$ satisfying the zero-TC condition for $I_{REF} = 2V_t\ln10/R_1 + V_{REF}/R_4$, with correct supporting calculation. +2: $I_{REF}$ written as the sum of the two PTAT branch currents and the $R_4$ current, a correct zero-TC condition including $R_4$'s +1500 ppm/°C, and resistor values consistent with it (e.g. $R_2/R_1$ = 9.39 and $R_4/R_1$ ≈ 4.7, or another valid pair), expressed in terms of $I_{REF}$ or for a stated $I_{REF}$. +1: correct condition and ratios with $I_{REF}$ scaling missing or a numerical slip. 0: the $I_1 + I_2$ branch currents omitted from $I_{REF}$ but a correct condition for $V_{REF}/R_4$ alone (e.g. $V_{REF}$ given a +1500 ppm/°C TC, $R_2/R_1$ ≈ 26.6). −2 (asserted as fact): $R_4$'s temperature coefficient ignored, $I_{REF} = V_{REF}/R_4$ with a temperature-independent $V_{REF}$ claimed to be temperature independent, or the values $R_1$ ≈ 29.9 kΩ, $R_2$ ≈ 299 kΩ, $R_4$ ≈ 3.8 kΩ presented as a zero-TC design (their $I_{REF}$ falls ≈ 10% from 0 to 70 °C).
