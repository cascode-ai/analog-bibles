# Golden Solution - G415

## Reference answer

$a_{cmc} \approx +66$ (≈ $+g_{m5h}(r_{o6}\|r_{o7}) = +66.7$).

- Half of $M_5$: $g_{m5h} = g_{m5}/2 = (2 \times 200\ \mu\text{A}/0.2\ \text{V})/2 = 1$ mA/V, $r_{o5h} = 100$ kΩ.
- In the CM half-circuit, $g_{m5h}v_{cmc}$ flows (almost entirely, fraction $r_{o5h}/(r_{o5h} + 1/g_{m1}) \approx 0.99$) through common-gate $M_1$ into diode $M_3$ and is copied 1:1 by $M_8$ into the output node, whose resistance is $r_{o8}\|r_{o9} = 66.7$ kΩ.
- Raising $v_{cmc}$ increases the mirrored PMOS current and raises the output: $a_{cmc} \approx +(1\ \text{mA/V})(66.7\ \text{k}\Omega) \approx +66$.

## Grading notes

+2: ≈ +66 (±5%) with positive sign and the path through $M_1$ and the mirror. +1: magnitude right, sign wrong or not stated. 0: right method with a factor-of-2 slip (full $g_{m5}$, ≈ 133). −2 (asserted as fact): output resistance taken as the cascode-like $R_{o(\text{down})}$ (gain in the hundreds), or the gain claimed to be ≈ −1 or near zero.
