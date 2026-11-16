# Golden Solution - G197

## Reference answer

$v_o/v_i = -65.8$; $T_0 \approx 172$ ns, so $\omega_{-3\text{dB}} \approx 5.8\times10^6$ rad/s and $f_{-3\text{dB}} \approx 0.92$ MHz.

- $g_m = 38.5$ mA/V, $r_\pi = 5.2\ \mathrm{k\Omega}$; $C_\pi + C_\mu = g_m/\omega_T = 10.2$ pF → $C_\pi = 10.0$ pF ($C_{je}$ is already included in this value).
- Gain: $-g_mR_L\,r_\pi/(R_S + r_\pi) = -192.3\times5.2/15.2 = -65.8$.
- $R_{\pi0} = R_S\|r_\pi = 3.42\ \mathrm{k\Omega}$ → $C_\pi R_{\pi0} = 34.2$ ns.
- $R_{\mu0} = R_{\pi0} + R_L + g_mR_LR_{\pi0} = 3.42 + 5 + 657.9 = 666\ \mathrm{k\Omega}$ → $C_\mu R_{\mu0} = 133.3$ ns.
- $R_{cs0} = R_L = 5\ \mathrm{k\Omega}$ → 5 ns.
- $T_0 = 172.5$ ns → $f_{-3\text{dB}} = 1/(2\pi T_0) = 0.92$ MHz (an exact analysis gives 0.93 MHz).

## Grading notes

+2: gain ≈ −65.8 (±3%) and $f_{-3\text{dB}}$ ≈ 0.9 MHz (0.85–1.0 MHz) with the three time constants identified ($C_\mu$ dominant). +1: one minor slip (e.g., $C_\pi$ taken as 10.2 pF, or $C_{cs}$ omitted giving ≈ 0.95 MHz), or the gain given as $-g_mR_L = -192$ with a correct bandwidth. 0: correct method with a numerical error giving a clearly wrong frequency, or only the gain correct. −2 (asserted as fact): Miller multiplication of $C_\mu$ omitted, $C_\pi$ computed as $C_{je}$ only or from $f_T$ incorrectly by orders of magnitude, or the gain taken as positive/non-inverting.
