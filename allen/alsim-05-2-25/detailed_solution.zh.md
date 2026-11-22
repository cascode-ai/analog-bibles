# 详细步骤 - alsim-05-2-25

这是开放性设计题；下面给出一个完整的设计、其在 0 °C 和 55 °C 下的仿真及得分。关键的选择是让增益成为两个跨导之比，而不是 $g_m r_{ds}$。采用电流镜负载的简单差分对增益可达数百。在其输出端接一个二极管连接的 PMOS 作负载，可把增益设在 10 附近，使其对温度不敏感，并使输出节点电阻足够低，在每个节点 1 pF 的条件下仍有数兆赫的带宽。

### 第 1 步 — 拓扑

<!-- diagram: diagram-01.cir -->

- **输入级。** NMOS 对管 M1–M2（100/1）及其尾电流管 M5（20/1），PMOS 电流镜负载 M3–M4（50/1）。输出为 M2 与 M4 的漏极。
- **设定增益的负载。** 在输出端接二极管连接的 PMOS M6（2.34/1，源极接 $V_{DD}$，栅极和漏极接输出）。NMOS 电流沉 M7（10/1）吸走 M6 的直流电流，使电流镜保持平衡。
- **偏置。** 四个二极管连接的 PMOS（1/1，各自的阱接自身源极）与二极管连接的 NMOS M8（5/1）串联在 10 V 电源两端。M8 以 ×4 镜像到 M5，以 ×2 镜像到 M7。

电路只用 MOSFET，所有 $W/L$ 都在 1 到 100 之间。n 沟道器件的衬底接 −5 V。

### 第 2 步 — 增益约为 10 且对温度稳定的原因

在输出端，M2 的信号电流加上 M1 的镜像电流，给出短路跨导 $g_{m1}$。输出节点电导为 $g_{m6}$ 加上较小的各输出电导：

$$
A_v=\frac{g_{m1}}{g_{m6}+g_{ds2}+g_{ds4}+g_{ds6}+g_{ds7}}\approx\frac{g_{m1}}{g_{m6}}=\sqrt{\frac{K'_N(W/L)_1I_1}{K'_P(W/L)_6I_6}} .
$$

由于 $I_6\approx I_1$（M7 吸收 $2I_{REF}$，与尾电流的每一半相同），该比值为 $\sqrt{(25)(100)/((10)(2.34))}=10.3$。四个 $g_{ds}$ 项（约为 $g_{m6}$ 的 4%）使其降到 10.0；为此在仿真中把 $W_6$ 微调为 2.34 µm。$K'_N$ 与 $K'_P$ 都按 $T^{-1.5}$ 变化，各电流也相互跟踪，因此该比值几乎不随温度变化。

27 °C 时仿真给出 $g_{m1}=346.9\ \mu$S、$g_{m6}=33.46\ \mu$S、$\sum g_{ds}=1.32\ \mu$S，于是 $A_v=346.9/34.78=9.97$（仿真为 10.00）。

### 第 3 步 — 带宽、功耗与共模范围的手算

主极点位于输出节点，其电导为 $g_{m6}+\sum g_{ds}$，电容为 1 pF：

$$
f_{-3\,\mathrm{dB}}\approx\frac{34.8\ \mu\mathrm S}{2\pi(1\ \mathrm{pF})}=5.5\ \mathrm{MHz}\quad(27\ ^\circ\mathrm C).
$$

电流镜节点 x（$g_{m3}/2\pi C\approx24$ MHz，并在其两倍处有一个零点）使带宽略有降低。电源电流为 $I_{REF}+I_{SS}+I_7\approx11+45+24=80\ \mu$A，故 $P_{diss}\approx0.80$ mW，低于得分公式中 1 mW 的下限。

当尾电流管 M5 退出饱和时达到共模范围的下限：

$$
V_{IC}(\min)=V_{SS}+V_{DS5}(\mathrm{sat})+V_{GS1}\approx-5+0.42+1.07\approx-3.5\ \mathrm V .
$$

在上限一侧，M2 的漏极处于 $V_{DD}-V_{SG6}\approx2.9$ V。由于 $\gamma=0.8$，高共模时 M2 的阈值升到约 2.4 V，所以 M2 直到 $V_{IC}\approx5.3$ V 仍保持饱和。因此共模范围的上限由 5 V 电源决定。

### 第 4 步 — 仿真网表

```spice
* alsim-05-2-25 differential gain block (run with .TEMP 0 and .TEMP 55)
VDD vdd 0 DC 5
VSS vss 0 DC -5
MB1 b1 b1 vdd vdd P W=1U L=1U
MB2 b2 b2 b1 b1 P W=1U L=1U
MB3 b3 b3 b2 b2 P W=1U L=1U
MB4 nb nb b3 b3 P W=1U L=1U
M8 nb nb vss vss N W=5U L=1U
M1 x inp t vss N W=100U L=1U
M2 out inn t vss N W=100U L=1U
M5 t nb vss vss N W=20U L=1U
M3 x x vdd vdd P W=50U L=1U
M4 out x vdd vdd P W=50U L=1U
M6 out out vdd vdd P W=2.34U L=1U
M7 out nb vss vss N W=10U L=1U
C1 b1 0 1P
C2 b2 0 1P
C3 b3 0 1P
C4 nb 0 1P
C5 x 0 1P
C6 t 0 1P
C7 out 0 1P
C8 inp 0 1P
C9 inn 0 1P
C10 vdd 0 1P
C11 vss 0 1P
VIC cm 0 DC 0
EP inp cm vd 0 0.5
EN inn cm vd 0 -0.5
VD vd 0 DC 0 AC 1
.MODEL N NMOS LEVEL=1 KP=25U VTO=0.75 LAMBDA=0.01 GAMMA=0.8 PHI=0.6
.MODEL P PMOS LEVEL=1 KP=10U VTO=-0.75 LAMBDA=0.02 GAMMA=0.4 PHI=0.6
.OPTIONS TNOM=27
.TEMP 0
.OP
.AC DEC 200 1K 1G
.PRINT AC VDB(OUT)
* common-mode sweep (separate runs, VD DC = +0.5M and -0.5M):
* .DC VIC -5 5 5M
* .PRINT DC V(OUT)
.END
```

- **电容。** level-1 模型卡没有 TOX，也没有结电容或交叠电容参数，因此 SPICE 不会添加器件电容。每个节点上的 1 pF 电容是仅有的电容。
- **输入。** 两个受控源在共模源 VIC 两侧施加 $\pm v_d/2$。
- **差模增益。** VD = 1 的交流分析直接给出差模增益。
- **共模范围。** 分别取 VD = +0.5 mV 和 −0.5 mV，对 VIC 扫描两次。两次输出之差除以 1 mV，即为各共模电平下的直流增益。
- **范围判据。** 以 M1、M2、M4、M5 中任一器件退出饱和（$V_{DS}<V_{DSAT}$）作为 $V_{IC}$ 的界限。

### 第 5 步 — 仿真结果

| | 0 °C | 55 °C |
|---|---|---|
| $V_{IC}(\max)$ | 5.00 V（电源；所有器件饱和） | 5.00 V |
| $V_{IC}(\min)$（M5 退出饱和） | −3.490 V | −3.535 V |
| 最小 ICMR | 5.00 − (−3.490) = 8.49 V | |
| 电压增益 | 10.009 | 9.996 |
| 最大增益偏差 | 0.009 | |
| $f_{-3\,\mathrm{dB}}$ | 5.90 MHz | 4.89 MHz |
| 最小 $f_{-3\,\mathrm{dB}}$ | 4.89 MHz | |
| 电源电流，$P_{diss}$ | 84.9 µA，0.849 mW | 76.2 µA，0.762 mW |

![0 °C 与 55 °C 下差模增益随输入共模电压变化的仿真曲线，标出 VIC(min) = −3.49 V](/q/alsim-05-2-25/solution-icmr.zh.svg)

![0 °C 与 55 °C 下 1 kHz 至 1 GHz 差模增益幅值的仿真曲线，标出 −3 dB 点](/q/alsim-05-2-25/solution-frequency.zh.svg)

在 −3.5 V 以上的整个共模范围内增益保持在 10.00 ± 0.01，低于该电平时尾电流管进入线性区，增益随之崩溃。从 0 °C 到 55 °C 带宽下降 17%，因为所有偏置电流以及 $g_{m6}$ 都随迁移率下降。增益则不变，因为它是 $g_m$ 之比。手算估计（27 °C 时增益 9.97、5.5 MHz、0.80 mW、−3.5 V）与仿真一致。

### 第 6 步 — 得分

$$
\begin{aligned}
\mathrm{SCORE}&=\min(8.49,10)+\frac{10}{0.009+1}+\min\!\left(\frac{4.89\ \mathrm{MHz}}{1\ \mathrm{MHz}},10\right)+\frac{10}{\max(0.849\ \mathrm{mW},1\ \mathrm{mW})}\\
&=8.49+9.91+4.89+10=33.3 .
\end{aligned}
$$

还有提升空间的是带宽项。在增益固定时提高带宽需要更大的 $g_{m6}$，即更大的电流。所有电流加倍可使 $f_{-3\,\mathrm{dB}}$ 约加倍（+5 分），但会使 $P_{diss}$ 升到约 1.7 mW（−4 分），净增不到 1 分，因此该设计已接近这一拓扑所能达到的最佳结果。
