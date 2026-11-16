# 详细步骤 - R416

**思路。** 把电源的微小变化 $v_{dd}$ 当作小信号源。只有 $M_2$（源极和衬底）接到 $V_{DD}$，因此扰动以 $M_2$ 注入输出节点的电流的形式进入电路，输出电压就等于该电流乘以输出端看到的电阻。在同一偏置点下对两个电路分别计算并加以比较。

### 第 1 步 — 共同的偏置点

输入与输出的直流电平相等时，[图 2] 中的 $R_1$、$R_2$ 没有直流电流，因此其栅极节点 G 也处于同一电平。两个反相器都偏置在开关阈值（switching threshold）$V_M$，此时两管的饱和平方律（square law）电流相等（偏置计算中忽略 $\lambda$）：

$$
\begin{aligned}
134\,(V_M - 0.7)^2 &= 38.4\,(2.2 - V_M)^2\\
1.868\,(V_M - 0.7) &= 2.2 - V_M\ \Longrightarrow\ V_M = \frac{3.508}{2.868} = 1.223\ \mathrm{V},\\
I_D &= \tfrac12(13.4\ \mathrm{mA/V^2})(0.523\ \mathrm{V})^2 = 1.83\ \mathrm{mA}.
\end{aligned}
$$

$$
\begin{aligned}
g_{m1} &= \frac{2(1.83)}{0.523} = 7.01\ \mathrm{mS}, & g_{m2} &= \frac{2(1.83)}{0.977} = 3.75\ \mathrm{mS},\\
r_{O1} &= \frac{1}{0.1\times1.83\ \mathrm{mA}} = 5.46\ \mathrm{k\Omega}, & r_{O2} &= \frac{1}{0.2\times1.83\ \mathrm{mA}} = 2.73\ \mathrm{k\Omega},\\
G_m &= g_{m1} + g_{m2} = 10.76\ \mathrm{mS}, & R_0 &= r_{O1}\parallel r_{O2} = 1.82\ \mathrm{k\Omega}.
\end{aligned}
$$

### 第 2 步 — 电源变化如何进入电路

$V_{in}$ 由理想源保持，因此 $v_{in} = 0$。电源变化 $v_{dd}$ 使 $M_2$ 的源极和衬底一起变化，$v_{SB2} = 0$，因而没有体效应（body effect）；$M_2$ 的栅极电压为 $v_G$，漏极电压为 $v_{out}$，因此它向输出端送入

$$i_{D2} = g_{m2}\,(v_{dd} - v_G) + \frac{v_{dd} - v_{out}}{r_{O2}} ,$$

而 $M_1$ 从输出端抽取 $g_{m1}v_G + v_{out}/r_{O1}$。

<!-- diagram: diagram-01.cir -->

（图中画的是带反馈的电路；对于 [图 1]，去掉 $R_1$ 和 $R_2$，并把节点 G 接地。）

### 第 3 步 — 无反馈的反相器（[图 1]）

栅极接 $V_{in}$，因此 $v_G = 0$。对输出端列 KCL：

$$
\begin{aligned}
g_{m2}v_{dd} + \frac{v_{dd} - v_{out}}{r_{O2}} &= \frac{v_{out}}{r_{O1}}\\
v_{dd}\left(g_{m2} + \frac{1}{r_{O2}}\right) &= v_{out}\left(\frac{1}{r_{O1}} + \frac{1}{r_{O2}}\right)\\
\frac{v_{out}}{v_{dd}} &= \left(g_{m2} + \frac{1}{r_{O2}}\right)(r_{O1}\parallel r_{O2}) = (1 + g_{m2}r_{O2})\,\frac{r_{O1}}{r_{O1} + r_{O2}} .
\end{aligned}
$$

代入 $1/r_{O2} = 0.367$ mS：

$$\frac{v_{out}}{v_{dd}} = (3.75 + 0.37)\ \mathrm{mS}\times1.82\ \mathrm{k\Omega} = (4.12\ \mathrm{mS})(1.82\ \mathrm{k\Omega}) = 7.5 .$$

$V_{DD}$ 上 10 mV 的纹波会在输出端产生 75 mV：由于栅极固定，$M_2$ 把电源变化看作 $V_{SG}$ 的变化，并像共栅级（common-gate stage）一样将其放大到很大的 $R_0$ 上。

### 第 4 步 — 带反馈的反相器（[图 2]）

$R_1$ 的左端接交流地，因此 G 位于分压器 $R_2$（接输出端）–$R_1$（接地）上：

$$v_G = \alpha\,v_{out},\qquad \alpha = \frac{R_1}{R_1 + R_2} = \frac{1}{11} = 0.0909 .$$

对输出端列 KCL（来自 $M_2$ 的电流 = 流入 $M_1$ 的电流 + 流入 $R_2$ 的电流）：

$$g_{m2}(v_{dd} - v_G) + \frac{v_{dd} - v_{out}}{r_{O2}} = g_{m1}v_G + \frac{v_{out}}{r_{O1}} + \frac{v_{out} - v_G}{R_2} ,$$

$$v_{dd}\left(g_{m2} + \frac{1}{r_{O2}}\right) = v_G\left(G_m - \frac{1}{R_2}\right) + v_{out}\left(\frac{1}{R_0} + \frac{1}{R_2}\right).$$

代入 $v_G = \alpha v_{out}$：

$$\frac{v_{out}}{v_{dd}} = \frac{g_{m2} + 1/r_{O2}}{1/R_0 + 1/R_2 + \alpha\,(G_m - 1/R_2)} .$$

以 mS 为单位：

$$
\begin{aligned}
\text{denominator} &= 0.550 + 0.100 + 0.0909\times(10.76 - 0.10) = 0.550 + 0.100 + 0.969 = 1.619\ \mathrm{mS},\\
\frac{v_{out}}{v_{dd}} &= \frac{4.12}{1.619} = 2.54 .
\end{aligned}
$$

### 第 5 步 — 比较与解释

| 电路 | $\partial V_{out}/\partial V_{DD}$ | 输出电阻（output resistance） |
|---|---|---|
| 无反馈 | 7.5 | $R_0 = 1.82\ \mathrm{k\Omega}$ |
| 电阻反馈 | 2.5 | 0.62 kΩ |

**带反馈的电路灵敏度更低**，两者之比为 $7.49/2.54 \approx 2.9$。在两个电路中，扰动都是注入输出端的诺顿电流（Norton current）$(g_{m2} + 1/r_{O2})v_{dd}$（输出端短路时，两者都有 $v_G = 0$），因此输出电压的变化等于该电流乘以输出电阻：无反馈时为 $R_0 = 1/(0.550\ \mathrm{mS}) = 1.82\ \mathrm{k\Omega}$，有反馈时为 $1/(1.619\ \mathrm{mS}) = 0.62\ \mathrm{k\Omega}$。经 $R_2$ 的并联反馈（shunt feedback）使输出电阻约除以 $1 + T$（环路增益 $T \approx 1.5$），再加上 $R_2$ 的负载效应，并以同样的倍数抑制电源纹波。

若在偏置中也计入 $\lambda$（$V_M \approx 1.254$ V，$I_D \approx 2.32$ mA），并对模型一致地求导，两个数值分别约为 9.5 和 2.8（若采用 $g_o = \lambda I_D$，则为 7.7 和 2.7）；结论相同。

### 结果

$$\left.\frac{\partial V_{out}}{\partial V_{DD}}\right|_{\text{no feedback}} = \left(g_{m2} + \frac{1}{r_{O2}}\right)(r_{O1}\parallel r_{O2}) = (1 + g_{m2}r_{O2})\frac{r_{O1}}{r_{O1} + r_{O2}} \approx 7.5,$$

$$\left.\frac{\partial V_{out}}{\partial V_{DD}}\right|_{\text{feedback}} = \frac{g_{m2} + 1/r_{O2}}{1/R_0 + 1/R_2 + \alpha\,(G_m - 1/R_2)} \approx 2.5,\qquad \alpha = \frac{R_1}{R_1 + R_2}.$$

带电阻反馈的电路对电源的灵敏度更低，两者之比约为 $1 + T \approx 3$，因为它的输出电阻约为无反馈时的三分之一。

**常见错误。** 计算开关阈值的偏移 $dV_M/dV_{DD} \approx 0.35$，而不是输出的变化。输入保持不变，因此题目要求的是从 $V_{DD}$ 到 $V_{out}$ 的小信号增益。

**常见错误。** 漏掉 $g_{m2}$ 项。栅极固定时，$V_{SG2}$ 变化 $v_{dd}$，起主导作用的是 $g_{m2}v_{dd}$，而不是流过 $r_{O2}$ 的电流。

**常见错误。** 认为两个电路的灵敏度相同，或者认为普通反相器更好。反馈降低了输出端的阻抗，而扰动正是从输出端注入的。
