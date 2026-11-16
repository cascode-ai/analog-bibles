# Golden Solution - G201

## Reference answer

$v_o/v_i = -9.68$; $T_0 = 2.31$ ns, $\omega_{-3\text{dB}} = 4.3\times10^8$ rad/s, $f_{-3\text{dB}} \approx 69$ MHz.

- $g_m = 1.94$ mA/V, $C_{gs} = 74.7$ fF; gain $-g_mR_L = -9.68$.
- $R_{gs0} = R_S = 10\ \mathrm{k\Omega}$ → $C_{gs}R_{gs0} = 0.747$ ns.
- $R_{gd0} = R_S + R_L + g_mR_LR_S = 10 + 5 + 96.8 = 111.8\ \mathrm{k\Omega}$ → $C_{gd}R_{gd0} = 1.565$ ns.
- $T_0 = 2.31$ ns → $f_{-3\text{dB}} = 68.8$ MHz (exact two-pole response: 69.5 MHz). Compared with a bipolar stage at twice the current, the MOS stage has much lower gain but much higher bandwidth.

## Grading notes

+2: gain −9.7 (±3%) and $f_{-3\text{dB}}$ 65–73 MHz with $R_{gd0} \approx 112$ kΩ. +1: one minor slip (e.g., $C_{gs}$ including an overlap term, giving ≈ 61 MHz, stated). 0: right gain, bandwidth from a wrong $R_{gd0}$ (e.g., missing the $R_L$ or $R_S$ term) within 2×. −2 (asserted as fact): $C_{gd}$ not Miller-multiplied (≈ 120 MHz or more), $R_{gs0}$ taken as $1/g_m$, or a gain off by a formula error.
