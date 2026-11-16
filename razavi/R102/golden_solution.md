# Golden Solution - R102

## Reference answer

$I_X$ decreases monotonically to zero at $V_X = V_{DD}$: a quadratic-plus-linear part while $M_2$ conducts, then a straight line (resistors only) after $M_2$ turns off at $V_{X1} = V_{DD} - 0.8(R_1+R_2)/R_1$.

- No gate current: the gate is at the $R_1$–$R_2$ tap between $V_{DD}$ and $V_X$, so $V_{SG2} = (V_{DD} - V_X)R_1/(R_1+R_2)$ and $V_{SD2} = V_{DD} - V_X \ge V_{SG2}$: $M_2$ is saturated whenever it is on.
- $V_X < V_{X1}$: $I_X = \dfrac{V_{DD} - V_X}{R_1+R_2} + \tfrac12\beta_p\left[(V_{DD} - V_X)\dfrac{R_1}{R_1+R_2} - 0.8\right]^2$; at $V_X = 0$: $3/(R_1+R_2) + \tfrac12\beta_p[3R_1/(R_1+R_2) - 0.8]^2$.
- $V_{X1} \le V_X \le 3$ V: $M_2$ off, $I_X = (3 - V_X)/(R_1+R_2)$, a straight line to zero at $V_X = 3$ V. The transistor current joins tangentially (square law).
- If $3R_1/(R_1+R_2) < 0.8$ V, $M_2$ never turns on and $I_X$ is the resistor line throughout.

## Grading notes

+2: correct $V_{SG2}$ (fraction $R_1/(R_1+R_2)$ of $V_{DD} - V_X$), $M_2$ saturated when on, cutoff at $V_X = V_{DD} - |V_{THP}|(R_1+R_2)/R_1$, the resistor current $(V_{DD} - V_X)/(R_1+R_2)$ included, decreasing to zero at $V_{DD}$. +1: the cutoff expression slipped, otherwise correct. 0: the resistor current $(V_{DD} - V_X)/(R_1+R_2)$ omitted from $I_X$ (a branch of the circuit missed, so that $I_X$ is claimed to be zero after $M_2$ turns off) with the divider ratio, saturation and cutoff point right; or shape right but regions or cutoff wrong. -2 (asserted as fact): $I_X$ increasing with $V_X$, divider ratio inverted so as to change the cutoff, $M_2$ claimed in triode, or body effect attributed to $M_2$.
