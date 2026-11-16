# Golden Solution - R347

## Reference answer

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right),\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_G} + 4kT\gamma g_{m2} + \frac{1}{R_G^2}\cdot 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$

- Voltage (input shorted): $R_G$ and $M_2$ only inject current into the ideal input source, so the result is that of a simple CS stage.
- Current (input open): at the input node $-g_{m2}V_{out} + I_{n2} = V_G/R_G + I_{n,RG}$; with $V_{out} = -R_D(g_{m1}V_G + I_{n1}) + R_DI_{n,RD}$ this gives $V_{out}(1 - g_{m1}g_{m2}R_DR_G) = -g_{m1}R_DR_G(I_{n2} - I_{n,RG}) - R_DI_{n1} + R_DI_{n,RD}$, and the transimpedance for an input current is $-g_{m1}R_DR_G/(1 - g_{m1}g_{m2}R_DR_G)$. Dividing: $I_{n,eq} = I_{n2} - I_{n,RG} + (I_{n1} - I_{n,RD})/(g_{m1}R_G)$.
- The loop through $M_2$ is positive feedback; it changes the gain but not the input-referred noise.

## Grading notes

+2: both results equivalent to the reference ($R_G$ and $M_2$ absent from the voltage, all four contributions in the current). +1: current expression missing the $\overline{V_{n,in}^2}/R_G^2$ part (i.e., $M_1$ and $R_D$) but otherwise right, with the voltage right. 0: one quantity fully right and the other wrong or missing. An error confined to one quantity caps the score here, e.g. the voltage right but the current wrong (such as $4kT/R_G$ only), or the current right but $R_G$/$M_2$ noise or a loop-gain factor $1/(1 - g_{m1}g_{m2}R_DR_G)^2$ kept in the voltage (computed with the input open rather than shorted). -2 (asserted as fact): both quantities wrong (e.g., $R_G$/$M_2$ noise or the loop-gain factor in the voltage together with a current that is incomplete or wrong), or $M_2$ treated as a load of the output node so that both results are affected.
