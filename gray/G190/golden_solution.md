# Golden Solution - G190

## Reference answer

$\dfrac{v_o}{v_i}(s) = 0.977\,\dfrac{1 + s/2.56\times10^7}{1 + s/2.36\times10^7}$ (s in rad/s): low-frequency gain 0.977 (−0.20 dB), a pole at 3.75 MHz and a zero at 4.08 MHz; the high-frequency gain is $R_E/(R_E + R_S + r_b) = 0.899$ (−0.93 dB).

- $g_m = 0.3/26 = 11.5$ mA/V, $r_\pi = \beta/g_m = 4.33\ \mathrm{k\Omega}$, $C_\pi = g_m/\omega_T = 459$ pF (since $C_\mu = 0$). $R_S' = R_S + r_b = 450\ \Omega$.
- Low-frequency gain $\dfrac{g_mR_E + R_E/r_\pi}{1 + g_mR_E + (R_S' + R_E)/r_\pi} = \dfrac{46.15 + 0.92}{1 + 46.15 + 1.03} = 0.977$.
- Zero: $z_1 = -(g_m + 1/r_\pi)/C_\pi = -2.56\times10^7$ rad/s (4.08 MHz).
- Pole: $p_1 = -1/(R_1C_\pi)$ with $R_1 = r_\pi\|[(R_S' + R_E)/(1 + g_mR_E)] = 4.33\ \mathrm{k\Omega}\|94.4\ \Omega = 92.4\ \Omega$ → $p_1 = -2.36\times10^7$ rad/s (3.75 MHz).
- Sketch: flat at −0.20 dB up to ≈ 1 MHz (−0.25 dB at 1 MHz), stepping down between ≈ 2 and 10 MHz (−0.47 dB at 3 MHz, −0.83 dB at 10 MHz) to −0.90 dB at 20 MHz, approaching −0.93 dB. The total change is only ≈ 0.7 dB; the phase dips to only ≈ −2.4° near 4 MHz. Because pole and zero nearly coincide, there is no real −3-dB frequency in this range.

## Grading notes

+2: low-frequency gain ≈ 0.977 (−0.2 dB), pole ≈ 3.7–3.8 MHz and zero ≈ 4.1 MHz (or $\approx f_T$), and the sketch showing a small step of ≈ 0.7 dB down to ≈ −0.9 dB at high frequency ($R_E/(R_E+R_S+r_b)$); numbers within ±5%. +1: correct transfer-function form and values with one slip, or the pole/zero correct but the high-frequency asymptote not identified. 0: low-frequency gain right but frequency behavior described only qualitatively or with a wrong pole. −2 (asserted as fact): a single-pole roll-off at −20 dB/dec with a −3-dB frequency in the MHz range (zero ignored), a gain much greater than 1 or inverting, or $C_\pi$ computed wrongly by orders of magnitude (e.g., from $f_T$ in rad/s).
