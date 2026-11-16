# Golden Solution - R314

## Reference answer

$$\frac{V_{out}}{V_{in}}(s) = -\frac{g_{m1}R_D}{1 + \dfrac{C_{GS2}}{g_{m2}}s}$$
a single pole at $g_{m2}/C_{GS2}$ (≈ $\omega_T$ of $M_2$); $R_G$ (and $R_S$) do not appear.
- With no capacitance at the gate of $M_1$, $M_1$ delivers $g_{m1}V_{in}$, independent of $V_X$ (λ = 0).
- The gate of $M_2$ draws current only through $C_{GS2}$, and that current also flows through $R_G$. KCL at X: the current $g_{m1}V_{in}$ drawn by $M_1$ is supplied by $M_2$'s channel, $g_{m2}V_{GS2}$, plus the current through $C_{GS2}$, $C_{GS2}sV_{GS2}$: $V_{GS2}(g_{m2} + C_{GS2}s) = g_{m1}V_{in}$.
- The output current is $g_{m2}V_{GS2} = g_{m1}V_{in}\,g_{m2}/(g_{m2} + C_{GS2}s)$, so $V_{out} = -R_D\,g_{m1}g_{m2}V_{in}/(g_{m2} + C_{GS2}s)$.
- $R_G$ changes how $V_X$ and the gate voltage move: $V_X = -g_{m1}V_{in}(1 + R_GC_{GS2}s)/(g_{m2} + C_{GS2}s)$. It does not change the split of $M_1$'s current between the channel and $C_{GS2}$, so it has no effect on $V_{out}$ in this model.

## Grading notes

+2: $V_{out}/V_{in} = -g_{m1}R_D/(1 + sC_{GS2}/g_{m2})$ with the observation that $R_G$ drops out (current division between $g_{m2}$ and $C_{GS2}s$ is independent of $R_G$). +1: correct result derived but $R_G$'s absence not commented on, or a sign slip. 0: correct node equations with an algebra slip leading to a spurious $R_G$ term. -2 (asserted as fact): a pole depending on $R_G$ (e.g., $1/[(R_G + 1/g_{m2})C_{GS2}]$), a zero from $R_G$, or a low-frequency gain other than $-g_{m1}R_D$.
