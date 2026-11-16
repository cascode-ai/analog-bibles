# Golden Solution - R474

## Reference answer

$A_{0,max} = 4$ (feedback factor β = 1).
- Loop gain $\beta A_0/(1 + j\omega/\omega_p)^2$. For PM = 60° the phase at the gain crossover is −120°, so each pole contributes 60°: $\omega_u = \omega_p\tan 60° = \sqrt3\,\omega_p$.
- $|\beta H(\omega_u)| = \beta A_0/(1 + 3) = 1$, so $\beta A_0 = 4$. A larger $A_0$ pushes the crossover out and lowers the PM, so the condition is $A_0 \le 4/\beta$.
- β = 1: $A_{0,max} = 4$. The actual closed-loop gain is then 4/5 = 0.8 ("unity" in the nominal β = 1 sense). If the closed-loop gain $A_0/(1 + \beta A_0)$ must equal exactly 1, then β = 0.8 and $A_0 = 5$.

## Grading notes

+2: $\omega_u = \sqrt3\,\omega_p$, $\beta A_0 = 4$, and $A_0 = 4$ for β = 1. $A_0 = 5$ is also accepted when the answer explicitly requires the actual closed-loop gain to equal exactly 1. +1: correct value with a weak justification, or without arguing that it is a maximum. 0: right condition with an arithmetic slip. -2 (asserted as fact): each pole given 30° (crossover at $\omega_p/\sqrt3$, $A_0 \approx 1.33$), crossover placed at $\omega_p$ ($A_0 = 2$), or any other wrong phase condition.
