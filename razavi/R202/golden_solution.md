# Golden Solution - R202

## Reference answer

$A_v = -g_{m1}\left(\dfrac{1}{g_{m3}}\Big\|r_{O1}\Big\|r_{O3}\Big\|r_{O5}\right)$.
- Each output sees the diode-connected $M_3$ ($1/g_{m3}\|r_{O3}$), the current source $M_5$ ($r_{O5}$) and $r_{O1}$; $P$ is a virtual ground. Because $M_5$ supplies most of the bias current, $g_{m3}$ is small and the gain is larger than with plain diode loads.

## Grading notes

+2: the expression above (equivalent forms, magnitude accepted); an equal-parameter form given only as a labelled special case of it is fine. +1: $r_{O5}$ (or another $r_O$) omitted. 0: gain written as $g_{m1}/(g_{m3} + g_{m5})$ but otherwise right reasoning, or a correct circuit reading and parallel combination with all devices given one $g_m$ and $r_O$ (e.g., $-g_m/(g_m + 3/r_O) \approx -1$); an earlier wording of the question, "($g_m$, $r_O$)", invited the latter, but it erases the point of the circuit ($M_5$ takes most of the bias current, so $g_{m3}$ is small and the gain exceeds that of plain diode loads). -2 (asserted as fact): $M_5$ treated as a diode or as contributing $g_{m5}$ to the load, $M_3$ treated as a current source, or $g_{m1}(r_{O1}\|r_{O5})$.
