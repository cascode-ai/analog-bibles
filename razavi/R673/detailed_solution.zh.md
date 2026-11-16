# 详细步骤 - R673

**思路。** 把每个区域的 $g_m = \partial I_D/\partial V_{GS}$ 除以 $I_D$。在强反型区，$g_m/I_D$ 取决于过驱动电压（从而取决于电流）；在亚阈值区，它是常数。令两者相等，即可求出交点处的过驱动电压和漏极电流。

### 第 1 步 — 强反型（平方律）

令 $V_{ov} = V_{GS} - V_{TH}$，有 $I_D = \frac12\mu C_{ox}(W/L)V_{ov}^2$ 和 $g_m = \mu C_{ox}(W/L)V_{ov}$，因此

$$\frac{g_m}{I_D} = \frac{\mu C_{ox}(W/L)V_{ov}}{\frac12\mu C_{ox}(W/L)V_{ov}^2} = \frac{2}{V_{ov}} = \frac{2}{V_{GS} - V_{TH}} .$$

由电流方程得 $V_{ov} = \sqrt{2I_D/[\mu C_{ox}(W/L)]}$，代入得

$$\frac{g_m}{I_D} = \frac{2}{\sqrt{2I_D/[\mu C_{ox}(W/L)]}} = \sqrt{\frac{4\,\mu C_{ox}(W/L)}{2I_D}} = \sqrt{\frac{2\,\mu C_{ox}(W/L)}{I_D}} .$$

在强反型区，$g_m/I_D$ **按 $1/\sqrt{I_D}$ 下降**，因为 $g_m$ 只按 $\sqrt{I_D}$ 增长。

### 第 2 步 — 亚阈值区

设 $I_D = I_0\exp[V_{GS}/(\zeta V_T)]$，其中 $I_0$ 包含了与 $V_{GS}$ 无关的各因子，则

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = I_0\exp\!\left(\frac{V_{GS}}{\zeta V_T}\right)\cdot\frac{1}{\zeta V_T} = \frac{I_D}{\zeta V_T}, \qquad \frac{g_m}{I_D} = \frac{1}{\zeta V_T}\quad\text{(independent of } I_D\text{)}.$$

在 $T = 300$ K 时，$V_T = 25.85$ mV：

$$
\begin{aligned}
\zeta = 1.5:&\quad \frac{g_m}{I_D} = \frac{1}{1.5\times0.02585\ \mathrm{V}} = 25.8\ \mathrm{V^{-1}},\\
\zeta = 1\ \text{(ideal limit)}:&\quad \frac{g_m}{I_D} = \frac{1}{0.02585\ \mathrm{V}} = 38.7\ \mathrm{V^{-1}}.
\end{aligned}
$$

理想值 $1/V_T$ 与双极晶体管相同（$g_m = I_C/V_T$）；MOSFET 要差 $\zeta$ 倍，因为栅极只能通过分压比 $C_{ox}/(C_{ox} + C_d)$ 来控制表面势。

### 第 3 步 — 两者相等之处

$$
\begin{aligned}
\frac{2}{V_{ov}} &= \frac{1}{\zeta V_T}\\
V_{ov} &= 2\zeta V_T ,
\end{aligned}
$$

代入平方律，

$$
\begin{aligned}
I_D &= \frac12\,\mu C_{ox}\,\frac{W}{L}\,(2\zeta V_T)^2 = \frac12\,\mu C_{ox}\,\frac{W}{L}\,4\zeta^2V_T^2\\
&= 2\,\mu C_{ox}\,\frac{W}{L}\,(\zeta V_T)^2 .
\end{aligned}
$$

用电流形式验证：$\sqrt{2\mu C_{ox}(W/L)/[2\mu C_{ox}(W/L)(\zeta V_T)^2]} = 1/(\zeta V_T)$。✓

### 第 4 步 — 数值示例

NMOS，$\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$，300 K。

**$\zeta = 1.5$：** $\zeta V_T = 1.5\times25.85\ \mathrm{mV} = 38.8$ mV，因此

$$
\begin{aligned}
V_{ov} &= 2\zeta V_T = 2\times38.8\ \mathrm{mV} = 77.6\ \mathrm{mV},\\
I_D &= 2\,(134\ \mu\mathrm{A/V^2})\,\frac{W}{L}\,(0.0388\ \mathrm{V})^2 = 2\times134\times1.504\times10^{-3}\ \mu\mathrm{A}\times\frac{W}{L} = 0.40\ \mu\mathrm{A}\times\frac{W}{L}.
\end{aligned}
$$

**$\zeta = 1$：** $V_{ov} = 51.7$ mV，$I_D = 2(134\ \mu\mathrm{A/V^2})(0.02585\ \mathrm{V})^2(W/L) = 0.18\ \mu\mathrm{A}\times(W/L)$。

例如，$W/L = 100$、$\zeta = 1.5$ 的器件在约 40 µA 处交叉。

### 第 5 步 — 交点的含义

记交点电流为 $I_x = 2\mu C_{ox}(W/L)(\zeta V_T)^2$，则平方律给出的值为 $g_m/I_D = \frac{1}{\zeta V_T}\sqrt{I_x/I_D}$：

| $I_D/I_x$ | 0.01 | 0.1 | 1 | 10 | 100 |
|---|---|---|---|---|---|
| 平方律（以 $1/(\zeta V_T)$ 为单位） | 10 | 3.16 | 1 | 0.316 | 0.1 |
| 亚阈值（以 $1/(\zeta V_T)$ 为单位） | 1 | 1 | 1 | 1 | 1 |

- **高于 $I_x$** 时，平方律适用，$g_m/I_D$ 按 $1/\sqrt{I_D}$ 下降。
- **低于 $I_x$** 时，平方律预测的 $g_m/I_D$ 会**大于**亚阈值值，并在 $I_D \to 0$ 时无限增大。这在物理上不成立：在弱反型区，实际的 $g_m/I_D$ 趋于平稳，等于 $1/(\zeta V_T)$。
- 因此交点大致标志着中等反型区的边界。在 $g_m/I_D$ 随 $I_D$ 变化的双对数坐标图上，实际曲线在小电流时是平的，在 $I_x$ 以上以 $-1/2$ 的斜率向下弯折。

单位偏置电流的最大跨导是在弱反型区获得的，但这只有在大 $W/L$（大电容）和低电流密度，即低速度的条件下才能实现：这正是基于 $g_m/I_D$ 的设计方法背后的折中。

### 结果

- 强反型：$\dfrac{g_m}{I_D} = \dfrac{2}{V_{GS} - V_{TH}} = \sqrt{\dfrac{2\mu C_{ox}(W/L)}{I_D}}$，按 $1/\sqrt{I_D}$ 减小。
- 亚阈值：$\dfrac{g_m}{I_D} = \dfrac{1}{\zeta V_T}$，为常数（300 K、$\zeta = 1.5$ 时 ≈ 26 V⁻¹；最大为 $1/V_T \approx 39$ V⁻¹）。
- 当 $V_{GS} - V_{TH} = 2\zeta V_T$ 时两者相等，对应的电流为
$$I_D = 2\,\mu C_{ox}\,\frac{W}{L}\,(\zeta V_T)^2$$
（$\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$、$\zeta = 1.5$、300 K 时 ≈ $0.40\ \mu\mathrm{A}\times W/L$）。

**常见错误。** 在强反型区写成 $g_m/I_D = 1/(V_{GS} - V_{TH})$。电流是过驱动电压的**二次**函数，所以其对数导数为 $2/V_{ov}$；这一错误会把交点移到 $V_{ov} = \zeta V_T$，并使交点电流相差 4 倍。

**常见错误。** 以 $g_m$ 增大为由，认为在强反型区 $g_m/I_D$ 随 $I_D$ 增大。$g_m$ 只按 $\sqrt{I_D}$ 增长，因此该比值按 $1/\sqrt{I_D}$ **下降**。
