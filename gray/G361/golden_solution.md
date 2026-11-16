# Golden Solution - G361

## Reference answer

$R_{S(\text{opt})} \approx 28.8$ kΩ and $F_{\text{opt}} \approx 1.111$, i.e. ≈ 0.46 dB (a full correlated analysis gives ≈ 28.7 kΩ and 0.50 dB).

- $g_m = 0.385$ mS, $1/2g_m = 1.3$ kΩ, $2g_mr_b = 0.231$.
- $R_{S(\text{opt})} = \dfrac{\sqrt{\beta_F}}{g_m}\sqrt{1+2g_mr_b} = 10\times2.6\text{ k}\times1.109 = 28.8$ kΩ (from $\sqrt{\overline{v_i^2}/\overline{i_i^2}}$ with $\overline{v_i^2} = 4kT(r_b+1/2g_m)$, $\overline{i_i^2} = 2qI_C/\beta_F$).
- $F_{\text{opt}} = 1 + \sqrt{(1+2g_mr_b)/\beta_F} = 1 + 1.109/10 = 1.111$ → 0.46 dB.
- Low current and higher β give a much lower $F_{\text{opt}}$ but require a high source resistance.

## Grading notes

+2: $R_{S,opt}$ 27–30 kΩ and $F_{opt}$ 0.44–0.52 dB (ratio ≈ 1.11–1.12). +1: correct values but no dB conversion, or a minor slip. 0: correct formulas with a significant numerical slip. −2 (asserted as fact): $\overline{i_i^2} = 2qI_C$, $R_{S,opt} = r_\pi$ (260 kΩ) asserted, or $F_{opt}$ off by a factor indicating a wrong model.
