# Golden Solution - R348

## Reference answer

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{\gamma g_{m2}}{g_{m1}^2} + \frac{1}{g_{m1}^2R_D}\right)$$
$$\overline{I_{n,in}^2} = \frac{4kT}{R_G} + 4kT\gamma g_{m2}\left(1 + \frac{1}{g_{m1}R_G}\right)^2 + \frac{1}{R_G^2}\cdot 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$

- $M_2$ draws $g_{m2}V_{out} + I_{n2}$ from the output and delivers it to the input node.
- Voltage (input shorted): $M_2$ loads the output with $g_{m2}$ and its noise leaves the output node: $V_{out}(1/R_D + g_{m2}) = -g_{m1}V_{in} - I_{n1} - I_{n2} + I_{n,RD}$. Gain $-g_{m1}(R_D\|1/g_{m2})$; referred noise as above.
- Current (input open): $V_G = R_G(g_{m2}V_{out} + I_{n2} - I_{n,RG})$, which with the output equation gives $V_{out}(1/R_D + g_{m2} + g_{m1}g_{m2}R_G) = I_{n,RD} - I_{n1} - (1 + g_{m1}R_G)I_{n2} + g_{m1}R_GI_{n,RG}$; transimpedance $-g_{m1}R_G/(1/R_D + g_{m2} + g_{m1}g_{m2}R_G)$. Dividing: $I_{n,eq} = I_{n2}(1 + g_{m1}R_G)/(g_{m1}R_G) - I_{n,RG} + (I_{n1} - I_{n,RD})/(g_{m1}R_G)$.

## Grading notes

+2: both results equivalent to the reference. +1: one of the two with a minor slip (e.g., the $(1 + 1/(g_{m1}R_G))^2$ factor on $M_2$ simplified to 1) and the other right. 0: one quantity fully right and the other wrong. An error confined to one quantity caps the score here, e.g. a current that keeps only the input-node sources $4kT(\gamma g_{m2} + 1/R_G)$ with the voltage right, or a voltage that wrongly includes $R_G$ (computed with the input open rather than shorted) or leaves out $M_2$'s noise, with the current right. -2 (asserted as fact): both quantities wrong, e.g. $M_2$ read as an NMOS or as a diode so that both results are affected.
