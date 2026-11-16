$V_{n,out} = (1 - g_mR_F)\dfrac{V_{n,in} + R_SI_{n,in}}{1 + g_mR_S}$，代入后变为 $V_{n,out} = V_{n,RF} - \dfrac{g_m(R_F + R_S)}{1 + g_mR_S}V_{n,M1}$，因此
$$\overline{V_{n,out}^2} = 4kTR_F + 4kT\gamma g_m\frac{(R_F + R_S)^2}{(1 + g_mR_S)^2},$$
是的，与直接分析的结果完全相同。

- 无噪声电路：栅极节点电压为 $V_G$，从 $R_S$ 流入栅极节点的电流 $-(V_G - V_{n,in})/R_S$、$I_{n,in}$ 以及反馈电流 $-g_mV_G$（负载为理想电流源，故 $I_F = -g_mV_G$）之和为零：$V_G = \dfrac{V_{n,in} + R_SI_{n,in}}{1 + g_mR_S}$；$V_{out} = (1 - g_mR_F)V_G$。
- $V_{n,in} + R_SI_{n,in} = \dfrac{g_m(R_F + R_S)V_{n,M1} - (1 + g_mR_S)V_{n,RF}}{g_mR_F - 1}$；乘以 $(1 - g_mR_F)/(1 + g_mR_S)$ 即得结果。
- 直接分析：负载为理想电流源时，$I_F = -I_{n,M1}/(1+g_mR_S)$，$V_{out} = (R_S + R_F)I_F + V_{n,RF}$：结果相同。
- 若把 $\overline{V_{n,in}^2}$ 与 $R_S^2\overline{I_{n,in}^2}$ 当作不相关的功率相加，就会得到错误结果；必须保留相关性。
