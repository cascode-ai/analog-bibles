# Golden Solution - G432

## Reference answer

$\overline{v^2_{eq}}/\Delta f \approx 1.55 \times 10^{-18}$ V²/Hz, i.e. ≈ 1.25 nV/√Hz (versus ≈ 2.8 × 10⁻¹⁸ V²/Hz, 1.67 nV/√Hz, with $m_1 = 10$).

- New $g_{m1} = \sqrt{2(170\ \mu)(20 \times 133.3)(2.0\ \text{mA})} = 42.6$ mA/V (√2 × 30 mA/V).
- DM half-circuit, output shorted: only $M_1$, $M_{11}$, $M_3$ contribute (cascodes add nothing with $r_o \to \infty$; tail noise is CM): $\overline{i_o^2}/\Delta f = 4kT\tfrac23(g_{m1} + g_{m11} + g_{m3}) = 1.107 \times 10^{-20}(0.0426 + 0.048 + 0.036) = 1.40 \times 10^{-21}$ A²/Hz.
- Half-circuit input-referred: $1.40 \times 10^{-21}/(0.0426)^2 = 7.7 \times 10^{-19}$ V²/Hz.
- Total (two uncorrelated halves): $\overline{v^2_{eq}}/\Delta f = 1.55 \times 10^{-18}$ V²/Hz → 1.25 nV/√Hz.

## Grading notes

+2: 1.5–1.6 × 10⁻¹⁸ V²/Hz (or 1.22–1.27 nV/√Hz). +1: half-circuit value (≈ 7.7 × 10⁻¹⁹) given as the total, or a small slip. 0: correct method but $g_{m1}$ not updated (giving 2.8 × 10⁻¹⁸) or doubled (giving ≈ 1.1 × 10⁻¹⁸ from $g_{m1}$ = 60 mA/V). −2 (asserted as fact): noise claimed to increase, only the input pair's own noise counted while asserting the others negligible (≈ 5.2 × 10⁻¹⁹), or unit errors by orders of magnitude.
