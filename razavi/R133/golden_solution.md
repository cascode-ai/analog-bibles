# Golden Solution - R133

## Reference answer

$V_{in} \approx 1.25$ V ($V_{out} = V_{in} - V_{TH} \approx 0.55$ V, $I_D \approx 0.82$ mA); $A_v \approx -g_{m1}(r_{O1}\|r_{O2}) \approx -12$.

- As $V_{in}$ rises, $V_{out}$ falls. $M_2$ ($V_{SG} = 3$ V, overdrive 2.2 V) saturates when $V_{out} \le 0.8$ V; at that point $M_1$'s overdrive is only ≈ 0.55 V, so $M_2$ saturates before $M_1$ reaches the triode edge.
- With both saturated (λ = 0 for bias) the current is pinned at $M_2$'s saturation current $\tfrac12(38.4\ \mu)(8.8)(2.2)^2 = 0.818$ mA, which fixes $V_{in} = 0.7 + \sqrt{2(0.818\ \mathrm{mA})/(5.36\ \mathrm{mA/V^2})} = 1.252$ V; at this input $V_{out}$ drops (vertically, for λ = 0) from 0.8 V to $V_{ov1} = 0.552$ V, where $M_1$ reaches the triode edge. (With finite λ the two points are only ≈ 20 mV of input apart.)
- Gain there, both saturated: $g_{m1} = \sqrt{2(5.36\ \mathrm{mA/V^2})(0.818\ \mathrm{mA})} = 2.96$ mS, $r_{O1} = 12.2$ kΩ, $r_{O2} = 6.1$ kΩ → $A_v = -2.96\ \mathrm{mS} \times 4.08\ \mathrm{k\Omega} \approx -12.1$ (unbounded if λ = 0).

## Grading notes

+2: recognizes that $M_2$ is already saturated at $M_1$'s triode edge; $V_{in}$ ≈ 1.25 V (±0.03 V), $V_{out}$ ≈ 0.55 V, gain ≈ −12 (±10%) from $-g_{m1}(r_{O1}\|r_{O2})$. +1: correct operating point with the gain only described as "very large / unbounded for λ = 0". 0: correct $V_{in}$ but the gain computed with $M_2$ as a triode resistor. -2 (asserted as fact): an operating point found by forcing $M_2$ into the triode equation with $V_{SD2} > 2.2$ V, or a gain near 5 claimed unchanged from the design point.
