# Golden Solution - G112

## Reference answer

$\eta = 9.5\%$ for $R_L = 2\ \mathrm{k\Omega}$ and $\eta = 12.8\%$ for $R_L = 10\ \mathrm{k\Omega}$.
- $I_Q = 2.86$ mA; the supply power is constant (class A): $P_{supply} = 2V_{CC}I_Q = 30\ \mathrm{V} \times 2.86\ \mathrm{mA} = 85.8$ mW.
- 2 kΩ: clipping at $\hat V_{om} = I_QR_L = 5.72$ V, $P_L = 8.18$ mW, $\eta = 8.18/85.8 = 0.095$.
- 10 kΩ: $\hat V_{om} = V_{CC} - V_{CE(\text{sat})} = 14.8$ V, $P_L = 10.95$ mW, $\eta = 10.95/85.8 = 0.128$.

## Grading notes

+2: both efficiencies within ±0.5 percentage point (9.5% and 12.8%), with $P_{supply} = 2V_{CC}I_Q$. +1: right method with one slip, or one efficiency right and the other off through a small arithmetic error. 0: only one efficiency right. −2 (asserted as fact): supply power taken as varying with signal (class B formula), the 2 kΩ case computed with a 14.8 V amplitude, or efficiencies above 25%.
