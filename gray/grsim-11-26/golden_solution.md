# Golden Solution - grsim-11-26

## Reference answer

≈ 0.72 µV/√Hz at 100 Hz ($5.15\times10^{-13}$ V²/Hz), ≈ 0.23 µV/√Hz at 1 kHz ($5.16\times10^{-14}$ V²/Hz), ≈ 72 nV/√Hz at 10 kHz ($5.18\times10^{-15}$ V²/Hz); flicker noise dominates at all three frequencies (white floor ≈ 5.2 nV/√Hz, 1/f corner ≈ 2 MHz).

- $L_{\text{eff}} = 1 - 0.18 - 0.1 = 0.72\ \mu$m. Each input and load device carries 100 µA.
- $g_{m1} = \sqrt{2\cdot64.7\ \mu\cdot(150/0.72)\cdot100\ \mu} = 1.64$ mS; $g_{m3} = \sqrt{2\cdot194\ \mu\cdot(50/0.72)\cdot100\ \mu} = 1.64$ mS (equal: the 3× mobility ratio offsets the 3× width ratio).
- Input-referred: $\overline{v^2} = 2\overline{v_1^2} + 2(g_{m3}/g_{m1})^2\overline{v_3^2}$. Flicker: $\frac{2K_f}{C_{ox}f}\left[\frac{1}{150\cdot0.72} + \frac{1}{50\cdot0.72}\right]\frac{1}{\mu\text{m}^2} = \frac{1.29\times10^{-11} + 3.86\times10^{-11}}{f} = \frac{5.15\times10^{-11}}{f}$ V²/Hz (the loads contribute 3× as much as the input pair, because of their smaller area). Thermal: $2\cdot4kT\frac{2}{3g_{m1}}(1 + g_{m3}/g_{m1}) = 2.7\times10^{-17}$ V²/Hz.
- Second stage ($M_6$, $M_7$) is divided by the first-stage gain ≈ 197 ($r_{o2}\parallel r_{o4} = 180\text{ k}\parallel360\text{ k}$): negligible; $M_5$ noise is common mode; $M_9$ (a triode resistor in series with 5 pF) is negligible at these frequencies.
- SPICE level-1 flicker form $\text{KF}\cdot I_D^{AF}/(C_{ox}L_{\text{eff}}^2f)$ with AF = 1 matches this model for KF = $2k'K_f$ (≈ $1.16\times10^{-27}$ for n, $3.9\times10^{-28}$ for p).

## Grading notes

A correct answer gives ≈ 0.68–0.76 µV/√Hz, 0.21–0.24 µV/√Hz and 68–76 nV/√Hz at the three frequencies, recognizes the 1/f dominance and that the NMOS loads contribute about three quarters of it, and a simulation (with the flicker coefficient mapped consistently) agreeing within ±20%. +2: these values and a matching simulation. +1: drawn L (1 µm) used instead of $L_{\text{eff}}$ (values ≈ 15–20% lower) or simulation missing. 0: only the input pair counted (≈ 0.36 µV/√Hz at 100 Hz) with otherwise sound work. −2: thermal noise reported as dominant at these frequencies, flicker noise integrated or scaled as $1/f^2$, or load noise added without the $(g_{m3}/g_{m1})^2$ referral in a way that changes results by more than 2×.
