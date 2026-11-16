# Golden Solution - R611

## Reference answer

β = 0.4: THD ≈ 0.0245%; β = 0.2: ≈ 0.069%. Doubling β lowers the distortion by ≈ 2.8×, not the 4× that $\beta^{-2}$ would give, because the loop gain $\beta\alpha_1$ (2.07 → 4.14) is not much larger than 1.
- $V_{ov} = 0.386$ V, $g_m = 5.18$ mS, $\alpha_1 = g_mR_D = 10.35$, $\alpha_2 = \tfrac12\mu_nC_{ox}\tfrac WLR_D = 13.4\ \mathrm{V^{-1}}$; open-loop $\alpha_2V_m/(2\alpha_1) = 0.647\%$.
- β = 0.4: $1+\beta\alpha_1 = 5.14$, squared 26.4 → $b/a = 2.45\times10^{-4}$ = 0.0245% (−72 dB). β = 0.2: $1+\beta\alpha_1 = 3.07$, squared 9.43 → 0.069%.
- Ratio $(5.14/3.07)^2 = 2.80$; the $\beta^{-2}$ law holds only in the limit $\beta\alpha_1 \gg 1$. The price is a lower closed-loop gain: output fundamental ≈ 20.1 mV instead of 33.7 mV.

## Grading notes

+2: ≈ 0.0245% (±10%) for β = 0.4 and ≈ 0.069% for β = 0.2, with the observation that the improvement is ≈ 2.8× rather than 4× because $\beta\alpha_1$ is only ≈ 2–4. +1: correct numbers with a thin explanation, or ≈ 0.033%/0.087% from including $r_O$ = 10 kΩ with the right explanation. 0: one of the two values right and the comparison missing or off by a slip. -2 (asserted as fact): an exact 4× reduction (≈ 0.017%) claimed from the $\beta^{-2}$ law, suppression by $(1+\beta\alpha_1)$ only, or the distortion claimed to rise with β.
