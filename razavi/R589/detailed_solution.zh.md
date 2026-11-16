# 详细步骤 - R589

**思路。** 在每个输出端，若漏极电压过低，输入 NMOS（$M_1$ 或 $M_2$）会退出饱和区；若漏极电压过高，PMOS 负载（$M_3$ 或 $M_4$）会退出饱和区。求这些极限需要知道过驱动电压（overdrive voltage）、放大期间输入对管的栅极电压（由复位和电荷守恒决定），以及尾节点电压，其中要考虑 $M_1$、$M_2$ 的体效应。

### 第 1 步 — 偏置电流与过驱动电压

尾电流平均分配，而共模反馈使每个 PMOS 负载流过相同的电流：

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = \frac{1\ \mathrm{mA}}{2} = 0.5\ \mathrm{mA}.$$

由 $W/L = 50/0.5 = 100$ 以及 $V_{ov} = \sqrt{2I_D/(\mu C_{ox}W/L)}$：

$$V_{ov1} = \sqrt{\frac{2(0.5\times10^{-3}\ \mathrm{A})}{(134\times10^{-6}\ \mathrm{A/V^2})(100)}} = \sqrt{\frac{10^{-3}}{0.0134}}\ \mathrm{V} = \sqrt{0.0746}\ \mathrm{V} = 0.273\ \mathrm{V},$$

$$|V_{ov3}| = \sqrt{\frac{2(0.5\times10^{-3}\ \mathrm{A})}{(38.4\times10^{-6}\ \mathrm{A/V^2})(100)}} = \sqrt{\frac{10^{-3}}{0.00384}}\ \mathrm{V} = \sqrt{0.2604}\ \mathrm{V} = 0.510\ \mathrm{V}.$$

PMOS 需要的过驱动电压几乎是 NMOS 的两倍，因为其迁移率（mobility）约低 3.5 倍。

### 第 2 步 — 放大期间输入对管的栅极电压

**复位。** 跨接在 $C_3$ 两端的开关把 $M_1$ 的栅极与其漏极短接（$M_2$ 同理），而共模反馈把输出共模电平保持在 1.5 V，因此

$$V_{G1} = V_{G2} = V_{out,CM} = 1.5\ \mathrm{V}.$$

**放大。** 开关断开，各栅极节点浮空，因此其电荷守恒。对于 $M_1$，在复位结束时（$C_1$ 的左极板处于 $V_{in1}$）：

$$Q = C_1(1.5 - V_{in1}) + C_3(1.5 - 1.5) = C_1(1.5 - V_{in1}).$$

放大期间（左极板处于 $V_{CM}$，栅极处于 $V_G'$，输出处于 $V_{out1}'$）：

$$Q = C_1(V_G' - V_{CM}) + C_3(V_G' - V_{out1}').$$

1. **差模部分。** 稳态时没有电流流过电容，因此 $M_1$ 和 $M_2$ 又各自流过 $I_{SS}/2$；匹配器件中电流相等就要求 $V_{GS}$ 相等，因此 $V_{G1}' = V_{G2}'$：两个栅极构成差分**虚地**，全部差分信号都出现在输出端。
2. **共模部分。** 对两侧的电荷方程取平均，其中 $V_{out,CM}' = 1.5$ V 由共模反馈维持：

$$
\begin{aligned}
C_1(1.5 - V_{in,CM}) &= C_1(V_G' - V_{CM}) + C_3(V_G' - 1.5)\\
(C_1 + C_3)\,V_G' &= C_1(1.5 + V_{CM} - V_{in,CM}) + 1.5\,C_3\\
V_G' &= 1.5\ \mathrm{V} + \frac{C_1}{C_1 + C_3}\,(V_{CM} - V_{in,CM}).
\end{aligned}
$$

按照通常的假设，即采样得到的输入共模电平等于 $V_{CM}$，第二项为零：

$$V_{G1} = V_{G2} = 1.5\ \mathrm{V}\quad\text{throughout amplification}.$$

### 第 3 步 — 尾节点电压与计入体效应的 $V_{TH}$

在尾节点 P，

$$V_P = V_G - V_{GS1} = 1.5 - V_{TH1} - V_{ov1} = 1.5 - V_{TH1} - 0.273,$$

且由于 $V_{SB} = V_P$（衬底接地），

$$V_{TH1} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_P} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_P} - 0.9487\right).$$

令 $u = \sqrt{0.9 + V_P}$，则 $V_P = u^2 - 0.9$，且 $0.45 \times 0.9487 = 0.4269$：

$$
\begin{aligned}
u^2 - 0.9 &= 1.5 - 0.273 - 0.7 - 0.45u + 0.4269\\
u^2 - 0.9 &= 0.9537 - 0.45u\\
u^2 + 0.45u - 1.8537 &= 0.
\end{aligned}
$$

取正根：

$$
\begin{aligned}
u &= \frac{-0.45 + \sqrt{0.45^2 + 4(1.8537)}}{2} = \frac{-0.45 + \sqrt{7.6174}}{2} = \frac{-0.45 + 2.7600}{2} = 1.1550,\\
V_P &= u^2 - 0.9 = 1.3340 - 0.9 = 0.434\ \mathrm{V},\\
V_{TH1} &= 0.7 + 0.45(1.1550 - 0.9487) = 0.7 + 0.0928 = 0.793\ \mathrm{V}.
\end{aligned}
$$

验证：$V_P = 1.5 - 0.793 - 0.273 = 0.434$ V。✓ 体效应使阈值电压（threshold voltage）升高了 93 mV。放大期间栅极电压和电流都保持不变，因此在输出摆动时 $V_P$ 和 $V_{TH1}$ 保持上述值。

### 第 4 步 — 每个输出的下限（$M_1$、$M_2$ 处于饱和区）

只要漏极比栅极低不超过一个阈值电压，即 $V_D \ge V_G - V_{TH1}$，$M_1$ 就处于饱和区：

$$V_{out,min} = V_G - V_{TH1} = 1.5\ \mathrm{V} - 0.793\ \mathrm{V} = 0.707\ \mathrm{V}$$

（若不计体效应，则为 $1.5 - 0.7 = 0.8$ V）。

### 第 5 步 — 每个输出的上限（$M_3$、$M_4$ 处于饱和区）

PMOS 的源极和衬底都接 $V_{DD} = 3$ V（无体效应），饱和要求 $V_{SD} \ge |V_{ov3}|$：

$$
\begin{aligned}
V_{DD} - V_{out} &\ge |V_{ov3}|\\
V_{out,max} &= V_{DD} - |V_{ov3}| = 3\ \mathrm{V} - 0.510\ \mathrm{V} = 2.49\ \mathrm{V}.
\end{aligned}
$$

### 第 6 步 — 允许的摆幅

每个输出可在 0.707 V 与 2.49 V 之间变化。围绕 1.5 V 的共模电平：

$$
\begin{aligned}
\text{room downward} &= 1.5 - 0.707 = 0.793\ \mathrm{V},\\
\text{room upward} &= 2.49 - 1.5 = 0.99\ \mathrm{V}.
\end{aligned}
$$

两个输出以相等的幅度反向变化，因此较小的**向下**余量限制了摆幅：

$$
\begin{aligned}
\text{per output:}&\quad 1.5\ \mathrm{V} \pm 0.79\ \mathrm{V}\ \ (0.71\ \text{to}\ 2.29\ \mathrm{V}),\\
\text{differential peak:}&\quad V_{out1} - V_{out2} = \pm 2\times0.793\ \mathrm{V} = \pm1.59\ \mathrm{V},\\
\text{differential peak-to-peak:}&\quad 2\times1.59\ \mathrm{V} \approx 3.2\ \mathrm{V}.
\end{aligned}
$$

由于复位把栅极置于输出共模电平，漏极在该电平以下只有一个阈值电压的余量。若不计体效应，极限将为每侧 $\pm0.7$ V，即差分峰峰值 2.8 V。

### 结果

每个输出必须保持在 $V_G - V_{TH1} \approx 0.71$ V（计入体效应，$V_P = 0.43$ V 时 $V_{TH1} = 0.79$ V）与 $V_{DD} - |V_{ov3}| \approx 2.49$ V 之间。共模电平为 1.5 V 时，下限起决定作用：

$$\text{maximum swing} \approx \pm0.79\ \mathrm{V}\ \text{per output} \;\Longleftrightarrow\; \approx \pm1.59\ \mathrm{V}\ \text{differential peak}\ (\approx 3.2\ \mathrm{V}\ \text{peak-to-peak differential}).$$

**常见错误。** 把 $M_1$、$M_2$ 的栅极电压假设为 1.5 V 以外的值（例如 $V_{CM}$，或认为稳态时栅极经 $C_3$/$C_1$ 分压器跟随输出变化）。复位把栅极设置在 1.5 V 的输出共模电平，电荷守恒使其共模电平保持不变，而两支路电流相等使栅极成为差分虚地。

**常见错误。** 忽略体效应。$M_1$ 的源极比其接地的衬底高 0.43 V，这使 $V_{TH}$ 升高到 0.79 V，并使最低输出降低到 0.71 V；若取 $V_{TH} = 0.7$ V，只能得到 $\pm0.7$ V。

**常见错误。** 对 PMOS 负载使用 NMOS 参数（取 $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$ 时 PMOS 的过驱动电压为 0.51 V），或者给出轨到轨（rail-to-rail）的范围：每条支路中的两个晶体管都必须保持饱和，因此输出远远达不到 0 V 或 3 V。
