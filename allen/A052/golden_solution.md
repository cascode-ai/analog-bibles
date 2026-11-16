# Golden Solution - A052

## Reference answer

Off: $C_{GB}$ ≈ 13.05 fF, $C_{GS} = C_{GD}$ = 1.1 fF. Saturation: $C_{GB}$ = 0.70 fF, $C_{GS}$ ≈ 9.33 fF, $C_{GD}$ = 1.1 fF. Nonsaturation: $C_{GB}$ = 0.70 fF, $C_{GS} = C_{GD}$ ≈ 7.28 fF.

- Building blocks: gate-to-channel (oxide) capacitance $C_2 = C_{ox}WL = 24.7\times10^{-4}\times5\times10^{-12}$ F = 12.35 fF; overlaps $C_1 = C_3$ = CGSO·W = CGDO·W = 1.1 fF; gate–bulk overlap $2C_5$ = CGBO·L = 0.70 fF.
- Off (no channel): the gate sees the bulk through the oxide: $C_{GB} = C_2 + 2C_5$ = 13.05 fF; $C_{GS} = C_{GD}$ = overlap only = 1.1 fF.
- Saturation: the inverted channel shields the bulk and is pinched off at the drain end; about 2/3 of $C_2$ belongs to the source: $C_{GS} = 1.1 + \tfrac23(12.35)$ = 9.33 fF (9.37 fF with 0.67), $C_{GD}$ = 1.1 fF, $C_{GB}$ = 0.70 fF.
- Nonsaturation: the channel extends from source to drain and $C_2$ is split equally: $C_{GS} = C_{GD} = 1.1 + 6.175$ = 7.28 fF, $C_{GB}$ = 0.70 fF.

## Grading notes

+2: all nine values within ±3% (2/3 or 0.67 both fine) with the correct allocation in each region. Using a lateral diffusion of 16 nm ($L_{eff}$ = 0.968 µm, e.g. 12.6, 9.07, 7.08 fF) is acceptable if stated. +1: correct allocation with one value wrong by a slip, or the off-state $C_{GB}$ given as $C_{ox}WL$ = 12.35 fF (CGBO·L omitted). 0: one region wrong (e.g. the channel capacitance split 1/2–1/2 in saturation) with the other two right, or the off-state $C_{GB}$ reduced by a series depletion capacitance with no value. −2 (asserted as fact): the channel capacitance assigned to $C_{GD}$ in saturation, or to $C_{GB}$ in saturation or nonsaturation; $C_{GS}$ larger than $C_1 + C_2$; or values off by orders of magnitude from unit errors.
