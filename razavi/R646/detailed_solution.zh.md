# 详细步骤 - R646

**思路。** 对交流信号而言，$V_{DD}$ 和 $V_{cont}$ 都是地，因此在每个输出节点处，电感、固定寄生电容和变容二极管是并联的。要求这一谐振回路在 1 GHz 处谐振，就确定了每个节点的总电容；减去 500 fF 的寄生电容，即得二极管最多能增加的电容。

### 第 1 步 — 每个节点处的谐振回路

二极管处于反向偏置（reverse-biased）状态：阴极接 X 和 Y，电位接近 $V_{DD}$，阳极接 $V_{cont}$；它们相当于电容 $C_D$。$V_{DD}$ 和直流控制电压 $V_{cont}$ 都是交流地，因此 $L_P$、寄生电容 $C_{par} = 500$ fF 和 $C_D$ 都从 X 接到地，**相互并联**：

<!-- diagram: diagram-01.cir -->

每个节点的谐振回路电容（由对称性，Y 处相同）为

$$C_{tot} = C_{par} + C_D .$$

### 第 2 步 — 1 GHz 时所需的总电容

$$\omega_{osc} = \frac{1}{\sqrt{L_P\,C_{tot}}} \quad\Longrightarrow\quad C_{tot} = \frac{1}{\omega_{osc}^2L_P},$$

其中

$$\omega_{osc} = 2\pi f_{osc} = 2\pi\times10^9\ \mathrm{s^{-1}} = 6.283\times10^9\ \mathrm{rad/s}.$$

于是

$$
\begin{aligned}
\omega_{osc}^2 &= (6.283\times10^9)^2 = 3.948\times10^{19}\ \mathrm{s^{-2}},\\
\omega_{osc}^2L_P &= (3.948\times10^{19}\ \mathrm{s^{-2}})(5\times10^{-9}\ \mathrm{H}) = 1.974\times10^{11}\ \mathrm{F^{-1}},\\
C_{tot} &= \frac{1}{1.974\times10^{11}}\ \mathrm{F} = 5.07\times10^{-12}\ \mathrm{F} = 5.07\ \mathrm{pF}.
\end{aligned}
$$

### 第 3 步 — 二极管电容的最大值

$$C_{D,max} = C_{tot} - C_{par} = 5.07\ \mathrm{pF} - 0.50\ \mathrm{pF} = 4.57\ \mathrm{pF}.$$

$D_1$ 和 $D_2$ 各自最多可向其所在节点增加约 4.57 pF；再多的话，振荡频率就会低于 1 GHz。

### 第 4 步 — 用差模观点验算

在 X 与 Y 之间，两个电感串联，$2L_P = 10$ nH，两个节点电容也串联，为 $C_{tot}/2$：

$$\omega = \frac{1}{\sqrt{2L_P\cdot C_{tot}/2}} = \frac{1}{\sqrt{L_PC_{tot}}},$$

与第 2 步相同：2.53 pF 的差模电容与 10 nH 在 1 GHz 处谐振。✓ 同样，$D_1$ 和 $D_2$ 在 X 与 Y 之间（经交流接地的 $V_{cont}$）串联，因此这一对二极管最多增加 $4.57/2 = 2.28$ pF 的差模电容。

### 结果

$V_{DD}$ 和 $V_{cont}$ 都是交流地，因此每个节点的谐振回路是 $L_P$ 与 $C_{par} + C_D$ 并联：

$$C_{par} + C_D = \frac{1}{(2\pi\times10^9\ \mathrm{s^{-1}})^2(5\ \mathrm{nH})} = 5.07\ \mathrm{pF} \quad\Longrightarrow\quad C_{D,max} = 5.07 - 0.50 \approx 4.57\ \mathrm{pF}$$

这对 $D_1$ 和 $D_2$ 都适用（等价地说，X 与 Y 之间串联的这对二极管提供 2.28 pF 的差模电容）。

**常见错误。** 把差模电感 $2L_P = 10$ nH 与完整的单端电容混用，这样得到的总电容只有 2.53 pF，$C_D \approx 2.03$ pF。要么全部按单端分析，要么全部按差模分析，不能混用。

**常见错误。** 把变容二极管当作与 500 fF 的寄生电容串联。$V_{cont}$ 是交流地，因此在节点 X 处 $D_1$ 与 $C_{par}$ 并联。

**常见错误。** 使用 $\omega = 10^9$ rad/s（把赫兹与 rad/s 混淆），这会使 $C_{tot}$ 增大为 $(2\pi)^2 \approx 39.5$ 倍，约 200 pF。
