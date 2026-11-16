# Golden Solution - R403

## Reference answer

Neglecting the current drawn by $R_1 + R_2$: $Z_{out}(s) = \dfrac{R_0}{1 + \beta A(s)} = R_0\dfrac{1 + s/\omega_0}{1 + \beta A_0 + s/\omega_0} = \dfrac{R_0}{1+\beta A_0}\cdot\dfrac{1 + s/\omega_0}{1 + s/[(1+\beta A_0)\omega_0]}$, $\beta = R_2/(R_1+R_2)$.

Plot of $|Z_{out}|$: flat at $R_0/(1+\beta A_0)$ up to $\omega_0$ (zero), rising at +20 dB/dec between $\omega_0$ and $(1+\beta A_0)\omega_0$ (pole), flat at $R_0$ above.

Explanation: the loop gain $\beta A(s)$ falls above $\omega_0$, so the feedback's ability to hold the output voltage (and lower $Z_{out}$) fades with frequency; at high frequency the output impedance returns to the open-loop $R_0$. The output looks inductive: $Z_{out} = R_0\,\|\,[R_0/(\beta A_0) + sL]$ with $L = R_0/(\beta A_0\omega_0)$.

Including the divider's loading: $Z_{out} = \dfrac{R_0(R_1+R_2)(1 + s/\omega_0)}{(R_0+R_1+R_2)(1 + s/\omega_0) + A_0R_2}$, from $R_0(R_1+R_2)/(R_0+R_1+R_2+A_0R_2)$ at low frequency to $R_0\|(R_1+R_2)$ at high frequency, same shape.

## Grading notes

+2: $Z_{out}(s)$ equivalent to the reference (with or without the $R_1+R_2$ loading), the plot with the low-frequency level $R_0/(1+\beta A_0)$, the zero at $\omega_0$, the pole at $(1+\beta A_0)\omega_0$ and the high-frequency level $R_0$ (or $R_0\|(R_1+R_2)$), and the explanation that the falling loop gain makes $Z_{out}$ rise (inductive behavior). +1: expression and plot right, explanation missing or vague, or one break point misplaced. 0: only the low-frequency value right. -2 (asserted as fact): $|Z_{out}|$ decreasing with frequency, a pole at $\omega_0$ in $Z_{out}$, or feedback claimed to raise the output impedance.
