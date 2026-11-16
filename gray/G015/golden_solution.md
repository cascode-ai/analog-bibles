# Golden Solution - G015

## Reference answer

$f_T \approx 4.1$ MHz; stored base charge $Q_B \approx 19$ pC ($1.9\times10^{-11}$ C).

- Base transit time $\tau_F = W_B^2/(2D_p) = (10^{-3}\ \mathrm{cm})^2/(2\times13\ \mathrm{cm^2/s}) = 38.5$ ns.
- $g_m = |I_C|/V_T = 19.2$ mA/V; $C_{je}/g_m = 2\ \mathrm{pF}/19.2\ \mathrm{mA/V} = 0.104$ ns.
- $\tau_T = \tau_F + C_{je}/g_m = 38.6$ ns → $f_T = 1/(2\pi\tau_T) = 4.13$ MHz (the wide base dominates; the depletion term adds only 0.3%).
- $Q_B = \tau_F|I_C| = 38.5\ \mathrm{ns}\times0.5\ \mathrm{mA} = 1.92\times10^{-11}$ C.

## Grading notes

+2: $f_T$ in 3.9–4.3 MHz and $Q_B$ in 18–20 pC, using $\tau_F = W_B^2/(2D_p)$. +1: one of the two values with a slip, or $C_{je}$ term omitted with $f_T \approx 4.14$ MHz (negligible difference, fine). 0: one of the two quantities right and the other wrong or missing. -2 (asserted as fact): $\tau_F = W_B^2/D_p$ (giving ≈ 2.07 MHz and 38.5 pC), $f_T$ computed from $C_{je}$ alone (≈ 1.5 GHz), or unit errors of orders of magnitude.
