# Golden Solution - G285

## Reference answer

$T \approx 26.0$ ($a = -2.60$ MΩ, $f = -1/R_2 = -10^{-5}$ S).

- Feedback network ($R_2$): $y_{11f} = y_{22f} = 1/R_2$, $f = y_{12f} = -1/R_2$.
- Basic amplifier: input node $R_1\|R_2\|R_i = 200\text{k}\|100\text{k}\|50\text{k} = 28.57$ kΩ, $v_x = -v_-$; output: $a_vv_x$ through $R_o$ into $R_2$ (100 kΩ): factor $100/1100 = 0.0909$. $a = -28.57\text{k}\times1000\times0.0909 = -2.597$ MΩ.
- $T = af = 25.97$ (closed-loop $a/(1+T) = -96.3$ kΩ, ideal $-R_2 = -100$ kΩ; exact $-96.26$ kΩ). This is the standard unilateral split that neglects the feedback network's feed-forward $y_{21f} = -10\ \mu$S against $y_{21a} = a_v/R_o = 1$ mS; keeping it in the forward term gives $T = 25.7$.
- Not the same quantity: the return ratio of the controlled source $a_v$ (with $I_i$ opened, all loading kept) is $a_v\,\frac{R_1\|R_i}{R_o+R_2+R_1\|R_i} = 35.1$, equivalently $-y_{12f}y_{21a}/[(y_{11a}+y_{11f})(y_{22a}+y_{22f}) - y_{12f}y_{21f}]$ with $R_1$ in $y_{11a}$. It is the exact loop quantity but not the y-parameter $af$ asked for; the difference is the $y_{12f}y_{21f}$ term that the two-port split drops.

## Grading notes

+2: $T$ = 25–27 with $R_2$ loading at both ports (25.97 unilateral, 25.7 with $y_{21f}$ kept; both fine). Giving the return ratio ≈ 35.1 as an additional, correctly labelled quantity next to $af \approx 26$ is not penalized. +1: an arithmetic slip, or one loading term omitted but stated. 0: correct setup, wrong value; or the return ratio of $a_v$ (≈ 35.1) correctly derived and explicitly identified as the return ratio (determinant form including the $y_{12f}y_{21f}$ term, or a break at the controlled source) instead of the y-parameter $af$; or an answer that derives $af \approx 26$ but then declares 35.1 the correct or "exact" loop gain. −2 (asserted as fact): $T$ equal to the series-shunt value (≈ 66) or to $a_v$ times a divider without loading, asserted; or ≈ 35.1 presented as the y-parameter $a\cdot f$ without recognising that it is a different (return-ratio) quantity and without deriving $af \approx 26$.
