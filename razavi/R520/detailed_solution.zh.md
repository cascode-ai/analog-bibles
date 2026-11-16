# 详细步骤 - R520

**思路。** 保持 $I_D$ 固定，令 $\beta = kW/L$ 增大（$k$ 的单位为 A/V³，是工艺常数）。由 $I_D = \beta V_{ov}^3/3$ 解出过驱动电压 $V_{ov} = V_{GS} - V_{TH}$，得 $V_{ov} \propto (W/L)^{-1/3}$，以及 $g_m = 3I_D/V_{ov} \propto (W/L)^{1/3}$。把两者与平方律的指数（$\mp 1/2$）进行比较，并加上 $W/L$ 很大时达到的弱反型上限。

### 第 1 步 — 恒定 $I_D$ 下过驱动电压随 $W/L$ 的变化

$$V_{ov}^3 = \frac{3I_D}{\beta} \quad\Longrightarrow\quad V_{ov} = \left(\frac{3I_D}{k\,W/L}\right)^{1/3} \propto \left(\frac WL\right)^{-1/3}.$$

- 当 $W/L \to 0$ 时，$V_{ov} \to \infty$；随着 $W/L$ 增大，$V_{ov}$ 减小并趋向于零。
- $W/L$ 乘以 8 使过驱动电压减半（$8^{-1/3} = 1/2$）。对于平方律，$V_{ov} = \sqrt{2I_D/(\mu_nC_{ox}W/L)} \propto (W/L)^{-1/2}$，因此乘以 4 就够了：这里的过驱动电压随 $W/L$ 下降得**更慢**。

### 第 2 步 — 恒定 $I_D$ 下 $g_m$ 随 $W/L$ 的变化

$$g_m = \frac{3I_D}{V_{ov}} = 3I_D\left(\frac{k\,W/L}{3I_D}\right)^{1/3} = (3I_D)^{2/3}\left(k\frac WL\right)^{1/3} \propto \left(\frac WL\right)^{1/3}.$$

- $g_m$ 从零开始，在原点处 $dg_m/d(W/L) \propto (W/L)^{-2/3} \to \infty$（切线竖直），且曲线向下凹（二阶导数 $\propto -(W/L)^{-5/3} < 0$）。
- 要使 $g_m$ 加倍需要 8 倍的 $W/L$；对平方律，$g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D} \propto (W/L)^{1/2}$ 只需 4 倍。在电流固定时，加宽这种器件是提高 $g_m$ 的一种**效果较差**的方法。

### 第 3 步 — 弱反型上限

随着 $V_{ov}$ 降向零，晶体管进入弱反型，此时 $g_m = I_D/(\xi V_T)$（$V_T = kT/q \approx 26$ mV，$\xi$ 的典型值约为 1.5），这是在给定电流下任何 MOSFET 所能具有的最大 $g_m$。因此对两种器件而言，$g_m$ 都会**趋于平坦**，稳定在 $I_D/(\xi V_T)$，即图中的虚线。该模型在 $3I_D/V_{ov} = I_D/(\xi V_T)$ 处达到上限：

$$V_{ov} = 3\,\xi V_T \approx 3\times1.5\times26\ \mathrm{mV} \approx 0.12\ \mathrm{V}$$

（平方律：由 $2I_D/V_{ov} = I_D/(\xi V_T)$ 得 $V_{ov} = 2\xi V_T \approx 0.08$ V）。在这一过驱动电压附近及以下，实际曲线平滑地弯向渐近线，过驱动电压趋于零（在深弱反型区中略为负值）。

### 第 4 步 — 草图的示例数值

取 $I_D = 100\ \mu\mathrm{A}$，$k = 0.24\ \mathrm{mA/V^3}$（对单位 $W/L$）。当 $W/L = 10$ 时：

$$
\begin{aligned}
\beta &= 0.24\ \mathrm{mA/V^3}\times10 = 2.4\ \mathrm{mA/V^3},\\
V_{ov} &= \left(\frac{3\times100\ \mu\mathrm{A}}{2.4\ \mathrm{mA/V^3}}\right)^{1/3} = (0.125\ \mathrm{V^3})^{1/3} = 0.50\ \mathrm{V},\\
g_m &= \frac{3\times100\ \mu\mathrm{A}}{0.50\ \mathrm{V}} = 0.60\ \mathrm{mS}.
\end{aligned}
$$

| $W/L$ | 10 | 20 | 40 | 80 | 160 | 320 | 640 |
|---|---|---|---|---|---|---|---|
| $V_{ov}$ (V)，向下画 | 0.50 | 0.40 | 0.315 | 0.25 | 0.198 | 0.157 | 0.125 |
| $g_m$ (mS)，向上画 | 0.60 | 0.76 | 0.95 | 1.20 | 1.51 | 1.90 | 2.40 |

$W/L$ 每增大到 8 倍（10 → 80 → 640），$V_{ov}$ 减半，$g_m$ 加倍。上限为 $I_D/(\xi V_T) = 100\ \mu\mathrm{A}/(1.5\times26\ \mathrm{mV}) = 2.56$ mS，因此在 $W/L \approx 640$ 附近（此时 $V_{ov} \approx 0.12$ V），实际器件已处于中等反型（moderate inversion）或弱反型，$g_m$ 在略低于 2.56 mS 处趋于平坦。

**草图**（坐标轴与图中相同）：
- **上半部分：** $g_m$ 从原点以竖直切线出发上升，向下凹，按 $(W/L)^{1/3}$ 增长，比平方律的 $\sqrt{W/L}$ 更慢，最终在虚线 $I_D/(\xi V_T)$ 下方趋于平坦；
- **下半部分：** $V_{ov}$ 在 $W/L$ 很小时从很大的值开始下降，按 $(W/L)^{-1/3}$ 衰减，比平方律的 $(W/L)^{-1/2}$ 更慢，在 $W/L$ 很大时趋近于零。

### 结果

在 $I_D$ 恒定、$\beta \propto W/L$ 时：

$$V_{GS} - V_{TH} = \left(\frac{3I_D}{\beta}\right)^{1/3} \propto \left(\frac WL\right)^{-1/3},\qquad g_m = \frac{3I_D}{V_{GS} - V_{TH}} = (3I_D)^{2/3}\beta^{1/3} \propto \left(\frac WL\right)^{1/3}.$$

- 过驱动电压减小，但比平方律减小得慢：$W/L$ 增大到 8 倍才使它减半，而平方律只需 4 倍。
- $g_m$ 以无穷大的初始斜率上升，曲线向下凹，比平方律的 $\sqrt{W/L}$ 上升得慢：要使 $g_m$ 加倍，需要 8 倍的 $W/L$。
- $W/L$ 很大时，器件进入弱反型，$g_m$ 趋于平坦，稳定在 $I_D/(\xi V_T)$，与平方律器件一样。该模型的 $g_m$ 在 $V_{GS} - V_{TH} \approx 3\xi V_T \approx 0.12$ V 附近达到这一极限。

**常见错误。** 使用平方律的指数，即 $g_m \propto \sqrt{W/L}$ 和 $V_{ov} \propto 1/\sqrt{W/L}$。在 $I_D$ 固定且 $I_D \propto \beta V_{ov}^3$ 时，$V_{ov} \propto \beta^{-1/3}$，$g_m = 3I_D/V_{ov} \propto \beta^{1/3}$。

**常见错误。** 声称器件加宽时 $g_m$ 会无限增大。三次方律只描述强反型（strong inversion）；随着 $V_{GS} - V_{TH}$ 减小，器件进入弱反型，而 $g_m/I_D$ 永远不可能超过 $1/(\xi V_T)$。
