# Golden Solution - R012

## Reference answer

$M_1$ is a source follower-like device (drain at $V_{DD}$, source at $V_X$) that is saturated whenever on; $I_X$ falls quadratically and $g_m$ almost linearly to zero, reaching cutoff earlier than without body effect.
- The divider sits between $V_{DD}$ and $V_X$, so $V_{GS} = (3 - V_X)\dfrac{R_2}{R_1+R_2}$; $V_{SB} = V_X$, so $V_{TH} = 0.7 + 0.45(\sqrt{0.9+V_X} - \sqrt{0.9})$ rises with $V_X$.
- $V_{DS} = 3 - V_X \ge V_{GS}$, hence saturation whenever on: $I_X = \tfrac12\beta\left[(3 - V_X)\dfrac{R_2}{R_1+R_2} - V_{TH}(V_X)\right]^2$ (assuming $3R_2/(R_1+R_2) > 0.7$ V).
- Cutoff where $(3 - V_X)R_2/(R_1+R_2) = V_{TH}(V_X)$, i.e. below the no-body-effect value $3 - 0.7(R_1+R_2)/R_2$; $I_X = g_m = 0$ above it.
- $g_m = \beta\left[(3 - V_X)\dfrac{R_2}{R_1+R_2} - V_{TH}(V_X)\right]$: decreases to zero with slope magnitude $\beta\,[R_2/(R_1+R_2) + dV_{TH}/dV_X]$ (steeper than the divider alone).

## Grading notes

+2: correct $V_{GS}$ (fraction $R_2/(R_1+R_2)$ of $V_{DD} - V_X$), saturation whenever on, quadratic decrease of $I_X$ and near-linear decrease of $g_m$ to zero, and the body effect ($V_{SB} = V_X$) noted as raising $V_{TH}$ and bringing cutoff earlier. +1: same without the body effect, or a slip in the cutoff expression. 0: shapes right only qualitatively with a wrong region claim that does not change the trend. -2 (asserted as fact): $I_X$ increasing with $V_X$, triode operation, source taken at ground, or $M_1$ treated as a PMOS.
