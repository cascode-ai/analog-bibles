# Golden Solution - A218

## Reference answer

Zero: $z = -g_{m1}/C_1$ ≈ −9.4×10¹⁰ rad/s (−14.9 GHz). Pole: $p = -\dfrac{g_{m1}+g_{mbs1}+g_{m2}+g_{ds1}+g_{ds2}}{C_1+C_2}$ ≈ −9.2×10⁸ rad/s (−147 MHz).

- $g_{m1} = g_{m2} = \sqrt{2\cdot110\cdot10\cdot100}$ µS = 469 µS; $g_{mbs1} = 469\cdot0.4/(2\sqrt{5.7})$ µS = 39.3 µS; $g_{ds1} = g_{ds2}$ = 4 µS.
- $C_1 = C_{gs1}$ = 5 fF; $C_2$ = 30 + 5 + 30 + 1000 fF = 1.065 pF.
- Transfer function: $\dfrac{V_{out}}{V_{in}} = \dfrac{g_{m1}+sC_1}{g_{m1}+g_{mbs1}+g_{m2}+g_{ds1}+g_{ds2}+s(C_1+C_2)}$.
- $z = -469\ \mu\mathrm{S}/5\ \mathrm{fF}$ = −9.38×10¹⁰ rad/s → −14.9 GHz (left half plane).
- $p = -986\ \mu\mathrm{S}/1.07\ \mathrm{pF}$ = −9.21×10⁸ rad/s → −146.6 MHz (−140.7 MHz if $g_{mbs1}$ is omitted). The diode load's $g_{m2}$ roughly doubles the pole frequency relative to the current-sink version.
- The stated $V_{SB1}$ = 5 V is used as given. In the circuit as drawn, M1's source sits at $V_{SS} + V_{GS2}$, so its actual $V_{SB1} = V_{GS2} \approx 1.13$ V; with that value $g_{mbs1} \approx 69$ µS and the pole is ≈ −9.5×10⁸ rad/s (−151 MHz). Either is correct.

## Grading notes

+2: zero ≈ −14.9 GHz (or −9.4×10¹⁰ rad/s) and pole ≈ −147 MHz (144–152 MHz, rad/s equivalents accepted) including $g_{m2}$ and $g_{mbs1}$; $g_{mbs1}$ may be evaluated at the given $V_{SB1}$ = 5 V or at the $V_{SB1} = V_{GS2}$ ≈ 1.13 V implied by the circuit (≈ −151 MHz). +1: pole without $g_{mbs1}$ (≈ −141 MHz) or a rad/s–Hz confusion in one value. 0: one root right. −2 (asserted as fact): $g_{m2}$ omitted for the diode load (pole ≈ −77 MHz), a right-half-plane zero, or the pole set by the input capacitance alone.
