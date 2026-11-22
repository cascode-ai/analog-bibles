# 详细步骤 - G430

折叠式共源共栅的差模增益为 $a_{dm0}=-G_mR_{odh}$：输入对管的跨导乘以差模半边电路的输出电阻。在漏极电流固定时，$W/L$ 加倍使 $g_{m1}$ 增大到 $\sqrt2$ 倍，但不改变任何输出电阻，因为每个 $r_o=1/(\lambda|I_D|)$ 只取决于电流。先计算一次输出电阻，再计算新的 $g_{m1}$。

### 第 1 步 — 小信号参数

由 $W/L=133.3m$、$g_m=\sqrt{2k'(W/L)|I_D|}$、$r_o=1/(\lambda|I_D|)$：

| 器件 | $m$ | $\lvert I_D\rvert$ | $g_m$ | $r_o$ |
|---|---|---|---|---|
| $M_1$（新） | 20 | 2.0 mA | 42.6 mA/V | 3.33 kΩ |
| $M_1$（原） | 10 | 2.0 mA | 30.1 mA/V | 3.33 kΩ |
| $M_{1A}$（PMOS） | 24 | 2.4 mA | 26.3 mA/V | 2.45 kΩ |
| $M_{11}$（PMOS） | 44 | 4.4 mA | — | 1.34 kΩ |
| $M_3$、$M_{3A}$（NMOS） | 12 | 2.4 mA | 36.1 mA/V | 2.78 kΩ |

代表性代入：

$$
g_{m1}=\sqrt{2(170\ \mu\mathrm{A/V^2})(20\times133.3)(2.0\ \mathrm{mA})}=42.6\ \mathrm{mA/V}.
$$

### 第 2 步 — 差模半边电路的输出电阻

在差模半边电路中尾节点为交流地。从输出向上看，PMOS 共源共栅管 $M_{1A}$ 的源极接折叠节点电阻 $r_{o1}\parallel r_{o11}$；向下看，$M_{3A}$ 的源极接 $r_{o3}$。对共源共栅结构采用 $R\approx g_mr_o\cdot R_S$：

$$
\begin{aligned}
R_{\mathrm{up}}&\approx g_{m1A}r_{o1A}(r_{o1}\parallel r_{o11})=(26.3\ \mathrm{mA/V})(2.45\ \mathrm{k\Omega})(0.954\ \mathrm{k\Omega})=61.5\ \mathrm{k\Omega},\\
R_{\mathrm{down}}&\approx g_{m3A}r_{o3A}r_{o3}=(36.1\ \mathrm{mA/V})(2.78\ \mathrm{k\Omega})(2.78\ \mathrm{k\Omega})=279\ \mathrm{k\Omega},\\
R_{odh}&=R_{\mathrm{up}}\parallel R_{\mathrm{down}}=50.4\ \mathrm{k\Omega}.
\end{aligned}
$$

$r_{o1}$ 不变（电流相同），因此 $R_{odh}$ 与原设计相同。

### 第 3 步 — 新的差模增益

$$
a_{dm0}=-g_{m1}R_{odh}=-(42.6\ \mathrm{mA/V})(50.4\ \mathrm{k\Omega})\approx-2.1\times10^{3}.
$$

原设计给出 $-(30.1\ \mathrm{mA/V})(50.4\ \mathrm{k\Omega})\approx-1.5\times10^{3}$，因此增益增大到 $\sqrt2$ 倍。

### 第 4 步 — 进一步修正

采用完整的共源共栅表达式，$R_{\mathrm{up}}=(1+g_{m1A}r_{o1A})(r_{o1}\parallel r_{o11})+r_{o1A}=64.9$ kΩ，$R_{\mathrm{down}}=(1+g_{m3A}r_{o3A})r_{o3}+r_{o3A}=284$ kΩ，故 $R_{odh}=52.8$ kΩ。此外，$M_1$ 的信号电流有一小部分流入 $r_{o1}\parallel r_{o11}$，而不是 $M_{1A}$ 的源极，因此等效跨导为 $g_{m1}(g_{m1A}+1/r_{o1A})/(g_{m1A}+1/r_{o1A}+1/(r_{o1}\parallel r_{o11}))=41.0$ mA/V。于是半边电路的精确增益为 $-(41.0\ \mathrm{mA/V})(52.8\ \mathrm{k\Omega})=-2165$（$m_1=10$ 时为 $-1531$）。各种估算都在约 $-2130$ 到 $-2250$ 之间，即 $a_{dm0}\approx-2.1\times10^{3}$ 至 $-2.2\times10^{3}$。
