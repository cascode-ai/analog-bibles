# Golden Solution - A118

## Reference answer

$A_v \approx -1.97$ V/V (−2.10 if $g_{ds}$ is neglected), $R_{out} \approx 13.3$ kΩ (14.1 kΩ $= 1/g_{m2}$), $f_{-3\,\mathrm{dB}} \approx 11.6$ MHz (10.9 MHz with $g_{m2}$ only).

- $g_{m1} = \sqrt{2 \cdot 110\ \mu \cdot 2 \cdot 50\ \mu} = 148.3\ \mu$S, $g_{m2} = 70.7\ \mu$S, $g_{ds1} = 2\ \mu$S, $g_{ds2} = 2.5\ \mu$S.
- $A_v = -g_{m1}/(g_{m2} + g_{ds1} + g_{ds2}) = -148.3/75.2 = -1.97$, and $R_{out} = 1/75.2\ \mu\mathrm{S} = 13.3$ kΩ.
- Capacitances: the gate and drain of M2 are both at the output, so $C_{gd2}$ is shorted out and $C_{gs2}$ goes from the output to $V_{DD}$ (ac ground). $C_{out} = C_{bd1} + C_{bd2} + C_{gs2} + C_L = 1025$ fF and $C_M = C_{gd1} = 4$ fF.
- $f_{-3\,\mathrm{dB}} = (g_{m2} + g_{ds1} + g_{ds2})/[2\pi(C_{out} + C_M)] = 75.2\ \mu/(2\pi \cdot 1.029\ \mathrm{pF}) = 11.6$ MHz. The RHP zero $g_{m1}/C_{gd1}$ is at 5.9 GHz.

## Grading notes

+2: $A_v$ between −1.95 and −2.10, $R_{out}$ = 13–14.2 kΩ, $f_{-3\,\mathrm{dB}}$ = 10.8–11.8 MHz (with or without $g_{ds}$). +1: one quantity off by a slip, or $C_{gd2}$ added to the output capacitance (changes the result by < 0.5 %, fine). 0: gain and $R_{out}$ right but the frequency wrong by a wrong capacitance set. −2 (asserted as fact): the diode load treated as a current source (gain ≈ −33, $f_{-3\,\mathrm{dB}} \approx 0.7$ MHz), $C_{gd1}$ Miller-multiplied by the gain at the output, or the answer given in rad/s labelled as Hz.
