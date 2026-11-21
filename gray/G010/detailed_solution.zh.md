# 详细步骤 - G010

由偏置点求出混合 π 模型的各个元件：由 $I_C$ 求本征元件 $g_m$、$r_\pi$、$r_o$ 和 $r_\mu$；由 $\tau_F$ 求基区充电电容；由各结的偏置电压求结电容。然后在内部节点与引出端之间加入欧姆电阻 $r_b$、$r_c$ 和 $r_{ex}$。

### 第 1 步 — 跨导与输入电阻

在正向放大区 $I_C=I_Se^{V_{BE}/V_T}$，故

$$
g_m=\frac{dI_C}{dV_{BE}}=\frac{I_C}{V_T}=\frac{0.2\ \mathrm{mA}}{26\ \mathrm{mV}}=7.69\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=\frac{100}{7.69\ \mathrm{mA/V}}=13.0\ \mathrm{k\Omega}.
$$

### 第 2 步 — 输出电阻与集电极-基极电阻

厄利效应（Early effect）给出 $r_o=V_A/I_C$。题给参数为 $\eta=V_T/V_A$，因此 $V_A=V_T/\eta=26$ V，

$$
r_o=\frac1{\eta g_m}=\frac{V_A}{I_C}=\frac{26\ \mathrm V}{0.2\ \mathrm{mA}}=130\ \mathrm{k\Omega},\qquad
r_\mu=5\beta_0r_o=5(100)(130\ \mathrm{k\Omega})=65\ \mathrm{M\Omega}.
$$

$r_\mu$ 描述基区宽度调制对基区复合电流的影响；它非常大，通常可以忽略。

### 第 3 步 — 发射结电容 $C_\pi$

$C_\pi$ 是基区充电（扩散）电容与正偏发射结耗尽层电容之和。基区存储电荷为 $Q_F=\tau_FI_C$，故

$$
C_b=\frac{dQ_F}{dV_{BE}}=\tau_Fg_m=(15\ \mathrm{ps})(7.69\ \mathrm{mA/V})=0.115\ \mathrm{pF},
$$
$$
C_\pi=C_b+C_{je}\approx0.115\ \mathrm{pF}+2(20\ \mathrm{fF})=0.155\ \mathrm{pF}.
$$

### 第 4 步 — 反偏结电容

集电结和集电极-衬底结分别被 $V_{CB}=3$ V 和 $V_{CS}=4$ V 反向偏置，按 $C=C_0/(1+V_R/\psi_0)^{1/2}$：

$$
\begin{aligned}
C_\mu&=\frac{10\ \mathrm{fF}}{\sqrt{1+3\ \mathrm V/0.55\ \mathrm V}}=\frac{10\ \mathrm{fF}}{2.54}=3.9\ \mathrm{fF},\\
C_{cs}&=\frac{20\ \mathrm{fF}}{\sqrt{1+4\ \mathrm V/0.55\ \mathrm V}}=\frac{20\ \mathrm{fF}}{2.88}=7.0\ \mathrm{fF}.
\end{aligned}
$$

### 第 5 步 — 组装等效电路

本征晶体管位于内部节点 B′、E′ 和 C′ 之间；寄生电阻把这些节点连到引出端 B、E 和 C：

- $r_b=200\ \Omega$ 接在基极端 B 与内部基极 B′ 之间；
- $r_\pi\parallel C_\pi$ 接在 B′ 与内部发射极 E′ 之间，其上电压为 $v_1$；
- $r_\mu\parallel C_\mu$ 接在 B′ 与内部集电极 C′ 之间（集电结）；
- 受控源 $g_mv_1$ 与 $r_o$ 接在 C′ 与 E′ 之间；
- $r_{ex}=4\ \Omega$ 接在 E′ 与发射极端 E 之间；
- $r_c=100\ \Omega$ 接在 C′ 与集电极端 C 之间；
- $C_{cs}$ 接在 C′ 与衬底之间，衬底为交流地。

<!-- diagram: diagram-01.cir -->

| 元件 | 数值 |
|---|---|
| $g_m$ | 7.69 mA/V |
| $r_\pi$ | 13.0 kΩ |
| $r_o$ | 130 kΩ |
| $r_\mu$ | 65 MΩ |
| $C_\pi$ | 0.155 pF（$C_b=0.115$ pF，$C_{je}=40$ fF） |
| $C_\mu$ | 3.9 fF |
| $C_{cs}$ | 7.0 fF |
| $r_b$、$r_c$、$r_{ex}$ | 200 Ω、100 Ω、4 Ω |

$C_{cs}$ 画在 C′ 处，因为集电极-衬底结位于集电区下方；若改接在引出端 C，此处影响很小，因为 $r_cC_{cs}\approx0.7$ ps。
