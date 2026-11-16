# Golden Solution - R154

## Reference answer

$|A_v| = g_mR_D \approx 13$ (13.2 with body effect, 12.9 without); ≈ 11.7 if $r_O$ is included.
- Allowed output range: from $V_{in,CM} - V_{TH1} \approx 0.444$ V ($V_{TH1} \approx 0.756$ V with body effect at $V_P \approx 0.25$ V) to $V_{DD} = 3$ V. The maximum symmetric swing needs the output CM level in the middle: $V_{DD} - R_DI_{SS}/2 = (3 + 0.444)/2 = 1.72$ V, so $R_D = (3 - 1.72)/0.25\ \mathrm{mA} \approx 5.1$ kΩ (5.0 kΩ without body effect). Equivalently $R_DI_{SS}$ = full single-ended swing.
- $g_m = \sqrt{2(134\ \mu)(100)(0.25\ \mathrm{mA})} = 2.59$ mS, so $|A_v| = g_mR_D = 2.59\ \mathrm{mS}\times 5.11\ \mathrm{k\Omega} \approx 13.2$ (12.9 with 5.0 kΩ).
- With channel-length modulation, $r_O = 1/(0.1 \times 0.25\ \mathrm{mA}) = 40$ kΩ and $|A_v| = g_m(R_D\|r_O) \approx 11.7$ (11.5).

## Grading notes

+2: $R_D$ ≈ 5.0–5.1 kΩ from placing the output CM level midway between $V_{in,CM} - V_{TH}$ and $V_{DD}$, $g_m$ ≈ 2.59 mS, and gain ≈ 12.9–13.2 (or ≈ 11.5–11.7 with $r_O$ = 40 kΩ). +1: correct method with a slip in $R_D$ or $g_m$ (result within ±15%). 0: correct gain formula $g_mR_D$ but $R_D$ not determined, or determined from an unstated assumption. -2 (asserted as fact): $R_D$ from a wrong criterion such as $R_DI_{SS}/2$ = full swing ($R_D$ ≈ 10 kΩ, gain ≈ 26), $g_m$ computed with the full tail current (gain ≈ 18), or a gain of $g_mR_D/2$ for the differential output.
