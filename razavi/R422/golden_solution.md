# Golden Solution - R422

## Reference answer

Gain $|A_v| = g_{m1}(r_{O1}\|r_{O3}) \approx 24.4$. Each output can swing from ≈ 0.54 V to ≈ 2.49 V, i.e. ≈ 1.95 V peak-to-peak per output and ≈ 3.9 V peak-to-peak differential (≈ 1.89 V and 3.78 V if the body effect of $M_1$, $M_2$ is ignored).

- Each branch: 0.5 mA. $g_{m1} = \sqrt{2(134\ \mu)(100)(0.5\ \mathrm{m})} = 3.66$ mS; $r_{O1} = 1/(0.1 \times 0.5\ \mathrm{mA}) = 20$ kΩ; $r_{O3} = 1/(0.2 \times 0.5\ \mathrm{mA}) = 10$ kΩ; $r_{O1}\|r_{O3} = 6.67$ kΩ → gain = 24.4.
- Overdrives: $V_{OD1} = \sqrt{2(0.5\ \mathrm{m})/(134\ \mu \cdot 100)} = 0.273$ V; $|V_{OD3}| = \sqrt{2(0.5\ \mathrm{m})/(38.4\ \mu \cdot 100)} = 0.510$ V.
- Upper limit (M3/M4 at the edge of saturation): $V_{DD} - |V_{OD3}| = 2.49$ V.
- Lower limit (M1/M2 at the edge): $V_{out} \ge V_{in,CM} - V_{TH1}$. With body effect, $V_P = 1.3 - V_{TH1} - 0.273$ solved together with $V_{TH1} = 0.7 + 0.45(\sqrt{0.9 + V_P} - \sqrt{0.9})$ gives $V_P \approx 0.27$ V, $V_{TH1} \approx 0.76$ V, so $V_{out,min} \approx 0.54$ V (0.60 V without body effect).
- Swing per output: 2.49 − 0.54 = 1.95 V p-p; differential: 2 × 1.95 ≈ 3.9 V p-p.

## Grading notes

+2: gain 24.4 (±3%) and the swing from ≈ 0.54 V to ≈ 2.49 V (±0.05 V), stated per output (≈ 1.95 V p-p) and/or differentially (≈ 3.9 V p-p), with body effect included. +1: everything right except the body effect ignored (0.60 V, 1.89/3.78 V), or only one of the two swing forms given without saying which it is but consistent. 0: gain right but swing wrong through a wrong limit (e.g., the tail headroom treated as an extra non-ideal limit without basis), or swing right with gain slip. -2 (asserted as fact): gain computed with $g_m$ formula errors or with $r_{O1}$ alone or $r_{O3}$ alone, swing limits written as $V_{DD} - |V_{GS3}|$ or $V_{in,CM} - V_{GS1}$ (gate-source instead of overdrive/threshold), or λ values swapped.
