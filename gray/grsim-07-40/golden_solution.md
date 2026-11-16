# Golden Solution - grsim-07-40

## Reference answer

$g_m = \sqrt{2(60\ \mu)(10)(100\ \mu)} = 0.346$ mA/V ($1/g_m = 2.89\ \mathrm{k\Omega}$) for all four devices.

Zero-value resistances (A = input node, B = gates of $M_3$/$M_1$, C = drain of $M_1$): B-node capacitances ($C_{gs3} + C_{db3} + C_{sb4} + C_{gs1} = 60$ fF) see $1/g_m$ → 173 ps; $C_{gs4}$ (A–B) $1/g_m$ → 58 ps; $C_{db4}$ (A–ground) $2/g_m$ → 58 ps; $C_{gs2}$ (A–C) $2/g_m$ → 115 ps; $C_{gd2}$ (A–output) $2/g_m$ → 17 ps; $C_{gd1}$ (B–C) $2/g_m$ → 17 ps; C-node ($C_{db1} + C_{sb2}$) $1/g_m$ → 58 ps. $T_0 = 0.50$ ns → $\omega_p \approx 2.0\times10^9$ rad/s, $f \approx 321$ MHz.

$f_T = g_m/[2\pi(C_{gs} + C_{gd})] = 2.40$ GHz, so the estimated mirror bandwidth is ≈ $f_T/7.5$.

Expected simulation (linear model): −3 dB ≈ 494 MHz (one real pole ≈ 524 MHz plus a complex pair near 1.5 GHz); the zero-value estimate is conservative. Scaling with current ($g_m \propto \sqrt{I}$, capacitances fixed): $I_{\text{IN}} = 50\ \mu$A → estimate 227 MHz, simulation ≈ 349 MHz; $I_{\text{IN}} = 200\ \mu$A → estimate 453 MHz, simulation ≈ 698 MHz.

## Grading notes

Hand part: +2 needs $T_0 \approx 0.5$ ns (±10%), dominant pole ≈ 300–340 MHz, and $f_T \approx 2.4$ GHz with the comparison. A correct simulation shows a −3-dB frequency of roughly 0.45–0.55 GHz at 100 µA and bandwidth scaling ≈ $\sqrt{I_{\text{IN}}}$ (≈ ×0.7 at 50 µA, ×1.4 at 200 µA) if the capacitances are held fixed (a full device model changes them slightly). −2 (asserted as fact): bandwidth above $f_T$, bandwidth independent of $I_{\text{IN}}$, or a linear-in-current scaling claimed for square-law devices.
