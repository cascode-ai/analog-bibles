# Golden Solution - G064

## Reference answer

$V_O \approx 1.48$ V, $v_o/v_i \approx 0.924$.

- Now $I_D = 200\ \mu\mathrm{A} + V_O/R$. Solving $V_O = 3 - V_t(V_O) - \sqrt{2I_D/(k'W/L)}$ with $V_{SB} = V_O$: $V_O = 1.482$ V, $I_D = 214.8\ \mu$A, $V_t = 0.826$ V.
- $g_m = \sqrt{2k'(W/L)I_D} = 0.621$ mA/V, $\chi = \gamma/(2\sqrt{0.61 + 1.482}) = 0.0657$, $g_{mb} = 0.0408$ mA/V.
- $v_o/v_i = \dfrac{g_m R}{1 + (g_m + g_{mb})R} = \dfrac{62.1}{1 + 66.2} = 0.924$.

## Grading notes

+2: $V_O$ = 1.45–1.51 V and gain 0.915–0.935 with the body effect and $R$ both included. +1: one value with a small slip, or the extra 15 µA through $R$ neglected in the bias (giving $V_O \approx 1.50$ V) with a correct gain formula. 0: gain formula right but body effect omitted (≈ 0.98), or $V_O$ right and gain wrong. −2 (asserted as fact): gain $> 1$, $R$ treated as being in series with the source, or a gain formula like $g_m R/(1 + g_m R)$ presented while claiming body effect is included and giving > 3% error.
