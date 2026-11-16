# Golden Solution - G069

## Reference answer

$|G_m| = g_{m1}\, g_{m2}\, r_{o1} \approx 0.097$ A/V ≈ 97 mA/V (for positive $v_i$ the short-circuit current flows out of the output node into the short).

- DC: $M_1$ carries $I_2 = 100\ \mu$A; $M_2$ carries $I_1 - I_2 = 100\ \mu$A.
- $W_1/L_{\text{eff}} = 250$, $W_2/L_{\text{eff}} = 83.3$. $g_{m1} = \sqrt{2(65\ \mu)(250)(100\ \mu)} = 1.80$ mA/V; $g_{m2} = \sqrt{2(194\ \mu)(83.3)(100\ \mu)} = 1.80$ mA/V.
- $\lambda_p = 0.04/0.12 = 0.333\ \mathrm{V^{-1}}$, $r_{o1} = 1/(0.333 \times 100\ \mu) = 30$ kΩ.
- With $v_o = 0$: KCL at the drain of $M_1$ (gate of $M_2$, with the ideal source $I_2$): $v_2/r_{o1} + g_{m1} v_i = 0$, so $v_2 = -g_{m1} r_{o1} v_i$ ($g_{mb1}$ is irrelevant because $v_o = 0$). The output current is then $g_{m2} v_2$ ($r_{o2}$ and the ideal source $I_1$ carry no signal current since $v_o = 0$): $|i_o| = g_{m1} g_{m2} r_{o1} v_i$.
- $G_m = 1.8\ \mathrm{m} \times 1.8\ \mathrm{m} \times 30\ \mathrm{k} = 0.097$ A/V, i.e. about $g_{m2} r_{o1} \approx 54$ times the $g_{m1}$ of a simple source follower. (General form with finite $r_2$: $g_{m1}(r_{o1}\|r_2)(g_{m2} + 1/r_2)$.)

## Grading notes

+2: $|G_m| \approx 97$ mA/V (90–103 mA/V) from $g_{m1} g_{m2} r_{o1}$ with correct $g_{m1}$, $g_{m2}$, $r_{o1}$; either sign accepted if the direction convention is clear. +1: correct expression with one slip in $L_{\text{eff}}$-based numbers (e.g. $\lambda$ with $L_{\text{drwn}}$). 0: correct expression $g_{m1}g_{m2}r_{o1}$ but no or wrong numbers through several slips. −2 (asserted as fact): $G_m = g_{m1}$ or $g_{m1} + g_{mb1}$ (simple follower), $G_m = g_{m2}$, or a result that includes $r_{o2}$ or $1/(g_{m1}r_{o1})$ in a way that changes it by more than 10%.
