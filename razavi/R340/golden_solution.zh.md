令 $K_2 \equiv R_S + R_F + g_{m1}R_FR_S$，则
$$\overline{V_{n,in}^2} = \frac{4kT\left[\gamma g_{m1}R_F^2 + R_F + R_S(1+g_{m1}R_F)^2 + \gamma g_{m2}K_2^2\right]}{\left(g_{m1}R_F + g_{m2}K_2\right)^2}$$

- $M_2$ 流入输出端的漏极电流为 $-g_{m2}V_{in} + I_{n2}$（PMOS，源极接 $V_{DD}$）。与电流源（current source）负载的情形一样，流过 $M_1$ 和 $R_F$ 的净电流等于这个电流，并流过 $R_S$：$V_S = R_S(I_{n2} - g_{m2}V_{in}) + V_{n,RS}$。
- $V_{out} = -g_{m1}R_FV_{in} + (1+g_{m1}R_F)V_S + R_F(I_{n2} - g_{m2}V_{in} - I_{n1} - I_{n,RF})$。
- 信号增益：$-(g_{m1}R_F + g_{m2}K_2)$（此时 $M_2$ 也提供信号电流）。各噪声源的系数：$I_{n1}, I_{n,RF}$：$-R_F$；$V_{n,RS}$：$1+g_{m1}R_F$；$I_{n2}$：$K_2$。除以增益即得结果。
- 验证：$g_{m2} \to 0$ 时 $M_2$ 的各项消失，得到单管电路的结果 $4kT[\gamma/g_{m1} + 1/(g_{m1}^2R_F) + R_S(1+g_{m1}R_F)^2/(g_{m1}R_F)^2]$。
