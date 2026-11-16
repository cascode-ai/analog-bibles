# Golden Solution - G037

## Reference answer

Epi thickness ≈ 5.8 μm (wafers at 525 mV) to ≈ 13.6 μm (wafers at 560 mV); epitaxial pinch-resistor sheet resistance ≈ 7.2 kΩ/□ (thin epi, 525 mV) to ≈ 1.9 kΩ/□ (thick epi, 560 mV).

- Epi doping: $N_D = 1/(q\mu_n\rho) = 1/(1.6\times10^{-19}\times800\times2) = 3.9\times10^{15}\ \mathrm{cm^{-3}}$.
- Uniform base: $I_S = qAD_pn_i^2/Q_B$ with $Q_B = N_DW_B$ (donors per unit area in the base), so $Q_B = \dfrac{qAD_pn_i^2}{I_C}e^{V_{BE}/V_T}$; $qAD_pn_i^2/I_C = (1.6\times10^{-19})(5.1\times10^{-5})(10)(2.25\times10^{20})/10^{-5} = 1836$ cm⁻².
- 525 mV: $Q_B = 1836\,e^{20.19} = 1.08\times10^{12}$ cm⁻² → $W_B = Q_B/N_D = 2.8\ \mu$m → $t_{epi} = W_B + 3\ \mu\mathrm{m} = 5.8\ \mu$m.
- 560 mV: $Q_B = 4.15\times10^{12}$ cm⁻² → $W_B = 10.6\ \mu$m → $t_{epi} = 13.6\ \mu$m.
- The epitaxial pinch resistor uses the same epi slice under the cap (thickness $W_B$): $R_\square = \rho/W_B = 1/(q\mu_nQ_B)$ = 7.2 kΩ/□ (525 mV) and 1.9 kΩ/□ (560 mV).

## Grading notes

+2: thickness range ≈ 5.8–13.6 μm and $R_\square$ ≈ 7.2–1.9 kΩ/□ (±15% on each endpoint), with base width = epi thickness − 3 μm, $Q_B = N_DW_B$ from the $V_{BE}$ data, and the correct pairing (higher $V_{BE}$ ↔ thicker epi ↔ lower $R_\square$). +1: the epi doping taken from standard resistivity data (≈ 2.3×10¹⁵, giving ≈ 7.7–21 μm and, with $\rho/W_B$, ≈ 4.3–1.1 kΩ/□) instead of from the stated mobility, otherwise consistent; or the 3-μm emitter depth forgotten (reporting $W_B$ as the thickness) with the rest right. 0: $Q_B$ right but the conversion to thickness or the resistor part wrong. −2 (asserted as fact): pairing inverted (higher $V_{BE}$ ↔ thinner epi), electron diffusivity used for the $pnp$ base, area taken as 5100 cm² or other order-of-magnitude unit errors, or the sheet resistance computed for the full epi thickness without the pinch.
