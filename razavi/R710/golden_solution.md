# Golden Solution - R710

## Reference answer

$C$ = 54 aF/μm², $C_P$ = 15 aF/μm², $C_P/C$ ≈ 0.28.

- Each layer's capacitance to the substrate is $\epsilon/h$, so the capacitance between layers i and j is $1/(1/C_{sub,i} - 1/C_{sub,j})$.
- Metal 4–metal 3: $1/(1/7 - 1/9) = 31.5$ aF/μm². Metal 3–metal 2: $1/(1/9 - 1/15) = 22.5$ aF/μm².
- $C = 31.5 + 22.5 = 54$ aF/μm².
- $C_P$ = metal 2 to substrate = 15 aF/μm². Metal 4 and metal 3 are shielded by the plates below them.
- $C_P/C = 15/54 = 0.278$.

## Grading notes

+2: $C$ ≈ 54 aF/μm² (±3%), $C_P$ = 15 aF/μm², $C_P/C$ ≈ 0.28. +1: both capacitances right with the ratio missing or slipped. 0: method right with an arithmetic slip in one interlayer capacitance. -2 (asserted as fact): interlayer capacitances taken as differences or sums of the substrate values, only one interlayer capacitance counted in $C$, or $C_P$ including the capacitances of the shielded upper plates.
