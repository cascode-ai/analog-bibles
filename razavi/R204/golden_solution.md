# Golden Solution - R204

## Reference answer

$A_v = -\dfrac{g_{m1}}{1/r_{O1} + 1/r_{O3} - g_{m3}} = -g_{m1}\left(r_{O1}\|r_{O3}\|\left(-\dfrac{1}{g_{m3}}\right)\right)$.
- For differential signals the right output moves by $-v_X$, so $M_3$ (gate at the right output) injects $+g_{m3}v_X$ into the left node: the cross-coupled pair presents a negative resistance $-1/g_{m3}$ per side.
- Since normally $g_{m3} > 1/r_{O1} + 1/r_{O3}$, the denominator is negative: the total differential load resistance is negative, the "gain" changes sign and the symmetric bias point is unstable (the circuit latches). The formula is meaningful as a small-signal result only if $g_{m3} < 1/r_{O1} + 1/r_{O3}$, where it gives a very large gain.

## Grading notes

+2: the expression above (equivalent forms, magnitude accepted) with the negative-resistance interpretation; the remark on instability is a plus; an equal-parameter form given only as a labelled special case of it is fine. +1: correct expression without any interpretation, or the sign of the $g_{m3}$ term right but one $r_O$ missing, or the same result with all devices given one $g_m$ and $r_O$, e.g. $g_mr_O/(g_mr_O - 2)$ (the reference with $g_{m1} = g_{m3}$, $r_{O1} = r_{O3}$; an earlier wording of the question, "($g_m$, $r_O$)", invited this), together with the negative-resistance interpretation (0 without it). 0: correct identification of positive feedback with an algebra error. -2 (asserted as fact): $-g_{m1}(r_{O1}\|r_{O3}\|1/g_{m3})$ (cross-coupled pair treated as diode loads), or $-g_{m1}(r_{O1}\|r_{O3})$ (treated as current sources).
