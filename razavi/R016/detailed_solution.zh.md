# 详细步骤 - R016

**思路。** $V_{out}$ 是 $M_1$ 的源极，于是该管是一个（带体效应的）源极跟随器，其漏极只有 1 V。求出导通点，求解饱和区中的跟随器方程，再找出器件进入线性区的位置；此后 $V_{out}$ 在略低于 1 V 处变得平坦。

### 第 1 步 — 端电压与截止区

$R_1$ 中的电流只能来自 1 V 电池并经过 $M_1$，因此 $0 \le V_{out} < 1$ V：电位较低的 $V_{out}$ 端是源极，1 V 端（图中画有箭头的一端）是漏极。因此

$$
\begin{aligned}
V_{GS} &= V_{in} - V_{out},\\
V_{DS} &= 1 - V_{out},\\
V_{SB} &= V_{out} - 0 = V_{out},
\end{aligned}
$$

计入体效应，

$$V_{TH}(V_{out}) = 0.7 + 0.45\left(\sqrt{0.9 + V_{out}} - 0.9487\right)\ \mathrm{V},$$

它从 $V_{out} = 0$ 时的 0.70 V 上升到 $V_{out} = 1$ V 时的 $0.7 + 0.45(\sqrt{1.9} - 0.9487) = 0.89$ V。

当 $V_{out} = 0$ 时，只有 $V_{GS} = V_{in} > V_{TH}(0) = 0.7$ V，$M_1$ 才导通，因此

$$V_{out} = 0 \quad\text{for}\quad 0 \le V_{in} \le 0.7\ \mathrm{V}.$$

### 第 2 步 — 跟随区（饱和区）

刚超过 0.7 V 时，过驱动电压（overdrive voltage）很小，而 $V_{DS} \approx 1$ V，因此 $M_1$ 处于饱和区。在输出节点列基尔霍夫电流定律（KCL）方程：

$$\frac{V_{out}}{R_1} = \tfrac12\beta\,(V_{in} - V_{out} - V_{TH})^2 .$$

取正的平方根并解出 $V_{out}$：

$$
\begin{aligned}
V_{in} - V_{out} - V_{TH} &= \sqrt{\frac{2V_{out}}{\beta R_1}}\\
V_{out} &= V_{in} - V_{TH}(V_{out}) - \sqrt{\frac{2V_{out}}{\beta R_1}} ,
\end{aligned}
$$

即输入电压减去一个阈值电压（threshold voltage），再减去承载负载电流所需的过驱动电压。

**斜率。** 对 KCL 方程求微分，其中 $g_m = \beta V_{ov}$，$\eta = \partial V_{TH}/\partial V_{SB} = \gamma/(2\sqrt{0.9 + V_{out}})$：

$$
\begin{aligned}
\frac{dV_{out}}{R_1} &= g_m\left(dV_{in} - dV_{out} - \eta\,dV_{out}\right)\\
dV_{out}\left(\frac{1}{R_1} + g_m(1 + \eta)\right) &= g_m\,dV_{in}\\
\frac{dV_{out}}{dV_{in}} &= \frac{g_m}{g_m(1 + \eta) + 1/R_1} = \frac{g_mR_1}{1 + (g_m + g_{mb})R_1},
\end{aligned}
$$

其中 $g_{mb} = \eta g_m$。斜率**总是小于 1**：由于体效应，它低于 $1/(1 + \eta) \approx 0.81$–$0.86$；在小电流下 $g_mR_1$ 较小，斜率更低。刚超过 0.7 V 时，$g_m \to 0$，曲线以零斜率开始。

### 第 3 步 — 进入线性区

饱和要求 $V_{DS} \ge V_{GS} - V_{TH}$：

$$
\begin{aligned}
1 - V_{out} &\ge V_{in} - V_{out} - V_{TH}\\
V_{in} &\le 1 + V_{TH}(V_{out}).
\end{aligned}
$$

栅极电位最多只能比 1 V 的漏极高出一个阈值电压。由于边界附近 $V_{TH}$ 约为 0.83–0.87 V，**$M_1$ 在 $V_{in} \approx 1.8$–$1.9$ V 处进入线性区**。在边界处 $V_{ov} = V_{DS} = 1 - V_{out}$，因此 KCL 方程变为 $V_{out} = \tfrac12\beta R_1(1 - V_{out})^2$。

**示例 $\beta R_1 = 10\ \mathrm{V^{-1}}$：**

$$
\begin{aligned}
V_{out} &= 5\,(1 - V_{out})^2\\
5V_{out}^2 - 11V_{out} + 5 &= 0\\
V_{out} &= \frac{11 - \sqrt{121 - 100}}{10} = \frac{11 - 4.583}{10} = 0.642\ \mathrm{V},
\end{aligned}
$$

（另一个根 1.56 V 超过 1 V，舍去）。于是 $V_{TH} = 0.7 + 0.45(\sqrt{1.542} - 0.9487) = 0.832$ V，边界位于 $V_{in} = 1 + 0.832 = 1.83$ V。

**示例 $\beta R_1 = 100\ \mathrm{V^{-1}}$：** 由 $50V_{out}^2 - 101V_{out} + 50 = 0$ 得 $V_{out} = (101 - \sqrt{201})/100 = 0.868$ V，$V_{TH} = 0.871$ V，边界位于 $V_{in} = 1.87$ V。

### 第 4 步 — 线性区：$V_{out}$ 趋于平坦并接近 1 V

当 $V_{in} > 1 + V_{TH}$ 时：

$$\frac{V_{out}}{R_1} = \beta\left[(V_{in} - V_{out} - V_{TH})(1 - V_{out}) - \tfrac12(1 - V_{out})^2\right].$$

随着 $V_{in}$ 增大，$M_1$ 变成接在 1 V 电池与输出之间、阻值不断减小的电阻 $R_{on} \approx 1/[\beta(V_{in} - V_{out} - V_{TH})]$，因此

$$V_{out} \approx 1\ \mathrm{V}\times\frac{R_1}{R_1 + R_{on}} \;\to\; 1\ \mathrm{V}.$$

$V_{out}$ **渐近地接近 1 V，但永远不会超过它**，因为该电池是向沟道供电的最高电位。

### 第 5 步 — 数值曲线

逐点求解第 2 步和第 4 步的方程：

| $V_{in}$ (V) | $V_{out}$，$\beta R_1 = 10\ \mathrm{V^{-1}}$ | $V_{out}$，$\beta R_1 = 100\ \mathrm{V^{-1}}$ | 工作区 |
|---|---|---|---|
| 0 – 0.7 | 0 | 0 | 截止 |
| 0.8 | 0.024 | 0.054 | 饱和区 |
| 1.0 | 0.119 | 0.194 | 饱和区 |
| 1.2 | 0.232 | 0.343 | 饱和区 |
| 1.5 | 0.420 | 0.574 | 饱和区 |
| 1.8 | 0.620 | 0.811 | 饱和区 |
| 2.0 | 0.738 | 0.937 | 线性区（边界为 1.83 / 1.87 V） |
| 2.5 | 0.874 | 0.984 | 线性区 |
| 3.0 | 0.921 | 0.991 | 线性区 |

验算示例：$\beta R_1 = 10\ \mathrm{V^{-1}}$，$V_{in} = 1.5$ V，猜测 $V_{out} = 0.420$ V。于是 $V_{TH} = 0.7 + 0.45(\sqrt{1.32} - 0.9487) = 0.7 + 0.45(1.1489 - 0.9487) = 0.790$ V，$V_{ov} = 1.5 - 0.420 - 0.790 = 0.290$ V，且 $\tfrac12\beta R_1V_{ov}^2 = 5\times(0.290)^2 = 0.420$ V $= V_{out}$。✓

**形状。** 0.7 V 以前恒为零；随后是一段上升的跟随器曲线，以零斜率开始，在中段斜率增大到约 0.6–0.8（从 1.2 V 到 1.5 V 的斜率，$\beta R_1 = 10$ 时为 0.63，$\beta R_1 = 100$ 时为 0.77）；在 $V_{in} \approx 1.8$–1.9 V 处出现拐点；之后平缓地趋近 1 V。$\beta R_1$ 越大，跟随区越陡、越接近 $V_{in} - V_{TH}$，最终电平也越接近 1 V。

### 结果

- **$V_{in} \le 0.7$ V：** $M_1$ 截止，$V_{out} = 0$。
- **$0.7\ \mathrm{V} < V_{in} \lesssim 1 + V_{TH} \approx 1.8$–$1.9$ V：** $M_1$ 是一个**源极跟随器**，以 $V_{out}$ 节点为源极、1 V 节点为漏极（$V_{GS} = V_{in} - V_{out}$，$V_{SB} = V_{out}$）。它处于饱和区，且
$$V_{out} = \tfrac12\beta R_1(V_{in} - V_{out} - V_{TH})^2 \quad\Longleftrightarrow\quad V_{out} = V_{in} - V_{TH}(V_{out}) - \sqrt{\frac{2V_{out}}{\beta R_1}} .$$
斜率小于 1，原因是 $\beta R_1$ 有限以及存在体效应（当 $V_{out} \to 1$ V 时，$V_{TH}$ 从 0.7 V 上升到接近 0.89 V）。
- **$V_{in} \gtrsim 1 + V_{TH}(V_{out})$**（$\beta R_1 = 10\ \mathrm{V^{-1}}$ 时为 1.83 V，$100\ \mathrm{V^{-1}}$ 时为 1.87 V）：$M_1$ 进入**线性区**，$V_{out}$ 变得平坦，逐渐接近但永远不会超过 **1 V**（两个示例在 $V_{in} = 3$ V 时分别为 0.92 V 和 0.99 V）。

**常见错误。** 把 1 V 端（画有箭头的一端）当作源极，这样电路就变成了一个具有反相特性的共源级（common-source stage）。输出节点被 $R_1$ 拉向地，始终是电位较低的端子。

**常见错误。** 让 $V_{out}$ 一直跟随 $V_{in}$ 上升（例如 $V_{out} = V_{in} - V_{TH}$ 一直到 2.3 V）。漏极只有 1 V，因此一旦 $V_{in} > 1 + V_{TH}$，器件就进入线性区，输出永远不会超过 1 V。

**常见错误。** 在跟随区忽略体效应。当源极向 1 V 升高时，$V_{TH}$ 增大了将近 0.2 V，这会降低曲线及其斜率，并把进入线性区的拐点从 1.7 V 移到约 1.8–1.9 V。
