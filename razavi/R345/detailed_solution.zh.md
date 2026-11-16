# 详细步骤 - R345

**思路。** 输入短路时，$R_F$ 只是输出端的负载，输出短路噪声电流除以短路跨导即得 $\overline{V_{n,in}^2}$。输入开路时，$R_F$ 中没有电流，因此栅极跟随输出（再加上 $R_F$ 的噪声电压）；输出噪声除以跨阻的平方即得 $\overline{I_{n,in}^2}$。

### 第 1 步 — 小信号模型（small-signal model）

- **$M_1$：** 从输出端流向地的电流 $g_mv_{in}$，其沟道噪声 $I_{n1}$（$\overline{I_{n1}^2} = 4kT\gamma g_m$）与之并联（$\lambda = 0$，无体效应）。
- **$R_D$：** 接在输出端与交流地之间，其诺顿噪声 $I_{nD}$（$\overline{I_{nD}^2} = 4kT/R_D$）从 $V_{DD}$ 流入输出端。
- **$R_F$：** 接在输出端与栅极之间，其噪声可视方便建模为诺顿电流 $I_{nF}$（$\overline{I_{nF}^2} = 4kT/R_F$）或串联的戴维南电压 $V_{nF}$（$\overline{V_{nF}^2} = 4kTR_F$）。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 输入参考噪声电压（输入短路）

输入由理想信号源固定时，信号和噪声看到的是同一个输出电阻（output resistance）$R_D\parallel R_F$，因此 $\overline{V_{n,in}^2} = \overline{I_{n,sc}^2}/G_m^2$，即输出短路噪声电流与短路跨导之比。

**$G_m$。** 输出短路时，$M_1$ 从输出节点抽出 $g_mv_{in}$，而 $R_F$ 向该节点注入 $(v_{in} - 0)/R_F$：

$$i_{sc} = g_mv_{in} - \frac{v_{in}}{R_F} = \left(g_m - \frac{1}{R_F}\right)v_{in}, \qquad G_m = g_m - \frac{1}{R_F}.$$

流过 $R_F$ 的前馈（feedforward）电流符号相反，使跨导略有减小（电压增益为 $A_v = -(g_m - 1/R_F)(R_D\parallel R_F)$）。

**噪声。** 输入短路时，$v_{gs} = 0$，$R_F$ 把输出端接到地，因此互不相关的噪声电流 $I_{n1}$、$I_{nD}$ 和 $I_{nF}$ 都流入输出短路线：

$$\overline{I_{n,sc}^2} = 4kT\gamma g_m + \frac{4kT}{R_D} + \frac{4kT}{R_F},$$

$$\overline{V_{n,in}^2} = \frac{\overline{I_{n,sc}^2}}{G_m^2} = \frac{4kT\left(\gamma g_m + \dfrac{1}{R_D} + \dfrac{1}{R_F}\right)}{\left(g_m - \dfrac{1}{R_F}\right)^2}.$$

### 第 3 步 — 输入开路时的输出噪声

输入开路时，栅极节点只与 $R_F$ 相连，因此 **$R_F$ 中没有电流**；采用其噪声的戴维南模型，

$$v_G = v_{out} + V_{nF}.$$

在输出端应用基尔霍夫电流定律（KCL），注意 $R_F$ 中没有电流：

$$\frac{0 - v_{out}}{R_D} + I_{nD} = g_mv_G + I_{n1} = g_m(v_{out} + V_{nF}) + I_{n1},$$

$$
\begin{aligned}
-v_{out}\left(g_m + \frac{1}{R_D}\right) &= g_mV_{nF} + I_{n1} - I_{nD}\\
v_{out} &= -\frac{g_mV_{nF} + I_{n1} - I_{nD}}{g_m + 1/R_D}.
\end{aligned}
$$

晶体管经 $R_F$ 实际上成了二极管连接（diode-connected），因此输出电阻为 $1/g_m\parallel R_D$，且

$$\overline{V_{n,out}^2}\Big|_{open} = \frac{g_m^2\cdot4kTR_F + 4kT\gamma g_m + 4kT/R_D}{(g_m + 1/R_D)^2} = \frac{4kT\left(g_m^2R_F + \gamma g_m + 1/R_D\right)}{(g_m + 1/R_D)^2}.$$

### 第 4 步 — 跨阻与输入参考噪声电流

注入栅极节点的信号电流 $i_{in}$（关闭噪声）全部经 $R_F$ 流到输出端，因此 $v_G = v_{out} + R_Fi_{in}$。输出端的 KCL：

$$
\begin{aligned}
i_{in} - \frac{v_{out}}{R_D} &= g_m(v_{out} + R_Fi_{in})\\
i_{in}(1 - g_mR_F) &= v_{out}\left(g_m + \frac{1}{R_D}\right)\\
R_T = \frac{v_{out}}{i_{in}} &= \frac{1 - g_mR_F}{g_m + 1/R_D} = -\frac{R_D(g_mR_F - 1)}{1 + g_mR_D}.
\end{aligned}
$$

把输入开路时的输出噪声除以 $R_T^2$：

$$
\begin{aligned}
\overline{I_{n,in}^2} &= \frac{4kT\left(g_m^2R_F + \gamma g_m + 1/R_D\right)}{(g_m + 1/R_D)^2}\cdot\frac{(g_m + 1/R_D)^2}{(g_mR_F - 1)^2}\\
&= \frac{4kT\left(g_m^2R_F + \gamma g_m + \dfrac{1}{R_D}\right)}{(g_mR_F - 1)^2}.
\end{aligned}
$$

### 第 5 步 — 验证

- **$g_mR_F \gg 1$：** $\overline{I_{n,in}^2} \approx 4kTg_m^2R_F/(g_mR_F)^2 = 4kT/R_F$，这是熟悉的并联反馈（shunt feedback）极限：反馈电阻的噪声电流直接出现在输入端，因此要获得低的输入噪声电流，就需要大的 $R_F$。
- **$R_D \to \infty$**（电流源负载）：
$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_m + 4kT/R_F}{(g_m - 1/R_F)^2}, \qquad \overline{I_{n,in}^2} = \frac{4kTR_Fg_m^2 + 4kT\gamma g_m}{(g_mR_F - 1)^2}.$$
- **量纲：** $\overline{V_{n,in}^2}$ 为 $4kT\times$（西门子）/（西门子）² $= 4kT\times$ 欧姆（V²/Hz），$\overline{I_{n,in}^2}$ 为 $4kT\times$ 西门子（A²/Hz），因为 $g_m^2R_F$、$g_m$ 和 $1/R_D$ 都是电导。

### 结果

$$\overline{V_{n,in}^2} = \frac{4kT\left(\gamma g_m + \dfrac{1}{R_D} + \dfrac{1}{R_F}\right)}{\left(g_m - \dfrac{1}{R_F}\right)^2},\qquad \overline{I_{n,in}^2} = \frac{4kT\left(g_m^2R_F + \gamma g_m + \dfrac{1}{R_D}\right)}{(g_mR_F - 1)^2}$$

- 电压：输入短路时，$R_F$ 构成输出端的负载；噪声电流 $I_{n1} + I_{nD} + I_{nF}$ 除以 $G_m = g_m - 1/R_F$。
- 电流：输入开路时，$R_F$ 中没有电流，因此 $v_G = v_{out} + V_{nF}$；输出噪声除以跨阻 $R_D(g_mR_F - 1)/(1 + g_mR_D)$。

**常见错误。** 用 $g_m$ 代替 $g_m - 1/R_F$ 作为跨导。输出短路时，$R_F$ 向输出端注入符号相反的电流 $v_{in}/R_F$。

**常见错误。** 把输入参考噪声电流只取为 $4kT/R_F$。这只是 $g_mR_F \gg 1$ 时的极限；一般情况下，晶体管（$\gamma g_m$）和 $R_D$（$1/R_D$）也有贡献，而且跨阻是 $(g_mR_F - 1)R_D/(1 + g_mR_D)$，而不是 $R_F$。

**常见错误。** 把 $R_F$ 当作与输入串联的电阻。它接在漏极与栅极之间（并联反馈）；输入开路时，晶体管经 $R_F$ 实际上成了二极管连接。
