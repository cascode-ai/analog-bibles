# Golden Solution - R610

## Reference answer

THD ≈ 0.049% with $W/L$ = 200/0.5, against ≈ 0.069% with $W/L$ = 50/0.5: quadrupling W/L doubles the open-loop gain but lowers the distortion only by a factor of ≈ 1.4, not "sharply", because $\alpha_2$ grows as well.
- $W/L = 400$: $V_{ov} = 0.193$ V, $g_m = 10.35$ mS, $\alpha_1 = g_mR_D = 20.7$, $\alpha_2 = \tfrac12\mu_nC_{ox}\tfrac WL R_D = 53.6\ \mathrm{V^{-1}}$. $\alpha_2V_m/(2\alpha_1) = 1.29\%$ (open-loop HD2 at 10 mV), $(1+\beta\alpha_1)^2 = 5.14^2 = 26.4$, so $b/a = 4.9\times10^{-4}$ = 0.049%.
- $W/L = 100$: $\alpha_1 = 10.35$, $\alpha_2 = 13.4\ \mathrm{V^{-1}}$, open-loop 0.65%, $(1+\beta\alpha_1)^2 = 9.43$, $b/a$ = 0.069%.
- Explanation: $\alpha_1 = g_mR_D \propto \sqrt{W/L}$ but $\alpha_2 = \tfrac12\mu_nC_{ox}(W/L)R_D \propto W/L$, so the open-loop distortion $\alpha_2V_m/(2\alpha_1) = V_m/(4V_{ov}) \propto \sqrt{W/L}$ doubles (the overdrive halves). The "other parameters constant" premise fails. The factor $(1+\beta\alpha_1)^2$ grows 2.8×, so the net improvement is 2.8/2 = 1.4×. For $\beta\alpha_1 \gg 1$, $b/a \approx \alpha_2V_m/(2\beta^2\alpha_1^3) \propto (W/L)^{-1/2}$, still only a square-root improvement.

## Grading notes

+2: ≈ 0.049% (±10%) for W/L = 200/0.5 and ≈ 0.069% for 50/0.5, with the explanation that $\alpha_2$ (∝ W/L) rises faster than $\alpha_1$ (∝ $\sqrt{W/L}$), so the open-loop distortion doubles while $(1+\beta\alpha_1)^2$ rises ≈ 2.8×, giving only a ≈ 1.4× improvement. +1: correct numbers with the explanation incomplete (e.g., "α2 also increases" without the scaling), or values ≈ 0.065%/0.087% from including $r_O$ = 10 kΩ with the right explanation. 0: one of the two designs computed correctly and the comparison missing or wrong by a slip. -2 (asserted as fact): $\alpha_2$ held at 13.4 V⁻¹ giving ≈ 0.012% (a "sharp" drop), distortion claimed to rise, or the open-loop distortion reported as the closed-loop THD.
