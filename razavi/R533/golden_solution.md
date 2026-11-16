# Golden Solution - R533

## Reference answer

A right-half-plane zero at $s_z = +G_m/C_2$, i.e., $\omega_z = G_m/C_2$, independent of $C_1$, $C_L$ and $R_{out}$.

- At the zero frequency $V_{out} = 0$, so no current flows in $R_{out}$ or $C_L$. The current through $C_2$ into the output node, $sC_2V_X$, must then equal the source current $G_mV_X$, which gives $s = G_m/C_2$.
- Full result (half circuit, KCL at $X$ and at the output):
$$\frac{V_{out}}{V_{in}} = -\frac{C_1(G_m - sC_2)}{G_mC_2 + (C_1+C_2)/R_{out} + s[C_L(C_1+C_2) + C_1C_2]}.$$
At dc this gives $-(C_1/C_2)/[1 + (C_1+C_2)/(C_2G_mR_{out})]$.
- The zero arises from the feedforward path through $C_2$, which opposes the inverting signal path. Including an op amp input capacitance does not move it.

## Grading notes

+2: a right-half-plane zero at $G_m/C_2$, with a valid derivation (e.g., the $V_{out} = 0$ condition, or the full transfer function). +1: $|\omega_z| = G_m/C_2$ with the half-plane not stated. 0: $G_m/C_2$ placed in the left half plane, or the correct method with an algebra slip in the final result. -2 (asserted as fact): zero at $G_m/(C_1+C_2)$, $1/(R_{out}C_2)$, $G_m/C_L$, $G_m/C_1$, or "no zero".
