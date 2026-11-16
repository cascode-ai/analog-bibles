# 详细步骤 - R368

**思路。** 把每个晶体管的沟道热噪声（channel thermal noise）建模为接在其漏极与源极之间的电流源。输入参考（input-referred）噪声**电压**在输入端*短路*时求得，输入参考噪声**电流**在输入端*开路*时求得。在每种情况下，都把各噪声源在输出端产生的结果与输入信号在输出端产生的结果相比较，并沿用 $g_mr_O \gg 1$ 的近似。

### 第 1 步 — 电路以及哪些器件会贡献噪声

由图可知：

- $M_1$ 是一个**共栅**（common-gate，CG）放大器。其栅极接直流偏置 $V_b$（交流地），源极为输入节点，漏极为 $V_{out}$。
- $M_3$（PMOS）是从 $V_{DD}$ 接到 $V_{out}$ 的负载电流源（current source）。其栅极与二极管连接（diode-connected）的 $M_4$ 的栅极相连，后者由 $I_2$ 供电。
- $M_2$（NMOS）是从输入节点接到地的偏置电流源。其栅极与二极管连接的 $M_0$ 的栅极相连，后者由 $I_1$ 供电。图中 $\overline{I_{n2}^2}$ 画作 $M_2$ 的噪声电流，与 $M_2$ 并联。
- 两个电容把 $M_3$/$M_4$ 以及 $M_2$/$M_0$ 的栅极节点保持在交流地。

**电容的作用。** $M_4$、$M_0$、$I_1$ 和 $I_2$ 的噪声本来会以电压的形式出现在 $M_3$ 和 $M_2$ 的栅极上。在所关心的频率下，大电容把这些栅极节点短路到地，因此这部分噪声根本到达不了 $M_3$ 或 $M_2$。**需要考虑的噪声源只有 $M_1$、$M_2$ 和 $M_3$ 的沟道噪声电流。**

噪声模型（沟道热噪声）：$\overline{I_n^2} = 4kT\gamma g_m$，单位为 A²/Hz。其中 $k = 1.38\times10^{-23}$ J/K 为玻尔兹曼常数，$T = 300$ K，$\gamma = 2/3$ 为沟道噪声系数（channel-noise coefficient，并非体效应系数），$g_m$ 为跨导（transconductance）。公共因子为

$$4kT\gamma = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K})\times\tfrac23 = 1.104\times10^{-20}\ \mathrm{J}.$$

### 第 2 步 — 跨导与噪声电流

三个器件都有 $W/L = 50/0.5 = 100$，$I_D = 0.5$ mA。利用平方律（square law）$g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$：

$$
\begin{aligned}
g_{m1} = g_{m2} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{13.4\times10^{-6}}\ \mathrm{A/V} = 3.661\ \mathrm{mS},\\
g_{m3} &= \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{3.84\times10^{-6}}\ \mathrm{A/V} = 1.960\ \mathrm{mS}.
\end{aligned}
$$

$M_1$ 和 $M_2$ 为 NMOS，使用 $\mu_nC_{ox}$；$M_3$ 为 PMOS，使用 $\mu_pC_{ox}$。假设三者都处于饱和区（saturation region）。作为合理性检查，它们的过驱动电压（overdrive voltage）$V_{ov} = 2I_D/g_m$ 分别为：NMOS 器件 $2(0.5\ \mathrm{mA})/(3.661\ \mathrm{mS}) = 0.27$ V，PMOS 器件 $2(0.5\ \mathrm{mA})/(1.960\ \mathrm{mS}) = 0.51$ V，都是正常的数值。

噪声电流谱密度（noise current spectral density）为：

$$
\begin{aligned}
\overline{I_{n1}^2} = \overline{I_{n2}^2} &= 4kT\gamma\,g_{m1} = (1.104\times10^{-20})(3.661\times10^{-3}) = 4.04\times10^{-23}\ \mathrm{A^2/Hz},\\
\overline{I_{n3}^2} &= 4kT\gamma\,g_{m3} = (1.104\times10^{-20})(1.960\times10^{-3}) = 2.16\times10^{-23}\ \mathrm{A^2/Hz}.
\end{aligned}
$$

### 第 3 步 — “输入参考电压和电流”的含义及求法

电路内部的全部噪声可以用无噪声电路副本输入端的两个源来表示：

- 与输入**串联**的电压源 $\overline{V_{n,in}^2}$；
- 与输入**并联**的电流源 $\overline{I_{n,in}^2}$（接在输入节点与地之间）。

之所以两者都需要，是因为驱动信号源的阻抗未知。CG 级的输入阻抗很低，因此电流源尤为重要。两个源分别求出：

- **$\overline{V_{n,in}^2}$：把输入端短路到地**（信号源阻抗为零）。此时并联的电流源被短路，输出噪声只能由 $\overline{V_{n,in}^2}$ 产生。
- **$\overline{I_{n,in}^2}$：让输入端开路**（信号源阻抗为无穷大）。此时串联的电压源驱动的是开路，不起作用，输出噪声只能由 $\overline{I_{n,in}^2}$ 产生。

一个方便的工具是**短路输出电流**（short-circuit output current）$i_{out,sc}$：把 $V_{out}$ 短路到交流地，求每个源注入该短路的电流。实际输出电压等于 $i_{out,sc}$ 乘以输出阻抗，而对于给定的输入端接法（短路或开路），所有源看到的输出阻抗都相同。因此只需比较短路输出电流即可。

$M_1$ 的小信号模型（small-signal model）：从漏极流向源极的电流 $g_{m1}v_{gs1}$ 与 $r_{O1}$ 并联；由于栅极处于交流地，$v_{gs1} = 0 - v_S = -v_S$。这里 $r_O$ 是晶体管的输出电阻（output resistance），$v_S$ 是输入（源极）节点的小信号电压。$M_2$ 表现为从输入节点接到地的 $r_{O2}$，$M_3$ 表现为从输出端接到交流地（$V_{DD}$）的 $r_{O3}$。每个器件的噪声电流都与其 $r_O$ 并联。忽略体效应（body effect），因此没有 $g_{mb}$ 项。

### 第 4 步 — 输入参考噪声电压（输入短路）

输入短路时，$v_S = 0$。

- **$M_2$：** 其噪声电流 $I_{n2}$ 从输入节点流入对地短路，根本到达不了输出端。**它没有贡献。**
- **$M_1$：** 由于 $v_S = 0$，且 $v_{out} = 0$（如第 3 步所述，输出端短路），$M_1$ 的 $v_{gs1} = 0$，$v_{ds1} = 0$，因此其受控源和 $r_{O1}$ 中都没有电流。其从漏极流向源极的噪声电流 $I_{n1}$ 必须由输出短路提供：$i_{out,sc} = I_{n1}$。
- **$M_3$：** 其噪声电流从 $V_{DD}$ 流入输出节点，并直接流入短路：$i_{out,sc} = I_{n3}$。
- **输入信号 $v_{in}$**（加在 $M_1$ 的源极，即 $v_S = v_{in}$）。当 $v_{out} = 0$ 时，流过 $M_1$（从漏极到源极）的电流为
$$g_{m1}(0 - v_{in}) + \frac{0 - v_{in}}{r_{O1}} = -\left(g_{m1} + \frac{1}{r_{O1}}\right)v_{in}.$$
所以 $|i_{out,sc}| = (g_{m1} + 1/r_{O1})\,v_{in} \approx g_{m1}v_{in}$（利用了 $g_{m1}r_{O1} \gg 1$）。

令短路输出电流相等，每个噪声电流 $I_n$ 等效于输入电压 $I_n/g_{m1}$。各噪声功率相加：

$$\overline{V_{n,in}^2} = \frac{\overline{I_{n1}^2} + \overline{I_{n3}^2}}{g_{m1}^2} = \frac{4kT\gamma\,(g_{m1} + g_{m3})}{g_{m1}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right).$$

（利用熟悉的电压增益 $A_v = (g_{m1} + 1/r_{O1})(r_{O1}\parallel r_{O3}) \approx g_{m1}(r_{O1}\parallel r_{O3})$ 和输出噪声 $(\overline{I_{n1}^2} + \overline{I_{n3}^2})(r_{O1}\parallel r_{O3})^2$，也能得到同样的结果。）

数值计算：

$$
\begin{aligned}
\frac{1}{g_{m1}} &= \frac{1}{3.661\ \mathrm{mS}} = 273.2\ \Omega,\\
\frac{g_{m3}}{g_{m1}^2} &= \frac{1.960\times10^{-3}}{13.4\times10^{-6}}\ \Omega = 146.2\ \Omega,\\
\overline{V_{n,in}^2} &= (1.104\times10^{-20})(273.2 + 146.2)\ \mathrm{V^2/Hz} = (1.104\times10^{-20})(419.4) = 4.63\times10^{-18}\ \mathrm{V^2/Hz},\\
\sqrt{\overline{V_{n,in}^2}} &= 2.15\ \mathrm{nV/\sqrt{Hz}}.
\end{aligned}
$$

### 第 5 步 — 输入参考噪声电流（输入开路）

输入开路时，输入节点只与 $M_1$ 的源极和 $M_2$（$r_{O2}$ 与 $I_{n2}$ 并联）相连。输入参考电流源 $I_{n,in}$ 接在该节点与地之间。

**首先求 CG 级的电流增益。** 在输出短路的情况下，向输入节点注入测试电流 $i_{in}$。在输入节点应用基尔霍夫电流定律（KCL）：注入电流 $i_{in}$ 加上从 $M_1$ 漏-源支路流来的电流，必须全部经 $r_{O2}$ 流出：

$$
\begin{aligned}
i_{in} + \left[-g_{m1}v_S - \frac{v_S}{r_{O1}}\right] &= \frac{v_S}{r_{O2}}\\
v_S &= \frac{i_{in}}{g_{m1} + 1/r_{O1} + 1/r_{O2}}.
\end{aligned}
$$

因此，$M_1$ 在输入节点与输出短路之间传送的电流大小为

$$|i_{out,sc}| = \left(g_{m1} + \frac{1}{r_{O1}}\right)v_S = \frac{g_{m1} + 1/r_{O1}}{g_{m1} + 1/r_{O1} + 1/r_{O2}}\;i_{in} \approx \left(1 - \frac{1}{g_{m1}r_{O2}}\right)i_{in} \approx i_{in}.$$

这正是 CG 级的关键特性：它是一个**电流缓冲器**（current buffer）。从 $M_1$ 源极看进去的阻抗（$\approx 1/g_{m1}$）远小于 $r_{O2}$，因此几乎全部输入电流都经 $M_1$ 流到输出端。

现在逐个分析各噪声源：

- **$M_2$：** $I_{n2}$ 的连接位置与 $I_{n,in}$ 完全相同，都与输入并联。因此它**一比一地**折算到输入端：$\overline{I_{n,in}^2}\big|_{M_2} = \overline{I_{n2}^2}$。
- **$M_3$：** $I_{n3}$ 直接注入输出节点，因此 $i_{out,sc} = I_{n3}$。而输入电流产生的是 $i_{out,sc} \approx i_{in}$。故 $\overline{I_{n,in}^2}\big|_{M_3} \approx \overline{I_{n3}^2}$，误差为 $1/(g_mr_O)$ 量级。
- **$M_1$：** 其噪声电流从漏极流向源极。在输出短路的情况下，对输入节点列 KCL：
$$
\begin{aligned}
I_{n1} - g_{m1}v_S - \frac{v_S}{r_{O1}} &= \frac{v_S}{r_{O2}},\\
v_S &= \frac{I_{n1}}{g_{m1} + 1/r_{O1} + 1/r_{O2}}.
\end{aligned}
$$
$M_1$ 支路（噪声源、受控源和 $r_{O1}$ 的总和）送到输入节点的全部电流都必须经 $r_{O2}$ 流出，而这一电流正是从输出短路中抽取的：
$$|i_{out,sc}| = \frac{v_S}{r_{O2}} = \frac{I_{n1}}{1 + (g_{m1} + 1/r_{O1})\,r_{O2}} \approx \frac{I_{n1}}{g_{m1}r_{O2}} .$$
源极开路时，$M_1$ 受到大电阻 $r_{O2}$ 的源极负反馈（source degeneration）作用。其噪声电流主要在器件内部循环，到达输出端时被衰减了 $g_{m1}r_{O2} \gg 1$ 倍。折算到输入端为 $I_{n1}/(g_{m1}r_{O2})$，**可以忽略**。

各功率相加：

$$\overline{I_{n,in}^2} \approx \overline{I_{n2}^2} + \overline{I_{n3}^2} = 4kT\gamma\,(g_{m2} + g_{m3}).$$

数值计算：

$$
\begin{aligned}
g_{m2} + g_{m3} &= 3.661 + 1.960 = 5.621\ \mathrm{mS},\\
\overline{I_{n,in}^2} &= (1.104\times10^{-20})(5.621\times10^{-3})\ \mathrm{A^2/Hz} = 6.2\times10^{-23}\ \mathrm{A^2/Hz},\\
\sqrt{\overline{I_{n,in}^2}} &= 7.9\ \mathrm{pA/\sqrt{Hz}}.
\end{aligned}
$$

### 结果

$$\overline{V_{n,in}^2} = 4kT\gamma\,\frac{g_{m1} + g_{m3}}{g_{m1}^2} \approx 4.63\times10^{-18}\ \mathrm{V^2/Hz}\quad(\approx 2.15\ \mathrm{nV/\sqrt{Hz}}),$$

$$\overline{I_{n,in}^2} = 4kT\gamma\,(g_{m2} + g_{m3}) \approx 6.2\times10^{-23}\ \mathrm{A^2/Hz}\quad(\approx 7.9\ \mathrm{pA/\sqrt{Hz}}),$$

其中 $g_{m1} = g_{m2} = 3.66$ mS，$g_{m3} = 1.96$ mS。

- 噪声电压来自 $M_1$ 和 $M_3$。
- 噪声电流来自 $M_2$ 和 $M_3$。
- 被旁路的镜像管 $M_0$ 和 $M_4$ 没有贡献。
- 若计入体效应，噪声电压表达式中的 $g_{m1}$ 将变为 $g_{m1} + g_{mb1}$，所得数值略低。

**常见错误。** 把 $M_2$ 的噪声计入输入参考*电压*。输入短路时，$I_{n2}$ 流入短路，无法到达输出端。$M_2$ 只应计入输入参考*电流*。

**常见错误。** 把 $M_1$ 的噪声计入输入参考*电流*。输入开路时，$M_1$ 受到 $r_{O2}$ 的源极负反馈作用，其噪声被抑制了 $g_{m1}r_{O2} \gg 1$ 倍。还要注意，$M_3$ 在**两个**量中都出现，因此 $\overline{V_{n,in}^2}$ 与 $\overline{I_{n,in}^2}$ 部分相关。

**常见错误。** 计入电流镜（current mirror）中二极管连接管 $M_0$、$M_4$ 的噪声（电容已将它们的栅极节点短路），或者对 NMOS 器件使用 $\mu_pC_{ox}$（或对 PMOS 使用 $\mu_nC_{ox}$）。这两种错误都会同时改变两个结果。
