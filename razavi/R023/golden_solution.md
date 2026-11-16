# Golden Solution - R023

## Reference answer

Assuming $V_b > V_{TH}$ (and $V_b - V_{TH} < 3$ V): $M_1$ first discharges $C_1$ with a constant current $I_X = \tfrac12\beta(V_b - 0.7)^2$ (saturation), so $V_X$ ramps down linearly; when $V_X$ reaches $V_b - 0.7$ V, $M_1$ enters triode, $I_X$ decays and $V_X$ decays approximately exponentially to 0.
- Phase 1 (saturation, $V_X > V_b - V_{TH}$): $dV_X/dt = -I_X/C_1$, constant slope; it lasts $t_1 = C_1[3 - (V_b - 0.7)]/I_X$.
- Phase 2 (triode): $I_X = \beta[(V_b - 0.7)V_X - V_X^2/2]$ falls toward zero; near the end $M_1$ is a resistor $R_{on} = 1/[\beta(V_b - 0.7)]$ and $V_X \propto e^{-t/(R_{on}C_1)}$. Final $V_X = 0$, $I_X = 0$.
- $I_X(t)$: flat at $\tfrac12\beta(V_b-0.7)^2$, then decaying to zero. (If $V_b \le 0.7$ V nothing happens: $V_X$ stays at 3 V, $I_X = 0$.)

## Grading notes

+2: constant-current (saturation) linear ramp-down of $V_X$, transition to triode at $V_X = V_b - V_{TH}$, exponential-like tail to 0 V; $I_X$ flat then decaying to 0. +1: correct phases without the transition condition, or one curve ($V_X$ or $I_X$) only partly described. 0: only an RC-like exponential from the start (saturation phase missed) with otherwise sound reasoning. -2 (asserted as fact): $V_X$ settling at a nonzero value such as $V_b - V_{TH}$, $V_X$ rising, or $I_X$ growing with time.
