# Golden Solution - R281

## Reference answer

$g_m = \dfrac{I_D}{V_T} = \mu C_d\dfrac{W}{L}V_T\exp\!\left(\dfrac{V_{GS}-V_{TH}}{V_T}\right)$.

- For $V_{DS} \gg V_T$ the bracket ≈ 1: $I_D = \mu C_d\frac{W}{L}V_T^2\exp[(V_{GS}-V_{TH})/V_T]$, independent of $V_{DS}$.
- $g_m = \partial I_D/\partial V_{GS} = I_D/V_T$. (Note: numerically this equals $1/R_{on}$ of the same device at the same $V_{GS}$ in deep triode.)

## Grading notes

+2: $g_m = I_D/V_T$ or the equivalent exponential expression. +1: correct with a minor slip (e.g., an extra factor 2 flagged as uncertain), or a nonideality factor $\zeta$ introduced and stated (the given model has none). 0: correct differentiation but expressed in a wrong final form. -2 (asserted as fact): square-law $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$, $g_m = 2I_D/(V_{GS}-V_{TH})$, or $g_m = I_DV_T$.
