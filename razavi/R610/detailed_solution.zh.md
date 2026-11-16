# 详细步骤 - R610

**思路。** 用 $y = \alpha_1x + \alpha_2x^2$ 描述共源级，两个系数都由给定偏置下的平方律求出。对 $W/L = 200/0.5$ 和 $W/L = 50/0.5$ 分别计算题中给出的闭环二次谐波比值，并根据 $\alpha_1$ 和 $\alpha_2$ 随 $W/L$ 的缩放关系解释比较结果。

### 第 1 步 — 共源级的多项式模型

令 $k = \mu_nC_{ox}(W/L)$，偏置点处 $V_{ov} = \sqrt{2I/k}$，则小栅极信号 $x$ 给出

$$I_D = \tfrac12k(V_{ov} + x)^2 = I + kV_{ov}x + \tfrac12kx^2 .$$

输出变化等于电流变化乘以 $R_D$（反相已归入负反馈环路中）：

$$y = \alpha_1x + \alpha_2x^2, \qquad \alpha_1 = g_mR_D = kV_{ov}R_D, \qquad \alpha_2 = \tfrac12kR_D .$$

对于 $x = V_m\cos\omega t$，开环 HD2 为 $\dfrac{\tfrac12\alpha_2V_m^2}{\alpha_1V_m} = \dfrac{\alpha_2V_m}{2\alpha_1} = \dfrac{V_m}{4V_{ov}}$。

### 第 2 步 — 闭环二次谐波比值

由 $e = x - \beta y$ 和 $y = b_1x + b_2x^2 + \dots$，比较系数得 $b_1 = \alpha_1/(1 + \beta\alpha_1)$，$b_2 = \alpha_2/(1 + \beta\alpha_1)^3$，因此由基波 $a = b_1V_m$ 和二次谐波 $b = \tfrac12b_2V_m^2$ 得到题中给出的比值

$$\frac{b}{a} = \frac{b_2V_m}{2b_1} = \frac{\alpha_2V_m}{2\alpha_1}\cdot\frac{1}{(1 + \beta\alpha_1)^2}.$$

放大器是纯二次的，因此环路只产生极小的三次谐波（third harmonic）：直接对环路进行数值求解可知，在下面两种设计中它都只有基波的约 $2\times10^{-6}$；THD ≈ $b/a$。

### 第 3 步 — $W/L = 200/0.5$ 的设计

$W/L = 400$，因此 $k = 134\ \mu\mathrm{A/V^2}\times400 = 53.6\ \mathrm{mA/V^2}$：

$$
\begin{aligned}
V_{ov} &= \sqrt{\frac{2(1\ \mathrm{mA})}{53.6\ \mathrm{mA/V^2}}} = \sqrt{0.0373}\ \mathrm{V} = 0.193\ \mathrm{V},\\
g_m &= \frac{2I}{V_{ov}} = \frac{2\ \mathrm{mA}}{0.193\ \mathrm{V}} = 10.35\ \mathrm{mS},\\
\alpha_1 &= g_mR_D = (10.35\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 20.7,\\
\alpha_2 &= \tfrac12kR_D = \tfrac12(53.6\ \mathrm{mA/V^2})(2\ \mathrm{k}\Omega) = 53.6\ \mathrm{V^{-1}}.
\end{aligned}
$$

漏极电压为 $3 - 2 = 1$ V，远高于 $V_{ov}$，因此器件处于饱和区。

$$
\begin{aligned}
\frac{\alpha_2V_m}{2\alpha_1} &= \frac{(53.6)(0.01)}{2(20.7)} = 0.0129 = 1.29\ \%\quad(\text{open loop}),\\
1 + \beta\alpha_1 &= 1 + 0.2\times20.7 = 5.14, \qquad (1 + \beta\alpha_1)^2 = 26.4,\\
\frac{b}{a} &= \frac{0.0129}{26.4} = 4.9\times10^{-4} = 0.049\ \%.
\end{aligned}
$$

### 第 4 步 — 用于比较的 $W/L = 50/0.5$ 设计

$W/L = 100$，$k = 13.4\ \mathrm{mA/V^2}$：

$$
\begin{aligned}
V_{ov} &= \sqrt{\frac{2(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.386\ \mathrm{V}, \qquad g_m = \frac{2\ \mathrm{mA}}{0.386\ \mathrm{V}} = 5.18\ \mathrm{mS},\\
\alpha_1 &= 10.35, \qquad \alpha_2 = \tfrac12(13.4\ \mathrm{mA/V^2})(2\ \mathrm{k}\Omega) = 13.4\ \mathrm{V^{-1}},\\
\frac{\alpha_2V_m}{2\alpha_1} &= \frac{0.134}{20.7} = 0.65\ \%, \qquad (1 + 0.2\times10.35)^2 = 3.07^2 = 9.43,\\
\frac{b}{a} &= \frac{0.0065}{9.43} = 6.9\times10^{-4} = 0.069\ \%.
\end{aligned}
$$

### 第 5 步 — 比较两种设计

| | $W/L = 50/0.5$ | $W/L = 200/0.5$ | 比值 |
|---|---|---|---|
| $V_{ov}$ | 0.386 V | 0.193 V | ÷2 |
| $\alpha_1 = g_mR_D$ | 10.35 | 20.7 | ×2 |
| $\alpha_2 = \tfrac12kR_D$ | 13.4 V⁻¹ | 53.6 V⁻¹ | ×4 |
| 开环 HD2 $= \alpha_2V_m/(2\alpha_1)$ | 0.65 % | 1.29 % | ×2 |
| $(1 + \beta\alpha_1)^2$ | 9.43 | 26.4 | ×2.8 |
| 闭环 THD | 0.069 % | 0.049 % | ÷1.4 |

把 $W/L$ 增大到四倍会使开环增益加倍，但闭环失真只改善了 $2.8/2 = 1.4$ 倍，并非“急剧”下降。

只有**在其他参数保持不变时**，该公式才预言失真会急剧下降，而事实上其他参数并没有保持不变。在电流固定时，$\alpha_1 = g_mR_D = \sqrt{2\mu_nC_{ox}(W/L)I}\,R_D \propto \sqrt{W/L}$，但 $\alpha_2 = \tfrac12\mu_nC_{ox}(W/L)R_D \propto W/L$。因此开环失真 $\alpha_2V_m/(2\alpha_1) = V_m/(4V_{ov}) \propto \sqrt{W/L}$ **加倍**，因为较宽的器件工作在一半的过驱动电压下；增大了 2.8 倍的 $(1 + \beta\alpha_1)^2$ 抵消了这一点并略有盈余，净改善为 1.4 倍。

**大环路增益（loop gain）极限。** 当 $\beta\alpha_1 \gg 1$ 时，

$$\frac{b}{a} \approx \frac{\alpha_2V_m}{2\beta^2\alpha_1^3} \propto \frac{W/L}{(W/L)^{3/2}} = (W/L)^{-1/2},$$

因此即使环路增益很充裕，加宽器件对失真的改善也只与宽度增量的平方根成正比。

### 结果

对于 $W/L = 200/0.5$：$V_{ov} = 0.193$ V，$\alpha_1 = 20.7$，$\alpha_2 = 53.6\ \mathrm{V^{-1}}$，且

$$\mathrm{THD} \approx \frac{\alpha_2V_m}{2\alpha_1}\cdot\frac{1}{(1 + \beta\alpha_1)^2} = \frac{1.29\ \%}{26.4} \approx 0.049\ \%,$$

而 $W/L = 50/0.5$ 时约为 0.069 %。把 $W/L$ 增大到四倍会使开环增益加倍，但失真只降低约 1.4 倍，因为 $\alpha_2 \propto W/L$ 比 $\alpha_1 \propto \sqrt{W/L}$ 增长得快：随着过驱动电压减半，开环失真（$V_m/4V_{ov}$）加倍，而增大了 2.8 倍的 $(1 + \beta\alpha_1)^2$ 只是略微超过这一影响。

**常见错误。** 在使 $\alpha_1$ 加倍的同时保持 $\alpha_2 = 13.4\ \mathrm{V^{-1}}$ 不变，从而预言约 0.012 %（“急剧”下降）。在电流恒定时，较宽的器件过驱动电压较小，其 $\alpha_2$ 与 $W/L$ 成正比增大。

**常见错误。** 认为较宽的器件会使失真变差（这只在开环时成立：0.65 % → 1.29 %），或者把开环值当作输出端的 THD。闭合环路后，闭环 THD 会适度下降，从 0.069 % 降到 0.049 %。
