# Golden Solution - R712

## Reference answer

$C$ = 129 aF/μm², $C_P$ = 90 aF/μm², $C_P/C$ ≈ 0.70.

- Interlayer capacitance between layers i and j: $1/(1/C_{sub,i} - 1/C_{sub,j})$ (heights $h = \epsilon/C_{sub}$).
- Metal 4–3: 31.5; metal 3–2: 22.5; metal 2–1: 30; metal 1–poly: $1/(1/30 - 1/90) = 45$ aF/μm².
- $C = 31.5 + 22.5 + 30 + 45 = 129$ aF/μm² (about 4.1 times the two-plate metal 4/metal 3 value).
- $C_P$ = poly to substrate = 90 aF/μm².
- $C_P/C = 90/129 = 0.70$: the densest structure, but with the worst parasitic ratio.

## Grading notes

+2: $C$ ≈ 129 aF/μm² (±3%), $C_P$ = 90 aF/μm², $C_P/C$ ≈ 0.70. +1: both capacitances right with the ratio missing or slipped. 0: method right with an arithmetic slip in one interlayer capacitance. -2 (asserted as fact): interlayer capacitances taken as differences or sums of the substrate values, a missing layer pair in $C$, or $C_P$ taken as something other than the poly-to-substrate capacitance (e.g., including the upper plates).
