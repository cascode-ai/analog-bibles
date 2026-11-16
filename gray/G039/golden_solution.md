# Golden Solution - G039

## Reference answer

$I_S \approx 1.3\times10^{-14}$ A; $\tau_F \approx 100$ ns; $C_{je0} \approx 0.63$ pF for the bottom of the $p$-emitter/$n$-epi junction (≈ 0.75–0.82 pF with the outer sidewall, ≈ 1.3–1.6 pF if the $p$/$n^+$ edge where the base contact abuts the emitter is added); $C_{\mu0} \approx 2.2$ pF for the bottom of the epi pocket (≈ 3.4–4.1 pF with the isolation sidewalls).

- Base width: vertical flow from the bottom of the emitter (3 μm) to the epi-substrate junction (17 μm): $W_B \approx 14\ \mu$m; $Q_B = N_DW_B = 1.4\times10^{12}$ cm⁻².
- $I_S = qAD_pn_i^2/(N_DW_B) = (1.6\times10^{-19})(5.1\times10^{-5})(10)(2.25\times10^{20})/(1.4\times10^{12}) = 1.3\times10^{-14}$ A.
- $\tau_F = W_B^2/(2D_p) = (14\times10^{-4})^2/20 = 98$ ns.
- $C_{je0}$: epi is the light side, $\sqrt{q\epsilon_{Si}N_D/2\psi_0} = 1.23\times10^{-4}$ pF/μm². Bottom 5100 μm² → 0.63 pF; outer sidewall $2(90+75)\times3 = 990\ \mu$m² (1555 μm² with ×π/2) → 0.12–0.19 pF; subtotal ≈ 0.75–0.82 pF. The inner edge abuts the $n^+$ contact: a $p$/$n^+$ junction with ≈ 10¹⁷ on the light side (1.23×10⁻³ pF/μm²) over ≈ 170 μm × 2.5 μm = 425 μm² (670 μm² with ×π/2) → +0.52–0.82 pF, total ≈ 1.3–1.6 pF. (The rough 10⁻⁴ pF/μm² gives about 20% less.)
- $C_{\mu0}$ = epi-pocket-to-substrate junction: bottom 143 × 128 = 18,300 μm² × 1.21×10⁻⁴ pF/μm² (two-sided, $N_{eff} = 9.1\times10^{14}$ cm⁻³; 1.26×10⁻⁴ one-sided) ≈ 2.2–2.3 pF. The isolation sidewall, $17\times2(143+128) = 9214\ \mu$m² (14,500 μm² with ×π/2), with the epi as the light side (1.26×10⁻⁴ pF/μm²), adds 1.2–1.8 pF, total ≈ 3.4–4.1 pF (≈ 3.3 pF with the rough 10⁻⁴ pF/μm²).

## Grading notes

Four quantities, a quarter of the credit each. Accept: $I_S$ (0.9–1.8)×10⁻¹⁴ A with $Q_B = N_DW_B$ and $W_B$ ≈ 12–15 μm; $\tau_F$ 60–130 ns from $W_B^2/2D_p$; $C_{je0}$ 0.5–1.7 pF (bottom area at least; sidewalls and the abutted $n^+$ edge are refinements); $C_{\mu0}$ 1.8–4.5 pF: the whole pocket bottom alone (≈ 2.2 pF) is accepted, and adding the isolation sidewalls (≈ 3.3–4.1 pF) is a refinement, as for $C_{je0}$ (an answer using only the area under the emitter, ≈ 0.5–0.7 pF, has misidentified the collector-base junction). +2: all four in range. +1: three of four. 0: two of four. −2 (asserted as fact): base width taken as the full 17-μm epi plus the buried layer or as the npn base width, $\tau_F$ computed with $D_n$ of the npn base giving ns-level values, $C_\mu$ identified as the emitter-base junction, or $I_S$ off by orders of magnitude.
