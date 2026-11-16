# Golden Solution - G281

## Reference answer

With $Z_e = (R_o + r_\pi)/(\beta_0+1)$ (150.5 Ω for $\beta_0 = 100$): $\mathcal{R} = a_v\dfrac{(\beta_0+1)R_i}{(\beta_0+1)R_i + R_o + r_\pi} \approx 999.85$, $v_o/v_i \approx 0.9990$, $R_{in} = (R_i + Z_e)(1+\mathcal R) \approx 1.0$ GΩ, $R_{out} = (Z_e\|R_i)/(1+\mathcal R) \approx 0.150$ Ω.

- $\mathcal{R}$ ($v_i = 0$, so $R_i$ goes from the output to ground): test voltage $v_t$ through $R_o$ into the base; the emitter follower with load $R_i$ gives $v_o = v_t(\beta_0+1)R_i/[(\beta_0+1)R_i + R_o + r_\pi]$; $v_x = -v_o$, so $\mathcal{R} = 999.85$.
- $A_\infty = 1$; $d$ ($a_v = 0$): $v_i$ through $R_i$ into $Z_e$: $d = Z_e/(R_i + Z_e) = 1.5\times10^{-4}$.
- $A = 999.85/1000.85 + 1.5\times10^{-4}/1000.85 = 0.99900$.
- $R_{in}$: $R(a_v{=}0) = R_i + Z_e$; $\mathcal{R}$(shorted) = 999.85, $\mathcal{R}$(open) = 0 → 1001 MΩ.
- $R_{out}$: $R(a_v{=}0) = Z_e\|R_i = 150.5$ Ω; $\mathcal{R}$(shorted) = 0, $\mathcal{R}$(open) = 999.85 → 0.150 Ω.

## Grading notes

Four quantities. +2: $\mathcal R$ ≈ 1000 (999.8 with the $R_i$ loading), gain 0.999, $R_{in}$ ≈ 1.0 GΩ, $R_{out}$ ≈ 0.15 Ω for β₀ = 100 with the β₀ dependence shown. +1: one quantity off by a slip. 0: two of four right. −2 (asserted as fact): input-port open return ratio nonzero, $R_{out}$ without the feedback reduction, or wrong $A_\infty$.
