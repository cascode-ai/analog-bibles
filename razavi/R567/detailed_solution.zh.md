# 详细步骤 - R567

**思路。** 运放理想时，X 是虚地（virtual ground），因此输入电流 $C_1sV_{in}$ 流入 $R_F \parallel (1/C_2s)$。该电路是一个高通电路，只有在远高于 $1/(R_FC_2)$ 的频率下，其增益才趋近 $-C_1/C_2$。要求 1 MHz 处的增益幅值与 $C_1/C_2$ 相差不超过 1 %，解出 $R_F$。

### 第 1 步 — 传递函数

$R_F$ 为 X 提供了一条到输出端的直流通路（从而确定其偏置），但在低频时，主导反馈阻抗的是它而不是 $C_2$。由于 $V_X = 0$（虚地），输入电流为 $I_{in} = C_1sV_{in}$，反馈阻抗为

$$Z_F = R_F \parallel \frac{1}{C_2s} = \frac{R_F\cdot\dfrac{1}{C_2s}}{R_F + \dfrac{1}{C_2s}} = \frac{R_F}{1 + R_FC_2s}.$$

$I_{in}$ 全部经 $Z_F$ 从 X 流向输出端：

$$
\begin{aligned}
V_{out} &= -I_{in}Z_F = -C_1sV_{in}\cdot\frac{R_F}{1 + R_FC_2s},\\
\frac{V_{out}}{V_{in}}(s) &= -\frac{R_FC_1s}{1 + R_FC_2s},
\end{aligned}
$$

这是一个一阶高通响应，在原点有一个零点，在 $\omega_p = 1/(R_FC_2)$ 处有一个极点。远低于 $\omega_p$ 时，$V_{out}/V_{in} \approx -R_FC_1s$（微分器）；远高于它时，$V_{out}/V_{in} \to -C_1/C_2 = -2/0.5 = -4$，即预期的增益。

### 第 2 步 — 相对于标称值的增益

除以 $-C_1/C_2$，并令 $x = \omega R_FC_2$：

$$\frac{H(s)}{-C_1/C_2} = \frac{R_FC_2s}{1 + R_FC_2s}, \qquad \frac{H(j\omega)}{-C_1/C_2} = \frac{jx}{1 + jx}, \qquad \left|\frac{H(j\omega)}{-C_1/C_2}\right| = \frac{x}{\sqrt{1 + x^2}}.$$

它总是小于 1，因此**增益误差**为 $1 - x/\sqrt{1 + x^2}$。

### 第 3 步 — 施加 1 % 的要求

幅值必须至少为标称值的 99 %：

$$\frac{x}{\sqrt{1 + x^2}} \ge 0.99 .$$

两边平方：

$$
\begin{aligned}
\frac{x^2}{1 + x^2} &\ge 0.9801\\
x^2 &\ge 0.9801 + 0.9801\,x^2\\
x^2(1 - 0.9801) &\ge 0.9801\\
x^2 &\ge \frac{0.9801}{0.0199} = 49.25\\
x &\ge 7.02 .
\end{aligned}
$$

代入 $\omega = 2\pi\times1$ MHz 和 $C_2 = 0.5$ pF：

$$
\begin{aligned}
\omega C_2 &= (2\pi\times10^{6}\ \mathrm{rad/s})(0.5\times10^{-12}\ \mathrm{F}) = 3.14\times10^{-6}\ \mathrm{S},\\
R_F &\ge \frac{x}{\omega C_2} = \frac{7.02}{3.14\times10^{-6}\ \mathrm{S}} = 2.23\times10^{6}\ \Omega .
\end{aligned}
$$

因此 $R_F \ge 2.23$ MΩ，即约 2.2 MΩ。

### 第 4 步 — 检验与解释

- **近似。** 当 $x$ 较大时，$x/\sqrt{1 + x^2} = (1 + 1/x^2)^{-1/2} \approx 1 - 1/(2x^2)$。令 $1/(2x^2) = 0.01$，得 $x = \sqrt{50} = 7.07$，$R_F \approx 2.25$ MΩ，与精确值很接近。
- **转折频率。** 取 $R_F = 2.23$ MΩ，$f_p = 1/(2\pi R_FC_2) = 1/(2\pi\times2.23\ \mathrm{M}\Omega\times0.5\ \mathrm{pF}) = 143$ kHz，因此 1 MHz 约为转折频率的 7 倍。
- **相位。** 相位与标称增益的相位仍相差 $\arctan(1/x) = \arctan(1/7.02) = 8.1^\circ$：幅值的收敛比相位快得多。
- **更严格的定义。** 若“增益误差”指**复数**误差的模，即 $|1 - H/(-C_1/C_2)| = |1/(1 + jx)| = 1/\sqrt{1 + x^2} \le 0.01$，则 $x \ge 100$，$R_F \ge 100/(3.14\times10^{-6}\ \mathrm{S}) = 31.8$ MΩ。按通常的含义，即幅值误差，结果为 2.23 MΩ。

### 结果

运放理想时，

$$\frac{V_{out}}{V_{in}}(s) = -\frac{R_FC_1s}{1 + R_FC_2s},$$

这是一个高通响应，只有当 $\omega \gg 1/(R_FC_2)$ 时才趋近 $-C_1/C_2 = -4$。相对于标称增益的幅值为 $x/\sqrt{1 + x^2}$，其中 $x = \omega R_FC_2$。要求 $x/\sqrt{1 + x^2} \ge 0.99$，得 $x \ge 7.02$，因此

$$R_F \ge \frac{7.02}{2\pi(1\ \mathrm{MHz})(0.5\ \mathrm{pF})} = 2.23\ \mathrm{M\Omega}\ (\approx 2.2\ \mathrm{M\Omega}).$$

（此时相移仍约为 8°。若把增益误差定义为复数误差 $1/\sqrt{1 + x^2} \le 1\%$，要求则变为 $R_F \ge 31.8$ MΩ。）

**常见错误。** 在极点中用 $C_1$ 代替 $C_2$，即 $x = \omega R_FC_1$，从而得到 $R_F \ge 0.56$ MΩ。$R_F$ 与 $C_2$ 并联，因此转折频率由 $R_FC_2$ 决定；$C_1$ 只决定输入电流。

**常见错误。** 把幅值误差当作 $1/(\omega R_FC_2) = 1/x$，并令其为 1 %，得到 31.8 MΩ，却称之为幅值判据。由于 $R_F$ 的电流与 $C_2$ 的电流**正交**（相位相差 90°），幅值误差是二阶的，约为 $1/(2x^2)$。

**常见错误。** 认为增益在所有频率下都是 $-R_FC_1s$，或者无论 $R_F$ 为何值都是 $-C_1/C_2$。两者都只是同一个高通响应分别在远低于和远高于 $1/(R_FC_2)$ 时的极限。
