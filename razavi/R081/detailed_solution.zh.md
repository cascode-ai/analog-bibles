# 详细步骤 - R081

**思路。** $M_1$ 是一个共源（common-source，CS）级，以二极管连接（diode-connected）的 $M_2$ 为负载。对 $M_1$ 施加线性区边缘条件，令两个晶体管的平方律（square law）电流相等，解出 $V_{in}$，再由小信号模型（small-signal model）求出增益 $A_v = -g_{m1}/g_{m2}$。

### 第 1 步 — 器件参数与边缘条件

$M_2$ 为二极管连接，其源极接输出端，因此 $V_{GS2} = V_{DD} - V_{out}$，且两个晶体管流过相同的电流。由于 $\lambda = \gamma = 0$，二者都有 $V_{TH} = 0.7$ V；令 $\beta = \mu_nC_{ox}(W/L)$，则：

$$
\begin{aligned}
\beta_1 &= (134\ \mu\mathrm{A/V^2})\cdot\frac{50}{0.5} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},\\
\beta_2 &= (134\ \mu\mathrm{A/V^2})\cdot\frac{10}{0.5} = (134\ \mu\mathrm{A/V^2})(20) = 2.68\ \mathrm{mA/V^2}.
\end{aligned}
$$

$V_{DS2} = V_{GS2} > V_{GS2} - V_{TH}$，因此 $M_2$ 只要导通就总处于饱和区。$M_1$ 处于线性区边缘的条件是

$$V_{DS1} = V_{GS1} - V_{TH} \quad\Longrightarrow\quad V_{out} = V_{in} - V_{TH} = V_{in} - 0.7\ \mathrm{V}.$$

随着 $V_{in}$ 升高，$V_{out}$ 下降，因此 $M_1$ 起初处于饱和区，一旦 $V_{out}$ 降到 $V_{in} - V_{TH}$ 以下就进入线性区。

### 第 2 步 — 漏极电流相等

在边缘处，$M_1$ 仍服从饱和区方程，因此

$$\frac12\beta_1(V_{in} - V_{TH})^2 = \frac12\beta_2(V_{DD} - V_{out} - V_{TH})^2 .$$

两个过驱动电压（overdrive voltage）都为正，因此对两边取正平方根：

$$\sqrt{\beta_1}\,(V_{in} - V_{TH}) = \sqrt{\beta_2}\,(V_{DD} - V_{out} - V_{TH}) .$$

利用

$$\sqrt{\frac{\beta_1}{\beta_2}} = \sqrt{\frac{100}{20}} = \sqrt5 = 2.236 ,$$

上式变为

$$\sqrt5\,(V_{in} - 0.7\ \mathrm{V}) = 3\ \mathrm{V} - V_{out} - 0.7\ \mathrm{V} = 2.3\ \mathrm{V} - V_{out} .$$

### 第 3 步 — 求边缘处的输入电压

令 $V_{ov1} = V_{in} - V_{TH}$。边缘条件（第 1 步）给出 $V_{out} = V_{ov1}$；代入电流方程：

$$
\begin{aligned}
\sqrt5\,V_{ov1} &= 2.3\ \mathrm{V} - V_{ov1}\\
(1 + \sqrt5)\,V_{ov1} &= 2.3\ \mathrm{V}\\
V_{ov1} &= \frac{2.3\ \mathrm{V}}{1 + 2.236} = \frac{2.3\ \mathrm{V}}{3.236} = 0.711\ \mathrm{V}.
\end{aligned}
$$

于是

$$
\begin{aligned}
V_{in} &= V_{TH} + V_{ov1} = 0.7\ \mathrm{V} + 0.711\ \mathrm{V} = 1.411\ \mathrm{V},\\
V_{out} &= V_{ov1} = 0.711\ \mathrm{V}.
\end{aligned}
$$

**偏置电流与验证。** $V_{ov2} = V_{DD} - V_{out} - V_{TH} = 3 - 0.711 - 0.7 = 1.589\ \mathrm{V}$，且

$$
\begin{aligned}
I_{D1} &= \tfrac12(13.4\ \mathrm{mA/V^2})(0.711\ \mathrm{V})^2 = 6.7\times0.5052\ \mathrm{mA} = 3.38\ \mathrm{mA},\\
I_{D2} &= \tfrac12(2.68\ \mathrm{mA/V^2})(1.589\ \mathrm{V})^2 = 1.34\times2.526\ \mathrm{mA} = 3.38\ \mathrm{mA}.
\end{aligned}
$$

两者一致，且 $V_{ov2} > 0$，因此 $M_2$ 导通（并处于饱和区）。

### 第 4 步 — 小信号模型

由于 $\lambda = \gamma = 0$，每个晶体管都只是一个从漏极流向源极的电流源（current source）$g_mv_{gs}$，而 $V_{DD}$ 为交流地：

- **$M_1$：** $g_{m1}v_{gs1} = g_{m1}v_{in}$，从 $out$ 流向地。
- **$M_2$：** 栅极和漏极接交流地，源极接 $out$，因此 $v_{gs2} = -v_{out}$，它从交流地向 $out$ 注入电流 $g_{m2}v_{gs2} = -g_{m2}v_{out}$。

<!-- diagram: diagram-01.cir -->

对输出节点应用基尔霍夫电流定律（KCL）：

$$
\begin{aligned}
-g_{m2}v_{out} &= g_{m1}v_{in}\\
\frac{v_{out}}{v_{in}} &= -\frac{g_{m1}}{g_{m2}} .
\end{aligned}
$$

也就是说，二极管连接的 $M_2$ 相当于一个接到交流地的电阻 $1/g_{m2}$。

在边缘处仍可使用饱和区的 $g_{m1}$：在线性区，$g_{m1} = \beta_1V_{DS1}$，沟道电导为 $\beta_1(V_{ov1} - V_{DS1})$；当 $V_{DS1} = V_{ov1}$ 时，二者分别等于 $\beta_1V_{ov1}$ 和零，正是饱和区的值。

### 第 5 步 — 增益的数值

$$
\begin{aligned}
g_{m1} &= \beta_1V_{ov1} = (13.4\ \mathrm{mA/V^2})(0.711\ \mathrm{V}) = 9.52\ \mathrm{mS},\\
g_{m2} &= \beta_2V_{ov2} = (2.68\ \mathrm{mA/V^2})(1.589\ \mathrm{V}) = 4.26\ \mathrm{mS},\\
A_v &= -\frac{9.52\ \mathrm{mS}}{4.26\ \mathrm{mS}} = -2.24 .
\end{aligned}
$$

等价地，利用 $g_m = \sqrt{2\beta I_D}$，并注意两个器件中的 $I_D$ 相同，

$$A_v = -\frac{\sqrt{2\beta_1I_D}}{\sqrt{2\beta_2I_D}} = -\sqrt{\frac{\beta_1}{\beta_2}} = -\sqrt{\frac{(W/L)_1}{(W/L)_2}} = -\sqrt5 = -2.236 ,$$

只要两个器件都处于饱和区，这一结果就只取决于尺寸之比，而与偏置点无关。

### 结果

$M_1$ 在下述输入电压处到达线性区边缘：

$$V_{in} = V_{TH} + \frac{V_{DD} - V_{TH}}{1 + \sqrt5} \approx 1.41\ \mathrm{V}$$

（此时 $V_{out} \approx 0.711$ V，$I_D \approx 3.38$ mA）。此时的小信号增益为

$$A_v = -\frac{g_{m1}}{g_{m2}} = -\sqrt{\frac{(W/L)_1}{(W/L)_2}} = -\sqrt5 \approx -2.24 .$$

**常见错误。** 把增益写成 $-(W/L)_1/(W/L)_2 = -5$。在给定电流下，$g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ 与 $W/L$ 的**平方根**成正比，而两个器件流过同一电流，因此增益为 $-\sqrt5$。

**常见错误。** 使用错误的边缘条件，如 $V_{out} = V_{in}$ 或 $V_{DS1} = V_{TH}$。边界应为 $V_{DS1} = V_{GS1} - V_{TH}$，即 $V_{out} = V_{in} - 0.7$ V。

**常见错误。** 把 $V_{GS2}$ 当作固定值（例如 $V_{GS2} = V_{DD}$）。它的源极就是输出端，因此 $V_{GS2} = V_{DD} - V_{out}$，这也正是 $M_2$ 表现为电阻 $1/g_{m2}$ 的原因。
