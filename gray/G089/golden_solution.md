# Golden Solution - G089

## Reference answer

$I_{IN} \approx 0.977$ mA, $R_2 \approx 27.4$ kΩ, $R_o \approx 160$ MΩ.

- $V_{BE1} = V_T\ln(I_{IN}/I_S) \approx 0.676$ V, so $I_{IN} = (30 - 0.676)/30\ \mathrm{k\Omega} = 0.977$ mA (0.977 mA also with $V_{BE} = 0.7$ V).
- KVL around the base-emitter loop: $V_{BE1} - V_{BE2} = I_{OUT}R_2$ (neglecting base current), so $R_2 = \dfrac{V_T}{I_{OUT}}\ln\dfrac{I_{IN}}{I_{OUT}} = \dfrac{26\ \mathrm{mV}}{5\ \mu\mathrm{A}}\ln(195.5) = 5.2\ \mathrm{k\Omega}\times5.28 = 27.4$ kΩ (27.3 kΩ with the factor $(\beta_F+1)/\beta_F$ on the emitter current).
- Output resistance (degenerated common-emitter output, base driven from the low impedance of diode $Q_1$): $R_o \approx r_{o2}[1 + g_{m2}(R_2\|r_{\pi2})]$ with $g_{m2} = 5\ \mu\mathrm{A}/26\ \mathrm{mV} = 0.192$ mS, $r_{\pi2} = \beta_0/g_{m2} = 1.04$ MΩ, $R_2\|r_{\pi2} = 26.7$ kΩ, $r_{o2} = V_A/I_{OUT} = 26$ MΩ: $R_o \approx 26\ \mathrm{M\Omega}\times6.14 \approx 160$ MΩ.

## Grading notes

+2: $R_2$ in 26.5–28.3 kΩ and $R_o$ in 150–170 MΩ (neglecting $r_{\pi2}$, giving ≈ 163 MΩ, is fine). +1: correct method with one arithmetic slip. 0: $R_2$ correct but $R_o$ missing or wrong through a slip, or $I_{IN}$ taken as 1 mA with consequential small errors and no $R_o$. -2 (asserted as fact): $R_2$ from $V_{BE}/I_{OUT}$ (≈ 140 kΩ) or from treating the circuit as a simple mirror, $R_o$ taken as $r_{o2}$ (26 MΩ) or as $\beta_0r_o$, or the logarithm inverted.
