# Golden Solution - R293

## Reference answer

$$Z_{in} = \frac{1}{C_1s} + \frac{1}{g_m}$$
($C_1$ in series with a resistance $1/g_m$; $C_2$ does not appear.)
- Let A be the node between $C_1$ and $C_2$ (gate of $M_1$) and D the drain. The gate draws no current, so the test current $I_x$ flowing through $C_1$ also flows through $C_2$ into D.
- At D, $I_1$ is ideal and $\lambda = 0$, so the only path out of D is the drain current: $I_x = g_mV_A$. Hence $V_A/I_x = 1/g_m$ regardless of $C_2$ (the drain voltage simply adjusts).
- $Z_{in} = 1/(C_1s) + V_A/I_x$.

## Grading notes

+2: $Z_{in} = 1/(C_1s) + 1/g_m$ with the KCL argument that the current through $C_2$ must equal $g_mV_A$. +1: correct result with a sketchy justification, or the impedance at node A ($1/g_m$) right but $C_1$ forgotten in the final sum. 0: method right (KCL at A and D) with an algebra slip. -2 (asserted as fact): a result containing $C_2$ (e.g., Miller $C_2(1 + A)$ with a finite gain, or $1/(C_1s) + 1/(C_2s)$), or $Z_{in}$ purely capacitive.
