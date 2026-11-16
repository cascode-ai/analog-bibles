# 详细步骤 - R193

**思路。** 这是一个折叠式共源共栅（folded cascode）差分级，采用 **PMOS** 输入对管，并且其折叠连接是**交叉**的：$M_1$ 接到右输出，$M_2$ 接到左输出。对两个折叠节点应用基尔霍夫电流定律（KCL）得到共源共栅管的电流，对 $R_D$ 应用欧姆定律得到输出，再利用 PMOS 差分对的大信号（large-signal）电流导引（current steering）得到整条曲线。PMOS 输入和交叉连线共同决定了曲线的符号。

### 第 1 步 — 节点命名与扫描方式

把 $M_1$、$M_2$ 的公共源极节点（由尾电流管 $M_7$ 供电）记为 S；把 $M_1$ 漏极处的节点（与 $M_3$ 及**右侧**共源共栅管 $M_6$ 的源极相连）记为 F1；把 $M_2$ 漏极处的节点（与 $M_4$ 及**左侧**共源共栅管 $M_5$ 的源极相连）记为 F2。$V_{out} = V_{left} - V_{right}$，两者分别取自 $M_5$ 和 $M_6$ 的漏极。

由于 $V_{in2} = 3\ \mathrm{V} - V_{in1}$，输入共模电平（common-mode level）保持在 1.5 V，且 $\Delta V_{in} = V_{in1} - V_{in2} = 2V_{in1} - 3$ V。由对称性，$V_{out}$ 关于 $V_{in1} = 1.5$ V 奇对称。

### 第 2 步 — 对折叠节点列 KCL

首先假设 $I_N \ge I_{SS}$（这是折叠式共源共栅的正常设计），且所有晶体管都饱和。在 F1 点，$M_1$ 注入 $I_{D1}$，$M_3$ 抽走 $I_N$，其余部分由共源共栅管 $M_6$ 提供（$I_{D1} + I_{M6} = I_N$）；F2 点同理：

$$I_{M6} = I_N - I_{D1}, \qquad I_{M5} = I_N - I_{D2}.$$

由于 $I_{D1}, I_{D2} \le I_{SS} \le I_N$，两个共源共栅管的电流始终非负，因此它们永远不会截止。

### 第 3 步 — 输出电压与 $V_{out}$

每个共源共栅管的电流都从 $V_{DD}$ 经 $R_D$ 流入：

$$
\begin{aligned}
V_{left} &= V_{DD} - R_DI_{M5} = V_{DD} - R_D(I_N - I_{D2}),\\
V_{right} &= V_{DD} - R_DI_{M6} = V_{DD} - R_D(I_N - I_{D1}).
\end{aligned}
$$

两式相减：

$$
\begin{aligned}
V_{out} &= V_{left} - V_{right} = -R_D(I_N - I_{D2}) + R_D(I_N - I_{D1})\\
V_{out} &= R_D\,(I_{D2} - I_{D1}).
\end{aligned}
$$

$I_N$ 被消去：恒定的灌电流源只决定输出共模电平。

### 第 4 步 — PMOS 差分对中的电流导引

两个 PMOS 器件共用源极节点 S，因此

$$V_{SG1} - V_{SG2} = (V_S - V_{in1}) - (V_S - V_{in2}) = V_{in2} - V_{in1} = -\Delta V_{in},$$

而且栅极电压**越低**，电流**越大**。于是，利用 $\beta_p = \mu_pC_{ox}(W/L)_{1,2}$ 和 $I_{D1} + I_{D2} = I_{SS}$，标准的平方律（square law）电流导引结果为

$$I_{D1} - I_{D2} = -\frac{\beta_p}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_p} - \Delta V_{in}^2}, \qquad |\Delta V_{in}| \le \sqrt{\frac{2I_{SS}}{\beta_p}}.$$

在此窗口之外，一个器件流过全部 $I_{SS}$：$V_{in1}$ 较低时，$M_1$（栅极接近 0）导通全部电流，$I_{D1} = I_{SS}$，$I_{D2} = 0$；$V_{in1}$ 较高时，$I_{D2} = I_{SS}$，$I_{D1} = 0$。

### 第 5 步 — 传输曲线

把第 4 步代入第 3 步：

$$V_{out} = R_D(I_{D2} - I_{D1}) = R_D\,\frac{\beta_p}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_p} - \Delta V_{in}^2}, \qquad \Delta V_{in} = 2V_{in1} - 3\ \mathrm{V}.$$

**两端电平：** $V_{in1}$ 较低时，$V_{out} = R_D(0 - I_{SS}) = -R_DI_{SS}$；$V_{in1}$ 较高时，$V_{out} = R_D(I_{SS} - 0) = +R_DI_{SS}$。

**中心斜率。** 在 $\Delta V_{in} = 0$ 处，$\dfrac{d(I_{D2} - I_{D1})}{d\Delta V_{in}} = \dfrac{\beta_p}{2}\sqrt{\dfrac{4I_{SS}}{\beta_p}} = \sqrt{\beta_pI_{SS}} = g_{m1}$，即每个输入器件在 $I_{SS}/2$ 下的跨导（transconductance），因此

$$\frac{dV_{out}}{d(V_{in1} - V_{in2})}\bigg|_0 = +g_{m1}R_D, \qquad \frac{dV_{out}}{dV_{in1}}\bigg|_{1.5\ \mathrm{V}} = +2g_{m1}R_D .$$

**为什么是同相的。** 提高 $V_{in1}$ 会**减小** PMOS $M_1$ 的电流，于是流入 F1 的电流减少，右侧共源共栅管 $M_6$ 的电流**增大**（$I_N - I_{D1}$ 增大），右输出**下降**；与此同时 $I_{D2}$ 增大，$M_5$ 的电流减小，左输出**上升**。PMOS 输入、折叠结构和交叉连线共同使 $V_{left} - V_{right}$ 随 $V_{in1}$ 上升。

**小信号验证。** 对差分输入而言，S 是虚地（virtual ground），$M_1$ 的信号电流 $g_{m1}\Delta v_{in}/2$ 流入 F1。$M_3$ 相当于开路，因此该电流全部流入 $M_6$ 的低阻抗源极（$1/g_{m6}$），再流过 $R_D$：每个输出变化 $g_{m1}R_D\Delta v_{in}/2$，与上面的斜率一致。

### 第 6 步 — 数值示例

自由选取 $\beta_p = 2\ \mathrm{mA/V^2}$、$I_{SS} = 200\ \mu$A、$I_N = 300\ \mu$A 和 $R_D = 5\ \mathrm{k}\Omega$：

$$
\begin{aligned}
R_DI_{SS} &= (5\ \mathrm{k}\Omega)(200\ \mu\mathrm{A}) = 1.0\ \mathrm{V},\\
g_{m1} &= \sqrt{\beta_pI_{SS}} = \sqrt{(2\ \mathrm{mA/V^2})(200\ \mu\mathrm{A})} = 0.632\ \mathrm{mS},\\
g_{m1}R_D &= (0.632\ \mathrm{mS})(5\ \mathrm{k}\Omega) = 3.16\quad(6.3\ \text{per volt of } V_{in1}),\\
\sqrt{2I_{SS}/\beta_p} &= \sqrt{\frac{2(200\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 0.447\ \mathrm{V}\ \Rightarrow\ \text{flat outside } 1.276\ \mathrm{V} < V_{in1} < 1.724\ \mathrm{V}.
\end{aligned}
$$

平衡时，$V_{left} = V_{right} = 3 - (5\ \mathrm{k}\Omega)(300 - 100)\ \mu\mathrm{A} = 2.0$ V。$V_{in1}$ 较低时，$V_{left} = 3 - (5\ \mathrm{k}\Omega)(300\ \mu\mathrm{A}) = 1.5$ V，$V_{right} = 3 - (5\ \mathrm{k}\Omega)(100\ \mu\mathrm{A}) = 2.5$ V，因此 $V_{out} = -1.0$ V。当 $V_{in1} = 1.6$ V（$\Delta V_{in} = 0.2$ V）时：

$$V_{out} = (5\ \mathrm{k}\Omega)(1\ \mathrm{mA/V^2})(0.2\ \mathrm{V})\sqrt{0.4 - 0.04}\ \mathrm{V} = (5\ \mathrm{k}\Omega)(120\ \mu\mathrm{A}) = +0.6\ \mathrm{V}.$$

| $V_{in1}$ (V) | $I_{D1}$ (µA) | $I_{D2}$ (µA) | $V_{left}$ (V) | $V_{right}$ (V) | $V_{out}$ (V) |
|---|---|---|---|---|---|
| 0 到 1.276 | 200 | 0 | 1.5 | 2.5 | −1.0 |
| 1.4 | 160 | 40 | 1.7 | 2.3 | −0.6 |
| 1.5 | 100 | 100 | 2.0 | 2.0 | 0 |
| 1.6 | 40 | 160 | 2.3 | 1.7 | +0.6 |
| 1.724 到 3 | 0 | 200 | 2.5 | 1.5 | +1.0 |

### 第 7 步 — 适用条件及其他情况

**电压余度。** 即使在最低输出电压下，共源共栅管也必须保持饱和，即 $V_{DD} - R_DI_N \ge V_{b3} - V_{THN}$，因此 $R_DI_N$ 必须足够小；$M_3$、$M_4$ 和尾电流管 $M_7$ 也必须保持饱和。若导通的 PMOS 输入器件在扫描两端进入线性区，饱和的尾电流管仍迫使其电流为 $I_{SS}$，因此两端电平不变。

**若 $I_{SS}/2 < I_N < I_{SS}$。** 曲线遵循上述公式，直到电流较大的支路达到 $I_N$，此时 $|V_{out}| = R_D(2I_N - I_{SS})$。之后该共源共栅管截止（$I_N - I_{D1} = 0$），输入器件和尾电流管被推入线性区，斜率改变，两端变为 $\pm R_DI_N$。

**若 $I_{SS} > 2I_N$。** 即使在平衡点，每条支路也需要 $I_{SS}/2 > I_N$，因此尾电流管无法流过其标称电流。中心附近两个共源共栅管都截止，形成 $V_{out} = 0$ 的死区，然后曲线才向外移向 $\pm R_DI_N$。

### 结果

$V_{out}$ 是一条以 $V_{in1} = V_{in2} = 1.5$ V 为中心的**同相 S 形曲线**：

$$V_{out} = R_D(I_{D2} - I_{D1}) = R_D\frac{\beta_p}{2}(V_{in1} - V_{in2})\sqrt{\frac{4I_{SS}}{\beta_p} - (V_{in1} - V_{in2})^2}.$$

- 它从 $-R_DI_{SS}$（$V_{in1}$ 较低时）变化到 $+R_DI_{SS}$（$V_{in1}$ 较高时）。
- 对 $V_{in1} - V_{in2}$ 的中心斜率为 $+g_{m1}R_D$（即对 $V_{in1}$ 的斜率为 $2g_{m1}R_D$），其中 $g_{m1} = \sqrt{\beta_pI_{SS}}$。
- 当 $|V_{in1} - V_{in2}| > \sqrt{2I_{SS}/\beta_p}$ 时曲线平坦。

以上假设 $I_N \ge I_{SS}$，且 $M_3$–$M_7$ 有足够的电压余度。当 $I_N < I_{SS}$ 时，两端缩小到 $\pm R_DI_N$（见第 7 步）。

**常见错误。** 画出反相曲线，原因是忽略了 PMOS 输入（提高 $V_{in1}$ 会**降低** $I_{D1}$）或交叉连线（$M_1$ 的电流折叠进入**右侧**共源共栅管）。

**常见错误。** 在正常情况 $I_N \ge I_{SS}$ 下，把两端电平写成 $\pm R_DI_N$。恒定的 $I_N$ 同时出现在两个输出中并相互抵消；$V_{out}$ 中只出现被导引的电流 $I_{SS}$。

**常见错误。** 给出经共源共栅提升的增益，例如 $g_{m1}(R_D \parallel g_{m5}r_{O5}r_{O1})$。在 $\lambda = 0$ 时输出电阻（output resistance）就是 $R_D$，因此斜率为 $g_{m1}R_D$，而两端电平由大信号电流导引决定。
