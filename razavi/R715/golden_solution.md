# Golden Solution - R715

## Reference answer

Metal 4 (delay ≈ 1.1 ps, versus 3.6, 5.0 and 10.3 ps for metals 3, 2 and 1).

Delay of a distributed line $T_D = \tfrac12 RC$:
- Metal 1: R = 0.08 × 1000/0.35 = 229 Ω; C = (30 × 0.35 + 80) × 1000 aF = 90.5 fF; $T_D$ = 10.3 ps.
- Metal 2: R = 178 Ω; C = (15 × 0.45 + 50) aF/μm × 1000 μm = 56.8 fF; $T_D$ = 5.0 ps.
- Metal 3: R = 160 Ω; C = (9 × 0.5 + 40) × 1000 aF = 44.5 fF; $T_D$ = 3.6 ps.
- Metal 4: R = 0.04 × 1000/0.6 = 66.7 Ω; C = (7 × 0.6 + 30) × 1000 aF = 34.2 fF; $T_D$ = 1.14 ps.
Metal 4 has both the lowest resistance and the lowest capacitance per unit length, so the choice holds for any common width as well. $T_D = \tfrac12R_\square L^2(C_{pp} + C_f/W)$ is lowest for metal 4 at every W.

## Grading notes

+2: metal 4, supported by the per-layer resistance and capacitance (or delays) computed with the parallel-plate and fringe terms (values within ±5%, or the explicit observation that metal 4 has both the lowest R and the lowest C per unit length). +1: metal 4 with one numerical slip, or with the fringe term omitted (the ranking is unchanged). 0: metal 4 with only a vague qualitative reason. -2 (asserted as fact): any other layer chosen, the fringe capacitance multiplied by the width, or the resistance computed as $R_\square W/L$.
