# Golden Solution - R388

## Reference answer

$Z_{out} = \dfrac{C_1+C_2}{C_1}\cdot\dfrac{1 + (g_{m1}+g_{mb1})R_S}{g_{m2}(g_{m1}+g_{mb1})R_S} = \left(1 + \dfrac{C_2}{C_1}\right)\left[\dfrac{1}{g_{m2}} + \dfrac{1}{g_{m2}(g_{m1}+g_{mb1})R_S}\right]$, which tends to $(1 + C_2/C_1)/g_{m2}$ for large $(g_{m1}+g_{mb1})R_S$.

- With an ideal current-source load and λ = 0 the open-loop output resistance is infinite; the feedback through $C_1$, $C_2$ and $M_2$ (which returns a current to the source of $M_1$) makes it finite.
- Test voltage $V_X$ at the output, $V_{in}$ = 0: $V_P = V_XC_1/(C_1+C_2)$; $M_2$ draws $g_{m2}V_P$ from the source node of $M_1$, and this current divides between $R_S$ and the source of $M_1$ (resistance $1/(g_{m1}+g_{mb1})$): $I_{D1} = V_X\dfrac{C_1}{C_1+C_2}\,g_{m2}\dfrac{R_S}{R_S + 1/(g_{m1}+g_{mb1})}$.
- With the ideal current source, $I_X = I_{D1}$, so $Z_{out} = V_X/I_X$ as above. This is also the limit $R_D \to \infty$ of $R_D/(1 + \text{loop gain})$. The series $C_1$–$C_2$ branch from the output to ground is negligible at low frequencies.
- (If λ is kept: $Z_{out} = \dfrac{1 + (g_{m1}+g_{mb1}+1/r_{O1})R'}{1/r_{O1} + g_{m2}R'(g_{m1}+g_{mb1}+1/r_{O1})C_1/(C_1+C_2)}$ with $R' = R_S \| r_{O2}$, which reduces to the result above for $r_O \to \infty$.)

## Grading notes

+2: an expression equivalent to the reference, including $g_{mb1}$ and the divider ratio $C_1/(C_1+C_2)$. A correct result that also carries $r_{O1}$, $r_{O2}$ is fine. +1: correct except the body effect left out ($g_{mb1}$ = 0), or a slip in one factor. 0: correct method (feedback current sensed through the divider, divided between $R_S$ and the source of $M_1$) with an algebra error in the final form. -2 (asserted as fact): $Z_{out}$ infinite (feedback ignored), the divider ratio inverted to $C_2/(C_1+C_2)$, feedback claimed to raise the output impedance, or $M_2$'s current returned to the wrong node.
