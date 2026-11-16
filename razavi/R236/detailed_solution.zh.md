# 详细步骤 - R236

**思路。** 把 $V_P$ 的变化看作加在共源共栅管 $M_3$ 漏极上的小信号，$V_b$ 和 $M_2$ 的栅极都为交流地。节点 Y 经 $M_3$ 由 P 驱动，并以 $r_{O2}$ 为负载；对 Y 点应用基尔霍夫电流定律（KCL）即可得到衰减 $\Delta V_Y/\Delta V_P \approx 1/(g_{m3}r_{O3})$，这就是共源共栅结构所提供的“屏蔽”作用。

### 第 1 步 — 偏置与小信号参数

三个晶体管的 $W/L = 40/0.5 = 80$，电流都约为 $I_{REF} = 0.3$ mA；$\gamma = 0$。

$$g_{m3} = \sqrt{2(134\ \mu\mathrm{A/V^2})(80)(0.3\ \mathrm{mA})} = \sqrt{6.432\times10^{-6}}\ \mathrm{A/V} = 2.54\ \mathrm{mS} ,$$

$$r_{O2} = r_{O3} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.3\ \mathrm{mA})} = 33.3\ \mathrm{k}\Omega, \qquad g_{m3}r_{O3} = (2.54\ \mathrm{mS})(33.3\ \mathrm{k}\Omega) = 84.5 .$$

### 第 2 步 — 小信号电路

$M_2$ 的栅极保持在 $V_X$，该电压不受 P 的影响，因此 $M_2$ 简化为从 Y 接到地的 $r_{O2}$。$M_3$ 的栅极为交流地，因此 $v_{gs3} = -v_Y$，$M_3$ 等效为从 P 流向 Y 的 $g_{m3}v_{gs3}$ 与 $r_{O3}$ 并联。外部模拟电路强制 $v_P = \Delta V_P$。

<!-- diagram: diagram-01.cir -->

### 第 3 步 — 对节点 Y 列 KCL

向下流过 $M_3$ 的电流等于流入 $r_{O2}$ 的电流：

$$\underbrace{g_{m3}(-v_Y) + \frac{v_P - v_Y}{r_{O3}}}_{\text{through } M_3} = \underbrace{\frac{v_Y}{r_{O2}}}_{\text{through } r_{O2}} .$$

合并同类项，再乘以 $r_{O3}r_{O2}$：

$$\frac{v_P}{r_{O3}} = v_Y\left(g_{m3} + \frac{1}{r_{O3}} + \frac{1}{r_{O2}}\right) \quad\Longrightarrow\quad v_Pr_{O2} = v_Y\left(g_{m3}r_{O3}r_{O2} + r_{O2} + r_{O3}\right) ,$$

$$\frac{v_Y}{v_P} = \frac{r_{O2}}{r_{O2} + r_{O3} + g_{m3}r_{O3}r_{O2}} ,$$

当 $r_{O2} = r_{O3} = r_O$ 时，

$$\frac{v_Y}{v_P} = \frac{1}{2 + g_{m3}r_O} .$$

Y 点一开始上升，$v_{gs3}$ 就变为负值，$M_3$ 的受控源便抵消了 P 点变化经 $r_{O3}$ 驱动的几乎全部电流：一个“反向”驱动（从漏极到源极）的共栅级（common-gate stage），其增益非常小。

### 第 4 步 — 数值

$$\frac{\Delta V_Y}{\Delta V_P} = \frac{1}{2 + 84.5} = \frac{1}{86.5} = 0.0116 ,$$

因此当 $\Delta V_P = 1$ V 时，

$$\Delta V_Y = \frac{1\ \mathrm{V}}{86.5} = 11.6\ \mathrm{mV},$$

与 $\Delta V_P$ **同方向**。估算式 $\Delta V_P/(g_{m3}r_{O3}) = 1\ \mathrm{V}/84.5 = 11.8$ mV 给出的结果基本相同。

### 第 5 步 — 用共源共栅结构的输出电阻（output resistance）交叉验证

$$\Delta I_{out} = \frac{\Delta V_Y}{r_{O2}} = \frac{11.6\ \mathrm{mV}}{33.3\ \mathrm{k}\Omega} = 0.35\ \mu\mathrm{A} ,$$

这与 $R_{out} = r_{O3} + r_{O2} + g_{m3}r_{O3}r_{O2} = 33.3\ \mathrm{k}\Omega\times(2 + 84.5) = 2.88\ \mathrm{M}\Omega$ 一致：$1\ \mathrm{V}/2.88\ \mathrm{M}\Omega = 0.35\ \mu$A ✓。若没有共源共栅管，整个 1 V 都加在 $r_{O2}$ 上，电流会变化 $1\ \mathrm{V}/33.3\ \mathrm{k}\Omega = 30\ \mu$A（10 %）；有了共源共栅管，$M_2$ 只看到 11.6 mV，电流变化约 0.1 %。

### 结果

$$\frac{\Delta V_Y}{\Delta V_P} = \frac{r_{O2}}{r_{O2} + r_{O3} + g_{m3}r_{O3}r_{O2}} = \frac{1}{2 + g_{m3}r_{O3}} = \frac{1}{86.5},$$

其中 $g_{m3} = 2.54$ mS，$r_{O2} = r_{O3} = 33.3\ \mathrm{k}\Omega$。因此 $V_P$ 变化 1 V 时，$V_Y$ 变化**约 12 mV（11.6 mV）**，且方向相同。

**常见错误。** 让 $V_Y$ 跟随 $V_P$（1 V），或者把变化量在两个相等的电阻之间平分（0.5 V）。这相当于把 $M_3$ 当成单纯的电阻 $r_{O3}$，忽略了使变化衰减 $\approx g_mr_O$ 倍的受控源。

**常见错误。** 断言 $V_Y$ 完全不变。正是非零的 $\Delta V_Y$ 产生了微小的电流变化 $\Delta V_Y/r_{O2}$，也就是共源共栅结构的有限输出电阻。

**常见错误。** 按 $(g_mr_O)^2$ 衰减（≈ 0.14 mV）。从 P 到 Y 的路径只经过一个共源共栅管，因此衰减只有一个约为 $g_mr_O$ 的因子。
