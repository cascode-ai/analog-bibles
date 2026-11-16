# 详细步骤 - R438

**思路。** X 和 Y 是套筒式（telescopic）第一级的输出端，它们直流耦合到第二级 PMOS 管 $M_9$ 和 $M_{10}$ 的栅极。由于这两个管子各自必须流过 0.5 mA，它们的源栅电压由平方律（square law）确定，从而也就确定了 X 和 Y 处的直流电压。

### 第 1 步 — $M_9$ 流过 0.5 mA 所需的过驱动电压（overdrive voltage）

X 处的电压决定了 $|V_{GS9}| = V_{DD} - V_X$，从而决定了 $M_9$ 的电流。$M_9$ 工作在饱和区（saturation region），并忽略沟道长度调制，则

$$I_{D9} = \frac12\,\mu_pC_{ox}\left(\frac{W}{L}\right)_9|V_{ov9}|^2, \qquad \left(\frac{W}{L}\right)_9 = \frac{100\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 200 ,$$

因此

$$
\begin{aligned}
|V_{ov9}| &= \sqrt{\frac{2I_{D9}}{\mu_pC_{ox}(W/L)_9}}\\
&= \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(200)}}\\
&= \sqrt{\frac{1.0\times10^{-3}\ \mathrm{A}}{7.68\times10^{-3}\ \mathrm{A/V^2}}}\\
&= \sqrt{0.1302\ \mathrm{V^2}}\\
&= 0.361\ \mathrm{V}.
\end{aligned}
$$

### 第 2 步 — $M_9$ 的源栅电压

$M_9$ 的源极和 n 阱都接 $V_{DD}$，因此 $V_{SB} = 0$，不存在体效应：

$$
\begin{aligned}
|V_{GS9}| &= |V_{TH,p}| + |V_{ov9}|\\
&= 0.8\ \mathrm{V} + 0.361\ \mathrm{V}\\
&= 1.161\ \mathrm{V}.
\end{aligned}
$$

### 第 3 步 — X 和 Y 处所需的共模电平

$M_9$ 的栅极接 X，源极接 $V_{DD}$，因此 $|V_{GS9}| = V_{DD} - V_X$：

$$
\begin{aligned}
V_X &= V_{DD} - |V_{GS9}|\\
&= 3\ \mathrm{V} - 1.161\ \mathrm{V}\\
&= 1.839\ \mathrm{V}.
\end{aligned}
$$

$M_{10}$ 与之完全相同，也流过 0.5 mA，因此

$$V_{X,CM} = V_{Y,CM} \approx 1.84\ \mathrm{V}.$$

### 第 4 步 — 第二级电流对该电平的敏感程度

如果 X 低了 50 mV，即位于 1.789 V，则 $|V_{ov9}| = 0.361 + 0.050 = 0.411$ V，且

$$I_{D9} = 0.5\ \mathrm{mA}\times\left(\frac{0.411\ \mathrm{V}}{0.361\ \mathrm{V}}\right)^2 = 0.5\ \mathrm{mA}\times1.296 \approx 0.65\ \mathrm{mA}.$$

50 mV 的误差会使输出级电流改变约 30 %。由于 X 是共源共栅（cascode）级的高阻节点，其直流电平本身并不确定；实际电路中，由共模反馈（common-mode feedback，CMFB）环路把第一级的输出共模电平设定为 $V_{DD} - |V_{GS9}|$。

### 第 5 步 — 对第一级设计的意义

$V_{DD}$ 与 X 之间的 PMOS 共源共栅负载（$M_7$ 叠在 $M_5$ 之上）只有如下电压余度（headroom）：

$$V_{DD} - V_X = |V_{GS9}| = 1.161\ \mathrm{V}$$

因此要求 $|V_{ov7}| + |V_{ov5}| \le 1.161$ V（过驱动电压取几百毫伏即可轻松满足），$V_{b2}$、$V_{b3}$ 也要相应选取。X 以下的 NMOS 共源共栅管和输入对管使用剩下的 1.84 V。该电平由**第二级**决定，第一级要围绕它来设计。

### 结果

$$V_{X,CM} = V_{Y,CM} = V_{DD} - |V_{GS9}| = 3\ \mathrm{V} - \left(0.8\ \mathrm{V} + \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(200)}}\right) = 3 - 1.161 \approx 1.84\ \mathrm{V}.$$

**常见错误。** 用 $W/L = 100$ 代替 $100\ \mu\mathrm{m}/0.5\ \mu\mathrm{m} = 200$。这样过驱动电压变为 $0.51$ V，答案变为 1.69 V，相差 150 mV。

**常见错误。** 以为该电平由 $M_{11}$/$M_{12}$、$V_{b4}$ 或第一级的共源共栅偏置 $V_{b1}$、$V_{b2}$ 决定。这些量只需与之**相容**；该电平由 $M_9$ 必须流过 0.5 mA 这一条件确定。

**常见错误。** 写成 $V_X = V_{DD} - |V_{TH9}| = 2.2$ V，这会使电流为零；必须再加上流过 0.5 mA 所需的 0.36 V 过驱动电压。
