# Golden Solution - R465

## Reference answer

The gain is proportional to $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{in,CM} - V_{DD}})$, so it decreases as $V_{in,CM}$ rises (more reverse bias on the well) and increases as $V_{in,CM}$ falls below $V_{DD}$. The dependence is inverse square-root.

- $|A_v| = \eta g_{m1}(r_{O1}\|r_{O3})$; at constant drain current $g_{m1}$ and the $r_O$'s are fixed, so $A_v \propto 1/\sqrt{0.8 + V_{in,CM} - V_{DD}}$.
- Numbers: η ≈ 0.28 at $V_{in,CM} = V_{DD} - 0.3$ V (valid only while the slightly forward-biased source–well junction current is negligible), 0.22 at $V_{DD}$, 0.18 at $V_{DD} + 0.5$ V: a 25–30% gain change over a few hundred millivolts.
- (If the bias current is not held constant, i.e. $V_{SG}$ fixed, raising $V_{in,CM}$ also raises $|V_{TH}|$ and lowers $I_D$; $g_m(r_{O1}\|r_{O3}) \propto 1/V_{OV}$ then rises and opposes the drop in η: $d\ln|A_v|/dV_{in,CM} = -1/(2X) + \gamma/(2\sqrt{X}\,|V_{OV}|)$ with $X = 0.8 + V_{in,CM} - V_{DD}$, so the net trend can even reverse for small overdrives. This is outside the question's constant-current condition.) The CM-dependent gain also produces distortion for large input swings.

## Grading notes

+2: gain ∝ η and η decreasing with increasing reverse well bias, so the gain falls as $V_{in,CM}$ rises (inverse square-root dependence). +1: correct direction without the functional form, or correct form with the direction misstated in a side remark only. 0: says the gain depends on CM through the body effect but gives no direction. -2 (asserted as fact): gain independent of the input CM level, or gain increasing as the well is reverse-biased more.
