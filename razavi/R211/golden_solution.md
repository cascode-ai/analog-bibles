# Golden Solution - R211

## Reference answer

$A_{DM} = -g_mR_D\,\dfrac{g_{m3}R_P}{1 + g_{m3}(R_D + R_P)} = -g_mR_D\,\dfrac{R_P}{R_P + R_D + 1/g_{m3}} \approx -g_mR_D$; $A_{CM} = 0$; CMRR = ∞ (within this model).
- With λ = 0 the tail $M_5$ is ideal and $M_1$, $M_2$ are matched, so a common-mode input changes neither drain current ($i_1 = i_2$ and $i_1 + i_2 = 0$). Nothing else in the circuit is driven (cascode gates at fixed bias), so no output appears: the parasitic resistor sits above the input pair and cannot convert CM to DM.
- Differential ($i_1 = g_mv_d/2 = -i_2$): with A the drain of $M_1$ (source of $M_3$), B the drain of $M_2$, $i_3 = -g_{m3}v_A$, $i_4 = -g_{m4}v_B = i_2$; KCL at A: $i_3 + (v_Y - v_A)/R_P = i_1$; at the right output: $-v_Y/R_D = i_2 + (v_Y - v_A)/R_P$; $v_X = -R_Di_3$. Solving gives $v_X = -v_Y = -\tfrac12 g_mR_D\,\dfrac{g_{m3}R_P}{1 + g_{m3}(R_D + R_P)}v_d$.
- ($R_P$ carries a dc current, so $M_3$ carries slightly less than $M_4$ and $g_{m3} \ne g_{m4}$; the result depends only on $g_{m3}$.)

## Grading notes

Three results. +2: $A_{DM}$ ≈ $-g_mR_D$ (exact form above or a correct large-$R_P$ approximation), $A_{CM} = 0$ and CMRR infinite, with the reason (ideal tail and matched pair: CM input changes no current). +1: CM part right, $A_{DM}$ with a minor slip. 0: $A_{DM}$ right but the CM gain left undetermined. -2 (asserted as fact): a nonzero CM gain (e.g., $R_D/R_P$ by analogy with a resistor to the tail node), or $A_{DM}$ halved or doubled.
