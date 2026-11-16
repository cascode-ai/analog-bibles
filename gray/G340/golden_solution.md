# Golden Solution - G340

## Reference answer

$F(s) = \dfrac{1 + s/\omega_2}{1 + s/\omega_1}$ with $\omega_1 \approx 7.61$ rad/s (pole) and $\omega_2 \approx 116.5$ rad/s (zero). One realization is a lag-lead network: $R_1$ in series from the phase-detector output to the VCO input node, and $R_2$ in series with $C$ from that node to ground, so that $\omega_2 = 1/(R_2C)$ and $\omega_1 = 1/[(R_1 + R_2)C]$. With $C = 1\ \mu$F: $R_2 = 8.59$ kΩ, $R_1 = 122.8$ kΩ (any C with the same time constants works).

Derivation:
- Loop gain $T(s) = \dfrac{K_vF(s)}{s}$ with $K_v = K_OK_D = 1000\ \mathrm{s^{-1}}$. Let $a = \omega_c/\omega_1$ and $b = \omega_c/\omega_2$, with $\omega_c = 100$ rad/s.
- Phase: $-90° - \arctan a + \arctan b = -135°$ → $\arctan a - \arctan b = 45°$ → $a = (1 + b)/(1 - b)$.
- Magnitude: $(K_v/\omega_c)^2(1 + b^2) = 1 + a^2$, i.e. $100(1 + b^2) = 2(1 + b^2)/(1 - b)^2$ → $(1 - b)^2 = 0.02$ → $b = 0.8586$, $a = 13.14$.
- So $\omega_2 = 100/0.8586 = 116.5$ rad/s and $\omega_1 = 100/13.14 = 7.61$ rad/s ($\omega_2/\omega_1 = 15.3$).
- Check: $|T(j100)| = 1.000$ and $\angle T(j100) = -135.0°$ (45° phase margin). Closed-loop poles at $-36.5 \pm j79.2$ rad/s ($\omega_n \approx 87$ rad/s, ζ ≈ 0.42).
- The asymptotic approximation ($\omega_1 \ll \omega_c$, zero placed at $\omega_c$) gives $\omega_2 = 100$ rad/s and $\omega_1 = \omega_c^2/(\sqrt2 K_v) = 7.07$ rad/s, which yields about −131° at crossover.

## Grading notes

+2: a pole–zero filter with $\omega_1 \approx 7.6$ rad/s and $\omega_2 \approx 116$ rad/s (each ±3%), a realizable R-C network with component values consistent with those time constants, and the correct loop-gain expression $K_vF(s)/s$ with $K_v = 1000\ \mathrm{s^{-1}}$. +1: the asymptotic design ($\omega_2 = 100$ rad/s, $\omega_1 \approx 7.07$ rad/s, about −131° at crossover) presented as an approximation, or correct pole and zero without component values. 0: only one of the two specifications (crossover or phase) met, or the right method with an arithmetic error. −2 (asserted as fact): zero above the pole (a lead network), the crossover set at $K_v$ or the phase condition misread as +135°/a 135° margin, or $K_v$ wrong by a factor such as 2π.
