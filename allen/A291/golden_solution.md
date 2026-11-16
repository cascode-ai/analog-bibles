# Golden Solution - A291

## Reference answer

$|v_{o1}/v_{in}| \approx 2.6\times10^3$ (2621 V/V; in phase with $v_{in}$ for the polarity drawn).

- 50 µA per side. $g_{m1} = \sqrt{2(110\,\mu)(10)(50\,\mu)} = 331.7\ \mu$S; $g_{mC2} = \sqrt{2(110\,\mu)(1)(50\,\mu)} = 104.9\ \mu$S; $g_{mC4} = \sqrt{2(50\,\mu)(1)(50\,\mu)} = 70.7\ \mu$S; $r_{dsN} = 0.5$ MΩ, $r_{dsP} = 0.4$ MΩ.
- $R_{out} = (g_{mC2}r_{dsC2}r_{ds2})\,\|\,(g_{mC4}r_{dsC4}r_{ds4}) = 26.2\ \mathrm{M\Omega}\,\|\,11.3\ \mathrm{M\Omega} = 7.90$ MΩ.
- $v_{o1}/v_{in} = g_{m1}R_{out} = 331.7\,\mu\times7.90$ M ≈ 2621.

## Grading notes

+2: magnitude 2.5–2.85×10³ from $g_{m1}R_{out}$ with both cascode resistances (sign either way if the convention is stated or the magnitude is given); keeping the $r_{ds}$ additive terms ($R_{down}$ = 27.2 MΩ, $R_{up}$ = 12.1 MΩ, ≈ 2.78×10³) or a full nodal solution (≈ 2.73×10³) is fine. +1: correct method with one slip (e.g. a wrong $g_m$ of one device), or a correct value obtained with a misread of the mirror wiring (the gates of M3/M4 are tied to the drain of MC3, not to the drain of M3). 0: right structure, value off by a computational error. −2 (asserted as fact): output resistance taken as a single $r_{ds}$ or as only one cascode branch, the W/L of M1 used for the cascode devices, $g_m = \sqrt{K'(W/L)I_D}$ (missing factor 2) used for all devices (gain ≈ 1.3×10³), or a gain of order 100 or 10⁵.
