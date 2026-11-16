# Golden Solution - A362

## Reference answer

$V_{DD}(\min) \approx 1.14$ V, with the single in-rail common-mode point at $v_{icm} = 0$ V (the lower rail).

- Saturation voltages: $V_{DS5}(sat) = 0.135$ V, $V_{DS1}(sat) = 0.095$ V, $V_{SD3}(sat) = 0.141$ V.
- Lower limit: $V_{DS5}(sat) + V_{T1} + V_{DS1}(sat) = 0.135 - 1 + 0.095 = -0.770$ V (below ground: the ICMR extends below the negative rail).
- Upper limit: $V_{DD} - V_{SD3}(sat) + V_{T1} = V_{DD} - 1.141$ V.
- In-rail range $[0,\ V_{DD} - 1.141]$ → zero width at $V_{DD} = 1.141$ V. (The "upper = lower" supply, 0.372 V, would put the point at −0.77 V, outside the rails.)
- Check at $V_{DD}$ = 1.141 V, $v_{icm}$ = 0: sources at $0 - V_{GS1} = 0.905$ V, so $V_{DS5} = 0.905$ V (saturated); drains at $V_{DD} - 0.141 = 1.0$ V, $V_{DS1} = 0.095$ V = $V_{DS1}(sat)$.
- (If the body effect is included with the bulk at ground, the source at ≈ 0.76 V raises $V_{T1}$ to ≈ −0.85 V and the result drops to ≈ 1.0 V.)

## Grading notes

+2: ≈ 1.14 V (1.10–1.18 V; ≈ 1.0 V accepted if the body effect is included and stated), with the recognition that the depletion pair's ICMR lies low, the upper limit $V_{DD} - V_{SD3}(sat) + V_T$ is binding, and the point is at the lower rail. +1: correct reasoning with a slip of up to ±0.05 V. 0: limits written but the rail condition not applied. −2 (asserted as fact): 0.37 V (sum of saturation voltages) without the rail check, the book's 0.711 V, or a claim that a negative threshold lowers the minimum supply below the enhancement case.
