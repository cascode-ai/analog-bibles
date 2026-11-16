# 详细步骤 - R450

**思路。** 1 V 的阶跃远远超出差分对的线性输入范围，因此响应以**压摆**开始：$M_2$ 截止，$M_1$ 获得全部 $I_{SS}$，电流镜（current mirror）向电容分压器注入恒定电流，因此 X 线性上升。一旦 $V_{in} - V_X$ 到达线性范围的边缘，$M_2$ 就导通，其电流开始增长。需要计算：(1) 直到 $M_2$ 导通的压摆时间；(2) 由差分对的大信号（large-signal）特性求出 $I_{D2}$ 达到 $0.1I_{SS}$ 还需的额外时间。

### 第 1 步 — 初始状态：$M_2$ 截止

阶跃之前 $V_{in} = V_X$，因此

$$I_{D1} = I_{D2} = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}.$$

X 不能跳变，因为分压器上端的 $V_{out}$ 只能以有限电流给电容充电的速度变化，所以在 $t = 0^+$ 时

$$\Delta V \equiv V_{in} - V_X = 1\ \mathrm{V}.$$

令 $k \equiv \mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100/0.5) = 0.0268\ \mathrm{A/V^2}$，当 $|\Delta V|$ 超过下值时，一个器件就会获得全部尾电流（tail current）：

$$\Delta V_{max} = \sqrt{\frac{2I_{SS}}{k}} = \sqrt{\frac{2\,(1\ \mathrm{mA})}{0.0268\ \mathrm{A/V^2}}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V}.$$

由于 $1\ \mathrm{V} > 0.273$ V：

$$I_{D1} = I_{SS} = 1\ \mathrm{mA}, \qquad I_{D2} = 0 .$$

### 第 2 步 — 压摆：X 上升有多快

$M_4$ 把 $I_{D1} = 1$ mA 镜像到输出端，而 $M_2$ 截止，因此这一电流全部流入串联的 $C_1$ 与 $C_2$：

$$C_s = \frac{C_1C_2}{C_1 + C_2} = 0.25\ \mathrm{pF}, \qquad \frac{dV_{out}}{dt} = \frac{I_{SS}}{C_s} = \frac{1\ \mathrm{mA}}{0.25\ \mathrm{pF}} = 4\ \mathrm{V/ns}.$$

同一电流经 $C_1$ 流入 X，再流过 $C_2$，因此

$$\frac{dV_X}{dt} = \frac{I_{SS}}{C_2} = \frac{1\ \mathrm{mA}}{0.5\ \mathrm{pF}} = 2\ \mathrm{V/ns}$$

（等价地，也可写成 $\beta\,dV_{out}/dt$，其中 $\beta = C_1/(C_1 + C_2) = 0.5$）。

### 第 3 步 — 直到 $M_2$ 导通的时间

$V_{in}$ 保持不变，因此随着 X 上升，$\Delta V$ 减小。当 $\Delta V$ 从 1 V 降到 0.273 V，即 X 上升了 $1 - 0.273 = 0.727$ V 时，$M_2$ 导通：

$$t_1 = \frac{1\ \mathrm{V} - 0.273\ \mathrm{V}}{2\ \mathrm{V/ns}} = 0.363\ \mathrm{ns}.$$

在此期间，输出上升了 $4\ \mathrm{V/ns}\times0.363\ \mathrm{ns} = 1.45$ V（按题设，$M_4$ 保持饱和）。

### 第 4 步 — 使 $I_{D2} = 0.1I_{SS}$ 的 $\Delta V$ 值

目标是 $I_{D2} = 0.1$ mA，因此 $I_{D1} = I_{SS} - I_{D2} = 0.9$ mA。两个器件共用源极节点，阈值电压（threshold voltage）也相同，因此 $\Delta V = V_{ov1} - V_{ov2}$，其中 $V_{ov} = \sqrt{2I_D/k}$：

$$
\begin{aligned}
V_{ov1} &= \sqrt{\frac{2\,(0.9\ \mathrm{mA})}{0.0268\ \mathrm{A/V^2}}} = \sqrt{0.0672}\ \mathrm{V} = 0.259\ \mathrm{V},\\
V_{ov2} &= \sqrt{\frac{2\,(0.1\ \mathrm{mA})}{0.0268\ \mathrm{A/V^2}}} = \sqrt{0.00746}\ \mathrm{V} = 0.086\ \mathrm{V},\\
\Delta V &= 0.259\ \mathrm{V} - 0.086\ \mathrm{V} = 0.173\ \mathrm{V}.
\end{aligned}
$$

用差分对的特性验证：

$$I_{D1} - I_{D2} = \frac{k}{2}\,\Delta V\sqrt{\frac{4I_{SS}}{k} - \Delta V^2} ;$$

取 $\Delta V = 0.173$ V，$4I_{SS}/k = 0.1493\ \mathrm{V^2}$，得 $0.0134\times0.173\times\sqrt{0.1493 - 0.0299} = 0.0134\times0.173\times0.3455 = 0.80$ mA $= 0.9 - 0.1$ mA。✓

### 第 5 步 — 从 $M_2$ 导通到 $I_{D2} = 0.1I_{SS}$ 的时间

此时电流镜提供 $I_{D4} = I_{D1}$，而 $M_2$ 抽走 $I_{D2}$，因此流入电容的净电流为 $I_{D1} - I_{D2}$：

$$\frac{dV_X}{dt} = \frac{I_{D1} - I_{D2}}{C_2}, \qquad \frac{d\Delta V}{dt} = -\frac{I_{D1} - I_{D2}}{C_2}.$$

在 $\Delta V$ 从 0.273 V 降到 0.173 V 的过程中积分：

$$t_2 = C_2\int_{0.173}^{0.273}\frac{d\Delta V}{I_{D1} - I_{D2}} = \frac{C_2}{k/2}\int_{x_1}^{x_2}\frac{dx}{x\sqrt{a - x^2}},$$

其中 $a = 4I_{SS}/k = 0.1493\ \mathrm{V^2}$（$\sqrt a = 0.3863$ V），$x_1 = 0.173$ V，$x_2 = 0.273$ V。原函数为

$$\int\frac{dx}{x\sqrt{a - x^2}} = -\frac{1}{\sqrt a}\ln\frac{\sqrt a + \sqrt{a - x^2}}{x},$$

并且

$$
\begin{aligned}
x_2 = 0.273:&\quad \frac{0.3863 + \sqrt{0.1493 - 0.0746}}{0.273} = \frac{0.3863 + 0.2732}{0.2732} = 2.414,\quad \ln 2.414 = 0.881,\\
x_1 = 0.173:&\quad \frac{0.3863 + \sqrt{0.1493 - 0.0299}}{0.173} = \frac{0.3863 + 0.3455}{0.1728} = 4.236,\quad \ln 4.236 = 1.444 .
\end{aligned}
$$

因此积分值为 $(1.444 - 0.881)/0.3863 = 1.455\ \mathrm{V^{-1}}$，从而

$$t_2 = \frac{0.5\ \mathrm{pF}}{0.0134\ \mathrm{A/V^2}}\times1.455\ \mathrm{V^{-1}} = (3.73\times10^{-11}\ \mathrm{s\cdot V})(1.455\ \mathrm{V^{-1}}) = 5.4\times10^{-11}\ \mathrm{s} \approx 0.054\ \mathrm{ns}.$$

验证：在这一阶段，净电流只从 1 mA 降到 0.8 mA；若电流恒为 1 mA，得 $t_2 = C_2(0.1\ \mathrm{V})/(1\ \mathrm{mA}) = 0.050$ ns，若恒为 0.8 mA，则得 0.0625 ns，两者恰好把 0.054 ns 夹在中间。

### 第 6 步 — 总时间

$$t = t_1 + t_2 = 0.363\ \mathrm{ns} + 0.054\ \mathrm{ns} \approx 0.42\ \mathrm{ns}.$$

| 阶段 | $\Delta V = V_{in} - V_X$ | $I_{D2}$ | 流入 $C_1$–$C_2$ 的电流 | 持续时间 |
|---|---|---|---|---|
| 压摆 | 1 V → 0.273 V | 0 | 1 mA（恒定） | 0.363 ns |
| $M_2$ 导通过程 | 0.273 V → 0.173 V | 0 → 0.1 mA | 1 mA → 0.8 mA | 0.054 ns |

### 结果

阶跃后约 **0.42 ns**，$I_{D2}$ 达到 $0.1I_{SS}$：其中约 0.36 ns 为压摆过程（$M_2$ 截止，$I_{SS}$ 给串联的 $C_1$–$C_2$ 充电，X 以 $I_{SS}/C_2 = 2$ V/ns 的速率上升，直到 $V_{in} - V_X = 0.273$ V），另外约 0.05 ns 为 $M_2$ 导通、电流增长到 0.1 mA 的过程（此时 $V_{in} - V_X = 0.173$ V）。

**常见错误。** 用小信号（指数型）建立过程来处理 1 V 的阶跃。线性范围只有 $\sqrt{2I_{SS}/k} = 0.27$ V 的差分对会被完全切换，因此响应以恒流斜坡开始，在最初的 0.36 ns 内 $M_2$ 一直截止。

**常见错误。** 对 X 使用 $I_{SS}/(C_1 + C_2) = 1$ V/ns 或输出端的斜率 4 V/ns，这会得到约 0.8 ns 或 0.2 ns。电流是**依次流过**串联的 $C_1$ 和 $C_2$ 的，因此 X 以 $I_{SS}/C_2 = 2$ V/ns 的速率上升。

**常见错误。** 在 $M_2$ 刚导通时（0.36 ns）就停止计算，而此时 $I_{D2} = 0$；$\Delta V$ 还必须进一步降到 0.173 V。
