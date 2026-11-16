# Golden Solution - G275

## Reference answer

$\mathcal{R} \approx 63.6$, $v_o/i_i \approx -98.2$ kΩ, $R_{in} \approx 1.78$ kΩ, $R_{out} \approx 232$ Ω (all exact).

- $g_m = 4.243$ mS.
- $\mathcal{R}$ ($i_i$ open): a test current into the drain node sees only $R_L$ (no current in $R_F$ because the gate is open), $v_{gs} = v_d = -i_tR_L$, $\mathcal{R} = g_mR_L = 63.64$.
- $A_\infty = -R_F = -100$ kΩ; $d$ ($g_m = 0$): $i_i$ flows through $R_F$ into $R_L$, $d = +R_L = 15$ kΩ.
- $A = -100\text{k}\cdot\frac{63.64}{64.64} + \frac{15\text{k}}{64.64} = -98{,}453 + 232 = -98{,}221$ Ω (exact: $R_L(1-g_mR_F)/(1+g_mR_L)$).
- $R_{in} = (R_F+R_L)/(1+\mathcal{R}) = 115\text{k}/64.64 = 1.779$ kΩ; $R_{out} = R_L/(1+\mathcal{R}) = 15\text{k}/64.64 = 232.1$ Ω.

## Grading notes

Four quantities. +2: $\mathcal R$ 62–65, gain −97.5 to −99 kΩ, $R_{in}$ 1.74–1.82 kΩ, $R_{out}$ 227–237 Ω, with $A_\infty$, $d$ and Blackman's formula. +1: one quantity off by a slip, or $d$ neglected (gain ≈ −98.45 kΩ) with an explicit note. 0: two of four right. −2 (asserted as fact): $\mathcal R$ computed with $R_F$ loading the drain to ground (giving $g_m(R_L\|R_F)$) while claiming the input is open, wrong sign of gain, or inverted Blackman ratio.
