# Golden Solution - R713

## Reference answer

Wire delay ≈ 0.74 ps; lumped time constant $R_SC$ = 18.5 ps, about 25 times larger. The wire's own distributed RC is negligible; the delay is set by the driver.

- $R_{wire} = 0.04\ \Omega \times 1000/1 = 40\ \Omega$.
- $C_{wire} = (7\ \mathrm{aF/\mu m^2} \times 1\ \mu\mathrm{m} + 30\ \mathrm{aF/\mu m}) \times 1000\ \mu\mathrm{m} = 37$ fF (7 fF parallel-plate + 30 fF fringe).
- Distributed-line delay $T_D = \tfrac12 R_uC_uL^2 = \tfrac12 R_{wire}C_{wire} = 0.74$ ps (the 50% step delay of a distributed RC line, ≈ 0.38RC, is 0.56 ps).
- Lumped: $500\ \Omega \times 37\ \mathrm{fF} = 18.5$ ps. Together (Elmore): $R_SC + RC/2$ ≈ 19.2 ps.

## Grading notes

+2: wire delay ≈ 0.74 ps (½RC) or ≈ 0.56 ps (0.38RC), ±5%, the lumped value 18.5 ps, and the conclusion that the wire's own delay is negligible (≈ 25× smaller). +1: one numerical slip with the right conclusion. 0: fringe capacitance ignored (C = 7 fF, giving 0.14 ps and 3.5 ps) with the method otherwise right, or values right without the comparison. -2 (asserted as fact): the number of squares inverted (W/L instead of L/W), the source resistance used as the wire resistance in $T_D$, or the wire delay claimed comparable to or larger than $R_SC$.
