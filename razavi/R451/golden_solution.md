# Golden Solution - R451

## Reference answer

The flaw is equating the current through $r_{O2}$ with the current drawn from the output. The drain current of $M_2$ is the sum of $\Delta V_{r_{O2}}/r_{O2}$ and the controlled-source current $g_{m2}v_{GS2}$. When $V_X$ tends to rise, $A_1$ pulls the gate of $M_2$ down, so $g_{m2}v_{GS2}$ changes in the opposite direction and cancels almost all of the extra current in $r_{O2}$. By KCL at X, the net current through $M_2$ equals the current in $r_{O1}$, which is only $\Delta V_X/r_{O1}$, tiny precisely because $A_1$ holds $V_X$ nearly constant. So the output current change is tiny and $R_{out}$ is very large.

- Small-signal: $v_g = -A_1v_X$, $v_{GS2} = -(A_1+1)v_X$, $i = g_{m2}v_{GS2} + (\Delta V - v_X)/r_{O2}$, $v_X = i\,r_{O1}$ → $R_{out} = \Delta V/i = r_{O1} + r_{O2} + (A_1+1)g_{m2}r_{O1}r_{O2} \approx (A_1+1)g_{m2}r_{O2}r_{O1}$: the auxiliary amplifier multiplies the cascode output impedance by about $A_1 + 1$, it does not reduce it.
- Holding $V_X$ fixed means a large current flows in $r_{O2}$ and an equal and opposite current flows in the dependent source $g_{m2}v_{GS2}$. The two circulate inside $M_2$ and do not reach the external terminal.

## Grading notes

+2: identifies that the current through $r_{O2}$ is not the terminal current: the dependent source $g_{m2}v_{GS2}$, driven by $A_1$, cancels it, and KCL at X limits the total current to $\Delta V_X/r_{O1}$ (small), so $R_{out}$ rises to ≈ $(A_1+1)g_{m2}r_{O2}r_{O1}$. +1: correct KCL argument (the total current equals the small current in $r_{O1}$) without the expression or without naming the cancelling $g_m v_{GS}$ current. 0: correct conclusion that $R_{out}$ increases, with only a vague or partly wrong explanation. -2 (asserted as fact): agrees that $R_{out} \approx r_{O2}$, claims the gain boosting reduces the output impedance, or explains the flaw with a false claim (e.g., "$V_X$ actually changes a lot").
