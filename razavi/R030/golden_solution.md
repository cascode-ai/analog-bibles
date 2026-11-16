# Golden Solution - R030

## Reference answer

$C_2$ plays no role: $C_1$ is connected directly between drain and source of $M_1$, so it discharges through $M_1$ in a local loop and no net current enters $C_2$; $V_S$ stays at 0 V. Hence $V_X$ (= voltage of $C_1$) ramps down linearly with constant $I_X = \tfrac12\beta(2 - 0.7)^2 = 0.845\beta$ until $V_X = 1.3$ V, then $M_1$ is in triode and $V_X$ decays roughly exponentially to 0 while $I_X$ decays to 0.
- KCL at X: $I_X + C_1\,d(V_X - V_S)/dt = 0$; at S: $C_2\,dV_S/dt = I_X + C_1\,d(V_X - V_S)/dt = 0$, so $V_S = 0$ for all $t$.
- Saturation phase lasts $t_1 = C_1(3 - 1.3)/(0.845\beta)$; afterwards $R_{on} \to 1/(1.3\beta)$, time constant $C_1/(1.3\beta)$.

## Grading notes

+2: $V_S$ stays at 0 (no net current into $C_2$), constant-current linear ramp of $V_X$ from 3 V to 1.3 V with $I_X = \tfrac12\beta(1.3\ \mathrm{V})^2$, then triode decay to 0; $I_X$ flat then decaying. +1: correct conclusion that $C_1$ discharges through $M_1$ to 0 but the saturation phase or the reason $C_2$ is unaffected not stated. 0: correct about $C_2$ but the discharge waveform wrong. -2 (asserted as fact): charge sharing between $C_1$ and $C_2$, $V_S$ rising, or $V_X$ settling at a nonzero value.
