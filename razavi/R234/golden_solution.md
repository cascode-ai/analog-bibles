# Golden Solution - R234

## Reference answer

$V_b = 2V_{GS} \approx 1.87$ V.

- $V_X = V_{GS1} = 0.7 + \sqrt{2(0.3\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2}\times 80)} = 0.7 + 0.237 = 0.937$ V.
- With $V_Y = V_X$, $M_2$ copies $I_{REF}$ exactly and $M_3$ (same size, same current, $\gamma = 0$) has $V_{GS3} = 0.937$ V.
- $V_b = V_Y + V_{GS3} = 2(0.937) = 1.873$ V.

## Grading notes

+2: $V_b$ = 1.85–1.89 V with $V_{GS} \approx 0.94$ V. +1: correct relation $V_b = V_{GS1} + V_{GS3}$ with a small arithmetic slip. 0: correct relation but $V_{GS}$ computed with a wrong W/L (e.g., 20 or 100). -2 (asserted as fact): $V_b = V_{GS}$ or $V_b = V_{GS} + V_{TH}$ (edge-of-saturation biasing instead of $V_X = V_Y$), or body effect invoked despite $\gamma = 0$ to give a different value.
