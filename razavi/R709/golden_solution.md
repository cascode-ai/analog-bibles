# Golden Solution - R709

## Reference answer

$C$ = 31.5 aF/μm², $C_P$ = 9.0 aF/μm², $C_P/C$ ≈ 0.29.

- Each layer's capacitance to the substrate is $\epsilon/h$, so its height is $h = \epsilon/C_{sub}$. The capacitance between two layers is $\epsilon/(h_i - h_j) = 1/(1/C_{sub,i} - 1/C_{sub,j})$ (the series combination works backward: $1/C_{sub,4} = 1/C_{43} + 1/C_{sub,3}$).
- $C = 1/(1/7 - 1/9) = 31.5$ aF/μm².
- The bottom plate (metal 3) sees the substrate directly: $C_P = 9.0$ aF/μm². The top plate is completely shielded by metal 3, so it has no capacitance to the substrate.
- $C_P/C = 9/31.5 = 0.286$.

## Grading notes

+2: $C$ ≈ 31.5 aF/μm² (±3%), $C_P$ = 9.0 aF/μm², $C_P/C$ ≈ 0.29. +1: both capacitances right with the ratio missing or slipped. 0: method right (series dielectric) with an arithmetic slip in $C$. -2 (asserted as fact): $C$ taken as the difference (2 aF/μm²) or the sum (16 aF/μm²) of the substrate capacitances, $C_P$ taken as metal 4's 7 aF/μm² or as 16 aF/μm², or the top plate's substrate capacitance added to $C_P$.
