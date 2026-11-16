# Golden Solution - R208

## Reference answer

With λ = 0: $A_v = -\dfrac{g_{m1}}{g_{m5}}\cdot\dfrac{(g_{m3} + g_{mb3})R_1/2}{1 + (g_{m3} + g_{mb3})R_1/2}$.
- Half circuit: the midpoint of $R_1$ is a virtual ground, so node X sees $R_1/2$ to ground. The small-signal current $g_{m1}v_{in}$ drawn by $M_1$ from X divides between $R_1/2$ and the source of cascode $M_3$ (input resistance $1/(g_{m3} + g_{mb3})$ for λ = 0); only the part through $M_3$ reaches the diode load $1/g_{m5}$.
- $v_{out,half} = -g_{m1}v_{in}\,\dfrac{R_1/2}{R_1/2 + 1/(g_{m3}+g_{mb3})}\cdot\dfrac{1}{g_{m5}}$, and the differential gain equals the half-circuit gain.
- With λ ≠ 0, approximately replace $R_1/2$ by $R_1/2\|r_{O1}$ and $1/g_{m5}$ by $1/g_{m5}\|r_{O5}$. As $R_1 \to \infty$ the gain approaches $g_{m1}/g_{m5}$; as $R_1 \to 0$ it vanishes.

## Grading notes

+2: the current-division result above (with or without $g_{mb3}$ if body effect is explicitly addressed; a λ ≠ 0 extension consistent with it is fine). +1: body effect omitted ($g_{m3}$ only) with the rest right, or $R_1$ used instead of $R_1/2$. 0: correct structure (current division at X) with an algebra error. -2 (asserted as fact): gain $g_{m1}/g_{m5}$ claimed independent of $R_1$, $R_1$ treated as degenerating the input pair ($g_{m1}/(1 + g_{m1}R_1/2)$ form), or the cascode treated as a source follower to the output.
