# 详细步骤 - R422

**思路。** 对于差分输入，尾节点 P 是虚地（virtual ground），因此每一边都是一个共源级（common-source stage），其负载为 PMOS 电流源与 NMOS 输出电阻（output resistance）的并联：增益为 $g_{m1}(r_{O1}\parallel r_{O3})$。输出摆幅的上界由 $M_3$/$M_4$ 退出饱和决定，下界由 $M_1$/$M_2$ 退出饱和决定；下界取决于 $M_1$ 的阈值电压（threshold voltage），而体效应会使其升高。

### 第 1 步 — 偏置电流与过驱动电压

1 mA 的尾电流（tail current）平分到两边，$V_b$ 使每个 PMOS 的电流为 $I_{SS}/2$：

$$I_{D1} = I_{D2} = |I_{D3}| = |I_{D4}| = 0.5\ \mathrm{mA}.$$

$$
\begin{aligned}
V_{OD1} &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(100)}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V},\\
|V_{OD3}| &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(100)}} = \sqrt{0.260\ \mathrm{V^2}} = 0.510\ \mathrm{V}.
\end{aligned}
$$

### 第 2 步 — 小信号差分增益

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{13.4\times10^{-6}}\ \mathrm{S} = 3.66\ \mathrm{mS},\\
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega},\qquad
r_{O3} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega},\\
r_{O1}\parallel r_{O3} &= \frac{20\times10}{20 + 10}\ \mathrm{k\Omega} = 6.67\ \mathrm{k\Omega}.
\end{aligned}
$$

尾电流源为理想时，对于 $\pm v_d/2$，P 是虚地，每个输出端看到 $r_{O3}$（$M_3$ 的栅极接固定的 $V_b$）与 $r_{O1}$ 的并联：

$$v_{out1} = -g_{m1}(r_{O1}\parallel r_{O3})\,\frac{v_d}{2},\qquad v_{out2} = +g_{m1}(r_{O1}\parallel r_{O3})\,\frac{v_d}{2} ,$$

$$|A_v| = \frac{|v_{out1} - v_{out2}|}{v_d} = g_{m1}(r_{O1}\parallel r_{O3}) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k\Omega}) = 24.4 .$$

体效应不起作用，因为 $M_1$、$M_2$ 的源极位于虚地。

### 第 3 步 — 每个输出的上限：$M_3$/$M_4$ 的饱和条件

$$V_{DD} - V_{out1} \ge |V_{OD3}|\ \Longrightarrow\ V_{out1} \le V_{DD} - |V_{OD3}| = 3 - 0.510 = 2.49\ \mathrm{V}.$$

（等价地，$V_b = V_{DD} - |V_{GS3}| = 3 - 1.31 = 1.69$ V，上限为 $V_b + |V_{TH3}| = 2.49$ V。）

### 第 4 步 — 每个输出的下限：$M_1$/$M_2$ 的饱和条件

只要 $M_1$ 的漏极电压高于 $V_G - V_{TH}$，它就保持饱和：

$$V_{out1} \ge V_{in,CM} - V_{TH1} .$$

（增益为 24 时，栅极只变化 $V_{out}/24$，因此基本保持在 1.3 V。）

**计入体效应时 $M_1$ 的阈值电压。** 衬底接地，因此 $V_{SB} = V_P$：

$$V_{TH1} = 0.7 + 0.45\left(\sqrt{0.9 + V_P} - \sqrt{0.9}\right),\qquad V_P = V_{in,CM} - V_{TH1} - V_{OD1} = 1.3 - V_{TH1} - 0.273 .$$

从 $V_{TH1} = 0.7$ V 开始迭代：

$$
\begin{aligned}
V_P &= 1.3 - 0.7 - 0.273 = 0.327\ \mathrm{V},\\
V_{TH1} &= 0.7 + 0.45(\sqrt{1.227} - 0.9487) = 0.7 + 0.45(1.1077 - 0.9487) = 0.772\ \mathrm{V},\\
V_P &= 1.3 - 0.772 - 0.273 = 0.255\ \mathrm{V},\\
V_{TH1} &= 0.7 + 0.45(\sqrt{1.155} - 0.9487) = 0.7 + 0.45(1.0747 - 0.9487) = 0.757\ \mathrm{V},\\
V_P &= 1.3 - 0.757 - 0.273 = 0.270\ \mathrm{V},\\
V_{TH1} &= 0.7 + 0.45(\sqrt{1.170} - 0.9487) = 0.7 + 0.45(1.0817 - 0.9487) = 0.760\ \mathrm{V}.
\end{aligned}
$$

收敛于 $V_P \approx 0.27$ V，$V_{TH1} \approx 0.76$ V，因此

$$V_{out,min} = 1.3 - 0.76 = 0.54\ \mathrm{V}$$

（不计体效应时为 0.60 V）。尾电流源是理想的，因此较低的 $V_P$（0.27 V）不会带来进一步的限制。

### 第 5 步 — 最大输出摆幅

$$\text{swing per output} = 2.49 - 0.54 = 1.95\ \mathrm{V_{pp}} .$$

两个输出端反向变化，因此

$$\text{differential swing} = 2\times1.95 \approx 3.9\ \mathrm{V_{pp}} .$$

为了利用整个范围，共模反馈（common-mode feedback）应把输出共模电平设在中点，即约 1.52 V。

### 结果

$$|A_v| = g_{m1}(r_{O1}\parallel r_{O3}) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k\Omega}) \approx 24.4 .$$

每个输出端可以从 $V_{in,CM} - V_{TH1} \approx 0.54$ V（计入体效应，$V_{TH1} \approx 0.76$ V）摆动到 $V_{DD} - |V_{OD3}| \approx 2.49$ V，即每个输出的峰峰值摆幅约为 1.95 V，差分峰峰值摆幅约为 3.9 V（若忽略体效应，则分别为 1.89 V 和 3.78 V）。

**常见错误。** 用 $V_{DD} - |V_{GS3}|$ 或 $V_{in,CM} - V_{GS1}$ 作为摆幅的界限。饱和边缘由 PMOS 的**过驱动电压**和 NMOS 的**阈值电压**决定，而不是由完整的栅源电压决定。

**常见错误。** 计算下限时忽略体效应。$M_1$ 的源极比其衬底高约 0.27 V，这使 $V_{TH1}$ 升高到约 0.76 V，使每个输出损失约 60 mV 的摆幅。

**常见错误。** 只用 $r_{O1}$ 或 $r_{O3}$ 计算增益。两者都把输出端接到交流地，因此它们是并联的。
