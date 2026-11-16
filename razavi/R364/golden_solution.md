# Golden Solution - R364

## Reference answer

$\sqrt{\overline{V_{n,in}^2}} \approx 1.66$ nV/√Hz ($2.75\times10^{-18}\ \mathrm{V^2/Hz}$); $\sqrt{\overline{I_{n,in}^2}} \approx 4.07$ pA/√Hz ($1.66\times10^{-23}\ \mathrm{A^2/Hz}$).

- $g_m = \sqrt{2(134\ \mu)(100)(1\ \mathrm{m})} = 5.18$ mS.
- Voltage (input shorted, gain $g_mR_D$): $\overline{V_{n,in}^2} = 4kT\left(\dfrac{\gamma}{g_m} + \dfrac{1}{g_m^2R_D}\right) = 1.656\times10^{-20}\,(128.8 + 37.3) = 2.75\times10^{-18}$.
- Current (input open): $M_1$'s noise cannot flow (the source node has no other path), so only $R_D$ contributes: $\overline{I_{n,in}^2} = 4kT/R_D = 1.656\times10^{-23}\ \mathrm{A^2/Hz}$.
- (With body effect the voltage would be divided by $(g_m + g_{mb})^2$, slightly lower.)

## Grading notes

+2: both values within ±5% (≈ 1.66 nV/√Hz and ≈ 4.07 pA/√Hz, or the squared values). +1: one value right, the other with a small numerical slip; or including $g_{mb}$ with a stated bias assumption. 0: one quantity right and the other wrong. An error confined to one quantity caps the score here, e.g. $M_1$'s noise kept in the input-referred current (≈ 8.6 pA/√Hz, the total output noise divided by $R_D$) with the voltage right, the CG current gain taken as different from 1 with the voltage right, or the voltage given without the $R_D$ term (≈ 1.46 nV/√Hz) with the current right. -2 (asserted as fact): both quantities wrong, e.g. the stage analyzed as common-source.
