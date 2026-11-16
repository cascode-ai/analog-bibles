# Golden Solution - R132

## Reference answer

$(W/L)_2 \approx 8.8$ ($M_2$ in triode with $V_{SD2} \approx 0.83$ V; $V_{out} \approx 2.17$ V).

- $g_{m1} = \sqrt{2(134\ \mu\mathrm{A/V^2})(40)(0.5\ \mathrm{mA})} = 2.315$ mS; gain 5 needs a load (small-signal) resistance $5/g_{m1} = 2.16$ kΩ.
- $M_2$: $V_{SG} = 3$ V, overdrive 2.2 V, in triode: $1/r_2 = \beta_2(2.2 - V_{SD2})$ and $I_D = \beta_2(2.2V_{SD2} - V_{SD2}^2/2) = 0.5$ mA. Dividing: $(2.2V_{SD2} - V_{SD2}^2/2)/(2.2 - V_{SD2}) = 1.08$ V → $V_{SD2} = 0.829$ V; $\beta_2 = 0.338\ \mathrm{mA/V^2}$ → $(W/L)_2 = 8.8$.
- The deep-triode formula $R_{on2} = 1/[\mu_pC_{ox}(W/L)_2(V_{DD} - V_b - |V_{THP}|)]$ would give 5.48, but with that size the 0.5 mA would need $V_{SD2} \approx 1.9$ V (not deep triode) and the actual gain would be ≈ 37, so it does not meet the specification.

## Grading notes

+2: ≈ 8.8 (±5%) with the triode small-signal resistance evaluated at the actual operating point. +1: correct method with one slip (within ±15%). 0: 5.5 from the deep-triode $R_{on}$ formula (an approximation the operating point violates). -2 (asserted as fact): $M_2$ treated as saturated (current source), the large-signal ratio $V_{SD}/I_D$ used as the load resistance (≈ 7.3), or $\mu_nC_{ox}$ used for $M_2$.
