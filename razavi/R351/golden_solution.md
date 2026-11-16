# Golden Solution - R351

## Reference answer

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}},\qquad \overline{I_{n,in}^2} = 4kT\gamma g_{m2}$$

- Output node (ideal $I_1$): $g_{m1}(V_G - V_{out}) + I_{n1} = 0$, so $V_{out} = V_G + I_{n1}/g_{m1}$ (unity gain).
- Voltage (input driven): $M_2$'s current goes into the input source and does not affect the output: $\overline{V_{n,in}^2} = 4kT\gamma/g_{m1}$.
- Current (input open): only $M_2$ connects to the input node, so its total current is zero: $g_{m2}V_{out} + I_{n2} = 0$, $V_{out} = -I_{n2}/g_{m2}$. An input current $I_{in}$ must flow through $M_2$: $V_{out} = I_{in}/g_{m2}$. Hence $\overline{I_{n,in}^2} = 4kT\gamma g_{m2}$; $M_1$ does not contribute.

## Grading notes

+2: both results. +1: correct voltage and a current expression with an extra small term from $M_1$ that is marked as negligible. 0: one quantity fully right and the other wrong. An error confined to one quantity caps the score here, e.g. the voltage right but $M_1$'s noise asserted in the current, or the current right but $M_2$'s noise included in the voltage. -2 (asserted as fact): both quantities wrong, e.g. the gain of the follower taken as $g_{m1}/(g_{m1}+g_{m2})$ (treating $M_2$ as a load of the output) so that both results are affected.
