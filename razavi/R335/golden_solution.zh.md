$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_F} + 4kTR_S\left(\frac{1 + g_mR_F}{g_mR_F}\right)^2$$

- 由于 $I_1$ 是理想的，经 $M_1$ 和 $R_F$ 离开漏极节点的交流电流总和为零，因此 $R_S$ 中没有交流电流：源极电压就等于 $R_S$ 自身的噪声电压，$V_S = V_{n,RS}$（对信号而言为零）。
- 漏极节点的基尔霍夫电流定律（KCL）：$g_m(V_{in} - V_S) + I_{n1} + \dfrac{V_{out} - V_S}{R_F} + I_{n,RF} = 0$，因此 $V_{out} = -g_mR_FV_{in} + (1 + g_mR_F)V_S - R_F(I_{n1} + I_{n,RF})$。
- 信号增益为 $-g_mR_F$。逐项折算到输入端：$M_1$ → $4kT\gamma/g_m$；$R_F$ → $4kT/(g_m^2R_F)$；$R_S$ → $4kTR_S(1+g_mR_F)^2/(g_mR_F)^2$。
