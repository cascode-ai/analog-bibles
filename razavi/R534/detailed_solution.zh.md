# 详细步骤 - R534

**思路。** 环路传输等于运放的增益乘以反相输入端周围网络的反馈系数（feedback factor）β(s)。用阻抗写出 β(s)，可以看出 $C_F$ 在其分子中引入了因子 $(1 + sR_2C_F)$（一个零点）；选择 $C_F$，使这个零点恰好落在网络的极点上。

### 第 1 步 — 环路传输与反馈网络

令 $R_2 = 100\ \mathrm{k\Omega}$（从输出端接到反相输入端 X），$R_1 = 50\ \mathrm{k\Omega}$（从 X 接地）。由 $V_{out} = -A(s)V_X$ 和 $V_X = \beta(s)V_{out}$，环路传输为

$$T(s) = -A(s)\,\beta(s).$$

$A(s)$ 包含运放自身的极点，包括与 $C_L$ 形成的极点，它与 $C_F$ 无关（下面求得的 25-fF 电容与 1-pF 的 $C_L$ 相比，带来的负载可以忽略）。$C_F$ 所改变的一切都体现在下面的阻抗中：

$$Z_2 = R_2\parallel\frac{1}{sC_F} = \frac{R_2}{1 + sR_2C_F},\qquad Z_1 = R_1\parallel\frac{1}{sC_{in}} = \frac{R_1}{1 + sR_1C_{in}} .$$

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 推导 β(s)

该网络是一个分压器：

$$\beta(s) = \frac{V_X}{V_{out}} = \frac{Z_1}{Z_1 + Z_2} = \frac{\dfrac{R_1}{1 + sR_1C_{in}}}{\dfrac{R_1}{1 + sR_1C_{in}} + \dfrac{R_2}{1 + sR_2C_F}} = \frac{R_1(1 + sR_2C_F)}{R_1(1 + sR_2C_F) + R_2(1 + sR_1C_{in})} .$$

分母为 $R_1 + sR_1R_2C_F + R_2 + sR_1R_2C_{in} = (R_1 + R_2) + sR_1R_2(C_{in} + C_F)$，因此

$$\boxed{\beta(s) = \frac{R_1\,(1 + sR_2C_F)}{(R_1 + R_2) + sR_1R_2\,(C_{in} + C_F)}}$$

### 第 3 步 — 证明 $C_F$ 引入一个零点

分子因子 $(1 + sR_2C_F)$ 在下述位置为零：

$$s_z = -\frac{1}{R_2C_F},\qquad \omega_z = \frac{1}{R_2C_F} ,$$

这是 β(s) 的一个左半平面零点，因而也是 $T = -A\beta$ 的零点；当 $C_F = 0$ 时则没有这个零点。网络的极点位于

$$\omega_p = \frac{R_1 + R_2}{R_1R_2\,(C_{in} + C_F)} = \frac{1}{(R_1\parallel R_2)(C_{in} + C_F)} ,$$

没有 $C_F$ 时，它就是由 $C_{in}$ 产生的极点：

$$
\begin{aligned}
R_1\parallel R_2 &= \frac{50\times100}{50 + 100}\ \mathrm{k\Omega} = 33.3\ \mathrm{k\Omega},\\
\omega_p &= \frac{1}{33.3\ \mathrm{k\Omega}\times50\ \mathrm{fF}} = \frac{1}{1.67\ \mathrm{ns}} = 6.0\times10^8\ \mathrm{rad/s}\quad(f_p = 95\ \mathrm{MHz}).
\end{aligned}
$$

在高频时，$C_{in}$ 对下臂形成旁路，因此 β 下降，即形成一个会损失相位裕度（phase margin）的极点；$C_F$ 旁路 $R_2$，使更多的 $V_{out}$ 传过去，即形成一个可以抵消它的零点。

### 第 4 步 — 选择 $C_F$ 以抵消极点

$$\frac{1}{R_2C_F} = \frac{R_1 + R_2}{R_1R_2(C_{in} + C_F)}
\quad\Longrightarrow\quad
R_1R_2(C_{in} + C_F) = R_2C_F(R_1 + R_2)
\quad\Longrightarrow\quad
R_1C_{in} + R_1C_F = R_1C_F + R_2C_F ,$$

即 $R_1C_{in} = R_2C_F$：

$$C_F = \frac{R_1}{R_2}\,C_{in} = \frac{50\ \mathrm{k\Omega}}{100\ \mathrm{k\Omega}}\times50\ \mathrm{fF} = 25\ \mathrm{fF}.$$

### 第 5 步 — 验算

当 $C_F = 25$ fF 时：

$$
\begin{aligned}
R_2C_F &= 100\ \mathrm{k\Omega}\times25\ \mathrm{fF} = 2.5\ \mathrm{ns},\qquad R_1C_{in} = 50\ \mathrm{k\Omega}\times50\ \mathrm{fF} = 2.5\ \mathrm{ns},\\
\omega_z &= \frac{1}{2.5\ \mathrm{ns}} = 4.0\times10^8\ \mathrm{rad/s}\quad(64\ \mathrm{MHz}),\\
\omega_p &= \frac{1}{33.3\ \mathrm{k\Omega}\times(50 + 25)\ \mathrm{fF}} = \frac{1}{2.5\ \mathrm{ns}} = 4.0\times10^8\ \mathrm{rad/s}.\ \checkmark
\end{aligned}
$$

由于 $C_F$ 也增加了节点电容，极点从 95 MHz 下移到 64 MHz，但零点恰好落在它上面。当 $R_2C_F = R_1C_{in}$ 时，

$$\beta(s) = \frac{R_1(1 + sR_2C_F)}{(R_1 + R_2)(1 + sR_2C_F)} = \frac{R_1}{R_1 + R_2} = \frac13$$

在**所有**频率上都成立：这是一个**补偿分压器**，其电阻比 $R_1/(R_1 + R_2)$ 等于电容比 $C_F/(C_F + C_{in}) = 25/75 = 1/3$，就像经过补偿的示波器探头一样。

### 结果

在反馈电阻上并联 $C_F$ 后，

$$\beta(s) = \frac{R_1(1 + sR_2C_F)}{(R_1 + R_2) + sR_1R_2(C_{in} + C_F)},$$

因此 $C_F$ 在环路传输 $-A(s)\beta(s)$ 中引入了一个位于 $\omega_z = 1/(R_2C_F)$ 的左半平面零点。网络的极点位于 $(R_1 + R_2)/[R_1R_2(C_{in} + C_F)]$（没有 $C_F$ 时 ≈ 95 MHz）。要使二者重合，需要 $R_2C_F = R_1C_{in}$：

$$C_F = \frac{R_1}{R_2}C_{in} = \frac{50\ \mathrm{k\Omega}}{100\ \mathrm{k\Omega}}\times50\ \mathrm{fF} = 25\ \mathrm{fF}.$$

此时二者都位于约 64 MHz 并相互抵消，且 $\beta = 1/3$ 在所有频率上都成立。

**常见错误。** 把比值弄反，得到 $C_F = (R_2/R_1)C_{in} = 100$ fF。条件是时间常数相等，即 $R_2C_F = R_1C_{in}$：跨接在**较大**电阻上的电容必须是**较小**的那个。

**常见错误。** 为了“匹配输入电容”而选择 $C_F = C_{in} = 50$ fF。这只在 $R_1 = R_2$ 时才正确；两个电容的分配比例必须与电阻相同。

**常见错误。** 把零点写成 $1/[(R_1\parallel R_2)C_F]$（这个组合属于极点），或者把 50 kΩ 当作反馈电阻。零点只来自反馈支路：$\omega_z = 1/(R_2C_F)$，其中 $R_2 = 100\ \mathrm{k\Omega}$。
