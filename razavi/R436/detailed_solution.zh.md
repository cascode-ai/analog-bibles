# 详细步骤 - R436

**思路。** 由对称性，差模增益等于半边电路（half circuit）的增益：半边电路由以 $M_3$ 为负载的共源级（common-source stage，CS）$M_1$ 和其后以 $M_7$ 为负载的共源级 $M_5$ 组成。求出每个器件的 $g_m$ 和 $r_O$，将两级增益相乘，再由 $M_5$ 和 $M_7$ 保持饱和的条件求出输出摆幅。

### 第 1 步 — 偏置电流与宽长比

尾电流（tail current）在两侧平均分配，每个负载管的电流与它所服务的器件相同：

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = \frac{1\ \mathrm{mA}}{2} = 0.5\ \mathrm{mA},$$

$$I_{D5} = I_{D6} = I_{D7} = I_{D8} = 1\ \mathrm{mA}\quad\text{(given)}.$$

所有晶体管的宽长比（aspect ratio）均为

$$\frac{W}{L} = \frac{100\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 200 .$$

所有器件均工作在饱和区（题目给定）；计算偏置时忽略 $\lambda$，只在计算输出电阻（output resistance）时使用它。

### 第 2 步 — 第一级（$M_1$、$M_3$）的小信号参数

$$
\begin{aligned}
g_{m1} &= \sqrt{2\,\mu_nC_{ox}\,(W/L)\,I_{D1}}\\
&= \sqrt{2\,(134\ \mu\mathrm{A/V^2})\,(200)\,(0.5\ \mathrm{mA})}\\
&= \sqrt{26.8\times10^{-6}\ \mathrm{A^2/V^2}}\\
&= 5.18\ \mathrm{mS},
\end{aligned}
$$

$$
\begin{aligned}
r_{O1} &= \frac{1}{\lambda_n I_{D1}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{\lambda_p I_{D3}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega.
\end{aligned}
$$

节点 X 处接有两个漏极（$M_5$ 的栅极不吸取电流）：

$$R_X = r_{O1}\parallel r_{O3} = \frac{(20\ \mathrm{k}\Omega)(10\ \mathrm{k}\Omega)}{20\ \mathrm{k}\Omega + 10\ \mathrm{k}\Omega} = 6.67\ \mathrm{k}\Omega .$$

### 第 3 步 — 第二级（$M_5$、$M_7$）的小信号参数

$$
\begin{aligned}
g_{m5} &= \sqrt{2\,\mu_pC_{ox}\,(W/L)\,I_{D5}}\\
&= \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})\,(200)\,(1\ \mathrm{mA})}\\
&= \sqrt{15.36\times10^{-6}\ \mathrm{A^2/V^2}}\\
&= 3.92\ \mathrm{mS},
\end{aligned}
$$

$$
\begin{aligned}
r_{O5} &= \frac{1}{\lambda_p I_{D5}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega,\\
r_{O7} &= \frac{1}{\lambda_n I_{D7}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,
\end{aligned}
$$

$$R_{out} = r_{O5}\parallel r_{O7} = \frac{(5\ \mathrm{k}\Omega)(10\ \mathrm{k}\Omega)}{5\ \mathrm{k}\Omega + 10\ \mathrm{k}\Omega} = 3.33\ \mathrm{k}\Omega .$$

### 第 4 步 — 半边电路与各级增益

对于差分输入，两个栅极分别变化 $\pm v_{in}/2$，源极公共节点 P 为虚地（virtual ground），因此差模增益 $(v_{out1} - v_{out2})/v_{in}$ 等于半边电路增益 $v_{out1}/(v_{in}/2)$。在半边电路中，$M_1$ 从节点 X 抽取电流 $g_{m1}v_{in1}$（其中 $v_{in1} = v_{in}/2$），该电流流过 $r_{O1}\parallel r_{O3}$；$M_5$ 的源极接交流地，它从 out1 抽取电流 $g_{m5}v_X$（其流入 out1 的漏极电流为 $g_{m5}v_{sg5} = -g_{m5}v_X$），该电流流过 $r_{O5}\parallel r_{O7}$。

<!-- diagram: diagram-01.cir -->

**第一级（节点 X 的 KCL）：**

$$
\begin{aligned}
g_{m1}v_{in1} + \frac{v_X}{R_X} &= 0\\
v_X &= -g_{m1}R_X\,v_{in1}\\
A_1 = \left|\frac{v_X}{v_{in1}}\right| &= g_{m1}(r_{O1}\parallel r_{O3}) = (5.18\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) = 34.5 .
\end{aligned}
$$

**第二级（节点 out1 的 KCL）：**

$$
\begin{aligned}
g_{m5}v_X + \frac{v_{out1}}{R_{out}} &= 0\\
v_{out1} &= -g_{m5}R_{out}\,v_X\\
A_2 = \left|\frac{v_{out1}}{v_X}\right| &= g_{m5}(r_{O5}\parallel r_{O7}) = (3.92\ \mathrm{mS})(3.33\ \mathrm{k}\Omega) = 13.1 .
\end{aligned}
$$

### 第 5 步 — 总差模增益

两次反相相互抵消，因此 $V_{out1}$ 与 $M_1$ 的栅极同向变化：

$$
\begin{aligned}
v_{out1} &= -g_{m5}R_{out}\,v_X = -g_{m5}R_{out}\,(-g_{m1}R_X\,v_{in1}) = A_1A_2\,\frac{v_{in}}{2}\\
v_{out2} &= A_1A_2\left(-\frac{v_{in}}{2}\right) \quad\text{(mirror-image half)}\\
v_{out1} - v_{out2} &= A_1A_2\,v_{in}\\
\frac{v_{out1} - v_{out2}}{v_{in}} &= g_{m1}(r_{O1}\parallel r_{O3})\cdot g_{m5}(r_{O5}\parallel r_{O7}) = A_1A_2 .
\end{aligned}
$$

数值计算：

$$A_v = 34.5\times13.1 \approx 451 .$$

增益并不高，因为 $\lambda$ 较大且偏置电流较大：$M_1$ 的本征增益（intrinsic gain）仅为 $g_{m1}r_{O1} = 5.18\ \mathrm{mS}\times20\ \mathrm{k}\Omega \approx 104$，而与之并联的 $r_{O3}$ 又使第一级增益降到 34.5。

### 第 6 步 — 输出摆幅：由 $M_7$ 和 $M_5$ 决定的极限

$V_{out1}$ 同时是 $M_5$（源极接 $V_{DD}$）和 $M_7$（源极接地）的漏极，两者都必须保持饱和。

**下限。** $M_7$ 要求 $V_{DS7} = V_{out1} \ge V_{ov7}$，而在其固定电流 1 mA 下：

$$
\begin{aligned}
V_{ov7} &= \sqrt{\frac{2I_{D7}}{\mu_nC_{ox}(W/L)}}\\
&= \sqrt{\frac{2\,(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(200)}}\\
&= \sqrt{\frac{2\times10^{-3}}{26.8\times10^{-3}}}\ \mathrm{V} = \sqrt{0.0746}\ \mathrm{V}\\
&= 0.273\ \mathrm{V}.
\end{aligned}
$$

**上限。** $M_5$ 要求 $V_{SD5} = V_{DD} - V_{out1} \ge |V_{ov5}|$，即 $V_{out1} \le V_{DD} - |V_{ov5}|$，其中 $I_{D5} = 1$ mA：

$$
\begin{aligned}
|V_{ov5}| &= \sqrt{\frac{2I_{D5}}{\mu_pC_{ox}(W/L)}}\\
&= \sqrt{\frac{2\,(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(200)}}\\
&= \sqrt{\frac{2\times10^{-3}}{7.68\times10^{-3}}}\ \mathrm{V} = \sqrt{0.260}\ \mathrm{V}\\
&= 0.510\ \mathrm{V},
\end{aligned}
$$

因此

$$V_{out1,max} = 3\ \mathrm{V} - 0.510\ \mathrm{V} = 2.49\ \mathrm{V}.$$

这里只出现过驱动电压（overdrive voltage），因为漏极节点可以一直接近到距其源极所接电源轨仅一个过驱动电压的位置；这正是两级运放的摆幅比套筒式共源共栅（telescopic cascode）结构大得多的原因。

**内部偏置检查。** $|V_{GS5}| = |V_{TH,p}| + |V_{ov5}| = 0.8 + 0.51 = 1.31$ V，因此 X 和 Y 位于 $3 - 1.31 = 1.69$ V。$M_3$ 只需要 $|V_{ov3}| = \sqrt{2(0.5\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2}\cdot200)} = 0.36$ V，而它的 $V_{SD3} = 1.31$ V，因此完全处于饱和区。

### 第 7 步 — 单端与差分峰峰值摆幅

每个输出端可以在以下两值之间变化：

$$V_{ov7} = 0.273\ \mathrm{V} \quad\text{and}\quad V_{DD} - |V_{ov5}| = 2.490\ \mathrm{V},$$

因此单端峰峰值摆幅为

$$V_{DD} - |V_{ov5}| - V_{ov7} = 3 - 0.510 - 0.273 = 2.22\ \mathrm{V_{pp}} .$$

两个输出端反向变化，因此 $V_{out1} - V_{out2}$ 的范围为 $-2.22$ V 至 $+2.22$ V：

$$V_{out,diff,pp} = 2\times2.22\ \mathrm{V} = 4.43\ \mathrm{V_{pp}} .$$

### 结果

$$A_v = g_{m1}(r_{O1}\parallel r_{O3})\cdot g_{m5}(r_{O5}\parallel r_{O7}) = (5.18\ \mathrm{mS}\times6.67\ \mathrm{k}\Omega)(3.92\ \mathrm{mS}\times3.33\ \mathrm{k}\Omega) \approx 34.5\times13.1 \approx 450 .$$

每个输出端可以从 $V_{ov7} \approx 0.27$ V 摆动到 $V_{DD} - |V_{ov5}| \approx 2.49$ V，即**每个输出端峰峰值约 2.2 V**，或**差分峰峰值约 4.4 V**。

**常见错误。** 用 $W/L = 100$ 代替 $100/0.5 = 200$。这样每个 $g_m$ 都要除以 $\sqrt2$，总增益减半（约为 225）。

**常见错误。** 计算某一级增益时只用一个 $r_O$，例如 $g_{m1}r_{O1}$。节点 X 同时接有 $M_1$ 和 $M_3$，因此电阻为 $r_{O1}\parallel r_{O3}$（$r_{O5}\parallel r_{O7}$ 同理）；另外要把 $\lambda_n = 0.1$ 和 $\lambda_p = 0.2\ \mathrm{V^{-1}}$ 用在对应的器件上。

**常见错误。** 用完整的栅源电压来写摆幅极限，例如把上限写成 $V_{DD} - |V_{GS5}| \approx 1.69$ V。这是栅极节点 X 的直流电平；输出漏极只需与每条电源轨保持一个过驱动电压的距离。
