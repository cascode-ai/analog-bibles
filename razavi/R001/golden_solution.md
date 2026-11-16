# Golden Solution - R001

## Reference answer

Both curves are zero below threshold and square-law parabolas above it; both devices stay saturated over the whole sweep. At $|V_{GS}| = 3$ V: NFET ≈ 35.4 mA (≈ 46.1 mA if the factor $1+\lambda|V_{DS}| = 1.3$ is included), PFET ≈ 9.3 mA (≈ 14.9 mA with $1+\lambda|V_{DS}| = 1.6$). At full gate drive the NFET carries about 3.8 times (3.1 times with CLM) the PFET current.

Derivation (square law, $L$ = effective length, $V_{SB} = 0$ so no body effect):
- Saturation: $|V_{DS}| = 3\ \mathrm{V} > |V_{GS}| - |V_{TH}|$ for every $|V_{GS}| \le 3$ V.
- NFET: $I_D = \tfrac12(134\ \mu\mathrm{A/V^2})(100)(V_{GS}-0.7)^2 = 6.70\ \mathrm{mA/V^2}\,(V_{GS}-0.7)^2$ for $V_{GS} > 0.7$ V, zero below. At $V_{GS}$ = 1, 1.5, 2, 2.5, 3 V: 0.60, 4.29, 11.3, 21.7, 35.4 mA (with CLM ×1.3: 0.78, 5.57, 14.7, 28.2, 46.1 mA).
- PFET: $|I_D| = \tfrac12(38.4\ \mu\mathrm{A/V^2})(100)(|V_{GS}|-0.8)^2 = 1.92\ \mathrm{mA/V^2}\,(|V_{GS}|-0.8)^2$ for $|V_{GS}| > 0.8$ V. At $|V_{GS}|$ = 1, 1.5, 2, 2.5, 3 V: 0.077, 0.94, 2.76, 5.55, 9.29 mA (with CLM ×1.6: 0.12, 1.51, 4.42, 8.88, 14.9 mA).
- (A small subthreshold current flows just below threshold in reality; the square law sets it to zero.)

## Grading notes

+2: both curves start at the correct thresholds (0.7 V and 0.8 V), rise parabolically (saturation throughout), and the values at $|V_{GS}| = 3$ V are within ±5% of either convention: 35.5 mA and 9.3 mA without the $(1+\lambda|V_{DS}|)$ factor, or 46.2 mA and 14.9 mA with it. Either convention is fine if used consistently or stated. +1: correct shapes and thresholds with one numerical slip, or only the endpoint values given with the shape described in words. 0: only one of the two devices right, or correct shapes with no numbers at all. -2 (asserted as fact): devices treated as in triode or curves drawn linear, wrong thresholds, the PFET current larger than the NFET current, or values off by a formula error (missing the 1/2, $\mu_nC_{ox}$ used for the PFET, λ applied as a divisor).
