# Golden Solution - R475

## Reference answer

$A_{0,max} = 16$ for a feedback factor β = 1/4 (closed-loop gain 4 = 1/β). If the actual closed-loop gain $A_0/(1 + \beta A_0)$ must be exactly 4, then $A_{0,max} = 20$ (β = 0.2).
- PM = 60° with two coincident poles requires $\omega_u = \sqrt3\,\omega_p$ and $\beta A_0/(1 + 3) = 1$, i.e. a loop gain $\beta A_0 \le 4$.
- Nominal reading, β = 1/4: $A_0 \le 16$. With $A_0 = 16$ the actual closed-loop gain is 16/5 = 3.2.
- Exact reading: β = 1/4 − 1/$A_0$, so $\beta A_0 = A_0/4 - 1 \le 4$ gives $A_0 \le 20$ (β = 0.2, closed-loop gain 20/5 = 4).

## Grading notes

+2: loop-gain condition $\beta A_0 = 4$, with $A_0 = 16$ (β = 1/4) or $A_0 = 20$ (exact closed-loop gain of 4), and the interpretation stated or evident. +1: correct value but the condition only asserted. 0: right method with an arithmetic slip. -2 (asserted as fact): $A_0 = 4$ (the β = 1 result reused), β taken as 4, or a wrong phase condition (e.g., crossover at $\omega_p$, giving $A_0 = 8$).
