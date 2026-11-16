# Golden Solution - G153

## Reference answer

A rising staircase: the output jumps by $+(C_S/C_I)V_s = +0.2$ V once per clock period (at each $\phi_2$) and stays flat in between. After 20 periods it reaches about +4.0 V at $t = 20\ \mu$s.

- $\phi_1$: $M_1$ grounds the top plate (node Top) and $M_3$ connects the bottom plate to $V_s$, so $C_S$ holds charge $-C_SV_s$ on its Top side. The summing node is isolated, so $C_I$ keeps its charge and $V_o$ is constant.
- $\phi_2$: $M_4$ grounds the bottom plate and $M_2$ connects Top to the virtual-ground summing node. $C_S$ is fully discharged, and its charge is moved onto $C_I$. Charge conservation, $-C_SV_s - C_IV_o[n] = -C_IV_o[n+1]$, gives $V_o[n+1] = V_o[n] + (C_S/C_I)V_s[n]$: a noninverting, delayed integrator.
- With $V_s = 1$ V: step = 1 pF/5 pF × 1 V = 0.2 V per 1-μs period. The first step occurs during the first $\phi_2$ (about 0.5 μs if $\phi_1$ comes first), giving 0.2, 0.4, 0.6, … V. After 20 transfers $V_o = 4.0$ V (3.8 V if the 20th $\phi_2$ has not yet occurred by 20 μs).
- With zero rise time each step is vertical. $C_L$ has no effect because the op amp is ideal. The average slope is 0.2 V/μs, i.e. a time constant $\tau = C_I/(fC_S) = 5\ \mu$s.

## Grading notes

+2: staircase rising in 0.2-V steps once per period (positive direction), reaching ≈ 4 V (3.8–4.0 V) at 20 μs, with the step size from $C_S/C_I$ and the steps placed in $\phi_2$. +1: correct staircase and final value but the timing of the steps (which phase) or the hold behaviour left unclear, or a smooth ramp of +0.2 V/μs described while noting it is updated once per clock. 0: right step size but wrong number of steps or a wrong final value through a counting slip. -2 (asserted as fact): negative-going output (inverting integrator) from a misread switch arrangement, step size $C_I/C_S = 5$ V, a steady-state output that saturates or decays for an ideal op amp, or the output said to stay at 0.
