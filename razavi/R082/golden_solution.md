# Golden Solution - R082

## Reference answer

$V_{in} \approx 1.427$ V ($V_{out} \approx 0.677$ V, $I_D \approx 3.53$ mA); $A_v \approx -1.81$.

- $\beta_1 = 13.4\ \mathrm{mA/V^2}$, $\beta_2 = 2.68\ \mathrm{mA/V^2}$. $M_1$ triode, $M_2$ saturated: $\beta_1[(V_{in} - 0.7)V_{out} - V_{out}^2/2] = \tfrac12\beta_2(2.3 - V_{out})^2$ with $V_{out} = V_{in} - 0.75$ → overdrive 0.727 V, $V_{out} = 0.677$ V.
- Small signal: $g_{m1} = \beta_1V_{DS1} = 9.08$ mS, $g_{ds1} = \beta_1(0.05\ \mathrm{V}) = 0.67$ mS, $g_{m2} = \beta_2(2.3 - V_{out}) = 4.35$ mS.
- $A_v = -g_{m1}/(g_{m2} + g_{ds1}) \approx -1.81$.

## Grading notes

+2: $V_{in}$ ≈ 1.43 V (±0.01 V) and gain ≈ −1.81 (±5%) with triode $g_m$ and output conductance of $M_1$. +1: one slip. 0: $V_{in}$ right but the gain left at the saturation value −2.24 or computed without $g_{ds1}$ (≈ −2.09). -2 (asserted as fact): $M_2$ assumed in triode, the input found by adding 50 mV to the edge input, or a gain larger in magnitude than at the edge.
