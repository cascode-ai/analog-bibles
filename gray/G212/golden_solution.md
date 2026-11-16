# Golden Solution - G212

## Reference answer

$v_o/i_i = -\beta(\beta + 2)R_L = -100\times102\times3\ \mathrm{k\Omega} = -30.6$ MΩ.

All of $i_i$ flows into $Q_1$'s base; $i_{b2} = (\beta+1)i_i$ and the output current is $\beta i_i + \beta(\beta+1)i_i = \beta(\beta+2)i_i$, flowing in $R_L$.

## Grading notes

+2: −30.6 MΩ (±0.5%), i.e. $-\beta(\beta+2)R_L$ with both collector currents included. +1: −30.3 MΩ or −30.0 MΩ ($Q_1$'s collector current omitted, or the current gain approximated as $\beta^2$), or a sign slip with the correct magnitude. 0: magnitude off by a factor ≈ β (e.g., −0.3 MΩ) from a slip in the current gain with the correct method. −2 (asserted as fact): an input resistance or $R_S$ assumed in the current-driven case, or a transresistance of the order of $R_L$.
