# 详细步骤 - R449

**思路。** 把五管运放建模为单极点跨导放大器（transconductance amplifier），即向 $R_{out} = r_{O2}\parallel r_{O4}$ 注入电流 $g_{m1}(v_{in} - v_X)$。输出端驱动电容分压器（capacitive divider）$C_1$–$C_2$，其中点 X 接到反相输入端；对输出节点列 KCL 方程，得到一阶闭环响应，其时间常数即为所求。

### 第 1 步 — 反馈极性

提高 $M_1$ 的栅极电压会使 $I_{D1}$ 增大，电流镜（current mirror）把它复制到 $M_4$，从而把输出推高；因此 $M_1$ 的栅极是同相输入端，$M_2$ 的栅极（节点 X）是反相输入端。把 $V_{out}$ 的一部分反馈到 X 构成负反馈：这是一个采用电容反馈的同相放大器。假设 X 处的偏置网络阻抗非常高（交流开路）。

### 第 2 步 — 运放参数

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}, \qquad \frac{W}{L} = \frac{100\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 200 ,$$

$$g_{m1} = g_{m2} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(200)(0.5\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{S} = 5.18\ \mathrm{mS},$$

$$
\begin{aligned}
r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O4} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
R_{out} &= r_{O2}\parallel r_{O4} = \frac{20\times10}{20+10}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega .
\end{aligned}
$$

采用电流镜负载时，短路输出电流（short-circuit output current）为 $g_{m1}(v_{in} - v_X)$，因此 $G_m = g_{m1}$，并且

$$A_v = g_{m1}R_{out} = (5.18\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) = 34.5 .$$

忽略晶体管电容（包括电流镜极点），因此 $C_1$ 和 $C_2$ 是仅有的电容。

### 第 3 步 — 输出端看到的负载：负载电容与反馈系数

X 只与 $C_1$、$C_2$ 以及 $M_2$ 的栅极相连，因此两个电容中流过相同的电流：

$$v_X = \frac{1/(sC_2)}{1/(sC_1) + 1/(sC_2)}\,v_{out} = \frac{C_1}{C_1 + C_2}\,v_{out} = \beta\,v_{out},$$

$$\beta = \frac{C_1}{C_1 + C_2} = \frac{0.5\ \mathrm{pF}}{0.5\ \mathrm{pF} + 0.5\ \mathrm{pF}} = 0.5 ,$$

而输出端驱动的是 $C_1$ 与 $C_2$ 的串联：

$$C_s = \frac{C_1C_2}{C_1 + C_2} = \frac{(0.5\ \mathrm{pF})(0.5\ \mathrm{pF})}{1\ \mathrm{pF}} = 0.25\ \mathrm{pF}.$$

### 第 4 步 — 小信号模型（small-signal model）与输出节点的 KCL

受控电流 $g_{m1}(v_{in} - v_X)$ 注入输出端，输出端接有对地电阻 $R_{out}$ 和 $C_1$–$C_2$ 分压器。

<!-- diagram: diagram-01.cir -->

对输出节点列 KCL 方程：

$$
\begin{aligned}
g_{m1}(v_{in} - \beta v_{out}) &= \frac{v_{out}}{R_{out}} + sC_s\,v_{out}\\
g_{m1}v_{in} &= v_{out}\left(\frac{1}{R_{out}} + g_{m1}\beta + sC_s\right)\\
\frac{v_{out}}{v_{in}} &= \frac{g_{m1}R_{out}}{1 + \beta g_{m1}R_{out} + sR_{out}C_s}\\
\frac{v_{out}}{v_{in}} &= \frac{A_v}{1 + \beta A_v}\cdot\frac{1}{1 + s\,\dfrac{R_{out}C_s}{1 + \beta A_v}} .
\end{aligned}
$$

这是一个单极点响应，其闭环直流增益（closed-loop dc gain）为 $A_v/(1 + \beta A_v)$，时间常数为

$$\tau = \frac{R_{out}C_s}{1 + \beta A_v} ,$$

即开环时间常数 $R_{out}C_s$ 除以 $1 + \beta A_v$，后者正是反馈使输出电阻（output resistance）降低的倍数。

### 第 5 步 — 时间常数的数值

$$
\begin{aligned}
R_{out}C_s &= (6.67\ \mathrm{k}\Omega)(0.25\ \mathrm{pF}) = 1.667\ \mathrm{ns} \quad\text{(open-loop time constant)},\\
1 + \beta A_v &= 1 + (0.5)(34.5) = 18.26,\\
\tau &= \frac{1.667\ \mathrm{ns}}{18.26} = 91\ \mathrm{ps}.
\end{aligned}
$$

当 $\beta A_v \gg 1$ 时，

$$\tau \approx \frac{R_{out}C_s}{\beta g_{m1}R_{out}} = \frac{C_s}{\beta g_{m1}} = \frac{C_1C_2/(C_1 + C_2)}{g_{m1}C_1/(C_1 + C_2)} = \frac{C_2}{g_{m1}} = \frac{0.5\ \mathrm{pF}}{5.18\ \mathrm{mS}} = 97\ \mathrm{ps},$$

比精确值约高 6 %，因为 $\beta A_v = 17$ 只是中等大小。

### 第 6 步 — 阶跃响应

对于高度为 $V_0$ 的小输入阶跃，输入对管保持线性，因此不会出现压摆（slewing）：

$$V_{out}(t) = \frac{A_v}{1 + \beta A_v}\,V_0\left(1 - e^{-t/\tau}\right), \qquad \frac{A_v}{1 + \beta A_v} = \frac{34.5}{18.26} = 1.89 .$$

输出以 $\tau \approx 91$ ps 的时间常数上升，趋于 $1.89V_0$；由于开环增益（open-loop gain）有限，该值略低于理想值 $1 + C_2/C_1 = 2$。

### 结果

$$\tau = \frac{R_{out}\,\dfrac{C_1C_2}{C_1 + C_2}}{1 + A_v\dfrac{C_1}{C_1 + C_2}} = \frac{(6.67\ \mathrm{k}\Omega)(0.25\ \mathrm{pF})}{1 + 0.5\times34.5} \approx 91\ \mathrm{ps}$$

（环路增益很大时 ≈ $C_2/g_{m1} = 97$ ps），其中 $g_{m1} = 5.18$ mS，$R_{out} = r_{O2}\parallel r_{O4} = 6.67$ kΩ，$A_v = 34.5$。

**常见错误。** 给出开环时间常数 $R_{out}C_s = 1.67$ ns。闭合环路会使等效输出电阻和时间常数都降低 $1 + \beta A_v \approx 18$ 倍。

**常见错误。** 用 $C_1 + C_2 = 1$ pF 或单独的 $C_1$ 作为负载。X 是只由分压器驱动的浮空节点，因此输出端看到的是 $C_1$ 与 $C_2$ 的串联。

**常见错误。** 把反馈系数取为 1 或 2。分压器返回的是 $\beta = C_1/(C_1 + C_2) = 0.5$；2 是理想的闭环**增益** $1/\beta$。
