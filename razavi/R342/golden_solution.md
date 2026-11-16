# Golden Solution - R342

## Reference answer

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{\gamma g_{m3}}{g_{m1}^2} + \frac{1}{g_{m1}^2R_D}\right)$$
$M_2$ contributes nothing.

- With λ = 0, $M_1$ and $M_3$ are ideal current sources at node X, so the current through $M_2$ (and $R_D$) is fixed by them: $I_{M2} = I_{D1} - |I_{D3}|$ plus small-signal $g_{m1}V_{in} + I_{n1} - I_{n3}$. $M_2$'s own noise current can only change $V_X$, not the current in $R_D$.
- $V_{out} = -R_D(g_{m1}V_{in} + I_{n1} - I_{n3}) + R_DI_{n,RD}$; gain $-g_{m1}R_D$; $M_3$'s noise appears like a load current source: $4kT\gamma g_{m3}/g_{m1}^2$.
- Design remark: the current injected by $M_3$ lets $M_1$ run at high current (large $g_{m1}$) while $R_D$ carries less dc current, but it costs the $g_{m3}$ term.

## Grading notes

+2: all three terms with $M_2$ correctly excluded. +1: correct result with weak justification for dropping $M_2$. 0: an $M_2$ term included but marked as negligible/uncertain, rest right. -2 (asserted as fact): $M_3$ treated as noiseless or as part of the signal path, a nonzero $M_2$ contribution asserted, or the gain taken as $g_{m1}R_D$ times a current-division factor between $M_2$ and $M_3$.
