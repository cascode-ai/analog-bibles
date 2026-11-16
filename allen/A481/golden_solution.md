# Golden Solution - A481

## Reference answer

$v_X = \frac{2}{5}V_{Analog} - \frac{2}{5}V_1 + \frac{V_2}{10} - \frac{V_{REF}}{40} = \frac{2}{5}\left[V_{Analog} - V_1 + \frac{V_2}{4} - \frac{V_{REF}}{16}\right]$.
For $ABCD = 1011$: $V_1 = 0.75V_{REF}$, $V_2 = V_{REF}$, $v_X = (0.32 - 0.30 + 0.10 - 0.025)V_{REF} = +0.095V_{REF} > 0$, so the comparator output (with $v_X$ at its inverting input) is low.

Derivation:
- Taps of the string: $V_{REF}$, $\frac34V_{REF}$, $\frac12V_{REF}$, $\frac14V_{REF}$. $V_1 = (2A + B + 1)V_{REF}/4$ ($A$ selects the upper pair, $B$/$\bar B$ the tap within it); $V_2 = (2C + D + 1)V_{REF}/4$ likewise. The $C/4$ capacitor switched by $\phi_1$ connects to the $V_{REF}/4$ tap.
- $\phi_1$: $v_X = 0$ (op amp in unity feedback). Left plates: $V_{Analog}$ capacitor $C$ at 0, $V_1$ capacitor $C$ at $V_1$, $C/4$ at $V_{REF}/4$, $V_2$ capacitor $C/4$ at 0.
- $\phi_2$: left plates at $V_{Analog}$, 0, 0, $V_2$ respectively; total capacitance at $v_X$ is $2.5C$. Charge conservation: $v_X = \frac{C V_{Analog} - C V_1 - \frac{C}{4}\cdot\frac{V_{REF}}{4} + \frac{C}{4}V_2}{2.5C}$.
- $A = 1$, $B = 0$ selects the $\frac34V_{REF}$ tap for $V_1$; $C = D = 1$ selects $V_{REF}$ for $V_2$.

## Grading notes

+2: correct $v_X$ (constant term $-V_{REF}/40$, or the equivalent factored form) and "low" with $V_1 = 0.75V_{REF}$, $V_2 = V_{REF}$. +1: correct conclusion with the constant term wrong (e.g. $-V_{REF}/16$ without the 2/5 factor) or another small coefficient slip that does not change the sign of $v_X$. 0: expression essentially right but $V_1$ or $V_2$ misread, or the conclusion missing. −2 (asserted as fact): "high", a reversed comparator polarity, the $V_1$ term with a + sign, or the capacitor ratios ignored.
