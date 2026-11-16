# 详细步骤 - R386

**思路。** 该电路是带电容反馈的共源放大器（common-source amplifier），其开环增益（open-loop gain）为 $A = g_{m1}r_{O1}$：$C_1$ 从输入端接到栅极，$C_2$ 从输出端接回栅极。推导闭环增益，确定 $\beta = C_2/(C_1 + C_2)$，把增益误差写成 $\approx 1/(\beta A)$，在 $A = 50$ 时求出使误差低于 5 % 的最大 $C_1/C_2$，再求出输出阻抗 $r_{O1}/(1 + \beta A)$。

### 第 1 步 — 小信号模型（small-signal model）

把栅极节点记为 X；它只与 $C_1$ 和 $C_2$ 相连（栅极不吸取电流，并假设偏置网络不对它构成负载）。$M_1$ 表示为从 out 流向地的 $g_{m1}V_X$ 与 $r_{O1}$ 并联，$I_1$ 相当于开路。取最好情况 $A = g_{m1}r_{O1} = 50$。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 闭环增益

**对 X 点应用基尔霍夫电流定律（KCL）：**

$$
\begin{aligned}
sC_1(V_{in} - V_X) + sC_2(V_{out} - V_X) &= 0\\
V_X &= \frac{C_1V_{in} + C_2V_{out}}{C_1 + C_2},
\end{aligned}
$$

这是一个在任何频率下都成立的电容分压关系，因为与 X 相连的只有电容。

**输出节点（低频）。** 当 $1/(\omega C_2) \gg r_{O1}$ 时，$C_2$ 中的电流与 $V_{out}/r_{O1}$ 相比可以忽略，因此

$$g_{m1}V_X + \frac{V_{out}}{r_{O1}} = 0 \quad\Longrightarrow\quad V_{out} = -AV_X .$$

**联立：**

$$
\begin{aligned}
V_{out} &= -A\,\frac{C_1V_{in} + C_2V_{out}}{C_1 + C_2}\\
V_{out}\,(C_1 + C_2 + AC_2) &= -AC_1V_{in}\\
\frac{V_{out}}{V_{in}} &= -\frac{AC_1}{C_1 + C_2 + AC_2} = -\frac{C_1/C_2}{1 + \dfrac{1 + C_1/C_2}{A}} .
\end{aligned}
$$

当 $A \to \infty$ 时，增益为 $-C_1/C_2$。

### 第 3 步 — 反馈系数与增益误差

令 $V_{in} = 0$，输出电压反馈到 X 的比例为

$$\beta = \frac{C_2}{C_1 + C_2}, \qquad \frac{1}{\beta} = 1 + \frac{C_1}{C_2},$$

因此

$$\frac{V_{out}}{V_{in}} = -\frac{C_1}{C_2}\cdot\frac{1}{1 + \dfrac{1}{\beta A}} \approx -\frac{C_1}{C_2}\left(1 - \frac{1}{\beta A}\right), \qquad \varepsilon \approx \frac{1}{\beta A} = \frac{1 + C_1/C_2}{A}.$$

闭环增益越大，需要的 $C_1/C_2$ 越大，即 $\beta$ 越小，环路就越弱；在 $A$ 上限为 50 的情况下，只有较小的增益才能做到精确。

### 第 4 步 — 误差低于 5 % 时的最大增益

由 $\varepsilon \le 0.05$ 和 $A = 50$ 得：

$$
\begin{aligned}
\frac{1 + C_1/C_2}{50} &\le 0.05\\
1 + \frac{C_1}{C_2} &\le 2.5\\
\frac{C_1}{C_2} &\le 1.5 .
\end{aligned}
$$

在极限情况下，$\beta = 1/2.5 = 0.4$，$\beta A = 20$，实际增益为

$$\frac{V_{out}}{V_{in}} = -\frac{1.5}{1 + 2.5/50} = -\frac{1.5}{1.05} = -1.43 .$$

因此，**最大闭环增益约为 1.5（$C_1/C_2$ 的标称值），实际值约为 1.43。**

**严格的误差定义。** 若要求 $1 - |A_v|/(C_1/C_2) \le 0.05$：

$$
\begin{aligned}
\frac{1}{1 + (1 + C_1/C_2)/50} &\ge 0.95\\
\frac{1 + C_1/C_2}{50} &\le \frac{1}{0.95} - 1 = 0.0526\\
1 + \frac{C_1}{C_2} &\le 2.63, \qquad \frac{C_1}{C_2} \le 1.63,
\end{aligned}
$$

实际增益为 $0.95\times1.63 \approx 1.55$，$\beta A = 50/2.63 = 19$。

### 第 5 步 — 低频闭环输出阻抗

令 $V_{in} = 0$，在输出端施加测试电压 $V_t$，串联的 $C_2$–$C_1$ 支路对 $V_t$ 分压：

$$V_X = \frac{C_2}{C_1 + C_2}V_t = \beta V_t .$$

低频时电容支路中的电流可以忽略，因此

$$I_t = \frac{V_t}{r_{O1}} + g_{m1}V_X = V_t\left(\frac{1}{r_{O1}} + \beta g_{m1}\right),$$

$$Z_{out} = \frac{V_t}{I_t} = \frac{r_{O1}}{1 + \beta g_{m1}r_{O1}} = \frac{r_{O1}}{1 + \beta A}.$$

代入 $\beta A = 20$：

$$Z_{out} = \frac{r_{O1}}{21}, \qquad\text{and since } r_{O1} = \frac{50}{g_{m1}}:\quad Z_{out} = \frac{50/21}{g_{m1}} \approx \frac{2.4}{g_{m1}}.$$

（按严格的误差定义，$\beta A = 19$，$Z_{out} = r_{O1}/20 = 2.5/g_{m1}$。）

### 结果

$$\frac{V_{out}}{V_{in}} = -\frac{C_1/C_2}{1 + (1 + C_1/C_2)/(g_{m1}r_{O1})}, \qquad \beta = \frac{C_2}{C_1 + C_2}, \qquad \text{error} \approx \frac{1}{\beta g_{m1}r_{O1}}.$$

当 $g_{m1}r_{O1} = 50$ 且误差低于 5 % 时：$1 + C_1/C_2 \le 2.5$，因此 $C_1/C_2 \le 1.5$，**最大闭环增益的标称值 ≈ 1.5（实际值 ≈ −1.43）**。（按严格的误差定义：$C_1/C_2 \approx 1.63$，增益 ≈ −1.55。）

低频输出阻抗：$Z_{out} = \dfrac{r_{O1}}{1 + g_{m1}r_{O1}C_2/(C_1 + C_2)} = \dfrac{r_{O1}}{21} \approx \dfrac{2.4}{g_{m1}}$（按严格定义 ≈ $r_{O1}/20 = 2.5/g_{m1}$）。

**常见错误。** 把反馈系数取为 $C_1/(C_1 + C_2)$。**输出**电压反馈到 X 的比例是 $\beta = C_2/(C_1 + C_2)$。

**常见错误。** 声称可以实现接近 $g_{m1}r_{O1}$ 的增益（例如 47.5）。闭环增益为 $C_1/C_2$，而精度要求 $\beta A \ge 20$，在 $A = 50$ 时这把增益限制在 1.5 左右。

**常见错误。** 给出 $Z_{out} = r_{O1}$，或者认为反馈会使其升高。对输出电压进行采样会使输出阻抗降低 $1 + \beta A$ 倍。
