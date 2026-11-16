# Golden Solution - A361

## Reference answer

$V_{DD}(\min) \approx 0.37$ V (0.372 V), with the single common-mode point at $v_{icm} \approx 0.33$ V.

- Saturation voltages: $V_{DS5}(sat) = 0.135$ V, $V_{DS1}(sat) = 0.095$ V, $V_{SD3}(sat) = 0.141$ V.
- Lower limit: $V_{DS5}(sat) + V_{T1} + V_{DS1}(sat) = 0.135 + 0.1 + 0.095 = 0.330$ V.
- Upper limit: $V_{DD} - V_{SD3}(sat) + V_{T1} = V_{DD} - 0.041$ V.
- Zero width when they meet: $V_{DD} = V_{SD3}(sat) + V_{DS1}(sat) + V_{DS5}(sat) = 0.372$ V; the point 0.330 V lies inside $[0, 0.372]$ V, so the rail condition is satisfied.
- Compared with the 0.7-V input devices (≈ 0.93 V), the low threshold centers the ICMR in the supply and lets the stage work at the absolute minimum supply, the sum of the saturation voltages. (The body effect shifts both limits equally here and does not change the result.)

## Grading notes

+2: ≈ 0.37 V (0.35–0.40 V) with the common-mode point (≈ 0.33 V) shown to be inside the rails. +1: correct value without the in-rail check, or a slip in one saturation voltage. 0: limits written but not solved. −2 (asserted as fact): a value based on $V_T$ = 0.7 V for M1/M2 (≈ 0.93 V), the book's 0.411 V presented with a wrong derivation, or saturation voltages computed with the 100-µA tail current in every device.
