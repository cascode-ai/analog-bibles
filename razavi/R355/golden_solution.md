# Golden Solution - R355

## Reference answer

$$\overline{V_{n,in}^2} = 8kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right)$$

- With λ = 0 the output impedance (and the voltage gain) is infinite, so use the output short-circuit current. Signal: $I_{out} = g_{m1}V_{in}$.
- $M_1$, $M_2$: with an ideal tail, $I_{n1}$ and $I_{n2}$ split so that $I_{D1} - I_{D2} = I_{n1} - I_{n2}$ reaches the output (through the mirror for $M_1$): each refers to $4kT\gamma/g_{m1}$.
- $M_3$: its noise current flows in its diode impedance and is copied by $M_4$ to the output (gain ≈ 1); $M_4$'s noise goes directly to the output. Each refers to $4kT\gamma g_{m3}/g_{m1}^2$.

## Grading notes

+2: expression equivalent to the reference. +1: correct with a factor slip on the load term (e.g., only $M_4$ counted) or γ omitted consistently. 0: the right method but the result off by a factor of 2 overall. -2 (asserted as fact): the infinite gain used to claim zero input-referred noise, $M_3$'s noise said to be suppressed by its diode connection, or the tail source counted as contributing noise although it is ideal.
