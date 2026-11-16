# Golden Solution - A091

## Reference answer

$i_{out}/i_{in} \approx 0.99$ (≈ 1), $R_{in} \approx 2.98$ kΩ, $R_{out} = 250$ kΩ, $f_{-3dB} \approx 97$ MHz.

- $g_m = \sqrt{2\times110\ \mu\times5\times100\ \mu} = 332\ \mu\mathrm{A/V}$, $g_{ds} = \lambda I = 4\ \mu\mathrm{A/V}$ for both devices.
- Gain: $i_{out}/i_{in} = g_{m2}/(g_{m1} + g_{ds1}) = 332/336 = 0.988$.
- $R_{in} = 1/(g_{m1} + g_{ds1}) = 2.98$ kΩ (≈ $1/g_m$ = 3.0 kΩ).
- $R_{out} = r_{ds2} = 1/(\lambda I) = 250$ kΩ.
- Pole at the gate node: with the output at ac ground, the capacitance there is $C_{gs1} + C_{gs2} + C_{bd1} + C_{gd2} = 200 + 200 + 100 + 50 = 550$ fF ($C_{gd1}$ is shorted by the diode connection, $C_{bd2}$ sits at the grounded output). $\omega_{-3dB} = (g_{m1} + g_{ds1})/550\ \mathrm{fF} = 6.1\times10^8$ rad/s, $f_{-3dB} = 97$ MHz. (The feedforward zero through $C_{gd2}$ is at $g_{m2}/C_{gd2}$ ≈ 1 GHz.)

## Grading notes

Four quantities, equal weight. +2: gain ≈ 1 (0.98–1.0), $R_{in}$ ≈ 3.0 kΩ, $R_{out}$ = 250 kΩ, $f_{-3dB}$ = 90–105 MHz with the 550-fF node capacitance. +1: three right, or $C_{bd1}$ omitted (≈ 119 MHz) with the rest right. 0: two right. −2 (asserted as fact): gain of 2 or 0.5, $R_{out} = r_{ds1}\|r_{ds2}$, a Miller-multiplied $C_{gd2}$ although the output is shorted, or the frequency given in rad/s as if it were Hz.
