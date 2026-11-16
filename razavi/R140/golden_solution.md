# Golden Solution - R140

## Reference answer

$W/L \approx 203$; NMOS overdrive 0.192 V, PMOS overdrive 0.358 V; $V_{b1} \approx 1.08$ V, $V_{b2} \approx 1.48$ V (gate of $M_3$), $V_{b3} \approx 1.84$ V (gate of $M_4$); $|A_v| \approx 1.3 \times 10^3$.

- Swing $= V_{DD} - 2V_{ov,n} - 2|V_{ov,p}| = 1.9$ V → $V_{ov,n} + |V_{ov,p}| = 0.55$ V. Same W/L and current: $|V_{ov,p}|/V_{ov,n} = \sqrt{134/38.4} = 1.868$ → $V_{ov,n} = 0.1918$ V, $|V_{ov,p}| = 0.3582$ V; $W/L = 2(0.5\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2} \times 0.1918^2) \approx 203$.
- $V_{b1} = V_{GS2} + V_{ov1} = 0.7 + 2(0.1918) = 1.084$ V ($M_1$ at the edge at the lowest output); $V_{b3} = V_{DD} - |V_{GS4}| = 3 - 1.158 = 1.842$ V; $V_{b2} = V_{DD} - |V_{ov4}| - |V_{GS3}| = 3 - 0.358 - 1.158 = 1.484$ V.
- Gain: $g_{m,n} = 2I/V_{ov,n} = 5.21$ mS, $g_{m,p} = 2.79$ mS; $r_{O,n} = 20$ kΩ, $r_{O,p} = 10$ kΩ. $R_{out} \approx (g_{m2}r_{O2}r_{O1}) \| (g_{m3}r_{O3}r_{O4}) = 2.09\ \mathrm{M\Omega} \| 279\ \mathrm{k\Omega} = 246$ kΩ → $|A_v| = g_{m1}R_{out} \approx 1280$ (≈ 1350 with the full expressions $r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}$, the PMOS counterpart and $G_m = 0.99g_{m1}$).

## Grading notes

+2: W/L ≈ 200 (±5%), the three bias voltages within ±0.03 V (1.08, 1.48, 1.84 V), and gain 1.2–1.4×10³. +1: one slip or one bias voltage missing. 0: W/L right but bias voltages or gain wrong by method. -2 (asserted as fact): equal overdrives assumed for NMOS and PMOS despite equal W/L, thresholds included in the swing budget, or a gain off by an order of magnitude.
