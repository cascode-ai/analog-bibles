# Golden Solution - G219

## Reference answer

$T_0 \approx 2.8$ ns → $f_{-3\text{dB}} \approx 57$ MHz (gain −8.22).

- $C_{gs1}$: $1/g_{m1} = 1.63\ \mathrm{k\Omega}$ → 0.12 ns.
- $C_{gd1}$ (gate to ground, drain at ac ground): $R_S = 100\ \mathrm{k\Omega}$ → 1.40 ns.
- $C_{sb1}$, $C_{gs2}$: 1.63 kΩ → 0.29 ns and 0.12 ns.
- $C_{gd2}$: $R_A + R_L + g_{m2}R_LR_A$ with $R_A = 1/g_{m1} = 1.63\ \mathrm{k\Omega}$ → 18.0 kΩ → 0.25 ns.
- $C_{db2}$: $R_L$ → 0.6 ns. ($C_{db1}$ and $C_{sb2}$ are shorted.)
- $T_0 = 2.79$ ns → 57 MHz (exact: ≈ 83 MHz, complex poles).

## Grading notes

+2: $f_{-3\text{dB}}$ ≈ 50–65 MHz from the zero-value sum (or a derived exact value near 80 MHz). +1: one time constant off (within ±20%). 0: correct structure but $C_{gd1}$ Miller-multiplied by mistake or $C_{sb1}$ omitted with a larger error. −2 (asserted as fact): the Darlington-type Miller effect on $C_{gd1}$ (≈ 11 MHz), or a bipolar-style analysis with $r_\pi$.
