# Golden Solution - G431

## Reference answer

$\overline{v^2_{eq}}/\Delta f \approx 2.67 \times 10^{-12}/f$ V²/Hz (f in Hz), e.g. ≈ 2.7 × 10⁻¹⁵ V²/Hz (≈ 52 nV/√Hz) at 1 kHz.

- DM half-circuit with the output shorted: with $r_o \to \infty$ the cascodes $M_{1A}$, $M_{3A}$ pass their source currents unchanged and add no noise current; the tail devices only inject CM noise. The output noise current comes from $M_1$, $M_{11}$ and $M_3$: $\overline{i_o^2} = g_{m1}^2\overline{v_1^2} + g_{m11}^2\overline{v_{11}^2} + g_{m3}^2\overline{v_3^2}$.
- Referred to the half-circuit input: $\overline{v_{eqH}^2} = \overline{v_1^2} + (g_{m11}/g_{m1})^2\overline{v_{11}^2} + (g_{m3}/g_{m1})^2\overline{v_3^2}$.
- Gate areas: $M_1$: $10 \times 40 \times 0.3 = 120\ \mu\text{m}^2$; $M_{11}$: 528 μm²; $M_3$: 144 μm².
- $\overline{v_1^2}/\Delta f = 4.8 \times 10^{-25}/(6.9 \times 10^{-15} \times 120\,f) = 5.80 \times 10^{-13}/f$; $\overline{v_{11}^2}/\Delta f = 8.3 \times 10^{-26}/(6.9 \times 10^{-15} \times 528\,f) = 2.28 \times 10^{-14}/f$; $\overline{v_3^2}/\Delta f = 4.83 \times 10^{-13}/f$.
- $\overline{v_{eqH}^2}/\Delta f = [5.80 + (1.6)^2(0.228) + (1.2)^2(4.83)] \times 10^{-13}/f = (5.80 + 0.58 + 6.96) \times 10^{-13}/f = 1.33 \times 10^{-12}/f$.
- The two half-circuits are uncorrelated: $\overline{v_{eqT}^2}/\Delta f = 2 \times 1.33 \times 10^{-12}/f \approx 2.67 \times 10^{-12}/f$ V²/Hz. The NMOS current sources $M_3$, $M_4$ contribute more than the input pair.

## Grading notes

+2: ≈ 2.6–2.75 × 10⁻¹²/f V²/Hz for the total DM input noise (or 1.33 × 10⁻¹²/f per half-circuit clearly identified and doubled). Using drawn $L$ = 0.4 μm consistently gives 2.0 × 10⁻¹²/f, also acceptable with the assumption stated. +1: correct half-circuit value but the factor 2 for the two halves omitted, or one term slightly off. 0: input pair only (1.16 × 10⁻¹²/f total) with the method otherwise right, or the $g_m$-ratio weighting applied to $\overline{v^2}$ without squaring. −2 (asserted as fact): cascode or tail devices claimed to dominate the DM noise, the $1/f$ dependence dropped, or results off by orders of magnitude from unit errors (e.g. area in m² with $C_{ox}$ per μm²).
