# Golden Solution - R137

## Reference answer

$(W/L)_1 \approx 82.9$ (e.g., 41.5/0.5), $(W/L)_2 \approx 11.7$ (e.g., 5.8/0.5), with $V_b = V_{GS2} = 1.5$ V.

- $V_{GS1} = V_{in} - V_{out} = 1$ V → overdrive 0.3 V → $(W/L)_1 = 2I_D/(\mu_nC_{ox}V_{ov1}^2) = 1\ \mathrm{mA}/(134\ \mu\mathrm{A/V^2} \times 0.09) = 82.9$.
- $V_{GS2} = 1.5$ V → overdrive 0.8 V → $(W/L)_2 = 1\ \mathrm{mA}/(134\ \mu\mathrm{A/V^2} \times 0.64) = 11.7$.
- (Remark: $M_2$ stays saturated for $V_{out} \ge 0.8$ V, i.e. $V_{in} \ge 1.8$ V.)

## Grading notes

+2: $(W/L)_1$ ≈ 83 and $(W/L)_2$ ≈ 11.7 (±3%), L may be chosen freely if the ratio is right. +1: one slip. 0: one device right, the other wrong. -2 (asserted as fact): $V_{GS2} = 0.5$ V or $V_{GS1} - V_{GS2} = 0.5$ V used, threshold omitted from the overdrive, or the missing factor 2 giving half/double ratios.
