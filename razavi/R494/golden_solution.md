# Golden Solution - R494

## Reference answer

$\overline{V_{n,in}^2} \approx 1.85\times10^{-17}\ \mathrm{V^2/Hz}$, i.e. ≈ 4.3 nV/√Hz (differential input), set almost entirely by the first stage:
$$\overline{V_{n,in}^2} = 2\cdot4kT\gamma\left[\frac{1}{g_{m1}}\left(1 + \frac{g_{m3}}{g_{m1}}\right) + \frac{g_{m5} + g_{m7}}{(g_{m1}R_Xg_{m5})^2}\right].$$
- $g_{m1}$ = 1.83 mS, $g_{m3} = \sqrt{2(38.4\ \mu)(100)(0.125\ \mathrm{m})} = 0.98$ mS, $g_{m5}$ = 3.04 mS, $g_{m7} = \sqrt{2(134\ \mu)(100)(1\ \mathrm{m})} = 5.18$ mS, $R_X = r_{O1} \parallel r_{O3}$ = 26.7 kΩ.
- Half circuit: the noise currents of $M_1$ and $M_3$ at X referred to the gate of $M_1$ give $4kT\gamma(g_{m1} + g_{m3})/g_{m1}^2$, an effective 839 Ω. The second stage ($M_5$, $M_7$), divided by the first-stage gain squared, adds only 0.37 Ω and is negligible.
- $4kT\gamma = 1.10\times10^{-20}$ J. Per half circuit: 9.3×10⁻¹⁸ V²/Hz. The differential input sees both halves: × 2, giving 1.85×10⁻¹⁷ V²/Hz → 4.3 nV/√Hz.
- The tail source $I_{SS}$ contributes only common-mode noise.

## Grading notes

+2: 4.1–4.5 nV/√Hz (or 1.7–2.0×10⁻¹⁷ V²/Hz), with $M_1$–$M_4$ included and the second stage shown negligible. +1: correct value with the second stage not discussed, or a slip within 10%. 0: right structure but only one half circuit counted (≈ 3.0 nV/√Hz), or the PMOS loads omitted (≈ 3.5 nV/√Hz). -2 (asserted as fact): second stage claimed dominant, tail-current noise counted as differential, or a value off by more than 2× from a wrong noise model.
