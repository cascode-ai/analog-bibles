$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}},\qquad \overline{I_{n,in}^2} = 4kT\gamma g_{m2}$$

- 输出节点（$I_1$ 为理想电流源）：$g_{m1}(V_G - V_{out}) + I_{n1} = 0$，因此 $V_{out} = V_G + I_{n1}/g_{m1}$（单位增益）。
- 电压（输入由信号源驱动）：$M_2$ 的电流流入输入信号源，不影响输出：$\overline{V_{n,in}^2} = 4kT\gamma/g_{m1}$。
- 电流（输入开路）：只有 $M_2$ 接到输入节点，因此其总电流为零：$g_{m2}V_{out} + I_{n2} = 0$，$V_{out} = -I_{n2}/g_{m2}$。输入电流 $I_{in}$ 必须流过 $M_2$：$V_{out} = I_{in}/g_{m2}$。因此 $\overline{I_{n,in}^2} = 4kT\gamma g_{m2}$；$M_1$ 没有贡献。
