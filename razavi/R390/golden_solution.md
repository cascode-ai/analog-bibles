# Golden Solution - R390

## Reference answer

$\dfrac{V_{out}}{V_{in}} = \dfrac{A_0(R_1+R_2)}{R_0 + R_1 + R_2 + A_0R_2}$, $\quad Z_{out} = \dfrac{R_0(R_1+R_2)}{R_0 + R_1 + R_2 + A_0R_2} = \dfrac{R_0}{1 + A_0R_2/(R_1+R_2)}\ \Big\|\ (R_1+R_2)$.

- Loaded open-loop amplifier: the divider loads the output, $A_{v,open} = A_0(R_1+R_2)/(R_0+R_1+R_2)$, open-loop output resistance $R_0\|(R_1+R_2)$; the input side is not loaded (infinite input impedance).
- Feedback factor $\beta = R_2/(R_1+R_2)$, loop gain $\beta A_{v,open} = A_0R_2/(R_0+R_1+R_2)$.
- Closed loop: $A_{v,open}/(1+\beta A_{v,open})$ and $[R_0\|(R_1+R_2)]/(1+\beta A_{v,open})$ give the expressions above. Direct KCL at the output, with $V_A = A_0(V_{in} - \beta V_{out})$ behind $R_0$, confirms them.
- Limits: $R_0 \to 0$ gives $A_0/(1+\beta A_0)$ and $Z_{out} \to 0$; $A_0 \to \infty$ gives $1 + R_1/R_2$.

## Grading notes

+2: both expressions equivalent to the reference (any algebraic form). +1: one expression right and the other with a minor slip. 0: loading ignored (gain $A_0/(1+\beta A_0)$, $Z_{out} = R_0/(1+\beta A_0)$) although the question asks for it, or only one quantity derived. -2 (asserted as fact): feedback factor $R_1/(R_1+R_2)$, feedback claimed to raise the output impedance, or a closed-loop gain exceeding $1 + R_1/R_2$.
