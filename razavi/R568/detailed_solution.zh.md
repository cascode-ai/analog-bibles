# 详细步骤 - R568

**思路。** 在采样模式下，运放的输出端与反相输入端相连，因此 X 和 $V_{out}$ 是同一个节点。把运放建模为 $G_m$ 和 $R_{out}$，在该节点列一个 KCL 方程就能得到 $V_{out}/V_{in}$，由此可以看出 X 实际上是多么好的虚地。

### 第 1 步 — 小信号模型

有三个元件连接在 X（$= V_{out}$）上：来自 A 的 $C_1$，它向 X 注入 $C_1s\,(V_{in} - V_X)$；运放的输出电流 $G_m(V_+ - V_-) = G_m(0 - V_X) = -G_mV_X$，注入 X；以及 $R_{out}$，它把 $V_X/R_{out}$ 引向地。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — X 处的 KCL 与传递函数

$$C_1s\,(V_{in} - V_X) - G_mV_X - \frac{V_X}{R_{out}} = 0 ,$$

$$C_1s\,V_{in} = V_X\left(C_1s + G_m + \frac{1}{R_{out}}\right), \qquad \frac{V_X}{V_{in}} = \frac{C_1s}{C_1s + G_m + 1/R_{out}} .$$

分子分母同乘以 $R_{out}$：

$$\frac{V_{out}}{V_{in}}(s) = \frac{R_{out}C_1s}{1 + G_mR_{out} + R_{out}C_1s} .$$

对于设计良好的运放，$G_mR_{out} \gg 1$，因此 $1 + G_mR_{out} \approx G_mR_{out}$，再除以 $G_mR_{out}$：

$$\frac{V_{out}}{V_{in}}(s) \approx \frac{C_1s/G_m}{1 + C_1s/G_m} .$$

### 第 3 步 — 极点、零点与极限

- **原点处的零点：** 直流电流无法通过 $C_1$，因此在直流时 X 稳定在 0 V。
- **一个极点**，位于
$$\omega_p = \frac{1 + G_mR_{out}}{R_{out}C_1} \approx \frac{G_m}{C_1}.$$
- **高频增益**（$s \to \infty$）：$R_{out}C_1s/(R_{out}C_1s) = 1$；此时 $C_1$ 相当于短路，X 跟随 $V_{in}$。

因此该响应是**一阶高通**，高频增益为单位增益，不反相。在单位增益反馈下，X 对地呈现的是闭环输出电阻 $1/(G_m + 1/R_{out}) \approx 1/G_m$，因此输入看到的是 $C_1$ 与约 $1/G_m$ 的串联：一个时间常数为 $C_1/G_m$ 的 RC 高通电路。

### 第 4 步 — 对采样的意义

目标是使 X 保持虚地，让 $C_1$ 充电到完整的输入电压。$C_1$ 两端的实际电压为

$$
\begin{aligned}
V_{in} - V_X &= V_{in}\left[1 - \frac{R_{out}C_1s}{1 + G_mR_{out} + R_{out}C_1s}\right]\\
&= V_{in}\,\frac{1 + G_mR_{out}}{1 + G_mR_{out} + R_{out}C_1s},
\end{aligned}
$$

这是一个**低通**响应，极点同样为 $\omega_p \approx G_m/C_1$。当 $\omega \ll G_m/C_1$ 时，电容跟踪 $V_{in}$，X 是良好的虚地；在 $G_m/C_1$ 附近或更高的频率下，一部分输入电压出现在 X 上，而不是 $C_1$ 两端。

对于阶跃输入，X 先随 $V_{in}$ 跳变，然后以如下时间常数衰减回 0：

$$\tau = \frac{R_{out}C_1}{1 + G_mR_{out}} \approx \frac{C_1}{G_m}.$$

**示例**（题目中未给出这些数值）：取 $G_m = 1$ mS、$C_1 = 1$ pF，则 $\tau \approx 1\ \mathrm{pF}/1\ \mathrm{mS} = 1$ ns，$\omega_p \approx 10^{9}$ rad/s（$f_p \approx 159$ MHz）。

### 结果

$$\frac{V_{out}}{V_{in}}(s) = \frac{R_{out}C_1s}{1 + G_mR_{out} + R_{out}C_1s} \approx \frac{C_1s/G_m}{1 + C_1s/G_m}\quad(G_mR_{out} \gg 1).$$

这是一阶高通响应：零点位于原点，极点位于 $\omega_p = (1 + G_mR_{out})/(R_{out}C_1) \approx G_m/C_1$，高频增益为 1，不反相。只有当 $\omega \ll G_m/C_1$ 时，节点 X（$= V_{out}$）才是良好的虚地。$C_1$ 两端的电压为 $V_{in}(1 + G_mR_{out})/(1 + G_mR_{out} + R_{out}C_1s)$。

**常见错误。** 因为 X 是“虚地”就断定 $V_{out} = 0$。这只在低频时成立；传递函数表明，随着频率升高，X 会跟随输入：远低于极点时 $V_{out}/V_{in} \approx C_1s/G_m$，高于极点时为 1。

**常见错误。** 把运放电流的符号弄错。由于 $V_+ = 0$、$V_- = V_X$，运放注入的是 $-G_mV_X$（负反馈）；若取 $+G_mV_X$，会在 $(G_mR_{out} - 1)/(R_{out}C_1)$ 处产生一个右半平面极点，即电路不稳定。

**常见错误。** 套用放大模式（amplification mode）的结果，即由 $C_1$ 和反馈电容决定增益。在该模式下，输出端直接连到 X，唯一的电容是 $C_1$，因此响应是高通的，而不是平坦的增益 $-C_1/C_2$。
