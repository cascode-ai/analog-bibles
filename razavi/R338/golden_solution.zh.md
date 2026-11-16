$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_S} + \frac{\gamma}{g_{m1}^2g_{m2}R_S^2} + \frac{(1+g_{m2}R_S)^2}{g_{m1}^2g_{m2}^2R_S^2R_D}\right]$$

- X 点的基尔霍夫电流定律（KCL）：由 $M_1$ 的电流（$g_{m1}V_{in} + I_{n1}$）、$R_S$ 的电流和 $M_2$ 的电流（$g_{m2}V_X + I_{n2}$，从 X 流向输出端）得到 $V_X = \dfrac{I_{n,RS} - g_{m1}V_{in} - I_{n1} - I_{n2}}{g_{m2} + 1/R_S}$。
- 输出：$V_{out} = R_D(g_{m2}V_X + I_{n2}) + R_DI_{n,RD} = R_D\dfrac{g_{m2}I_{n,RS} - g_{m1}g_{m2}V_{in} - g_{m2}I_{n1} + I_{n2}/R_S}{g_{m2} + 1/R_S} + R_DI_{n,RD}$。
- 增益为 $-g_{m1}R_D\dfrac{g_{m2}R_S}{1+g_{m2}R_S}$（$M_1$ 的一部分信号电流损失在 $R_S$ 中）。
- 折算到输入端：$M_1$ → $4kT\gamma/g_{m1}$；$R_S$ → $4kT/(g_{m1}^2R_S)$；$M_2$ → $4kT\gamma g_{m2}/(g_{m1}g_{m2}R_S)^2$；$R_D$ → $4kT(1+g_{m2}R_S)^2/(g_{m1}^2g_{m2}^2R_S^2R_D)$。
