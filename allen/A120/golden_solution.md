# Golden Solution - A120

## Reference answer

$A_v \approx -48.7$ V/V, $R_{out} = 222$ kΩ, $f_{-3\,\mathrm{dB}} \approx 0.70$ MHz.

- $g_{m1} = 148.3\ \mu$S and $g_{m2} = 70.7\ \mu$S. Both are driven by $v_{in}$, so the transconductances add: 219.0 µS.
- $A_v = -(g_{m1} + g_{m2})/(g_{ds1} + g_{ds2}) = -219.0/4.5 = -48.7$, and $R_{out} = 1/4.5\ \mu\mathrm{S} = 222$ kΩ.
- $C_{gd1}$ and $C_{gd2}$ both connect input to output (Miller capacitances, $C_M = 8$ fF). $C_{gs2}$ is between the input and $V_{DD}$, driven by the source, so it does not load the output. $C_{total} = C_{gd1} + C_{gd2} + C_{bd1} + C_{bd2} + C_L = 1028$ fF.
- $f_{-3\,\mathrm{dB}} = 4.5\ \mu/(2\pi \cdot 1.028\ \mathrm{pF}) = 0.697$ MHz. RHP zero $(g_{m1} + g_{m2})/(C_{gd1} + C_{gd2})$ at 4.4 GHz.

## Grading notes

+2: $A_v$ = −47.5 to −50, $R_{out}$ = 222 kΩ, $f_{-3\,\mathrm{dB}}$ = 0.68–0.71 MHz. +1: one quantity off by a slip, or $C_{gs2}$ added at the output (minor change). 0: gain right but frequency or $R_{out}$ wrong. −2 (asserted as fact): only $g_{m1}$ used (gain ≈ −33, push–pull action missed), $g_{m1} - g_{m2}$ used, $R_{out}$ given as $1/(g_{m1} + g_{m2})$, or rad/s labelled as Hz.
