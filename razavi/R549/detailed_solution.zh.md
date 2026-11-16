# 详细步骤 - R549

**思路。** 理想放大器迫使 $V_X = V_Y$，这使两条支路的电流相等，并使 $R_3$ 两端的电压为 $\Delta V_{BE} = V_T\ln n$；由给定的流过 $R_3$ 的电流即可确定 $n$。于是 $V_{out}$ 等于一个 $V_{BE}$ 加上 PTAT 电压 $V_T\ln n$ 的若干倍，令其 TC 为零即可确定 $R_2$，从而确定 $R_1 = R_2$。

### 第 1 步 — 支路电流与 $n$

由于 $V_X = V_Y$，$R_1$ 和 $R_2$ 两端的电压相同；又因为 $R_1 = R_2$，它们流过的电流相等。$R_3$ 中流过的是 $I_2$，因此

$$I_1 = I_2 = I = 50\ \mu\mathrm{A}.$$

对地列 KVL 得 $V_X = V_{BE1}$，$V_Y = V_{BE2} + IR_3$，因此在 $I_{S2} = nI_{S1}$（忽略基极电流）时

$$IR_3 = V_{BE1} - V_{BE2} = V_T\ln\frac{I}{I_{S1}} - V_T\ln\frac{I}{nI_{S1}} = V_T\ln n .$$

数值计算：

$$
\begin{aligned}
V_{R3} &= IR_3 = (50\ \mu\mathrm{A})(1\ \mathrm{k}\Omega) = 50\ \mathrm{mV},\\
V_T &= \frac{kT}{q} = (8.617\times10^{-5}\ \mathrm{V/K})(300\ \mathrm{K}) = 25.85\ \mathrm{mV},\\
\ln n &= \frac{50\ \mathrm{mV}}{25.85\ \mathrm{mV}} = 1.934,\\
n &= e^{1.934} = 6.92 \approx 7 .
\end{aligned}
$$

### 第 2 步 — 零 TC 条件与 $R_2$

沿第二条支路（$Q_2$、$R_3$、$R_2$），并利用 $I = V_T\ln n/R_3$：

$$V_{out} = V_{BE2} + I(R_2 + R_3) = V_{BE2} + \left(1 + \frac{R_2}{R_3}\right)V_T\ln n .$$

PTAT 项满足

$$\frac{\partial}{\partial T}\left(V_T\ln n\right) = \frac{k}{q}\ln n = \frac{V_T\ln n}{T} = \frac{50\ \mathrm{mV}}{300\ \mathrm{K}} = 0.1667\ \mathrm{mV/K},$$

而 $R_2/R_3$ 与温度无关，因此

$$\frac{\partial V_{out}}{\partial T} = \frac{\partial V_{BE2}}{\partial T} + \left(1 + \frac{R_2}{R_3}\right)\frac{k}{q}\ln n .$$

取 $\partial V_{BE2}/\partial T = -1.5$ mV/K：

$$
\begin{aligned}
-1.5\ \mathrm{mV/K} + \left(1 + \frac{R_2}{R_3}\right)(0.1667\ \mathrm{mV/K}) &= 0\\
1 + \frac{R_2}{R_3} &= \frac{1.5}{0.1667} = 9.0\\
\frac{R_2}{R_3} &= 8.0\\
R_2 &= 8.0\times1\ \mathrm{k}\Omega = 8\ \mathrm{k}\Omega .
\end{aligned}
$$

因此 $R_1 = R_2 \approx 8$ kΩ。

**用教材中的经验规则交叉验证。** 把条件写成 $(1 + R_2/R_3)\ln n = 1.5\ \mathrm{mV/K}/(k/q)$，并取近似值 $k/q \approx 0.087$ mV/K，就得到熟悉的 $(1 + R_2/R_3)\ln n \approx 17.2$，所以 $1 + R_2/R_3 = 17.2/1.934 = 8.89$，$R_2 = 7.9$ kΩ。这一微小差别只是由 $k/q$ 的舍入造成的。

### 第 3 步 — −1.5 mV/K 是哪个 $V_{BE}$ 的 TC？

沿第一条支路，

$$V_{out} = V_{BE1} + IR_1 = V_{BE1} + \frac{R_1}{R_3}V_T\ln n ,$$

这是同一个电压，因为 $V_{BE1} = V_{BE2} + V_T\ln n$ 且 $R_1 = R_2$。然而两个 TC 并不相同；对 $V_{BE1} - V_{BE2} = V_T\ln n$ 求导，

$$\frac{\partial V_{BE2}}{\partial T} = \frac{\partial V_{BE1}}{\partial T} - \frac{k}{q}\ln n = \frac{\partial V_{BE1}}{\partial T} - 0.167\ \mathrm{mV/K}:$$

$Q_2$ 的电流密度低 $n$ 倍，因此它的 $V_{BE}$ 较低，下降得也稍快一些。若改为把 −1.5 mV/K 作为 $V_{BE1}$ 的 TC：

$$
\begin{aligned}
-1.5\ \mathrm{mV/K} + \frac{R_1}{R_3}(0.1667\ \mathrm{mV/K}) &= 0\\
\frac{R_1}{R_3} &= 9.0, \qquad R_1 = R_2 = 9\ \mathrm{k}\Omega .
\end{aligned}
$$

题目没有说明 −1.5 mV/K 指的是哪个晶体管，而两种理解相差 $(k/q)\ln n \approx 0.17$ mV/K。通常的约定（即教材中的形式 $V_{BE2} + (1 + R_2/R_3)V_T\ln n$）把它用于 $Q_2$，得到 8 kΩ。两个值都是自洽的一阶设计；实际中 $R_2$ 要在仿真中进行微调。

### 第 4 步 — 检验

- **电流。** $I_1 = I_2 = 50\ \mu\mathrm{A}$，因此放大器总共提供 100 μA。
- **输出电压。** PTAT 部分为 $(1 + R_2/R_3)V_T\ln n = 9\times50\ \mathrm{mV} = 0.45$ V。取典型值 $V_{BE2} \approx 0.75$–0.8 V，则 $V_{out} \approx 1.2$–1.25 V，接近 $E_g/q$。
- **$n$ 取整数。** $Q_2$ 由整数个单位器件构成，因此取 $n = 7$。此时 $V_T\ln 7 = 25.85\times1.946 = 50.3$ mV，电流为 50.3 μA 而不是 50 μA，并且 $1 + R_2/R_3 = 1.5/(0.08617\times1.946) = 8.95$，即 $R_2 = 7.95$ kΩ：这些变化都可以忽略。许多版图（layout）改用 $n = 8$，这样 $Q_1$ 就可以位于 3×3 共质心（common-centroid）阵列的中心。

### 结果

$$n = \exp\!\left(\frac{50\ \mathrm{mV}}{25.85\ \mathrm{mV}}\right) \approx 6.9 \;(\approx 7), \qquad R_1 = R_2 \approx 8\ \mathrm{k}\Omega,$$

以上结果由 $V_T\ln n = IR_3 = 50$ mV 和 $(1 + R_2/R_3)\times0.167\ \mathrm{mV/K} = 1.5$ mV/K 得到，其中 −1.5 mV/K 被看作 $V_{BE2}$ 的 TC。按“$(1 + R_2/R_3)\ln n = 17.2$”规则得到 7.9 kΩ。若把 −1.5 mV/K 看作 $V_{BE1}$ 的 TC，则由 $V_{out} = V_{BE1} + (R_1/R_3)V_T\ln n$ 得 $R_1 = R_2 \approx 9$ kΩ。两条支路都流过 50 μA，$V_{out} \approx V_{BE2} + 0.45\ \mathrm{V} \approx 1.2$ V。

**常见错误。** 漏掉“1 +”，写成 $V_{out} = V_{BE2} + (R_2/R_3)V_T\ln n$，忘记了 PTAT 电流除了流过 $R_2$ 之外还流过 $R_3$。这会出于错误的理由得到 $R_2 = 9$ kΩ（若采用 $V_{BE2}$ 的 TC，这个结果就大了 1 kΩ）。

**常见错误。** 用错误的关系求 $n$，例如 $n = 50\ \mathrm{mV}/V_T = 1.93$（忘了取对数），或 $\ln n = 17.2$（把零 TC 条件中的乘积 $(1 + R_2/R_3)\ln n$ 与 $\ln n$ 本身混为一谈）。

**常见错误。** 对 PTAT 项只用 $V_T$ 本身的 TC（0.0862 mV/K），而不是 $(k/q)\ln n = 0.167$ mV/K。这会使所需的电阻比加倍。
