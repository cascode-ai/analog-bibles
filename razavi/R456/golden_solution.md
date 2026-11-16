# Golden Solution - R456

## Reference answer

$(W/L)_{3,4} \approx 119$ (half of $(W/L)_5$), i.e. $W \approx 60\ \mu$m with $L = 0.5\ \mu$m.

- $V_{GS5} = 0.7 + 0.25 = 0.95$ V. For $M_3$ to have the same $V_{GS}$ at half the current, its current density must match: $(W/L)_3/(W/L)_5 = I_{D3}/I_{D5} = 0.5$.
- $(W/L)_3 = 2(0.5\ \mathrm{mA})/[134\ \mu\mathrm{A/V^2}\times(0.25)^2] = 119$.

## Grading notes

+2: ≈ 119 (±5%), with the current-density argument or direct square-law computation. +1: right idea with a small slip. 0: equal size to $M_5$ (239) claimed with the reasoning "same $V_{GS}$" but ignoring the current ratio. -2 (asserted as fact): PMOS mobility used for $M_3$, or $V_{GS3}$ matched to $M_6$ instead of $M_5$.
