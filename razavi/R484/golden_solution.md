# Golden Solution - R484

## Reference answer

The zero is at $s_z = \dfrac{1}{C_C(1/g_{m9} - R_z)}$: in the right half plane for $R_z < 1/g_{m9}$ (it reduces to $g_{m9}/C_C$ for $R_z = 0$), at infinity for $R_z = 1/g_{m9}$, and in the left half plane for $R_z > 1/g_{m9}$.

Derivation (zero-output method):
- At $s = s_z$, $V_{out} = 0$ while the gate voltage $V_1 \ne 0$. Then $R_L$ and $C_L$ carry no current, so the KCL at the output involves only $M_9$ and the $R_z$–$C_C$ branch.
- The small-signal current of $M_9$ into the output is $-g_{m9}V_1$ (PMOS with its source at ac ground). The current from the gate node through the branch into the output is $V_1/(R_z + 1/sC_C)$.
- KCL: $-g_{m9}V_1 + \dfrac{V_1}{R_z + 1/(sC_C)} = 0$, so $R_z + \dfrac{1}{sC_C} = \dfrac{1}{g_{m9}}$ and $s_z = \dfrac{1}{C_C(g_{m9}^{-1} - R_z)}$.
- Equivalently, the numerator of the full transfer function is proportional to $g_{m9} - Y_c$ with $Y_c = sC_C/(1 + sR_zC_C)$, i.e. to $g_{m9} - sC_C(1 - g_{m9}R_z)$. $R_S$, $C_E$, $R_L$ and $C_L$ affect only the poles.
- The result is exact in this model. The "≈" accounts for the neglected $C_{GD9}$ (which would add $sC_{GD9}$ to the feedforward admittance).

## Grading notes

+2: valid derivation (zero-output/KCL method or the numerator of the full transfer function) reaching $1/[C_C(g_{m9}^{-1} - R_z)]$, with the right-half-plane/left-half-plane interpretation. +1: correct expression with a sloppy sign convention or an incomplete justification of why $R_S$, $C_E$, $R_L$, $C_L$ drop out. 0: correct setup with an algebra slip. -2 (asserted as fact): a zero depending on $R_S$, $C_E$, $R_L$ or $C_L$, an expression such as $1/[C_C(R_z + 1/g_{m9})]$, or the claim that $R_z$ shifts the poles but not the zero.
