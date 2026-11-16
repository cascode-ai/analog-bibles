# 详细步骤 - R570

**思路。** 理想运放通过反馈电容 $C_2$ 把 X 保持在 0 V，因此 $C_1$ 只经开关电阻 $R_{on}$ 放电，由此得到时间常数。对衰减的开关电流计算 $i^2R_{on}$ 的积分，即得消耗的能量。

### 第 1 步 — 放大模式下的电路

$S_1$ 和 $S_2$ 断开，$S_3$ 导通，因此 $R_{on}$ 把 A 接地，$C_1$ 接在 A 与 X 之间，$C_2$（在采样期间已放电）接在 X 与 $V_{out}$ 之间。

<!-- diagram: diagram-01.cir -->

在 $t = 0^+$ 时，电容电压延续采样模式时的值：$C_1$ 两端为 $V_A - V_X = V_{in0}$，$C_2$ 两端为 $V_{out} - V_X = 0$。经 $C_2$ 构成负反馈的理想运放使

$$V_X(t) = 0\quad\text{for all } t ,$$

为此它通过 $C_2$ 提供或吸收所需的任何电流。因此 $V_A(0^+) = V_{in0}$：$S_3$ 闭合时，$R_{on}$ 使 A 不会立即跳到地电位。

### 第 2 步 — 时间常数

由于 $V_X$ 固定，$C_1$ 和 $R_{on}$ 在地与虚地 X 之间构成串联回路。设 $i$ 为从 A 经 $R_{on}$ 流向地的电流，则 $i = V_A/R_{on}$，且 $i = -C_1\,d(V_A - V_X)/dt = -C_1\,dV_A/dt$：

$$-C_1\frac{dV_A}{dt} = \frac{V_A}{R_{on}} \quad\Longrightarrow\quad \frac{dV_A}{dt} = -\frac{V_A}{R_{on}C_1}.$$

由 $V_A(0) = V_{in0}$：

$$V_A(t) = V_{in0}\,e^{-t/\tau}, \qquad \boxed{\tau = R_{on}C_1}.$$

$C_2$ 没有出现：它只收集离开 $C_1$ 的电荷，而且由于 X 被钳定在 0 V，它无法影响 $C_1$ 两端的电压。

### 第 3 步 — 输出波形

开关电流为

$$i(t) = \frac{V_A(t)}{R_{on}} = \frac{V_{in0}}{R_{on}}\,e^{-t/\tau}.$$

同样的电流从 X 处离开 $C_1$ 的右极板；由于没有电流流入运放，它必须经 $C_2$ 来自运放的输出端，因此

$$V_{out}(t) = V_X + \frac{1}{C_2}\int_0^t i\,dt' = \frac{1}{C_2}\cdot\frac{V_{in0}}{R_{on}}\cdot\tau\left(1 - e^{-t/\tau}\right) = \frac{C_1}{C_2}V_{in0}\left(1 - e^{-t/\tau}\right),$$

它以相同的时间常数 $R_{on}C_1$ 建立到预期的 $(C_1/C_2)V_{in0}$：$C_1$ 上的全部电荷 $C_1V_{in0}$ 最终都转移到 $C_2$ 上。

### 第 4 步 — 开关上消耗的能量

$$
\begin{aligned}
E &= \int_0^\infty i^2R_{on}\,dt = \int_0^\infty \frac{V_{in0}^2}{R_{on}^2}e^{-2t/\tau}R_{on}\,dt\\
&= \frac{V_{in0}^2}{R_{on}}\int_0^\infty e^{-2t/\tau}\,dt = \frac{V_{in0}^2}{R_{on}}\cdot\frac{\tau}{2}\\
&= \frac{V_{in0}^2}{R_{on}}\cdot\frac{R_{on}C_1}{2} = \frac12C_1V_{in0}^2 .
\end{aligned}
$$

$R_{on}$ 被约去：较小的 $R_{on}$ 带来更大的电流，但持续时间更短，总量不变。

**能量核算。** 在 $t = 0$ 时，$C_1$ 储存 $\tfrac12C_1V_{in0}^2$；最终它的两个极板都处于 0 V，因此这些能量**全部**消耗在开关上。最终储存在 $C_2$ 上的能量 $\tfrac12C_2(C_1V_{in0}/C_2)^2 = \tfrac12(C_1^2/C_2)V_{in0}^2$ 由运放的输出端提供，而不是来自 $C_1$；没有能量穿过 X，因为该处的功率为 $V_X\cdot i = 0$。

**示例**（题目中未给出这些数值）：取 $R_{on} = 1$ kΩ、$C_1 = 1$ pF、$V_{in0} = 1$ V，则 $\tau = 1$ ns，$E = 0.5$ pJ。

### 结果

$$\tau = R_{on}C_1 \quad (C_2\text{ does not enter}), \qquad E = \tfrac12C_1V_{in0}^2\ \ (\text{independent of } R_{on}).$$

运放理想时，节点 X 保持在 0 V，已充电到 $V_{in0}$ 的 $C_1$ 经 $R_{on}$ 放电：$V_A(t) = V_{in0}e^{-t/(R_{on}C_1)}$。电流 $i(t) = (V_{in0}/R_{on})e^{-t/\tau}$ 流过 $C_1$ 进入 X，再流入 $C_2$（由运放输出端提供），因此 $V_{out}(t) = (C_1/C_2)V_{in0}(1 - e^{-t/\tau})$。开关消耗的能量为 $\int_0^\infty i^2R_{on}\,dt = (V_{in0}^2/R_{on})(\tau/2) = \tfrac12C_1V_{in0}^2$，即 $C_1$ 上最初储存的全部能量。

**常见错误。** 把 X 当作浮空节点，将 $C_1$ 和 $C_2$ 串联或并联，得到 $\tau = R_{on}C_1C_2/(C_1 + C_2)$、$R_{on}(C_1 + C_2)$ 或 $R_{on}C_2$。理想运放把 X 保持在虚地，因此与 $R_{on}$ 构成放电回路的只有 $C_1$。

**常见错误。** 认为消耗的能量与 $R_{on}$ 有关。电流按 $1/R_{on}$ 变化，持续时间按 $R_{on}$ 变化，因此 $\int i^2R_{on}\,dt$ 与它无关。

**常见错误。** 用 $C_2$ 或最终输出电压来表示能量，例如 $\tfrac12C_2V_{out}^2$。这部分能量储存在 $C_2$ 上，来自运放的电源；开关消耗的恰好是 $C_1$ 原来储存的能量 $\tfrac12C_1V_{in0}^2$。
