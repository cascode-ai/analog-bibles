# Golden Solution - G062

## Reference answer

$V_O \approx 1.63$ V, $v_o/v_i = 1$.

- $I_D = 200\ \mu$A (all of it in the current source). $V_{GS} = V_t + \sqrt{2I_D/(k'W/L)} = 0.7 + \sqrt{400\ \mu/(90\ \mu \times 10)} = 0.7 + 0.667 = 1.367$ V.
- $V_O = 3 - 1.367 = 1.633$ V.
- Small-signal: $v_o/v_i = g_m R_{\text{eff}}/(1 + g_m R_{\text{eff}})$ with $R_{\text{eff}} \to \infty$ (ideal current source, $R \to \infty$, $\lambda = 0$, $g_{mb} = 0$), so the gain is exactly 1 ($g_m = 0.60$ mA/V does not matter).

## Grading notes

+2: $V_O$ = 1.60–1.66 V and gain = 1 with the reason (infinite source load, no body effect, $\lambda = 0$). +1: correct gain and a small slip in $V_O$. 0: only one of the two correct. −2 (asserted as fact): gain less than 1 claimed from an invented load or body effect, $V_O$ from a wrong formula (e.g. $V_O = 3 - V_t$, forgetting the overdrive), or the gain given as $-g_m R$.
