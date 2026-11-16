# Golden Solution - G034

## Reference answer

$Q_B$ ranges from ≈ 2.3×10¹² cm⁻² (at $V_{BE}$ = 520 mV) to ≈ 2.3×10¹³ cm⁻² (at 580 mV); the pinch-resistor sheet resistance correspondingly ranges from ≈ 18 kΩ/□ (520-mV wafers) down to ≈ 1.8 kΩ/□ (580-mV wafers), a 10:1 spread.

- $I_C = I_S e^{V_{BE}/V_T}$ with $I_S = qAD_nn_i^2/Q_B$, so $Q_B = \dfrac{qAD_nn_i^2}{I_C}e^{V_{BE}/V_T}$, $A = 10^{-4}$ cm².
- $qAD_nn_i^2/I_C = (1.6\times10^{-19})(10^{-4})(13)(2.25\times10^{20})/10^{-5} = 4680$ cm⁻².
- 520 mV: $e^{20} = 4.85\times10^8$ → $Q_B = 2.27\times10^{12}$ cm⁻² ($I_S = 2.1\times10^{-14}$ A). 580 mV: $e^{22.31} = 4.88\times10^9$ → $Q_B = 2.28\times10^{13}$ cm⁻² ($I_S = 2.1\times10^{-15}$ A).
- Pinch resistor: $R_\square = 1/(q\mu_pQ_B)$: $1/(1.6\times10^{-19}\times150\times2.27\times10^{12}) = 18.4\ \mathrm{k}\Omega/\square$ and $1/(1.6\times10^{-19}\times150\times2.28\times10^{13}) = 1.83\ \mathrm{k}\Omega/\square$.
- A higher $V_{BE}$ means a smaller $I_S$, i.e. more base charge and a lower pinch sheet resistance.

## Grading notes

+2: $Q_B$ ≈ 2.3×10¹² to 2.3×10¹³ cm⁻² and $R_\square$ ≈ 18 kΩ/□ to 1.8 kΩ/□ (each ±15%, which covers $kT/q$ = 25.9 mV or $n_i = 1.45\times10^{10}$), with the correct pairing (low $V_{BE}$ ↔ small $Q_B$ ↔ high $R_\square$). +1: correct method and one endpoint off by a slip, or values right but the pairing of the endpoints not stated. 0: $Q_B$ range right but sheet resistance wrong or missing. −2 (asserted as fact): $Q_B$ decreasing with $V_{BE}$, $R_\square$ computed with the electron diffusivity or an epi/emitter layer, area taken as 100 μm² or another unit error giving order-of-magnitude errors.
