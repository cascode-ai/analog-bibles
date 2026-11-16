# 详细步骤 - R163

**思路。** 平衡时每个器件流过 $I_{SS}/2$，因此由平方律得 $V_{ov} = \sqrt{I_{SS}/(\mu_nC_{ox}W/L)}$；分别在 2 mA 和 1 mA 下求值。

### 第 1 步 — 平衡时的过驱动电压

平衡时（$V_{in1} = V_{in2}$），两个相同器件的 $V_{GS}$ 和 $V_{TH}$ 都相同，且 $\lambda = 0$，因此

$$I_{D1} = I_{D2} = \frac{I_{SS}}{2} = \frac{2\ \mathrm{mA}}{2} = 1\ \mathrm{mA}.$$

令 $\beta = \mu_nC_{ox}W/L$：

$$
\begin{aligned}
\frac{I_{SS}}{2} &= \frac12\,\beta\,V_{ov}^2\\
V_{ov} &= \sqrt{\frac{I_{SS}}{\beta}} .
\end{aligned}
$$

### 第 2 步 — 数值

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})\left(\frac{50}{0.5}\right) = 13.4\ \mathrm{mA/V^2},\\
V_{ov} &= \sqrt{\frac{2\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.1493\ \mathrm{V^2}} = 0.386\ \mathrm{V}.
\end{aligned}
$$

### 第 3 步 — 与 1 mA 尾电流比较

当 $I_{SS} = 1$ mA 时，每个器件流过 0.5 mA，

$$V_{ov} = \sqrt{\frac{1\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V}.$$

对于固定的器件尺寸，$V_{ov} \propto \sqrt{I_{SS}}$：

$$\frac{V_{ov}(2\ \mathrm{mA})}{V_{ov}(1\ \mathrm{mA})} = \sqrt{\frac{2\ \mathrm{mA}}{1\ \mathrm{mA}}} = \sqrt2 = 1.414, \qquad \frac{0.386}{0.273} = 1.414\ \checkmark$$

对差分对的影响：

- 输入范围增大：完全导向现在需要 $\sqrt2\,V_{ov} = 0.546$ V，而不是 0.386 V；
- 跨导（transconductance）**也**增大：$g_m = 2I_D/V_{ov} = 2(1\ \mathrm{mA})/0.386\ \mathrm{V} = 5.18$ mS，而原来为 3.66 mS，即增大 $\sqrt2$ 倍，因为电流加倍而过驱动电压只增大 $\sqrt2$ 倍。代价是功耗加倍。

（在 1 mA 下把 $W/L$ 减半也能得到同样 0.386 V 的过驱动电压；这种做法同样会扩大输入范围，但会**降低** $g_m$。）

### 结果

$$V_{GS} - V_{TH} = \sqrt{\frac{I_{SS}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(100)}} \approx 0.386\ \mathrm{V},$$

即 1 mA 尾电流时所得 0.273 V 的 $\sqrt2$ 倍。

**常见错误。** 把全部 2 mA 放入一个器件：$\sqrt{2(2\ \mathrm{mA})/13.4\ \mathrm{mA/V^2}} = 0.546$ V。平衡时每个器件只流过 1 mA。

**常见错误。** 让过驱动电压与电流成正比（加倍到 0.546 V）。电流加倍使过驱动电压增大 $\sqrt2$ 倍，而不是 2 倍。
