# Golden Solution - G186

## Reference answer

With $R = (R_S + r_b)\|r_\pi$:
$Z_o(s) = \dfrac{1 + sR(C_\pi + C_\mu)}{sC_\mu\,(1 + g_mR + sRC_\pi)}$.

Numbers: $g_m = 19.2$ mA/V, $r_\pi = 10.4\ \mathrm{k\Omega}$, $C_\pi = g_m/\omega_T - C_\mu = 5.82$ pF, $R = 5.3\ \mathrm{k\Omega}\|10.4\ \mathrm{k\Omega} = 3.51\ \mathrm{k\Omega}$, $g_mR = 67.5$.

Equivalent circuit (exact for this model): a capacitor $C_\infty = C_\mu C_\pi/(C_\pi + C_\mu) = 0.285$ pF in parallel with a series branch $R_x$–$C_x$, where $C_x = C_\mu[1 + g_mR - C_\pi/(C_\pi+C_\mu)] = 20.3$ pF and $R_x = R(C_\pi + C_\mu)/C_x \approx (C_\pi + C_\mu)/(g_mC_\mu) = 1.06\ \mathrm{k\Omega}$. Equivalently: at low frequencies $Z_o$ is a capacitance $C_\mu(1 + g_mR) = 20.6$ pF (Miller-multiplied $C_\mu$); a zero at $1/[R(C_\pi + C_\mu)] = 4.65\times10^7$ rad/s (7.4 MHz) makes it resistive (≈ 1.06 kΩ); a pole at $(1 + g_mR)/(RC_\pi) = 3.35\times10^9$ rad/s (534 MHz) makes it capacitive again ($C_\infty$), beyond the plotted range.

Plot (log–log): $|Z_o|$ falls at −20 dB/decade from ≈ 7.7 MΩ at 1 kHz (77 kΩ at 100 kHz, 7.8 kΩ at 1 MHz), bends near 7.4 MHz (1.3 kΩ at 10 MHz) and flattens at ≈ 1.03–1.06 kΩ up to 100 MHz.

Derivation: drive the collector with $v_x$; the current through $C_\mu$ develops $v_1 = v_x\,sC_\mu Z_1/(1 + sC_\mu Z_1)$ across $Z_1 = R\|(1/sC_\pi)$, and $i_x = v_1(g_m + 1/Z_1)$, so $Y_o = sC_\mu(1 + g_mZ_1)/(1 + sC_\mu Z_1)$, which rearranges to the expression above.

## Grading notes

+2: an expression equivalent to the reference (or a correct equivalent circuit) and a plot with the key features: capacitive with $C \approx 20$ pF ($|Z_o| \approx 7.7$ MΩ at 1 kHz, −20 dB/dec), a break near 7 MHz, and a plateau of ≈ 1 kΩ (≈ $(C_\pi+C_\mu)/(g_mC_\mu)$) up to 100 MHz; values within ±10%. +1: correct expression and low-frequency capacitance but the plateau value or break frequency off by up to a factor 1.5, or the equivalent circuit given in a less complete but correct form (e.g., Miller capacitance in series with ≈1 kΩ). 0: only the low-frequency Miller capacitance found, the high-frequency behavior left out. −2 (asserted as fact): output impedance taken as $R_L$, as infinite/constant, as $1/(sC_\mu)$ without Miller multiplication, or as a resistance $r_o$ (which is infinite here). The question does not say where $C_\mu$ connects; the reference uses the standard placement (internal base $b'$ to collector). Placing $C_\mu$ at the external base as a stated assumption changes $|Z_o|$ by only about 6% (≈ 8.2 MΩ at 1 kHz, ≈ 1.08 kΩ at 100 MHz) and is graded on the same terms when the values fall within ±10%.
