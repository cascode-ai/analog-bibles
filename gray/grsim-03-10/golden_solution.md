# Golden Solution - grsim-03-10

## Reference answer

Hand analysis: $I_{C1} \approx 1.05$ mA, $I_{C2} \approx 70.9$ mA, $R_i \approx 1.90$ MΩ, $v_o/v_i \approx 0.990$, and (same assumptions, ideal input source) $R_o \approx 0.49\ \Omega$.

- DC: $V_O = 5 - 0.7 - 0.7 = 3.6$ V, current in 50 Ω = 72 mA; the 1 kΩ (across $V_{BE2}$) carries 0.7 mA, so $I_{E2} = 71.3$ mA, $I_{C2} = 70.9$ mA, $I_{B2} = 0.355$ mA; $I_{E1} = I_{B2} + 0.7\ \mathrm{mA} = 1.055$ mA, $I_{C1} = 1.05$ mA.
- Small signal: $g_{m1} = 40.4$ mA/V, $r_{\pi1} = 4.95$ kΩ; $g_{m2} = 2.73$ A/V, $r_{\pi2} = 73.3\ \Omega$. Let $R_p = r_{\pi2}\|1\ \mathrm{k\Omega} = 68.3\ \Omega$. The impedance at $Q_1$'s emitter is $Z_1 = R_p + 50(1 + g_{m2}R_p) = 9.44$ kΩ, so $R_i = r_{\pi1} + 201 Z_1 = 1.90$ MΩ.
- Gain: $v_o/v_i = 201 \times 50(1 + g_{m2}R_p)/R_i = 0.990$.
- Output resistance: $Q_1$'s emitter presents $\approx r_{\pi1}/201 = 24.7\ \Omega$ to $Q_2$'s base, so looking into $Q_2$'s emitter $\approx (24.7 + 73.3)/201 \approx 0.49\ \Omega$, in parallel with 50 Ω → $R_o \approx 0.49\ \Omega$.
- What the SPICE model changes: with $I_S = 5\times10^{-15}$ A the base–emitter drops are ≈ 0.68 V and 0.79 V, so $V_O \approx 3.53$ V, $I_{C1} \approx 1.13$ mA, $I_{C2} \approx 69.5$ mA (with RB = 0, VAF = ∞ the small-signal results stay ≈ 1.90 MΩ, 0.990, 0.49 Ω). With RB = 200 Ω, $r_{b2}$ dominates the output resistance: $R_o \approx 1.5\ \Omega$, $R_i \approx 1.5$–1.6 MΩ, gain ≈ 0.97.

## Grading notes

Hand part: +2 requires $I_{C1} \approx 1.05$ mA, $I_{C2} \approx 71$ mA, $R_i \approx 1.9$ MΩ (±5%), gain ≈ 0.99, $R_o \approx 0.5\ \Omega$. A correct simulation shows $I_{C2}$ of about 69–71 mA, $I_{C1}$ about 1.05–1.15 mA, gain 0.97–0.99, $R_i$ about 1.5–1.9 MΩ and $R_o$ between about 0.5 Ω (rb = 0) and 1.5 Ω (rb = 200 Ω); discrepancies must be explained by the model differences ($I_S$-based $V_{BE}$, RB, VAF). −2 (asserted as fact): $R_o$ of the order of the 50-Ω or 1-kΩ resistors, a gain above 1, or $I_{C1} \approx I_{C2}/\beta$ ignoring the 1-kΩ resistor current.
