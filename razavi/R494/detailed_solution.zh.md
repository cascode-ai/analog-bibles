# 详细步骤 - R494

**思路。** 把每个晶体管的沟道热噪声建模为漏源之间的电流 $4kT\gamma g_m$，通过从输入到该电流所流入节点的增益把它折合到输入端，再把互不相关的功率相加。由对称性，只需分析一个半边电路，并把其噪声功率加倍。

### 第 1 步 — 半边电路与噪声因子

把 $M_1$ 和 $M_2$ 的公共源极节点记为 P。输出为 $V_{out1} - V_{out2}$，且 $\overline{V_{n,in}^2} = \overline{V_{n,out}^2}/A_v^2$。

由对称性，对差分信号和噪声而言 P 是虚地（virtual ground），任何噪声电流的共模部分都会在 $V_{out1} - V_{out2}$ 中抵消。因此只需分析**一个半边电路**：共源级（common-source stage）$M_1$（源极接地，电流源负载 $M_3$，输出为 X），后接共源级 $M_5$（栅极接 X，电流源负载 $M_7$，输出为 $V_{out1}$）；考虑到另一半完全相同且噪声互不相关，再**把其输入参考噪声功率加倍**。

每个沟道噪声电流都带有因子

$$4kT\gamma = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K})\times\tfrac23 = 1.104\times10^{-20}\ \mathrm{J}.$$

### 第 2 步 — 偏置电流与小信号参数

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = 0.125\ \mathrm{mA}, \qquad I_{D5} = I_{D6} = I_{D7} = I_{D8} = 1\ \mathrm{mA}.$$

除 $M_{5,6}$ 的 $W/L = 60/0.5 = 120$ 外，所有器件的 $W/L = 50/0.5 = 100$。所有晶体管均处于饱和区（saturation region），因此 $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$，其中 $M_1$、$M_2$、$M_7$、$M_8$ 用 $\mu_nC_{ox}$，$M_3$–$M_6$ 用 $\mu_pC_{ox}$：

$$
\begin{aligned}
g_{m1} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.125\ \mathrm{mA})} = \sqrt{3.35\times10^{-6}}\ \mathrm{A/V} = 1.830\ \mathrm{mS},\\
g_{m3} &= \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(100)(0.125\ \mathrm{mA})} = \sqrt{0.96\times10^{-6}}\ \mathrm{A/V} = 0.980\ \mathrm{mS},\\
g_{m5} &= \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(120)(1\ \mathrm{mA})} = \sqrt{9.216\times10^{-6}}\ \mathrm{A/V} = 3.036\ \mathrm{mS},\\
g_{m7} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{A/V} = 5.177\ \mathrm{mS}.
\end{aligned}
$$

由对称性，$g_{m2} = g_{m1}$，$g_{m4} = g_{m3}$，$g_{m6} = g_{m5}$，$g_{m8} = g_{m7}$。由 $r_O = 1/(\lambda I_D)$：

$$
\begin{aligned}
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.125\ \mathrm{mA})} = 80\ \mathrm{k}\Omega, &
r_{O3} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.125\ \mathrm{mA})} = 40\ \mathrm{k}\Omega,\\
r_{O5} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega, &
r_{O7} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega.
\end{aligned}
$$

节点电阻与各级增益：

$$
\begin{aligned}
R_X &= r_{O1}\parallel r_{O3} = \frac{80\times40}{80+40}\ \mathrm{k}\Omega = 26.67\ \mathrm{k}\Omega,\\
R_{out} &= r_{O5}\parallel r_{O7} = \frac{5\times10}{5+10}\ \mathrm{k}\Omega = 3.33\ \mathrm{k}\Omega,\\
A_1 &= g_{m1}R_X = (1.830\ \mathrm{mS})(26.67\ \mathrm{k}\Omega) = 48.8,\\
A_2 &= g_{m5}R_{out} = (3.036\ \mathrm{mS})(3.33\ \mathrm{k}\Omega) = 10.1,\\
A_v &= A_1A_2 \approx 494 .
\end{aligned}
$$

### 第 3 步 — 第一级的贡献（$M_1$ 和 $M_3$）

在半边电路中 P 接交流地，$M_1$ 和 $M_3$ 的噪声电流都流入节点 X。二者互不相关，因此功率相加，并流过 $R_X$：

$$\overline{I_{n,X}^2} = 4kT\gamma\,(g_{m1} + g_{m3}), \qquad \overline{V_{n,X}^2} = 4kT\gamma\,(g_{m1} + g_{m3})\,R_X^2 .$$

除以从 $M_1$ 栅极到 X 的增益的平方 $(g_{m1}R_X)^2$：

$$\overline{V_{n,in}^2}\Big|_{M_1,M_3} = \frac{4kT\gamma\,(g_{m1} + g_{m3})R_X^2}{(g_{m1}R_X)^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right).$$

$R_X$ 被约去，因此结果与 $r_O$ 的确切数值无关。数值计算：

$$
\begin{aligned}
\frac{1}{g_{m1}} &= \frac{1}{1.830\ \mathrm{mS}} = 546.4\ \Omega,\\
\frac{g_{m3}}{g_{m1}^2} &= \frac{0.980\times10^{-3}}{3.35\times10^{-6}}\ \Omega = 292.5\ \Omega,\\
\text{sum} &= 838.8\ \Omega .
\end{aligned}
$$

PMOS 负载使噪声在输入对自身噪声的基础上增加约 54 %，因为它的噪声电流直接注入 X，并按 $g_{m1}^2$ 而不是 $g_{m3}^2$ 折合到输入。

### 第 4 步 — 第二级的贡献（$M_5$ 和 $M_7$）

$M_5$ 和 $M_7$ 的噪声电流都流入 $V_{out1}$，该节点的电阻为 $R_{out}$：

$$\overline{V_{n,out1}^2} = 4kT\gamma\,(g_{m5} + g_{m7})\,R_{out}^2 .$$

除以从输入到 $V_{out1}$ 的增益的平方 $(g_{m1}R_X\,g_{m5}R_{out})^2$：

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

即 0.37 Ω 对比 838.8 Ω，贡献只有 **0.04 %**：可以忽略，因为第二级的噪声要除以第一级增益的平方 $48.8^2 \approx 2400$。

### 第 5 步 — 两个半边相加

一个半边电路给出

$$\overline{V_{n,in,half}^2} = 4kT\gamma\,(838.8 + 0.37)\ \Omega = (1.104\times10^{-20})(839.2)\ \mathrm{V^2/Hz} = 9.26\times10^{-18}\ \mathrm{V^2/Hz}.$$

差分输入同时看到两个半边互不相关的噪声（$M_1$/$M_3$/$M_5$/$M_7$ 和 $M_2$/$M_4$/$M_6$/$M_8$），因此

$$\overline{V_{n,in}^2} = 2\times9.26\times10^{-18} = 1.85\times10^{-17}\ \mathrm{V^2/Hz}, \qquad \sqrt{\overline{V_{n,in}^2}} = \sqrt{1.85\times10^{-17}}\ \mathrm{V/\sqrt{Hz}} = 4.3\ \mathrm{nV/\sqrt{Hz}}.$$

写成紧凑形式：

$$\overline{V_{n,in}^2} = 2\cdot4kT\gamma\left[\frac{1}{g_{m1}}\left(1 + \frac{g_{m3}}{g_{m1}}\right) + \frac{g_{m5} + g_{m7}}{(g_{m1}R_X\,g_{m5})^2}\right].$$

### 第 6 步 — 没有贡献的噪声源

- **尾电流源 $I_{SS}$。** 由对称性，其噪声电流在 $M_1$ 和 $M_2$ 之间平均分配，使 X 和 Y 同向变化：这是共模噪声，对于完全匹配的电路，它在 $V_{out1} - V_{out2}$ 中抵消。
- **偏置线 $V_{b1}$。** 它以相同方式驱动 $M_3$ 和 $M_4$（以及 $M_7$、$M_8$），因此其上的任何噪声也是共模的；这里将其视为无噪声。

### 结果

$$\overline{V_{n,in}^2} = 2\cdot4kT\gamma\left[\frac{1}{g_{m1}}\left(1 + \frac{g_{m3}}{g_{m1}}\right) + \frac{g_{m5} + g_{m7}}{(g_{m1}R_X\,g_{m5})^2}\right] \approx 1.85\times10^{-17}\ \mathrm{V^2/Hz},$$

即折合到差分输入端**约为 4.3 nV/√Hz**，其中 $g_{m1} = 1.83$ mS，$g_{m3} = 0.98$ mS，$g_{m5} = 3.04$ mS，$g_{m7} = 5.18$ mS，$R_X = 26.7\ \mathrm{k}\Omega$。

- 第一级（$M_1$–$M_4$）几乎决定了全部噪声：每个半边的等效电阻为 839 Ω。
- 第二级每个半边只增加 0.37 Ω。
- 尾电流源只贡献共模噪声。

**常见错误。** 只计算一个半边电路，得到 $\sqrt{9.26\times10^{-18}} \approx 3.0$ nV/√Hz。$M_1$ **和** $M_2$ 的噪声以及两个负载的噪声都作为独立的噪声源到达差分输入端，因此半边电路的噪声功率必须加倍。

**常见错误。** 漏掉 PMOS 负载 $M_3$、$M_4$，得到约 3.5 nV/√Hz。它们的噪声电流直接流入 X 和 Y，与输入对的噪声一样被放大。

**常见错误。** 认为第二级的器件电流大 8 倍，因而其噪声占主导：实际上它的噪声要除以第一级增益的平方（≈ 2400）。同样，尾电流噪声纯粹是共模噪声，不能算作差分噪声。
