# Golden Solution - G215

## Reference answer

$T_0 \approx 0.91\ \mu$s → $f_{-3\text{dB}} \approx 175$ kHz.

- $C_{\pi1}$: $r_{\pi1} = 260\ \mathrm{k\Omega}$ → 546 ns (now the dominant term).
- $C_{\mu1}$ (base to ground): $R_i = 522.6\ \mathrm{k\Omega}$ → 209 ns.
- $C_{\pi2}$: $r_{\pi2} = 2.6\ \mathrm{k\Omega}$ → 30.8 ns; $C_{\mu2}$: 306 kΩ → 122 ns; $C_{cs2}$: 3 ns.
- $T_0 = 910.7$ ns → 175 kHz (exact: ≈ 199 kHz).

## Grading notes

+2: $f_{-3\text{dB}}$ ≈ 160–200 kHz. +1: one time constant off (within ±20%). 0: method right but $C_{\mu1}$ Miller-multiplied by mistake in a partial way, result off by > 2×. −2 (asserted as fact): a finite source resistance assumed, $C_{\mu1}$ fully Miller-multiplied as in a Darlington (≈ 12 kHz), or a bandwidth above 1 MHz claimed.
