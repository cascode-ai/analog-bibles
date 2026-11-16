# 详细步骤 - R159

**思路。** 平衡时每个器件流过 $I_{SS}/2$，因此由平方律得 $V_{ov} = \sqrt{I_{SS}/(\mu_nC_{ox}W/L)}$；对两种宽长比（aspect ratio）分别求值，即可看出过驱动电压如何随 $W/L$ 变化。

### 第 1 步 — 平衡时的过驱动电压

平衡时（$V_{in1} = V_{in2}$），两个相同器件的 $V_{GS}$ 和 $V_{TH}$ 都相等，且 $\lambda = 0$，因此 $I_{D1} = I_{D2} = I_{SS}/2 = 0.5$ mA。令 $\beta = \mu_nC_{ox}W/L$：

$$
\begin{aligned}
\frac{I_{SS}}{2} &= \frac12\,\beta\,V_{ov}^2\\
V_{ov} &= \sqrt{\frac{I_{SS}}{\beta}} .
\end{aligned}
$$

### 第 2 步 — $W/L = 25/0.5$ 时的数值

$$
\begin{aligned}
\frac{W}{L} &= \frac{25}{0.5} = 50,\\
\beta &= (134\ \mu\mathrm{A/V^2})(50) = 6.7\ \mathrm{mA/V^2},\\
V_{ov} &= \sqrt{\frac{1\ \mathrm{mA}}{6.7\ \mathrm{mA/V^2}}} = \sqrt{0.1493\ \mathrm{V^2}} = 0.386\ \mathrm{V}.
\end{aligned}
$$

### 第 3 步 — 与 $W/L = 50/0.5$ 比较

对于 $W/L = 100$，$\beta = 13.4\ \mathrm{mA/V^2}$，

$$V_{ov} = \sqrt{\frac{1\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V}.$$

电流固定时 $V_{ov} \propto 1/\sqrt{W/L}$：

$$\frac{V_{ov}(25/0.5)}{V_{ov}(50/0.5)} = \sqrt{\frac{(W/L)_{50/0.5}}{(W/L)_{25/0.5}}} = \sqrt{\frac{100}{50}} = \sqrt2 = 1.414, \qquad \frac{0.386}{0.273} = 1.414\ \checkmark$$

为了流过同样的 0.5 mA，较窄的器件需要两倍的过驱动电压平方。对差分对而言，这意味着：

- 跨导（transconductance）较低：$g_m = 2I_D/V_{ov}$ 从 $2(0.5\ \mathrm{mA})/0.273\ \mathrm{V} = 3.66$ mS 降到 $2(0.5\ \mathrm{mA})/0.386\ \mathrm{V} = 2.59$ mS，即缩小 $\sqrt2$ 倍；
- 线性输入范围更宽：完全导向电流现在需要 $\sqrt2\,V_{ov} = 0.546$ V，而不是 0.386 V。

### 结果

$$V_{GS} - V_{TH} = \sqrt{\frac{I_{SS}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(50)}} \approx 0.386\ \mathrm{V},$$

是相同尾电流下 $W/L = 50/0.5$ 差分对的 0.273 V 的 $\sqrt2$ 倍：在电流不变时把 $W/L$ 减半，过驱动电压增大为原来的 $\sqrt2$ 倍。

**常见错误。** 认为 $W/L$ 越小，过驱动电压**越小**。在固定电流下，较窄的器件需要**更大**的 $V_{GS} - V_{TH}$。

**常见错误。** 把过驱动电压按因子 2 缩放（得到 0.546 V），而不是按 $\sqrt2$。把 $W/L$ 减半会使 $V_{ov}^2$ 乘以 2，使 $V_{ov}$ 乘以 $\sqrt2$。
