# 详细步骤 - R516

**思路。** 由于 $g_m = \partial I_D/\partial V_{GS}$，对给定的 $g_m$ 积分，并用阈值处没有电流这一条件确定积分常数。

### 第 1 步 — 对 $g_m$ 积分

令 $V_{ov} = V_{GS} - V_{TH}$，且 $V_{TH}$ 为常数，则 $dV_{ov} = dV_{GS}$，因此在饱和区中

$$\frac{dI_D}{dV_{ov}} = \beta V_{ov}^2 ,$$

其中 $\beta$ 的单位为 A/V³（使 $\beta V_{ov}^2$ 的单位为 A/V = S）。积分得

$$I_D = \int \beta V_{ov}^2\,dV_{ov} = \frac{\beta}{3}V_{ov}^3 + C .$$

在阈值处（$V_{ov} = 0$）没有反型电荷，因此 $I_D = 0$，与平方律（square law）相同：

$$0 = \frac{\beta}{3}\cdot0^3 + C \quad\Longrightarrow\quad C = 0 ,$$

$$\boxed{I_D = \frac{\beta}{3}\,(V_{GS} - V_{TH})^3}$$

它在饱和区、$V_{GS} \ge V_{TH}$ 时成立。

### 第 2 步 — 验算及与平方律的比较

反过来求导：

$$\frac{dI_D}{dV_{GS}} = \frac{\beta}{3}\cdot3\,(V_{GS} - V_{TH})^2 = \beta\,(V_{GS} - V_{TH})^2 = g_m. \ \checkmark$$

一般地，若 $g_m \propto V_{ov}^{n}$，则 $I_D \propto V_{ov}^{n+1}/(n+1)$：平方律（$g_m = \mu_nC_{ox}\tfrac{W}{L}V_{ov}$）对应 $n = 1$ 和因子 $\tfrac12$；这种器件对应 $n = 2$ 和因子 $\tfrac13$。此外，

$$\frac{g_m}{I_D} = \frac{\beta V_{ov}^2}{\beta V_{ov}^3/3} = \frac{3}{V_{ov}},$$

而平方律为 $2/V_{ov}$：在给定的过驱动电压（overdrive voltage）下，单位电流产生的跨导是平方律器件的 1.5 倍。

**数值示例。** 取 $\beta = 30\ \mathrm{mA/V^3}$，$V_{ov} = 0.2$ V：

$$
\begin{aligned}
I_D &= \frac{30\ \mathrm{mA/V^3}}{3}\,(0.2\ \mathrm{V})^3 = 10\ \mathrm{mA/V^3}\times0.008\ \mathrm{V^3} = 80\ \mu\mathrm{A},\\
g_m &= 30\ \mathrm{mA/V^3}\times(0.2\ \mathrm{V})^2 = 1.2\ \mathrm{mS},\\
\frac{g_m}{I_D} &= \frac{1.2\ \mathrm{mS}}{80\ \mu\mathrm{A}} = 15\ \mathrm{V^{-1}} = \frac{3}{0.2\ \mathrm{V}}. \ \checkmark
\end{aligned}
$$

### 结果

$$I_D = \frac{\beta}{3}\,(V_{GS} - V_{TH})^3 \qquad (V_{GS} \ge V_{TH},\ \text{saturation}),$$

它是对 $g_m = dI_D/dV_{GS} = \beta(V_{GS} - V_{TH})^2$ 积分，并取 $I_D = 0$（当 $V_{GS} = V_{TH}$ 时）得到的。

**常见错误。** 写成 $I_D = \beta(V_{GS} - V_{TH})^3$，漏掉因子 $\tfrac13$。对它求导得 $3\beta(V_{GS} - V_{TH})^2$，是给定 $g_m$ 的三倍。

**常见错误。** 退回到平方律 $I_D = \tfrac12\beta(V_{GS} - V_{TH})^2$，它对应的是 $g_m \propto V_{GS} - V_{TH}$，而不是 $(V_{GS} - V_{TH})^2$。

**常见错误。** 在答案中留下任意的积分常数。阈值处 $I_D = 0$ 使它为零；非零常数意味着没有沟道时也有电流。
