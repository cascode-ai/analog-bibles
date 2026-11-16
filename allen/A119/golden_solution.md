# Golden Solution - A119

## Reference answer

$A_v \approx -33.0$ V/V, $R_{out} = 222$ kΩ, $f_{-3\,\mathrm{dB}} \approx 0.70$ MHz.

- $g_{m1} = 148.3\ \mu$S. $g_{ds1} + g_{ds2} = (0.04 + 0.05) \cdot 50\ \mu = 4.5\ \mu$S, so $R_{out} = 222$ kΩ.
- $A_v = -g_{m1}/(g_{ds1} + g_{ds2}) = -148.3/4.5 = -33.0$.
- The gate of M2 is at ac ground, so $C_{gs2}$ does not load the output and $C_{gd2}$ goes from the output to ac ground. $C_{total} = C_{gd1} + C_{gd2} + C_{bd1} + C_{bd2} + C_L = 1028$ fF.
- $f_{-3\,\mathrm{dB}} = 4.5\ \mu/(2\pi \cdot 1.028\ \mathrm{pF}) = 0.697$ MHz. The RHP zero $g_{m1}/C_{gd1}$ is at 5.9 GHz.

## Grading notes

+2: $A_v$ = −32 to −34, $R_{out}$ = 222 kΩ (±3 %), $f_{-3\,\mathrm{dB}}$ = 0.68–0.71 MHz. +1: one quantity off by a slip, or $C_{gs2}$ wrongly added (still ≈ 0.69 MHz, minor). 0: gain and $R_{out}$ right but the frequency wrong. −2 (asserted as fact): $g_{m2}$ included in the output conductance (load treated as a diode), $R_{out} = r_{ds1}$ only, the gds computed with λ at the wrong current, or rad/s labelled as Hz.
