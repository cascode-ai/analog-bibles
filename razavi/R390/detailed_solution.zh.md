# 详细步骤 - R390

**思路。** 把放大器建模为与 $R_0$ 串联的 $A_0(V_+ - V_-)$；于是分压器 $R_1$–$R_2$ 既对输出采样，又对输出构成**负载**。在计入负载的情况下应用反馈理论，即求出计入负载的开环增益（open-loop gain）和输出电阻、反馈系数以及环路增益，再用直接列 KCL 方程的方法验证两个结果。

### 第 1 步 — 电路模型

放大器表示为理想电压源 $A_0(V_{in} - V_M)$ 经 $R_0$ 串联接到输出端，其输入端不吸取电流；把分压器的抽头（即 − 输入端）记为 M。$R_1$ 接在输出端与 M 之间，$R_2$ 接在 M 与地之间。

<!-- diagram: diagram-01.cir -->

由于 − 输入端不吸取电流，M 是一个空载的抽头：

$$V_M = \frac{R_2}{R_1 + R_2}V_{out} = \beta V_{out}, \qquad \beta = \frac{R_2}{R_1 + R_2}.$$

### 第 2 步 — 计入负载的开环参数

分压器不对输入侧构成负载（输入阻抗为无穷大），但在输出端与地之间挂上了 $R_1 + R_2$。断开环路（− 输入端接地，分压器仍接在输出端）后，$A_0V_{in}$ 驱动 $R_0$ 与 $R_1 + R_2$ 的串联：

$$A_{v,open} = A_0\,\frac{R_1 + R_2}{R_0 + R_1 + R_2}, \qquad R_{out,open} = R_0\parallel(R_1 + R_2) = \frac{R_0(R_1 + R_2)}{R_0 + R_1 + R_2}.$$

**环路增益：**

$$\beta A_{v,open} = \frac{R_2}{R_1 + R_2}\cdot\frac{A_0(R_1 + R_2)}{R_0 + R_1 + R_2} = \frac{A_0R_2}{R_0 + R_1 + R_2}.$$

### 第 3 步 — 闭环增益与输出阻抗

**增益：**

$$
\begin{aligned}
\frac{V_{out}}{V_{in}} &= \frac{A_{v,open}}{1 + \beta A_{v,open}} = \frac{\dfrac{A_0(R_1 + R_2)}{R_0 + R_1 + R_2}}{1 + \dfrac{A_0R_2}{R_0 + R_1 + R_2}}\\
&= \frac{A_0(R_1 + R_2)}{R_0 + R_1 + R_2 + A_0R_2}.
\end{aligned}
$$

**输出阻抗。** 对输出电压采样使输出电阻除以 $1 + $ 环路增益：

$$
\begin{aligned}
Z_{out} &= \frac{R_{out,open}}{1 + \beta A_{v,open}} = \frac{R_0(R_1 + R_2)}{R_0 + R_1 + R_2}\cdot\frac{R_0 + R_1 + R_2}{R_0 + R_1 + R_2 + A_0R_2}\\
&= \frac{R_0(R_1 + R_2)}{R_0 + R_1 + R_2 + A_0R_2}.
\end{aligned}
$$

### 第 4 步 — 用 KCL 直接验证

**增益。** 流出 $R_0$ 的电流等于流入分压器的电流：

$$\frac{A_0(V_{in} - \beta V_{out}) - V_{out}}{R_0} = \frac{V_{out}}{R_1 + R_2}.$$

乘以 $R_0$ 并合并 $V_{out}$ 项：

$$
\begin{aligned}
A_0V_{in} &= V_{out}\left[1 + \beta A_0 + \frac{R_0}{R_1 + R_2}\right]\\
\frac{V_{out}}{V_{in}} &= \frac{A_0}{1 + \dfrac{A_0R_2}{R_1 + R_2} + \dfrac{R_0}{R_1 + R_2}} = \frac{A_0(R_1 + R_2)}{R_1 + R_2 + A_0R_2 + R_0}.\ \checkmark
\end{aligned}
$$

**输出阻抗。** 令 $V_{in} = 0$，在输出端加 $V_x$，分压器中的电流为 $V_x/(R_1 + R_2)$，而电压源为 $-A_0\beta V_x$，因此 $R_0$ 中的电流为 $[V_x - (-A_0\beta V_x)]/R_0$：

$$
\begin{aligned}
I_x &= \frac{V_x}{R_1 + R_2} + \frac{V_x(1 + A_0\beta)}{R_0}\\
Z_{out} &= \frac{V_x}{I_x} = (R_1 + R_2)\ \Big\|\ \frac{R_0}{1 + A_0R_2/(R_1 + R_2)} = \frac{R_0(R_1 + R_2)}{R_0 + R_1 + R_2 + A_0R_2}.\ \checkmark
\end{aligned}
$$

第二种形式表明：分压器与被**不计负载**的环路增益 $1 + \beta A_0$ 减小后的 $R_0$ 相并联。

### 第 5 步 — 极限情况与数值感受

- $R_0 \to 0$：增益 $\to A_0/(1 + \beta A_0)$，$Z_{out} \to 0$。
- $A_0 \to \infty$：增益 $\to (R_1 + R_2)/R_2 = 1 + R_1/R_2$，$Z_{out} \to 0$；增益永远不会超过 $1 + R_1/R_2$。

**算例**（示意性数值）：$A_0 = 100$，$R_0 = 1\ \mathrm{k}\Omega$，$R_1 = 9\ \mathrm{k}\Omega$，$R_2 = 1\ \mathrm{k}\Omega$（$\beta = 0.1$）：

$$
\begin{aligned}
\frac{V_{out}}{V_{in}} &= \frac{100\times10\ \mathrm{k}}{1\ \mathrm{k} + 10\ \mathrm{k} + 100\ \mathrm{k}} = \frac{1000}{111} = 9.01,\\
Z_{out} &= \frac{1\ \mathrm{k}\times10\ \mathrm{k}}{111\ \mathrm{k}} = 90.1\ \Omega .
\end{aligned}
$$

若忽略负载效应，将得到 $100/11 = 9.09$ 和 $1\ \mathrm{k}\Omega/11 = 90.9\ \Omega$：实际上放大器的一部分输出电压损失在 $R_0$ 上。

### 结果

$$\frac{V_{out}}{V_{in}} = \frac{A_0(R_1 + R_2)}{R_0 + R_1 + R_2 + A_0R_2}, \qquad Z_{out} = \frac{R_0(R_1 + R_2)}{R_0 + R_1 + R_2 + A_0R_2} = \frac{R_0}{1 + A_0R_2/(R_1 + R_2)}\ \Big\|\ (R_1 + R_2).$$

它们由计入负载的开环增益 $A_0(R_1 + R_2)/(R_0 + R_1 + R_2)$、计入负载的开环输出电阻 $R_0\parallel(R_1 + R_2)$ 以及反馈系数 $\beta = R_2/(R_1 + R_2)$ 得到。

**常见错误。** 忽略负载效应，即写成 $A_0/(1 + \beta A_0)$ 和 $R_0/(1 + \beta A_0)$。开环增益必须计入 $R_0$ 与 $R_1 + R_2$ 之间的分压，开环输出电阻必须计入并联的 $R_1 + R_2$。

**常见错误。** 把反馈系数取为 $R_1/(R_1 + R_2)$。反馈到 − 输入端的是 $R_2$ 上的电压。

**常见错误。** 声称这种反馈会提高输出阻抗。对输出**电压**采样会使输出阻抗降低 $1 + \beta A_{v,open}$ 倍。
