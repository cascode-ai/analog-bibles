# Golden Solution - R556

## Reference answer

$V_{out} = V_X = V_{EB1}(I_1) = V_T\ln(I_1/I_S)$.
- With $S_2$ off, $Q_1$ carries only $I_1$. $S_1$ shorts $C_1$, so the op amp is a unity-gain follower of $V_X$: its inverting input and output are both at $V_X$.
- $C_1$ holds zero voltage and $C_2$ is charged to $V_{EB}(I_1)$.

## Grading notes

+2: $V_{out} = V_{EB}(I_1) = V_T\ln(I_1/I_S)$ with the unity-gain reasoning ($C_1$ shorted, $C_2$ charged to that voltage). +1: $V_{out} = V_{EB}$ without specifying the current. 0: correct follower reasoning with a slip in the expression. -2 (asserted as fact): $V_{EB}(I_1 + I_2)$, $V_{out} = 0$, or a closed-loop gain other than unity.
