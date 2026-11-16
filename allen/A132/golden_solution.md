# Golden Solution - A132

## Reference answer

$A_v \approx -43.6$ V/V and $f_{-3\,\mathrm{dB}} \approx 283$ kHz.

- Derivation: with both devices saturated, the small-signal model at the output is $g_{m1}v_{in}$ and $g_{m2}v_{in}$ (both gates at $v_{in}$, both sources at ac ground) in parallel with $r_{ds1}$ and $r_{ds2}$. KCL: $(g_{m1} + g_{m2})v_{in} + (g_{ds1} + g_{ds2})v_{out} = 0$, so $v_{out}/v_{in} = -(g_{m1} + g_{m2})/(g_{ds1} + g_{ds2})$. Substituting $g_{mi} = \sqrt{2K'_i(W_i/L_i)I_D}$ and $g_{dsi} = \lambda_i I_D$ gives the stated form; the gain falls as $1/\sqrt{I_D}$.
- Numbers: $g_{m1} = \sqrt{2 \cdot 110\ \mu \cdot 5 \cdot 200\ \mu} = 469.0\ \mu$S, $g_{m2} = \sqrt{2 \cdot 50\ \mu \cdot 5 \cdot 200\ \mu} = 316.2\ \mu$S, $g_{ds1} + g_{ds2} = 0.09 \cdot 200\ \mu = 18\ \mu$S. $A_v = -785.2/18 = -43.6$.
- Output capacitance: $C_{gd1} + C_{gd2} + C_{bd1} + C_{bd2} + C_L = 10.11$ pF. $f_{-3\,\mathrm{dB}} = 18\ \mu/(2\pi \cdot 10.11\ \mathrm{pF}) = 283$ kHz ($R_{out} = 55.6$ kΩ). The RHP zero $(g_{m1}+g_{m2})/(C_{gd1}+C_{gd2})$ is at 12.5 GHz.

## Grading notes

Credit is split between the derivation (about one third) and the two numbers. +2: a correct KCL derivation with the substitutions, $A_v$ = −42.5 to −44.5, and $f_{-3\,\mathrm{dB}}$ = 280–287 kHz (using $C_L$ alone, 286 kHz, is fine). +1: the numbers right with the derivation only sketched, or a slip in one number. 0: derivation right but both numbers wrong, or the numbers right with no derivation. −2 (asserted as fact): only one transconductance used, $g_{m1} - g_{m2}$, $g_{ds}$ evaluated at a different current, or the bandwidth taken from $1/[(g_{m1}+g_{m2})^{-1}C_L]$.
