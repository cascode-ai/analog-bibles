# Golden Solution - G313

## Reference answer

Effective $(W/L)_9 ≈ 139$, i.e. equal to the effective $W/L$ of $M_6$; with $L_9 = 1$ μm drawn ($L_{\text{eff}} = 0.82$ μm in triode) $W_9 ≈ 114$ μm, $W/L ≈ 114/1$. Then $R_Z = 1/g_{m6} ≈ 304$ Ω.

- The zero is at infinity when $R_Z = 1/g_{m6}$.
- $M_6$: 100/1, $L_{\text{eff}} = 0.72$ μm, $I_{D6} = 200$ μA (twice $M_4$'s 100 μA). $V_{ov6} = \sqrt{2 \times 200\text{ μA}/(194\text{ μA/V}^2 \times 138.9)} = 0.122$ V, $g_{m6} = 2I_D/V_{ov} = 3.28$ mA/V.
- Bias circuit: $M_{10}$ mirrors $M_8$ (equal widths), so $M_{11}$ and $M_{12}$ carry 200 μA. $M_{12}$ (100/1 at 200 μA) matches $M_6$, so $V_{GS12} = V_{GS6}$: the source of $M_{11}$ sits at the same voltage as the source of $M_9$ (the gate of $M_6$). With equal source and body voltages, $V_{GS9} = V_{GS11}$ and $V_{t9} = V_{t11}$ (the body effect cancels), so $V_{GS9} - V_{t} = V_{ov11} = 0.122$ V.
- Triode resistance $R_Z = 1/[k'_n(W/L)_9(V_{GS9} - V_t)]$. Setting it equal to $1/g_{m6} = 1/[k'_n(W/L)_6 V_{ov6}]$ with $V_{ov11} = V_{ov6}$ gives $(W/L)_{9,\text{eff}} = (W/L)_{6,\text{eff}} = 100/0.72 = 139$.
- In triode ($V_{DS} ≈ 0$) $L_{\text{eff}} = 1 - 0.18 = 0.82$ μm, so $W_9 = 139 \times 0.82 ≈ 114$ μm. (If $X_d$ is also subtracted for $M_9$, $W_9$ = 100 μm, i.e. $M_9$ a copy of $M_6$.)

## Grading notes

+2: the condition $R_Z = 1/g_{m6}$, the recognition that the replica bias makes $V_{GS9} - V_t$ equal to $V_{ov}$ of $M_6$/$M_{11}$, and $(W/L)_9$ ≈ 139 effective (≈ 114/1 drawn, or 100/1 if the solver states it keeps $X_d$ for $M_9$). +1: correct effective $W/L$ with a drawn-size slip, or a correct result obtained with the body effect handled incorrectly but harmlessly. 0: correct condition $R_Z = 1/g_{m6}$ and $g_{m6}$ value, but the gate-drive of $M_9$ evaluated wrongly. −2 (asserted as fact): $M_9$ treated as saturated, $R_Z$ set to $1/g_{m1}$, or a $W/L$ off by a large factor from a wrong current in the bias branch (e.g. 20 μA).
