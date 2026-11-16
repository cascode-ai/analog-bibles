# Golden Solution - R197

## Reference answer

$A_v = -g_{m1}\left(\dfrac{1}{g_{m3}}\Big\|r_{O1}\Big\|r_{O3}\Big\|\dfrac{R_1}{2}\right)$.
- Half circuit: $P$ is a virtual ground and the midpoint of $R_1$ is a virtual ground for differential signals, so each output sees the diode-connected $M_3$ ($1/g_{m3}\|r_{O3}$), $r_{O1}$ and $R_1/2$.

## Grading notes

+2: the expression above or an equivalent form (sign consistent with the stated convention; magnitude-only answers accepted); an equal-parameter form given only as a labelled special case of it is fine. +1: one of the $r_O$'s omitted, or a correct half circuit (diode load, both $r_O$'s, $R_1/2$) with all devices given one $g_m$ and $r_O$, e.g. $-g_m/(g_m + 2/r_O + 2/R_1)$: the reference with $g_{m1} = g_{m3}$, $r_{O1} = r_{O3}$, which loses the $g_{m1}/g_{m3}$ ratio (an earlier wording of the question, "($g_m$, $r_O$)", invited this). 0: $R_1$ instead of $R_1/2$ in parallel. -2 (asserted as fact): $M_3$/$M_4$ treated as current sources (gain $g_{m1}(r_{O1}\|r_{O3}\|R_1/2)$), $R_1$ added in series, or $R_1$ ignored.
