# Golden Solution - R336

## Reference answer

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + 4kTR_S + \frac{4kT\gamma g_{m2}(1+g_{m1}R_S)^2}{g_{m1}^2}$$

- $M_1$ and $R_S$: gate-referred $4kT\gamma/g_{m1}$ and $4kTR_S$ (a source series voltage acts like a gate voltage).
- $M_2$: its noise current flows into the load impedance $1/g_{m2}$, giving $4kT\gamma/g_{m2}$ at the output; the gain is $g_{m1}/[g_{m2}(1+g_{m1}R_S)]$, so it refers to $4kT\gamma g_{m2}(1+g_{m1}R_S)^2/g_{m1}^2$.

## Grading notes

+2: all three terms, with the degeneration factor on the $M_2$ term. +1: the $M_2$ term without the $(1+g_{m1}R_S)^2$ factor, otherwise correct. 0: correct method but two terms wrong or one omitted. -2 (asserted as fact): $M_2$ treated as a current source with infinite impedance or as a noiseless load, the $R_S$ term divided by the gain, or the gain taken as $g_{m1}/g_{m2}$ with the referred result presented as exact.
