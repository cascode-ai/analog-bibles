# Golden Solution - G360

## Reference answer

$R_{S(\text{opt})} \approx 372\ \Omega$ and $F_{\text{opt}} \approx 1.57$, i.e. ≈ 2.0 dB (standard uncorrelated-generator analysis). A full analysis that keeps the correlation, with base-current noise flowing through $r_b + R_S$ and collector noise referred with $R_S$, gives $R_{S(\text{opt})} \approx 385\ \Omega$ and $F_{\text{opt}} \approx 1.78$ (2.5 dB).

- Generators: $\overline{v_i^2} = 4kT(r_b + 1/2g_m)$, $\overline{i_i^2} = 2qI_B = 2qI_C/\beta_F$; $F = 1 + \dfrac{\overline{v_i^2} + \overline{i_i^2}R_S^2}{4kTR_S}$.
- Minimizing: $R_{S(\text{opt})} = \sqrt{\overline{v_i^2}/\overline{i_i^2}} = \dfrac{\sqrt{\beta_F}}{g_m}\sqrt{1+2g_mr_b}$, $F_{\text{opt}} = 1 + \sqrt{\dfrac{1+2g_mr_b}{\beta_F}}$.
- Numbers: $g_m = 76.9$ mS, $2g_mr_b = 15.4$, $\sqrt{16.4} = 4.05$: $R_{S(\text{opt})} = 7.07\times13\ \Omega\times4.05 = 372\ \Omega$; $F_{\text{opt}} = 1 + 4.05/7.07 = 1.572$ → $10\log_{10}1.572 = 1.97$ dB.

## Grading notes

+2: either the standard result ($R_{S,opt}$ 360–385 Ω, $F_{opt}$ 1.9–2.0 dB) or the full correlated result (≈ 385 Ω, ≈ 2.5 dB), with a coherent derivation. Including the small $I_C/\beta^2$ term (≈ 368 Ω, 1.98 dB) is fine. +1: correct $R_{S,opt}$ and $F$ as a ratio but the dB conversion wrong or missing, or a small arithmetic slip. 0: correct formulas with a significant numerical slip. −2 (asserted as fact): $\overline{i_i^2} = 2qI_C$, $\overline{v_i^2} = 4kT/g_m$ or $4kTr_\pi$, $R_{S,opt}$ taken as $r_\pi$ or $r_b$, or $F_{opt}$ below 0 dB / above ≈ 4 dB from a wrong model.
