# 详细步骤 - alsim-04-3-10

本题没有唯一答案；下面给出一个完整的设计及其仿真和得分。得分的两项相互制约。$V_{MIN}$ 只由输出管决定，因此采用单个宽 NMOS 输出管。$\Delta I_o$ 主要取决于基准电流在 HIGH 与 LOW 两个工艺角之间的变化。因此设计的重点是一个仅用 MOSFET、且在两个工艺角下电流几乎相同的基准，再把它镜像到 100/1 的输出管。

### 第 1 步 — $V_{MIN}$ 与基准离散的限制

宽长比 $W/L\le100$、电流 100 µA 的饱和 NMOS 输出管至少需要

$$
V_{ON}=\sqrt{\frac{2I_o}{K'(W/L)}}=\sqrt{\frac{2(100\ \mu\mathrm A)}{(21.6\ \mu\mathrm{A/V^2})(100)}}=0.30\ \mathrm V\ (\text{LOW}),\qquad 0.275\ \mathrm V\ (\text{HIGH}),
$$

所以这一项实际的下限是 $V_{MIN}$ 约 0.25–0.3 V（约 17–20 分）。共源共栅输出会使曲线更平，但会使 $V_{MIN}$ 加倍；而 λ ≈ 0.01 V⁻¹ 时简单输出管的漂移只有约 1 µA/V，因此单管更划算。

基准只能由 MOSFET 和 5 V 电源构成。采用 $(W/L)_2=4(W/L)_1$、源极电阻为 $R$ 的自偏置 β 倍增器（β-multiplier），

$$
I_{REF}=\frac{2}{K'(W/L)_1R^2}\left(1-\frac{1}{\sqrt4}\right)^2=\frac{1}{2K'(W/L)_1R^2}.
$$

若 $R$ 用一个栅压为 $V_G$、工作在深线性区的 NMOS 实现，则 $R\approx1/[K'(W/L)_R(V_G-V_T)]$，

$$
I_{REF}\approx\frac{K'(W/L)_R^2}{2(W/L)_1}\,(V_G-V_T)^2 .
$$

若栅极直接接 5 V，HIGH 工艺角使 $K'$ 增大 22%、$(V_G-V_T)^2$ 增大 7%，电流在两个工艺角之间相差约 31%。对这一版本的首次仿真得到 148 µA（HIGH）和 107 µA（LOW）。按 100 µA 中心缩放后，工艺角离散约 32 µA，加上输出斜率 $\Delta I_o\approx37$ µA，只能得约 13.5 分。

### 第 2 步 — 让线性区电阻跟踪阈值

HIGH 工艺角的 $K'$ 较大而 $V_T$ 较小。若 $V_G-V_T$ 在 HIGH 工艺角下缩小约 $1/\sqrt{1.22}$ 倍，电流即可保持不变。用两个叠接的二极管连接 NMOS（MG1、MG2，1/1）驱动 MR 的栅极，并由基准电流的 PMOS 复制管 MP6 供电：

$$
V_G=2(V_T+V_{ov,G}),\qquad V_G-V_T=V_T+2V_{ov,G},\qquad V_{ov,G}=\sqrt{\frac{2I_{P6}}{K'}} .
$$

此时 $V_G-V_T$ 随 $V_T$ 增大，这偏向 LOW 工艺角，而 $K'$ 偏向 HIGH 工艺角；$V_{ov,G}$ 随 $K'$ 增大而减小，进一步加强补偿。MP6 的宽度决定 $V_{ov,G}$，从而决定平衡点。对 $W_{P6}$ 扫描，$W_{P6}$ = 4.2、4.4、4.6、4.8 µm 时 HIGH/LOW 电流比为 0.986、0.992、0.999 和 1.006，因此选 $W_{P6}=4.6$ µm。

### 第 3 步 — 电路

<!-- diagram: diagram-01.cir -->

文字描述：PMOS 电流镜 MP4（二极管连接）和 MP3 为 NMOS 对管 MN1（20/1，二极管连接）和 MN2（80/1）供电。MR（1/1）接在 MN2 的源极（节点 s）与地之间，其栅极接节点 g，即由 MP6 供电的二极管叠管 MG1–MG2 的顶端。启动电路为 MS1–MS5。输出支路是由 MP4 镜像而来的 MP5，它为二极管连接的 MD（100/1）供电，MD 再驱动输出管 MO（100/1）。所有 $L=1$ µm，所有衬底都接源极或电源轨；按题意忽略衬底效应。

| 器件 | 类型 | $W/L$ | 作用 |
|---|---|---|---|
| MP3，MP4 | p | 2/1 | β 倍增器的 1:1 电流镜 |
| MN1 / MN2 | n | 20/1 / 80/1 | β 倍增器对管，比例 4 |
| MR | n | 1/1 | 线性区“电阻” |
| MP6 | p | 4.6/1 | 为栅极叠管供电（2.3 × $I_{REF}$） |
| MG1，MG2 | n | 1/1 | 叠接二极管，$V_G=2V_{GS}$ |
| MS1 / MS3 / MS2，MS4，MS5 | n / n / p | 1/1 / 100/1 / 1/1 | 启动电路 |
| MP5 | p | 45.4/1 | 输出复制管，≈ 22.7 × $I_{REF}$ |
| MD，MO | n | 100/1 | 输出电流镜 |

```spice
* alsim-04-3-10 current sink (HIGH corner shown)
VDD vdd 0 DC 5
MP4 vp vp vdd vdd P W=2U L=1U
MP3 n vp vdd vdd P W=2U L=1U
MN1 n n 0 0 N W=20U L=1U
MN2 vp n s 0 N W=80U L=1U
MR  s g 0 0 N W=1U L=1U
MP6 g vp vdd vdd P W=4.6U L=1U
MG1 g g g2 0 N W=1U L=1U
MG2 g2 g2 0 0 N W=1U L=1U
MS5 x2 x2 vdd vdd P W=1U L=1U
MS4 x1 x1 x2 x2 P W=1U L=1U
MS2 st st x1 x1 P W=1U L=1U
MS3 st n 0 0 N W=100U L=1U
MS1 vp st n 0 N W=1U L=1U
MP5 d vp vdd vdd P W=45.4U L=1U
MD  d d 0 0 N W=100U L=1U
MO  out d 0 0 N W=100U L=1U
VOUT out 0 DC 2.5
.MODEL N NMOS LEVEL=1 KP=26.4U VTO=0.675 LAMBDA=0.011
.MODEL P PMOS LEVEL=1 KP=8.8U VTO=-0.675 LAMBDA=0.022
* LOW: N KP=21.6U VTO=0.825 LAMBDA=0.009; P KP=7.2U VTO=-0.875 LAMBDA=0.018
.DC VOUT 0 5 1M
.PRINT DC I(VOUT)
.END
```

$i_{OUT}=-I(\mathrm{VOUT})$。

### 第 4 步 — 启动

β 倍增器还存在一个稳定的零电流状态。无电流时节点 n 为 0，MS3 截止，三个 PMOS 二极管把节点 st 拉到约 $5-3|V_{TP}|$，即 2.4–3.0 V。此时 MS1 从 vp 向 n 导通，使环路启动。基准工作后，MS3（100/1，栅极接 n）把 st 拉到 0.01 V，MS1 截止（$V_{GS1}=V_{st}-V_n<0$，其电流为 $4\times10^{-12}$ A）。在瞬态仿真中让 VDD 在 10 µs 内从 0 升到 5 V、所有节点从零开始，两个工艺角下都稳定在 100.6 µA。

### 第 5 步 — 仿真工作点

$v_{OUT}=2.5$ V 时：

| 量 | HIGH | LOW |
|---|---|---|
| $I_{D,MN1}$（$I_{REF}$） | 4.37 µA | 4.39 µA |
| MR 的栅压 $V_G$ | 3.04 V | 3.53 V |
| $V_G-V_T$ | 2.37 V | 2.70 V |
| $I_{D,MP5}=I_{D,MD}$ | 98.9 µA | 99.4 µA |
| $i_{OUT}$ | 100.56 µA | 100.64 µA |
| 电源电流 | 121 µA | 120 µA |

在 LOW 工艺角下 $V_G-V_T$ 大 14%。再加上 λ 和 MR 漏极电压的较小影响，这抵消了该工艺角下低 18% 的 $K'$，因此两个工艺角下的基准电流只相差 0.5%。两条输出曲线在 3 V 附近相交。

![HIGH 与 LOW 工艺角下 iOUT 随 vOUT 变化的仿真曲线，直线 AB 位于 96.75 µA，VMIN = 0.26 V](/q/alsim-04-3-10/solution-iout.zh.svg)

![两条曲线在 94 至 106 µA 之间的放大图，显示以 100 µA 为中心、从 96.75 到 103.25 µA 的电流带](/q/alsim-04-3-10/solution-band.zh.svg)

| $v_{OUT}$（V） | 0.2 | 0.26 | 0.3 | 0.5 | 1 | 2.5 | 5 |
|---|---|---|---|---|---|---|---|
| HIGH（µA） | 91.2 | 97.9 | 98.2 | 98.4 | 98.9 | 100.6 | 103.3 |
| LOW（µA） | 87.4 | 96.8 | 98.7 | 98.9 | 99.3 | 100.6 | 102.9 |

### 第 6 步 — $V_{MIN}$、$\Delta I_o$ 与得分

电流带必须以 100 µA 为中心。其上沿是从 $V_{MIN}$ 到 5 V 范围内的最大电流，即 HIGH 曲线在 5 V 处的 103.25 µA。因此直线 AB 位于 $200-103.25=96.75$ µA，$\Delta I_o=103.25-96.75=6.5$ µA。最右侧的曲线（LOW）在

$$
V_{MIN}=0.26\ \mathrm V,
$$

处达到 96.75 µA，恰在其饱和拐点之下（LOW 输出管需要 $V_{ON}\approx0.30$ V，在 0.26 V 处它刚进入线性区，但已流过 97% 的电流）。$V_{MIN}$ 以上两条曲线都在电流带内。$\Delta I_o$ 几乎全部来自单个输出管的 λ 斜率（约 1 µA/V，跨越 5 V）；工艺角离散不到 1 µA。

$$
\mathrm{SCORE}=\min\!\left(\frac{5\ \mathrm V}{0.26\ \mathrm V},25\right)+\min\!\left(\frac{500\ \mu\mathrm A}{6.5\ \mu\mathrm A},25\right)=19.2+25=44.2 .
$$

第二项已达上限，所以共源共栅输出不能提高它，反而会降低第一项。有三点需要说明。
- 补偿依赖于 $K'$ 和 $V_T$ 像 HIGH、LOW 模型组那样同向变化。独立的工艺角（例如高 $K'$ 同时高 $V_T$）不能被抵消。
- 自偏置环路的增益接近 1，因此电流对器件比例很敏感：$W_{P6}$ 改变 4% 会使 $I_{REF}$ 变化约 9%。MP6 与 MP4 之间的失配会被放大。
- 第 1 步中未补偿的版本（MR 栅极接 5 V）约得 17 + 13.5 ≈ 30 分，处于本题的常见范围。
