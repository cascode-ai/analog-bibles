$$\frac{V_Y}{V_{in}}(s) = \frac{R_{out}C_Fs - A}{1 + R_{out}(C_F + C_L)s}$$
极点位于 $s = -1/[R_{out}(C_F + C_L)]$，右半平面零点（right-half-plane zero）位于 $s = +A/(R_{out}C_F)$；直流增益为 $-A$，高频增益为 $C_F/(C_F + C_L)$。

阶跃响应（$t \ge 0$），其中 $\tau = R_{out}(C_F + C_L)$：
$$V_Y(t) = \Delta V\left[-A + \left(A + \frac{C_F}{C_F + C_L}\right)e^{-t/\tau}\right]$$
它从 $\Delta V\,C_F/(C_F + C_L)$ 开始，衰减到 $-A\Delta V$。

推导：节点 Y 的基尔霍夫电流定律（KCL）：$\dfrac{V_Y + AV_{in}}{R_{out}} + (V_Y - V_{in})C_Fs + V_YC_Ls = 0 \Rightarrow V_Y[1 + R_{out}(C_F + C_L)s] = V_{in}(R_{out}C_Fs - A)$。对 $H(s)\Delta V/s$ 做部分分式（partial fractions）展开，即得阶跃响应。
