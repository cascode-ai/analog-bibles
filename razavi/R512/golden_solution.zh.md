$$V_{out}(t) = \frac{I_{SS}}{C_F}t\,u(t) - \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right)u(t) + \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right)e^{-t/\tau}u(t),\qquad \tau = \frac{C_L}{g_m}.$$
最小值出现在 $t_{min} = \dfrac{C_L}{g_m}\ln\left(1 + \dfrac{C_F}{C_L}\right)$，此时 $V_{out} = -\dfrac{I_{SS}}{g_m}\left[1 - \dfrac{C_L}{C_F}\ln\left(1 + \dfrac{C_F}{C_L}\right)\right] < 0$。
- 方程（增量形式）：$C_F\,d(V_{out} - V_X)/dt = I_{in}$（$I_{in}$ 全部流过 $C_F$）。输出端的 KCL：$g_mV_X + I_{in} + C_L\,dV_{out}/dt = 0$（$I_1$ 恒定）。
- 消去 $V_X = -(I_{in} + C_L\dot V_{out})/g_m$：$\dfrac{C_FC_L}{g_m}\ddot V_{out} + C_F\dot V_{out} = I_{in} - \dfrac{C_F}{g_m}\dot I_{in}$。
- 在零初始条件下取拉普拉斯变换，并令 $I_{in} = I_{SS}/s$：$V_{out}(s) = \dfrac{I_{SS}}{C_F}\cdot\dfrac{1 - sC_F/g_m}{s^2(1 + s\tau)} = \dfrac{I_{SS}}{C_F}\left[\dfrac{1}{s^2} - \dfrac{C_F + C_L}{g_m}\cdot\dfrac1s + \dfrac{\tau^2(1 + C_F/C_L)}{1 + s\tau}\right]$，其反变换即上面的结果。
- 三项分别为：斜率为 $I_{SS}/C_F$ 的斜坡；负阶跃 $-(I_{SS}/g_m)(1 + C_L/C_F)$；以及高度相同、以 τ = $C_L/g_m$ 衰减的正指数项。三者之和为 $V_{out}(0^+) = 0$（$C_L$ 使输出保持不变），初始斜率为 $I_{SS}/C_F - (I_{SS}/g_m)(1 + C_L/C_F)/\tau = -I_{SS}/C_L$。
- 输出先下降，在 $e^{-t/\tau} = C_L/(C_F + C_L)$ 处达到最小值，然后以斜率 $I_{SS}/C_F$ 斜坡上升，并带有偏移 $-(I_{SS}/g_m)(1 + C_L/C_F)$。当 $C_L \to 0$ 时，它就变成我们熟悉的情形：先瞬间下降 $-I_{SS}/g_m$，再斜坡上升。
