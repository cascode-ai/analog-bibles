当 $C_{GD} = 0$ 时：$\xi = C_{GS}C_{DB}$，分子为 $-g_mR_D$，分母变为 $R_SR_DC_{GS}C_{DB}s^2 + (R_SC_{GS} + R_DC_{DB})s + 1 = (1 + R_SC_{GS}s)(1 + R_DC_{DB}s)$。因此
$$\frac{V_{out}}{V_{in}} = \frac{1}{1 + R_SC_{GS}s}\cdot\frac{-g_mR_D}{1 + R_DC_{DB}s}$$
- 第一个因子是 $V_X/V_{in}$：输入节点只看到 $R_S$ 和 $C_{GS}$，因此其极点 $1/(R_SC_{GS})$ 可以直接看出。
- 第二个因子是 $V_{out}/V_X$：$M_1$ 的电流 $g_mV_X$ 流入 $R_D\|C_{DB}$，形成输出极点 $1/(R_DC_{DB})$。
- 没有 $C_{GD}$ 时，没有任何元件把输出耦合回输入，也没有前馈（feedforward），因此两个节点相互隔离，传递函数可以精确地因式分解。零点（$g_m/C_{GD}$）移到无穷远处。
