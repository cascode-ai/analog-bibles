# Golden Solution - G279

## Reference answer

$\mathcal{R} \approx 838$, $v_o/v_i \approx 0.9988$, $R_{in} \approx 839$ MΩ, $R_{out} \approx 0.235$ Ω (exact).

- $g_m = 4.243$ mS, $g_{mb} = 0.822$ mS.
- $\mathcal{R}$ ($v_i = 0$): test voltage $v_t$ at the op-amp output; no current in $R_o$, so $v_g = v_t$; output node: $g_m(v_t - v_o) = (g_{mb} + 1/R_i)v_o$ → $v_o = v_t\,g_m/(g_m+g_{mb}+1/R_i)$; $v_x = -v_o$; $\mathcal{R} = a_v\,g_m/(g_m+g_{mb}+1/R_i) = 837.6$.
- $A_\infty = 1$; $d$ ($a_v = 0$): $v_i$ reaches the output only through $R_i$: $d = (1/R_i)/(g_m+g_{mb}+1/R_i) = 1.97\times10^{-4}$.
- $A = 837.6/838.6 + 1.97\times10^{-4}/838.6 = 0.99881$.
- $R_{in}$: $R(a_v{=}0) = R_i + 1/(g_m+g_{mb}) = 1.0002$ MΩ; $\mathcal{R}$(input shorted) = 837.6, $\mathcal{R}$(input open) = 0 → $R_{in} = 839$ MΩ.
- $R_{out}$: $R(a_v{=}0) = [1/(g_m+g_{mb})]\|R_i = 197.4$ Ω; $\mathcal{R}$(shorted) = 0, $\mathcal{R}$(open) = 837.6 → $R_{out} = 0.2354$ Ω.

## Grading notes

Four quantities. +2: $\mathcal R$ 820–855, gain 0.9987–0.9989, $R_{in}$ 0.82–0.86 GΩ, $R_{out}$ 0.230–0.240 Ω, with body effect and correct Blackman port conditions. +1: one value off by a computational slip, with otherwise correct analysis. 0: two of four right; this includes neglecting the body effect ($\mathcal R \approx 1000$, $R_{in} \approx 1.0$ GΩ, gain ≈ 0.9990), or computing $g_{mb}$ with a wrong formula (e.g. $\gamma/(2\sqrt{|\phi_f|})$ instead of $\gamma/(2\sqrt{2|\phi_f|})$, which gives $\mathcal R \approx 785$ and $R_{in} \approx 786$ MΩ), with otherwise correct analysis. −2 (asserted as fact): input-port open return ratio taken as nonzero (giving $R_{in}$ ≈ 1 MΩ), output resistance not reduced by feedback, or a wrong $A_\infty$.
