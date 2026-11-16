# Golden Solution - G108

## Reference answer

$|V_{OS}| \approx 5.3$ mV (≈ 5.0 mV if the β term is kept as $\ln(1 + 2/\beta_F)$), down from ≈ 6.1 mV without the resistors.

- $I_C = 50$ µA; $\alpha_F = 15/16 = 0.9375$; $g_mR/\alpha_F = (50\ \mu/26\ \mathrm{m})(2\ \mathrm{k})/0.9375 = 4.10$ (emitter-resistor drop ≈ 107 mV).
- Load mismatch with degeneration: $\dfrac{\Delta I_C}{I_C} = \dfrac{1}{1 + g_mR/\alpha_F}\dfrac{\Delta I_S}{I_S} + \dfrac{g_mR/\alpha_F}{1 + g_mR/\alpha_F}\left(-\dfrac{\Delta R}{R} + \dfrac{\Delta\alpha_F}{\alpha_F}\right)$, with $\Delta\alpha_F/\alpha_F = (\Delta\beta_F/\beta_F)/(1+\beta_F) = 0.10/16 = 0.00625$.
- Worst case: $0.05/5.10 + (4.10/5.10)(0.005 + 0.00625) = 0.0098 + 0.0090 = 0.0188$.
- Base-current term unchanged: $2/\beta_F = 0.133$; input-pair term 0.05.
- $V_{OS} \approx V_T(0.05 + 0.0188 + 0.133) = 26\ \mathrm{mV}\times0.202 \approx 5.3$ mV. The resistors reduce the load's contribution from 0.05 to 0.019, but the offset is dominated by the finite pnp β.

## Grading notes

+2: 4.9–5.5 mV, with the load mismatch reduced by the degeneration factor, the resistor (and α) mismatch weighted by $g_mR/(1+g_mR)$, and the $2/\beta_F$ term retained. +1: α mismatch omitted (≈ 5.1 mV) or a small slip. 0: degeneration analysed correctly but the β term dropped (≈ 1.8 mV), or the β term kept but the load term left at 0.05 (≈ 6.1 mV) without using the resistors. -2 (asserted as fact): emitter resistors claimed to remove the $2/\beta_F$ term, resistor mismatch added unweighted to the $I_S$ term so the offset increases, or the offset multiplied by a gain. An exact numerical solution gives 5.03 mV (worst corner $I_{S1} < I_{S2}$, $I_{S3} > I_{S4}$, $R_3 < R_4$, $\beta_3 > \beta_4$). If the emitter-resistor loop is written with the wrong sign (e.g. $V_{EB3} - V_{EB4} = R_3I_{E3} - R_4I_{E4}$ instead of $R_4I_{E4} - R_3I_{E3}$, so the resistors act regeneratively and the pnp $I_S$ corner is chosen backwards), the result (≈ 5.36 mV) can still fall inside the +2 band: score such an answer 0 (a setup error confined to the small load term, with the dominant $2/\beta_F$ and input-pair terms right), neither +2 nor −2.
