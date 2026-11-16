# Golden Solution - G218

## Reference answer

$T_0 \approx 14.9$ ns → $f_{-3\text{dB}} \approx 10.7$ MHz (gain −8.22).

- $g_{m1} = 0.612$ mA/V ($1/g_{m1} = 1.63\ \mathrm{k\Omega}$), $g_{m2} = 2.74$ mA/V, $C_{gs} = 74.7$ fF.
- $C_{gs1}$ (gate–source of the unloaded follower): $1/g_{m1} = 1.63\ \mathrm{k\Omega}$ → 0.12 ns.
- $C_{gd1}$ (gate of $M_1$ to output, Miller): $R_A + R_L + G_mR_LR_A$ with $R_A = R_S$ and $G_m = g_{m2}$ (low-frequency transconductance from $M_1$'s gate to the output) → $100 + 3 + 821.6 = 925\ \mathrm{k\Omega}$ → 12.9 ns.
- $C_{sb1}$ and $C_{gs2}$ (node between the transistors to ground): $1/g_{m1} = 1.63\ \mathrm{k\Omega}$ → 0.29 ns and 0.12 ns.
- $C_{gd2}$: ≈ 15 kΩ → 0.21 ns. $C_{db1}$, $C_{db2}$: $R_L$ → 0.6 ns each.
- $T_0 = 14.9$ ns → 10.7 MHz (exact: 11.2 MHz). The Miller-multiplied $C_{gd1}$ with the large $R_S$ dominates.

## Grading notes

+2: $f_{-3\text{dB}}$ ≈ 9.5–12 MHz with $C_{gd1}$ (≈ 0.92 MΩ) dominant. +1: a small time constant missing (result within ±15%). 0: method right but $C_{gd1}$ resistance computed without Miller gain, giving > 50 MHz. −2 (asserted as fact): bipolar-like current gain assumed, $C_{gs1}$ given a resistance of order $R_S$ and made dominant, or a result above 50 MHz presented.
