# Golden Solution - R113

## Reference answer

$A_v = \dfrac{g_{m1}r_{O1}r_{O2}(g_{m2}R_D - 1)}{R_D + r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}}$; for $r_O \to \infty$, $A_v \approx g_{m1}(R_D - 1/g_{m2})$ — positive (non-inverting) if $g_{m2}R_D > 1$.

- Node $A$ (drain of $M_1$, gate of $M_2$, bottom of $R_D$); $M_2$ (PMOS, source at $V_{DD}$) drives the output.
- KCL at $A$: $(v_{out} - v_A)/R_D = g_{m1}v_{in} + v_A/r_{O1}$. KCL at the output: $-g_{m2}v_A - v_{out}/r_{O2} = (v_{out} - v_A)/R_D$.
- Intuition (λ = 0): the same current $g_{m1}v_{in}$ flows through $M_2$, $R_D$ and $M_1$; $v_A = -g_{m1}v_{in}/g_{m2}$ and $v_{out} = v_A + g_{m1}v_{in}R_D$.

## Grading notes

+2: the exact expression or an equivalent form, or the large-$r_O$ result $g_{m1}(R_D - 1/g_{m2})$ clearly stated as an approximation. +1: right structure with one algebra slip. 0: correct node equations but unsolved or wrongly simplified. -2 (asserted as fact): $M_2$ treated as a diode-connected load at the output ($-g_{m1}/g_{m2}$ type), gain $-g_{m1}(R_D + 1/g_{m2})$ with wrong sign structure, or the gate of $M_2$ read as connected to the output.
