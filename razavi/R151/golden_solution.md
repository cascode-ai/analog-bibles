# Golden Solution - R151

## Reference answer

The gain is zero at $V_{DD} = 0$, stays small (≪ 1) while $M_1$/$M_2$ (and at low $V_{DD}$ also $M_3$) are in triode, rises steeply as $M_1$/$M_2$ reach saturation, and then stays flat at $|A_v| = g_mR_D \approx (2.84\ \mathrm{mS})R_D$ for $V_{DD} \gtrsim 0.53\ \mathrm{V} + (0.30\ \mathrm{mA})R_D$ up to 3 V.
- Tail: $M_3$ saturated gives $I_{SS} = \tfrac12(134\ \mu)(100)(1 - 0.7)^2 = 0.603$ mA, i.e. 0.30 mA per side, $g_m = \sqrt{2(13.4\ \mathrm{mA/V^2})(0.30\ \mathrm{mA})} = 2.84$ mS, overdrive of $M_1$ 0.21 V. With body effect $V_{TH1} \approx 0.77$ V and $V_P = 1.3 - 0.77 - 0.21 \approx 0.32$ V > 0.3 V, so $M_3$ is saturated once $M_1$ is (without body effect $V_P$ = 0.39 V).
- Plateau: $M_1$ saturated needs $V_X \ge V_{in,CM} - V_{TH1} \approx 0.53$ V, i.e. $V_{DD} \ge 0.53\ \mathrm{V} + R_DI_{SS}/2$ (0.60 V + $R_DI_{SS}/2$ without body effect): e.g. 1.13 V for $R_D$ = 2 kΩ, 1.74 V for 4 kΩ, 2.34 V for 6 kΩ. Above it $|A_v| = g_mR_D$ is constant (λ = 0); including λ, $g_m(R_D\|r_O)$ with $r_O \approx 33$ kΩ, nearly constant. If $R_D \gtrsim 8$ kΩ the plateau is not reached below 3 V.
- Below the plateau: current flows for any $V_{DD} > 0$ (both gate voltages exceed $V_{TH}$), but $M_1$, $M_2$ are in triode with their drains only slightly above $V_P$, so $g_m = \beta V_{DS}$ is small: e.g. for $R_D$ = 2 kΩ the gain is ≈ 0.06 at 0.5 V, 0.2 at 0.8 V, 0.65 at 1.0 V, then jumps to 5.7 by 1.13 V.

## Grading notes

+2: zero gain at $V_{DD} = 0$, small gain in the triode region, a sharp rise and a flat plateau at $g_mR_D$ ≈ (2.8 mS)·$R_D$ (±5%, or $g_m(R_D\|r_O)$) beginning at $V_{DD} \approx V_{in,CM} - V_{TH1} + R_DI_{SS}/2 \approx 0.53\ \mathrm{V} + (0.30\ \mathrm{mA})R_D$ with $I_{SS}$ ≈ 0.6 mA. +1: body effect neglected (break at 0.60 V + 0.30 mA·$R_D$) with the rest right, or the break point given without the $R_DI_{SS}/2$ term. 0: only the plateau value, or only a qualitative shape without the plateau expression. -2 (asserted as fact): gain growing indefinitely with $V_{DD}$, gain falling at high $V_{DD}$ (input pair entering triode as $V_{DD}$ rises), a threshold-like turn-on at $V_{DD} = V_{TH}$ with saturation immediately after, or $I_{SS}$/$g_m$ off by a formula error.
