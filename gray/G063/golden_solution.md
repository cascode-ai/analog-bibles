# Golden Solution - G063

## Reference answer

$V_O \approx 1.50$ V ($V_t \approx 0.83$ V), $v_o/v_i \approx 0.94$.

- $I_D = 200\ \mu$A, overdrive $\sqrt{2I_D/(k'W/L)} = 0.667$ V. With $V_{SB} = V_O$: $V_O = 3 - 0.667 - V_t(V_O)$, $V_t = 0.7 + 0.19(\sqrt{0.61 + V_O} - \sqrt{0.61})$. Solving: $V_O = 1.505$ V, $V_t = 0.828$ V.
- $g_m = \sqrt{2k'(W/L)I_D} = 0.599$ mA/V; $\chi = g_{mb}/g_m = \gamma/(2\sqrt{2\phi_f + V_{SB}}) = 0.19/(2\sqrt{2.115}) = 0.065$.
- With an ideal current-source load ($R \to \infty$, $\lambda = 0$): $v_o/v_i = g_m/(g_m + g_{mb}) = 1/(1+\chi) = 0.939$.

## Grading notes

+2: $V_O$ = 1.47–1.53 V and gain 0.93–0.95 from $1/(1+\chi)$ with $\chi$ evaluated at the operating point. +1: correct method with a small slip in one value, or $\chi$ evaluated at a slightly different $V_{SB}$. 0: $V_O$ correct but gain given as 1 (body effect ignored in the small-signal part) or vice versa. −2 (asserted as fact): body effect lowering the threshold, gain greater than 1, gain computed as $g_m/(g_m + g_{mb})$ with $g_{mb}$ from a wrong formula giving > 10% error, or $V_O$ computed with $V_{SB} = 0$ while claiming the body effect is included.
