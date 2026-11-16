# Golden Solution - G105

## Reference answer

$\dfrac{i_{bias}}{v_{dd}} \approx \dfrac{g_{m1}/r_{o2} + g_{m2}/r_{o3}}{g_{m1}(1 + g_{m2}R) - g_{m2}}$ (with $g_{m3} = g_{m4}$ and $g_mr_o \gg 1$). Using the bias condition $V_{ov1} - V_{ov2} = I_{BIAS}R$, the denominator equals $g_{m2}\left(1 - \sqrt{(W/L)_1/(W/L)_2}\right)$. The ratio vanishes as $r_{o2}, r_{o3} \to \infty$: supply sensitivity comes only from the output resistances of $M_2$ and $M_3$ (the diode-connected $M_1$, $M_4$ contribute only higher-order terms).

Derivation (small signals, $v_{dd}$ applied to the supply):
- $M_4$ (diode): $v_{dd} - v_g \approx i_{bias}/g_{m4}$.
- $M_3$: $i_3 = g_{m3}(v_{dd} - v_g) + (v_{dd} - v_a)/r_{o3} \approx i_{bias} + v_{dd}/r_{o3}$ (since $g_{m3} = g_{m4}$ and $v_a \ll v_{dd}$).
- $M_1$ (diode): $v_a \approx i_3/g_{m1}$.
- $M_2$: $i_{bias} = g_{m2}(v_a - v_s) + (v_g - v_s)/r_{o2}$ with $v_s = i_{bias}R$ and $v_g \approx v_{dd}$: $i_{bias} \approx \dfrac{g_{m2}}{g_{m1}}\left(i_{bias} + \dfrac{v_{dd}}{r_{o3}}\right) - g_{m2}Ri_{bias} + \dfrac{v_{dd}}{r_{o2}}$.
- Solving: $i_{bias}\left(1 + g_{m2}R - \dfrac{g_{m2}}{g_{m1}}\right) = v_{dd}\left(\dfrac{1}{r_{o2}} + \dfrac{g_{m2}}{g_{m1}r_{o3}}\right)$, which is the result above. (An exact nodal solution reduces to this when $g_mr_o \gg 1$.)
- Example: $I$ = 100 µA, $V_{ov1}$ = 0.2 V, $(W/L)_2 = 4(W/L)_1$ ($g_{m1}$ = 1 mS, $g_{m2}$ = 2 mS, R = 1 kΩ), $r_o$ = 200 kΩ gives ≈ 15 µA/V.

## Grading notes

+2: an expression equivalent (to first order in $1/(g_mr_o)$) to the reference, containing both the $r_{o2}$ and the $r_{o3}$ contributions and the loop denominator $g_{m1}(1+g_{m2}R) - g_{m2}$ (or its $g_{m2}(1-\sqrt{(W/L)_1/(W/L)_2})$ form). An exact nodal-analysis result is also +2. +1: one of the two $r_o$ terms missing; or a correct full (or exact nodal) expression followed by an over-simplified form that drops the $-g_{m2}$ loop term. 0: only an over-simplified form with denominator $g_{m1}(1+g_{m2}R)$ or $g_{m1}g_{m2}R$ given as the result (at the circuit's own bias point $R = 2(1/g_{m1} - 1/g_{m2})$, so the true denominator equals $g_{m1}g_{m2}R/2$ and these forms are off by a factor of 2 or more, not by higher-order terms in $1/g_mr_o$); correct nodal equations not solved; or the right qualitative conclusion (sensitivity only through $r_o$) without an expression. -2 (asserted as fact): zero sensitivity claimed with finite $r_o$, sensitivity of order $1/R$ (as for a resistor-fed reference), a result dominated by $r_{o1}$ or $r_{o4}$, or a denominator of opposite sign (implying an unstable bias point).
