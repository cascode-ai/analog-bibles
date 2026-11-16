# Golden Solution - R245

## Reference answer

- $V_{DD} < V_{TH}(1+R_1/R_2)$: both transistors off. $V_X = V_{DD}R_2/(R_1+R_2)$ (divider, slope $R_2/(R_1+R_2)$) and $V_Y = V_{DD}$.
- At $V_{DD} = V_{TH}(1+R_1/R_2)$, $V_X$ reaches 0.7 V and $M_2$ turns on. Above that, $V_X$ rises slowly from 0.7 V (solution of $(V_{DD}-V_X)/R_1 = V_X/R_2 + \tfrac{\beta}{2}(V_X-V_{TH})^2$), and $V_Y = (1 + R_1/R_2)V_X$: $V_Y$ bends over at the same point and keeps rising, but more slowly than before, always $(1+R_1/R_2)$ times $V_X$.

- Derivation: $M_1$ copies $M_2$'s current $I_2 = (V_{DD}-V_X)/R_1 - V_X/R_2$ (it is saturated since $V_Y > V_X$), so $V_Y = V_{DD} - R_1I_2 = V_X + (R_1/R_2)V_X$.
- $V_Y$ is continuous at the turn-on point ($V_Y = V_{DD} = 0.7(1+R_1/R_2)$ there).

## Grading notes

+2: off region up to $V_{DD} = V_{TH}(1+R_1/R_2)$ with $V_X$ = divider voltage and $V_Y = V_{DD}$; above it $V_X$ slowly rising from 0.7 V and $V_Y = (1+R_1/R_2)V_X$ (or an equivalent statement that $M_1$ carries less than the $R_1$ current of the left branch so $V_Y > V_X$). +1: correct regions but the relation $V_Y = (1+R_1/R_2)V_X$ missing, with $V_Y > V_X$ stated. 0: off region correct but the on region wrongly described as $V_Y = V_X$. -2 (asserted as fact): $V_Y < V_X$ (M1 carrying more than M2's current), $R_2$ read as connected to $V_{DD}$ or to Y, or $M_2$ turning on at $V_{DD} = 0.7$ V.
