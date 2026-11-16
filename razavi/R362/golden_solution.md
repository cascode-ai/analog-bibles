# Golden Solution - R362

## Reference answer

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT\left(\gamma g_{m2} + g_{m2}^2R_S\right)}{g_{m1}^2(1 + g_{m2}R_S)^2}$$

- Use output short-circuit currents (the output resistance is infinite with λ = 0). Transconductance from the input: $g_{m1}$.
- $M_2$'s noise, as a gate-referred voltage $4kT\gamma/g_{m2}$, and $R_S$'s noise $4kTR_S$ (in series with the source) both reach the output through the degenerated transconductance $g_{m2}/(1 + g_{m2}R_S)$, giving a load noise current $\dfrac{4kT(\gamma g_{m2} + g_{m2}^2R_S)}{(1+g_{m2}R_S)^2}$.
- Dividing by $g_{m1}^2$ gives the result. With $R_S = 0$ it reduces to $4kT\gamma(1/g_{m1} + g_{m2}/g_{m1}^2)$; for large $g_{m2}R_S$ the load term tends to $4kT/(g_{m1}^2R_S)$ (the resistor's noise).

## Grading notes

+2: expression equivalent to the reference (both $M_2$ and $R_S$ terms with the degeneration factor). +1: one of the two load terms with a slip (e.g., $R_S$'s term written as $4kT/R_S$ without the $g_{m2}R_S/(1+g_{m2}R_S)$ weighting). 0: degeneration ignored (load noise $4kT\gamma g_{m2}$) with the rest sound. -2 (asserted as fact): $R_S$ noise said not to reach the output, $M_2$ treated as noiseless, or the result divided by a finite "gain" that depends on $R_S$ in a way that changes the input-referred value.
