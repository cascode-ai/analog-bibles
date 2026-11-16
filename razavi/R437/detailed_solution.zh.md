# 详细步骤 - R437

**思路。** 功耗决定了总电源电流，输出摆幅决定了两个输出晶体管可用的过驱动电压。先确定输出级的尺寸，因为输出级的栅极电压决定了第一级必须在 X 和 Y 处提供的直流电平；然后确定第一级的尺寸，检查各管是否工作在饱和区（saturation region），并计算增益。有几项参数可以自由选择；下面给出一个完整、自洽的设计，并指出哪些是自由选择。

### 第 1 步 — 功耗预算：每条支路分得多少电流

由于题目未给出 $\gamma$，忽略体效应（body effect）；计算偏置时忽略 $\lambda$；所有器件都按平方律（square law）确定尺寸：

$$\frac{W}{L} = \frac{2I_D}{\mu C_{ox}V_{ov}^2} .$$

总电源电流为

$$I_{total} = \frac{P}{V_{DD}} = \frac{6\ \mathrm{mW}}{3\ \mathrm{V}} = 2\ \mathrm{mA}.$$

第一级使用 $I_{SS} = 0.5$ mA，因此忽略很小的偏置产生网络后，第二级得到

$$I_{stage2} = 2\ \mathrm{mA} - 0.5\ \mathrm{mA} = 1.5\ \mathrm{mA},$$

由两条相同的输出支路平分：

$$I_{D5} = I_{D6} = I_{D7} = I_{D8} = \frac{1.5\ \mathrm{mA}}{2} = 0.75\ \mathrm{mA},$$

第一级中则有

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = 0.25\ \mathrm{mA}.$$

### 第 2 步 — 摆幅预算：输出器件的过驱动电压

两个输出端反向变化，因此 4 V 的差分峰峰值摆幅只要求

$$\text{swing per output} = \frac{4\ \mathrm{V_{pp}}}{2} = 2\ \mathrm{V_{pp}} .$$

每个输出端都是 $M_5$ 与 $M_7$ 的公共漏极：$V_{out} \ge V_{ov7}$ 时 $M_7$ 保持饱和，$V_{out} \le V_{DD} - |V_{ov5}|$ 时 $M_5$ 保持饱和。因此可用的单端摆幅为 $V_{DD} - |V_{ov5}| - V_{ov7}$，并且

$$
\begin{aligned}
V_{DD} - |V_{ov5}| - V_{ov7} &\ge 2\ \mathrm{V}\\
|V_{ov5}| + V_{ov7} &\le 3\ \mathrm{V} - 2\ \mathrm{V} = 1\ \mathrm{V}.
\end{aligned}
$$

**自由选择。** 用满 1 V 的预算，并平均分配：

$$|V_{ov5}| = |V_{ov6}| = 0.5\ \mathrm{V}, \qquad V_{ov7} = V_{ov8} = 0.5\ \mathrm{V}.$$

允许的最大过驱动电压对应最小的晶体管和最小的寄生电容；任何总和不超过 1 V 的分配方式也都满足指标。

### 第 3 步 — 输出级（$M_5$–$M_8$）的尺寸设计

**PMOS 管 $M_5$、$M_6$**（0.75 mA，$|V_{ov}| = 0.5$ V）：

$$
\begin{aligned}
\left(\frac{W}{L}\right)_{5,6} &= \frac{2I_{D5}}{\mu_pC_{ox}|V_{ov5}|^2} = \frac{2\,(0.75\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.5\ \mathrm{V})^2}\\
&= \frac{1.5\times10^{-3}}{9.6\times10^{-6}} = 156 ,
\end{aligned}
$$

因此 $W_{5,6} = 156\times0.5\ \mu\mathrm{m} \approx 78\ \mu\mathrm{m}$。

**NMOS 管 $M_7$、$M_8$**（0.75 mA，$V_{ov} = 0.5$ V）：

$$
\begin{aligned}
\left(\frac{W}{L}\right)_{7,8} &= \frac{2I_{D7}}{\mu_nC_{ox}V_{ov7}^2} = \frac{2\,(0.75\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.5\ \mathrm{V})^2}\\
&= \frac{1.5\times10^{-3}}{33.5\times10^{-6}} = 44.8 ,
\end{aligned}
$$

因此 $W_{7,8} \approx 22.4\ \mu\mathrm{m}$，并且

$$V_{b2} = V_{TH,n} + V_{ov7} = 0.7\ \mathrm{V} + 0.5\ \mathrm{V} = 1.2\ \mathrm{V}.$$

为了获得对称的 $\pm1$ V 摆幅，输出端的静态电平应位于允许范围的中点：

$$V_{out,CM} = \frac{V_{ov7} + (V_{DD} - |V_{ov5}|)}{2} = \frac{0.5 + 2.5}{2}\ \mathrm{V} = 1.5\ \mathrm{V}.$$

### 第 4 步 — 第一级必须在 X 和 Y 处提供的直流电平

只有在下式成立时，$M_5$ 才能流过 0.75 mA：

$$|V_{GS5}| = |V_{TH,p}| + |V_{ov5}| = 0.8\ \mathrm{V} + 0.5\ \mathrm{V} = 1.3\ \mathrm{V}.$$

它的源极接 $V_{DD}$，栅极接 X，因此

$$V_X = V_Y = V_{DD} - |V_{GS5}| = 3\ \mathrm{V} - 1.3\ \mathrm{V} = 1.7\ \mathrm{V}.$$

第一级的输出共模电平本身就是第二级的偏置：如果 X 漂移，输出支路的电流就会改变。

### 第 5 步 — 第一级的尺寸设计

**负载管 $M_3$、$M_4$**（0.25 mA）。**自由选择：** $|V_{ov3}| = 0.4$ V，这使 $g_{m3}$（以及负载噪声）较小，器件也较紧凑。

$$
\begin{aligned}
\left(\frac{W}{L}\right)_{3,4} &= \frac{2I_{D3}}{\mu_pC_{ox}|V_{ov3}|^2} = \frac{2\,(0.25\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.4\ \mathrm{V})^2}\\
&= \frac{0.5\times10^{-3}}{6.144\times10^{-6}} = 81.4 ,
\end{aligned}
$$

因此 $W_{3,4} \approx 40.7\ \mu\mathrm{m}$，且

$$V_{b1} = V_{DD} - (|V_{TH,p}| + |V_{ov3}|) = 3\ \mathrm{V} - (0.8 + 0.4)\ \mathrm{V} = 1.8\ \mathrm{V}.$$

$V_{SD3} = V_{DD} - V_X = 3 - 1.7 = 1.3\ \mathrm{V} \ge |V_{ov3}| = 0.4$ V，因此 $M_3$ 处于饱和区。✓

**输入对管 $M_1$、$M_2$**（0.25 mA）。**自由选择：** $V_{ov1} = 0.2$ V，用较小的过驱动电压换取较大的 $g_m$（增益更高，输入噪声更低）。

$$
\begin{aligned}
\left(\frac{W}{L}\right)_{1,2} &= \frac{2I_{D1}}{\mu_nC_{ox}V_{ov1}^2} = \frac{2\,(0.25\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.2\ \mathrm{V})^2}\\
&= \frac{0.5\times10^{-3}}{5.36\times10^{-6}} = 93.3 ,
\end{aligned}
$$

因此 $W_{1,2} \approx 46.6\ \mu\mathrm{m}$，且 $V_{GS1} = 0.7 + 0.2 = 0.9$ V。

**尾电流源**（流过 0.5 mA 的 NMOS 管 $M_{SS}$）。**自由选择：** $V_{ov,SS} = 0.3$ V。

$$
\begin{aligned}
\left(\frac{W}{L}\right)_{SS} &= \frac{2I_{SS}}{\mu_nC_{ox}V_{ov,SS}^2} = \frac{2\,(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.3\ \mathrm{V})^2}\\
&= \frac{1.0\times10^{-3}}{12.06\times10^{-6}} = 82.9 ,
\end{aligned}
$$

因此 $W_{SS} \approx 41.5\ \mu\mathrm{m}$，栅极偏置为 $0.7 + 0.3 = 1.0$ V。

### 第 6 步 — 输入共模范围（input common-mode range）

**下限。** 尾电流管要求 $V_P \ge V_{ov,SS}$，其中 $V_P = V_{in,CM} - V_{GS1}$ 是差分对源极公共节点的电压：

$$V_{in,CM} \ge V_{GS1} + V_{ov,SS} = 0.9\ \mathrm{V} + 0.3\ \mathrm{V} = 1.2\ \mathrm{V}.$$

**上限。** 只要 $V_X \ge V_{in,CM} - V_{TH,n}$，$M_1$ 就保持饱和：

$$V_{in,CM} \le V_X + V_{TH,n} = 1.7\ \mathrm{V} + 0.7\ \mathrm{V} = 2.4\ \mathrm{V}.$$

（体效应会使 $V_{TH1}$ 升高，从而把这一上限略微推高。）例如，$V_{in,CM} = 1.5$ V 时 $V_P = 0.6$ V，因此 $V_{DS,SS} = 0.6\ \mathrm{V} > 0.3$ V，$V_{DS1} = 1.7 - 0.6 = 1.1\ \mathrm{V} > 0.2$ V。✓

### 第 7 步 — 小信号参数与增益

利用 $g_m = 2I_D/V_{ov}$ 和 $r_O = 1/(\lambda I_D)$：

**第一级：**

$$
\begin{aligned}
g_{m1} &= \frac{2I_{D1}}{V_{ov1}} = \frac{2\,(0.25\ \mathrm{mA})}{0.2\ \mathrm{V}} = 2.5\ \mathrm{mS},\\
r_{O1} &= \frac{1}{\lambda_nI_{D1}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 40\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{\lambda_pI_{D3}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O1}\parallel r_{O3} &= \frac{40\times20}{40+20}\ \mathrm{k}\Omega = 13.3\ \mathrm{k}\Omega,\\
A_1 &= g_{m1}(r_{O1}\parallel r_{O3}) = (2.5\ \mathrm{mS})(13.3\ \mathrm{k}\Omega) = 33.3 .
\end{aligned}
$$

**第二级：**

$$
\begin{aligned}
g_{m5} &= \frac{2I_{D5}}{|V_{ov5}|} = \frac{2\,(0.75\ \mathrm{mA})}{0.5\ \mathrm{V}} = 3\ \mathrm{mS},\\
r_{O5} &= \frac{1}{\lambda_pI_{D5}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.75\ \mathrm{mA})} = 6.67\ \mathrm{k}\Omega,\\
r_{O7} &= \frac{1}{\lambda_nI_{D7}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.75\ \mathrm{mA})} = 13.3\ \mathrm{k}\Omega,\\
r_{O5}\parallel r_{O7} &= \frac{6.67\times13.3}{6.67+13.3}\ \mathrm{k}\Omega = 4.44\ \mathrm{k}\Omega,\\
A_2 &= g_{m5}(r_{O5}\parallel r_{O7}) = (3\ \mathrm{mS})(4.44\ \mathrm{k}\Omega) = 13.3 .
\end{aligned}
$$

**总差分增益。** P 点为虚地（virtual ground），每个半边电路都是一个共源级（common-source stage）驱动另一个共源级：

$$A_v = A_1A_2 = g_{m1}(r_{O1}\parallel r_{O3})\cdot g_{m5}(r_{O5}\parallel r_{O7}) = 33.3\times13.3 \approx 444 .$$

### 第 8 步 — 实际考虑：共模反馈

X、Y 以及输出端的直流电平由两个电流源之间的差值决定（例如 $I_{D3}$ 与 $I_{SS}/2$ 之差），因此任何失配（mismatch）都会把这些电平推向某条电源轨。实际电路中，用一个共模反馈（CMFB）环路调节 $V_{b1}$，把 X 和 Y 稳定在 1.7 V；再用另一个环路调节 $V_{b2}$，把输出端稳定在 1.5 V。

### 结果

一种自洽的设计（所有器件 $L = 0.5\ \mu\mathrm{m}$）：

| 器件 | $I_D$ | $\lvert V_{ov}\rvert$ | $W/L$ | $W$ |
|---|---|---|---|---|
| $M_1$、$M_2$ | 0.25 mA | 0.2 V | 93 | 46.6 μm |
| $M_3$、$M_4$ | 0.25 mA | 0.4 V | 81 | 40.7 μm |
| $M_5$、$M_6$ | 0.75 mA | 0.5 V | 156 | 78 μm |
| $M_7$、$M_8$ | 0.75 mA | 0.5 V | 45 | 22.4 μm |
| 尾电流管（$I_{SS}$） | 0.5 mA | 0.3 V | 83 | 41.5 μm |

- 预算：总电流 2 mA（$6\ \mathrm{mW}/3\ \mathrm{V}$），每条输出支路 0.75 mA；每个输出端 2 V 的峰峰值摆幅要求 $|V_{ov5}| + V_{ov7} \le 1$ V。
- 偏置电平：$V_{b2} = 1.2$ V，$V_{b1} = 1.8$ V，$V_X = V_Y = V_{DD} - |V_{GS5}| = 1.7$ V，输出共模电平 1.5 V，输入共模范围 1.2–2.4 V。
- 增益：$A_1 \approx 33$，$A_2 \approx 13.3$，$A_v \approx 440$。

$M_1$–$M_4$ 及尾电流管的过驱动电压，以及 1 V 预算在 $M_5$ 与 $M_7$ 之间的分配，都是自由选择；而电流预算、摆幅条件以及 $V_X = 1.7$ V 则不能自由选择。

**常见错误。** 把 4 V 峰峰值当作每个输出端各自的摆幅，这样留给过驱动电压的只有 $3 - 4 < 0$ V。差分摆幅是单端摆幅的两倍，因此每个输出端只需要 2 V 峰峰值。

**常见错误。** 脱离第二级单独设计第一级。除非 $V_X = V_{DD} - |V_{GS5}| = 1.7$ V，否则 $M_5$ 不会流过功耗预算分配给它的 0.75 mA。

**常见错误。** 错误地分配 2 mA，例如给每条输出支路各分 1.5 mA（总功耗 9 mW），或者在 6 mW 的预算中漏掉 $I_{SS}$。两条输出支路加起来只剩 1.5 mA。
