# Golden Solution - G283

## Reference answer

$\mathcal{R} \approx 1638$, $v_o/v_i \approx 5.996$, $R_{in} \approx 1.64$ GΩ, $R_{out} \approx 0.060$ Ω (exact).

- $\mathcal{R}$ ($v_i = 0$): test voltage through $R_o + R_2$ into $R_1\|R_i = 999$ Ω: $v_- = v_t\cdot999/6099 = 0.1638\,v_t$; $\mathcal{R} = a_v\times0.1638 = 1638.0$.
- $A_\infty = 1 + R_2/R_1 = 6$; $d$ ($a_v = 0$): $v_i$ through $R_i$ into $R_1\|(R_2+R_o)$, then divided by $R_o/(R_o+R_2)$: $d = 1.6\times10^{-5}$.
- $A = 6\times\frac{1638}{1639} + \approx 0 = 5.9963$.
- $R_{in}$: $R(a_v{=}0) = R_i + R_1\|(R_2+R_o) = 1.00084$ MΩ; $\mathcal{R}$(shorted) = 1638, $\mathcal{R}$(open) = 0 → 1.64 GΩ.
- $R_{out}$: $R(a_v{=}0) = R_o\|(R_2 + R_1\|R_i) = 98.4$ Ω; $\mathcal{R}$(shorted) = 0, $\mathcal{R}$(open) = 1638 → 0.060 Ω.

## Grading notes

Four quantities. +2: $\mathcal R$ 1600–1680, gain 5.995–5.997, $R_{in}$ 1.6–1.7 GΩ, $R_{out}$ 0.058–0.062 Ω, with Blackman's formula applied with the correct port conditions. +1: one value slipped. 0: two of four right. −2 (asserted as fact): input-port open return ratio nonzero, $A_\infty = 5$, or Blackman's ratio inverted.
