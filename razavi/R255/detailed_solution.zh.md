# 详细步骤 - R255

**思路。** 利用平方律的晶体管电流，对节点 X 和 Y 列 KCL 方程。先在 $I_{REF} = 0$ 时求解，再求微分，得出 $V_X$ 和 $V_Y$ 随 $I_{REF}$ 增大如何变化，找出两条曲线的交点，并跟踪 $M_1$ 在 $I_{REF}$ 较大时进入线性区的过程。用一个数值示例使草图具体化。

### 第 1 步 — KCL 方程

$M_2$ 为二极管连接（diode-connected），因此始终饱和，且两个晶体管的 $V_{GS} = V_X$。所以，**当 $M_1$ 也饱和时**（器件相同，$\lambda = 0$，$\beta = \mu_nC_{ox}W/L$，$V_{TH} = 0.7$ V）：

$$I_{D1} = I_{D2} = \frac{\beta}{2}(V_X - V_{TH})^2 .$$

对 X 和 Y 列 KCL：

$$I_{REF} + \frac{V_Y - V_X}{R_2} = I_{D2}, \tag{1}$$

$$\frac{V_{DD} - V_Y}{R_1} = I_{D1} + \frac{V_Y - V_X}{R_2}. \tag{2}$$

由于 $I_{D1} = I_{D2}$，用 (1) 的左边替换 (2) 中的 $I_{D1}$，得

$$\frac{V_{DD} - V_Y}{R_1} = I_{REF} + \frac{2(V_Y - V_X)}{R_2}. \tag{3}$$

### 第 2 步 — $I_{REF} = 0$ 时的工作点

即使 $I_{REF} = 0$，电路也会导通：如果没有电流，$R_1$ 和 $R_2$ 会把 X 拉到 $V_{DD} = 3$ V，从而使 $M_2$ 导通。因此电流从 $V_{DD}$ 经 $R_1$ 和 $R_2$ 流入二极管 $M_2$，$M_1$ 复制该电流。记该电流为 $I_0 = I_{D2}$。在 $I_{REF} = 0$ 时，由 (1) 得 $V_Y - V_X = R_2I_0$，由 (3) 得 $V_{DD} - V_Y = 2R_1I_0$（$R_1$ 同时承载 $M_1$ 和 $R_2$ 的电流）。因此

$$V_Y = V_{DD} - 2R_1I_0, \qquad V_X = V_{DD} - (2R_1 + R_2)I_0 .$$

结合二极管关系 $V_X = V_{TH} + \sqrt{2I_0/\beta}$，得到关于 $I_0$ 的一个方程，相当于一个经等效电阻 $2R_1 + R_2$ 由 $V_{DD}$ 偏置的二极管：

$$V_{DD} - (2R_1 + R_2)I_0 = V_{TH} + \sqrt{\frac{2I_0}{\beta}} .$$

因此在 $I_{REF} = 0$ 时，$V_{TH} < V_X < V_Y < V_{DD}$：$V_X$ 略高于 0.7 V，$V_Y$ 比它高 $R_2I_0$。由于 $V_Y > V_X > V_X - V_{TH}$，$M_1$ 处于饱和。

**数值示例**（贯穿全文使用）。取 $W/L = 10/0.5$，$\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$，因此 $\beta = 134\ \mu\mathrm{A/V^2}\times20 = 2.68\ \mathrm{mA/V^2}$，并取 $R_1 = R_2 = 10\ \mathrm{k}\Omega$：

$$3\ \mathrm{V} - (30\ \mathrm{k}\Omega)\,I_0 = 0.7\ \mathrm{V} + \sqrt{\frac{2I_0}{2.68\ \mathrm{mA/V^2}}}.$$

数值求解得 $I_0 = 69.1\ \mu\mathrm{A}$。于是

$$
\begin{aligned}
V_X &= 3 - (30\ \mathrm{k}\Omega)(69.1\ \mu\mathrm{A}) = 3 - 2.073 = 0.927\ \mathrm{V},\\
V_Y &= 3 - (20\ \mathrm{k}\Omega)(69.1\ \mu\mathrm{A}) = 3 - 1.382 = 1.618\ \mathrm{V}.
\end{aligned}
$$

验证：$\sqrt{2(69.1\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = \sqrt{0.0516}\ \mathrm{V} = 0.227$ V，且 $0.7 + 0.227 = 0.927$ V。✓

### 第 3 步 — $M_1$ 饱和时 $V_X$ 和 $V_Y$ 的斜率

使 $I_{REF}$ 增加 $dI$。则 $I_{D2}$ 变化 $g_m\,dV_X$，其中 $g_m = \beta(V_X - V_{TH})$。对 (1) 求微分：

$$dI + \frac{dV_Y - dV_X}{R_2} = g_m\,dV_X \quad\Longrightarrow\quad dV_Y - dV_X = R_2\,(g_m\,dV_X - dI). \tag{4}$$

对 (3) 求微分，再代入 (4)：

$$
\begin{aligned}
-\frac{dV_Y}{R_1} &= dI + \frac{2(dV_Y - dV_X)}{R_2}\\
-\frac{dV_Y}{R_1} &= dI + 2(g_m\,dV_X - dI) = 2g_m\,dV_X - dI\\
dV_Y &= R_1\,(dI - 2g_m\,dV_X). \tag{5}
\end{aligned}
$$

式 (4) 也可以写成 $dV_Y = (1 + g_mR_2)\,dV_X - R_2\,dI$。令其等于 (5)：

$$
\begin{aligned}
(1 + g_mR_2)\,dV_X - R_2\,dI &= R_1\,dI - 2g_mR_1\,dV_X\\
\left[1 + g_m(2R_1 + R_2)\right]dV_X &= (R_1 + R_2)\,dI\\
\frac{dV_X}{dI_{REF}} &= \frac{R_1 + R_2}{1 + g_m(2R_1 + R_2)} .
\end{aligned}
$$

把它代回 (5)：

$$
\begin{aligned}
\frac{dV_Y}{dI_{REF}} &= R_1\left[1 - \frac{2g_m(R_1 + R_2)}{1 + g_m(2R_1 + R_2)}\right]
= R_1\,\frac{1 + 2g_mR_1 + g_mR_2 - 2g_mR_1 - 2g_mR_2}{1 + g_m(2R_1 + R_2)}\\
&= -\,\frac{R_1\,(g_mR_2 - 1)}{1 + g_m(2R_1 + R_2)} = -\,\frac{R_1\,(R_2 - 1/g_m)}{2R_1 + R_2 + 1/g_m}.
\end{aligned}
$$

**含义。**

- $dV_X/dI_{REF}$ 为正且很小：当 $g_mR_1$ 和 $g_mR_2$ 较大时，它约为 $(R_1 + R_2)/[g_m(2R_1 + R_2)]$，小于 $1/g_m$，因此 $V_X$ 缓慢上升，比二极管电压上升得稍慢。
- 在通常的情况下，即 **$g_mR_2 > 1$ 时，$dV_Y/dI_{REF}$ 为负**，因为 $M_1$ 经 $R_1$ 吸取不断增大的镜像电流。当 $g_mR_2 \gg 1$ 时，斜率趋于 $-R_1R_2/(2R_1 + R_2)$，因此 $V_Y$ 几乎线性地下降。
- 若 $g_mR_2 < 1$（$R_2$ 很小或器件很弱），$V_Y$ 与上升的 $V_X$ 耦合得非常紧，以致它起初会**上升**；由于 $g_m$ 随 $I_{REF}$ 增大，它在 $g_mR_2 = \beta R_2(V_X - V_{TH}) = 1$ 处达到峰值，或者一直上升到 $M_1$ 退出饱和。例如：$\beta = 1\ \mathrm{mA/V^2}$，$R_1 = 2\ \mathrm{k}\Omega$，$R_2 = 0.5\ \mathrm{k}\Omega$ 时，$I_{REF} = 0$ 处 $V_Y = 1.68$ V，3 mA 处为 1.96 V。

**示例在 $I_{REF} = 0$ 时的数值：**

$$
\begin{aligned}
g_m &= (2.68\ \mathrm{mA/V^2})(0.227\ \mathrm{V}) = 0.609\ \mathrm{mS}, \qquad \frac{1}{g_m} = 1.64\ \mathrm{k}\Omega, \qquad g_mR_2 = 6.1 > 1,\\
\frac{dV_X}{dI_{REF}} &= \frac{20\ \mathrm{k}\Omega}{1 + (0.609\ \mathrm{mS})(30\ \mathrm{k}\Omega)} = \frac{20\ \mathrm{k}\Omega}{19.3} = 1.04\ \mathrm{k}\Omega \ \ (1.04\ \mathrm{mV}/\mu\mathrm{A}),\\
\frac{dV_Y}{dI_{REF}} &= -\frac{(10\ \mathrm{k}\Omega)(10 - 1.64)\ \mathrm{k}\Omega}{(20 + 10 + 1.64)\ \mathrm{k}\Omega} = -2.64\ \mathrm{k}\Omega \ \ (-2.64\ \mathrm{mV}/\mu\mathrm{A}).
\end{aligned}
$$

### 第 4 步 — 交点 $V_X = V_Y$

在 $I_{REF} = 0$ 时 $V_Y > V_X$，而 $V_Y$ 下降、$V_X$ 上升，因此两条曲线必然相交。在交点处 $R_2$ 中**没有电流**，因此：

- 由 (1)：$I_{D2} = I_{REF}$，因此 $V_X = V_{TH} + \sqrt{2I_{REF}/\beta}$；
- 由 (3)：$V_{DD} - V_Y = R_1I_{REF}$，因此 $V_Y = V_{DD} - R_1I_{REF}$。

交点处的电流满足

$$V_{DD} - R_1I_{REF} = V_{TH} + \sqrt{\frac{2I_{REF}}{\beta}} = V_{GS}(I_{REF}).$$

对于示例，试取 $I_{REF} = 192\ \mu\mathrm{A}$：

$$
\begin{aligned}
V_{DD} - R_1I_{REF} &= 3 - (10\ \mathrm{k}\Omega)(192\ \mu\mathrm{A}) = 1.080\ \mathrm{V},\\
V_{TH} + \sqrt{2I_{REF}/\beta} &= 0.7 + \sqrt{2(192\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = 0.7 + 0.379 = 1.079\ \mathrm{V}.
\end{aligned}
$$

因此两条曲线在 $I_{REF} \approx 192\ \mu\mathrm{A}$ 处相交，电压约为 1.08 V，此时 $M_1$ 仍处于饱和（$V_{DS1} = V_{GS1}$）。越过这一点后 $V_Y < V_X$，$R_2$ 中的电流从 X 流向 Y。

### 第 5 步 — $M_1$ 进入线性区；$V_Y$ 趋于平坦

当 $V_{DS1} = V_{GS1} - V_{TH}$ 时 $M_1$ 退出饱和，即

$$V_Y = V_X - 0.7\ \mathrm{V}.$$

在示例中，这发生在 $I_{REF} \approx 391\ \mu\mathrm{A}$ 处，此时 $V_X = 1.19$ V，$V_Y = 0.49$ V（通过对 (1) 和 (3) 数值求解得到）。越过这一点后 $I_{D1} \ne I_{D2}$，必须用线性区电流 $I_{D1} = \beta\left[(V_X - V_{TH})V_Y - \tfrac12 V_Y^2\right]$ 代入 (2)。

当 $I_{REF}$ 很大时，$V_X$ 继续上升，$M_1$ 进入深线性区（deep triode region），表现为一个电阻

$$R_{on1} = \frac{1}{\beta(V_X - V_{TH})}.$$

<!-- diagram: diagram-01.cir -->

此时节点 Y 一方面经 $R_1$ 由 $V_{DD}$ 供电，另一方面经 $R_2$ 由 X 供电，并经 $R_{on1}$ 泄放到地。对 Y 点列 KCL 得

$$\frac{V_{DD} - V_Y}{R_1} + \frac{V_X - V_Y}{R_2} = \frac{V_Y}{R_{on1}} \quad\Longrightarrow\quad V_Y = \frac{V_{DD}/R_1 + V_X/R_2}{1/R_1 + 1/R_2 + \beta(V_X - V_{TH})}.$$

当 $V_X$ 变大时，分子以 $V_X/R_2$ 为主，分母以 $\beta V_X$ 为主，因此

$$V_Y \to \frac{V_X/R_2}{\beta V_X} = \frac{1}{\beta R_2}.$$

$R_2$ 与 $R_{on1}$ 构成由 $V_X$ 驱动的分压器；由于 $M_1$ 的电导随 $V_X$ 增大，分压比不断减小，因此 $V_Y$ 停止下降，稳定在一个很小的值。对于示例，$1/(\beta R_2) = 1/(2.68\ \mathrm{mA/V^2}\times10\ \mathrm{k}\Omega) = 37$ mV，但趋近得非常缓慢。

与此同时，由 (1) 得 $I_{D2} = I_{REF} - (V_X - V_Y)/R_2$：$I_{REF}$ 有一小部分经 $R_2$ 被分流，因此 $V_X$ 略低于单纯二极管的值 $V_{TH} + \sqrt{2I_{REF}/\beta}$，但仍保持类似平方根的上升。（接在 3 V 上的实际电流源会使 $V_X$ 在达到 $V_{DD}$ 之前停止上升。）

### 第 6 步 — 用于画草图的数值表

对 $\beta = 2.68\ \mathrm{mA/V^2}$ 和 $R_1 = R_2 = 10\ \mathrm{k}\Omega$，用完整的平方律模型求解 (1) 和 (2)：

| $I_{REF}$ | $V_X$ (V) | $V_Y$ (V) | $M_1$ |
|---|---|---|---|
| 0 | 0.927 | 1.618 | 饱和 |
| 100 μA | 1.015 | 1.343 | 饱和 |
| 192 μA | 1.079 | 1.079 | 饱和（曲线相交） |
| 300 μA | 1.142 | 0.761 | 饱和 |
| 391 μA | 1.189 | 0.489 | 线性区边缘 |
| 600 μA | 1.310 | 0.301 | 线性区 |
| 1 mA | 1.506 | 0.218 | 线性区 |
| 2 mA | 1.868 | 0.156 | 线性区 |

### 结果

- **在 $I_{REF} = 0$ 时电路已经导通**：电流沿 $V_{DD} \to R_1 \to R_2 \to M_2$ 流动，$M_1$ 复制该电流，因此 $V_{TH} < V_X < V_Y$，且 $V_{DD} - (2R_1 + R_2)I_0 = V_{TH} + \sqrt{2I_0/\beta}$（示例：$V_X \approx 0.93$ V，$V_Y \approx 1.62$ V）。
- **$V_X$ 缓慢上升**，类似二极管，曲线向下凹（concave down），斜率为 $(R_1 + R_2)/[1 + g_m(2R_1 + R_2)]$。
- 在通常的 $g_mR_2 > 1$ 情况下，**$V_Y$ 大致线性地下降**，其中 $g_m = \beta(V_X - 0.7)$，斜率为 $-R_1(R_2 - 1/g_m)/(2R_1 + R_2 + 1/g_m) \approx -R_1R_2/(2R_1 + R_2)$。若一开始 $\beta R_2(V_X - 0.7) < 1$，$V_Y$ 先上升，并在 $\beta R_2(V_X - 0.7) = 1$ 处达到峰值（或者一直上升到 $M_1$ 退出饱和）。
- **两条曲线相交**于 $V_{DD} - R_1I_{REF} = V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta}$ 处，此时 $R_2$ 中没有电流（示例：约 192 μA，1.08 V）。越过交点后 $V_Y < V_X$。
- **一旦 $V_Y < V_X - 0.7$ V，$M_1$ 就处于线性区**，$V_Y$ 趋于平坦，并趋近 $1/(\beta R_2)$（$R_2$ 与 $M_1$ 的导通电阻分压）。示例中，1 mA 时为 0.22 V，而 $V_X$ 继续上升（1 mA 时为 1.51 V）。

**常见错误。** 忽略 $R_2$，对所有 $I_{REF}$ 都写成 $V_Y = V_{DD} - R_1I_{REF}$。这只在交点处成立；在其他地方 $R_2$ 中都有电流，而且正是 $R_2$ 使电路在 $I_{REF} = 0$ 时导通，并使 $V_Y$ 在大电流下趋于平坦。

**常见错误。** 断言 $I_{REF} = 0$ 时没有电流、$V_X$ 不确定。如果没有电流，$R_1$ 和 $R_2$ 会把 X 拉到 $V_{DD}$ 并使 $M_2$ 导通，因此自洽的状态必有 $I_0 > 0$。

**常见错误。** 认为 $V_Y$ 一般随 $I_{REF}$ **增大**，或者认为对所有 $I_{REF}$ 都有 $V_X = V_Y$。只有在 $g_mR_2 < 1$ 这一特殊情况下 $V_Y$ 才会上升；通常流过 $R_1$ 的镜像电流起主导作用，$V_Y$ 一直下降到 $M_1$ 进入线性区为止。
