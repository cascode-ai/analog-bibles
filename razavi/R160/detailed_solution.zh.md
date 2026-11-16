# 详细步骤 - R160

**思路。** 对 $W/L = 25/0.5$，利用平方律差分对的大信号（large-signal）特性 $I_{D1} - I_{D2} = \tfrac12\beta\Delta V\sqrt{4I_{SS}/\beta - \Delta V^2}$ 以及 $I_{D1} + I_{D2} = I_{SS}$ 求解；然后对 $W/L = 50/0.5$ 重复计算并加以比较。

### 第 1 步 — 大信号特性

两个器件都处于饱和区（saturation region），$\lambda = 0$。令 $\beta = \mu_nC_{ox}W/L$，$\Delta V = V_{in1} - V_{in2}$。由 $I_{D1} + I_{D2} = I_{SS}$、$\Delta V = V_{GS1} - V_{GS2}$ 和 $V_{GS} = V_{TH} + \sqrt{2I_D/\beta}$（两个器件的 $V_{TH}$ 相同），得 $\Delta V = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$。两边平方，代入电流之和，分离出 $\sqrt{I_{D1}I_{D2}}$ 后再平方一次：

$$
\begin{aligned}
\Delta V^2 &= \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right)\\
4I_{D1}I_{D2} &= \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2\\
(I_{D1} - I_{D2})^2 &= I_{SS}^2 - 4I_{D1}I_{D2} = \beta I_{SS}\Delta V^2 - \frac{\beta^2}{4}\Delta V^4\\
I_{D1} - I_{D2} &= \frac{\beta}{2}\,\Delta V\sqrt{\frac{4I_{SS}}{\beta} - \Delta V^2} ,
\end{aligned}
$$

该式在两个器件都导通时成立，即 $|\Delta V| \le \sqrt{2I_{SS}/\beta}$。

### 第 2 步 — $W/L = 25/0.5$ 时的电流分配

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})\left(\frac{25}{0.5}\right) = (134\ \mu\mathrm{A/V^2})(50) = 6.7\ \mathrm{mA/V^2},\\
\sqrt{2I_{SS}/\beta} &= \sqrt{2(1\ \mathrm{mA})/(6.7\ \mathrm{mA/V^2})} = 0.546\ \mathrm{V} \gg 50\ \mathrm{mV}\quad\text{(both devices on)},\\
\frac{4I_{SS}}{\beta} &= \frac{4(1\ \mathrm{mA})}{6.7\ \mathrm{mA/V^2}} = 0.5970\ \mathrm{V^2},\\
\sqrt{0.5970 - 0.0025}\ \mathrm{V} &= \sqrt{0.5945}\ \mathrm{V} = 0.7711\ \mathrm{V},\\
\frac{\beta}{2}\Delta V &= (3.35\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.1675\ \mathrm{mA/V},\\
I_{D1} - I_{D2} &= (0.1675\ \mathrm{mA/V})(0.7711\ \mathrm{V}) = 0.1292\ \mathrm{mA}.
\end{aligned}
$$

由 $I_{D1} + I_{D2} = 1$ mA：

$$
\begin{aligned}
I_{D1} &= \frac{1 + 0.1292}{2}\ \mathrm{mA} = 0.565\ \mathrm{mA},\\
I_{D2} &= \frac{1 - 0.1292}{2}\ \mathrm{mA} = 0.435\ \mathrm{mA}.
\end{aligned}
$$

**验证。** $\sqrt{2(0.5646)/6.7} - \sqrt{2(0.4354)/6.7} = 0.4105 - 0.3605 = 0.0500$ V，正好还原输入。

### 第 3 步 — $W/L = 50/0.5$ 时的电流分配（作比较）

$$
\begin{aligned}
\beta &= 13.4\ \mathrm{mA/V^2}, \qquad \frac{4I_{SS}}{\beta} = 0.2985\ \mathrm{V^2},\\
\sqrt{0.2985 - 0.0025}\ \mathrm{V} &= 0.5441\ \mathrm{V},\\
I_{D1} - I_{D2} &= (6.7\ \mathrm{mA/V^2})(0.05\ \mathrm{V})(0.5441\ \mathrm{V}) = 0.1823\ \mathrm{mA},\\
I_{D1} &= 0.591\ \mathrm{mA}, \qquad I_{D2} = 0.409\ \mathrm{mA}.
\end{aligned}
$$

### 第 4 步 — 比较

| $W/L$ | $\beta$ | 平衡时的 $V_{ov}$ | $I_{D1}$ / $I_{D2}$ | $I_{D1} - I_{D2}$ | 不平衡度 $\Delta I/I_{SS}$ |
|---|---|---|---|---|---|
| 25/0.5 | 6.7 mA/V² | 0.386 V | 0.565 / 0.435 mA | 0.129 mA | 12.9 % |
| 50/0.5 | 13.4 mA/V² | 0.273 V | 0.591 / 0.409 mA | 0.182 mA | 18.2 % |

电流差之比为

$$\frac{0.1292}{0.1823} = 0.709 \approx \frac{1}{\sqrt2},$$

这与 $I_{D1} - I_{D2} \approx G_m\Delta V$、$G_m = \sqrt{\beta I_{SS}}$ 的预期一致：把 $\beta$ 减半会使 $G_m$ 缩小 $\sqrt2$ 倍。数值上，$G_m = \sqrt{(6.7\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 2.59$ mS 给出 $(2.59\ \mathrm{mS})(50\ \mathrm{mV}) = 0.129$ mA，与精确值相差在 0.3 % 以内。

所以较窄的差分对**灵敏度较低**（$G_m$ 较小），但**线性度更好**：它的过驱动电压（overdrive voltage）大 $\sqrt2$ 倍，因此 50 mV 只占其输入范围的较小部分（完全导向发生在 0.546 V 而不是 0.386 V）。

### 结果

对于 $W/L = 25/0.5$：$I_{D1} \approx 0.565$ mA，$I_{D2} \approx 0.435$ mA（$I_{D1} - I_{D2} \approx 0.129$ mA）。

对于 $W/L = 50/0.5$：$I_{D1} \approx 0.591$ mA，$I_{D2} \approx 0.409$ mA（$0.182$ mA）。

较窄的器件导向的电流约为后者的 $1/\sqrt2$：$G_m$ 较低，但差分对的线性度更好。

**常见错误。** 认为较窄的差分对因为“器件较弱”而产生**更大**的不平衡。不平衡量 $\approx\sqrt{\beta I_{SS}}\,\Delta V$，随 $\beta$ 减小而减小。

**常见错误。** 得出的电流之和不等于 $I_{SS} = 1$ mA，例如在固定 $V_P$ 的情况下对每个器件分别使用平方律。尾电流源固定了电流之和，而 $V_P$ 会随之调整。
