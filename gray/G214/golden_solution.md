# Golden Solution - G214

## Reference answer

$T_0 \approx 13.2\ \mu$s → $f_{-3\text{dB}} \approx 12$ kHz.

- $C_{\pi1} = 2.10$ pF, $C_{\pi2} = 11.84$ pF, $r_{\pi1} = 260\ \mathrm{k\Omega}$, $r_{\pi2} = 2.6\ \mathrm{k\Omega}$, $R_i = 522.6\ \mathrm{k\Omega}$.
- $C_{\pi1}$: with the base open, $R = r_{\pi1} = 260\ \mathrm{k\Omega}$ → 546 ns.
- $C_{\mu1}$: $R_A + R_L + G_mR_LR_A$ with $R_A = R_i = 522.6\ \mathrm{k\Omega}$, $G_m = 19.5$ mA/V → 31.1 MΩ → 12.45 µs.
- $C_{\pi2}$: $r_{\pi2}$ (the emitter of $Q_1$ looks like an open circuit when its base is open) → 30.8 ns.
- $C_{\mu2}$: $r_{\pi2} + R_L + g_{m2}R_Lr_{\pi2} = 306\ \mathrm{k\Omega}$ → 122 ns.
- $C_{cs1}$, $C_{cs2}$: 3 ns each.
- $T_0 = 13.15\ \mu$s → 12.1 kHz (exact: 12.1 kHz).

## Grading notes

+2: $f_{-3\text{dB}}$ ≈ 11–13.5 kHz with $C_{\mu1}$ dominant (≈ 31 MΩ). +1: a small time constant missing or slightly off. 0: method right, dominant resistance wrong by > 30%. −2 (asserted as fact): a finite source resistance assumed (e.g., 100 kΩ) and the voltage-drive result (≈ 73 kHz) presented, or $C_{\mu1}$ not Miller-multiplied.
