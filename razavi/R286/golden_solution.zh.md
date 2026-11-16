$$\frac{V_Y}{V_{in}}(s) = \frac{R_{out}C_Fs - A}{1 + R_{out}C_Fs}$$
极点位于 $s = -1/(R_{out}C_F)$；零点位于 $s = +A/(R_{out}C_F)$，是右半平面零点（right-half-plane zero）；直流增益为 $-A$，高频增益为 +1。

阶跃响应（$t \ge 0$）：$V_Y(t) = \Delta V\left[-A + (1 + A)\,e^{-t/(R_{out}C_F)}\right]$：在 $t = 0^+$ 时跳到 $+\Delta V$，随后以 $\tau = R_{out}C_F$ 按指数规律衰减到 $-A\Delta V$。

推导：节点 Y 的基尔霍夫电流定律（KCL）：$\dfrac{V_Y + AV_{in}}{R_{out}} + (V_Y - V_{in})C_Fs = 0 \Rightarrow V_Y(1 + R_{out}C_Fs) = V_{in}(R_{out}C_Fs - A)$。对于阶跃输入，$V_Y(s) = \dfrac{\Delta V}{s}\cdot\dfrac{R_{out}C_Fs - A}{1 + R_{out}C_Fs}$；由初值定理得 $V_Y(0^+) = \Delta V$，终值为 $-A\Delta V$。
