# Golden Solution - A134

## Reference answer

$A_v \approx -43.6$ V/V, $R_{out} \approx 55.6$ kΩ, $f_{-3\,\mathrm{dB}} \approx 284$ kHz.

- $g_{m1} = \sqrt{2 \cdot 110\ \mu \cdot 5 \cdot 200\ \mu} = 469.0\ \mu$S, $g_{m2} = \sqrt{2 \cdot 50\ \mu \cdot 5 \cdot 200\ \mu} = 316.2\ \mu$S, $g_{ds1} + g_{ds2} = (0.04 + 0.05) \cdot 200\ \mu = 18\ \mu$S.
- $A_v = -(g_{m1} + g_{m2})/(g_{ds1} + g_{ds2}) = -785.2/18 = -43.6$ and $R_{out} = 1/18\ \mu\mathrm{S} = 55.6$ kΩ.
- $C_{out} = C_{gd1} + C_{gd2} + C_{bd1} + C_{bd2} + C_L = 10.07$ pF, so $f_{-3\,\mathrm{dB}} = 18\ \mu/(2\pi \cdot 10.07\ \mathrm{pF}) = 284$ kHz (286.5 kHz with $C_L$ alone).

## Grading notes

+2: $A_v$ = −42.5 to −44.5, $R_{out}$ = 54–57 kΩ, $f_{-3\,\mathrm{dB}}$ = 280–290 kHz. +1: one quantity off by a slip. 0: two of three wrong. −2 (asserted as fact): only $g_{m1}$ (or only $g_{m2}$) used, $R_{out} = 1/(g_{m1}+g_{m2})$, the $V_{SS}$ supply taken to change the small-signal result, or rad/s reported as Hz.
