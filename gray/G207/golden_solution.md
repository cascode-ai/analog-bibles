# Golden Solution - G207

## Reference answer

$T_0 \approx 215$ ns → $f_{-3\text{dB}} \approx 0.74$ MHz (low-frequency gain −48.7).

- $\tau_F = 256$ ps; $C_{\pi1} = 2.10$ pF, $C_{\pi2} = 11.84$ pF; $r_{\pi1} = 260\ \mathrm{k\Omega}$, $r_{\pi2} = 2.6\ \mathrm{k\Omega}$.
- $C_{\pi1}$: $r_{\pi1}\|(R_S + r_{\pi2})/(1 + g_{m1}r_{\pi2}) = 42.8\ \mathrm{k\Omega}$ → 89.9 ns.
- $C_{\mu1}$ (base of $Q_1$ to ground, since the collector is at ac ground): $R_S\|R_i = 100\ \mathrm{k}\|522.6\ \mathrm{k} = 83.9\ \mathrm{k\Omega}$ → 33.6 ns. ($C_{cs1}$ is shorted.)
- $C_{\pi2}$: $1.50\ \mathrm{k\Omega}$ → 17.8 ns.
- $C_{\mu2}$: $R_A + R_L + g_{m2}R_LR_A$ with $R_A = 1.50\ \mathrm{k\Omega}$ → 178 kΩ → 71.2 ns.
- $C_{cs2}$: $R_L$ → 3 ns.
- $T_0 = 215.5$ ns → 0.74 MHz (exact analysis: ≈ 1.0 MHz, the poles being complex). Removing the Miller multiplication of $C_{\mu1}$ makes this stage ≈ 10× faster than the Darlington.

## Grading notes

+2: $f_{-3\text{dB}}$ ≈ 0.65–0.85 MHz from the zero-value sum (or a correctly argued exact value near 1 MHz), with $C_{\mu1}$ seen as grounded (not Miller-multiplied). +1: one time constant slightly off (result within ±20%). 0: correct structure but $C_{\pi1}$ or $C_{\mu2}$ resistance wrong by > 2×. −2 (asserted as fact): $C_{\mu1}$ Miller-multiplied as in a Darlington, giving ≈ 70 kHz, or a claim that the CC–CE stage is slower than the Darlington.
