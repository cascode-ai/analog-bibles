# 详细步骤 - R608

**思路。** 根据平方律，用多项式 $y = \alpha_1x + \alpha_2x^2$ 描述共源级，其中 $\alpha_1$ 和 $\alpha_2$ 由偏置算出。然后闭合 [图 2] 的环路，把闭环输出展开为输入的幂级数，考察反馈如何缩放线性项和二次项系数，最后求出 10 mV 输入时的二次谐波（second harmonic）失真。

### 第 1 步 — 共源级的偏置点

由 $W/L = 50/0.5 = 100$，令 $k = \mu_nC_{ox}(W/L) = 134\ \mu\mathrm{A/V^2}\times100 = 13.4\ \mathrm{mA/V^2}$。由 $I = \tfrac12kV_{ov}^2$：

$$V_{ov} = \sqrt{\frac{2I}{k}} = \sqrt{\frac{2(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.1493}\ \mathrm{V} = 0.386\ \mathrm{V},$$

$$g_m = kV_{ov} = \frac{2I}{V_{ov}} = \frac{2(1\ \mathrm{mA})}{0.386\ \mathrm{V}} = 5.18\ \mathrm{mS}.$$

漏极电压为 $V_{DD} - IR_D = 3 - (1\ \mathrm{mA})(2\ \mathrm{k}\Omega) = 1$ V，远高于 $V_{GS} - V_{TH} = 0.386$ V 加上很小的摆幅，因此器件保持饱和。

### 第 2 步 — 前向放大器的多项式模型

对于偏置点附近的小栅极电压 $x$，

$$I_D = \tfrac12k(V_{ov} + x)^2 = I + kV_{ov}x + \tfrac12kx^2 .$$

输出变化等于电流变化乘以 $-R_D$；把反相归入环路（极性的安排使反馈为负反馈），得

$$y = g_mR_D\,x + \tfrac12kR_D\,x^2 = \alpha_1x + \alpha_2x^2,$$

$$
\begin{aligned}
\alpha_1 &= g_mR_D = (5.18\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 10.35,\\
\alpha_2 &= \tfrac12kR_D = \tfrac12(13.4\ \mathrm{mA/V^2})(2\ \mathrm{k}\Omega) = 13.4\ \mathrm{V^{-1}},
\end{aligned}
$$

其中没有 $x^3$ 项（平方律是严格的二次函数）。

**用于比较的开环失真。** 对于 $x = V_m\cos\omega t$，$\alpha_2x^2 = \tfrac12\alpha_2V_m^2(1 + \cos2\omega t)$，因此

$$\mathrm{HD2}_{open} = \frac{\tfrac12\alpha_2V_m^2}{\alpha_1V_m} = \frac{\alpha_2V_m}{2\alpha_1} = \frac{(13.4)(0.01)}{2(10.35)} = 6.47\times10^{-3} = 0.65\ \%,$$

它等于 $V_m/(4V_{ov}) = 0.01/(4\times0.386)$。

### 第 3 步 — 闭合环路

在 [图 2] 中，放大器的输入是误差 $e = x - \beta y$，且 $y = \alpha_1e + \alpha_2e^2$。把闭环特性写成 $y = b_1x + b_2x^2 + \dots$，于是

$$e = x - \beta y = (1 - \beta b_1)\,x - \beta b_2\,x^2 + \dots$$

代入 $y = \alpha_1e + \alpha_2e^2$ 并保留到 $x^2$ 项：

$$y = \alpha_1(1 - \beta b_1)\,x - \alpha_1\beta b_2\,x^2 + \alpha_2(1 - \beta b_1)^2x^2 + \dots$$

比较 $x$ 项：

$$
\begin{aligned}
b_1 &= \alpha_1(1 - \beta b_1)\\
b_1 &= \frac{\alpha_1}{1 + \alpha_1\beta}, \qquad 1 - \beta b_1 = \frac{1}{1 + \alpha_1\beta}.
\end{aligned}
$$

比较 $x^2$ 项：

$$
\begin{aligned}
b_2 &= -\alpha_1\beta b_2 + \frac{\alpha_2}{(1 + \alpha_1\beta)^2}\\
b_2 &= \frac{\alpha_2}{(1 + \alpha_1\beta)^3}.
\end{aligned}
$$

### 第 4 步 — 闭环二次谐波失真

对于 $x = V_m\cos\omega t$：

$$y = b_1V_m\cos\omega t + \tfrac12b_2V_m^2 + \tfrac12b_2V_m^2\cos2\omega t + \dots$$

$$\mathrm{HD2}_{closed} = \frac{\tfrac12b_2V_m^2}{b_1V_m} = \frac{b_2V_m}{2b_1} = \frac{\alpha_2V_m}{2\alpha_1}\cdot\frac{1}{(1 + \alpha_1\beta)^2}.$$

数值计算：

$$
\begin{aligned}
\alpha_1\beta &= 10.35\times0.2 = 2.07\quad\text{(loop gain)},\\
(1 + \alpha_1\beta)^2 &= (3.07)^2 = 9.43,\\
\mathrm{HD2}_{closed} &= \frac{6.47\times10^{-3}}{9.43} = 6.9\times10^{-4} = 0.069\ \%\quad(\approx -63\ \mathrm{dB}).
\end{aligned}
$$

输出基波为 $b_1V_m = (10.35/3.07)(10\ \mathrm{mV}) = 33.7$ mV。

包围二次特性的反馈还会产生一个很小的 $x^3$ 项，其量级为 $\alpha_2^2\beta$，这里给出的三次谐波（third harmonic）仅为基波的约 $2\times10^{-6}$（直接对环路方程进行数值求解得到 HD2 = 0.0686 %，HD3 ≈ 0.0002 %）。因此 THD ≈ HD2。

### 第 5 步 — 为什么抑制因子是 $(1 + \alpha_1\beta)^2$

与由同样 10 mV 输入驱动的开环级相比，出现了两个 $1 + \alpha_1\beta = 3.07$ 因子：

1. 误差信号只有 $V_m/(1 + \alpha_1\beta) = 10/3.07 = 3.26$ mV，而放大器的 HD2 与其输入幅度成正比。
2. 放大器内部产生的二次谐波像其他任何输出扰动一样被环路抑制，再减小 $1 + \alpha_1\beta$ 倍。

合起来：$0.65\ \% / 9.43 = 0.069\ \%$。代价是增益从 10.35 降到 3.37（降低了同样的 3.07 倍）。

若考虑沟道长度调制（$\lambda = 0.1\ \mathrm{V^{-1}}$，题目中已忽略），$r_O = 10\ \mathrm{k}\Omega$ 会使 $\alpha_1$ 降到 8.6，$\alpha_2$ 降到 11.2 V⁻¹，得到约 0.087 %。

### 结果

由 $V_{ov} = 0.386$ V 和 $g_m = 5.18$ mS，该级可表示为 $y = \alpha_1x + \alpha_2x^2$，其中 $\alpha_1 = g_mR_D = 10.35$，$\alpha_2 = \tfrac12\mu_nC_{ox}(W/L)R_D = 13.4\ \mathrm{V^{-1}}$。加入反馈后，

$$\mathrm{THD} \approx \mathrm{HD2} = \frac{\alpha_2V_m}{2\alpha_1}\cdot\frac{1}{(1 + \beta\alpha_1)^2} = \frac{6.47\times10^{-3}}{9.43} \approx 0.069\ \%\ (\approx -63\ \mathrm{dB}),$$

而由同样 10 mV 输入驱动的开环级约为 0.65 %。输出基波约为 33.7 mV。

**常见错误。** 只把开环失真除以 $1 + \beta\alpha_1$（0.21 %），或除以 $(1 + \beta\alpha_1)^3$（0.022 %）。谐波**系数**减小 $(1 + \beta\alpha_1)^3$ 倍，但基波也减小 $1 + \beta\alpha_1$ 倍，因此**比值** HD2 减小 $(1 + \beta\alpha_1)^2$ 倍。

**常见错误。** 取 $\alpha_2 = \mu_nC_{ox}(W/L)R_D$（漏掉了平方律中的 $\tfrac12$），这会使结果加倍；或者把开环的 0.65 % 当作闭环 THD。
