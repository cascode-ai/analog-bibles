# Golden Solution - R714

## Reference answer

Wire delay ≈ 0.44 ps; lumped time constant $R_SC$ = 22 ps, about 50 times larger. The driver dominates.

- $R_{wire} = 0.04 \times 1000/2 = 20\ \Omega$.
- $C_{wire} = (7 \times 2 + 30)\ \mathrm{aF/\mu m} \times 1000\ \mu\mathrm{m} = 44$ fF (14 fF parallel-plate + 30 fF fringe).
- $T_D = \tfrac12 R_{wire}C_{wire} = 0.44$ ps (0.33 ps with 0.38RC).
- Lumped: $500 \times 44\ \mathrm{fF} = 22$ ps; Elmore total ≈ 22.4 ps.
- For comparison with a 1-μm-wide wire (0.74 ps, 18.5 ps): widening lowers the wire's own delay, but because the fringe term does not shrink, the capacitance rises by 19%. With a 500-Ω driver the overall delay therefore gets longer.

## Grading notes

+2: $R_{wire}$ = 20 Ω, C = 44 fF, the lumped value $R_SC$ = 22 ps, and either reading of the delay through the wire: the wire's own distributed delay ≈ 0.44 ps (½RC) or ≈ 0.33 ps (0.38RC), or the total source-to-end Elmore delay $(R_S + R_{wire}/2)C$ ≈ 22.4 ps; ±5%; with the conclusion that the wire's own contribution is negligible (≈ 2%) compared with $R_SC$. +1: one numerical slip with the right conclusion. 0: fringe capacitance ignored (C = 14 fF, giving 0.14 ps and 7 ps) with the method otherwise right, or the fringe capacitance doubled with the width. -2 (asserted as fact): wrong resistance formula (e.g., resistance doubling with width), the source resistance used in place of the wire resistance in $T_D$, or the wire delay claimed comparable to or larger than $R_SC$.
