# Golden Solution - G239

## Reference answer

$i_o/i_i \approx 3.90$; $T_0 \approx 1.15$ ns → $f_{-3\text{dB}} \approx 139$ MHz; $t_r \approx 2.5$ ns.

- $g_{m1} = 38.5$ mA/V, $g_{m2} = 154$ mA/V; $r_{\pi1} = 5.2\ \mathrm{k\Omega}$, $r_{\pi2} = 1.3\ \mathrm{k\Omega}$.
- Gain: $i_o/i_i = g_{m2}/(g_{m1} + 1/r_{\pi1} + 1/r_{\pi2}) = 153.8/(38.46 + 0.19 + 0.77) = 3.90$ (base currents reduce it from 4).
- $C_{\pi1} = \tau_Fg_{m1} + C_{je1} = 7.69 + 1 = 8.69$ pF; $C_{\pi2} = 30.8 + 4 = 34.8$ pF.
- Node resistance $1/g_{m1}\|r_{\pi1}\|r_{\pi2} = 25.4\ \Omega$; node capacitance $C_{\pi1} + C_{cs1} + C_{\pi2} + C_{\mu2} = 8.69 + 1 + 34.8 + 0.8 = 45.3$ pF ($C_{\mu1}$ shorted by the diode connection; $C_{cs2}$ at the grounded output).
- $T_0 = 1.15$ ns → 139 MHz; $t_r = 2.2T_0 = 2.53$ ns. The bipolar version is ≈ 6 times slower than the MOS version because of the large diffusion capacitance $\tau_Fg_m$.

## Grading notes

+2: gain ≈ 3.9 (4 accepted if base currents are explicitly neglected), $f_{-3\text{dB}}$ ≈ 125–150 MHz, and $t_r$ ≈ 2.3–2.8 ns. +1: one capacitance ($C_{cs1}$ or $C_{\mu2}$) omitted or $C_{je}$ omitted from $C_\pi$, result within ±15%. 0: $C_\pi$ computed incorrectly by a large factor but method right. −2 (asserted as fact): gain β-related (hundreds), $C_\pi$ taken as $C_{je}$ only and the GHz-range result presented, or the output node taken as dominant.
