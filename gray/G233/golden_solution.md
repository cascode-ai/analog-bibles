# Golden Solution - G233

## Reference answer

CE: $T_0 = 104$ ns → $f_{-3\text{dB}} \approx 1.5$ MHz. Cascode: $T_0 = 26.2$ ns → $f_{-3\text{dB}} \approx 6.1$ MHz, ≈ 4 times wider.

- $g_m = 38.5$ mA/V, $r_\pi = 2.6\ \mathrm{k\Omega}$, $C_\pi = g_m/\omega_T - C_\mu = 11.84$ pF; $R_{\pi0} = R_S\|r_\pi = 1.71\ \mathrm{k\Omega}$.
- CE: $C_\pi$: 1.71 kΩ → 20.3 ns; $C_\mu$: $1.71 + 3 + 0.0385(3\ \mathrm{k})(1.71\ \mathrm{k}) = 202\ \mathrm{k\Omega}$ → 80.8 ns; $C_{cs}$: 3 kΩ → 3 ns; $T_0 = 104.1$ ns → 1.53 MHz (exact: 1.54 MHz).
- Cascode: $Q_1$'s load is the CB input resistance $r_\pi/(\beta+1) = 25.7\ \Omega$. $C_{\pi1}$: 20.3 ns; $C_{\mu1}$: $1.71\ \mathrm{k} + 25.7 + g_m(25.7)(1.71\ \mathrm{k}) = 3.43\ \mathrm{k\Omega}$ → 1.37 ns; $C_{cs1}$: 25.7 Ω → 0.03 ns; $C_{\pi2}$: $r_\pi\|1/g_m = 25.7\ \Omega$ → 0.30 ns; $C_{\mu2}$ and $C_{cs2}$ (output to ac ground): $R_L$ → 1.2 ns and 3 ns; $T_0 = 26.2$ ns → 6.08 MHz (exact: 7.1 MHz).
- Here $C_{\pi1}$ with $R_S\|r_\pi$ limits the cascode, so the improvement (≈ 4×) is a little smaller than in the MOS case.

## Grading notes

+2: CE ≈ 1.5 MHz (1.4–1.65) and cascode ≈ 6.1 MHz (5.5–7.2), with the Miller term of $C_{\mu1}$ removed in the cascode and $C_{\pi1}$ identified as the new limit. +1: both values within ±20% but no comparison/explanation, or one minor time constant omitted. 0: one circuit right. −2 (asserted as fact): cascode claimed slower, or $C_{\mu1}$ in the cascode Miller-multiplied by the full gain.
