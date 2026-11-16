# 详细步骤 - R523

**思路。** 保持 $I_D$ 固定，把过驱动电压 $V_{ov} = V_{GS} - V_{TH}$ 当作自变量。$g_m = 3I_D/V_{ov}$ 是一条双曲线；而由 $I_D = \beta V_{ov}^3/3$ 和 $\beta = kW/L$（$k$ 的单位为 A/V³）得 $W/L \propto V_{ov}^{-3}$。与图中的平方律（$g_m = 2I_D/V_{ov}$，$W/L = 2I_D/(\mu_nC_{ox}V_{ov}^2)$）进行比较，并加上小过驱动电压下 $g_m$ 的弱反型上限。

### 第 1 步 — 恒定 $I_D$ 下 $g_m$ 随过驱动电压的变化

由 $g_m/I_D = \beta V_{ov}^2/(\beta V_{ov}^3/3) = 3/V_{ov}$：

$$g_m = \frac{3I_D}{V_{ov}} \propto \frac{1}{V_{ov}} ,$$

这是一条**递减的双曲线**：过驱动电压减半，$g_m$ 加倍，而且每个值都是平方律值 $2I_D/V_{ov}$ 的 1.5 倍。在固定电流下，过驱动电压越小，意味着器件越宽，其电流由更小的栅极电压摆幅控制，因此 $g_m$ 越大。

### 第 2 步 — 小过驱动电压下的弱反型上限

当 $V_{ov} \to 0$ 时，双曲线不可能发散：器件进入弱反型，此时 $g_m = I_D/(\xi V_T)$（$V_T = kT/q \approx 26$ mV，$\xi \approx 1.5$）是给定电流下的最大值。强反型（strong inversion）公式在下述位置达到这一上限：

$$\frac{3I_D}{V_{ov}} = \frac{I_D}{\xi V_T}\quad\Longrightarrow\quad V_{ov} = 3\xi V_T \approx 3\times1.5\times26\ \mathrm{mV} \approx 0.12\ \mathrm{V}.$$

大约低于这一过驱动电压时，实际曲线趋于平坦，趋近 $I_D/(\xi V_T)$，即图中的点线部分。对于平方律，交点位于 $2\xi V_T \approx 0.08$ V。

### 第 3 步 — 恒定 $I_D$ 下 $W/L$ 随过驱动电压的变化

$$I_D = \frac{k}{3}\frac WL V_{ov}^3 \quad\Longrightarrow\quad \frac WL = \frac{3I_D}{k\,V_{ov}^3} \propto V_{ov}^{-3}.$$

这条**递减**曲线在 $V_{ov} \to 0$ 时趋于无穷大，并且下降得非常陡：过驱动电压减半需要 $2^3 = 8$ 倍的 $W/L$，而平方律的 $V_{ov}^{-2}$ 只需 4 倍。对于三次方律，$V_{ov}$ 的小幅减小必须用宽度的大幅增加来补偿。

### 第 4 步 — 草图的示例数值

取 $I_D = 100\ \mu\mathrm{A}$，$k = 0.24\ \mathrm{mA/V^3}$。在 $V_{ov} = 0.2$ V 时：

$$
\begin{aligned}
g_m &= \frac{3\times100\ \mu\mathrm{A}}{0.2\ \mathrm{V}} = 1.5\ \mathrm{mS},\\
\frac WL &= \frac{3\times100\ \mu\mathrm{A}}{(0.24\ \mathrm{mA/V^3})(0.2\ \mathrm{V})^3} = \frac{300\ \mu\mathrm{A}}{1.92\ \mu\mathrm{A}} = 156 .
\end{aligned}
$$

| $V_{ov}$ (V) | 0.1 | 0.15 | 0.2 | 0.3 | 0.4 | 0.5 |
|---|---|---|---|---|---|---|
| $g_m = 3I_D/V_{ov}$ (mS) | (3.0)＊ | 2.0 | 1.5 | 1.0 | 0.75 | 0.60 |
| $W/L$ | 1250 | 370 | 156 | 46 | 19.5 | 10 |

＊在 0.1 V 处，公式给出 3.0 mS，超过了弱反型上限 $I_D/(\xi V_T) = 100\ \mu\mathrm{A}/39\ \mathrm{mV} = 2.56$ mS；实际器件在该处已处于中等反型（moderate inversion）或弱反型，其 $g_m$ 保持在 2.56 mS 以下。

在 $W/L$ 一行中，从 0.4 V 到 0.2 V，$W/L$ 乘以 8（19.5 → 156）；从 0.2 V 到 0.1 V，又再乘以 8。

**草图**（坐标轴与图中相同）：
- **上半部分：** 在较大的过驱动电压下，$g_m$ 按 $3I_D/V_{ov}$ 下降（一条双曲线，是平方律曲线的 1.5 倍）；当 $V_{ov}$ 降到约 0.12 V 以下时，趋于平坦并趋近 $I_D/(\xi V_T)$；
- **下半部分：** $W/L$（向下画）在小过驱动电压下极大，并按 $V_{ov}^{-3}$ 急剧减小，比平方律的 $V_{ov}^{-2}$ 更陡，在大过驱动电压下趋近坐标轴。

### 结果

在 $I_D$ 恒定、$\beta = kW/L$ 时：

$$g_m = \frac{3I_D}{V_{GS} - V_{TH}} \propto \frac{1}{V_{GS} - V_{TH}},\qquad \frac WL = \frac{3I_D}{k\,(V_{GS} - V_{TH})^3} \propto (V_{GS} - V_{TH})^{-3}.$$

- $g_m$ 是一条递减的双曲线（$3I_D/V_{ov}$，而不是平方律的 $2I_D/V_{ov}$）。在过驱动电压较小时，它不能超过弱反型极限 $I_D/(\xi V_T)$，因此在约 $3\xi V_T \approx 0.12$ V 以下趋于平坦。
- $W/L$ 比平方律的 $(V_{GS} - V_{TH})^{-2}$ 下降得陡得多：过驱动电压减半需要 8 倍的 $W/L$，而平方律只需 4 倍。

**常见错误。** 使用平方律的关系 $W/L \propto V_{ov}^{-2}$。保持 $I_D = \tfrac{k}{3}(W/L)V_{ov}^3$ 恒定，必然有 $W/L \propto V_{ov}^{-3}$。

**常见错误。** 对这种器件写出 $g_m = 2I_D/V_{ov}$，或者把 $g_m$ 画成随过驱动电压增大。这里 $g_m/I_D = 3/V_{ov}$，在电流固定时它随过驱动电压升高而减小。

**常见错误。** 让 $g_m$ 双曲线在小过驱动电压下无限增大。任何 MOSFET 都不可能超过 $g_m = I_D/(\xi V_T)$。
