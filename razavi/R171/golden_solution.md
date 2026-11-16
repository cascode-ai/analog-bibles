# Golden Solution - R171

## Reference answer

CMRR ≈ 20,300 (≈ 86.1 dB).
- $g_m = 3.66$ mS, $\Delta g_m = 13.4\ \mathrm{mA/V^2}\times 1\ \mathrm{mV} = 13.4\ \mu$S, $R_{SS} = 10$ kΩ.
- CMRR $= \dfrac{g_{m1} + g_{m2} + 4g_{m1}g_{m2}R_{SS}}{2\Delta g_m} \approx \dfrac{g_m}{\Delta g_m}(1 + 2g_mR_{SS}) = 273 \times 74.2 \approx 20{,}300$.

## Grading notes

+2: 19,000–21,500 (85.6–86.6 dB) with the correct expression. +1: one slip (within ±25%). 0: correct formula, gross numerical error. -2 (asserted as fact): CMRR = $g_m/\Delta g_m$ only (273), the symmetric CM gain used, or $\Delta g_m$ from a wrong relation.
