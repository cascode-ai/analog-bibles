# Golden Solution - R716

## Reference answer

Still metal 4. With copper all sheet resistances halve (40 mΩ/□ for metals 1–3, 20 mΩ/□ for metal 4) while the capacitances are unchanged, so every delay halves and the ranking stays the same.

$T_D = \tfrac12 RC$:
- Metal 1: R = 114 Ω, C = 90.5 fF, $T_D$ = 5.2 ps.
- Metal 2: R = 88.9 Ω, C = 56.8 fF, $T_D$ = 2.5 ps.
- Metal 3: R = 80 Ω, C = 44.5 fF, $T_D$ = 1.8 ps.
- Metal 4: R = 33.3 Ω, C = 34.2 fF, $T_D$ = 0.57 ps.

## Grading notes

+2: metal 4, with the delays (or R and C per layer) computed with halved sheet resistances (±5%), or the explicit argument that the factor 1/2 applies to all layers equally, so the aluminum ranking (metal 4 lowest, both lowest R and lowest C per length) is preserved. +1: metal 4 with a numerical slip. 0: metal 4 with only a vague reason. -2 (asserted as fact): any other layer chosen, the capacitances claimed to change with the metal, or the resistance computed as $R_\square W/L$.
