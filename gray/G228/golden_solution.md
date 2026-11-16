# Golden Solution - G228

## Reference answer

Common source: $T_0 = 6.59$ ns → $f_{-3\text{dB}} \approx 24$ MHz. Cascode: $T_0 = 1.35$ ns → $f_{-3\text{dB}} \approx 118$ MHz, about 4.9 times wider for the same −38.7 gain.

- $g_m = 1.94$ mA/V ($1/g_m = 516\ \Omega$), $C_{gs} = 74.7$ fF.
- CS: $C_{gs}$: $R_S$ → 0.747 ns; $C_{gd}$: $R_S + R_L + g_mR_LR_S = 10 + 20 + 387.3 = 417\ \mathrm{k\Omega}$ → 5.84 ns; $T_0 = 6.59$ ns → 24.2 MHz (exact: 24.3 MHz).
- Cascode: $C_{gs1}$: $R_S$ → 0.747 ns; $C_{gd1}$: load of $M_1$ is $1/g_{m2} = 516\ \Omega$, so $R = 10\ \mathrm{k} + 516 + g_{m1}(516)(10\ \mathrm{k}) = 20.5\ \mathrm{k\Omega}$ → 0.287 ns; $C_{gs2}$: $1/g_{m2}$ → 0.039 ns; $C_{gd2}$ (drain to ac ground): $R_L$ → 0.28 ns; $T_0 = 1.35$ ns → 117.7 MHz (exact: 144 MHz).
- The cascode removes the Miller multiplication of $C_{gd1}$ (gain from gate to drain of $M_1$ is ≈ −1 instead of −38.7).

## Grading notes

+2: CS ≈ 24 MHz (22–26) and cascode ≈ 118 MHz (105–130; an exact value ≈ 144 MHz is also correct if derived), with the conclusion that the cascode is ≈ 5 times faster because the Miller effect on $C_{gd1}$ is removed. +1: both values right within ±20% but the explanation missing, or one small time constant omitted. 0: only one circuit right. −2 (asserted as fact): the cascode claimed slower or equal, $C_{gd1}$ in the cascode Miller-multiplied by the full gain, or a CS bandwidth without Miller effect (> 100 MHz) presented.
