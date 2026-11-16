# Golden Solution - A320

## Reference answer

GB ≈ $26.8\times10^6$ rad/s (≈ 4.26 MHz); $C_c \approx 18.7$ pF.

- With the zero cancelling $p_2$, the loop has the dominant pole (−90°) plus the two poles at $-10^8$ rad/s.
- 60° phase margin: $180° - 90° - 2\tan^{-1}(GB/10^8) = 60°$ → $\tan^{-1}(GB/10^8) = 15°$ → $GB = 10^8\tan15° = 26.8\times10^6$ rad/s ($f$ = 4.26 MHz).
- $GB = g_{m1}/C_c$ → $C_c = 500\ \mu\mathrm{S}/26.8\times10^6\ \mathrm{s^{-1}} = 18.7$ pF.
(Evaluating the phase at the true unity-gain frequency, where the two poles also reduce the magnitude by 1.07, gives $g_{m1}/C_c$ ≈ 28.7 Mrad/s and $C_c$ ≈ 17.4 pF; either is acceptable.)

## Grading notes

+2: GB ≈ 26.8×10⁶ rad/s (≈ 4.3 MHz) and $C_c$ ≈ 18.7 pF (values from the exact-crossover variant, 28.7 Mrad/s and 17.4 pF, also accepted), with consistent units. +1: right method with a rad/s–Hz mix-up in only one place (e.g., GB stated as "26.8 MHz" but $C_c$ = 18.7 pF computed correctly). 0: GB right, $C_c$ wrong through a unit error in the method (e.g., 2.97 pF from treating 26.8 as MHz). A correct SI value of $C_c$ (≈ 1.87 × 10⁻¹¹ F) followed by a wrong prefix in the final statement (e.g. "18.7 fF") is a slip: +1. −2 (asserted as fact): the cancelled second pole still counted, the 2.2 rule applied to $p_2$ (GB ≈ 4.5 Mrad/s), or the two higher poles counted only once.
