# 详细步骤 - R268

**思路。** 电容一开始把节点 X 抬到远高于电源电压的位置，因此共源共栅（cascode）器件 $M_3$ 截止，$M_1$ 的电流只能经 $C_1$ 而来，也就是来自参考节点。对栅极节点应用基尔霍夫电流定律（KCL）可知，$I_{REF}$ 在 $M_2$ 和 $M_1$ 之间平均分配，因此 $C_1$ 以恒定电流放电，$V_X$ 线性斜坡下降。当 $V_X$ 降得足够低时，$M_3$ 导通，接管 $M_1$ 的电流，电路稳定在普通共源共栅电流镜（current mirror）的工作点上。

### 第 1 步 — KCL 与 $t = 0^+$ 时的状态

把 $M_1$ 和 $M_2$ 的栅极节点（$I_{REF}$ 流入之处）称为节点 G。令 $v_C = V_X - V_G$（在 $t = 0$ 时 $= V_{DD}$），并令 $I_C$ 为从 G 经 $C_1$ 流向 X 的电流，因此 $I_C = -C_1\,dv_C/dt$。取 $\lambda = 0$：

**节点 G 的 KCL：** $I_{REF} = I_{D2} + I_C$。**节点 X 的 KCL：** $I_C + I_{D3} = I_{D1}$。**节点 Y 的 KCL：** $(V_{DD} - V_Y)/R_1 = I_{D3}$。

在 $t = 0^+$ 时，$V_X = V_G + V_{DD}$，高于 $V_{DD}$。$M_3$ 的栅极电压 $V_b < V_{DD}$，低于它的另外两个端（Y 最高只能为 $V_{DD}$），因此无论哪个端充当源极，都有 $V_{GS3} < 0$：**$M_3$ 截止**，且

$$V_Y = V_{DD}.$$

### 第 2 步 — 第 1 阶段：$I_{REF}$ 平均分配，$C_1$ 以 $I_{REF}/2$ 放电

由于 $I_{D3} = 0$，节点 X 的 KCL 给出 $I_C = I_{D1}$：$M_1$ 吸取的全部电流都经电容来自节点 G。于是节点 G 的 KCL 变为

$$I_{REF} = I_{D2} + I_{D1}.$$

$M_1$ 和 $M_2$ 的 $V_{GS} = V_G$ 相同，且都饱和：$M_2$ 为二极管连接，$M_1$ 的 $V_{DS}$ 很大。因此

$$I_{D1} = I_{D2} = \frac{I_{REF}}{2} \quad\Longrightarrow\quad V_G = 0.7 + \sqrt{\frac{2(I_{REF}/2)}{\beta}} = 0.7 + \sqrt{\frac{I_{REF}}{\beta}} .$$

$V_G$ 恒定，电容电流也恒为 $I_{REF}/2$：

$$C_1\frac{dv_C}{dt} = -\frac{I_{REF}}{2} \quad\Longrightarrow\quad V_X(t) = V_G + v_C(t) = \underbrace{0.7 + \sqrt{I_{REF}/\beta} + V_{DD}}_{V_X(0^+)} - \frac{I_{REF}}{2C_1}t .$$

**$V_X$ 线性下降**，斜率为 $-I_{REF}/(2C_1)$，起点高于 $V_{DD}$，而 $V_Y = V_{DD}$。

### 第 3 步 — 第 2 阶段：$M_3$ 导通并接管电流

$M_3$ 的源极在 X，衬底接地，因此 $V_{TH3} = 0.7 + 0.45(\sqrt{0.9 + V_X} - \sqrt{0.9})$ V。当满足下式时它开始导通：

$$V_b - V_X = V_{TH3}(V_X) \quad\Longleftrightarrow\quad V_X + V_{TH3}(V_X) = V_b ,$$

这发生在经过以下时间之后：

$$t_1 = \frac{V_X(0^+) - V_{X,on}}{I_{REF}/(2C_1)}, \qquad V_{X,on} = V_b - V_{TH3}(V_{X,on}).$$

此后 $M_3$ 提供 $M_1$ 的一部分电流（$I_{D3} = I_{D1} - I_C$）：

- $I_C$ 减小，因此 $C_1$ 的放电越来越慢，$V_X$ 的下降**变缓**；
- $I_{D2} = I_{REF} - I_C$ 向 $I_{REF}$ 增大，因此 $V_G$ 从 $0.7 + \sqrt{I_{REF}/\beta}$ 升高到 $0.7 + \sqrt{2I_{REF}/\beta}$；
- $I_{D3}$ 从 0 增大到 $I_{REF}$，因此 **$V_Y$ 下降**，从 $V_{DD}$ 趋向 $V_{DD} - R_1I_{REF}$。

**最后的趋近过程。** 接近终点时，趋近过程是指数型的。在终点附近线性化：此时 $I_C = 0$，三个器件都流过 $I_{REF}$，且 $g_m = \sqrt{2\beta I_{REF}}$。令 $\eta = \gamma/(2\sqrt{0.9 + V_X})$ 表示 $M_3$ 的体效应（body effect），则升高 $V_X$ 会使 $I_{D3} = \tfrac{\beta}{2}[V_b - V_X - V_{TH3}(V_X)]^2$ 以 $(1 + \eta)g_m$ 的速率减小。对于小偏差 $\delta V_G$、$\delta V_X$、$\delta I_C$：

$$
\begin{aligned}
\text{KCL at G:}\quad & \delta I_C = -g_m\,\delta V_G,\\
\text{KCL at X:}\quad & \delta I_C = \delta I_{D1} - \delta I_{D3} = g_m\,\delta V_G + (1 + \eta)g_m\,\delta V_X .
\end{aligned}
$$

令两式相等，得 $\delta V_G = -\tfrac12(1 + \eta)\,\delta V_X$，$\delta I_C = \tfrac12(1 + \eta)g_m\,\delta V_X$。电容电压的偏差为 $\delta v_C = \delta V_X - \delta V_G = \tfrac12(3 + \eta)\,\delta V_X$，因此 $C_1\,d(\delta v_C)/dt = -\delta I_C$ 变为

$$C_1\frac{3 + \eta}{2}\frac{d\,\delta V_X}{dt} = -\frac{(1 + \eta)g_m}{2}\,\delta V_X \quad\Longrightarrow\quad \tau_2 = \frac{C_1\,(3 + \eta)}{(1 + \eta)\,g_m} \approx \frac{2.7\,C_1}{g_m}.$$

### 第 4 步 — 最终稳态

当 $I_C = 0$ 时，电容不再起作用，电路就是一个普通的共源共栅电流镜：

$$
\begin{aligned}
I_{D2} &= I_{REF}, \qquad V_G = V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta},\\
I_{D1} &= I_{D3} = I_{REF} \ \ (M_1 \text{ saturated, as given}),\\
V_X &= V_b - V_{GS3}(I_{REF}) = V_b - V_{TH3}(V_X) - \sqrt{2I_{REF}/\beta},\\
V_Y &= V_{DD} - R_1I_{REF},\\
v_C &= V_X - V_G = V_b - V_{GS3} - V_{GS2}.
\end{aligned}
$$

### 第 5 步 — 数值示例

取 $\beta = 2.68\ \mathrm{mA/V^2}$（$W/L = 10/0.5$），$I_{REF} = 100\ \mu\mathrm{A}$，$R_1 = 10\ \mathrm{k}\Omega$，$C_1 = 10$ pF，$V_b = 2$ V。

**第 1 阶段：**

$$
\begin{aligned}
V_G &= 0.7 + \sqrt{100\ \mu\mathrm{A}/2.68\ \mathrm{mA/V^2}} = 0.7 + 0.193 = 0.893\ \mathrm{V},\\
V_X(0^+) &= 0.893 + 3 = 3.893\ \mathrm{V},\\
\text{slope} &= -\frac{50\ \mu\mathrm{A}}{10\ \mathrm{pF}} = -5\ \mathrm{V}/\mu\mathrm{s}.
\end{aligned}
$$

**$M_3$ 导通：** 求解 $V_X + 0.7 + 0.45(\sqrt{0.9 + V_X} - 0.949) = 2$ V。试取 $V_X = 1.092$ V：$V_{TH3} = 0.7 + 0.45(\sqrt{1.992} - 0.949) = 0.908$ V，两者之和为 2.000 V ✓。于是

$$t_1 = \frac{3.893 - 1.092}{5\ \mathrm{V}/\mu\mathrm{s}} = 0.560\ \mu\mathrm{s}.$$

**最终状态：** $V_G = 0.7 + 0.273 = 0.973$ V。$V_X$ 满足 $V_X + V_{TH3}(V_X) = 2 - 0.273 = 1.727$ V，解得 $V_X = 0.857$ V（$V_{TH3} = 0.870$ V）。$V_Y = 3 - 1 = 2.00$ V，$v_C = 0.857 - 0.973 = -0.116$ V。$M_1$ 饱和：$V_{DS1} = 0.857\ \mathrm{V} > 0.273$ V ✓。取 $g_m = 0.732$ mS，$\eta = 0.17$：$\tau_2 = (10\ \mathrm{pF})(3.17)/(1.17\times0.732\ \mathrm{mS}) = 37$ ns。

| $t$ | $V_X$ (V) | $V_Y$ (V) | $I_C$ | 阶段 |
|---|---|---|---|---|
| $0^+$ | 3.893 | 3.000 | 50 μA | 1（$M_3$ 截止） |
| 300 ns | 2.393 | 3.000 | 50 μA | 1 |
| 560 ns | 1.093 | 3.000 | 50 μA | $M_3$ 导通 |
| 600 ns | 0.953 | 2.649 | 32 μA | 2 |
| 650 ns | 0.884 | 2.218 | 11 μA | 2 |
| 700 ns | 0.864 | 2.061 | 3 μA | 2 |
| $\infty$ | 0.857 | 2.000 | 0 | 最终 |

### 结果

- **$t = 0^+$：** 节点 X 的电压等于 $M_2$ 的栅极/漏极电压加上 $V_{DD}$，即**高于** $V_{DD}$，因此 $M_3$ 截止，$V_Y = V_{DD}$。栅极节点稳定在 $V_{TH} + \sqrt{I_{REF}/\beta}$，因为 $I_{REF}$ 平均分配：一半流入 $M_2$，另一半经 $C_1$ 流入 $M_1$（两者 $V_{GS}$ 相等，且都饱和）。
- **第 1 阶段：** $C_1$ 以恒定电流 $I_{REF}/2$ 放电，因此 $V_X$ 从 $V_{TH} + \sqrt{I_{REF}/\beta} + V_{DD}$ 开始以斜率 $-I_{REF}/(2C_1)$ 线性下降，而 $V_Y$ 保持为 $V_{DD}$。
- **第 2 阶段：** 当 $V_X$ 降到 $V_b - V_{TH3}(V_X)$ 时，$M_3$ 导通，并逐渐接管 $M_1$ 的电流。电容电流衰减到零，$V_X$（越来越慢地）稳定在 $V_b - V_{GS3}(I_{REF})$，$V_Y$ 从 $V_{DD}$ 下降到 $V_{DD} - R_1I_{REF}$。
- **最终状态：** $M_2$ 和 $M_1$ 流过 $I_{REF}$，栅极节点电压为 $V_{GS}(I_{REF})$，$C_1$ 上保持 $V_b - V_{GS3} - V_{GS2}$。

**常见错误。** 把 $C_1$ 当作接在 X 与地之间的电容，从而认为 $V_X$ 从 $V_{DD}$ 开始。$C_1$ 接在 X 与栅极节点之间，因此在 $t = 0^+$ 时 X 的电压为 $V_G + V_{DD}$，比电源电压**高**出将近 0.9 V。

**常见错误。** 采用 $I_{REF}/C_1$ 作为斜坡斜率。$M_3$ 截止期间，$M_1$ 的电流经 $C_1$ 来自节点 G，因此 $M_1$ 和 $M_2$ 平分参考电流，只有 $I_{REF}/2$ 给电容放电。

**常见错误。** 让 $V_Y$ 在 $t = 0$ 时就下降。当 $M_3$ 的栅极电压（$V_b$）低于它的另外两个端时，它不可能导通，因此在 $V_X$ 斜坡下降到 $V_b - V_{TH3}$ 之前，$R_1$ 中没有电流。
