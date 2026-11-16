$$\frac{V_{out}}{V_{in}}(s) = \frac{R_{out}C_1s}{1 + G_mR_{out} + R_{out}C_1s} \approx \frac{C_1s/G_m}{1 + C_1s/G_m}\quad (G_mR_{out} \gg 1)$$
这是一阶高通响应：零点位于原点，极点位于 $\omega_p = (1 + G_mR_{out})/(R_{out}C_1) \approx G_m/C_1$，高频增益为 1，不反相。只有当 $\omega \ll G_m/C_1$ 时，节点 X（= $V_{out}$）才是良好的虚地（virtual ground）；$C_1$ 两端的电压为 $V_{in}(1 + G_mR_{out})/(1 + G_mR_{out} + R_{out}C_1s)$。

推导：X 与输出端是同一个节点。KCL：$C_1s(V_{in} - V_X) - G_mV_X - V_X/R_{out} = 0$（运放的输出电流为 $G_m(0 - V_X)$）。
