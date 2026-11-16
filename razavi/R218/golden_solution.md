# Golden Solution - R218

## Reference answer

The lemma still holds because the circuit remains symmetric and linear: equal devices with equal loads, driven by equal and opposite inputs, produce equal and opposite changes everywhere, and the shared node P, which lies on the symmetry axis, can only stay put.
- Intuition: when $I_1$ rises by δ, the drain of $D_1$ falls by $R_D\delta$, and via $r_O$ this slightly reduces $I_1$; on the other side $I_2$ falls by δ and its drain rises by $R_D\delta$, which slightly increases $I_2$. These corrections are equal and opposite, so $I_1 + I_2$ stays $I_T$ without any help from $V_P$; the drains move antisymmetrically, so neither side "pulls" P.
- Thevenin view: seen from P, each half (device + load) is a source $V_T = \dfrac{g_mr_O}{1+g_mr_O}V_{in}$ in series with $R_T = \dfrac{R_D + r_O}{1 + g_mr_O}$. With equal loads the two $R_T$ are equal and the two $V_T$ change by equal and opposite amounts, so $V_P$ is unchanged.
- Formal check: $\Delta I_1 + \Delta I_2 = 0$ and $\Delta V_X + \Delta V_Y = -R_D(\Delta I_1 + \Delta I_2) = 0$, so summing the two device equations gives $-2g_m\Delta V_P - 2\Delta V_P/r_O = 0$, i.e. $\Delta V_P = 0$.
- The equal loads are essential: with unequal loads the two $R_T$ differ and P moves.

## Grading notes

+2: a sound argument based on symmetry (equal and opposite drain changes, equal Thevenin resistances seen from P, or the summed KCL showing $\Delta V_P = 0$), with the role of the equal loads identified. +1: correct symmetry argument without addressing why $r_O$ does not break it. 0: correct conclusion with a vague or partly wrong justification. -2 (asserted as fact): claiming $V_P$ does change with λ ≠ 0, or an argument that relies on the drains moving in the same direction.
