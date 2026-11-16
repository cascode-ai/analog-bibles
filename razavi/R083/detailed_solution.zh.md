# 详细步骤 - R083

**思路。** 电路和线性区边缘条件都与无体效应时相同，但负载管 $M_2$ 的源极接 $V_{out}$、衬底接地，因此其阈值取决于 $V_{out}$。用 $V_{TH2}(V_{out})$ 令两管的饱和电流相等，迭代求解；再在小信号模型（small-signal model）中计入 $g_{mb2}$，得到 $A_v = -g_{m1}/(g_{m2} + g_{mb2})$。

### 第 1 步 — 体效应、器件参数与边缘条件

$M_1$ 的源极和衬底都接地，因此 $V_{TH1} = V_{TH0} = 0.7$ V。二极管连接（diode-connected）的负载管 $M_2$ 源极接 $V_{out}$、衬底接地，因此 $V_{SB2} = V_{out} > 0$，且

$$V_{TH2} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{out}} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_{out}} - 0.9487\right)\ \mathrm{V}.$$

令 $\beta = \mu_nC_{ox}(W/L)$：

$$\beta_1 = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}, \qquad \beta_2 = (134\ \mu\mathrm{A/V^2})(20) = 2.68\ \mathrm{mA/V^2}.$$

由于 $V_{DS2} = V_{GS2} = V_{DD} - V_{out}$，$M_2$ 只要导通就处于饱和区（saturation region）。当 $V_{DS1} = V_{GS1} - V_{TH1}$ 时，$M_1$ 处于线性区边缘；令 $V_{ov1} = V_{in} - 0.7$ V，即

$$V_{out} = V_{ov1} .$$

### 第 2 步 — 阈值随 $V_{out}$ 变化时的电流方程

两个器件流过相同的电流：

$$\frac12\beta_1V_{ov1}^2 = \frac12\beta_2\,(V_{DD} - V_{out} - V_{TH2})^2 .$$

取正平方根，并利用 $\sqrt{\beta_1/\beta_2} = \sqrt{100/20} = \sqrt5 = 2.236$：

$$\sqrt5\,V_{ov1} = V_{DD} - V_{out} - V_{TH2} .$$

代入 $V_{out} = V_{ov1}$ 和体效应公式，并合并含 $V_{ov1}$ 的项：

$$\sqrt5\,V_{ov1} = 3 - V_{ov1} - 0.7 - 0.45\left(\sqrt{0.9 + V_{ov1}} - 0.9487\right),$$

$$(1 + \sqrt5)\,V_{ov1} = 2.3 - 0.45\left(\sqrt{0.9 + V_{ov1}} - 0.9487\right).$$

未知量既以线性形式出现，又出现在根号下，因此采用迭代法求解。

### 第 3 步 — 用不动点迭代求解

利用 $1 + \sqrt5 = 3.236$：

$$V_{ov1}^{(k+1)} = \frac{2.3 - 0.45\left(\sqrt{0.9 + V_{ov1}^{(k)}} - 0.9487\right)}{3.236} .$$

从无体效应时的解 $V_{ov1}^{(0)} = 2.3/3.236 = 0.7107$ V 开始：

| $k$ | $V_{ov1}^{(k)}$ (V) | $\sqrt{0.9 + V_{ov1}^{(k)}}$ | $V_{TH2} - 0.7$ (V) | $V_{ov1}^{(k+1)}$ (V) |
|---|---|---|---|---|
| 0 | 0.7107 | 1.2691 | 0.1442 | 0.6662 |
| 1 | 0.6662 | 1.2515 | 0.1363 | 0.6686 |
| 2 | 0.6686 | 1.2525 | 0.1367 | 0.6685 |
| 3 | 0.6685 | 1.2524 | 0.1367 | 0.6685 |

因此

$$
\begin{aligned}
V_{ov1} &= 0.6685\ \mathrm{V},\\
V_{in} &= V_{TH1} + V_{ov1} = 0.7 + 0.6685 = 1.369\ \mathrm{V},\\
V_{out} &= V_{ov1} = 0.669\ \mathrm{V},\\
V_{TH2} &= 0.7 + 0.1367 = 0.837\ \mathrm{V}.
\end{aligned}
$$

**验证。** $V_{ov2} = 3 - 0.6685 - 0.8367 = 1.4948$ V $= \sqrt5\times0.6685$，符合要求，且

$$
\begin{aligned}
I_{D1} &= \tfrac12(13.4\ \mathrm{mA/V^2})(0.6685\ \mathrm{V})^2 = 6.7\times0.4469\ \mathrm{mA} = 2.99\ \mathrm{mA},\\
I_{D2} &= \tfrac12(2.68\ \mathrm{mA/V^2})(1.4948\ \mathrm{V})^2 = 1.34\times2.2345\ \mathrm{mA} = 2.99\ \mathrm{mA}.
\end{aligned}
$$

与无体效应时（1.411 V）相比，边缘来得更早：体效应使 $V_{TH2}$ 升高约 0.14 V，因此 $V_{out} = V_{DD} - V_{TH2} - V_{ov2}$ 更低，会在更小的输入电压处与直线 $V_{out} = V_{in} - V_{TH}$ 相交。

### 第 4 步 — 计入 $g_{mb2}$ 的小信号模型

由于 $\lambda = 0$，没有 $r_O$；$V_{DD}$ 和地都是交流地，模型中只有一个节点 $out$：

- **$M_1$：** 一个从 $out$ 流向地的电流源（current source）$g_{m1}v_{in}$；$v_{bs1} = 0$，因此没有 $g_{mb1}$ 项。
- **$M_2$：** 栅极和漏极接交流地，源极接 $out$，衬底接地，因此 $v_{gs2} = v_{bs2} = -v_{out}$，且
$$i_{d2} = g_{m2}v_{gs2} + g_{mb2}v_{bs2} = -(g_{m2} + g_{mb2})\,v_{out} .$$

<!-- diagram: diagram-01.cir -->

对 $out$ 节点应用 KCL：

$$
\begin{aligned}
-(g_{m2} + g_{mb2})\,v_{out} &= g_{m1}v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= -\frac{g_{m1}}{g_{m2} + g_{mb2}} .
\end{aligned}
$$

此时负载相当于一个更小的电阻 $1/(g_{m2} + g_{mb2})$：$v_{out}$ 升高时，$V_{SB2}$ 也随之升高，进而 $V_{TH2}$ 升高，使 $M_2$ 的电流进一步减小，因此增益下降。

### 第 5 步 — 增益的数值

令 $\eta = g_{mb}/g_m = \partial V_{TH}/\partial V_{SB}$：

$$\eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB2}}} = \frac{0.45}{2\sqrt{0.9 + 0.6685}} = \frac{0.45}{2\times1.2524} = 0.180 ,$$

$$
\begin{aligned}
g_{m1} &= (13.4\ \mathrm{mA/V^2})(0.6685\ \mathrm{V}) = 8.96\ \mathrm{mS},\\
g_{m2} &= (2.68\ \mathrm{mA/V^2})(1.4948\ \mathrm{V}) = 4.01\ \mathrm{mS},\\
g_{mb2} &= \eta\,g_{m2} = 0.180\times4.01\ \mathrm{mS} = 0.72\ \mathrm{mS},
\end{aligned}
$$

$$A_v = -\frac{8.96\ \mathrm{mS}}{4.01\ \mathrm{mS} + 0.72\ \mathrm{mS}} = -\frac{8.96}{4.73} = -1.90 .$$

**简洁形式。** 由于电流相等，$g_{m1}/g_{m2} = \sqrt{\beta_1/\beta_2} = \sqrt5$，因此

$$A_v = -\frac{g_{m1}}{g_{m2}(1 + \eta)} = -\frac{\sqrt5}{1 + \eta} = -\frac{2.236}{1.180} = -1.90 .$$

体效应使增益按因子 $1 + \eta$ 减小，从 $-2.24$ 降到 $-1.90$。

### 结果

$$V_{in} \approx 1.37\ \mathrm{V} \qquad (V_{out} \approx 0.669\ \mathrm{V},\ V_{TH2} \approx 0.837\ \mathrm{V},\ I_D \approx 2.99\ \mathrm{mA}),$$

$$A_v = -\frac{g_{m1}}{g_{m2} + g_{mb2}} = -\frac{\sqrt5}{1 + \eta} \approx -1.90, \qquad \eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{out}}} = 0.180 .$$

**常见错误。** 只在一处计入体效应：计算偏置点时用了 $V_{TH2}(V_{out})$，增益却仍取 $-\sqrt5$，或者反过来。体效应既改变工作点（通过 $V_{TH2}$），也改变负载（通过 $g_{mb2}$）。

**常见错误。** 对 $M_1$ 考虑体效应。它的源极和衬底都接地，因此 $V_{SB1} = 0$，$v_{bs1} = 0$。

**常见错误。** 把增益乘以 $(1 + \eta)$，而不是除以它。$g_{mb2}$ 是在**分母**中与 $g_{m2}$ 相加的。
