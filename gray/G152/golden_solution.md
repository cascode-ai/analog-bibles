# Golden Solution - G152

## Reference answer

$V_o = V_S\,\dfrac{C_1 + C_2}{C_2}\cdot\dfrac{1}{1 + \dfrac{C_1 + C_2 + C_P}{a\,C_2}}$, i.e. a positive gain of $1 + C_1/C_2$ with a fractional error of about $(C_1+C_2+C_P)/(aC_2)$.

Charge conservation at the op-amp inverting input (the summing node), which is isolated once $M_3$ opens:
- During $\phi_1$: $M_1$ puts $V_S$ on the left plate of $C_1$; $M_3$ grounds the summing node; the modified $M_4$ puts $V_S$ on the right plate of $C_2$. Charge on the summing-node plates: $Q_1 = (0 - V_S)C_1 + (0 - V_S)C_2 + 0\cdot C_P = -V_S(C_1 + C_2)$.
- During $\phi_2$: $M_2$ grounds the left plate of $C_1$, and $M_5$ connects the right plate of $C_2$ to $V_o$. The summing node sits at $V_i = -V_o/a$, so $Q_2 = -\dfrac{V_o}{a}C_1 - \dfrac{V_o}{a}C_P + \left(-\dfrac{V_o}{a} - V_o\right)C_2$.
- $Q_2 = Q_1$ gives $V_S(C_1 + C_2) = V_o\left[C_2 + (C_1 + C_2 + C_P)/a\right]$, which is the result above. As $a \to \infty$, $V_o \to V_S(1 + C_1/C_2)$. Compared with the grounded-$M_4$ circuit (gain $C_1/C_2$), the stored charge on $C_2$ adds one extra unit of $V_S$.

## Grading notes

+2: the expression above or an algebraically equivalent form, including both the ideal gain $(C_1+C_2)/C_2$ and the finite-gain error term with $C_1 + C_2 + C_P$; positive sign. +1: correct ideal gain $1 + C_1/C_2$ with the finite-gain term slightly wrong (e.g. $C_P$ omitted from the error term), or a minor sign-convention slip that is clearly notational. 0: correct charge-conservation setup but an algebra error in the final expression. -2 (asserted as fact): the gain $C_1/C_2$ (ignoring the charge stored on $C_2$ by $V_S$), a negative gain $-(C_1+C_2)/C_2$ from a misread switch arrangement, or $C_P$ claimed to change the ideal ($a\to\infty$) gain.
