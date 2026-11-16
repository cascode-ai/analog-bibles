# 详细步骤 - R408

**思路。** 所需的 $V_{in}$ 等于 $M_1$ 的源极电压加上其 $V_{GS}$。源极电压由网络 $R_{S1}$–$R_F$–$R_{D2}$ 的 KCL 求出，$M_1$ 和 $M_3$ 各向该网络注入 0.5 mA；$V_{GS1}$ 由平方律（square law）求出，其中阈值电压（threshold voltage）因体效应而升高。

### 第 1 步 — 电阻网络的 KCL

把 $M_1$ 的源极记为节点 S。$M_3$ 的栅极不取电流，因此 $I_{D1} = |I_{D2}| = 0.5$ mA 由 $M_1$ 流入 S，$|I_{D3}| = 0.5$ mA 由 $M_3$ 流入 $V_{out}$ 节点。以 mA、kΩ 和 V 为单位，设 $I_F = (V_{out} - V_S)/R_F$ 从 $V_{out}$ 流向 S：

**$V_{out}$ 节点的 KCL**（来自 $M_3$ 的 0.5 mA 经 $R_{D2}$ 和 $R_F$ 流出）：

$$
\begin{aligned}
0.5 &= \frac{V_{out}}{3} + \frac{V_{out} - V_S}{3}\\
1.5 &= 2V_{out} - V_S .
\end{aligned}
$$

**节点 S 的 KCL**（来自 $M_1$ 的 0.5 mA 加上 $I_F$ 经 $R_{S1}$ 流出）：

$$
\begin{aligned}
0.5 + \frac{V_{out} - V_S}{3} &= \frac{V_S}{3}\\
1.5 + V_{out} - V_S &= V_S\\
V_{out} &= 2V_S - 1.5 .
\end{aligned}
$$

**求解：**

$$
\begin{aligned}
1.5 &= 2(2V_S - 1.5) - V_S = 3V_S - 3\\
V_S &= \frac{4.5}{3} = 1.5\ \mathrm{V},\\
V_{out} &= 2(1.5) - 1.5 = 1.5\ \mathrm{V},\\
I_F &= \frac{1.5 - 1.5}{3} = 0 .
\end{aligned}
$$

该网络是对称的：每个节点都注入 0.5 mA，且都有 3 kΩ 的对地电阻，因此两个节点都处于 $0.5\ \mathrm{mA}\times3\ \mathrm{k\Omega} = 1.5$ V，$R_F$ 中没有电流。

### 第 2 步 — 计入体效应时 $M_1$ 的阈值电压

$M_1$ 的衬底接地，因此 $V_{SB1} = V_S - 0 = 1.5$ V，于是

$$
\begin{aligned}
V_{TH1} &= V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB1}} - \sqrt{2|\phi_F|}\right)\\
&= 0.7 + 0.45\left(\sqrt{0.9 + 1.5} - \sqrt{0.9}\right)\ \mathrm{V}\\
&= 0.7 + 0.45\,(1.5492 - 0.9487)\ \mathrm{V}\\
&= 0.7 + 0.45\times0.6005\ \mathrm{V} = 0.7 + 0.270\ \mathrm{V} = 0.970\ \mathrm{V}.
\end{aligned}
$$

### 第 3 步 — $M_1$ 的栅源电压

$M_1$ 工作在饱和区（按题意，忽略 $\lambda$），且 $\mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(50/0.5) = 13.4\ \mathrm{mA/V^2}$：

$$
\begin{aligned}
V_{GS1} - V_{TH1} &= \sqrt{\frac{2I_{D1}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V},\\
V_{GS1} &= 0.970\ \mathrm{V} + 0.273\ \mathrm{V} = 1.243\ \mathrm{V}.
\end{aligned}
$$

### 第 4 步 — 输入偏置电压

$$V_{in} = V_S + V_{GS1} = 1.5\ \mathrm{V} + 1.243\ \mathrm{V} = 2.74\ \mathrm{V}.$$

若忽略体效应（$V_{TH1} = 0.7$ V），将得到 $V_{in} = 1.5 + 0.7 + 0.273 = 2.47$ V，偏低 0.27 V。

### 第 5 步 — 检验饱和假设

节点 X 是 $M_3$ 的栅极，因此 $V_X = V_{DD} - |V_{GS3}|$。题目没有给出 PMOS 参数；采用同一套器件参数中的值（$\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$，$|V_{THP}| = 0.8$ V）：

$$
\begin{aligned}
|V_{GS3}| &= 0.8 + \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(100)}} = 0.8 + \sqrt{0.260}\ \mathrm{V} = 0.8 + 0.510 = 1.310\ \mathrm{V},\\
V_X &= 3 - 1.310 = 1.690\ \mathrm{V},\\
V_{DS1} &= V_X - V_S = 1.690 - 1.5 = 0.19\ \mathrm{V}.
\end{aligned}
$$

饱和要求 $V_{DS1} \ge V_{GS1} - V_{TH1} = 0.273$ V，因此 $M_1$ 实际上处于线性区边缘（差约 0.08 V）；这里仍保留题目给定的饱和假设。（实际设计中会降低 $V_S$ 或加宽 $M_3$。）$M_3$ 处于饱和区：$|V_{DS3}| = 3 - 1.5 = 1.5\ \mathrm{V} > 0.51$ V。

### 结果

$V_S = V_{out} = 1.5$ V（$R_F$ 中没有电流），由于体效应，$V_{TH1} = 0.97$ V，$V_{GS1} = 1.243$ V，因此

$$V_{in} \approx 2.74\ \mathrm{V}$$

（若忽略体效应则为 2.47 V）。采用典型的 PMOS 参数时，$V_{DS1} \approx 0.19$ V，略低于 0.27 V 的过驱动电压，因此 $M_1$ 处于临界状态；这里仍保留题目的饱和假设。

**常见错误。** 认为 $R_F$ 中有电流，或者把 $M_1$ 的源极当作接地（这会得到 $V_{in} \approx 1$ V）。向相等的 3 kΩ 电阻注入相等的 0.5 mA 电流，使两个节点都处于 1.5 V。

**常见错误。** 忘记体效应：$V_{SB} = 1.5$ V 使 $V_{TH}$ 从 0.7 V 升高到 0.97 V，忽略它会使 $V_{in}$ 低估 0.27 V。

**常见错误。** 从节点 X 出发计算 $V_{in}$。X 是 $M_1$ 的**漏极**；$V_{in}$ 由 $M_1$ 的源极电压加上其 $V_{GS}$ 决定。
