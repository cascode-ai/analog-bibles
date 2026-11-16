# Golden Solution - G131

## Reference answer

Equations: diode current $I_D = I_Q - I_{c1}/\beta_F$; KVL around the loop (equal $I_S$): $I_D^2 = I_{c1}|I_{c2}|$; output KCL: $(I_{c1} - |I_{c2}|)(1 + 1/\beta_F) = V_o/R_L$; $V_i = V_o - V_{EB2}$ with $V_{EB2} = V_T\ln(|I_{c2}|/I_S)$.

| $V_o$ | $I_{c1}$ | $I_{b1}$ | $I_D$ ($Q_3$, $Q_4$) | $\lvert I_{c2}\rvert$ | $V_i$ |
|---|---|---|---|---|---|
| +10 V | 9.93 mA | 66 µA | 34 µA | 0.11 µA | +9.52 V |
| +5 V | 4.97 mA | 33 µA | 67 µA | 0.90 µA | +4.46 V |
| 0 | 99.3 µA | 0.66 µA | 99.3 µA | 99.3 µA | −0.658 V |
| −5 V | 2.0 µA | ≈0 | 100 µA | 4.97 mA | −5.76 V |
| −10 V | 1.0 µA | ≈0 | 100 µA | 9.93 mA | −10.78 V |

- $V_o = 0$: $I_{c1} = |I_{c2}| = I_D = I_Q/(1 + 1/150) = 99.3$ µA; $V_{BE} = 26\ \mathrm{mV}\ln(9.93\times10^{10}) = 0.658$ V.
- Positive outputs: $Q_1$ supplies the load; its base current is taken from $I_Q$, so the diode current drops (to 34 µA at +10 V) and $Q_2$ is almost off ($|I_{c2}| = I_D^2/I_{c1}$ ≈ 0.90 µA and 0.11 µA; $V_{EB2}$ = 0.54 V and 0.48 V). Negative outputs: $Q_2$ sinks the load current, $I_D \approx I_Q$, $Q_1$ nearly off.
- Transfer characteristic: almost a straight line of slope ≈ 1 offset by ≈ −0.66 V at the origin ($V_i - V_o$ = −0.48, −0.54, −0.66, −0.76, −0.78 V at $V_o$ = +10, +5, 0, −5, −10 V); incremental slope ≈ 0.98 near crossover and ≈ 0.99–1.0 at the ends; no deadband.

## Grading notes

+2: values within ±3% for currents of the conducting devices (≈9.93 / 4.97 / 0.0993 mA), diode currents (34 / 67 / 99 / 100 / 100 µA), small currents of the off device of the right order (≈ 0.1–2 µA: about 0.11 and 0.90 µA in $Q_2$ at +10 and +5 V, about 2.0 and 1.0 µA in $Q_1$ at −5 and −10 V), and $V_i$ within ±15 mV of 9.52, 4.46, −0.658, −5.76, −10.78 V; transfer curve described as nearly unity-slope with the small offset and no deadband. Including or omitting the $(1+1/\beta_F)$ factors and the diode base-current factor is fine. +1: same with the diode current taken as constant $I_Q$ (so $I_D$ not reduced by $I_{b1}$) or with small errors in $V_i$ (±40 mV). 0: correct quiescent point and conducting-device currents but no treatment of the off device or of $V_i$. −2 (asserted as fact): crossover deadband of $2V_{BE}$ claimed, the off device carrying a large current, or $V_i$ placed at the base of $Q_1$.
