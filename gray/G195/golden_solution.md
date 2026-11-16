# Golden Solution - G195

## Reference answer

$\dfrac{i_o}{i_i} = \dfrac{1}{1 + s\,C_{gs}/g_m}$ (with $g_{mb} = 0$ and $C_{sb} = 0$): unity gain at low frequency and a pole at $g_m/C_{gs} = 2.59\times10^{10}$ rad/s, so $f_{-3\text{dB}} \approx 4.1$ GHz.

- $g_m = \sqrt{2(60\ \mu)(62.5)(0.5\ \mathrm{m})} = 1.94$ mA/V; $C_{gs} = 74.7$ fF.
- KCL at the source: $i_i = -v_{gs}(g_m + sC_{gs})$; $i_o = -g_mv_{gs}$ (sign conventions aside, magnitude as above).
- $C_{gd}$ connects gate and drain, both at ac ground, so it has no effect; there is no Miller effect.

## Grading notes

+2: gain 1 at low frequency and $f_{-3\text{dB}} = g_m/(2\pi C_{gs}) \approx 4.1$ GHz (±5%). +1: correct form with $C_{gs} + C_{gd}$ used (≈ 3.5 GHz) or another small slip. 0: correct expression with a wrong number (e.g., $g_m$ off by a formula slip) or the frequency missing. −2 (asserted as fact): gain different from ≈ 1, Miller multiplication of $C_{gd}$, or a −3-dB frequency set by $R_L$ or $R_S$.
