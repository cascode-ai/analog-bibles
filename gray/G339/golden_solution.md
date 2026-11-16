# Golden Solution - G339

## Reference answer

Loop bandwidth $K_v = K_OK_DA = 10^3 \times 1 \times 1 = 1000\ \mathrm{s^{-1}}$ (1000 rad/s, about 159 Hz). Single-pole filter: $\omega_1 = 2K_v = 2000$ rad/s, giving closed-loop poles at $s = -1000 \pm j1000$ rad/s.

- First-order loop: $V_o/\omega_i = (1/K_O)\,K_v/(s + K_v)$, a single pole at $-K_v$; the bandwidth for the frequency modulation is $K_v$. The 10⁵ rad/s center frequency does not enter.
- Second-order loop: $V_o/\omega_i = (1/K_O)/[1 + s/K_v + s^2/(\omega_1K_v)]$, so $\omega_n = \sqrt{K_v\omega_1}$ and $\zeta = \tfrac12\sqrt{\omega_1/K_v}$.
- Poles on the 45° radials means $\zeta = 1/\sqrt2$ → $\omega_1/K_v = 2$ → $\omega_1 = 2000$ rad/s (e.g. an RC low-pass with $RC = 0.5$ ms). Then $\omega_n = 1414$ rad/s, which is also the −3 dB bandwidth of this maximally flat response, and the poles are at $-\omega_n/\sqrt2 \pm j\omega_n/\sqrt2 = -1000 \pm j1000$ rad/s.

## Grading notes

Credit is split equally between the two results. +2: $K_v = 1000\ \mathrm{s^{-1}}$ (or the equivalent 159 Hz, clearly converted) and $\omega_1 = 2000$ rad/s (±2%). +1: both right but the pole location only given as an RC product without the value, or a minor unit slip (Hz/rad/s) that does not change the conclusion. 0: one of the two results right and the other wrong. −2 (asserted as fact): bandwidth involving the center frequency (e.g. $10^5$ or $10^8$), $\omega_1 = K_v/2$ (which gives ζ = 0.35), or ζ = 0.707 obtained from a wrong characteristic equation leading to a different $\omega_1$.
