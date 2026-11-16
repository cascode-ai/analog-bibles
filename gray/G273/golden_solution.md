# Golden Solution - G273

## Reference answer

$\mathcal{R} \approx 16.5$, $v_o/v_i \approx -9.42$, $R_{in} \approx 10.55$ kΩ, $R_{out} \approx 523$ Ω.

- $\mathcal{R}$ ($v_i = 0$): a test voltage $v_t$ in place of the source drives $R_o + 100\text{k}$ into $10\text{k}\|1\text{M} = 9.90$ kΩ: $v_- = v_t\cdot9.90/119.9$, $v_x = -v_-$, so $\mathcal{R} = 200\times0.0826 = 16.52$.
- $A_\infty = -100\text{k}/10\text{k} = -10$.
- $d$ ($a_v = 0$): $v_- = v_i\,\dfrac{R_i\|110\text{k}}{10\text{k} + R_i\|110\text{k}} = 0.908\,v_i$, $v_o = v_-\cdot10/110$, $d = 0.0826$.
- $A = -10\cdot\dfrac{16.52}{17.52} + \dfrac{0.0826}{17.52} = -9.429 + 0.005 = -9.424$.
- $R_{in}$: $R(a_v{=}0) = 10\text{k} + 1\text{M}\|110\text{k} = 109.1$ kΩ; $\mathcal{R}$(port shorted) = 16.52; $\mathcal{R}$(port open) $= a_v R_i/(R_i + 100\text{k} + R_o) = 180.2$; $R_{in} = 109.1\text{k}\times17.52/181.2 = 10.55$ kΩ (≈ 10 kΩ plus ≈ 547 Ω at the inverting node).
- $R_{out}$: $R(a_v{=}0) = 10\text{k}\|(100\text{k} + 9.9\text{k}) = 9.17$ kΩ; $\mathcal{R}$(output shorted) = 0, $\mathcal{R}$(output open) = 16.52; $R_{out} = 9.17\text{k}/17.52 = 523$ Ω.

## Grading notes

Four quantities. +2: $\mathcal R$ 16.2–16.8, gain −9.38 to −9.46, $R_{in}$ 10.5–10.6 kΩ (or ≈ 547 Ω at the inverting node if explicitly defined that way, plus 10 kΩ), $R_{out}$ 510–535 Ω, with Blackman's formula used for both impedances. +1: one quantity off by a slip, or $d$ neglected (gain −9.429). 0: two of four right. −2 (asserted as fact): gain ≈ −10 claimed exact with $\mathcal R \gg 1$, input-port open return ratio taken as zero (giving $R_{in}$ ≈ 1.9 MΩ), or Blackman's ratio inverted.
