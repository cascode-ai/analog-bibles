# Golden Solution - G181

## Reference answer

$R = 3$.

- A MOS differential pair with tail current $I_T$ has $G_m = g_{m} = \sqrt{2k'(W/L)(I_T/2)} = \sqrt{k'(W/L)I_T}$ (square law, $g_m \propto \sqrt{I}$).
- Both pairs active (tails $I_{B1} = I_{B2} = I_B$, equal $k'W/L$): $G_m = 2\sqrt{k'(W/L)I_B}$.
- One pair active: tail $(1+R)I_B$, so $G_m = \sqrt{k'(W/L)(1+R)I_B}$.
- Equating: $1 + R = 4$, so $R = 3$. Because $g_m \propto \sqrt{I}$, doubling the transconductance of one pair needs four times its current: the inactive pair's current is redirected with a gain of 3 on top of the active pair's own $I_B$.

## Grading notes

+2: $R = 3$ from $G_m \propto \sqrt{I_{tail}}$ with the both-active $G_m$ equal to twice the single-pair value. +1: correct method with a final slip (e.g. writing $1+R = 4$ but concluding $R = 4$). 0: correct square-root dependence set up but the both-pairs case wrong (e.g. using $\sqrt{2I_B}$ for the sum). -2 (asserted as fact): $R = 1$ (linear $g_m$–$I$ assumption), $R = 2$, or $R = \sqrt2 - 1$.
