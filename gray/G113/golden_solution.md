# Golden Solution - G113

## Reference answer

$R_L = (V_{CC} - V_{CE(\text{sat})})/I_Q = 14.8\ \mathrm{V}/2.86\ \mathrm{mA} \approx 5.2\ \mathrm{k\Omega}$; maximum average output power $P_L = \tfrac12(V_{CC} - V_{CE(\text{sat})})I_Q = \tfrac12(14.8)(2.86\ \mathrm{mA}) \approx 21.2$ mW, efficiency $\approx 24.7\%$.
- Supply power is fixed at $2V_{CC}I_Q = 85.8$ mW, so the efficiency is maximum when $P_L$ is maximum.
- The positive swing is limited to $V_{CC} - V_{CE(\text{sat})}$ and the negative swing to $\min(I_QR_L,\ V_{CC} - V_{CE(\text{sat})})$; $P_L = \hat V^2/(2R_L)$ grows as $R_L$ falls while $I_QR_L \ge 14.8$ V and falls as $R_L$ falls below that, so the optimum is where both limits coincide: $I_QR_L = V_{CC} - V_{CE(\text{sat})}$.

## Grading notes

+2: $R_L \approx 5.2\ \mathrm{k\Omega}$ (5.0–5.3 kΩ accepted, e.g. $V_{CC}/I_Q = 5.24$ kΩ) with $P_L \approx 21$ mW (±5%) and the reason (both clipping limits reached together). The efficiency value is a plus, not required. +1: correct $R_L$ but power slightly off, or power right with a weak justification. 0: correct principle without numbers, or only $R_L$. −2 (asserted as fact): $R_L \to \infty$ or $R_L = 0$ claimed optimal, or a power above $\tfrac12 V_{CC}I_Q$.
