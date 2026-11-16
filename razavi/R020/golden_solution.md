# Golden Solution - R020

## Reference answer

$V_{out} = V_{GS} = V_{TH}(V_{SB}) + \sqrt{2I_1/\beta}$ falls as $V_{in}$ rises, because raising the bulk voltage reduces $V_{SB}$ and hence $V_{TH}$; the fall gets steeper as $V_{SB}$ approaches zero. $V_{out}$ reaches $V_{TH0} + \sqrt{2I_1/\beta}$ when $V_{in}$ equals the source voltage; beyond that the source–bulk junction is forward biased and, near the top of the range, it conducts heavily and the MOS model no longer applies.
- $M_1$ is diode-connected (always saturated) and carries $I_1$, so $V_{GS} = V_{TH} + \sqrt{2I_1/\beta}$, with $V_{SB} = V_S - V_{in} = (3 - V_{out}) - V_{in}$.
- $dV_{TH}/dV_{SB} = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$ grows as $V_{SB}$ shrinks, so the curve is concave down (steepening).
- Example with $\sqrt{2I_1/\beta} = 0.2$ V: $V_{out}$ = 1.21 V at $V_{in} = 0$ ($V_{SB}$ ≈ 1.79 V), 1.08 V at 1 V, 1.00 V at 1.5 V, 0.90 V at 2.1 V ($V_{SB} = 0$, $V_{in} = V_S$), ≈ 0.82 V at 2.5 V (forward bias ≈ 0.3 V).
- For $V_{in} > V_S$ the junction is forward biased; as the forward bias approaches 0.6–0.7 V (toward $V_{in}$ = 3 V) the junction diverts a large part of $I_1$ from the channel and the body-effect formula is no longer meaningful. The drain–bulk junction stays off (drain at 3 V ≥ $V_{in}$).

## Grading notes

+2: decreasing $V_{out}$ (= $V_{GS}$) with $V_{in}$ because $V_{TH}$ drops as $V_{SB}$ shrinks, steepening slope, level $V_{TH0} + \sqrt{2I_1/\beta}$ when $V_{in}$ equals the source voltage, and the forward-biased source–bulk junction noted for the upper range. Numerical examples are optional. +1: decreasing curve with correct reasoning but without the forward-bias remark or without the steepening. 0: correct mechanism but the sign of the slope wrong in part of the range, or only the start value. -2 (asserted as fact): $V_{out}$ constant (body effect ignored), $V_{out}$ increasing with $V_{in}$, or $V_{in}$ treated as a gate input.
