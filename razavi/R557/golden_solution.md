# Golden Solution - R557

## Reference answer

$\Delta V_{out} = \left(1 + \dfrac{C_2}{C_1}\right)V_T\ln\left(1 + \dfrac{I_2}{I_1}\right)$ (an increase). The new output is $V_{out} = V_{EB}(I_1 + I_2) + \dfrac{C_2}{C_1}V_T\ln\left(1 + \dfrac{I_2}{I_1}\right)$.
- With $S_2$ on, $Q_1$ carries $I_1 + I_2$, so $V_X$ rises by $\Delta V_{EB} = V_T\ln[(I_1 + I_2)/I_1]$.
- The op amp keeps its inverting input (top of $C_2$, left plate of $C_1$) equal to $V_X$. With $S_1$ open this node is floating, so its charge is conserved: $C_2\Delta V_{EB} + C_1(\Delta V_{EB} - \Delta V_{out}) = 0$, giving $\Delta V_{out} = (1 + C_2/C_1)\Delta V_{EB}$, a noninverting gain.

## Grading notes

+2: $\Delta V_{out} = (1 + C_2/C_1)V_T\ln(1 + I_2/I_1)$ via charge conservation at the floating node. +1: correct gain with a minor slip in $\Delta V_{EB}$ (e.g., written as $V_T\ln(I_2/I_1)$). 0: change given as $(C_2/C_1)\Delta V_{EB}$ (the step of $V_X$ itself omitted). -2 (asserted as fact): an inverting gain ($-C_2/C_1$), a gain of $C_1/C_2$, $\Delta V_{out} = \Delta V_{EB}$ (unity), or a change of zero.
