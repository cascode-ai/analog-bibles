# Golden Solution - R335

## Reference answer

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_F} + 4kTR_S\left(\frac{1 + g_mR_F}{g_mR_F}\right)^2$$

- Because $I_1$ is ideal, the total ac current leaving the drain node through $M_1$ and $R_F$ is zero, so no ac current flows in $R_S$: the source voltage equals the noise voltage of $R_S$ alone, $V_S = V_{n,RS}$ (and zero for the signal).
- KCL at the drain: $g_m(V_{in} - V_S) + I_{n1} + \dfrac{V_{out} - V_S}{R_F} + I_{n,RF} = 0$, so $V_{out} = -g_mR_FV_{in} + (1 + g_mR_F)V_S - R_F(I_{n1} + I_{n,RF})$.
- Signal gain $-g_mR_F$. Referring each term: $M_1$ → $4kT\gamma/g_m$; $R_F$ → $4kT/(g_m^2R_F)$; $R_S$ → $4kTR_S(1+g_mR_F)^2/(g_mR_F)^2$.

## Grading notes

+2: expression equivalent to the reference, including the zero ac current in $R_S$ (so $R_S$ sets no gain but its noise is amplified by $1+g_mR_F$). +1: right structure with a slip in one coefficient (e.g., the $R_S$ term without the $(1+g_mR_F)^2/(g_mR_F)^2$ factor, i.e. just $4kTR_S$). 0: correct method but the gain or two terms wrong. -2 (asserted as fact): the circuit treated as a degenerated CS stage with gain $g_mR_F/(1+g_mR_S)$ or similar misreading of the topology, $R_F$ treated as a load to ground, or a term of the wrong dimension.
