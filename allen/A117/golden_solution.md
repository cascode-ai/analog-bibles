# Golden Solution - A117

## Reference answer

$V_{in} = 1.7$ V, $A_v \approx -5.3$ V/V, $R_{out} \approx 24$ kΩ. If all $g_{ds}$ are neglected, $A_v = -6.96$ V/V and $R_{out} = 1/g_{m2} = 31.6$ kΩ.

- M4 (diode) and M3 form a 1:1 mirror, so M3 supplies 100 µA to the output node. M1 sinks 110 µA, so the diode-connected M2 carries only 10 µA.
- $110\ \mu = \frac{110\ \mu \cdot 2}{2}(V_{in} - 0.7)^2$ gives $V_{in} = 1.7$ V. (λ is neglected in the dc bias, as usual; $V_{DD}$ is not given, and keeping λ would make $V_{in}$ depend on it.)
- $g_{m1} = \sqrt{2 \cdot 110\ \mu \cdot 2 \cdot 110\ \mu} = 220\ \mu$S and $g_{m2} = \sqrt{2 \cdot 50\ \mu \cdot 1 \cdot 10\ \mu} = 31.6\ \mu$S. $g_{ds1} = 0.04 \cdot 110\ \mu = 4.4\ \mu$S, $g_{ds2} = 0.05 \cdot 10\ \mu = 0.5\ \mu$S, $g_{ds3} = 0.05 \cdot 100\ \mu = 5\ \mu$S.
- Output node conductance: $g_{m2} + g_{ds1} + g_{ds2} + g_{ds3} = 41.5\ \mu$S, so $R_{out} = 24.1$ kΩ and $A_v = -220/41.5 = -5.30$.
- The current source M3 steals current from the diode M2, which lowers $g_{m2}$ and raises the gain above the plain active-load value of ≈ −2.1.

## Grading notes

+2: $V_{in}$ = 1.7 V, $A_v$ = −5.0 to −5.6 and $R_{out}$ = 23–25.5 kΩ (all $g_{ds}$ included), with the current split 110 = 100 (M3) + 10 (M2) µA. +1: the same analysis with $g_{ds}$ explicitly neglected (−6.96 V/V, 31.6 kΩ, the book's values), or one slip. 0: $V_{in}$ right but the gain built on a wrong current in M2. −2 (asserted as fact): M2 assumed to carry the full 110 µA or 100 µA (gain ≈ −2), M3 treated as a diode or ignored, or $R_{out}$ taken as a single $r_{ds}$. An answer that keeps λ in the dc bias with an openly assumed $V_{DD}$ (e.g. $V_{in}$ ≈ 1.63 V and $A_v$ ≈ −5.7 at $V_{DD}$ = 5 V) and says the values depend on that assumption has no critical error but does not give the requested bias: 0, or +1 if it also gives the λ-free $V_{in}$ = 1.7 V with the matching gain. Inventing $V_{DD}$ silently and using it as given is a critical claim.
