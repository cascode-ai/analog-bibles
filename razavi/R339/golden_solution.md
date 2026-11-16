# Golden Solution - R339

## Reference answer

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT}{g_{m1}^2R_F} + 4kTR_S\frac{(1+g_{m1}R_F)^2}{(g_{m1}R_F)^2} + 4kT\gamma g_{m2}\frac{(R_S + R_F + g_{m1}R_FR_S)^2}{(g_{m1}R_F)^2}$$

- $M_2$ is an ideal current source plus its noise $I_{n2}$ injected into the output node. KCL at the output: the current leaving through $M_1$ and $R_F$ equals $I_{n2}$; this same current flows into $R_S$, so $V_S = R_SI_{n2} + V_{n,RS}$ (no signal current in $R_S$).
- At the output: $V_{out} = -g_{m1}R_FV_{in} + (1+g_{m1}R_F)V_S + R_F(I_{n2} - I_{n1} - I_{n,RF})$.
- Signal gain $-g_{m1}R_F$; the coefficient of $I_{n2}$ is $(1+g_{m1}R_F)R_S + R_F$; dividing each contribution by $g_{m1}R_F$ gives the four terms.
- With $R_S = 0$ this reduces to the CS stage with feedback resistor: $4kT\gamma/g_{m1} + 4kT/(g_{m1}^2R_F) + 4kT\gamma g_{m2}/g_{m1}^2$.

## Grading notes

+2: all four terms equivalent to the reference. +1: three terms right and one coefficient slightly off (e.g., the $M_2$ term without the $R_S$-dependent part). 0: correct method with two wrong terms, or the $M_2$ term omitted with the rest right. -2 (asserted as fact): $M_2$ treated as noiseless or as a resistive load to ground that sets the gain, gain written as $g_{m1}R_F/(1+g_{m1}R_S)$ or other topology misreading, or dimensionally wrong terms.
