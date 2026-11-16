# Golden Solution - G136

## Reference answer

$R_L \approx 562.5\ \Omega$, $P_L \approx 160$ mW, $\eta \approx 70\%$.
- Swing limits: $V_o^- = -13.4$ V; $V_o^+ = \min(14.1\ \mathrm{V},\ (\beta_F+1)(0.2\ \mathrm{mA})R_L)$, the current limit being 40.2 mA.
- With $\hat V_o \ge V_{CC}/2$, the peak instantaneous dissipation of each output device (class B, bias current negligible) is $V_{CC}^2/(4R_L)$. Requiring ≤ 100 mW: $R_L \ge 225/0.4 = 562.5\ \Omega$. (Swings below $V_{CC}/2$ would allow a smaller $R_L$ but give at most 50 mW of output.)
- At 562.5 Ω the positive current limit allows 22.6 V, so $\hat V_o = 13.4$ V (negative limit): $P_L = 13.4^2/(2 \times 562.5) = 160$ mW. Larger $R_L$ only lowers $P_L$, so this is the maximum.
- $\eta = (\pi/4)(13.4/15) = 70.2\%$.

## Grading notes

+2: $R_L$ = 562.5 Ω (±3%), $P_L$ ≈ 160 mW (±5%), η ≈ 70% (±1.5 points), with the $V_{CC}^2/(4R_L)$ dissipation argument and the 13.4 V swing. +1: amplitude 14.1 V used (P ≈ 177 mW, η ≈ 74%) with the right $R_L$, or the right numbers with a weak justification. 0: right $R_L$, power computed wrongly. −2 (asserted as fact): dissipation constraint applied as average dissipation ($R_L$ much smaller), peak dissipation placed at the output peak, or efficiency above 78.6%.
