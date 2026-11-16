# Golden Solution - G040

## Reference answer

Super-β (480 mV): $Q_B \approx 4.9\times10^{11}$ cm⁻², base sheet resistance ≈ 85 kΩ/□, punch-through voltage ≈ 18 V. Standard device (560 mV): $Q_B \approx 1.06\times10^{13}$ cm⁻², ≈ 3.9 kΩ/□, punch-through ≈ 8.6 kV, i.e. irrelevant (avalanche breakdown occurs long before).

- $Q_B = \dfrac{qAD_nn_i^2}{I_C}e^{V_{BE}/V_T}$ with $qAD_nn_i^2/I_C = (1.6\times10^{-19})(10^{-4})(13)(2.25\times10^{20})/10^{-5} = 4680$ cm⁻².
- 480 mV: $e^{18.46} = 1.04\times10^8$ → $Q_B = 4.88\times10^{11}$ cm⁻². $R_\square = 1/(q\mu_pQ_B) = 1/(1.6\times10^{-19}\times150\times4.88\times10^{11}) = 85\ \mathrm{k}\Omega/\square$.
- Punch-through: collector depletion width $x_d = Q_B/N_D = 4.88\ \mu$m; $\psi_0 + V_R = qN_Dx_d^2/(2\epsilon) = (1.6\times10^{-19})(10^{15})(4.88\times10^{-4})^2/(2.08\times10^{-12}) = 18.3$ V → $V_R \approx 17.7$ V.
- 560 mV: $Q_B = 4680\,e^{21.54} = 1.06\times10^{13}$ cm⁻²; $R_\square = 3.9\ \mathrm{k}\Omega/\square$; $x_d = 106\ \mu$m (larger than the whole epi), $V_R \approx 8.6$ kV — punch-through cannot occur; the standard device's breakdown is set by avalanche.

## Grading notes

+2: super-β values $Q_B$ ≈ 4.9×10¹¹ cm⁻², $R_\square$ ≈ 85 kΩ/□, $V_{PT}$ ≈ 18 V, and standard device $Q_B$ ≈ 1.06×10¹³ cm⁻², ≈ 3.9 kΩ/□, with its punch-through voltage recognized as enormous (thousands of volts, i.e. not a limitation); each ±15% (±25% for the punch-through voltage, which scales as $Q_B^2$; this covers kT/q = 25.9 mV). Reporting 18.3 V ($\psi_0 + V_R$) for the super-β case is fine. +1: one slip in one of the six numbers, or the standard device's $V_{PT}$ given numerically without remarking that it is unphysical. 0: super-β part right and standard part wrong or missing (or vice versa). −2 (asserted as fact): $Q_B$ smaller for the standard device, $x_d = Q_B/N_A$ or another misuse of the charge balance, sheet resistance computed with electron mobility, or punch-through voltages off by orders of magnitude.
