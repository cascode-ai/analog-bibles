# Golden Solution - R286

## Reference answer

$$\frac{V_Y}{V_{in}}(s) = \frac{R_{out}C_Fs - A}{1 + R_{out}C_Fs}$$
pole at $s = -1/(R_{out}C_F)$, zero at $s = +A/(R_{out}C_F)$ (right half plane); dc gain $-A$, high-frequency gain +1.

Step response ($t \ge 0$): $V_Y(t) = \Delta V\left[-A + (1 + A)\,e^{-t/(R_{out}C_F)}\right]$: a jump to $+\Delta V$ at $t = 0^+$, then an exponential decay to $-A\Delta V$ with $\tau = R_{out}C_F$.

Derivation: KCL at Y: $\dfrac{V_Y + AV_{in}}{R_{out}} + (V_Y - V_{in})C_Fs = 0 \Rightarrow V_Y(1 + R_{out}C_Fs) = V_{in}(R_{out}C_Fs - A)$. For the step, $V_Y(s) = \dfrac{\Delta V}{s}\cdot\dfrac{R_{out}C_Fs - A}{1 + R_{out}C_Fs}$; the initial value theorem gives $V_Y(0^+) = \Delta V$, the final value $-A\Delta V$.

## Grading notes

+2: correct $H(s) = (R_{out}C_Fs - A)/(1 + R_{out}C_Fs)$ (any equivalent form) with the RHP zero $A/(R_{out}C_F)$ and pole $1/(R_{out}C_F)$, and the step response $\Delta V[-A + (1+A)e^{-t/R_{out}C_F}]$. +1: correct transfer function with a slip in the step-response coefficients (e.g., initial value right, amplitude written as $A\Delta V$). 0: transfer function right but no step response, or step response described only qualitatively. -2 (asserted as fact): a transfer function without the zero (e.g., $-A/(1 + R_{out}C_Fs)$ or a Miller-type $(1+A)C_F$ pole), a left-half-plane zero, or time constant $(1+A)R_{out}C_F$.
