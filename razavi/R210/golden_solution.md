# Golden Solution - R210

## Reference answer

$A_{DM} = -g_mR_D\,\dfrac{1 + 2g_mR_P}{1 + g_mR_D + 2g_mR_P} \approx -g_mR_D$; $A_{CM} = \dfrac{V_{out}}{V_{in,CM}} = \dfrac{2g_mR_D}{1 + g_mR_D + 2g_mR_P} \approx \dfrac{R_D}{R_P}$; CMRR $= \dfrac{1 + 2g_mR_P}{2} \approx g_mR_P$.
- With λ = 0, $M_3$ is an ideal current source: $i_1 + i_2 + i_{RP} = 0$, where $i_{RP} = (v_X - v_P)/R_P$ flows from the drain X of $M_1$ to P. Also $i_1 = g_m(v_{in1} - v_P)$, $i_2 = g_m(v_{in2} - v_P)$, $v_X = -R_D(i_1 + i_{RP})$, $v_Y = -R_Di_2$. (At dc, equal gate voltages give equal $I_{D1} = I_{D2}$, so both have the same $g_m$.)
- Common mode ($v_{in1} = v_{in2} = v_c$, $u = v_c - v_P$): $i_1 = i_2 = g_mu$, $i_{RP} = -2g_mu$, so $v_X = g_muR_D$, $v_Y = -g_muR_D$ (purely differential output; the output CM level does not move), and $i_{RP} = (v_X - v_P)/R_P$ gives $u = v_c/(1 + g_mR_D + 2g_mR_P)$; hence $A_{CM}$ above.
- Differential: solving the same equations with $v_{in1} = -v_{in2}$ gives $A_{DM}$ above.
- Mechanism: $R_P$ ties the tail node to one output, so a CM input that moves $V_P$ drives a current through $R_P$ that is taken from one side only, converting CM to DM even with an ideal tail.

## Grading notes

Three results, roughly equal weight. +2: $A_{DM}$ ≈ $-g_mR_D$ (exact form or large-$R_P$ limit), a nonzero CM gain $2g_mR_D/(1 + g_mR_D + 2g_mR_P)$ ≈ $R_D/R_P$, and CMRR ≈ $g_mR_P$ (or $(1 + 2g_mR_P)/2$). +1: all three right only to leading order with a factor-2 slip in the CM gain or CMRR. 0: $A_{DM}$ right and a CM mechanism identified but its value wrong. -2 (asserted as fact): CM gain zero / CMRR infinite (the ideal tail claimed to reject all CM), $R_P$ treated as a load in parallel with $R_D$ only (ignoring the connection to P), or $A_{DM}$ halved.
