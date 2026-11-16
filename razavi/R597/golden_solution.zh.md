$$\varepsilon = \left(\frac{C_1 + C_2}{C_1 + C_2 + G_mR_{out}C_2}\right)^2 \approx \left(\frac{1 + C_1/C_2}{G_mR_{out}}\right)^2,\qquad \frac{V_{out}}{V_{in}} = -\frac{C_1}{C_2}(1 - \varepsilon).$$
这是单独主放大器误差的平方。辅助放大器复制了主放大器的虚地（virtual ground）误差，而误差放大器在一阶上将其抵消。

推导（取建立后的值，因此电容电流为零；$A = G_mR_{out}$，$D = C_1 + C_2 + AC_2$）：
- 辅助放大器：$V_Z = -AV_X$；X 点的电荷平衡 $C_1(V_{in} - V_X) = C_2(V_X - V_Z)$ 给出 $V_X = C_1V_{in}/D$。
- 主放大器：Y 从主放大器接收 $-G_mV_M$，从误差放大器接收 $-G_mV_X$，因此 $V_Y = -A(V_M + V_X)$。主放大器输入端的电荷平衡 $C_1(V_{in} - V_M) = C_2(V_M - V_Y)$ 给出 $V_M = (C_1V_{in} - AC_2V_X)/D = C_1V_{in}(C_1 + C_2)/D^2$。
- $V_Y = -A(V_M + V_X) = -(C_1/C_2)V_{in}[1 - ((C_1 + C_2)/D)^2]$。
