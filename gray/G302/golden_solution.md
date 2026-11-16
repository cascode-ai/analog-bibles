# Golden Solution - G302

## Reference answer

Instability for $f \approx 0.058$ (low-frequency loop gain $T_0 = 11.7$), with the poles crossing the $j\omega$ axis at ±$j$4.36 MHz.

Root locus (coordinates as $s/2\pi$, in MHz; poles of $T$ at −1, −3, −4):
- Real-axis segments: between −1 and −3, and to the left of −4.
- The branches from −1 and −3 meet and break away at $\sigma_i$ = −1.78 MHz (from $\tfrac{1}{\sigma+1} + \tfrac{1}{\sigma+3} + \tfrac{1}{\sigma+4} = 0$), at $T_0 = 0.176$ ($f = 8.8 \times 10^{-4}$); they leave the axis at right angles and bend toward the asymptotes.
- Asymptotes at ±60° and 180°, meeting the real axis at $(-1-3-4)/3 = -2.67$ MHz.
- The branch from −4 moves left along the real axis to −∞ (it is at −8 MHz when the complex pair reaches the $j\omega$ axis).
- Calibration: $f = 0.01$ ($T_0 = 2$): $-5.79$, $-1.10 \pm j2.24$; $f = 0.03$: $-7.0$, $-0.5 \pm j3.43$; $f = 1$ ($T_0 = 200$): $-16.1$, $+4.06 \pm j11.5$ (unstable).

Instability: the characteristic equation $(s+1)(s+3)(s+4) + 12T_0 = s^3 + 8s^2 + 19s + 12(1+T_0) = 0$ has roots on the $j\omega$ axis when $8 \times 19 = 12(1+T_0)$, i.e. $T_0 = 11.67$, $f = T_0/200 = 0.058$, at $\omega = \sqrt{19}$ → 4.36 MHz. Assuming the locus follows the 60° asymptote (crossing at $j2.67\tan 60° = j4.62$) gives the estimate $T_0 \approx 13.3$, $f \approx 0.066$.

## Grading notes

+2: a correct locus sketch (break-away between −1 and −3 MHz at ≈ −1.8 MHz, ±60° asymptotes from ≈ −2.67 MHz, third branch to −∞) and an instability value $f$ ≈ 0.058 (accept 0.055–0.07, the upper end being the asymptote estimate). +1: correct $f$ with a sketch missing one feature (break-away point or asymptote centroid), or a correct sketch with $f$ from a slightly mis-evaluated magnitude condition (within ±25%). 0: right method but $f$ off by more than that, or only the sketch. −2 (asserted as fact): a locus that stays in the left half-plane (amplifier claimed unconditionally stable), asymptotes at ±90°, or $f$ confused with $T_0$ (e.g. "f = 11.7").
