# Golden Solution - R201

## Reference answer

$A_v = -\dfrac{g_{m1}r_{O1}r_{O3}(1 - g_{m3}R_1)}{R_1 + r_{O1} + r_{O3} + g_{m3}r_{O1}r_{O3}}$; for $r_O \to \infty$, $A_v \to -g_{m1}\left(\dfrac{1}{g_{m3}} - R_1\right)$.
- Half circuit (P at ac ground): node A = output (drain of $M_3$, top of $R_1$), node B = drain of $M_1$ = gate of $M_3$ (bottom of $R_1$).
- KCL at A: $-g_{m3}v_B - v_A/r_{O3} = (v_A - v_B)/R_1$; at B: $(v_A - v_B)/R_1 = g_{m1}v_{in} + v_B/r_{O1}$. Solving gives the result. With λ = 0: $v_B = -(g_{m1}/g_{m3})v_{in}$ and $v_A = v_B(1 - g_{m3}R_1)$.
- The gain falls as $R_1$ grows, vanishes at $R_1 = 1/g_{m3}$ and changes sign beyond.

## Grading notes

+2: the exact expression or an equivalent form, or the λ = 0 limit $-g_{m1}(1/g_{m3} - R_1)$ given together with a correct finite-$r_O$ treatment; magnitude/sign convention consistent. Since the question names only $(g_m, r_O)$, an answer that uses one $g_m$ and one $r_O$ for all devices under a stated or evident equal-parameter assumption, e.g. $g_mr_O^2(g_mR_1 - 1)/(g_mr_O^2 + 2r_O + R_1)$, is exact and earns +2. +1: only the λ = 0 result $g_{m1}(1/g_{m3} - R_1)$ (with the minus sign between the terms). 0: correct nodal setup with an algebra error. -2 (asserted as fact): $-g_{m1}(1/g_{m3} + R_1)$ ($R_1$ read as adding to the load), $-g_{m1}/g_{m3}$ ($R_1$ ignored), or the output taken at the drain of $M_1$.
