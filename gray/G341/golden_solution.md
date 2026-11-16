# Golden Solution - G341

## Reference answer

Capture range ≈ ±135 rad/s (≈ ±21.5 Hz) about the 10⁵ rad/s center, i.e. input frequencies from about 99,865 to 100,135 rad/s (total width ≈ 270 rad/s). This is far smaller than the lock range $\pm(\pi/2)K_v = \pm1571$ rad/s.

- Criterion: $\Delta\omega < \dfrac{\pi}{2}K_DK_O\,|F(j\Delta\omega)| = 1570.8\,|F(j\Delta\omega)|$ rad/s, with $\Delta\omega = |\omega_i - \omega_{osc}|$.
- $|F(j\Delta\omega)| = \sqrt{1 + (\Delta\omega/116.5)^2}\,/\sqrt{1 + (\Delta\omega/7.61)^2}$. At $\Delta\omega = 135$ rad/s: $\sqrt{1 + 1.348}/\sqrt{1 + 315.8} = 1.532/17.80 = 0.0861$, and $1570.8 \times 0.0861 = 135$ rad/s, so the boundary is at $\Delta\omega \approx 135$ rad/s.
- For comparison, using the high-frequency asymptote $|F| \to \omega_1/\omega_2 = 0.0653$ gives a cruder estimate of ≈ ±103 rad/s.

## Grading notes

+2: about ±135 rad/s (125–145 rad/s, or the equivalent ±21 Hz; a total width of ≈ 270 rad/s clearly labelled as such is equally fine), obtained by solving the implicit condition with the filter magnitude at the difference frequency. +1: the asymptotic estimate ≈ ±103 rad/s with the approximation stated, or the right value without stating it as a range about the center frequency. 0: correct method with an arithmetic slip in the final value. −2 (asserted as fact): capture range equal to the lock range (±1571 rad/s, filter ignored), filter magnitude evaluated at dc or at the center frequency $10^5$ rad/s, or a result off by 2π from mixing Hz and rad/s.
