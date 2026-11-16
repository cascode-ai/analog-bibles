# Golden Solution - A363

## Reference answer

$V_{onn} \approx 1.43$ V; $V_{onp} \approx V_{DD} - 1.78$ V (e.g. 0.72 V for $V_{DD}$ = 2.5 V).

- $V_{onn} = V_{DSN5}(sat) + V_{GSN1} = \sqrt{2\cdot100/(110\cdot10)} + 0.7 + \sqrt{2\cdot50/(110\cdot10)} = 0.426 + 0.7 + 0.302 = 1.428$ V.
- $V_{onp} = V_{DD} - V_{SDP5}(sat) - V_{SGP1} = V_{DD} - \sqrt{2\cdot100/(50\cdot10)} - 0.7 - \sqrt{2\cdot50/(50\cdot10)} = V_{DD} - 0.632 - 0.7 - 0.447 = V_{DD} - 1.780$ V.
- $V_{onn} + (V_{DD} - V_{onp}) = 3.21$ V is the supply below which a dead zone appears: for $V_{DD} < 3.21$ V, $V_{onp} < V_{onn}$ and neither stage is fully on for $V_{onp} < V_{icm} < V_{onn}$ (e.g. 0.72–1.43 V at $V_{DD}$ = 2.5 V); for $V_{DD} > 3.21$ V both stages are on between $V_{onn}$ and $V_{onp}$.

## Grading notes

+2: $V_{onn}$ = 1.43 V (1.40–1.46; ≈ 1.52 V accepted if the body effect is included and stated) and $V_{onp} = V_{DD} - 1.78$ V (or a numeric value for a clearly stated $V_{DD}$), with the n-pair at 50 µA per device. +1: one of the two right and the other off by a slip, or both right but computed with the full 100 µA in MN1/MP1. 0: correct expressions without numbers. −2 (asserted as fact): $V_{onn}$ and $V_{onp}$ interchanged in meaning (n-stage working at low $V_{icm}$), $V_{onp}$ given as a number without any $V_{DD}$, or K' values swapped between n and p devices.
