# Golden Solution - R341

## Reference answer

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kTR_S(g_{m1}-g_{m2})^2}{g_{m1}^2(1+g_{m2}R_S)^2} + \frac{4kT(\gamma g_{m2} + 1/R_D)(1+g_{m1}R_S)^2}{g_{m1}^2(1+g_{m2}R_S)^2}$$

- Source node: $g_{m1}(V_{in} - V_S) + I_{n1} = V_S/R_S + I_{n,RS}$, so $V_S = \dfrac{g_{m1}V_{in} + I_{n1} - I_{n,RS}}{g_{m1} + 1/R_S}$.
- $M_2$ delivers $-g_{m2}V_S + I_{n2}$ into the output; the current in $M_1$ equals $V_S/R_S + I_{n,RS}$. Output: $V_{out} = R_D\left[I_{n,RD} + I_{n2} - I_{n,RS} - (g_{m2} + 1/R_S)V_S\right]$.
- Gain: $-g_{m1}R_D\dfrac{1+g_{m2}R_S}{1+g_{m1}R_S}$ ($M_2$ boosts the degenerated gain).
- Referring: $M_1$ → $4kT\gamma/g_{m1}$; $R_S$ (coefficient $R_D(g_{m2}-g_{m1})/(g_{m1}+1/R_S)$) → middle term; $M_2$ and $R_D$ (coefficient $R_D$) → last term.
- Check: $g_{m2} = 0$ gives the degenerated CS stage $4kT[\gamma/g_{m1} + R_S + (1+g_{m1}R_S)^2/(g_{m1}^2R_D)]$.

## Grading notes

+2: expression equivalent to the reference, including the partial cancellation $(g_{m1} - g_{m2})$ in the $R_S$ term and the gain $g_{m1}R_D(1+g_{m2}R_S)/(1+g_{m1}R_S)$. +1: one coefficient slightly off (e.g., the $R_S$ term given as $4kTR_S$) with the rest right. 0: correct method with two wrong terms. -2 (asserted as fact): $M_2$'s gate read as tied to the output (diode load) or to a fixed bias, $R_D$ and $M_2$ treated as noiseless, or the gain taken as $g_{m1}R_D/(1+g_{m1}R_S)$ with $M_2$ ignored.
