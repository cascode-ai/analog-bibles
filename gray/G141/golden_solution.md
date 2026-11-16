# Golden Solution - G141

## Reference answer

$R_L \approx 620\ \Omega$, $P_L \approx 160$ mW; at the negative peak $|I_{C3}| \approx 0.15$ mA and $I_{C4} \approx 22.5$ mA.
- Output devices $Q_2$ and $Q_4$ each see a class B load line; with a swing beyond $V_{CC}/2$ their peak instantaneous dissipation is $V_{CC}^2/(4R_L)$, so 100 mW requires $R_L \ge 562.5\ \Omega$ ($Q_3$, $Q_1$, $Q_7$ dissipate far less).
- Swing limits: $V_o^- = -14.1$ V; $V_o^+ = \min(14.1\ \mathrm{V},\ (\beta_F+1)(0.15\ \mathrm{mA})R_L)$, because $Q_2$'s base drive cannot exceed $Q_7$'s 0.15 mA, i.e. $I_{o,max} = 151 \times 0.15\ \mathrm{mA} = 22.65$ mA.
- At $R_L = 562.5\ \Omega$ the positive peak is limited to 12.7 V. $P_L$ rises with $R_L$ until $22.65\ \mathrm{mA}\cdot R_L = 14.1$ V, i.e. $R_L = 623\ \Omega$, then falls. Optimum: $R_L \approx 623\ \Omega$, $\hat V_o = 14.1$ V, $P_L = 14.1^2/(2\times623) = 160$ mW; peak dissipation $225/(4\times623) = 90$ mW < 100 mW.
- Negative peak current 22.65 mA = $|I_{E3}| + I_{C4} = |I_{C3}|(31/30 + 150)$ → $|I_{C3}| = 0.150$ mA, $I_{C4} = 22.5$ mA.

## Grading notes

+2: $R_L$ ≈ 623 Ω (600–630 Ω), $P_L$ ≈ 160 mW (±5%), and peak currents ≈ 0.15 mA ($Q_3$) and ≈ 22.5 mA ($Q_4$), recognizing the positive drive limit set by $Q_7$. +1: drive limit recognized but optimum not completed, or correct $R_L$/power with a small numerical slip in the peak currents (within about 10%). Peak currents from a wrong composite model (e.g. $\beta_F(pnp) = 30$ used for the npn $Q_4$, giving $|I_{C3}| \approx I_L/31 \approx 0.73$ mA) are a critical error in that part: at most 0. Approximating $I_{E4} \approx |I_L|$ (neglecting $Q_3$'s base current, error ≈ 0.02%) so that $|I_{C3}| \approx I_L/151$ is a correct approximation, not an error. 0: the dissipation-only answer $R_L = 562.5\ \Omega$, $P_L \approx 177$ mW, $|I_{C3}| \approx 0.166$ mA, $I_{C4} \approx 24.9$ mA (positive drive limit ignored), otherwise correct. −2 (asserted as fact): dissipation constraint applied to average power, peak dissipation placed at the output peak, $Q_4$'s peak current equal to $Q_3$'s, or efficiency/power exceeding class B bounds.
