# 详细步骤 - R087

**思路：** 输出摆幅决定了两个过驱动电压之和。增益 $g_{m1}(r_{O1}\|r_{O2})$ 可化为 $2/[(\lambda_1 + \lambda_2)V_{ov1}]$；由于 $\lambda \propto 1/L$，选定 $V_{ov1}$ 后，它给出两管沟道长度之间的约束。再由 1 mA 下的平方律（square law）求出宽度。未知量（$W_1$、$L_1$、$W_2$、$L_2$）多于约束条件，因此我们先说明可自由选择的量，再给出一个完整的设计。

### 第 1 步 — 摆幅约束

$M_2$ 的栅极接固定偏置 $V_b$，是一个电流源（current source）负载，两个晶体管都流过 $I_D = 1$ mA。令 $|V_{ov2}| = V_{SG2} - |V_{TH2}|$，输出只能在两个器件都保持在饱和区（saturation region）的范围内变化：

- $M_1$：$V_{DS1} \ge V_{GS1} - V_{TH1}$，即 $V_{out} \ge V_{ov1}$。
- $M_2$：$V_{SD2} \ge |V_{ov2}|$，即 $V_{out} \le V_{DD} - |V_{ov2}|$。

摆幅按静态过驱动电压估算饱和余量。用 $V_{ov1} \le V_{out} \le V_{DD} - |V_{ov2}|$ 的两个边界相减，得到

$$
\begin{aligned}
V_{DD} - |V_{ov2}| - V_{ov1} &= 2.2\ \mathrm{V}\\
V_{ov1} + |V_{ov2}| &= 3\ \mathrm{V} - 2.2\ \mathrm{V} = 0.8\ \mathrm{V}.
\end{aligned}
$$

式中只出现过驱动电压，而不出现阈值电压（threshold voltage）：无论阈值电压是多少，栅极电压都会相应调整。

### 第 2 步 — 增益约束

$M_2$ 的栅极和源极都接交流地，因此它简化为从 $out$ 接地的 $r_{O2}$；$M_1$ 则贡献 $g_{m1}v_{in}$ 和 $r_{O1}$。

<!-- diagram: diagram-01.cir -->

对 $out$ 节点应用基尔霍夫电流定律（KCL）：

$$
\begin{aligned}
g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} + \frac{v_{out}}{r_{O2}} &= 0\\
A_v = \frac{v_{out}}{v_{in}} &= -g_{m1}\,(r_{O1}\|r_{O2}) .
\end{aligned}
$$

利用 $g_{m1} = 2I_D/V_{ov1}$ 和 $r_O = 1/(\lambda I_D)$：

$$
\begin{aligned}
r_{O1}\|r_{O2} &= \frac{1}{1/r_{O1} + 1/r_{O2}} = \frac{1}{\lambda_1I_D + \lambda_2I_D} = \frac{1}{(\lambda_1 + \lambda_2)I_D},\\
|A_v| &= \frac{2I_D}{V_{ov1}}\cdot\frac{1}{(\lambda_1 + \lambda_2)I_D} = \frac{2}{(\lambda_1 + \lambda_2)\,V_{ov1}} .
\end{aligned}
$$

偏置电流被约去：增益只取决于 $V_{ov1}$，以及通过下式体现的沟道长度：

$$\lambda_1 = (0.1\ \mathrm{V^{-1}})\frac{0.5\ \mu\mathrm{m}}{L_1} = \frac{0.05\ \mu\mathrm{m/V}}{L_1}, \qquad \lambda_2 = (0.2\ \mathrm{V^{-1}})\frac{0.5\ \mu\mathrm{m}}{L_2} = \frac{0.1\ \mu\mathrm{m/V}}{L_2} .$$

若两管均取 $L_i=0.5\ \mu\mathrm m$，则 $\lambda_1+\lambda_2=0.3\ \mathrm{V^{-1}}$。当 $V_{ov1}=0.4\ \mathrm V$ 时，上式给出的增益幅值仅为 16.7，因此此过驱动电压下需要降低 $\lambda_1+\lambda_2$。

### 第 3 步 — 选择自由参数

两个约束确定了 $V_{ov1}$、$|V_{ov2}|$、$L_1$、$L_2$ 这四个量中的两个（宽度随后由平方律求出）。另外两个可以自由选择：

1. 等沟长，$L_1 = L_2 = L$。于是 $\lambda_1 + \lambda_2 = (0.05 + 0.1)\ \mu\mathrm{m/V}/L = (0.15\ \mu\mathrm{m/V})/L$，增益条件变为
$$
\begin{aligned}
\frac{2}{(0.15\ \mu\mathrm{m/V}/L)\,V_{ov1}} &= 100\\
\frac{2L}{(0.15\ \mu\mathrm{m/V})\,V_{ov1}} &= 100\\
L &= \frac{100\times0.15\ \mu\mathrm{m/V}}{2}\,V_{ov1} = (7.5\ \mu\mathrm{m/V})\,V_{ov1} .
\end{aligned}
$$
2. 等过驱动电压，$V_{ov1} = |V_{ov2}| = 0.8\ \mathrm{V}/2 = 0.4$ V，它满足摆幅约束。

于是

$$L = (7.5\ \mu\mathrm{m/V})(0.4\ \mathrm{V}) = 3\ \mu\mathrm{m}, \qquad L_1 = L_2 = 3\ \mu\mathrm{m}.$$

### 第 4 步 — 由平方律求宽度

$W/L = 2I_D/(\mu C_{ox}V_{ov}^2)$，对 PMOS 用 $\mu_pC_{ox}$（对于这样长的沟道，因子 $1 + \lambda V_{DS}$ 只带来百分之几的影响，确定尺寸时将其忽略）。

$M_1$（NMOS）：

$$
\begin{aligned}
\left(\frac{W}{L}\right)_1 &= \frac{2\,(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.4\ \mathrm{V})^2} = \frac{2000\ \mu\mathrm{A}}{21.44\ \mu\mathrm{A}} = 93.3,\\
W_1 &= 93.3\times3\ \mu\mathrm{m} = 280\ \mu\mathrm{m}.
\end{aligned}
$$

$M_2$（PMOS）：

$$
\begin{aligned}
\left(\frac{W}{L}\right)_2 &= \frac{2\,(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.4\ \mathrm{V})^2} = \frac{2000\ \mu\mathrm{A}}{6.144\ \mu\mathrm{A}} = 325.5,\\
W_2 &= 325.5\times3\ \mu\mathrm{m} = 977\ \mu\mathrm{m}.
\end{aligned}
$$

### 第 5 步 — 验证设计

$$
\begin{aligned}
\lambda_1 &= \frac{0.05\ \mu\mathrm{m/V}}{3\ \mu\mathrm{m}} = 0.0167\ \mathrm{V^{-1}}, & r_{O1} &= \frac{1}{(0.0167\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 60\ \mathrm{k}\Omega,\\
\lambda_2 &= \frac{0.1\ \mu\mathrm{m/V}}{3\ \mu\mathrm{m}} = 0.0333\ \mathrm{V^{-1}}, & r_{O2} &= \frac{1}{(0.0333\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 30\ \mathrm{k}\Omega,
\end{aligned}
$$

$$
\begin{aligned}
r_{O1}\|r_{O2} &= \frac{60\times30}{60 + 30}\ \mathrm{k}\Omega = 20\ \mathrm{k}\Omega,\\
g_{m1} &= \frac{2I_D}{V_{ov1}} = \frac{2\,(1\ \mathrm{mA})}{0.4\ \mathrm{V}} = 5\ \mathrm{mS},\\
|A_v| &= (5\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 100.\ \checkmark
\end{aligned}
$$

摆幅： $V_{out}$ 的范围从 $V_{ov1} = 0.4$ V 到 $V_{DD} - |V_{ov2}| = 2.6$ V，跨度为 2.2 V。✓

偏置电压： $V_{in} = V_{TH1} + V_{ov1} = 0.7 + 0.4 = 1.1$ V，$V_b = V_{DD} - |V_{TH2}| - |V_{ov2}| = 3 - 0.8 - 0.4 = 1.8$ V。为使摆幅对称，输出的静态电平应在 $(0.4 + 2.6)/2 = 1.5$ V 附近；实际中这一电平由反馈来设定，因为增益为 100 的放大级对微小的电流失配（mismatch）非常敏感。

### 第 6 步 — 其他可行的设计

在 $L_1 = L_2 = L = (7.5\ \mu\mathrm{m/V})V_{ov1}$ 的条件下，对 0.8 V 的预算作其他分配，可得：

| $V_{ov1}$ | $\lvert V_{ov2}\rvert$ | $L$ | $(W/L)_1$, $W_1$ | $(W/L)_2$, $W_2$ | $r_{O1}\parallel r_{O2}$ | $g_{m1}$ |
|---|---|---|---|---|---|---|
| 0.4 V | 0.4 V | 3 μm | 93.3, 280 μm | 325.5, 977 μm | 20 kΩ | 5 mS |
| 0.3 V | 0.5 V | 2.25 μm | 166, 373 μm | 208, 469 μm | 15 kΩ | 6.7 mS |
| 0.2 V | 0.6 V | 1.5 μm | 373, 560 μm | 145, 217 μm | 10 kΩ | 10 mS |

这三种设计都给出 $|A_v| = 100$ 和 2.2 V 的摆幅。较小的 $V_{ov1}$ 允许使用更短的沟道（$g_{m1}$ 更大），代价是 $M_1$ 更宽；而 PMOS 的过驱动电压更大，尺寸反而变小。沟长不相等也是可以的，只要满足 $(\lambda_1 + \lambda_2)V_{ov1} = 0.02$，即 $V_{ov1}\,(0.05\ \mu\mathrm{m}/L_1 + 0.1\ \mu\mathrm{m}/L_2) = 0.02\ \mathrm{V}$。

### 结果

设计由两个约束确定：

- 摆幅： $V_{DD} - V_{ov1} - |V_{ov2}| = 2.2$ V，因此 $V_{ov1} + |V_{ov2}| = 0.8$ V。
- 增益： $g_{m1}(r_{O1}\|r_{O2}) = \dfrac{2}{(\lambda_1 + \lambda_2)V_{ov1}} = 100$，其中 $\lambda_1 = (0.05\ \mu\mathrm{m/V})/L_1$，$\lambda_2 = (0.1\ \mu\mathrm{m/V})/L_2$。若 $L_1 = L_2 = L$：$L = (7.5\ \mu\mathrm{m/V})\,V_{ov1}$。

一个完整的设计（两管的过驱动电压均为 0.4 V，沟长相等）：

$$M_1:\ W_1/L_1 \approx 280\ \mu\mathrm{m}/3\ \mu\mathrm{m}\ (93.3), \qquad M_2:\ W_2/L_2 \approx 977\ \mu\mathrm{m}/3\ \mu\mathrm{m}\ (325.5),$$

由此得到 $g_{m1} = 5$ mS，$r_{O1} = 60\ \mathrm{k}\Omega$，$r_{O2} = 30\ \mathrm{k}\Omega$，增益为 $5\ \mathrm{mS}\times20\ \mathrm{k}\Omega = 100$。另一种可行的选择是 $V_{ov1} = 0.2$ V，$|V_{ov2}| = 0.6$ V，$L = 1.5$ μm，$W_1 \approx 560$ μm，$W_2 \approx 217$ μm。

**常见错误：** 仍沿用 $L = 0.5$ μm 时的 $\lambda$ 值：这时 $\lambda_1 + \lambda_2 = 0.3\ \mathrm{V^{-1}}$，增益远低于 100（$V_{ov1} = 0.4$ V 时为 16.7）。在过驱动电压固定时，应按上式选择沟长，再由静态电流确定宽度。

**常见错误：** 把阈值电压计入摆幅预算，例如把最低输出电压取为 $V_{TH}$ 或 $V_{in}$。限制条件 $V_{out} \ge V_{ov1}$ 和 $V_{DD} - V_{out} \ge |V_{ov2}|$ 中只含过驱动电压。

**常见错误：** 用 $\mu_nC_{ox}$ 确定 PMOS 的尺寸。由于 $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$，在相同的电流和过驱动电压下，$M_2$ 所需的 $W/L$ 约为 $M_1$ 的 3.5 倍。
