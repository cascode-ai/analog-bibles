# 详细步骤 - R566

**思路。** 用模型代替运放（内部电压源 $-A_vV_X$ 经 $R_{out}$ 输出），把电容表示为导纳 $Cs$，在 X 和输出端分别列 KCL。消去 $V_X$ 得到 $V_{out}/V_{in}$；然后读出直流增益、零点、极点和高频极限。

### 第 1 步 — 采用运放模型的电路

$R_F = \infty$ 时，把运放模型的内部节点称为“int”：理想电压源 $-A_vV_X$ 驱动该节点，$R_{out}$ 把它连接到 $V_{out}$。在 X 处没有电流流入运放，唯一的负载是 $C_2$。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 节点 X 处的 KCL

流过 $C_1$ 的电流等于流过 $C_2$ 的电流：

$$C_1s\,(V_{in} - V_X) = C_2s\,(V_X - V_{out}),$$

$$
\begin{aligned}
C_1V_{in} - C_1V_X &= C_2V_X - C_2V_{out}\\
V_X\,(C_1 + C_2) &= C_1V_{in} + C_2V_{out}\\
V_X &= \frac{C_1V_{in} + C_2V_{out}}{C_1 + C_2}.
\end{aligned}
$$

### 第 3 步 — 输出节点处的 KCL

流过 $R_{out}$ 的电流全部经 $C_2$ 流向 X：

$$\frac{-A_vV_X - V_{out}}{R_{out}} = C_2s\,(V_{out} - V_X),$$

$$-A_vV_X - V_{out} = R_{out}C_2s\,V_{out} - R_{out}C_2s\,V_X ,$$

$$V_X\,(R_{out}C_2s - A_v) = V_{out}\,(1 + R_{out}C_2s).$$

### 第 4 步 — 消去 $V_X$

代入第 2 步的 $V_X$，并乘以 $(C_1 + C_2)$：

$$(C_1V_{in} + C_2V_{out})(R_{out}C_2s - A_v) = V_{out}(1 + R_{out}C_2s)(C_1 + C_2),$$

$$C_1V_{in}(R_{out}C_2s - A_v) = V_{out}\left[(1 + R_{out}C_2s)(C_1 + C_2) - C_2(R_{out}C_2s - A_v)\right].$$

展开方括号，两个 $R_{out}C_2^2s$ 项相互抵消：

$$
\begin{aligned}
&(C_1 + C_2) + R_{out}C_2s\,C_1 + R_{out}C_2s\,C_2 - R_{out}C_2^2s + A_vC_2\\
&= C_1 + C_2 + A_vC_2 + R_{out}C_1C_2s\\
&= C_1 + (1 + A_v)C_2 + R_{out}C_1C_2s .
\end{aligned}
$$

因此

$$\frac{V_{out}}{V_{in}}(s) = \frac{C_1(R_{out}C_2s - A_v)}{C_1 + (1 + A_v)C_2 + R_{out}C_1C_2s} = -\frac{C_1\,(A_v - R_{out}C_2s)}{C_1 + (1 + A_v)C_2 + R_{out}C_1C_2s},$$

或者，把分子分母同除以 $C_2$，

$$\frac{V_{out}}{V_{in}}(s) = -\frac{C_1}{C_2}\cdot\frac{A_v - R_{out}C_2s}{1 + A_v + \dfrac{C_1}{C_2} + R_{out}C_1s}.$$

这就是把电阻型反相放大器公式中的 $R_1 \to 1/(C_1s)$、$R_2 \to 1/(C_2s)$ 后得到的结果。

### 第 5 步 — 代入给定数值

$C_1/C_2 = 2/0.5 = 4$，$R_{out}C_2s = (0.5\ \mathrm{pF})R_{out}s$，$R_{out}C_1s = (2\ \mathrm{pF})R_{out}s$：

$$\frac{V_{out}}{V_{in}}(s) = -4\,\frac{A_v - (0.5\ \mathrm{pF})R_{out}s}{5 + A_v + (2\ \mathrm{pF})R_{out}s}.$$

### 第 6 步 — 响应的特点

**低频**（$s \to 0$）：

$$\frac{V_{out}}{V_{in}}\Big|_{s=0} = -\frac{4A_v}{5 + A_v} \;\to\; -4 = -\frac{C_1}{C_2}\quad\text{as } A_v \to \infty,$$

这就是熟悉的有限增益误差，反馈系数（feedback factor）为 $\beta = C_2/(C_1 + C_2) = 0.2$。

**极点：**

$$s_p = -\frac{1 + A_v + C_1/C_2}{R_{out}C_1} = -\frac{5 + A_v}{(2\ \mathrm{pF})\,R_{out}}.$$

输出端看到的是 $C_1$ 与 $C_2$ 的串联，$C_{eq} = C_1C_2/(C_1 + C_2) = 0.4$ pF，它经由 $R_{out}$ 充放电，而反馈把该电阻降低为 $R_{out}/(1 + \beta A_v)$；时间常数 $R_{out}(0.4\ \mathrm{pF})/(1 + 0.2A_v) = R_{out}(2\ \mathrm{pF})/(5 + A_v)$，与上式一致。

**零点：**

$$s_z = +\frac{A_v}{R_{out}C_2} = \frac{A_v}{(0.5\ \mathrm{pF})\,R_{out}},$$

这是由经 $C_2$ 的前馈通路产生的**右半平面零点**：在该频率处，$V_X$ 经 $C_2$ 推出的电流恰好抵消放大器经 $R_{out}$ 提供的电流，因此 $V_{out} = 0$（令 $V_{out} = 0$，输出端的 KCL 为 $-A_vV_X/R_{out} = -C_2sV_X$，所以 $s = A_v/(R_{out}C_2)$）。

**高频**（$s \to \infty$）：

$$\frac{V_{out}}{V_{in}} \to -4\cdot\frac{-(0.5\ \mathrm{pF})R_{out}s}{(2\ \mathrm{pF})R_{out}s} = +1 :$$

与 $R_{out}$ 相比，电容此时近似短路，把 $V_{in}$ 直接耦合到输出端。

**示例**（题目中未给出这些数值）：取 $A_v = 1000$、$R_{out} = 10$ kΩ，则直流增益为 $-4000/1005 = -3.98$，极点位于 $1005/(10\ \mathrm{k}\Omega\times2\ \mathrm{pF}) = 5.0\times10^{10}$ rad/s，右半平面零点位于 $1000/(10\ \mathrm{k}\Omega\times0.5\ \mathrm{pF}) = 2\times10^{11}$ rad/s。

### 结果

$$\frac{V_{out}}{V_{in}}(s) = -\frac{C_1\,(A_v - R_{out}C_2s)}{C_1 + (1 + A_v)C_2 + R_{out}C_1C_2s} = -\frac{C_1}{C_2}\cdot\frac{A_v - R_{out}C_2s}{1 + A_v + \dfrac{C_1}{C_2} + R_{out}C_1s}.$$

代入给定数值：

$$\frac{V_{out}}{V_{in}} = -4\,\frac{A_v - (0.5\ \mathrm{pF})R_{out}s}{5 + A_v + (2\ \mathrm{pF})R_{out}s}.$$

低频增益为 $-4A_v/(5 + A_v)$（$A_v$ 很大时 → −4）。在 $s = A_v/(R_{out}C_2)$ 处有一个右半平面零点（来自经 $C_2$ 流入 $R_{out}$ 的前馈），在 $s = -(1 + A_v + C_1/C_2)/(R_{out}C_1)$ 处有一个极点，在极高频率下增益趋于 +1。采用诺顿形式的运放模型（$G_m$ 与 $R_{out}$）可得到相同的结果，其中 $A_v = G_mR_{out}$。

**常见错误。** 断定 $R_{out}$ 没有影响，增益就是 $-C_1/C_2$。这只是低频、无穷大增益时的极限；$R_{out}$ 同时产生了极点和右半平面零点。

**常见错误。** 忽略经 $C_2$ 的前馈电流，即写成 $V_{out} = -A_vV_X$，或者漏掉分子中的 $-R_{out}C_2s$ 项。这一电流流过 $R_{out}$，产生了零点；没有它，高频增益会错误地趋于零而不是 +1。

**常见错误。** 把内部电压源取为 $+A_vV_X$，这会得到同相的低频增益。反相输入端在 X，因此电压源为 $-A_vV_X$，直流增益必须为负。
