# Golden Solution - R349

## Reference answer

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right),\qquad \overline{I_{n,in}^2} = 4kT\gamma g_{m2} + g_{m2}^2\cdot 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$

- Voltage (input shorted): $M_2$'s current goes into the input source, so it does not affect the output; simple CS result.
- Current (input open): only $M_2$ and the ideal $I_1$ connect to the input node, so $M_2$'s current is fixed: $g_{m2}(V_{out} - V_G) + I_{n2} = 0$, $V_G = V_{out} + I_{n2}/g_{m2}$. With $V_{out} = -R_D(g_{m1}V_G + I_{n1}) + R_DI_{n,RD}$: $V_{out}(1 + g_{m1}R_D) = -g_{m1}R_DI_{n2}/g_{m2} - R_DI_{n1} + R_DI_{n,RD}$; the transimpedance for an input current is $-g_{m1}R_D/[g_{m2}(1 + g_{m1}R_D)]$. Dividing: $I_{n,eq} = I_{n2} + (g_{m2}/g_{m1})(I_{n1} - I_{n,RD})$.
- Interpretation: the input impedance is about $1/g_{m2}$, so the voltage noise appears as a current $g_{m2}V_{n,in}$ in addition to $M_2$'s own noise.

## Grading notes

+2: both results equivalent to the reference. +1: both structurally right with a minor algebra slip in one term (e.g., a missing γ in one term). 0: one quantity fully right and the other wrong. An error confined to one quantity caps the score here, e.g. the current given as $4kT\gamma g_{m2}$ only (missing the $g_{m2}^2\overline{V_{n,in}^2}$ part, which is of the same order and is what the $M_1$ and $R_D$ noise contribute with the input open), the input-referred current set to zero because "the input impedance is low", or the current right but $M_2$'s noise included in the voltage. An answer that gives $4kT\gamma g_{m2}$ as its main result and the full reference expression only as an alternative convention is hedged: 0. -2 (asserted as fact): both quantities wrong, e.g. $M_2$ read as a PMOS so that both results are affected.
