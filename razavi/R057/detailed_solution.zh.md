# 详细步骤 - R057

思路： 节点 X 没有任何直流通路（它只接 $M_1$ 的栅极和电容 $C_1$），因此 $C_1$ 上的电荷被冻结，$V_X - V_Y = V_{GS1}$ 永不改变。输入阶跃经 $C_2$ 耦合到 Y，把 $M_1$ 推出饱和区；随后电流的不足部分使 $C_2$ 放电，直到 $M_1$ 能再次流过 $I_1$。在节点 Y 列 KCL，得到一个可以精确求解的微分方程。

### 第 1 步 — 初始状态

在 $t = 0$ 之前，$M_1$ 流过 $I_1$，且 $V_{DS1} = V_{DD} - V_Y = V_{GS1}$，因此它处于饱和区；由于 $\lambda = 0$，

$$I_1 = \frac{\beta}{2}(V_{GS1} - V_{TH})^2 \quad\Longrightarrow\quad V_{GS1} = V_{TH} + \sqrt{\frac{2I_1}{\beta}} .$$

令过驱动电压 $V_{ov} = \sqrt{2I_1/\beta}$，初始电压为

$$V_X(0^-) = V_{DD}, \qquad V_Y(0^-) = V_{DD} - V_{GS1} = V_{DD} - V_{TH} - V_{ov} .$$

### 第 2 步 — 节点 X 浮空：$V_X - V_Y$ 恒定

只有 $M_1$ 的栅极（忽略其他电容时它不吸取电流）和 $C_1$ 接到节点 X，因此在 X 点列 KCL 可知，$C_1$ 中的电流始终为零：

$$C_1\frac{d(V_X - V_Y)}{dt} = 0 \quad\Longrightarrow\quad V_X(t) - V_Y(t) = \text{constant} = V_{GS1} .$$

$C_1$ 的作用就像一个电压为 $V_{GS1}$ 的浮动电池：X 精确地跟随 Y 的每一次变化。因此 $M_1$ 的栅源电压保持为 $V_{GS1}$，$M_1$ 只有在饱和时才能流过 $I_1$。

### 第 3 步 — $t = 0$ 时的跳变

只有电容才能承载瞬时跳变所需的冲激电流，而 $C_1$ 中不可能有电荷流过，因为 X 不通向任何其他地方。因此在阶跃前后 $C_2$ 两端的电压不变：Y 升高整个 $V_0$，X 随之升高（第 2 步）：

$$V_Y(0^+) = V_{DD} - V_{GS1} + V_0, \qquad V_X(0^+) = V_{DD} + V_0 .$$

### 第 4 步 — $M_1$ 被推出饱和区

阶跃刚过时：

$$V_{GS1} \;\text{(unchanged)}, \qquad V_{DS1} = V_{DD} - V_Y(0^+) = V_{GS1} - V_0 .$$

饱和要求 $V_{DS1} \ge V_{GS1} - V_{TH}$，即 $V_0 \le V_{TH}$。由于 $V_0 > V_{TH}$，因此 $M_1$ 处于线性区：栅极比 $V_{DD}$ 端高出 $V_{TH}$ 以上，因此沟道两端都发生反型。（若 $V_0 > V_{GS1}$，Y 甚至高于 $V_{DD}$，漏极与源极交换角色，器件中的电流从 Y 流向 $V_{DD}$。）

由于栅源电压固定为 $V_{GS1}$，处于线性区的器件流过的电流小于其饱和电流 $I_1$。用“两个过驱动电压”的形式表示（$\gamma = 0$）：

$$I_{M1} = \frac{\beta}{2}\left[(V_X - V_Y - V_{TH})^2 - (V_X - V_{DD} - V_{TH})^2\right] = I_1 - \frac{\beta}{2}\,u^2,$$

其中

$$u = V_X - V_{DD} - V_{TH}$$

是沟道 $V_{DD}$ 端的过驱动电压。只要 $u > 0$，这一形式在两个导电方向上都成立。在 $t = 0^+$ 时，$u(0^+) = V_{DD} + V_0 - V_{DD} - V_{TH} = V_0 - V_{TH} > 0$。

### 第 5 步 — 在节点 Y 列 KCL：放电方程

当 $t > 0$ 时 $V_{in}$ 恒定，因此从 $C_2$ 流入 Y 的电流为 $C_2\,d(V_{in} - V_Y)/dt = -C_2\,dV_Y/dt$，而 $C_1$ 中没有电流（第 2 步）。在节点 Y 列 KCL：

$$I_{M1} - C_2\frac{dV_Y}{dt} = I_1 \quad\Longrightarrow\quad C_2\frac{dV_Y}{dt} = I_{M1} - I_1 = -\frac{\beta}{2}u^2 < 0 .$$

$I_1$ 吸取的电流多于 $M_1$ 提供的电流，差值取自 $C_2$：结果是 $V_Y$ 下降，$V_X$ 也随之下降。 由于 $V_X = V_Y + V_{GS1}$，$du/dt = dV_X/dt = dV_Y/dt$：

$$\frac{du}{dt} = -\frac{\beta}{2C_2}\,u^2 .$$

### 第 6 步 — 求解方程与终值

分离变量，$du/u^2 = -(\beta/2C_2)\,dt$，并从 $0$ 积分到 $t$（利用 $\int du/u^2 = -1/u$）：

$$-\frac{1}{u(t)} + \frac{1}{u(0^+)} = -\frac{\beta}{2C_2}\,t \quad\Longrightarrow\quad \frac{1}{u(t)} = \frac{1}{V_0 - V_{TH}} + \frac{\beta t}{2C_2} ,$$

$$u(t) = \frac{V_0 - V_{TH}}{1 + t/\tau}, \qquad \tau = \frac{2C_2}{\beta(V_0 - V_{TH})} .$$

由 $V_X = V_{DD} + V_{TH} + u$ 和 $V_Y = V_X - V_{GS1}$：

$$
\begin{aligned}
V_X(t) &= V_{DD} + V_{TH} + \frac{V_0 - V_{TH}}{1 + t/\tau},\\
V_Y(t) &= V_{DD} - \sqrt{\frac{2I_1}{\beta}} + \frac{V_0 - V_{TH}}{1 + t/\tau} .
\end{aligned}
$$

终值（$t \to \infty$，$u \to 0$）：

$$V_X(\infty) = V_{DD} + V_{TH}, \qquad V_Y(\infty) = V_{DD} - \sqrt{2I_1/\beta} .$$

当 $u = 0$，即 $M_1$ 到达饱和边缘 $V_{DS1} = V_{GS1} - V_{TH} = V_{ov}$ 时，放电停止；这是它在固定的 $V_{GS1}$ 下能流过 $I_1$ 的唯一状态。两个节点最终都恰好比初始值高 $V_{TH}$，而不是高 $V_0$。趋近过程是双曲型的（$\propto 1/t$），而不是指数型的：在饱和边缘附近，电流差额 $\tfrac{\beta}{2}u^2$ 按平方减小，因此建立过程的最后一段很慢。

### 第 7 步 — 波形

两个波形形状相同，相差常数 $V_{GS1}$：

| 时间 | $V_X$ | $V_Y$ |
|---|---|---|
| $t < 0$ | $V_{DD}$ | $V_{DD} - V_{GS1}$ |
| $t = 0^+$（向上跳变 $V_0$） | $V_{DD} + V_0$ | $V_{DD} - V_{GS1} + V_0$ |
| $t = \tau$（超出量还剩一半） | $V_{DD} + V_{TH} + (V_0 - V_{TH})/2$ | $V_{DD} - V_{ov} + (V_0 - V_{TH})/2$ |
| $t = 9\tau$（还剩 10 %） | $V_{DD} + V_{TH} + 0.1(V_0 - V_{TH})$ | $V_{DD} - V_{ov} + 0.1(V_0 - V_{TH})$ |
| $t \to \infty$ | $V_{DD} + V_{TH}$ | $V_{DD} - V_{ov}$ |

![正阶跃下的 $V_X$ 波形](/q/R057/solution-vx.zh.svg)

![正阶跃下的 $V_Y$ 波形](/q/R057/solution-vy.zh.svg)

数值示例。 假设 $V_{DD} = 3$ V，$V_{TH} = 0.7$ V，$\beta = 1\ \mathrm{mA/V^2}$，$I_1 = 0.1$ mA，$C_2 = 1$ pF，$V_0 = 1$ V：

$$
\begin{aligned}
V_{ov} &= \sqrt{2(0.1\ \mathrm{mA})/(1\ \mathrm{mA/V^2})} = 0.447\ \mathrm{V}, \qquad V_{GS1} = 1.147\ \mathrm{V},\\
\tau &= \frac{2(1\ \mathrm{pF})}{(1\ \mathrm{mA/V^2})(1 - 0.7\ \mathrm{V})} = 6.7\ \mathrm{ns}.
\end{aligned}
$$

$V_X$：3 V → 跳变到 4.0 V → 6.7 ns 时为 3.85 V → 60 ns 时为 3.73 V → 3.7 V。$V_Y$：1.85 V → 跳变到 2.85 V → 6.7 ns 时为 2.70 V → 60 ns 时为 2.58 V → 2.55 V。

若改为 $V_0 \le V_{TH}$，跳变后 $M_1$ 仍保持饱和，恰好流过 $I_1$，两个节点就会一直停留在跳变后的数值；正是 $V_0 > V_{TH}$ 这一条件把 $M_1$ 推入线性区。

### 结果

由于节点 X 没有放电通路，任何时刻都有 $V_X - V_Y = V_{GS1} = V_{TH} + \sqrt{2I_1/\beta}$。在 $t = 0$ 时，两个节点都向上跳变 $V_0$（分别到 $V_{DD} + V_0$ 和 $V_{DD} - V_{GS1} + V_0$）。由于 $V_0 > V_{TH}$，$M_1$ 进入线性区，流过的电流小于 $I_1$；差额使 $C_2$ 放电，两个节点一起下降：

$$V_X(t) = V_{DD} + V_{TH} + \frac{V_0 - V_{TH}}{1 + t/\tau}, \quad V_Y(t) = V_{DD} - \sqrt{\frac{2I_1}{\beta}} + \frac{V_0 - V_{TH}}{1 + t/\tau}, \quad \tau = \frac{2C_2}{\beta(V_0 - V_{TH})} .$$

它们渐近地稳定在 $V_X = V_{DD} + V_{TH}$ 和 $V_Y = V_{DD} - \sqrt{2I_1/\beta}$（$M_1$ 处于饱和边缘），即比各自的初始值高 $V_{TH}$。

常见错误： 认为 $V_X$ 保持在 $V_{DD}$，或者 $C_1$ 通过栅极放电。栅极不吸取电流，也没有其他元件接到 X，因此 $C_1$ 上的电荷不能改变；X 必须随 Y 一起变化。

常见错误： 让电路回到初始电压，或者停留在跳变后的数值。$M_1$ 保持相同的 $V_{GS1}$，因此只有在饱和边缘它才能再次流过 $I_1$，此时两个节点都比起始值高 $V_{TH}$。

常见错误： 让 $V_X$ 和 $V_Y$ 向相反方向变化，例如把 $C_1$ 和 $C_2$ 当作阶跃的分压器。由于 X 浮空，$C_1$ 中没有电荷流动，它只是一个电平移位器（level shifter）；两个节点都跳变整个 $V_0$，然后一起下降。
