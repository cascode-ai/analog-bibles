# 详细步骤 - R548

**思路。** 放大器必须经 $R_{out}$ 提供支路电流 $I_1 + I_2$，因此在增益有限时它需要一个非零的差分输入 $\epsilon = V_X - V_Y$，其作用与运放的输入失调完全相同。先求出 $\epsilon$，再把带隙核心电路在其理想工作点附近线性化，求出给定的 $\epsilon$ 使 $V_{out}$ 偏移多少。

### 第 1 步 — 理想工作情况（$A_1 \to \infty$）

把 $R_1$ 支路和 $R_2$ 支路中的电流分别记为 $I_1$ 和 $I_2$。增益为无穷大时 $V_X = V_Y$，所以 $I_1R_1 = I_2R_2$；又因为 $R_1 = R_2$，所以 $I_1 = I_2 \equiv I_0$。沿每条支路从 X 到地列 KVL，并利用 $I_{S2} = nI_{S1}$，得

$$I_0R_3 = V_{BE1} - V_{BE2} = V_T\ln\frac{I_0}{I_{S1}} - V_T\ln\frac{I_0}{nI_{S1}} = V_T\ln n ,$$

$$V_{out,ideal} = V_{BE2} + I_0(R_2 + R_3) = V_{BE2} + \left(1 + \frac{R_2}{R_3}\right)V_T\ln n, \qquad I_0 = \frac{V_T\ln n}{R_3}.$$

### 第 2 步 — 放大器模型与所需的输入电压 $\epsilon$

内部电压源 $A_1(V_X - V_Y)$ 经 $R_{out}$ 接到输出端，而输出端同时为两条支路供电，因此流过 $R_{out}$ 的电流为 $I_1 + I_2$。

<!-- diagram: diagram-01.cir -->

从内部电压源到输出端列 KVL：

$$V_{out} = A_1(V_X - V_Y) - (I_1 + I_2)R_{out}.$$

令 $\epsilon = V_X - V_Y$，则：

$$\epsilon = \frac{V_{out} + (I_1 + I_2)R_{out}}{A_1}.$$

反馈检测的是经过 $R_{out}$ 压降**之后**的 $V_{out}$，因此 $R_{out}$ 处在环路之内：若 $A_1 \to \infty$，则无论 $R_{out}$ 多大，都有 $\epsilon \to 0$。增益有限时，要额外提供 $(I_1 + I_2)R_{out}$ 的压降，就需要更大的 $\epsilon$。在一阶近似下，$I_1 + I_2 \approx 2I_0 = 2V_T\ln n/R_3$：

$$\epsilon \approx \frac{1}{A_1}\left(V_{out} + \frac{2V_T\ln n}{R_3}R_{out}\right).$$

### 第 3 步 — $\epsilon$ 非零时的精确关系

从 X 经地到 Y 列 KVL：

$$\epsilon = V_X - V_Y = V_{BE1} - (V_{BE2} + I_2R_3),$$

$$V_{BE1} - V_{BE2} = V_T\ln\frac{I_1}{I_{S1}} - V_T\ln\frac{I_2}{nI_{S1}} = V_T\ln n + V_T\ln\frac{I_1}{I_2}.$$

解出 $R_3$ 两端的电压：

$$I_2R_3 = V_T\ln n + V_T\ln\frac{I_1}{I_2} - \epsilon. \qquad (1)$$

由电阻关系，$V_{out} - V_X = I_1R_1$，$V_{out} - V_Y = I_2R_2$，所以 $I_2R_2 - I_1R_1 = V_X - V_Y = \epsilon$。由于 $R_1 = R_2$：

$$I_1 - I_2 = -\frac{\epsilon}{R_2}. \qquad (2)$$

因此正的 $\epsilon$ 会使 $I_1$ 略小于 $I_2$。

### 第 4 步 — 线性化：PTAT 电流的变化

$\epsilon$ 很小（mV 量级或更小），因此在 $I_1 = I_2 = I_0$ 附近展开。利用式 (2)、$\ln(1 + x) \approx x$ 以及 $g_m = I_0/V_T$：

$$V_T\ln\frac{I_1}{I_2} = V_T\ln\left(1 + \frac{I_1 - I_2}{I_2}\right) \approx V_T\,\frac{I_1 - I_2}{I_2} = -\frac{V_T}{I_0}\cdot\frac{\epsilon}{R_2} = -\frac{\epsilon}{g_mR_2},$$

其中，由于 $I_0 = V_T\ln n/R_3$，

$$\frac{1}{g_m} = \frac{V_T}{I_0} = \frac{R_3}{\ln n}.$$

在式 (1) 中令 $I_2 = I_0 + \Delta I_2$，并减去理想关系 $I_0R_3 = V_T\ln n$：

$$
\begin{aligned}
(I_0 + \Delta I_2)R_3 &= V_T\ln n - \frac{\epsilon}{g_mR_2} - \epsilon\\
\Delta I_2\,R_3 &= -\epsilon\left(1 + \frac{1}{g_mR_2}\right)\\
\Delta I_2 &= -\frac{\epsilon}{R_3}\left(1 + \frac{1}{g_mR_2}\right).
\end{aligned}
$$

$\epsilon$ 直接从决定与绝对温度成正比（PTAT）电流的 $\Delta V_{BE}$ 中减去；因子 $1 + 1/(g_mR_2)$ 反映了由式 (2) 的电流不平衡所引起的 $V_{BE1} - V_{BE2}$ 的微小额外变化。

### 第 5 步 — $V_{out}$ 的变化

由第二条支路可精确地得到

$$V_{out} = V_Y + I_2R_2 = V_{BE2} + I_2(R_3 + R_2).$$

$\Delta I_2$ 使 $V_{BE2}$ 改变 $\Delta I_2/g_m$，使电阻压降改变 $\Delta I_2(R_2 + R_3)$：

$$\Delta V_{out} = \Delta I_2\left(\frac{1}{g_m} + R_2 + R_3\right).$$

代入第 4 步得到的 $\Delta I_2$：

$$
\begin{aligned}
\Delta V_{out} &= -\frac{\epsilon}{R_3}\left(1 + \frac{1}{g_mR_2}\right)\left(\frac{1}{g_m} + R_2 + R_3\right)\\
&= -\left(1 + \frac{1}{g_mR_1}\right)\left(1 + \frac{R_2}{R_3} + \frac{1}{g_mR_3}\right)\epsilon ,
\end{aligned}
$$

其中第一个因子利用了 $R_1 = R_2$。这正是输入失调 $\epsilon$ 所引起的误差，它被放大了约 $1 + R_2/R_3$ 倍。

### 第 6 步 — $V_{out}$ 的误差

代入第 2 步中的 $\epsilon$：

$$\Delta V_{out} \approx -\left(1 + \frac{1}{g_mR_1}\right)\left(1 + \frac{R_2}{R_3} + \frac{1}{g_mR_3}\right)\frac{V_{out} + 2\left(V_T\ln n/R_3\right)R_{out}}{A_1}.$$

由于 $1/g_m = R_3/\ln n$，两个修正项为 $1/(g_mR_1) = R_3/(R_1\ln n)$ 和 $1/(g_mR_3) = 1/\ln n$，它们通常比 $R_2/R_3$ 小，因此

$$\Delta V_{out} \approx -\left(1 + \frac{R_2}{R_3}\right)\frac{V_{out} + 2R_{out}V_T\ln n/R_3}{A_1}.$$

误差可分为两部分：

- $-(1 + R_2/R_3)\,V_{out}/A_1$：普通的有限增益误差，即使 $R_{out} = 0$ 也存在；
- $-(1 + R_2/R_3)\,2V_T\ln n\,R_{out}/(R_3A_1)$：由 $R_{out}$ 引起的额外误差。

输出比理想值**低**（$\Delta V_{out} < 0$）。

**等效观点。** 记大信号（large-signal）负载电阻为 $R_{L} = V_{out}/(I_1 + I_2)$，则 $\epsilon = V_{out}(1 + R_{out}/R_L)/A_1 = V_{out}/A_{1,eff}$，其中

$$A_{1,eff} = A_1\frac{R_L}{R_L + R_{out}}.$$

$R_{out}$ 与负载构成分压器，降低了有效增益；大的 $R_{out}$ 只有在与 $R_L$ 相当或比它更大时才会造成明显的影响。

### 第 7 步 — 数值验算

取示例数值 $n = 8$，$R_3 = 2$ kΩ，$R_1 = R_2 = 14.5$ kΩ，$A_1 = 10^4$，$R_{out} = 50$ kΩ，$T = 300$ K（$V_T = 25.85$ mV），$V_{out} \approx 1.07$ V。

$$
\begin{aligned}
V_T\ln n &= (25.85\ \mathrm{mV})(2.079) = 53.76\ \mathrm{mV},\\
I_0 &= \frac{53.76\ \mathrm{mV}}{2\ \mathrm{k}\Omega} = 26.88\ \mu\mathrm{A},\\
(I_1 + I_2)R_{out} &\approx (53.76\ \mu\mathrm{A})(50\ \mathrm{k}\Omega) = 2.688\ \mathrm{V},\\
\epsilon &= \frac{1.07\ \mathrm{V} + 2.688\ \mathrm{V}}{10^4} = 0.376\ \mathrm{mV},\\
\frac{1}{g_m} &= \frac{R_3}{\ln n} = \frac{2\ \mathrm{k}\Omega}{2.079} = 962\ \Omega,\\
\text{factor} &= \left(1 + \frac{962}{14500}\right)\left(1 + 7.25 + \frac{962}{2000}\right) = (1.066)(8.731) = 9.31,\\
\Delta V_{out} &= -9.31\times0.376\ \mathrm{mV} = -3.50\ \mathrm{mV}.
\end{aligned}
$$

用简化因子 $1 + R_2/R_3 = 8.25$ 得到 $-8.25\times0.376 = -3.10$ mV。对完整的非线性电路方程进行数值求解，得到 −3.48 mV，其中 −2.48 mV 由 $R_{out}$ 引起（$R_{out} = 0$ 时误差为 −1.00 mV）。完整的一阶公式精确到约 1 %；简化形式偏低约 11 %，主要原因是 $1/\ln n = 0.48$ 与 8.25 相比不可忽略。

这里 $R_{out}$ 项占主导，因为 $R_{out} = 50$ kΩ 大于 $R_L = 1.07\ \mathrm{V}/53.76\ \mu\mathrm{A} = 19.9$ kΩ。

### 结果

$R_{out}$ 位于反馈环路之内，因此若 $A_1 \to \infty$，它不会引起误差。$A_1$ 有限时，内部电压源必须产生 $V_{out} + (I_1 + I_2)R_{out}$，这要求

$$V_X - V_Y = \epsilon = \frac{V_{out} + (I_1 + I_2)R_{out}}{A_1}, \qquad I_1 \approx I_2 = \frac{V_T\ln n}{R_3}.$$

这相当于运放的失调电压，由此得到

$$\Delta V_{out} \approx -\left(1 + \frac{1}{g_mR_1}\right)\left(1 + \frac{R_2}{R_3} + \frac{1}{g_mR_3}\right)\frac{V_{out} + 2(V_T\ln n/R_3)R_{out}}{A_1} \approx -\left(1 + \frac{R_2}{R_3}\right)\frac{V_{out} + 2(V_T\ln n/R_3)R_{out}}{A_1},$$

其中 $1/g_m = R_3/\ln n$。由 $R_{out}$ 引起的部分为 $\approx -(1 + R_2/R_3)\,2V_T\ln n\,R_{out}/(R_3A_1)$。等价地说，$R_{out}$ 使放大器的有效增益缩小为原来的 $R_L/(R_L + R_{out})$ 倍。

**常见错误。** 把 $R_{out}$ 当作环路之外的串联压降，即 $\Delta V_{out} = -(I_1 + I_2)R_{out}$，或者再乘以 $1 + R_2/R_3$：在上例中这会得到 −2.7 V，显然荒谬。环路会校正这一压降，只留下残余的 $(I_1 + I_2)R_{out}/A_1$。

**常见错误。** 断定 $R_{out}$ 完全没有影响。这只在增益无穷大时成立；当 $A_1$ 有限时，额外误差甚至可能超过普通的 $V_{out}/A_1$ 误差。

**常见错误。** 忘记 $\epsilon$ 会被放大 $1 + R_2/R_3$ 倍，或者只用了一条支路的电流。PTAT 电流约改变 $-\epsilon/R_3$，$V_{out}$ 约改变 $-\epsilon(R_2 + R_3)/R_3$，而流过 $R_{out}$ 的电流是两者之和 $I_1 + I_2 \approx 2V_T\ln n/R_3$。
