# 详细步骤 - R377

**思路。** 在栅极节点处接入 $V_{n,in}$ 和 $I_{n,in}$，让无噪声放大器由 $R_S$ 驱动（信号源置零），把输入参考噪声源当作带符号的信号，用基尔霍夫电流定律（KCL）求 $V_{out}$。然后代入它们用 $V_{n,M1}$ 和 $V_{n,RF}$ 表示的表达式，取平方，并与直接分析含噪声电路的结果比较。

### 第 1 步 — 无噪声放大器

理想的 $I_1$ 中没有小信号电流，且 $\lambda = 0$，因此 $M_1$ 吸取的电流必须经 $R_F$ 流入：

$$g_mV_G + \frac{V_{out} - V_G}{R_F} = 0 \quad\Longrightarrow\quad V_{out} = (1 - g_mR_F)\,V_G .$$

因此从 G 流入 $R_F$ 的电流为

$$\frac{V_G - V_{out}}{R_F} = g_mV_G ,$$

所以放大器对栅极节点的负载作用相当于一个 $1/g_m$ 的电阻。

### 第 2 步 — 输入参考噪声源的叠加

把 $R_S$ 与 $V_{n,in}$ 之间的节点记为 A。$R_S$ 接在地与 A 之间，$V_{n,in}$ 位于 A 与 G 之间（$V_A = V_G - V_{n,in}$），$I_{n,in}$ 从地注入 G，放大器从 G 吸取电流 $g_mV_G$。

<!-- diagram: diagram-01.cir -->

**G 点的 KCL 方程。** 经 $R_S$ 流入的电流 $(0 - V_A)/R_S = -(V_G - V_{n,in})/R_S$ 加上 $I_{n,in}$ 等于 $g_mV_G$：

$$-\frac{V_G - V_{n,in}}{R_S} + I_{n,in} = g_mV_G .$$

$$
\begin{aligned}
-V_G + V_{n,in} + R_SI_{n,in} &= g_mR_SV_G\\
V_G\,(1 + g_mR_S) &= V_{n,in} + R_SI_{n,in}\\
V_G &= \frac{V_{n,in} + R_SI_{n,in}}{1 + g_mR_S}.
\end{aligned}
$$

**输出：**

$$V_{n,out} = (1 - g_mR_F)\,\frac{V_{n,in} + R_SI_{n,in}}{1 + g_mR_S}.$$

两个噪声源先以**电压** $V_{n,in} + R_SI_{n,in}$ 的形式合成，然后才对结果取平方。

### 第 3 步 — 代入输入参考噪声源

代入给定的 $V_{n,in}$ 和 $I_{n,in}$：

$$
\begin{aligned}
V_{n,in} + R_SI_{n,in} &= \frac{g_mR_FV_{n,M1} - V_{n,RF} + g_mR_SV_{n,M1} - g_mR_SV_{n,RF}}{g_mR_F - 1}\\
&= \frac{g_m(R_F + R_S)\,V_{n,M1} - (1 + g_mR_S)\,V_{n,RF}}{g_mR_F - 1}.
\end{aligned}
$$

乘以 $(1 - g_mR_F)/(1 + g_mR_S)$，并利用 $(1 - g_mR_F)/(g_mR_F - 1) = -1$：

$$
\begin{aligned}
V_{n,out} &= -\frac{g_m(R_F + R_S)\,V_{n,M1} - (1 + g_mR_S)\,V_{n,RF}}{1 + g_mR_S}\\
&= V_{n,RF} - \frac{g_m(R_F + R_S)}{1 + g_mR_S}\,V_{n,M1}.
\end{aligned}
$$

### 第 4 步 — 输出噪声功率谱密度（PSD）

$V_{n,RF}$ 和 $V_{n,M1}$ 是相互独立的物理噪声源，因此此时（也只有此时）才能把功率相加。代入 $\overline{V_{n,RF}^2} = 4kTR_F$ 和 $g_m^2\overline{V_{n,M1}^2} = \overline{I_{n,M1}^2} = 4kT\gamma g_m$：

$$
\begin{aligned}
\overline{V_{n,out}^2} &= \overline{V_{n,RF}^2} + \frac{(R_F + R_S)^2}{(1 + g_mR_S)^2}\,g_m^2\overline{V_{n,M1}^2}\\
&= 4kTR_F + 4kT\gamma g_m\,\frac{(R_F + R_S)^2}{(1 + g_mR_S)^2}.
\end{aligned}
$$

### 第 5 步 — 直接分析含噪声电路

令信号源为零，设 $I_F = (V_{out} - V_G - V_{n,RF})/R_F$ 为 $R_F$ 中从输出端流向栅极的电流。对输出节点列 KCL，并考虑栅极节点（栅极无电流，因此 $I_F$ 流过 $R_S$）：

$$g_m(V_G + V_{n,M1}) + I_F = 0, \qquad V_G = R_SI_F .$$

$$
\begin{aligned}
g_mR_SI_F + g_mV_{n,M1} + I_F &= 0\\
I_F &= -\frac{g_mV_{n,M1}}{1 + g_mR_S}.
\end{aligned}
$$

沿 $R_F$ 应用基尔霍夫电压定律（KVL）：

$$V_{out} = V_G + R_FI_F + V_{n,RF} = (R_S + R_F)\,I_F + V_{n,RF} = V_{n,RF} - \frac{g_m(R_S + R_F)}{1 + g_mR_S}\,V_{n,M1}.$$

这与第 3 步的结果逐项**完全相同**，因此功率谱密度也相同。由 $I_{n,M1} = g_mV_{n,M1}$ 可知：$R_F$ 的噪声以单位增益出现在输出端，而 $M_1$ 的噪声电流看到的是闭环输出阻抗 $(R_S + R_F)/(1 + g_mR_S)$。

### 第 6 步 — 相关性为何重要

$V_{n,in}$ 和 $I_{n,in}$ 由相同的两个噪声源构成。若分别取平方后再相加，

$$\overline{V_{n,out}^2} \stackrel{?}{=} \frac{(1 - g_mR_F)^2}{(1 + g_mR_S)^2}\left(\overline{V_{n,in}^2} + R_S^2\overline{I_{n,in}^2}\right),$$

就会丢掉交叉项 $2R_S\,\overline{V_{n,in}I_{n,in}^*}$，其中 $\overline{V_{n,in}I_{n,in}^*} = 4kTg_mR_F(1 + \gamma)/(g_mR_F - 1)^2 > 0$。取 $g_mR_F = 10$、$g_mR_S = 1$、$\gamma = 2/3$，以 $4kT/g_m$ 为单位：正确结果为 $10 + \tfrac23\cdot\tfrac{121}{4} = 30.2$，而按不相关求和得到 $20.25\times(0.947 + 0.132) = 21.8$，约低 28 %。像第 2 步那样先叠加再取平方，就能自动保留相关性。

### 结果

$$V_{n,out} = (1 - g_mR_F)\,\frac{V_{n,in} + R_SI_{n,in}}{1 + g_mR_S} = V_{n,RF} - \frac{g_m(R_F + R_S)}{1 + g_mR_S}\,V_{n,M1},$$

$$\overline{V_{n,out}^2} = 4kTR_F + 4kT\gamma g_m\,\frac{(R_F + R_S)^2}{(1 + g_mR_S)^2}.$$

**是的**，只要把相关的输入参考噪声源当作信号（而不是功率）来叠加，这个结果就与直接分析含噪声电路得到的输出噪声完全相同。

**常见错误。** 把 $\overline{V_{n,in}^2}$ 与 $R_S^2\overline{I_{n,in}^2}$ 当作不相关的量相加。这里的交叉项为正，忽略它会低估噪声，并（错误地）显得输入参考模型与直接分析的结果不一致。

**常见错误。** 忘记放大器对栅极节点有负载作用：它吸取电流 $g_mV_G$，因此 $V_G = (V_{n,in} + R_SI_{n,in})/(1 + g_mR_S)$，而不是 $V_{n,in} + R_SI_{n,in}$。

**常见错误。** 用增益 $-g_mR_F$ 代替 $1 - g_mR_F$。漏掉前馈（feedforward）项“1”会破坏第 3 步中的精确抵消 $(1 - g_mR_F)/(g_mR_F - 1) = -1$。
