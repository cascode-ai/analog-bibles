# Golden Solution - A087

## Reference answer

$R_{out} = 2R \,\|\, 2r_{ds} = \dfrac{2Rr_{ds}}{R + r_{ds}}$; for $g_m > g_{ds} > 1/R$ ($R \gg r_{ds}$), $R_{out} \approx 2r_{ds}$. The divider feedback exactly cancels the cascode multiplication.

- Choose the controlled source $g_{m2}v_{gs2}$ as $k$. With $g_{m2} = 0$: $R_{out}(k=0) = 2R \,\|\, (r_{ds1} + r_{ds2})$ (M1's $g_m$ is inactive since $v_{gs1} = 0$).
- Port shorted ($v_{out} = 0$): the gate of M2 is at ac ground, the injected current $g_{m2}v_c'$ flows into the node X (M2 source) that sees $r_{ds1}\|r_{ds2}$ to ground, so $v_c = -v_X$ and $RR_{short} = g_{m2}(r_{ds1}\|r_{ds2}) = g_mr_{ds}/2$.
- Port open ($i_{out} = 0$): KCL at the output and at X gives $v_{out} = -2Rv_X/r_{ds1}$ and $v_{gs2} = v_{out}/2 - v_X = -v_X(1 + R/r_{ds1})$, with $v_X = g_{m2}v_c'\,r_{ds1}r_{ds2}/(r_{ds1} + r_{ds2} + 2R)$. Hence $RR_{open} = g_{m2}r_{ds2}(r_{ds1} + R)/(r_{ds1} + r_{ds2} + 2R)$, which equals $g_mr_{ds}/2$ for identical devices.
- General form: $R_{out} = [2R\|(r_{ds1} + r_{ds2})]\,\dfrac{1 + g_{m2}r_{ds1}r_{ds2}/(r_{ds1} + r_{ds2})}{1 + g_{m2}r_{ds2}(r_{ds1} + R)/(r_{ds1} + r_{ds2} + 2R)}$. For identical devices the two return ratios are equal, so $R_{out} = 2R\|2r_{ds}$, independent of $g_m$. With $R \gg r_{ds}$: $R_{out} \approx 2r_{ds}$.
- Alternative choice of $k$: the divider gain $v_{g2} = k_fv_{out}$ ($k_f = 1/2$). With $k_f = 0$ the circuit is an ordinary cascode, $R_{out}(0) = 2R\,\|\,(2r_{ds} + g_mr_{ds}^2)$; with the port shorted $v_{out} = 0$, so $RR_{short} = 0$; with it open $RR_{open} = R_{out}(0)\,g_mg_{ds}/[2(g_m + 2g_{ds})]$, and $R_{out}(0)/(1 + RR_{open}) = 2R\,\|\,2r_{ds}$ again.
- (Directly: half of $v_{out}$ reaches M2's gate, which offsets the cascode action, so the transistor stack looks like $r_{ds1} + r_{ds2}$.)

## Grading notes

+2: $R_{out} = 2R\|2r_{ds}$ (or an equivalent expression reducing to it for identical devices) simplified to ≈ $2r_{ds}$, with Blackman's formula applied (either with $g_{m2}$ as the controlled source, giving both return ratios $g_mr_{ds}/2$, or with the divider gain $v_{g2} = k_fv_{out}$, $k_f = 1/2$, as the controlled source, giving $R_{out}(k_f = 0)$ = the ordinary cascode $2r_{ds} + g_mr_{ds}^2$ in parallel with $2R$, $RR_{short} = 0$ and $RR_{open} = R_{out}(0)\,g_mg_{ds}/[2(g_m + 2g_{ds})]$). +1: correct final result reached by direct nodal analysis instead of Blackman's formula, or Blackman's formula correctly set up with an algebra slip in one return ratio. 0: correct $R_{out}(k = 0)$ and one correct return ratio but no final result. −2 (asserted as fact): $R_{out} \approx g_mr_{ds}^2$ (ordinary cascode), $R_{out} \approx R$ or $2R$, or the gate of M2 treated as an ac ground.
