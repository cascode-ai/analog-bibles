# Golden Solution - G333

## Reference answer

$|\mathscr{R}|$ and phase: 1 kHz: 241, −0.05°; 100 kHz: 241, −4.6°; 10 MHz: 29.9, −89.9°; 1 GHz: 0.050, −110°.

Small-signal parameters: $V_{ov} = \sqrt{2 \times 0.5\text{ mA}/(194\text{ μA/V}^2 \times 83.3)} = 0.249$ V, $g_m = 2I_D/V_{ov} = 4.02$ mA/V; $\lambda = 0.02/0.6 = 0.0333$ V⁻¹, $r_o = 1/(\lambda I_D) = 60$ kΩ; $C_{gs} = \tfrac23 \times 50 \times 0.6 \times 4.32 + 17.5 = 104$ fF; $C_{gd} = 17.5$ fF.

Return ratio: break the loop at the $g_m$ source (inject $g_mv_t$ at the drain, find the returned $v_{gs}$). The current-source input is an open circuit, so
$\mathscr{R}(s) = g_m\,Z_d(s)\,\dfrac{1 + sR_FC_{gd}}{1 + sR_F(C_{gs} + C_{gd})}$, with $Z_d = r_o \,\|\, \dfrac{1}{sC_L} \,\|\, \left(Z_F + \dfrac{1}{sC_{gs}}\right)$, $Z_F = R_F \| \dfrac{1}{sC_{gd}}$, $R_F = 20$ kΩ, $C_L$ = 2 pF.
- Low frequency: $\mathscr{R}_0 = g_mr_o = 241$ (47.7 dB).
- Poles at ≈ 1.26 MHz ($≈ 1/[2\pi r_o(C_L + \dots)]$) and ≈ 68.5 MHz (mainly $R_F$ with $C_{gs}$, modified by $C_L$), and a left-half-plane zero at $1/(2\pi R_FC_{gd})$ ≈ 455 MHz.
- Evaluating: 1 kHz: 241∠−0.05°; 100 kHz: 240.6∠−4.6°; 10 MHz: 29.9∠−89.9°; 1 GHz: 0.050∠−110.5°.

## Grading notes

+2: correct small-signal values ($g_m$ ≈ 4.0 mA/V, $r_o$ ≈ 60 kΩ, $C_{gs}$ ≈ 0.10 pF) and the four return-ratio values within ±10% in magnitude and ±5° in phase (at 1 GHz accept magnitude 0.04–0.06 and phase −105° to −115°). +1: three of four frequencies right, or all right except a consistent small offset from a slightly different $r_o$ (e.g. including $V_{DS}$ in $r_o$). 0: correct low-frequency value 241 and the 10-MHz value, but the high-frequency behaviour wrong because $C_{gd}$ or $C_{gs}$ was omitted. −2 (asserted as fact): a return ratio of order $g_mR_F$ (≈ 80) or with the 20-kΩ resistor treated as grounding the gate, a wrong bias current, or phases inconsistent with a two-pole, one-zero function (e.g. −180° at 1 GHz).
