# Golden Solution - G188

## Reference answer

$Z_o(s) = \dfrac{1 + sR_S(C_{gs} + C_{gd})}{sC_{gd}(1 + g_mR_S + sR_SC_{gs})}$ with $g_m = 1.94$ mA/V, $C_{gs} = 74.7$ fF, $g_mR_S = 19.4$.

- Low frequencies: a capacitance $C_{gd}(1 + g_mR_S) = 285$ fF.
- Zero at $1/[R_S(C_{gs} + C_{gd})] = 1.13\times10^9$ rad/s (180 MHz); pole at $(1 + g_mR_S)/(R_SC_{gs}) = 2.7\times10^{10}$ rad/s (4.3 GHz).
- Equivalent circuit: $C_\infty = C_{gd}C_{gs}/(C_{gs} + C_{gd}) = 11.8$ fF in parallel with a series branch $C_x = 273$ fF and $R_x \approx (C_{gs} + C_{gd})/(g_mC_{gd}) = 3.2\ \mathrm{k\Omega}$.
- Plot: over the whole range 1 kHz–100 MHz $|Z_o|$ is essentially that of the 285-fF capacitor, falling at −20 dB/decade from ≈ 560 MΩ at 1 kHz to ≈ 5.6 kΩ at 100 MHz (exact value at 100 MHz ≈ 6.4 kΩ as the curve starts to bend toward the ≈ 3.2-kΩ plateau that begins near 180 MHz).
- Compared with the bipolar stage, the MOS stage has no $r_\pi$ and a much smaller $C_{gd}$, so the resistive plateau lies above 100 MHz.

## Grading notes

+2: correct expression (or equivalent circuit) with the Miller-type low-frequency capacitance ≈ 285 fF (±10%), the break near 180 MHz (above the plotted range), and a plot that is a −20 dB/decade line from ≈ 0.56 GΩ at 1 kHz to ≈ 5.6–6.4 kΩ at 100 MHz. +1: correct low-frequency capacitance and plot but the high-frequency elements of the equivalent circuit missing or slightly off. 0: correct method with a numerical slip giving a wrong capacitance. −2 (asserted as fact): output impedance taken as $R_L$, infinite, $1/(sC_{gd})$ with 14 fF only, or a resistive plateau claimed at low frequency.
