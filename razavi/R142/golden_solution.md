# Golden Solution - R142

## Reference answer

Proof: small-signal model with $V_B$ at ac ground. $M_1$ (gate and source at ac ground) reduces to $r_{O1}$ from the output to ground. $M_2$ has its source (and bulk) at $v_{dd}$ and its gate at ac ground, so $v_{sg2} = v_{dd}$ and no body effect arises. The current flowing from the source of $M_2$ into the output:
$i = g_{m2}v_{dd} + (v_{dd} - v_{out})/r_{O2}$, and it must equal $v_{out}/r_{O1}$. Hence
$v_{out}(1/r_{O1} + 1/r_{O2}) = v_{dd}(g_{m2} + 1/r_{O2})$ → $\dfrac{v_{out}}{v_{dd}} = \dfrac{(g_{m2}r_{O2} + 1)r_{O1}}{r_{O1} + r_{O2}} = \left(g_{m2} + \dfrac{1}{r_{O2}}\right)(r_{O1}\|r_{O2})$.
(If the bulk of $M_2$ were held at a fixed potential instead, $g_{m2}$ would become $g_{m2} + g_{mb2}$.) The result is about half the stage's voltage gain: supply noise reaches the output strongly.

## Grading notes

+2: correct small-signal reasoning ($V_B$ at ac ground, $v_{sg2} = v_{dd}$, $M_1$ as $r_{O1}$) leading to the stated expression. +1: correct result with a minor gap (e.g., the body-effect remark missing when relevant) or a sign slip corrected later. 0: correct setup but the algebra not completed. -2 (asserted as fact): the gate of $M_2$ treated as moving with $V_{DD}$ (giving $r_{O1}/(r_{O1}+r_{O2})$), a different final expression asserted as proved, or $M_1$ treated as a current source with $g_{m1}$ driven by the supply.
