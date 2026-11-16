# Golden Solution - A219

## Reference answer

Zero: $z = -g_{m1}/C_{gs1}$ ≈ −9.38×10¹⁰ rad/s (−14.9 GHz). Pole: $p = -\dfrac{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}}{C_1+C_2}$ ≈ −4.8×10⁸ rad/s (−76.8 MHz).

- $g_{m1}$ = 469 µS, $g_{mbs1} = 469\cdot0.4/(2\sqrt{5.7})$ µS = 39.3 µS, $g_{ds1} = g_{ds2}$ = 4 µS.
- $C_1$ = 5 fF, $C_2$ = 30 + 5 + 30 + 1000 fF = 1.065 pF.
- $\dfrac{V_{out}}{V_{in}} = \dfrac{g_{m1}+sC_1}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}+s(C_1+C_2)}$ ($g_{m2}$ = 0 because M2's gate is at ac ground).
- $z$ = −9.38×10¹⁰ rad/s → −14.9 GHz; $p = -516\ \mu\mathrm{S}/1.07\ \mathrm{pF}$ = −4.83×10⁸ rad/s → −76.8 MHz (−71.0 MHz if $g_{mbs1}$ is omitted).

## Grading notes

+2: zero ≈ −14.9 GHz and pole ≈ −77 MHz (73–80 MHz; rad/s equivalents accepted) with $g_{mbs1}$ included. +1: pole without $g_{mbs1}$ (≈ −71 MHz) or one rad/s–Hz confusion. 0: one root right. −2 (asserted as fact): $g_{m2}$ of the current sink included as if diode-connected (pole ≈ −147 MHz), a right-half-plane zero, or a dominant pole at the input.
