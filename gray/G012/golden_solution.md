# Golden Solution - G012

## Reference answer

(1) $f_T \approx 7.7$ GHz, $f_\beta = f_T/\beta_0 \approx 77$ MHz. (2) $f_T \approx 9.8$ GHz, $f_\beta \approx 98$ MHz.

Curves: $|\beta(j\omega)| = \beta_0/|1 + jf/f_\beta|$. Both are flat at 100 from 0.1 MHz to ≈ 10 MHz, pass through 70.7 (−3 dB) at $f_\beta$, then fall at −20 dB/decade (slope −1 on log–log axes): case 1 reaches ≈ 61 at 100 MHz and ≈ 7.7 at 1000 MHz; case 2 ≈ 70 at 100 MHz and ≈ 9.8 at 1000 MHz. Neither reaches unity within the plotted range; extrapolating the −1 slope gives unity at $f_T$.

- Case 1: $g_m = 7.69$ mA/V, $C_\pi = \tau_Fg_m + C_{je} = 0.115 + 0.040 = 0.155$ pF, $C_\mu = 10/\sqrt{1+3/0.55} = 3.9$ fF; $f_T = g_m/[2\pi(C_\pi + C_\mu)] = 7.69\ \mathrm{mA/V}/(2\pi\times0.159\ \mathrm{pF}) = 7.68$ GHz (equivalently $\tau_T = \tau_F + (C_{je}+C_\mu)/g_m = 15 + 5.7 = 20.7$ ps).
- Case 2: $g_m = 38.5$ mA/V, $C_\pi = 0.577 + 0.040 = 0.617$ pF, $C_\mu = 6.0$ fF; $f_T = 38.5\ \mathrm{mA/V}/(2\pi\times0.623\ \mathrm{pF}) = 9.83$ GHz ($\tau_T = 15 + 1.2 = 16.2$ ps).
- $f_T$ is higher at the larger current because the depletion-capacitance term $(C_{je}+C_\mu)/g_m$ shrinks, leaving $\tau_F$ dominant.

## Grading notes

+2: $f_T$ ≈ 7.3–8.1 GHz and 9.3–10.3 GHz, with curves flat at 100 up to $f_\beta = f_T/100$ (≈ 77 and 98 MHz) and falling at −20 dB/decade to ≈ 8 and ≈ 10 at 1000 MHz. +1: both $f_T$ right but the sketch only described loosely (e.g. corner frequencies not given), or one $f_T$ with a small slip. 0: one bias point right and the other wrong, or correct sketch shape with $f_T$ values off by a slip in both. -2 (asserted as fact): $f_T$ claimed lower at the higher current, $f_T$ computed as $f_\beta$ or as $\beta_0f_T$ confusion (off by 100×), or the curve drawn rolling off at $f_T$ instead of $f_\beta$.
