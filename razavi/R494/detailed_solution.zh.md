# 详细步骤 - R494

**思路。** 把每个晶体管的沟道热噪声（channel thermal noise）建模为接在漏极与源极之间的电流源 $\overline{I_n^2} = 4kT\gamma g_m$。求出每个噪声源产生的差分输出噪声，将各功率相加（各噪声源互不相关），再除以差分增益的平方。由于电路对称，只需分析一个半边电路（half circuit），再把它的贡献加倍即可。

### 第 1 步 — 电路以及“输入参考噪声”的含义

由图可知：

- **第一级。** NMOS 差分对（differential pair）$M_1$–$M_2$，两管源极在节点 P 相连，尾电流（tail current）为 $I_{SS}$。其负载是 PMOS 电流源（current source）$M_3$（接节点 X）和 $M_4$（接节点 Y），它们的栅极接偏置电压 $V_{b1}$。
- **第二级。** 两个 PMOS 共源（common-source，CS）放大器：$M_5$（栅极接 X，输出为 $V_{out1}$）和 $M_6$（栅极接 Y，输出为 $V_{out2}$）。它们的负载是 NMOS 电流源 $M_7$ 和 $M_8$。
- 输入是 $M_1$ 与 $M_2$ 栅极之间的电压，输出是 $V_{out1} - V_{out2}$。

**输入参考噪声电压**（input-referred noise voltage）$\overline{V_{n,in}^2}$ 是这样一个单一噪声源：把它串联在放大器的*无噪声*副本的输入端，所产生的输出噪声与所有实际噪声源共同产生的输出噪声相同：

$$\overline{V_{n,in}^2} = \frac{\overline{V_{n,out}^2}}{A_v^2} .$$

其中 $\overline{V_{n,out}^2}$ 为总输出噪声功率谱密度（power spectral density，单位为 V²/Hz），$A_v$ 为差分电压增益。各晶体管的噪声相互独立，因此它们的**功率相加**。

噪声模型：每个晶体管的漏极与源极之间有一个沟道热噪声电流 $\overline{I_n^2} = 4kT\gamma g_m$（A²/Hz）。其中 $k = 1.38\times10^{-23}$ J/K 为玻尔兹曼常数，$T = 300$ K，$\gamma = 2/3$ 为沟道噪声系数（channel-noise coefficient），$g_m$ 为器件的跨导（transconductance）。公共因子为

$$4kT\gamma = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K})\times\tfrac23 = 1.104\times10^{-20}\ \mathrm{J}.$$

### 第 2 步 — 偏置电流与小信号参数

**偏置电流。** 尾电流在两个输入管之间均分，每个负载管流过相同的电流：

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = 0.125\ \mathrm{mA}, \qquad I_{D5} = I_{D6} = I_{D7} = I_{D8} = 1\ \mathrm{mA}.$$

**宽长比**（aspect ratio）。除 $M_{5,6}$ 的 $W/L = 60/0.5 = 120$ 外，所有器件均为 $W/L = 50/0.5 = 100$。

假设所有晶体管都处于饱和区（saturation region），偏置电压正是按此选取的，因此平方律（square law）公式适用。

**跨导**由平方律给出：$g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$。其中 $\mu C_{ox}$ 为工艺跨导参数（process transconductance parameter）：NMOS 器件（$M_1$、$M_2$、$M_7$、$M_8$）取 $\mu_nC_{ox}$，PMOS 器件（$M_3$–$M_6$）取 $\mu_pC_{ox}$。

$$
\begin{aligned}
g_{m1} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.125\ \mathrm{mA})} = \sqrt{3.35\times10^{-6}}\ \mathrm{A/V} = 1.830\ \mathrm{mS},\\
g_{m3} &= \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(100)(0.125\ \mathrm{mA})} = \sqrt{0.96\times10^{-6}}\ \mathrm{A/V} = 0.980\ \mathrm{mS},\\
g_{m5} &= \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(120)(1\ \mathrm{mA})} = \sqrt{9.216\times10^{-6}}\ \mathrm{A/V} = 3.036\ \mathrm{mS},\\
g_{m7} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{A/V} = 5.177\ \mathrm{mS}.
\end{aligned}
$$

由对称性，$g_{m2} = g_{m1}$，$g_{m4} = g_{m3}$，$g_{m6} = g_{m5}$，$g_{m8} = g_{m7}$。

**输出电阻**（output resistance）由沟道长度调制（channel-length modulation）给出，$r_O = 1/(\lambda I_D)$，其中 $\lambda$ 为沟道长度调制系数（NMOS 为 0.1 V⁻¹，PMOS 为 0.2 V⁻¹）：

$$
\begin{aligned}
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.125\ \mathrm{mA})} = 80\ \mathrm{k}\Omega, &
r_{O3} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.125\ \mathrm{mA})} = 40\ \mathrm{k}\Omega,\\
r_{O5} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega, &
r_{O7} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega.
\end{aligned}
$$

**各高阻节点的电阻**，即接在该节点上的两个漏极的电阻并联：

$$
\begin{aligned}
R_X &= r_{O1}\parallel r_{O3} = \frac{80\times40}{80+40}\ \mathrm{k}\Omega = 26.67\ \mathrm{k}\Omega,\\
R_{out} &= r_{O5}\parallel r_{O7} = \frac{5\times10}{5+10}\ \mathrm{k}\Omega = 3.33\ \mathrm{k}\Omega.
\end{aligned}
$$

各级的**增益**，其大小为 $g_m \times$（节点电阻）：

$$
\begin{aligned}
A_1 &= g_{m1}R_X = (1.830\ \mathrm{mS})(26.67\ \mathrm{k}\Omega) = 48.8,\\
A_2 &= g_{m5}R_{out} = (3.036\ \mathrm{mS})(3.33\ \mathrm{k}\Omega) = 10.1,\\
A_v &= A_1A_2 \approx 494 .
\end{aligned}
$$

### 第 3 步 — 为什么一个半边电路就够了（差分对一侧的噪声）

单独考虑 $M_1$ 的噪声电流 $I_{n1}$，它在 $M_1$ 内部从 X 流向 P，输入端接地。把它分解为两部分：

- **共模**（common-mode）部分：$M_1$ 中为 $+I_{n1}/2$，$M_2$ 中*也*为 $+I_{n1}/2$；
- **差模**（differential-mode）部分：$M_1$ 中为 $+I_{n1}/2$，$M_2$ 中为 $-I_{n1}/2$。

两部分相加，在 $M_1$ 中为 $I_{n1}$，在 $M_2$ 中为零，符合要求。

- 共模部分使 X 和 Y 同样地变化，因此**不**产生差分输出。
- 对差模部分，节点 P 不动：两侧注入它的电流大小相等、方向相反，因此它是**虚地**（virtual ground）。于是每一侧都相当于源极接地的共源级（common-source stage）：
$$v_X = -\frac{I_{n1}}{2}R_X, \qquad v_Y = +\frac{I_{n1}}{2}R_X \quad\Longrightarrow\quad v_X - v_Y = -I_{n1}R_X .$$

差分输入 $v_{in}$ 产生 $v_X - v_Y = -g_{m1}R_Xv_{in}$。令两者的输出相等可知，$I_{n1}$ 等效于输入电压 $I_{n1}/g_{m1}$，与把 $M_1$ 看作源极接地的共源级完全一样。

同样的分解适用于一侧的每一个噪声源（例如 $M_3$ 注入 X 的电流）。因此我们分析**一个半边电路**，即由 CS 级 $M_1$（负载为 $M_3$）和其后的 CS 级 $M_5$（负载为 $M_7$）构成的两级放大器，然后**把它的输入参考噪声功率乘以 2**，以计入另一半边电路中与之不相关、但大小相同的噪声。

### 第 4 步 — 第一级的贡献（$M_1$ 和 $M_3$）

在半边电路中，节点 P 处于交流地（第 3 步）。$M_1$ 的噪声电流（经 $M_1$ 从 X 流到地）和 $M_3$ 的噪声电流（从 $V_{DD}$ 流入 X）都作用于节点 X，各自与本器件并联。两者互不相关，因此相加的是它们的*功率*（而不是幅度）。X 点的总噪声电流功率为

$$\overline{I_{n,X}^2} = 4kT\gamma\,(g_{m1} + g_{m3}).$$

该电流流过节点 X 的电阻 $R_X$，产生噪声电压

$$\overline{V_{n,X}^2} = 4kT\gamma\,(g_{m1} + g_{m3})\,R_X^2 .$$

从输入（$M_1$ 的栅极）到 X 的增益为 $g_{m1}R_X$。除以它的平方，即把噪声折算到输入端：

$$\overline{V_{n,in}^2}\Big|_{M_1,M_3} = \frac{4kT\gamma\,(g_{m1} + g_{m3})R_X^2}{(g_{m1}R_X)^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right).$$

$R_X$ 被消去，因此结果与 $r_O$ 的确切数值无关。数值计算：

$$
\begin{aligned}
\frac{1}{g_{m1}} &= \frac{1}{1.830\ \mathrm{mS}} = 546.4\ \Omega,\\
\frac{g_{m3}}{g_{m1}^2} &= \frac{0.980\times10^{-3}}{3.35\times10^{-6}}\ \Omega = 292.5\ \Omega,\\
\text{sum} &= 838.8\ \Omega .
\end{aligned}
$$

PMOS 负载使噪声在输入对管自身噪声的基础上增加约 54 %。其噪声电流直接进入节点 X，折算时除以的是 $g_{m1}^2$ 而不是 $g_{m3}^2$。

### 第 5 步 — 第二级的贡献（$M_5$ 和 $M_7$）

$M_5$ 和 $M_7$ 的噪声电流都流入输出节点 $V_{out1}$，该节点的电阻为 $R_{out}$：

$$\overline{V_{n,out1}^2} = 4kT\gamma\,(g_{m5} + g_{m7})\,R_{out}^2 .$$

从输入到 $V_{out1}$ 的增益为 $(g_{m1}R_X)(g_{m5}R_{out})$。除以它的平方：

$$\overline{V_{n,in}^2}\Big|_{M_5,M_7} = \frac{4kT\gamma\,(g_{m5} + g_{m7})R_{out}^2}{(g_{m1}R_X\,g_{m5}R_{out})^2} = 4kT\gamma\,\frac{g_{m5} + g_{m7}}{(g_{m1}R_X\,g_{m5})^2}.$$

数值计算：

$$
\begin{aligned}
g_{m1}R_X\,g_{m5} &= 48.8\times3.036\ \mathrm{mS} = 0.1482\ \mathrm{S},\\
(g_{m1}R_X\,g_{m5})^2 &= 0.02196\ \mathrm{S^2},\\
g_{m5} + g_{m7} &= 3.036 + 5.177 = 8.213\ \mathrm{mS},\\
\frac{g_{m5} + g_{m7}}{(g_{m1}R_X\,g_{m5})^2} &= \frac{8.213\times10^{-3}}{0.02196}\ \Omega = 0.37\ \Omega .
\end{aligned}
$$

0.37 Ω 与 838.8 Ω 相比，贡献仅为 **0.04 %**，可以忽略。原因在于：第二级的噪声要除以第一级增益的平方 $48.8^2 \approx 2400$ 才折算到输入端。这体现了一条普遍规律：高增益放大器的噪声由其第一级决定。

### 第 6 步 — 两个半边相加

一个半边电路给出

$$\overline{V_{n,in,half}^2} = 4kT\gamma\,(838.8 + 0.37)\ \Omega = (1.104\times10^{-20})(839.2)\ \mathrm{V^2/Hz} = 9.26\times10^{-18}\ \mathrm{V^2/Hz}.$$

差分输入同时“看到”两个半边电路（$M_1$/$M_3$/$M_5$/$M_7$ 与 $M_2$/$M_4$/$M_6$/$M_8$）互不相关的噪声，因此功率相加：

$$\overline{V_{n,in}^2} = 2\times9.26\times10^{-18} = 1.85\times10^{-17}\ \mathrm{V^2/Hz}.$$

噪声密度的均方根（rms）值为其平方根：

$$\sqrt{\overline{V_{n,in}^2}} = \sqrt{1.85\times10^{-17}}\ \mathrm{V/\sqrt{Hz}} = 4.3\ \mathrm{nV/\sqrt{Hz}}.$$

写成紧凑形式：

$$\overline{V_{n,in}^2} = 2\cdot4kT\gamma\left[\frac{1}{g_{m1}}\left(1 + \frac{g_{m3}}{g_{m1}}\right) + \frac{g_{m5} + g_{m7}}{(g_{m1}R_X\,g_{m5})^2}\right].$$

### 第 7 步 — 不产生贡献的噪声源

- **尾电流源 $I_{SS}$。** 由于对称，其噪声电流在 $M_1$ 和 $M_2$ 之间均分，使 X 和 Y 一起变化。这是共模噪声，对于完全匹配的电路，它在 $V_{out1} - V_{out2}$ 中相互抵消。
- **偏置线 $V_{b1}$。** 它以相同的方式驱动 $M_3$ 和 $M_4$（以及 $M_7$、$M_8$），因此其上的任何噪声也都是共模的。这里将其视为无噪声。

### 结果

$$\overline{V_{n,in}^2} = 2\cdot4kT\gamma\left[\frac{1}{g_{m1}}\left(1 + \frac{g_{m3}}{g_{m1}}\right) + \frac{g_{m5} + g_{m7}}{(g_{m1}R_X\,g_{m5})^2}\right] \approx 1.85\times10^{-17}\ \mathrm{V^2/Hz},$$

即折算到差分输入端**约为 4.3 nV/√Hz**。参数值为 $g_{m1} = 1.83$ mS，$g_{m3} = 0.98$ mS，$g_{m5} = 3.04$ mS，$g_{m7} = 5.18$ mS，$R_X = 26.7\ \mathrm{k}\Omega$。

- 第一级（$M_1$–$M_4$）几乎决定了全部噪声：每个半边等效为 839 Ω。
- 第二级每个半边只增加 0.37 Ω。
- 尾电流源只贡献共模噪声。

**常见错误。** 只计一个半边电路，得到 $\sqrt{9.26\times10^{-18}} \approx 3.0$ nV/√Hz。差分输入同时“看到”$M_1$ *和* $M_2$ 以及两个负载管的噪声。它们是相互独立的噪声源，因此半边电路的噪声功率必须加倍。

**常见错误。** 漏掉 PMOS 负载 $M_3$、$M_4$，得到约 3.5 nV/√Hz。它们的噪声电流直接流入 X 和 Y，与输入对管的噪声一样被放大。

**常见错误。** 认为第二级占主导，因为其器件的电流是第一级的 8 倍、$g_m$ 也大。第二级的噪声要除以第一级增益的平方（≈ 2400），因而可以忽略。同样，把尾电流噪声当作差模噪声也是错误的，因为由于对称性，它纯粹是共模噪声。
