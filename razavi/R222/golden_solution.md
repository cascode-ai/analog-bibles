# Golden Solution - R222

## Reference answer

As $W/L$ grows, $\Delta V_{in1} = \sqrt{2I_{SS}/(\mu_nC_{ox}W/L)}$ shrinks: the current curves switch over a narrower input range (steeper transitions) but still saturate at 0 and $I_{SS}$, and the $G_m$ curve becomes narrower and taller. The area under the $G_m$ plot is $2I_{SS}$, independent of $W/L$.
- Area: $\displaystyle\int_{-\Delta V_{in1}}^{+\Delta V_{in1}} G_m\,d(\Delta V_{in}) = (I_{D1} - I_{D2})\big|_{+\Delta V_{in1}} - (I_{D1} - I_{D2})\big|_{-\Delta V_{in1}} = I_{SS} - (-I_{SS}) = 2I_{SS}$ ($G_m = 0$ outside).
- Since the width $2\Delta V_{in1}$ falls as $1/\sqrt{W/L}$ while the area stays $2I_{SS}$, the height must rise: the peak $G_m = \sqrt{\mu_nC_{ox}(W/L)I_{SS}}$ grows as $\sqrt{W/L}$ (peak × width = $2\sqrt2\,I_{SS}$, a constant consistent with the fixed area for a fixed shape).
- Trade-off: higher gain at equilibrium, smaller linear input range.

## Grading notes

+2: narrower/steeper current transitions and a narrower, taller $G_m$ curve; area = $2I_{SS}$ (from integrating the derivative between the fully steered limits); the constant area with shrinking width forces a higher peak, ∝ $\sqrt{W/L}$. +1: area given as $I_{SS}$ (with $G_m$ taken per device or a factor-2 slip) and the argument otherwise right. 0: correct qualitative changes without the area argument. -2 (asserted as fact): range widening with larger $W/L$, the saturated current levels changing with $W/L$, or an area that depends on $W/L$.
