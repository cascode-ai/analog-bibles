# Golden Solution - R265

## Reference answer

- Define $V_{X0}$ by $(V_{DD}-V_{X0})/R_1 = \tfrac{\beta}{2}(V_{X0}-V_{TH})^2$ (the value with no capacitor current) and $V_{X1} < V_{X0}$ by $(V_{DD}-V_{X1})/R_1 = \beta(V_{X1}-V_{TH})^2$.
- Phase 1: at $t = 0^+$, $V_X = V_{X1}$ and $V_Y = V_{X1} + V_0$. Node Y connects only to $C_1$ and $M_1$, so $M_1$'s drain current flows through $C_1$ out of node X: $R_1$ must supply both $M_2$ and $M_1$, which carry equal currents $I_1 = \tfrac{\beta}{2}(V_{X1}-V_{TH})^2$ while $M_1$ is saturated. $V_X$ stays at $V_{X1}$, and $V_Y$ falls linearly with slope $-I_1/C_1$.
- Phase 2: when $V_Y$ reaches $V_{X1} - V_{TH}$ (after $t_1 = C_1(V_0 + V_{TH})/I_1$), $M_1$ enters triode, its current falls, $V_Y$ decays toward 0 (slowing down), and $V_X$ rises from $V_{X1}$ back to $V_{X0}$.
- Final state: $V_Y = 0$, $V_X = V_{X0}$, $M_1$ on with zero current, $C_1$ holding $-V_{X0}$ (Y below X).

## Grading notes

+2: $V_X$ dropping to a lower level at $t = 0^+$ (R1 supplies two equal currents) and staying flat while $V_Y$ ramps down linearly from $V_X + V_0$; then $M_1$ in triode, $V_Y \to 0$, $V_X$ recovering to the single-diode value. +1: linear ramp of $V_Y$ and final $V_Y = 0$ right but $V_X$ shown constant throughout. 0: $V_Y$ decaying toward 0 described but with wrong mechanism or initial value. -2 (asserted as fact): $V_Y$ rising, $V_Y$ settling at $V_X$ or $V_{DD}$, or $C_1$ claimed not to discharge. A wrong sentence about the connections that the rest of the answer does not use (all equations and conclusions written for the correct circuit) is a minor slip, not a misread topology: +1 if everything else is right.
