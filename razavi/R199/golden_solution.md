# Golden Solution - R199

## Reference answer

$A_v = -g_{m1}\left(r_{O1}\big\|r_{O3}\big\|\dfrac{R_1}{2}\right)$.
- $M_3$, $M_4$ (gates at $V_{b2}$) are current sources with output resistance $r_{O3}$; the midpoint of $R_1$ is a virtual ground for differential signals, so each output sees $R_1/2$.

## Grading notes

+2: the expression above (equivalent forms, magnitude accepted). +1: one $r_O$ omitted. 0: $R_1$ instead of $R_1/2$. -2 (asserted as fact): $M_3$/$M_4$ treated as diodes ($1/g_{m3}$ in the load), or $R_1$ ignored/placed in series.
