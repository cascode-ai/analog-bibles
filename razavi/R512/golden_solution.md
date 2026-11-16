# Golden Solution - R512

## Reference answer

$$V_{out}(t) = \frac{I_{SS}}{C_F}t\,u(t) - \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right)u(t) + \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right)e^{-t/\tau}u(t),\qquad \tau = \frac{C_L}{g_m}.$$
The minimum occurs at $t_{min} = \dfrac{C_L}{g_m}\ln\left(1 + \dfrac{C_F}{C_L}\right)$, where $V_{out} = -\dfrac{I_{SS}}{g_m}\left[1 - \dfrac{C_L}{C_F}\ln\left(1 + \dfrac{C_F}{C_L}\right)\right] < 0$.
- Equations (incremental): $C_F\,d(V_{out} - V_X)/dt = I_{in}$ (all of $I_{in}$ flows through $C_F$). KCL at the output: $g_mV_X + I_{in} + C_L\,dV_{out}/dt = 0$ ($I_1$ is constant).
- Eliminating $V_X = -(I_{in} + C_L\dot V_{out})/g_m$: $\dfrac{C_FC_L}{g_m}\ddot V_{out} + C_F\dot V_{out} = I_{in} - \dfrac{C_F}{g_m}\dot I_{in}$.
- Laplace with zero initial conditions and $I_{in} = I_{SS}/s$: $V_{out}(s) = \dfrac{I_{SS}}{C_F}\cdot\dfrac{1 - sC_F/g_m}{s^2(1 + s\tau)} = \dfrac{I_{SS}}{C_F}\left[\dfrac{1}{s^2} - \dfrac{C_F + C_L}{g_m}\cdot\dfrac1s + \dfrac{\tau^2(1 + C_F/C_L)}{1 + s\tau}\right]$, which inverts to the result above.
- The three terms: a ramp of slope $I_{SS}/C_F$; a negative step $-(I_{SS}/g_m)(1 + C_L/C_F)$; and a positive exponential of the same height decaying with τ = $C_L/g_m$. They sum to $V_{out}(0^+) = 0$ ($C_L$ holds the output), with initial slope $I_{SS}/C_F - (I_{SS}/g_m)(1 + C_L/C_F)/\tau = -I_{SS}/C_L$.
- The output first falls, reaches the minimum where $e^{-t/\tau} = C_L/(C_F + C_L)$, and then ramps up at $I_{SS}/C_F$, offset by $-(I_{SS}/g_m)(1 + C_L/C_F)$. For $C_L \to 0$ this becomes the familiar instantaneous drop $-I_{SS}/g_m$ followed by the ramp.

## Grading notes

+2: correct differential equation/Laplace solution, $V_{out}(0^+) = 0$, the three terms described (ramp, negative step, decaying positive exponential with τ = $C_L/g_m$), and $t_{min} = (C_L/g_m)\ln(1 + C_F/C_L)$. +1: correct $V_{out}(t)$ but $t_{min}$ missing or slightly wrong. (The minimum value itself is not asked for.) 0: right setup with an algebra slip that changes the result. -2 (asserted as fact): the exponential term carrying a minus sign (so that $V_{out}(0^+) = -2(I_{SS}/g_m)(1 + C_L/C_F)$ or no minimum exists), a response without the initial dip, or τ = $C_F/g_m$ or $r_OC_L$.
