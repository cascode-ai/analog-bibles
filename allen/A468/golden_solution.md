# Golden Solution - A468

## Reference answer

$R_x = 3R$. From left to right the switches are $b_0$ (2R branch at the reference node), $b_1$ (4R branch at the reference node), $b_2$ (2R branch after $R_x$) and $b_3$ (4R branch after $R_x$); then $v_{OUT} = V_{REF}\left(\frac{b_0}{2} + \frac{b_1}{4} + \frac{b_2}{8} + \frac{b_3}{16}\right)$.

Derivation:
- The source's + terminal is grounded, so the left bottom node is at $-V_{REF}$. Every branch resistor ends at 0 V (ground or virtual ground), so the branch currents do not depend on the switch positions.
- Branches at the $-V_{REF}$ node: $V_{REF}/2R$ and $V_{REF}/4R$.
- Node B (right of $R_x$) sees $2R \| 4R \| 4R = R$ to 0 V, so $V_B = -V_{REF}\frac{R}{R_x + R}$; its branches carry $|V_B|/2R$ and $|V_B|/4R$.
- Binary weighting requires $|V_B|/2R = V_{REF}/8R$, i.e. $|V_B| = V_{REF}/4$ → $R/(R_x + R) = 1/4$ → $R_x = 3R$.
- The selected currents are drawn out of the summing node and supplied through the feedback R, so $v_{OUT} = +R\sum I = V_{REF}(b_0/2 + b_1/4 + b_2/8 + b_3/16)$.

## Grading notes

+2: $R_x = 3R$ with the correct switch assignment (2R and 4R at the source node = $b_0$, $b_1$; 2R and 4R after $R_x$ = $b_2$, $b_3$) and a correct loading argument (node B sees R). The output sign need not be discussed. +1: $R_x = 3R$ with the switch assignment missing or partly wrong (e.g. $b_0$/$b_1$ swapped), or the assignment right with an arithmetic slip. 0: correct method (node-voltage ratio 1/4) but a wrong load (e.g. forgetting the 4R to ground) giving a different $R_x$. −2 (asserted as fact): $R_x = 2R$ or $R_x = 4R$ from a wrong load, or a claim that branch currents change with the switch positions.
