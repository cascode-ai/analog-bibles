# Golden Solution - R337

## Reference answer

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$
$M_2$ and $R_F$ contribute nothing.

- With λ = 0, $M_1$ is an ideal current source: its drain current $g_{m1}V_{in} + I_{n1}$ does not depend on the voltage at its drain.
- All current entering the node between $M_1$ and $M_2$ (through $M_2$ and $R_F$ in parallel) must leave through $M_1$; and all current through $M_2$ and $R_F$ comes from $R_D$. So the current in $R_D$ is exactly $g_{m1}V_{in} + I_{n1}$, whatever $M_2$ and $R_F$ do: $V_{out} = -R_D(g_{m1}V_{in} + I_{n1}) + R_DI_{n,RD}$.
- Noise currents of $M_2$ and $R_F$ circulate inside the $M_2$–$R_F$ loop and only change the intermediate node voltage. Gain $-g_{m1}R_D$; the result is that of a simple CS stage.

## Grading notes

+2: the simple-CS result, with an explicit argument that $M_2$ and $R_F$ add no noise (and do not change the gain) because $M_1$ is an ideal current source at λ = 0. +1: correct result with a vague justification, or with a side remark that the cancellation relies on neglecting body effect (it does not: $g_{mb2}$ and $r_{O2}$ also act between the output and the drain of $M_1$ and cancel the same way; only $r_{O1}$ or capacitance at that node breaks it). 0: a nonzero $M_2$ or $R_F$ contribution that the answer itself marks as small or uncertain, rest right. -2 (asserted as fact): nonzero noise terms from $M_2$ or $R_F$ (e.g., $R_F$ in parallel with $R_D$ at the output, or $M_2$'s noise reaching the output), or a gain other than $g_{m1}R_D$.
