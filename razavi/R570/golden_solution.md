# Golden Solution - R570

## Reference answer

Time constant $\tau = R_{on}C_1$ ($C_2$ does not enter). Energy dissipated in the switch: $E = \tfrac12 C_1V_{in0}^2$, independent of $R_{on}$.

- With an ideal op amp, node X stays at 0 V. $C_1$, charged to $V_{in0}$, discharges through $R_{on}$: $V_A(t) = V_{in0}e^{-t/(R_{on}C_1)}$.
- The current $i(t) = (V_{in0}/R_{on})e^{-t/\tau}$ flows through $C_1$ into X and on into $C_2$ (supplied by the op-amp output), so $V_{out}(t) = (C_1/C_2)V_{in0}(1 - e^{-t/\tau})$.
- $E = \int_0^\infty i^2R_{on}\,dt = (V_{in0}^2/R_{on})(\tau/2) = \tfrac12 C_1V_{in0}^2$: all the energy initially stored on $C_1$.

## Grading notes

+2: $\tau = R_{on}C_1$ with X held at virtual ground, and $E = \tfrac12 C_1V_{in0}^2$. +1: one of the two right and the other with a minor slip (e.g., the factor ½ missing). 0: one right and the other missing. -2 (asserted as fact): $\tau = R_{on}(C_1 + C_2)$, $R_{on}C_2$ or $R_{on}C_1C_2/(C_1 + C_2)$ (X treated as a floating node), an energy that depends on $R_{on}$, or an energy expressed through $C_2$.
