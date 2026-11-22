# 详细步骤 - grsim-07-40

先求四个相同晶体管的共同偏置点和跨导，然后在输入电流源开路、输出短路的条件下，求小信号电路中每个电容看到的零值电阻。各 $RC$ 乘积之和给出主极点的估计，并与 $f_T$ 比较。最后对同一线性电路做 ngspice 交流分析，得到 50、100 和 200 µA 下的实际带宽。

### 第 1 步 — 偏置点与小信号参数

四个器件都以 $I_D=I_{\text{IN}}=100\ \mu$A 工作在饱和区（$M_1$、$M_2$ 镜像 $M_3$、$M_4$，输出端固定在 $V_{GS3}+V_{GS4}$，因此各 $V_{DS}$ 相互匹配）。由平方律 $I_D=\tfrac12\mu_nC_{ox}(W/L)(V_{GS}-V_t)^2$ 得

$$
V_{GS}=V_t+\sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}}=0.7+\sqrt{\frac{2(100\ \mu\mathrm{A})}{(60\ \mu\mathrm{A/V^2})(10)}}=1.277\ \mathrm{V},
$$

所以 $V_{\text{OUT}}=2V_{GS}=2.555$ V。由于 $\gamma=0$、$\lambda=0$，每个器件都是纯跨导：

$$
g_m=\sqrt{2\mu_nC_{ox}(W/L)I_D}=\sqrt{2(60\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm{A})}=0.3464\ \mathrm{mA/V},\qquad \frac{1}{g_m}=2.887\ \mathrm{k\Omega}.
$$

### 第 2 步 — 节点与电容位置

小信号节点命名如下：

- **A**：输入节点，即 $M_4$ 的漏极和栅极以及 $M_2$ 的栅极；
- **B**：$M_3$ 的漏极和栅极、$M_4$ 的源极以及 $M_1$ 的栅极；
- **C**：$M_1$ 的漏极和 $M_2$ 的源极；
- 输出端（$M_2$ 的漏极）因负载阻抗为零而是交流地，所有衬底接地。

于是每个电容对应一对节点：

| 电容 | 连接位置 | $C$ |
|---|---|---|
| $C_{gs3}$、$C_{db3}$、$C_{sb4}$、$C_{gs1}$ | B – 地 | 60 fF |
| $C_{gs4}$ | A – B | 20 fF |
| $C_{db4}$ | A – 地 | 10 fF |
| $C_{gs2}$ | A – C | 20 fF |
| $C_{gd2}$ | A – 地（输出） | 3 fF |
| $C_{gd1}$ | B – C | 3 fF |
| $C_{db1}$、$C_{sb2}$ | C – 地 | 20 fF |

$C_{gd4}$ 和 $C_{gd3}$ 两端接在同一节点上（二极管连接），$C_{db2}$ 被零负载短路，因此它们都不起作用。$C_{sb3}$ 和 $C_{sb1}$ 两端都接地。

### 第 3 步 — 零值电阻

所有电容开路、输入源开路（其阻抗为无穷大），在某个电容的两端加测试电流 $i_x$，节点方程中只有 $g_m v_{gs}$ 受控源：

$$
\begin{aligned}
\text{A:}&\quad i_{A}=g_m(v_A-v_B)\\
\text{B:}&\quad i_{B}=-g_m(v_A-v_B)+g_m v_B\\
\text{C:}&\quad i_{C}=-g_m(v_A-v_C)+g_m v_B
\end{aligned}
$$

其中 $i_A$、$i_B$、$i_C$ 为注入各节点的测试电流。

- **B 对地**（$i_B=i_x$）：节点 A 没有其他通路，因此 $M_4$ 中没有信号电流，$v_A=v_B$，且 $v_B=i_x/g_m$。$R=1/g_m$。
- **A 对 B**（$i_A=i_x$，$i_B=-i_x$）：$M_4$ 流过 $i_x$，因此 $v_A-v_B=i_x/g_m$。$R=1/g_m$。
- **A 对地**（$i_A=i_x$）：$i_x$ 流过两个串联的二极管连接器件，$v_B=i_x/g_m$，$v_A=2i_x/g_m$。$R=2/g_m$。
- **A 对 C**（$i_A=i_x$，$i_C=-i_x$）：$v_B=i_x/g_m$，$v_A=2i_x/g_m$；在节点 C，$g_m(v_A-v_C)=g_mv_B+i_x=2i_x$，所以 $v_A-v_C=2i_x/g_m$。$R=2/g_m$。
- **B 对 C**（$i_B=i_x$，$i_C=-i_x$）：$v_A=v_B=i_x/g_m$；在节点 C，由 $g_m(v_A-v_C)=2i_x$ 得 $v_C=-i_x/g_m$，所以 $v_B-v_C=2i_x/g_m$。$R=2/g_m$。
- **C 对地**（$i_C=i_x$）：$v_A=v_B=0$，因此 $i_x=g_mv_C$。$R=1/g_m$。

### 第 4 步 — 时间常数之和与主极点

| 电容 | $C$ | $R$ | $RC$ |
|---|---|---|---|
| 节点 B 对地 | 60 fF | $1/g_m=2.887\ \mathrm{k\Omega}$ | 173.2 ps |
| $C_{gs4}$（A–B） | 20 fF | $1/g_m$ | 57.7 ps |
| $C_{db4}$（A–地） | 10 fF | $2/g_m=5.774\ \mathrm{k\Omega}$ | 57.7 ps |
| $C_{gs2}$（A–C） | 20 fF | $2/g_m$ | 115.5 ps |
| $C_{gd2}$（A–地） | 3 fF | $2/g_m$ | 17.3 ps |
| $C_{gd1}$（B–C） | 3 fF | $2/g_m$ | 17.3 ps |
| 节点 C 对地 | 20 fF | $1/g_m$ | 57.7 ps |
| $T_0$ | | | 496.5 ps |

零值时间常数法把时间常数之和的倒数作为主极点：

$$
\omega_{p1}\approx\frac{1}{T_0}=\frac{1}{0.4965\ \mathrm{ns}}=2.01\times10^{9}\ \mathrm{rad/s},\qquad f_{p1}\approx\frac{\omega_{p1}}{2\pi}=321\ \mathrm{MHz}.
$$

### 第 5 步 — 与 $f_T$ 比较

$$
f_T=\frac{g_m}{2\pi(C_{gs}+C_{gd})}=\frac{0.3464\ \mathrm{mA/V}}{2\pi(23\ \mathrm{fF})}=2.40\ \mathrm{GHz}.
$$

估计值为 $f_T/7.5$。电流镜比单个晶体管慢，因为信号要经过多个节点，每个节点都负载了不止一个 $C_{gs}$ 以及结电容，而且节点 A 经由 $2/g_m$ 驱动。由于每个 $R$ 都是 $1/g_m$ 的倍数而电容固定，$T_0\propto1/g_m\propto1/\sqrt{I_{\text{IN}}}$：50 µA 时估计值为 227 MHz，200 µA 时为 453 MHz。

### 第 6 步 — SPICE 仿真

网表使用 level-1 模型，参数取题给的 $\mu_nC_{ox}$、$V_t$、$\lambda=0$、$\gamma=0$，不含器件本征电容，偏置点电容以固定电容的形式加入。输入为与直流 $I_{\text{IN}}$ 并联的交流电流源，一个交流 0 V 的电压源把输出固定在 $2V_{GS}$ 并测量 $i_{\text{out}}$。其他电流下修改 `iin` 和 `vo` $=2V_{GS}$（50 µA 时为 2.2165 V，200 µA 时为 3.0330 V）。

```spice
* grsim-07-40 cascode mirror current gain
.param iin=100u
.param vo=2.5547
.model nm nmos level=1 kp=60u vto=0.7 lambda=0 gamma=0
VDD vdd 0 5
Iin vdd a dc {iin} ac 1
M4 a a b 0 nm w=10u l=1u
M3 b b 0 0 nm w=10u l=1u
M2 o a c 0 nm w=10u l=1u
M1 c b 0 0 nm w=10u l=1u
Vout o 0 dc {vo}
Cgs4 a b 20f
Cdb4 a 0 10f
Csb4 b 0 10f
Cgs3 b 0 20f
Cdb3 b 0 10f
Cgs2 a c 20f
Cgd2 a o 3f
Csb2 c 0 10f
Cgs1 b 0 20f
Cgd1 b c 3f
Cdb1 c 0 10f
.ac dec 400 1Meg 20G
.pz a 0 o 0 cur pz
.end
```

各电流下低频增益 $|i_{\text{out}}/i_{\text{in}}|$ 均为 1.000。在增益降到 $1/\sqrt2$ 处读取 −3 dB 频率：

| $I_{\text{IN}}$ | $g_m$ (mA/V) | 零值估计 | 仿真 −3 dB | 极点（仿真） |
|---|---|---|---|---|
| 50 µA | 0.245 | 227 MHz | 349 MHz | 370 MHz；$(1.01\pm j0.40)$ GHz |
| 100 µA | 0.346 | 321 MHz | 494 MHz | 524 MHz；$(1.43\pm j0.57)$ GHz |
| 200 µA | 0.490 | 453 MHz | 698 MHz | 741 MHz；$(2.02\pm j0.80)$ GHz |

![IIN = 50、100、200 µA 时电流增益幅值（dB）随对数频率变化的曲线，−3 dB 点分别为 349、494、698 MHz](/q/grsim-07-40/solution-magnitude.zh.svg)

100 µA 时电路有一个位于 524 MHz 的实极点和一对幅值约 1.5 GHz 的复极点。这对复极点使 −3 dB 点略低于实极点，为 494 MHz。零值估计（321 MHz）偏保守，实际值约为它的 1.5 倍，因为非主导电容与主导电容相比并不小，各极点没有充分分离，时间常数之和也计入了高阶极点的贡献。尽管如此，带宽仍远低于 $f_T$（约为 $f_T/5$）。

带宽按 $\sqrt{I_{\text{IN}}}$ 变化：电流减半时带宽变为 $349/494=0.71$ 倍，电流加倍时变为 $698/494=1.41$ 倍，均 $\approx\sqrt2$，符合电容固定时平方律器件的预期。完整的器件模型还会使电容随偏置略有变化。
