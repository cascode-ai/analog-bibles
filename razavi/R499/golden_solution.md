# Golden Solution - R499

## Reference answer

Two valid readings, depending on the RHP zero $g_{m1}/C_C$:
- With $C_C$ as a plain capacitor (as posed), the ratio of the single-pole GBW to the zero is fixed, $\mathrm{GBW}/z \approx g_{m3}g_{m2}r_{O2}/g_{m1}$ ≈ 0.44 for any $C_C$, so the zero always sits only ≈ 2–2.3× above the crossover (at the solution the true $\omega_u/z$ ≈ 0.47, $\omega_u \approx 3.0\times10^7$ rad/s) and adds ≈ 24–26° of lag; PM = 60° then needs $C_C$ ≈ 80 pF (80.5 pF with an ideal gate drive, 82 pF with the replica load at Y; 60 pF gives ≈ 58°). Loop-gain poles at $C_C$ ≈ 80 pF: ≈ 2.4×10² rad/s (≈ 38 Hz, input node), ≈ 3.75×10⁸ rad/s (≈ 60 MHz, output node), ≈ 3×10¹⁰ rad/s (≈ 4.7 GHz, drain of $M_1$); RHP zero ≈ 6.5×10⁷ rad/s.
- With the zero neglected or cancelled (e.g. a series $R_z$ ≈ $1/g_{m1}$), the two-pole estimate gives $C_C$ ≈ 9 pF (full model with the zero removed: 9.2 pF), with poles ≈ 2.1×10³ rad/s (≈ 330 Hz, input node), ≈ 3.75×10⁸ rad/s (output node), ≈ 3×10¹⁰ rad/s (drain of $M_1$); a plain 9-pF capacitor gives only ≈ 37° of actual PM, and its zero sits at ≈ 5.7×10⁸ rad/s.

Derivation:
- GBW ≈ $g_{m3}g_{m2}r_{O2}/(C_C + C_{GD1})$ = 2.27 mS/$(C_C + C_{GD1})$ ($g_{m3}$ = 0.164 mS, $g_{m2}r_{O2}$ = 13.9).
- First nondominant pole: output node, $1/[r_{O2}(C_L + 25\ \mathrm{fF})]$ ≈ 3.8×10⁸ rad/s (3.75×10⁸ in the full model). The drain of $M_1$ is pushed to ≈ 3×10¹⁰ rad/s by pole splitting.
- PM = 60° (two-pole): GBW = $\tfrac23\omega_{p2}$ ≈ 2.5×10⁸ rad/s, so $C_C + C_{GD1}$ ≈ 9.1 pF and $C_C$ ≈ 9 pF. Dominant pole $1/[r_{O3}g_{m1}r_{O1}(C_C + C_{GD1})]$ ≈ 1/(1 MΩ × 51.8 × 9.02 pF) ≈ 2.1×10³ rad/s.
- The 0.5-pF load lowers the output pole about 15×, so a 15× larger $C_C$ (and 15× lower bandwidth) is needed than without the load. With the RHP zero left in place (≈ 24° of extra lag), 60° would need ≈ 80 pF: impractical without a series resistor.

## Grading notes

+2: output node identified as the first nondominant pole (≈ 3.7×10⁸ rad/s), GBW ≈ $g_{m3}g_{m2}r_{O2}/C_C$, $C_C$ = 7–11 pF (RHP zero stated as neglected or to be cancelled), and poles after compensation consistent with it. (The book's part (c) adds the series resistor to this 9-pF design, so the zero-neglected design is the intended answer.) Also +2: a correct zero-included treatment giving ≈ 75–90 pF with the poles. +1: $C_C$ right but the poles after compensation missing or rough; or ≈ 9 pF with the RHP zero never mentioned; or a zero-included treatment that only calls the plain-capacitor design impractical without giving a value. 0: right method with a slip putting $C_C$ outside 6–12 pF. -2 (asserted as fact): GBW taken as $g_{m3}/C_C$ or $g_{m1}/C_C$, the output pole computed with $1/g_{m2}$ ($M_2$ as follower), or $C_C$ below 2 pF claimed sufficient. Either set of poles is acceptable if it matches the $C_C$ the answer chose; closed-loop poles are also acceptable if clearly labelled as such.
