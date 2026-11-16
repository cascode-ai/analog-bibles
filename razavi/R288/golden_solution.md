# Golden Solution - R288

## Reference answer

$$\frac{V_Y}{V_{in}}(s) = \frac{R_{out}C_Fs - A}{1 + R_{out}(C_F + C_L)s}$$
pole at $s = -1/[R_{out}(C_F + C_L)]$, right-half-plane zero at $s = +A/(R_{out}C_F)$; dc gain $-A$, high-frequency gain $C_F/(C_F + C_L)$.

Step response ($t \ge 0$), with $\tau = R_{out}(C_F + C_L)$:
$$V_Y(t) = \Delta V\left[-A + \left(A + \frac{C_F}{C_F + C_L}\right)e^{-t/\tau}\right]$$
It starts at $\Delta V\,C_F/(C_F + C_L)$ and decays to $-A\Delta V$.

Derivation: KCL at Y: $\dfrac{V_Y + AV_{in}}{R_{out}} + (V_Y - V_{in})C_Fs + V_YC_Ls = 0 \Rightarrow V_Y[1 + R_{out}(C_F + C_L)s] = V_{in}(R_{out}C_Fs - A)$. Partial fractions of $H(s)\Delta V/s$ give the step response.

## Grading notes

+2: correct $H(s)$ (pole $1/[R_{out}(C_F + C_L)]$, RHP zero $A/(R_{out}C_F)$) and step response with initial value $\Delta V\,C_F/(C_F+C_L)$, final value $-A\Delta V$ and $\tau = R_{out}(C_F + C_L)$. +1: correct $H(s)$ with a slip in the step-response amplitude. 0: correct $H(s)$ but no step response, or correct step response with $H(s)$ wrong by a slip. -2 (asserted as fact): zero omitted or placed in the left half plane, $C_L$ missing from the pole, or $C_L$ placed in the zero.
