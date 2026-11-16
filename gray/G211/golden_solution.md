# Golden Solution - G211

## Reference answer

$T_0 \approx 121$ ns → $f_{-3\text{dB}} \approx 1.3$ MHz (low-frequency gain −68.7).

- $C_{\pi1} = 2.49$ pF, $C_{\pi2} = 11.84$ pF, $r_{\pi1} = 52\ \mathrm{k\Omega}$, $r_{\pi2}\|R_B = 2.22\ \mathrm{k\Omega}$.
- $C_{\pi1}$: 14.1 kΩ → 35.2 ns.
- $C_{\mu1}$ (base to ground): $R_S\|R_i = 73.4\ \mathrm{k\Omega}$ → 29.4 ns.
- $C_{\pi2}$: 896 Ω → 10.6 ns.
- $C_{\mu2}$: $R_A + R_L + g_{m2}R_LR_A$ with $R_A = 896\ \Omega$ → 107 kΩ → 42.9 ns.
- $C_{cs2}$: 3 ns.
- $T_0 = 121.1$ ns → 1.31 MHz (exact analysis: ≈ 1.8 MHz, complex poles). The bleed resistor lowers the resistance at $Q_2$'s base, roughly doubling the bandwidth compared with the stage without it (≈ 0.74 MHz).

## Grading notes

+2: $f_{-3\text{dB}}$ ≈ 1.15–1.45 MHz from the zero-value sum (or a correctly derived exact value ≈ 1.8 MHz). +1: one time constant off, result within ±20%. 0: correct structure, one dominant resistance wrong by > 2×. −2 (asserted as fact): $C_{\mu1}$ Miller-multiplied, bleed resistor ignored, or a bandwidth below 0.5 MHz presented as the answer.
