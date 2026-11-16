# Golden Solution - R116

## Reference answer

A common-source stage $M_2$ with a diode-connected load $M_3$ and diode-connected degeneration $M_1$:
$A_v = -\dfrac{g_{m2}r_{O2}R_D}{R_D + r_{O2} + R_S + g_{m2}r_{O2}R_S}$ with $R_D = \dfrac{1}{g_{m3}} \| r_{O3}$, $R_S = \dfrac{1}{g_{m1}} \| r_{O1}$.
For large $r_O$: $A_v \approx -\dfrac{g_{m2}/g_{m3}}{1 + g_{m2}/g_{m1}} = -\dfrac{g_{m1}g_{m2}}{g_{m3}(g_{m1} + g_{m2})}$.

- Fully expanded: $A_v = -g_{m2}r_{O2}r_{O3}(1 + g_{m1}r_{O1})/D$, $D = r_{O1} + r_{O2} + r_{O3} + g_{m1}r_{O1}r_{O2} + g_{m1}r_{O1}r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3} + g_{m3}r_{O2}r_{O3} + (g_{m1} + g_{m2})g_{m3}r_{O1}r_{O2}r_{O3}$.

## Grading notes

+2: the degenerated-CS expression with $R_D = (1/g_{m3})\|r_{O3}$ and $R_S = (1/g_{m1})\|r_{O1}$, or an equivalent form. +1: the large-$r_O$ approximation stated as such, or one slip. 0: correct method with an algebra error in the final expression. -2 (asserted as fact): degeneration by $M_1$ ignored ($-g_{m2}/g_{m3}$-type), output taken at the source of $M_2$, positive gain, or diode loads replaced by $r_O$ alone.
