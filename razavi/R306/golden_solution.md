# Golden Solution - R306

## Reference answer

Very low frequencies ($C_1$, $C_2$ open): $M_2$ is a cascode (gate at $V_b$ through $R_1$, which carries no current) and $M_3$ is diode-connected through $R_2$ (no dc current in $R_2$, so its gate sits at $V_{out}$):
$$A_{v,low} = -\frac{g_{m1}r_{O1}r_{O3}(1 + g_{m2}r_{O2})}{(1 + g_{m3}r_{O3})(r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}) + r_{O3}} \approx -\frac{g_{m1}}{g_{m3}}$$
i.e. $-G_m[R_{casc}\|\tfrac{1}{g_{m3}}\|r_{O3}]$ with $R_{casc} = r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}$ and $G_m \approx g_{m1}$.

Very high frequencies ($C_1$, $C_2$ shorts): $C_1$ ties the gate of $M_2$ to the output, so $M_2$ becomes diode-connected and no longer cascodes, and $R_1$ now loads the output (to $V_b$, an ac ground); $C_2$ grounds the gate of $M_3$, which becomes a current source ($r_{O3}$), and $R_2$ also loads the output:
$$A_{v,high} = -\frac{g_{m1}}{\dfrac{1}{r_{O1}} + G\left(1 + \dfrac{1}{(g_{m2} + 1/r_{O2})r_{O1}}\right)},\qquad G = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{r_{O3}}$$
$$A_{v,high} \approx -g_{m1}(r_{O1}\|R_1\|R_2\|r_{O3})$$
(The approximation holds for $g_{m2}r_{O1} \gg 1$.) Typically $|A_{v,high}| \gg |A_{v,low}|$: the load changes from a diode ($1/g_{m3}$) to a high resistance.

## Grading notes

+2: low-frequency gain ≈ $-g_{m1}/g_{m3}$ (exact form or $-g_{m1}(R_{casc}\|1/g_{m3}\|r_{O3})$ accepted) and high-frequency gain ≈ $-g_{m1}(r_{O1}\|R_1\|R_2\|r_{O3})$ (exact form accepted), with the correct identification of what $C_1$ and $C_2$ do at each extreme. +1: both right in approximate form but one resistor missing from the high-frequency parallel combination (e.g., $R_1$ or $r_{O1}$). 0: one extreme right. -2 (asserted as fact): $M_3$ treated as a current source at low frequencies, $M_2$ still treated as a cascode at high frequencies (gain $-g_{m1}[\ldots R_{casc}\ldots]$), or $R_1$/$R_2$ claimed to carry signal at dc.
