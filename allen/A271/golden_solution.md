# Golden Solution - A271

## Reference answer

$A_{vd}(0) \approx 8.0\times10^3$ V/V (≈ 78 dB).

- $g_{m1} = \sqrt{2(110\ \mu)(10)(22.8\ \mu)} = 224\ \mu$S; $g_{ds2} + g_{ds4} = (0.04 + 0.05)(22.8\ \mu) = 2.06\ \mu$S → first stage $g_{m1}/(g_{ds2} + g_{ds4}) = 109$.
- $g_{m6} = \sqrt{2(50\ \mu)(100)(228\ \mu)} = 1.51$ mS; $g_{ds6} + g_{ds7} = (0.05 + 0.04)(228\ \mu) = 20.6\ \mu$S → second stage 73.5.
- $A_{vd}(0) = \dfrac{g_{m1}g_{m6}}{(g_{ds2} + g_{ds4})(g_{ds6} + g_{ds7})} = 109 \times 73.5 \approx 8.0\times10^3$.

## Grading notes

+2: 7.6–8.4 × 10³ with $g_{m1}$ ≈ 224 µS, $g_{m6}$ ≈ 1.51 mS and the λ's of the correct device types. +1: correct method with one slip (result within ±15 %). 0: first- or second-stage gain right, the other wrong. −2 (asserted as fact): first-stage gain with $g_{m1}/2$ (half-circuit without the mirror doubling), λ's swapped between device types giving a different value, or $r_{ds}$ computed with $I_5$ instead of $I_5/2$.
