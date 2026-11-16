# Golden Solution - A145

## Reference answer

$\dfrac{v_{o1}}{v_{ic}} = -\dfrac{g_{m1}R_L}{1 + 2(g_{m1} + g_{ds1})r_{ds5} + g_{ds1}R_L}$, with $R_L = r_{ds3}\,\|\,(1/g_{m3})$.

Equivalently, $-g_{m1}/[G_L(1 + 2(g_{m1}+g_{ds1})r_{ds5}) + g_{ds1}]$ with $G_L = g_{m3} + g_{ds3}$.

- Let $v_s$ be the source node and $i$ the current from $v_{o1}$ through M1 to the source: $i = g_{m1}(v_{ic} - v_s) + g_{ds1}(v_{o1} - v_s)$, $v_s = 2r_{ds5}\,i$ and $v_{o1} = -iR_L$. Eliminating $i$ and $v_s$ gives the result.
- With $g_{ds1} = 0$ it reduces exactly to the given expression. Since $g_{ds1} \ll g_{m1}$ and $g_{ds1}R_L \approx g_{ds1}/g_{m3} \ll 1$, $r_{ds1}$ changes the result only by a fraction of order $g_{ds1}/g_{m1}$. For $g_mr_{ds} \gg 1$ both reduce to $v_{o1}/v_{ic} \approx -1/(2g_{m3}r_{ds5}) = -g_{ds5}/(2g_{m3})$.

## Grading notes

+2: an expression equivalent to the reference (the $g_{ds1}$ terms in the right places), and the comparison: it reduces to the given result for $r_{ds1} \to \infty$, and differs negligibly because $g_{ds1} \ll g_{m1}$, giving ≈ $-1/(2g_{m3}r_{ds5})$. +1: the right result with a minor algebra slip in a second-order term, or the right approximate conclusion with the exact expression incomplete. 0: correct set-up (node equations) but the solution not finished, or only the limit stated; also a correct exact expression followed by a wrong comparison, e.g. $r_{ds1}$ said to matter (or "may not be negligible") when $r_{ds1} \approx r_{ds5}$, because $2r_{ds5}/r_{ds1}$ is compared with 1 instead of with $1 + 2g_{m1}r_{ds5} \gg 1$, whether stated as fact or tentatively. −2 (asserted as fact): an expression in which $r_{ds1}$ changes the common-mode gain substantially (e.g. by a factor of 2 or $g_mr_{ds}$), the sign of the gain positive, or the tail resistance taken as $r_{ds5}$ instead of $2r_{ds5}$ for the half circuit.
