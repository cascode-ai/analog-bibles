# Golden Solution - R177

## Reference answer

Gain ≈ 24.4; $V_{in,CM,min} \approx 1.46$ V (1.37 V without body effect); each output can swing from 0.67 V to 2.28 V, ≈ 1.6 V pp single-ended (≈ 3.2 V pp differential).
- $g_{m1} = 3.66$ mS, $r_{O1} = 1/(0.1\times0.5\ \mathrm{m}) = 20$ kΩ, $r_{O3} = 1/(0.2\times0.5\ \mathrm{m}) = 10$ kΩ: $|A_v| = g_{m1}(r_{O1}\|r_{O3}) = 3.66\ \mathrm{mS}\times 6.67\ \mathrm{k\Omega} = 24.4$.
- Minimum CM: $0.4 + 0.273 + V_{TH1}(0.4\ \mathrm{V}) = 0.4 + 0.273 + 0.786 = 1.46$ V.
- Lower output limit: $V_{in,CM} - V_{TH1} = 0.4 + 0.273 = 0.673$ V. Upper limit: $M_3$ saturated, $V_{DD} - |V_{GS3} - V_{TH3}|$ with $|V_{GS3} - V_{TH3}| = \sqrt{2(0.5\ \mathrm{m})/(38.4\ \mu\times 50)} = 0.722$ V, i.e. 2.278 V. Swing 2.278 − 0.673 = 1.61 V per output, 3.21 V pp differential (output CM must be held near 1.48 V, e.g. by common-mode feedback).

## Grading notes

Three parts: gain, minimum CM, swing. +2: gain ≈ 24.4 (±5%), $V_{in,CM,min}$ ≈ 1.46 V, swing ≈ 1.6 V pp per output (or ≈ 3.2 V pp differential). +1: body effect neglected in the CM level (1.37 V; the swing limits are unchanged), a stated λp ∝ 1/L choice (λp = 0.1 V⁻¹, gain ≈ 36.6), or one slip. 0: two of the three parts right. -2 (asserted as fact): gain $g_{m1}/g_{m3}$ (diode formula), upper output limit $V_{DD}$ or $V_{DD} - |V_{THP}|$, or the PMOS overdrive computed with $\mu_nC_{ox}$.
