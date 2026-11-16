# Golden Solution - G334

## Reference answer

Unity-gain frequency ≈ 140 MHz; phase margin ≈ 44°; gain margin infinite (the phase never reaches −180°).

- Small-signal values: $g_m = 4.02$ mA/V, $r_o = 60$ kΩ, $C_{gs} = 104$ fF, $C_{gd} = 17.5$ fF.
- $\mathscr{R}(s) = g_m\,Z_d(s)\,\dfrac{1 + sR_FC_{gd}}{1 + sR_F(C_{gs} + C_{gd})}$, $Z_d = r_o \| \frac{1}{sC_L} \| (Z_F + \frac{1}{sC_{gs}})$, $Z_F = R_F \| \frac{1}{sC_{gd}}$.
- $\mathscr{R}_0 = g_mr_o = 241$ (47.7 dB); poles at ≈ 1.26 MHz and ≈ 68.5 MHz; LHP zero at $1/(2\pi R_FC_{gd})$ ≈ 455 MHz.
- Magnitude: flat at 47.7 dB to ≈ 1 MHz, −20 dB/dec to ≈ 70 MHz, −40 dB/dec above, flattening back toward −20 dB/dec above the zero. Phase: 0° → −90° around 1–10 MHz, a minimum of ≈ −137° near 180 MHz, then returning toward −90° at very high frequency.
- $|\mathscr{R}| = 1$ at ≈ 140 MHz where the phase is ≈ −136°: PM ≈ 44°. Since the phase stays above −180°, the gain margin is unbounded (infinite).
- Without $C_{gd}$ the zero disappears and the margin would be only ≈ 29°; the feedback capacitance $C_{gd}$ in parallel with $R_F$ adds phase lead.

## Grading notes

+2: Bode sketch with the ≈ 1.3-MHz and ≈ 70-MHz poles and the ≈ 450-MHz zero, unity-gain frequency ≈ 140 MHz (±15%), PM ≈ 44° (accept 38–50°), and gain margin infinite (phase never −180°). +1: correct unity-gain frequency and PM with the gain margin missing or given as a finite number without justification, or a PM in the 27–37° range (≈ 29° exactly) obtained by omitting $C_{gd}$ with this simplification stated. 0: correct dc value and dominant pole but the second pole or crossover clearly wrong. −2 (asserted as fact): a claim that the loop is unstable, a dominant pole from $R_FC_{gs}$, or a unity-gain frequency of order $g_m/C_{gs}$ (≈ 6 GHz).
