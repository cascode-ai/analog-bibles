# 详细步骤 - R084

**思路。** 两种效应同时存在：$M_1$ 进入线性区 50 mV，因此服从线性区电流公式，并具有沟道电导 $g_{ds1}$；负载管 $M_2$ 的源极接 $V_{out}$、衬底接地，因此其阈值取决于 $V_{out}$，并且具有体跨导（body transconductance）$g_{mb2}$。先用迭代法求解直流电流方程，再对小信号模型（small-signal model）应用 KCL，得到 $A_v = -g_{m1}/(g_{m2} + g_{mb2} + g_{ds1})$。

### 第 1 步 — 参数、阈值与工作区

$$\beta_1 = (134\ \mu\mathrm{A/V^2})(50/0.5) = 13.4\ \mathrm{mA/V^2}, \qquad \beta_2 = (134\ \mu\mathrm{A/V^2})(10/0.5) = 2.68\ \mathrm{mA/V^2}, \qquad \frac{\beta_1}{\beta_2} = 5 .$$

$M_1$ 的 $V_{SB1} = 0$，因此 $V_{TH1} = 0.7$ V。$M_2$ 的 $V_{SB2} = V_{out}$，因此

$$V_{TH2} = 0.7 + 0.45\left(\sqrt{0.9 + V_{out}} - \sqrt{0.9}\right)\ \mathrm{V} = 0.7\ \mathrm{V} + d, \qquad d \equiv 0.45\left(\sqrt{0.9 + V_{out}} - 0.9487\right),$$

其中 $d$ 为 $M_2$ 阈值的增量。

$M_2$ 为二极管连接（diode-connected），$V_{DS2} = V_{GS2}$，因此它处于饱和区（saturation region）。$M_1$ 进入线性区 50 mV：令 $V_{ov1} = V_{in} - 0.7$ V，则

$$V_{DS1} = V_{out} = V_{ov1} - 0.05\ \mathrm{V} \quad\Longleftrightarrow\quad V_{in} = V_{out} + 0.75\ \mathrm{V}.$$

### 第 2 步 — 电流方程

记 $y = V_{out}$（以伏特为单位），则 $V_{ov1} = y + 0.05$。对 $M_1$（线性区）：

$$
\begin{aligned}
I_{D1} &= \beta_1\left[V_{ov1}V_{DS1} - \tfrac12V_{DS1}^2\right] = \beta_1\left[(y + 0.05)\,y - \tfrac12y^2\right]\\
&= \beta_1\left[\tfrac12y^2 + 0.05\,y\right] = \frac{\beta_1}{2}\,y\,(y + 0.1).
\end{aligned}
$$

对 $M_2$（饱和区）：

$$I_{D2} = \frac{\beta_2}{2}(V_{DD} - V_{out} - V_{TH2})^2 = \frac{\beta_2}{2}(3 - y - 0.7 - d)^2 = \frac{\beta_2}{2}(c - y)^2, \qquad c \equiv 2.3 - d .$$

令二者相等并除以 $\beta_2/2$，利用 $\beta_1/\beta_2 = 5$：

$$
\begin{aligned}
5\,y\,(y + 0.1) &= (c - y)^2\\
5y^2 + 0.5y &= c^2 - 2cy + y^2\\
4y^2 + (0.5 + 2c)\,y - c^2 &= 0 .
\end{aligned}
$$

对给定的 $d$（从而给定 $c$），正根为

$$y = \frac{-(0.5 + 2c) + \sqrt{(0.5 + 2c)^2 + 16c^2}}{8} ,$$

但 $d$ 本身又取决于 $y$，因此需要迭代。

### 第 3 步 — 在 $V_{out}$ 与 $V_{TH2}$ 之间迭代

从无体效应（$d = 0$）开始，再用新的 $V_{out}$ 更新 $d$：

| $k$ | $d$ (V) | $c = 2.3 - d$ | $\sqrt{(0.5+2c)^2 + 16c^2}$ | $y = V_{out}$ (V) |
|---|---|---|---|---|
| 0 | 0 | 2.3000 | $\sqrt{110.65} = 10.519$ | 0.6774 |
| 1 | $0.45(\sqrt{1.5774} - 0.9487) = 0.1383$ | 2.1617 | $\sqrt{98.04} = 9.901$ | 0.6347 |
| 2 | $0.45(\sqrt{1.5347} - 0.9487) = 0.1306$ | 2.1694 | $\sqrt{98.72} = 9.936$ | 0.6371 |
| 3 | $0.45(\sqrt{1.5371} - 0.9487) = 0.1310$ | 2.1690 | $\sqrt{98.68} = 9.934$ | 0.6370 |

（第 0 行是无体效应时的解，$V_{out} = 0.677$ V。）迭代已经收敛：

$$
\begin{aligned}
V_{out} &= 0.637\ \mathrm{V},\\
V_{ov1} &= 0.637 + 0.05 = 0.687\ \mathrm{V},\\
V_{in} &= 0.7 + 0.687 = 1.387\ \mathrm{V},\\
V_{TH2} &= 0.7 + 0.131 = 0.831\ \mathrm{V},\\
V_{ov2} &= 3 - 0.637 - 0.831 = 1.532\ \mathrm{V}.
\end{aligned}
$$

**验证电流：**

$$
\begin{aligned}
I_{D2} &= \tfrac12(2.68\ \mathrm{mA/V^2})(1.532\ \mathrm{V})^2 = 1.34\times2.347\ \mathrm{mA} = 3.15\ \mathrm{mA},\\
I_{D1} &= \tfrac12(13.4\ \mathrm{mA/V^2})(0.637)(0.737)\ \mathrm{V^2} = 6.7\times0.4695\ \mathrm{mA} = 3.15\ \mathrm{mA}.
\end{aligned}
$$

与无体效应的情形（$V_{in} = 1.427$ V）相比，更高的 $V_{TH2}$ 把输出拉低，因此 $M_1$ 在更低的输入电压下就达到这一线性区深度。

### 第 4 步 — 小信号参数

**$M_1$（线性区）。** 对 $I_{D1} = \beta_1[(V_{GS1} - V_{TH1})V_{DS1} - \frac12V_{DS1}^2]$ 求导：

$$
\begin{aligned}
g_{m1} &= \frac{\partial I_{D1}}{\partial V_{GS1}} = \beta_1V_{DS1} = (13.4\ \mathrm{mA/V^2})(0.637\ \mathrm{V}) = 8.54\ \mathrm{mS},\\
g_{ds1} &= \frac{\partial I_{D1}}{\partial V_{DS1}} = \beta_1(V_{ov1} - V_{DS1}) = (13.4\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.67\ \mathrm{mS}.
\end{aligned}
$$

**$M_2$（饱和区）**，其中 $\eta = \partial V_{TH2}/\partial V_{SB2}$，$g_{mb2} = \eta g_{m2}$：

$$
\begin{aligned}
g_{m2} &= \beta_2V_{ov2} = (2.68\ \mathrm{mA/V^2})(1.532\ \mathrm{V}) = 4.11\ \mathrm{mS},\\
\eta &= \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB2}}} = \frac{0.45}{2\sqrt{0.9 + 0.637}} = \frac{0.45}{2\times1.2397} = 0.181,\\
g_{mb2} &= 0.181\times4.11\ \mathrm{mS} = 0.745\ \mathrm{mS}.
\end{aligned}
$$

### 第 5 步 — 小信号模型与增益

只有一个节点 $out$；$V_{DD}$ 和地都是交流地，且 $\lambda = 0$：

- **$M_1$：** 从 $out$ 流向地的电流源（current source）$g_{m1}v_{in}$，与其线性区沟道电阻 $r_{ds1} = 1/g_{ds1} = 1.49\ \mathrm{k}\Omega$ 并联；没有体效应项（$v_{bs1} = 0$）。
- **$M_2$：** 栅极和漏极接交流地，源极接 $out$，衬底接地，因此 $v_{gs2} = v_{bs2} = -v_{out}$；它向 $out$ 注入电流 $g_{m2}v_{gs2} + g_{mb2}v_{bs2} = -(g_{m2} + g_{mb2})v_{out}$。

<!-- diagram: diagram-01.cir -->

对 $out$ 节点应用 KCL：

$$
\begin{aligned}
-(g_{m2} + g_{mb2})\,v_{out} &= g_{m1}v_{in} + g_{ds1}v_{out}\\
-(g_{m2} + g_{mb2} + g_{ds1})\,v_{out} &= g_{m1}v_{in}\\
A_v &= -\frac{g_{m1}}{g_{m2} + g_{mb2} + g_{ds1}} .
\end{aligned}
$$

**数值计算：**

$$A_v = -\frac{8.54\ \mathrm{mS}}{4.11\ \mathrm{mS} + 0.745\ \mathrm{mS} + 0.67\ \mathrm{mS}} = -\frac{8.54}{5.52} = -1.55 .$$

若忽略 $g_{ds1}$，得到 $-8.54/4.85 = -1.76$；若忽略 $g_{mb2}$，得到 $-8.54/4.78 = -1.79$。这两个附加电导共同作用，使增益从理想值 $-\sqrt5 = -2.24$ 降到 $-1.55$。

### 结果

$$V_{in} \approx 1.387\ \mathrm{V} \qquad (V_{out} \approx 0.637\ \mathrm{V},\ V_{TH2} \approx 0.831\ \mathrm{V},\ I_D \approx 3.15\ \mathrm{mA}),$$

$$A_v = -\frac{g_{m1}}{g_{m2} + g_{mb2} + g_{ds1}} = -\frac{8.54\ \mathrm{mS}}{(4.11 + 0.745 + 0.67)\ \mathrm{mS}} \approx -1.55 ,$$

其中处于线性区的 $M_1$ 有 $g_{m1} = \beta_1V_{DS1}$ 和 $g_{ds1} = \beta_1(0.05\ \mathrm{V})$，$M_2$ 的 $\eta = 0.181$。

**常见错误。** 把 $M_1$ 当作处于饱和区，从而得到 $g_{m1} = \beta_1V_{ov1}$、没有 $g_{ds1}$，增益接近 $-1.9$。在线性区，$g_{m1} = \beta_1V_{DS1}$ 更小，而且即使 $\lambda = 0$，也会出现沟道电导 $\beta_1(V_{ov1} - V_{DS1})$。

**常见错误。** 忽略体效应（得到 1.427 V 和 $-1.81$），或者只在一处计入体效应。体效应既在直流解中使 $V_{TH2}$ 升高，**又**在负载电导中增加了 $g_{mb2}$。

**常见错误。** 对 $M_1$ 考虑体效应（实际上 $V_{SB1} = 0$），或认为 $M_2$ 处于线性区（它是二极管连接的，$V_{DS2} = V_{GS2}$ 使它保持饱和）。
