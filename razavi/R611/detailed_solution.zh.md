# 详细步骤 - R611

**思路。** 把共源级建模为 $y = \alpha_1x + \alpha_2x^2$，系数由平方律求出，并对 $\beta = 0.4$ 和 $\beta = 0.2$ 分别计算题中给出的闭环二次谐波比值。然后把两个结果之比与 $\beta^{-2}$ 的预测进行比较，后者只在环路增益 $\beta\alpha_1$ 远大于一时才成立。

### 第 1 步 — 共源级的偏置与多项式系数

由 $W/L = 50/0.5 = 100$，$k = \mu_nC_{ox}(W/L) = 13.4\ \mathrm{mA/V^2}$，再由 $I = \tfrac12kV_{ov}^2$：

$$
\begin{aligned}
V_{ov} &= \sqrt{\frac{2I}{k}} = \sqrt{\frac{2(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.386\ \mathrm{V},\\
g_m &= \frac{2I}{V_{ov}} = \frac{2\ \mathrm{mA}}{0.386\ \mathrm{V}} = 5.18\ \mathrm{mS}.
\end{aligned}
$$

对于小栅极信号 $x$，$I_D = \tfrac12k(V_{ov} + x)^2 = I + kV_{ov}x + \tfrac12kx^2$，因此输出变化（反相已归入负反馈环路中）为 $y = \alpha_1x + \alpha_2x^2$，其中

$$
\begin{aligned}
\alpha_1 &= g_mR_D = (5.18\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 10.35,\\
\alpha_2 &= \tfrac12kR_D = \tfrac12(13.4\ \mathrm{mA/V^2})(2\ \mathrm{k}\Omega) = 13.4\ \mathrm{V^{-1}}.
\end{aligned}
$$

10 mV 输入时的开环二次谐波比值：

$$\frac{\alpha_2V_m}{2\alpha_1} = \frac{(13.4)(0.01)}{2(10.35)} = 6.47\times10^{-3} = 0.647\ \%\quad\left(= \frac{V_m}{4V_{ov}}\right).$$

漏极电压为 $3 - (1\ \mathrm{mA})(2\ \mathrm{k}\Omega) = 1$ V，远高于 $V_{ov}$，因此器件处于饱和区。

### 第 2 步 — 闭环二次谐波比值

由 $e = x - \beta y$ 和 $y = b_1x + b_2x^2 + \dots$，比较系数得 $b_1 = \alpha_1/(1 + \beta\alpha_1)$，$b_2 = \alpha_2/(1 + \beta\alpha_1)^3$，因此由基波 $a = b_1V_m$ 和二次谐波 $b = \tfrac12b_2V_m^2$ 得到题中给出的比值

$$\frac{b}{a} = \frac{b_2V_m}{2b_1} = \frac{\alpha_2V_m}{2\alpha_1}\cdot\frac{1}{(1 + \beta\alpha_1)^2}.$$

这里环路产生的三次谐波（third harmonic）低于基波的 $2\times10^{-6}$（已通过数值求解环路方程验证），因此 THD ≈ $b/a$。

### 第 3 步 — $\beta = 0.4$ 时的 THD

$$
\begin{aligned}
\beta\alpha_1 &= 0.4\times10.35 = 4.14,\\
1 + \beta\alpha_1 &= 5.14, \qquad (1 + \beta\alpha_1)^2 = 26.4,\\
\frac{b}{a} &= \frac{6.47\times10^{-3}}{26.4} = 2.45\times10^{-4} = 0.0245\ \%\quad(-72\ \mathrm{dB}).
\end{aligned}
$$

闭环增益为 $b_1 = 10.35/5.14 = 2.01$，因此输出基波为 $2.01\times10\ \mathrm{mV} = 20.1$ mV。

### 第 4 步 — $\beta = 0.2$ 时的 THD

$$
\begin{aligned}
\beta\alpha_1 &= 0.2\times10.35 = 2.07,\\
1 + \beta\alpha_1 &= 3.07, \qquad (1 + \beta\alpha_1)^2 = 9.43,\\
\frac{b}{a} &= \frac{6.47\times10^{-3}}{9.43} = 6.9\times10^{-4} = 0.069\ \%\quad(-63\ \mathrm{dB}).
\end{aligned}
$$

闭环增益为 $10.35/3.07 = 3.37$，输出基波为 33.7 mV。

### 第 5 步 — 结果是否符合 $b/a \propto \beta^{-2}$？

$$\frac{(b/a)_{\beta = 0.2}}{(b/a)_{\beta = 0.4}} = \left(\frac{1 + 0.4\alpha_1}{1 + 0.2\alpha_1}\right)^2 = \left(\frac{5.14}{3.07}\right)^2 = 2.80,$$

而不是 $b/a \propto \beta^{-2}$ 预言的因子 $(0.4/0.2)^2 = 4$（那将给出 $0.069\ \%/4 = 0.017\ \%$）。

$\beta^{-2}$ 规律假设 $1 + \beta\alpha_1 \approx \beta\alpha_1$，即 $\beta\alpha_1 \gg 1$。当环路增益只有 2.07 和 4.14 时，那个“1”就不能忽略：把 $\beta$ 加倍只能使 $1 + \beta\alpha_1$ 从 3.07 增大到 5.14（1.67 倍，而不是 2 倍），其平方增大 2.8 倍。近似公式 $\alpha_2V_m/(2\beta^2\alpha_1^3)$ 会给出 0.038 % 和 0.15 %，都偏差很大；只有当环路增益达到 10 或更高时，这一规律才变得准确。

更强的反馈还使闭环增益从 3.37 降到 2.01，因此输出基波从 33.7 mV 降到 20.1 mV：这是以增益换取失真的降低。

### 结果

由 $\alpha_1 = 10.35$ 和 $\alpha_2 = 13.4\ \mathrm{V^{-1}}$（10 mV 时开环 HD2 为 0.647 %）：

- $\beta = 0.4$：$\mathrm{THD} \approx 0.647\ \%/5.14^2 \approx 0.0245\ \%$；
- $\beta = 0.2$：$\mathrm{THD} \approx 0.647\ \%/3.07^2 \approx 0.069\ \%$。

把 $\beta$ 加倍使失真降低约 2.8 倍，而不是 $b/a \propto \beta^{-2}$ 所预言的 4 倍，因为环路增益 $\beta\alpha_1$（2.07 → 4.14）并不远大于一；$\beta^{-2}$ 规律只在 $\beta\alpha_1 \gg 1$ 的极限下成立。代价是闭环增益降低（输出基波为 20.1 mV，而不是 33.7 mV）。

**常见错误。** 盲目套用 $\beta^{-2}$ 规律，声称失真降低 4×（0.017 %）。这相当于略去了 $1 + \beta\alpha_1$ 中的 1，而这只在环路增益很大时才成立，在这里会夸大改善效果。

**常见错误。** 用 $1 + \beta\alpha_1$ 而不是其平方去除开环失真（得到 0.13 % 和 0.21 %）。放大器自身的输入摆幅减小 $1 + \beta\alpha_1$ 倍，而环路又把所产生的谐波再抑制 $1 + \beta\alpha_1$ 倍。
