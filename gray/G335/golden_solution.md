# Golden Solution - G335

## Reference answer

The poles become complex at $\sigma ≈ -1.57 \times 10^9$ rad/s ($f ≈ 0.076$). The amplifier is stable for all $0 \le f \le 1$ ("unconditionally stable"), but only barely: with unity-gain feedback the poles are at $s ≈ -5.0 \times 10^7 \pm j5.69 \times 10^9$ rad/s ($-8.0 \pm j905$ MHz, damping ratio ≈ 0.009). Instability would need $f > 1.03$ (low-frequency loop gain ≈ $1.78 \times 10^4$).

- Open-loop gain $a(s) = g_m\dfrac{(g_m - sC)R_1R_2}{1 + bs + as^2}$ with $a_0 = g_m^2R_1R_2 = 1.73 \times 10^4$,
$b = (C_2 + C)R_2 + (C_1 + C)R_1 + g_mR_1R_2C = 5.34 \times 10^{-8} + 1.753 \times 10^{-6} = 1.806 \times 10^{-6}$ s,
$a = R_1R_2(C_1C_2 + CC_1 + CC_2) = 5.34 \times 10^{-16}$ s².
Poles: $-5.54 \times 10^5$ and $-3.38 \times 10^9$ rad/s; right-half-plane zero at $+g_m/C = +9.85 \times 10^9$ rad/s.
- Closed loop: $as^2 + (b - f\,a_0C/g_m)s + (1 + fa_0) = 0$, i.e. the $s$ coefficient is $(C_2 + C)R_2 + (C_1 + C)R_1 + g_mR_1R_2C(1 - f)$.
- Root locus (odd number of RHP zeros, so the real-axis segments are where an even number of poles/zeros lie to the right): between the two poles, and to the right of the RHP zero. The poles move together, break away at $\sigma = -1.57 \times 10^9$ rad/s (from $\tfrac{1}{\sigma - p_1} + \tfrac{1}{\sigma - p_2} = \tfrac{1}{\sigma - z}$, or the zero of the discriminant, at $f = 0.076$), then the complex pair moves up and to the right (calibration: $f = 0.1$: $-1.53 \times 10^9 \pm j0.95 \times 10^9$; $f = 0.5$: $-0.87 \times 10^9 \pm j3.93 \times 10^9$). It reaches the $j\omega$ axis at $f = 1.03$ and would return to the real axis at $+2.1 \times 10^{10}$ rad/s (right of the zero) for $f ≈ 14$, one branch ending on the zero and the other going to +∞.
- Stability for $0 \le f \le 1$: all coefficients stay positive because the $s$ coefficient at $f = 1$ is still $(C_2 + C)R_2 + (C_1 + C)R_1 = 5.3 \times 10^{-8}$ s > 0. With $f = 1$: $s = \dfrac{-5.34 \times 10^{-8} \pm \sqrt{(5.34 \times 10^{-8})^2 - 4 \times 5.34 \times 10^{-16} \times 1.73 \times 10^4}}{2 \times 5.34 \times 10^{-16}} = -5.0 \times 10^7 \pm j5.69 \times 10^9$ rad/s.

## Grading notes

+2: inclusion of the RHP zero $g_m/C$ in the loop gain, break-away at ≈ −1.57 × 10⁹ rad/s (±10%), the conclusion "stable for $0 \le f \le 1$" with the unity-gain poles ≈ −5 × 10⁷ ± j5.7 × 10⁹ rad/s (±10%; or −8 MHz ± j905 MHz), and a locus sketch bending toward the right half-plane (crossing only for $f$ slightly above 1). +1: correct conclusion and unity-gain poles with the break-away value or sketch missing, or a minor slip. 0: the RHP zero ignored, giving poles ≈ −1.7 × 10⁹ ± j5.4 × 10⁹ rad/s and a locus that stays far from the axis, with otherwise correct working. −2 (asserted as fact): a claim that the amplifier becomes unstable for some $f < 1$, open-loop poles miscomputed by orders of magnitude, or the zero placed in the left half-plane in a way that changes the conclusion.
