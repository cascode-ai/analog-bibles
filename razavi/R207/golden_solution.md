# Golden Solution - R207

## Reference answer

All three curves change only in the window where the pair steers its current ($|V_{in1} - V_{in2}| < \sqrt{2I_{SS}/\beta_n}$ around $V_{in1} = 1.5$ V) and are flat outside it. $V_{out}$ is an inverting S-curve; $V_X$ falls and $V_Y$ rises (mirror images); the swings are limited because $R_1$ lets part of the current of the "off" side flow through the other cascode.
- At balance: $V_X = V_Y = V_{b1} - V_{GS3}(I_{SS}/2)$, $R_1$ carries no current, outputs at $V_{DD} - |V_{GS5}(I_{SS}/2)|$, $V_{out} = 0$.
- As $V_{in1}$ rises, $I_{D1}$ grows: the current through $M_3$, $I_3 = I_{D1} + (V_X - V_Y)/R_1$, grows, so $V_X = V_{b1} - V_{GS3}(I_3)$ falls and the left output $V_{DD} - |V_{GS5}(I_3)|$ falls; the right side does the opposite.
- Low $V_{in1}$ ($M_1$ off, $I_{D2} = I_{SS}$): $M_3$ still carries $I_3 = (V_X - V_Y)/R_1$, the current flowing from X through $R_1$ into Y, and $M_4$ carries $I_{SS} - I_3$, with $V_{GS4}(I_{SS} - I_3) - V_{GS3}(I_3) = I_3R_1$. So $V_X > V_Y$ by $I_3R_1$ and $V_{out} = |V_{GS6}(I_{SS} - I_3)| - |V_{GS5}(I_3)| = \sqrt{2/\beta_p}(\sqrt{I_{SS} - I_3} - \sqrt{I_3}) > 0$. The mirror values hold at high $V_{in1}$.
- Large $R_1$: $I_3 \to 0$ and $|V_{out}| \to \sqrt{2I_{SS}/\beta_p}$; small $R_1$: X and Y nearly shorted, the cascodes share the current and $V_{out}$, $V_X - V_Y$ shrink toward zero.
- Central slope: $dV_{out}/d(V_{in1} - V_{in2}) = -(g_{m1}/g_{m5})\cdot\dfrac{g_{m3}R_1/2}{1 + g_{m3}R_1/2}$.

## Grading notes

+2: inverting S-curve for $V_{out}$, $V_X$ falling and $V_Y$ rising (mirror images, equal at balance at $V_{b1} - V_{GS3}$), flat ends whose size is reduced by the current shared through $R_1$ (correct dependence on $R_1$), and a central slope consistent with $(g_{m1}/g_{m5})\,(g_{m3}R_1/2)/(1 + g_{m3}R_1/2)$. +1: correct directions and shapes but the end levels described as full diode swings ($\sqrt{2I_{SS}/\beta_p}$) without the $R_1$ sharing. 0: only $V_{out}$ correct, $V_X$/$V_Y$ wrong or missing. -2 (asserted as fact): $V_X$ and $V_Y$ moving in the same direction, $V_X$ swinging rail to rail, a non-inverting $V_{out}$, or $R_1$ treated as a load setting the gain to $g_{m1}R_1$.
