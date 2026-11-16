# Golden Solution - R125

## Reference answer

$V_Y$ starts at $V_{b1} + V_{DD}$ and ramps down linearly (constant current from $M_2$, or from $M_1$ if $M_2$ starts in triode), then slows and decays to 0; $V_X$ stays constant at first, then follows $V_Y$ down to 0. Finally $V_X = V_Y = 0$ and $C_1$ holds $-V_{b1}$.

- $C_1$ is connected between $Y$ (+) and the fixed bias node $V_{b1}$ (−), so $V_Y(0) = V_{b1} + V_{DD}$. Current flows $Y \to M_1 \to X \to M_2 \to$ ground: $C_1\,dV_Y/dt = -I$.
- Phase 1: $M_2$ saturated (current source $I_2 = \tfrac12\beta_2(V_{b2} - 0.7)^2$), $M_1$ saturated (drain high): $V_Y$ falls linearly with slope $-I_2/C_1$; $V_X = V_{b1} - V_{TH1}(V_X) - \sqrt{2I_2/\beta_1}$, constant (assumed ≥ $V_{b2} - 0.7$ V).
- Phase 2: when $V_Y < V_{b1} - V_{TH1}$, $M_1$ enters triode and $V_X$ follows $V_Y$ down, slightly below it; the current stays $I_2$ while $M_2$ remains saturated, so the linear ramp continues.
- Phase 3: when $V_X < V_{b2} - 0.7$ V, $M_2$ enters triode, the current falls, and $V_Y$, $V_X$ decay together asymptotically to 0. $M_1$ stays on throughout (gate fixed at $V_{b1}$, source falling).
- The other initial case is equally possible (sizes and biases are not given): if $V_X$ from the saturated-$M_1$ balance is below $V_{b2} - 0.7$ V, $M_2$ is in triode from the start and the constant current is set by the saturated $M_1$ ($V_X$ again constant). Then the ramp slope starts to fall as soon as $M_1$ enters triode ($V_Y < V_{b1} - V_{TH1}$), and both voltages decay to 0 as before.
- $X$ has no capacitance, so $V_X$ takes its current-balance value instantly at $t = 0$; it does not rise during the discharge.

## Grading notes

+2: $V_Y(0) = V_{b1} + V_{DD}$; $V_Y$ falls linearly at constant current while the current-setting device stays saturated; $V_X$ constant at $V_{b1} - V_{GS1}$ during that interval, then falling with (and below) $V_Y$ after $M_1$ enters triode; with $M_2$ saturated the linear ramp continues until $V_X < V_{b2} - 0.7$ V, after which both decay asymptotically to 0 ($C_1$ ends at $-V_{b1}$). Either initial case is acceptable: $M_2$ saturated (current $\tfrac12\beta_2(V_{b2} - 0.7)^2$, ramp continuing past $M_1$'s triode entry) or $M_2$ in triode from the start (current set by the saturated $M_1$, slope falling once $M_1$ enters triode). An instantaneous step of $V_X$ at $t = 0$ from an assumed pre-$t = 0$ value to its current-balance value is not an error. +1: correct overall but the initial value taken as $V_{DD}$ (ignoring the bias offset), or, with $M_2$ saturated, the slope change placed at $M_1$'s triode entry instead of $M_2$'s (one phase missing). 0: correct final state but waveform shapes wrong. -2 (asserted as fact): $V_Y$ settling at $V_{b1} - V_{TH}$ or another nonzero value, $C_1$ read as connected to ground, or $V_X$ increasing during the discharge ($t > 0$).
