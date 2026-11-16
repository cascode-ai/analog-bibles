# Golden Solution - G206

## Reference answer

$T_0 \approx 2.19\ \mu$s → $f_{-3\text{dB}} \approx 73$ kHz (low-frequency gain −49.1).

- At 1 mA: $C_\pi + C_\mu = g_m/\omega_T = 12.24$ pF → $C_{\pi2} = 11.84$ pF, $\tau_F = (11.84 - 2)\ \mathrm{pF}/38.5\ \mathrm{mA/V} = 256$ ps. At 10 µA: $C_{\pi1} = 256\ \mathrm{ps}\times0.385\ \mathrm{mA/V} + 2\ \mathrm{pF} = 2.10$ pF. $r_{\pi1} = 260\ \mathrm{k\Omega}$, $r_{\pi2} = 2.6\ \mathrm{k\Omega}$.
- $C_{\pi1}$: $R = r_{\pi1}\|\dfrac{R_S + r_{\pi2}}{1 + g_{m1}r_{\pi2}} = 260\ \mathrm{k}\|51.3\ \mathrm{k} = 42.8\ \mathrm{k\Omega}$ → 89.9 ns.
- $C_{\mu1}$ (base of $Q_1$ to output): $R = R_A + R_L + G_mR_LR_A$ with $R_A = R_S\|R_i = 100\ \mathrm{k}\|522.6\ \mathrm{k} = 83.9\ \mathrm{k\Omega}$ and $G_m = \beta(\beta+2)/R_i = 19.5$ mA/V → $5.0$ MΩ → 2.00 µs.
- $C_{cs1}$, $C_{cs2}$ (output): $R_L$ → 3 ns each.
- $C_{\pi2}$: $r_{\pi2}\|$(resistance into $Q_1$'s emitter $(R_S + r_{\pi1})/(\beta+1) = 3.56\ \mathrm{k\Omega}$) $= 1.50\ \mathrm{k\Omega}$ → 17.8 ns.
- $C_{\mu2}$ (base of $Q_2$ to output): ≈ 177 kΩ → 70.7 ns.
- $T_0 = 89.9 + 2000.7 + 3 + 17.8 + 70.7 + 3 = 2185$ ns → $f_{-3\text{dB}} = 1/(2\pi T_0) = 72.8$ kHz (exact analysis: 73.3 kHz). $C_{\mu1}$, Miller-multiplied by the full Darlington gain, dominates.

## Grading notes

+2: $f_{-3\text{dB}}$ ≈ 65–80 kHz with $C_{\mu1}$ identified as dominant ($R_{\mu1} \approx 5$ MΩ). +1: minor slip in one of the small time constants or in $C_{\pi1}$ (e.g., $C_{\pi1}$ taken as 2 pF), result within ±15%. 0: method right but $C_{\mu1}$'s resistance computed with the wrong gain (e.g., only $Q_1$'s transconductance), giving a result off by > 2×. −2 (asserted as fact): $C_{\pi1}$ taken equal to $C_{\pi2}$ (11.8 pF) and dominating, $C_{\mu1}$ treated as connected to ground or its Miller multiplication omitted, or a bandwidth in the MHz range that results from such a modeling error. If every open-circuit resistance and capacitance is correct and only a unit or arithmetic slip in forming or summing the time constants moves the result (e.g., 5 MΩ × 0.4 pF written as 2 ns, giving ≈ 1.4 MHz), score it as a computational slip: at most 0.
