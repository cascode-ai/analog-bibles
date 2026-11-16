# Golden Solution - A360

## Reference answer

$V_{DD}(\min) \approx 0.93$ V.

- Saturation voltages: $V_{DS5}(sat) = \sqrt{2\cdot100/(110\cdot100)} = 0.135$ V; $V_{DS1}(sat) = \sqrt{2\cdot50/(110\cdot100)} = 0.095$ V; $V_{SD3}(sat) = \sqrt{2\cdot50/(50\cdot100)} = 0.141$ V.
- Lower limit: $v_{icm} \ge V_{DS5}(sat) + V_{GS1} = 0.135 + 0.7 + 0.095 = 0.930$ V.
- Upper limit: $v_{icm} \le V_{DD} - V_{SD3}(sat) + V_{T1} = V_{DD} + 0.559$ V, always above $V_{DD}$, so within the rails the upper end is $V_{DD}$ itself.
- The in-rail range $[0.930\ \mathrm{V},\,V_{DD}]$ shrinks to a single point at $V_{DD} = 0.93$ V.
- The condition "upper limit = lower limit", $V_{DD} = V_{SD3}(sat) + V_{DS1}(sat) + V_{DS5}(sat) = 0.372$ V, is not sufficient here: that single common-mode point would be at 0.93 V, far above a 0.37-V supply. With enhancement input devices the lower limit (≈ $V_T + 2V_{ON}$) sets the minimum supply.
- (With the body effect, bulk at ground, $V_{T1}$ rises to ≈ 0.73 V and the result to ≈ 0.96 V.)

## Grading notes

+2: ≈ 0.93 V (0.90–0.97 V; the body-effect value ≈ 0.96 V is fine if stated), with the lower ICMR limit $V_{DS5}(sat) + V_{T} + V_{DS1}(sat)$ identified as binding and the saturation voltages computed with the right currents. +1: correct reasoning with a slip in one saturation voltage (result within ±0.05 V). 0: correct limits written but the minimum supply not concluded; or correct limits and rail-clipping argument with the overdrives mis-rearranged (e.g., $V_{ON} = \sqrt{2I/\beta}$ with β already defined as ½K'W/L, giving ≈ 1.03 V), which is a computational slip, not a wrong model. −2 (asserted as fact): 0.37 V (sum of the three saturation voltages) given as the answer without checking that the common-mode point lies inside the rails, the book's 0.671 V, or ICMR limits derived for a current-mirror (diode) load.
