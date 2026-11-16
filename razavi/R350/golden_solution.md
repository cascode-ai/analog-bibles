# Golden Solution - R350

## Reference answer

$$\overline{V_{n,in}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m2}}{g_{m1}^2}\right),\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_G} + \frac{4kT\gamma}{g_{m1}R_G^2} + 4kT\gamma g_{m2}\left(1 - \frac{1}{g_{m1}R_G}\right)^2$$

- Output node (ideal $I_1$): $g_{m1}(V_G - V_{out}) + I_{n1} - g_{m2}V_{out} + I_{n2} = 0$, so $V_{out} = \dfrac{g_{m1}V_G + I_{n1} + I_{n2}}{g_{m1} + g_{m2}}$.
- Voltage (input driven): gain $g_{m1}/(g_{m1}+g_{m2})$; $M_2$ acts like a current-source load of the follower. $R_G$ only loads the input source.
- Current (input open): $V_G = R_G(I_{n,RG} + g_{m2}V_{out} - I_{n2})$, giving $V_{out}(g_{m1} + g_{m2} - g_{m1}g_{m2}R_G) = g_{m1}R_GI_{n,RG} + I_{n1} + (1 - g_{m1}R_G)I_{n2}$; transimpedance $g_{m1}R_G/(g_{m1} + g_{m2} - g_{m1}g_{m2}R_G)$. Dividing: $I_{n,eq} = I_{n,RG} + I_{n1}/(g_{m1}R_G) + I_{n2}(1 - g_{m1}R_G)/(g_{m1}R_G)$.

## Grading notes

+2: both results equivalent to the reference, including the $(1 - 1/(g_{m1}R_G))^2$ factor on $M_2$'s current term. +1: one of the two with a minor slip and the other right. 0: one quantity fully right and the other wrong. An error confined to one quantity caps the score here, e.g. the current right but the voltage computed with the input open so that $R_G$ (or a loop-gain factor) appears in it, or $M_2$'s noise said not to affect the voltage. -2 (asserted as fact): both quantities wrong (including the open-circuit/short-circuit port-noise pair $4kTR_G(1+\gamma L)/(1-L)^2$ and $(4kT/R_G)(1+\gamma L)$, $L = g_{m1}g_{m2}R_G/(g_{m1}+g_{m2})$, given in place of the input-referred quantities), or $M_2$ ignored (follower gain taken as 1) or read as a PMOS so that both results are affected.
