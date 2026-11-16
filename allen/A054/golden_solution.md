# Golden Solution - A054

## Reference answer

The device is in saturation: $C_{GB}$ = 0.70 fF, $C_{GS}$ ≈ 9.33 fF, $C_{GD}$ = 1.1 fF.

- $V_{GS}$ = 1.9 V, $V_{DS}$ = 1.5 V, $V_{SB}$ = 0.5 V: $V_T = 0.7 + 0.4(\sqrt{1.2} - \sqrt{0.7})$ = 0.804 V.
- $V_{GS} - V_T$ = 1.10 V < $V_{DS}$ = 1.5 V → saturation (it would be saturated even without the body effect: 1.2 V < 1.5 V).
- $C_2 = C_{ox}WL$ = 12.35 fF. $C_{GS}$ = CGSO·W + (2/3)$C_2$ = 1.1 + 8.23 = 9.33 fF (9.37 fF with 0.67); $C_{GD}$ = CGDO·W = 1.1 fF; $C_{GB}$ = CGBO·L = 0.70 fF.

## Grading notes

+2: saturation identified (with $V_T$ ≈ 0.80 V, or a valid argument that it is saturated even without body effect) and the three values within ±3%. +1: correct region and allocation with one slip. 0: values for the right region without any check of the region, or region right but the channel capacitance split 1/2–1/2. −2 (asserted as fact): nonsaturation or cutoff claimed, or the channel capacitance assigned to $C_{GD}$ or $C_{GB}$.
