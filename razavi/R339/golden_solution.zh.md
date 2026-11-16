$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT}{g_{m1}^2R_F} + 4kTR_S\frac{(1+g_{m1}R_F)^2}{(g_{m1}R_F)^2} + 4kT\gamma g_{m2}\frac{(R_S + R_F + g_{m1}R_FR_S)^2}{(g_{m1}R_F)^2}$$

- $M_2$ 等效为一个理想电流源加上注入输出节点的噪声电流 $I_{n2}$。输出端的基尔霍夫电流定律（KCL）：经 $M_1$ 和 $R_F$ 流出的电流等于 $I_{n2}$；同一电流流入 $R_S$，因此 $V_S = R_SI_{n2} + V_{n,RS}$（$R_S$ 中没有信号电流）。
- 输出端：$V_{out} = -g_{m1}R_FV_{in} + (1+g_{m1}R_F)V_S + R_F(I_{n2} - I_{n1} - I_{n,RF})$。
- 信号增益为 $-g_{m1}R_F$；$I_{n2}$ 的系数为 $(1+g_{m1}R_F)R_S + R_F$；把每个贡献除以 $g_{m1}R_F$，即得到四项。
- 当 $R_S = 0$ 时，结果化为带反馈电阻的共源级（common-source stage）：$4kT\gamma/g_{m1} + 4kT/(g_{m1}^2R_F) + 4kT\gamma g_{m2}/g_{m1}^2$。
