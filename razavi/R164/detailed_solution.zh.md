# 详细步骤 - R164

**思路。** 在 $I_{SS} = 2$ mA、$I_{D1} + I_{D2} = I_{SS}$ 的条件下，应用平方律差分对的大信号（large-signal）特性 $I_{D1} - I_{D2} = \tfrac12\beta\Delta V\sqrt{4I_{SS}/\beta - \Delta V^2}$；然后对 1 mA 重复计算，比较绝对不平衡量和相对不平衡度。

### 第 1 步 — 大信号特性

两个器件都处于饱和区（saturation region），$\lambda = 0$。令 $\beta = \mu_nC_{ox}W/L$，$\Delta V = V_{in1} - V_{in2}$。由 $I_{D1} + I_{D2} = I_{SS}$、$\Delta V = V_{GS1} - V_{GS2}$ 和 $V_{GS} = V_{TH} + \sqrt{2I_D/\beta}$（阈值相等），得 $\Delta V = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$。两边平方，代入电流之和，分离出交叉项后再平方一次：

$$
\begin{aligned}
\Delta V^2 &= \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right)\\
4I_{D1}I_{D2} &= \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2\\
(I_{D1} - I_{D2})^2 &= I_{SS}^2 - 4I_{D1}I_{D2} = \beta I_{SS}\Delta V^2 - \frac{\beta^2}{4}\Delta V^4\\
I_{D1} - I_{D2} &= \frac{\beta}{2}\,\Delta V\sqrt{\frac{4I_{SS}}{\beta} - \Delta V^2},
\end{aligned}
$$

该式在两个器件都导通时成立，即 $|\Delta V| \le \sqrt{2I_{SS}/\beta}$。

### 第 2 步 — $I_{SS} = 2$ mA 时的电流分配

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})(50/0.5) = 13.4\ \mathrm{mA/V^2},\\
\sqrt{2I_{SS}/\beta} &= \sqrt{2(2\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.546\ \mathrm{V} \gg 50\ \mathrm{mV}\quad\text{(both on)},\\
\frac{4I_{SS}}{\beta} &= \frac{4(2\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}} = 0.5970\ \mathrm{V^2},\\
\sqrt{0.5970 - 0.0025}\ \mathrm{V} &= \sqrt{0.5945}\ \mathrm{V} = 0.7711\ \mathrm{V},\\
\frac{\beta}{2}\Delta V &= (6.7\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.335\ \mathrm{mA/V},\\
I_{D1} - I_{D2} &= (0.335\ \mathrm{mA/V})(0.7711\ \mathrm{V}) = 0.2583\ \mathrm{mA}.
\end{aligned}
$$

由 $I_{D1} + I_{D2} = 2$ mA：

$$
\begin{aligned}
I_{D1} &= \frac{2 + 0.2583}{2}\ \mathrm{mA} = 1.129\ \mathrm{mA},\\
I_{D2} &= \frac{2 - 0.2583}{2}\ \mathrm{mA} = 0.871\ \mathrm{mA}.
\end{aligned}
$$

**验证。** $\sqrt{2(1.1292)/13.4} - \sqrt{2(0.8708)/13.4} = 0.4105 - 0.3605 = 0.0500$ V。✓

### 第 3 步 — $I_{SS} = 1$ mA 时的电流分配（作比较）

$$
\begin{aligned}
\frac{4I_{SS}}{\beta} &= 0.2985\ \mathrm{V^2}, \qquad \sqrt{0.2985 - 0.0025}\ \mathrm{V} = 0.5441\ \mathrm{V},\\
I_{D1} - I_{D2} &= (0.335\ \mathrm{mA/V})(0.5441\ \mathrm{V}) = 0.1823\ \mathrm{mA},\\
I_{D1} &= 0.591\ \mathrm{mA}, \qquad I_{D2} = 0.409\ \mathrm{mA}.
\end{aligned}
$$

### 第 4 步 — 比较

| $I_{SS}$ | $V_{ov}$ | $G_{m0} = \sqrt{\beta I_{SS}}$ | $I_{D1}$ / $I_{D2}$ | $I_{D1} - I_{D2}$ | $\Delta I/I_{SS}$ |
|---|---|---|---|---|---|
| 2 mA | 0.386 V | 5.18 mS | 1.129 / 0.871 mA | 0.258 mA | 12.9 % |
| 1 mA | 0.273 V | 3.66 mS | 0.591 / 0.409 mA | 0.182 mA | 18.2 % |

- **绝对不平衡量**增大为 $0.2583/0.1823 = 1.42 \approx \sqrt2$ 倍，因为 $I_{D1} - I_{D2} \approx G_{m0}\Delta V$，而 $G_{m0} = \sqrt{\beta I_{SS}}$。事实上 $(5.18\ \mathrm{mS})(50\ \mathrm{mV}) = 0.259$ mA，与精确值相差在 0.3 % 以内。
- **相对不平衡度**从尾电流的 18.2 % 降到 12.9 %：过驱动电压（overdrive voltage）大了 $\sqrt2$ 倍，因此 50 mV 只占输入范围的较小部分，差分对的线性度更好。

增大尾电流可以同时改善跨导（transconductance）和线性度，代价是功耗加倍。

### 结果

$I_{SS} = 2$ mA 时：$I_{D1} \approx 1.129$ mA，$I_{D2} \approx 0.871$ mA（$\Delta I_D \approx 0.258$ mA）。

$I_{SS} = 1$ mA 时：$I_{D1} \approx 0.591$ mA，$I_{D2} \approx 0.409$ mA（$\Delta I_D \approx 0.182$ mA）。

尾电流加倍使绝对电流差增大约 $\sqrt2$ 倍（$G_m$ 更高），而相对不平衡度 $\Delta I_D/I_{SS}$ 从 18 % 降到 13 %（线性度更好）。

**常见错误。** 得出的电流之和不等于 2 mA，例如沿用 1 mA 时的分配，只是给每边加上相同的增量。尾电流源固定了 $I_{D1} + I_{D2} = I_{SS}$。

**常见错误。** 认为由于差分对“线性度更好”，较大的尾电流会使绝对电流差**更小**。下降的只是相对不平衡度；绝对差值随 $G_m = \sqrt{\beta I_{SS}}$ 增大。
