# Golden Solution - grsim-04-18

## Reference answer

$G_m[dm] \approx 0.907$ mA/V (exact small-signal solution with all $r_o$'s: 0.906 mA/V); without mismatch $G_m[dm] = g_m = 1.0$ mA/V (0.999 mA/V with $r_o$'s). The mismatch lowers $G_m[dm]$ by ≈ 9 %, almost entirely through $g_{m3} \ne g_{m4}$.

Derivation ($r_o \to \infty$, $r_{tail} \to \infty$): with $v_{i1} = v_{id}/2$, $v_{i2} = -v_{id}/2$, the tail node settles at $v_t = \dfrac{g_{m1}v_{i1} + g_{m2}v_{i2}}{g_{m1}+g_{m2}}$, so $i_1 = -i_2 = \dfrac{g_{m1}g_{m2}}{g_{m1}+g_{m2}}v_{id}$. The mirror delivers $(g_{m4}/g_{m3})i_1$ to the output, so $i_{out} = i_1(1 + g_{m4}/g_{m3})$ and
$G_m[dm] = \dfrac{g_{m1}g_{m2}}{g_{m1}+g_{m2}}\cdot\dfrac{g_{m3}+g_{m4}}{g_{m3}} = g_{m1-2}\dfrac{1 - (\Delta g_{m1-2}/2g_{m1-2})^2}{1 + \Delta g_{m3-4}/(2g_{m3-4})}$ (exact in this limit).
Numbers: $1.0\times(1 - 0.05^2)/(1 + 0.1) = 0.9068$ mA/V. A linear small-signal simulation (VCCS + resistors, or transistors sized to these $g_m$, $r_o$) gives 0.906 mA/V.

## Grading notes

A correct answer derives the expression (exact for $r_o$, $r_{tail} \to \infty$), gives 0.90–0.91 mA/V with mismatch and ≈ 1.0 mA/V without, and notes that the input-pair mismatch enters only to second order while the mirror mismatch enters to first order. A simulation within ±1 % of 0.906 mA/V is correct. Treating the mismatch as changing $G_m$ by first order in $\Delta g_{m1-2}$ is wrong.
