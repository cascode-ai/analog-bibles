# 详细步骤 - R492

**思路。** 在大的差分输入下，尾电流（tail current）$I_{SS}$ 全部导向一个输入管。每个密勒电容（Miller capacitance）$C_C$ 都跨接在一个反相的第二级两端，因此 X 和 Y 几乎不动（虚地），第一级无法平衡的电流都必须流过 $C_C$。由 X 和 Y 处的基尔霍夫电流定律（KCL）可求出该电流，输出以（电流）/$C_C$ 的斜率变化；最后再验证第二级能提供这一斜坡所需的电流。

### 第 1 步 — 为什么压摆期间 X 和 Y（几乎）保持不变

栅漏之间接有 $C_C$ 的 $M_5$ 构成一个密勒积分器（Miller integrator）：$C_C$ 在反相的第二级周围形成局部负反馈环路，$V_X$ 只需变化很小的量来调整 $M_5$ 的电流，而该电流的变化也不大（见第 4 步）。因此与输出端每纳秒数伏的变化相比，$dV_X/dt$ 可以忽略。X 没有其他电容，所以 X 处任何电流失衡都必须流过 $C_C$；Y 处也是如此。于是从输出端经 $C_C$ 流向 X 的电流为

$$i_{C1} = C_C\frac{d(V_{out1} - V_X)}{dt} \approx C_C\frac{dV_{out1}}{dt}.$$

### 第 2 步 — 差分对完全切换时 X 和 Y 处的 KCL

设大的正差分输入使 $M_1$ 完全导通、$M_2$ 截止：$I_{D1} = I_{SS}$，$I_{D2} = 0$，而 $M_3$ 和 $M_4$ 仍各自提供恒定的 $I_{SS}/2 = 0.125$ mA。

**节点 X。** $I_{SS}/2$ 从 $M_3$ 流入，$i_{C1}$ 从 $V_{out1}$ 经 $C_C$ 流入；$I_{D1} = I_{SS}$ 经 $M_1$ 流出：

$$
\begin{aligned}
\frac{I_{SS}}{2} + i_{C1} &= I_{SS}\\
i_{C1} &= \frac{I_{SS}}{2} ,
\end{aligned}
$$

因此

$$C_C\frac{dV_{out1}}{dt} = \frac{I_{SS}}{2} \quad\Longrightarrow\quad \frac{dV_{out1}}{dt} = +\frac{I_{SS}}{2C_C}.$$

$V_{out1}$ 上升：X 有下降的趋势，反相的第二级于是把 $V_{out1}$ 推高。

**节点 Y。** $M_4$ 仍向 Y 注入 $I_{SS}/2$，但 $M_2$ 截止，因此这一电流只能经 $C_C$ 流向 $V_{out2}$：

$$C_C\frac{d(V_Y - V_{out2})}{dt} = \frac{I_{SS}}{2} \quad\Longrightarrow\quad \frac{dV_{out2}}{dt} = -\frac{I_{SS}}{2C_C}.$$

输入极性相反时，两侧的情况互换。每个 $C_C$ 只由输入管电流与恒定负载电流之**差**充电，最大为 $I_{SS}/2$。这与采用电流镜（current mirror）负载的单端两级运放不同：后者的一个 $C_C$ 会得到全部 $I_{SS}$。

### 第 3 步 — 数值计算

每个输出：

$$SR = \frac{I_{SS}/2}{C_C} = \frac{0.125\ \mathrm{mA}}{0.9\ \mathrm{pF}} = 0.139\times10^9\ \mathrm{V/s} = 0.139\ \mathrm{V/ns} \approx 139\ \mathrm{V/\mu s}.$$

两个输出反向变化，因此差分输出的压摆速度是其两倍：

$$SR_{diff} = 2\times0.139\ \mathrm{V/ns} = 0.278\ \mathrm{V/ns} \approx 278\ \mathrm{V/\mu s} \;\left(= \frac{I_{SS}}{C_C}\right).$$

### 第 4 步 — 输出级够快吗？

当输出以 $SR = 0.139$ V/ns 的斜率变化时，第二级必须为 $C_L$ 和 $C_C$ 提供电流：

$$
\begin{aligned}
C_L\cdot SR &= (1\ \mathrm{pF})(0.139\ \mathrm{V/ns}) = 0.139\ \mathrm{mA},\\
C_C\cdot SR &= (0.9\ \mathrm{pF})(0.139\ \mathrm{V/ns}) = 0.125\ \mathrm{mA}\ (= I_{SS}/2),\\
\text{total} &= 0.264\ \mathrm{mA}.
\end{aligned}
$$

- **上升的输出**（$V_{out1}$）：$M_5$ 流过 $1 + 0.264 = 1.26$ mA，而 $M_7$ 吸收 1 mA；其栅极（X）略微下降以提供这一电流。
- **下降的输出**（$V_{out2}$）：$M_6$ 的电流减小到 $1 - 0.264 = 0.74$ mA，而 $M_8$ 仍吸收 1 mA，因此 $M_6$ 保持导通。（输出级单独下拉输出的速率最高可达 $1\ \mathrm{mA}/(C_L + C_C) = 0.53$ V/ns。）

因此压摆率由第一级和 $C_C$ 决定。

### 结果

$$SR = \frac{I_{SS}/2}{C_C} = \frac{0.125\ \mathrm{mA}}{0.9\ \mathrm{pF}} \approx 0.14\ \mathrm{V/ns}\ (139\ \mathrm{V/\mu s})\ \text{at each output},$$

即差分输出 $V_{out1} - V_{out2}$ 的压摆率 ≈ 0.28 V/ns（278 V/µs）。偏置电流为 1 mA 的输出级不构成限制。

**常见错误。** 对每个输出都用 $I_{SS}/C_C$（0.28 V/ns），仿佛全部尾电流都给一个密勒电容充电。“导通”一侧的 PMOS 负载仍提供 $I_{SS}/2$，因此流过该侧 $C_C$ 的净电流只有 $I_{SS} - I_{SS}/2 = I_{SS}/2$；在“截止”一侧，则是负载提供的 $I_{SS}/2$。

**常见错误。** 认为压摆率受 $(C_L + C_C)$ 或 1 mA 输出电流的限制。1 mA 的支路能吸收的电流远多于所需的 0.26 mA；瓶颈在于第一级对 $C_C$ 的充电。

**常见错误。** 写成 $I_{SS}/C_L$。尾电流从不直接流到 $C_L$：X 和 Y 处的虚地使它经 $C_C$ 流动，而 $C_L$ 的电流由第二级从自身的偏置电流中提供。
