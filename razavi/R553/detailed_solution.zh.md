# 详细步骤 - R553

**思路。** 对 $g_mR_D$ 取关于温度的对数导数，把乘积转化为各相对 TC 之和，并要求在尾电流恒定、温度为 300 K 时总和为零。于是电阻的 TC 必须抵消 $g_m$ 的 TC。

### 第 1 步 — 增益和 $g_m$ 的相对 TC

差分对的每个晶体管流过 $I_{SS}/2$，因此

$$A_v = g_mR_D = R_D\sqrt{2\mu C_{ox}\frac WL\cdot\frac{I_{SS}}{2}} = R_D\sqrt{\mu C_{ox}\frac WL I_{SS}} .$$

$C_{ox}$ 和 $W/L$ 为常数，待求的电阻 TC 为 $\alpha_R \equiv \dfrac{1}{R_D}\dfrac{dR_D}{dT}$。对 $\ln A_v$ 求导：

$$\frac{1}{A_v}\frac{dA_v}{dT} = \frac{1}{R_D}\frac{dR_D}{dT} + \frac12\cdot\frac1\mu\frac{d\mu}{dT} + \frac12\cdot\frac{1}{I_{SS}}\frac{dI_{SS}}{dT}.$$

由于 $\mu = \mu_0\,(T/T_0)^{-3/2}$，

$$\frac{1}\mu\frac{d\mu}{dT} = -\frac{3}{2T},$$

且 $I_{SS}$ 恒定，所以单独 $g_m$ 的 TC 为

$$\frac{1}{g_m}\frac{dg_m}{dT} = \frac12\left(-\frac{3}{2T}\right) + 0 = -\frac{3}{4T},$$

即电流恒定时 $g_m \propto \mu^{1/2} \propto T^{-3/4}$：平方根使迁移率的指数减半。

### 第 2 步 — 零 TC 条件与电阻的 TC

令增益的 TC 为零：

$$
\begin{aligned}
0 &= \alpha_R + \frac12\left(-\frac{3}{2T}\right) + 0\\
\alpha_R &= \frac{3}{4T}.
\end{aligned}
$$

在 $T = 300$ K 时：

$$\alpha_R = \frac{3}{4\times300\ \mathrm{K}} = \frac{3}{1200}\ \mathrm{K^{-1}} = 2.5\times10^{-3}\ \mathrm{K^{-1}} = +2500\ \mathrm{ppm/K} = +0.25\ \%/\mathrm{K}.$$

该 TC 为**正**：器件的跨导（transconductance）减小时，负载电阻必须以相同的相对速率增大。轻掺杂电阻具有这一量级的正 TC，约为几千 ppm/K，例如 n 阱（n-well）电阻。

### 第 3 步 — “在室温下”与“在所有温度下”

要在每个温度下都精确抵消，需要 $R_D \propto T^{3/4}$。实际电阻通常具有线性 TC，$R_D(T) = R_0[1 + \alpha_R(T - T_0)]$，因此只在 $T_0 = 300$ K 处精确抵消。归一化增益为

$$\frac{A_v(T)}{A_v(T_0)} = \left[1 + \alpha_R(T - T_0)\right]\left(\frac{T}{T_0}\right)^{-3/4}.$$

例如，在 400 K 时：$(1 + 0.0025\times100)(400/300)^{-0.75} = 1.25\times0.806 = 1.007$。

| $T$ (K) | $\alpha_R = +2500$ ppm/K 时的增益 | $\alpha_R = 0$ 时的增益 |
|---|---|---|
| 200 | 1.017 | 1.355 |
| 250 | 1.003 | 1.147 |
| 300 | 1.000 | 1.000 |
| 350 | 1.002 | 0.891 |
| 400 | 1.007 | 0.806 |

增益在 300 K 处是平坦的（斜率为零），在 200–400 K 范围内变化不到 2 %，而采用固定电阻时变化范围为 −19 % 至 +36 %。

### 结果

$$\frac{1}{R_D}\frac{dR_D}{dT} = +\frac{3}{4T} \approx +2.5\times10^{-3}\ \mathrm{K^{-1}}\ (+2500\ \mathrm{ppm/K},\ +0.25\ \%/\mathrm{K})\ \text{at 300 K},$$

即局部地有 $R_D \propto T^{3/4}$。在 $I_{SS}$ 恒定时，$g_m = \sqrt{\mu C_{ox}(W/L)I_{SS}} \propto \mu^{1/2} \propto T^{-3/4}$，所以 $(1/g_m)(dg_m/dT) = -3/(4T) = -0.25$ %/K，$R_D$ 必须以相同的相对速率增大。

**常见错误。** 取 $g_m \propto \mu$（忘了平方根），得出 $1.5/T \approx 5000$ ppm/K。电流固定时，只需抵消迁移率指数的一半。

**常见错误。** 弄错符号。迁移率随温度下降，因此 $g_m$ 下降，电阻必须随温度**增大**（正 TC）才能补偿。

**常见错误。** 在错误的温度下计算 $3/(4T)$，或者没有换算单位。以开尔文为单位，$3/(4\times300) = 2.5\times10^{-3}$ /K，也就是 2500 ppm/°C。
