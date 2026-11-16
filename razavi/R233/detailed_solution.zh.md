# 详细步骤 - R233

**思路。** $M_1$ 的栅极电压 $V_{in}$ 固定，因此只要 $V_{DS}$ 足够大，它就相当于一个电流源（current source）。它的电流流过二极管连接的 $M_2$，$M_3$ 再把它镜像到 $R_L$ 中。随着 $V_{DD}$ 升高，可分为三个区域：无电流（$M_2$ 截止）、电流上升（$M_2$ 导通，$M_1$ 处于线性区）、电流恒定（$M_1$ 饱和）。$V_{out}$ 等于 $R_L$ 乘以镜像电流。

### 第 1 步 — 支路方程

取 $V_{THN} = 0.7$ V，$|V_{THP}| = 0.8$ V；$M_1$ 的过驱动电压固定为 $V_{ov1} = V_{in} - 0.7$ V。把 $M_1$ 和 $M_2$ 的漏极节点记为 A，则 $V_A = V_{DS1}$。从 $V_{DD}$ 经 $M_2$、$M_1$ 到地列基尔霍夫电压定律（KVL）方程，并对 A 点列基尔霍夫电流定律（KCL）方程，得

$$V_{DD} = |V_{GS2}| + V_{DS1}, \qquad I_{D1} = I_{D2} .$$

$M_3$ 的 $V_{SG}$ 与 $M_2$ 相同；若它处于饱和（在第 6 步中检验），则

$$I_{D3} = \frac{(W/L)_3}{(W/L)_2}I_{D2}, \qquad V_{out} = R_LI_{D3} = R_L\frac{(W/L)_3}{(W/L)_2}I_{D1} .$$

### 第 2 步 — 区域 I：$0 \le V_{DD} \le 0.8$ V，$V_{out} = 0$

节点 A 的电压不可能低于地，因此 $V_{DS1} \ge 0$，且

$$|V_{GS2}| = V_{DD} - V_{DS1} \le V_{DD} \le 0.8\ \mathrm{V} = |V_{THP}| .$$

$M_2$ 截止，因此 $I_{D2} = I_{D1} = 0$；$M_1$ 有沟道但没有电流，因此 $V_{DS1} = 0$。$M_3$ 的 $V_{SG} = V_{DD} < 0.8$ V 与之相同，也截止：

$$V_{out} = 0 \quad\text{for } V_{DD} \le 0.8\ \mathrm{V} .$$

### 第 3 步 — 区域 II：$M_2$ 导通，$M_1$ 处于线性区

刚超过 0.8 V 时，$M_2$ 导通，而 $M_1$ 的过驱动电压固定、$V_{DS1}$ 却很小，因此处于**线性区**：

$$
\begin{aligned}
I_{D2} &= \tfrac12\mu_pC_{ox}(W/L)_2\left(V_{DD} - V_{DS1} - 0.8\right)^2 &&(M_2,\ \text{saturated as a diode}),\\
I_{D1} &= \mu_nC_{ox}(W/L)_1\left(V_{ov1}V_{DS1} - \tfrac12V_{DS1}^2\right) &&(M_1,\ \text{triode}),
\end{aligned}
$$

且 $I_{D1} = I_{D2}$。

**在起始点附近**，处于深线性区（deep triode region）的 $M_1$ 相当于电阻

$$R_{on1} = \frac{1}{\mu_nC_{ox}(W/L)_1V_{ov1}}$$

与二极管连接的 $M_2$ 串联：

<!-- diagram: diagram-01.cir -->

电流较小时，$R_{on1}$ 上的压降可以忽略，因此电流由 $M_2$ 单独决定：

$$V_{out} \approx R_L\frac{(W/L)_3}{(W/L)_2}\cdot\tfrac12\mu_pC_{ox}(W/L)_2(V_{DD} - 0.8)^2 = \tfrac12R_L\,\mu_pC_{ox}(W/L)_3(V_{DD} - 0.8)^2 ,$$

它以二次方的方式离开零点，起始斜率为零。

**斜率。** 对 KVL 方程求微分，$dV_{DD} = d|V_{GS2}| + dV_{DS1}$，其中 $dI = g_{m2}\,d|V_{GS2}|$，$dI = g_{ds1}\,dV_{DS1}$，$g_{ds1} = \mu_nC_{ox}(W/L)_1(V_{ov1} - V_{DS1})$：

$$\frac{dI_{D1}}{dV_{DD}} = \frac{1}{1/g_{m2} + 1/g_{ds1}} .$$

在起始点 $g_{m2} = 0$，而当 $V_{DS1} \to V_{ov1}$ 时，$g_{ds1} \to 0$：斜率从零开始，先增大，再回落到零，因此当 $M_1$ 接近饱和时，曲线**弯曲变平**。

### 第 4 步 — 转折点：$M_1$ 进入饱和

当 $V_{DS1} = V_{ov1} = V_{in} - 0.7$ V 时 $M_1$ 进入饱和，电流为

$$I_{D1,sat} = \tfrac12\mu_nC_{ox}\left(\frac{W}{L}\right)_1(V_{in} - 0.7)^2,$$

$M_2$ 流过这一电流时，$|V_{GS2}| = 0.8 + V_{ov2}$，$V_{ov2} = \sqrt{2I_{D1,sat}/[\mu_pC_{ox}(W/L)_2]}$。由 KVL 方程，这发生在

$$V_{DD,1} = |V_{GS2}| + (V_{in} - 0.7) = 0.8 + \sqrt{\frac{2I_{D1,sat}}{\mu_pC_{ox}(W/L)_2}} + (V_{in} - 0.7) .$$

### 第 5 步 — 区域 III：平台区

当 $V_{DD} \ge V_{DD,1}$ 时，$M_1$ 饱和，且在 $\lambda = 0$ 时其电流不再依赖于 $V_{DD}$；多出来的电源电压只会抬高 $V_{DS1}$。因此

$$V_{out,max} = R_L\frac{(W/L)_3}{(W/L)_2}\cdot\tfrac12\mu_nC_{ox}\left(\frac{W}{L}\right)_1(V_{in} - 0.7)^2,$$

一直到 $V_{DD} = 3$ V 都保持恒定（若 $\lambda > 0$，则略有上升）：$M_1$ 把 $V_{in}$ 转换为电流，电流镜（current mirror）再把按比例缩放的副本送到 $R_L$。

### 第 6 步 — $M_3$ 是否饱和？

由 $V_{SD3} = V_{DD} - V_{out}$ 和 $V_{SG3} = |V_{GS2}| = 0.8 + V_{ov2}$，条件 $V_{SD3} \ge V_{SG3} - 0.8$ V 意味着

$$V_{DD} - V_{out} \ge V_{ov2} \quad\Longleftrightarrow\quad V_{out} \le V_{DD} - V_{ov2} .$$

对于适中的 $R_L$，这一条件处处成立。如果 $R_L$ 太大，以至于 $V_{out,max}$ 会违反这一条件，$M_3$ 就会进入线性区，$V_{out}$ 略低于 $V_{DD}$ 并跟随其变化，直到 $V_{DD} \ge V_{out,max} + V_{ov2}$；此后平台值不变（如果这发生在 3 V 之前）。

### 第 7 步 — 示例

为了说明曲线形状，取 $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$，$\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$，$(W/L)_1 = 10$，$(W/L)_2 = (W/L)_3 = 20$，$V_{in} = 1.0$ V，$R_L = 10\ \mathrm{k}\Omega$：

$$
\begin{aligned}
V_{ov1} &= 1.0 - 0.7 = 0.3\ \mathrm{V},\\
I_{D1,sat} &= \tfrac12(134\ \mu\mathrm{A/V^2})(10)(0.3\ \mathrm{V})^2 = 60.3\ \mu\mathrm{A},\\
V_{ov2} &= \sqrt{\frac{2(60.3\ \mu\mathrm{A})}{(38.4\ \mu\mathrm{A/V^2})(20)}} = 0.396\ \mathrm{V},\\
V_{DD,1} &= 0.8 + 0.396 + 0.3 = 1.50\ \mathrm{V},\\
V_{out,max} &= (10\ \mathrm{k}\Omega)(1)(60.3\ \mu\mathrm{A}) = 0.603\ \mathrm{V} .
\end{aligned}
$$

检验 $M_3$：$V_{out,max} = 0.603$ V $\le V_{DD} - V_{ov2} = 1.50 - 0.40 = 1.10$ V ✓。对区域 II 的方程进行数值求解：

| $V_{DD}$ (V) | 0.8 | 0.9 | 1.0 | 1.1 | 1.2 | 1.3 | 1.4 | 1.5 | 2.0 | 3.0 |
|---|---|---|---|---|---|---|---|---|---|---|
| $V_{DS1}$ (V) | 0 | 0.008 | 0.029 | 0.061 | 0.102 | 0.154 | 0.219 | 0.304 | 0.804 | 1.804 |
| $V_{out}$ (V) | 0 | 0.032 | 0.112 | 0.220 | 0.341 | 0.460 | 0.559 | 0.603 | 0.603 | 0.603 |

### 结果

$V_{out}$ 随 $V_{DD}$ 变化的曲线草图：

| $V_{DD}$ 范围 | 器件状态 | $V_{out}$ |
|---|---|---|
| 0 到 $\lvert V_{THP}\rvert = 0.8$ V | $M_2$、$M_3$ 截止 | 0 |
| 0.8 V 到 $V_{DD,1}$ | $M_2$、$M_3$ 导通；$M_1$ 处于线性区 | 从 0 开始上升（起初 $\approx\tfrac12R_L\mu_pC_{ox}(W/L)_3(V_{DD} - 0.8)^2$），随后弯曲变平 |
| $V_{DD,1}$ 到 3 V | $M_1$ 饱和 | 恒定为 $V_{out,max}$ |

$$V_{out,max} = R_L\frac{(W/L)_3}{(W/L)_2}\cdot\frac12\mu_nC_{ox}\left(\frac{W}{L}\right)_1(V_{in} - 0.7)^2, \qquad V_{DD,1} = |V_{GS2}| + (V_{in} - 0.7),$$

其中 $|V_{GS2}| = 0.8 + \sqrt{2I_{D1,sat}/[\mu_pC_{ox}(W/L)_2]}$。这要求 $M_3$ 保持饱和，即 $V_{out} \le V_{DD} - (|V_{GS2}| - 0.8)$；若 $R_L$ 非常大，曲线会先跟随 $V_{DD}$，直到满足这一条件为止。

**常见错误。** 把 $V_{out}$ 画成在整个范围内都与 $V_{DD}$ 成正比，或者从 $V_{DD} = 0$ 起就恒定。在 $M_2$ 导通（0.8 V）之前输出为零；一旦 $M_1$ 饱和，输出就与 $V_{DD}$ 无关，因为电流由 $V_{in}$ 决定。

**常见错误。** 把转折点放在 $|V_{GS2}| + V_{in}$ 或 $|V_{GS2}| + V_{THN}$ 处。$M_1$ 只需 $V_{DS1} = V_{in} - V_{THN}$ 即可饱和。

**常见错误。** 把镜像比例弄反：$M_3$ 是输出器件，$M_2$ 是输入器件，因此电流增益为 $(W/L)_3/(W/L)_2$。
