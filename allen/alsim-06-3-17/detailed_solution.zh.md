# 详细步骤 - alsim-06-3-17

这是一个自行计算得分的设计题；下面给出一个完整设计。拓扑采用标准两级 OTA。p 沟道输入对使输入范围可延伸到负电源轨附近，并以较小的输入过驱动电压获得较高的 $g_{m1}$。其后是 n 沟道共源输出级，用 $C_c$ 串联一个 MOS 调零电阻进行补偿，以抵消输出极点。起约束作用的指标是压摆率和功耗：$I_7-I_5\ge(10\ \mathrm{V/\mu s})(10\ \mathrm{pF})=100\ \mu$A 必须放进 1 mW 的预算，而 GB ≥ 25 MHz 决定了 $g_{m1}/C_c$。

### 第 1 步 — 电路与尺寸

<!-- diagram: diagram-01.cir -->

所有 $L=1$ µm；宽度单位为 µm：

| 器件 | 类型 | $W$ | 作用 |
|---|---|---|---|
| M1，M2 | p | 100 | 输入对管（衬底接 $V_{DD}$） |
| M3，M4 | n | 14 | 电流镜负载 |
| M5 | p | 25 | 尾电流管，2.5 × $I_{ref}$ |
| M6 | n | 100 | 输出驱动管 |
| M7 | p | 95 | 输出负载，9.5 × $I_{ref}$ |
| M8 | p | 10 | 偏置二极管，栅极与 M5、M7 相连 |
| MB1，MB2 | p | 1 | 叠接二极管，各自衬底接自身源极 |
| MB3 | n | 1 | 接 $V_{SS}$ 的二极管 |
| MZ | n | 1 | 调零电阻，栅极接 $V_{DD}$ |

$C_c=2.5$ pF 接在 MZ 的漏极与输出之间。（若补偿也必须用 MOSFET 实现，约十个 100/1 栅氧 MOS 电容并联即可得到 2.5 pF；这里为简单起见使用普通电容。）同相输入（节点 1）驱动 M2，M2 的漏极接 M6。

### 第 2 步 — 偏置电流

串联在 5 V 两端的四个二极管流过 $I_{ref}$；它们都没有体效应，

$$
5\ \mathrm V=\left(0.7+\sqrt{\frac{2I_{ref}}{50\ \mu\cdot10}}\right)+2\left(0.7+\sqrt{\frac{2I_{ref}}{50\ \mu\cdot1}}\right)+\left(0.7+\sqrt{\frac{2I_{ref}}{110\ \mu\cdot1}}\right)\;\Rightarrow\;I_{ref}=13.5\ \mu\mathrm A .
$$

于是 $I_5=2.5I_{ref}=33.8\ \mu$A，$I_1=I_2=16.9\ \mu$A，$I_6=I_7=9.5I_{ref}=128.5\ \mu$A。

### 第 3 步 — 手算值

**增益。**

$$
\begin{aligned}
g_{m1}&=\sqrt{2(50\ \mu)(100)(16.9\ \mu)}=411\ \mu\mathrm S,\qquad g_{m6}=\sqrt{2(110\ \mu)(100)(128.5\ \mu)}=1.68\ \mathrm{mS},\\
A_{vd}&=\frac{g_{m1}}{(\lambda_P+\lambda_N)I_1}\cdot\frac{g_{m6}}{(\lambda_N+\lambda_P)I_6}=(270)(145)=3.9\times10^4\ (91.9\ \mathrm{dB}).
\end{aligned}
$$

**±50 µA 下的输出摆幅。** 拉出电流时 M6 截止，M7 必须保持饱和；吸收电流时 M6 流过 $I_7+50\ \mu$A：

$$
V_o(\max)=2.5-\sqrt{\frac{2(128.5\ \mu)}{(50\ \mu)(95)}}=2.27\ \mathrm V,\qquad V_o(\min)=-2.5+\sqrt{\frac{2(178.5\ \mu)}{(110\ \mu)(100)}}=-2.32\ \mathrm V,
$$

故 OVSR = 4.59 V。这里取的是饱和边缘，是一种保守的定义。

**压摆率。** 内部压摆率为 $I_5/C_c=13.5$ V/µs。输出上升沿时，M6 截止，M7 要给 $C_L$ 充电，而 $C_c$ 吸走 $I_5$：

$$
SR\approx\frac{I_7-I_5}{C_L}=\frac{(128.5-33.8)\ \mu\mathrm A}{10\ \mathrm{pF}}=9.5\ \mathrm{V/\mu s}\ (\lambda\ \text{ignored}).
$$

**输入电阻与 ICMR。** $R_{id}$ 是 MOS 栅极的输入电阻，实际上为无穷大。ICMR 的上下限为

$$
V_{in}(\max)=2.5-V_{SD5}(\mathrm{sat})-V_{SG1}=2.5-0.23-0.78=1.49\ \mathrm V,\qquad V_{in}(\min)=-2.5+V_{GS3}-|V_{TP}|=-2.35\ \mathrm V,
$$

故 ICMR = 3.84 V。

**CMRR。**

$$
CMRR\approx\frac{g_{m1}}{g_{ds2}+g_{ds4}}\cdot\frac{2g_{m3}}{g_{ds5}}=(270)\frac{2(228\ \mu\mathrm S)}{(0.05)(33.8\ \mu\mathrm A)}=7.3\times10^4\ (97\ \mathrm{dB}).
$$

**带宽、补偿与功耗。**

$$
GB=\frac{g_{m1}}{C_c}=\frac{411\ \mu\mathrm S}{2.5\ \mathrm{pF}}=26.2\ \mathrm{MHz}.
$$

输出极点 $g_{m6}/C_L=26.7$ MHz 几乎就在 GB 处，若不补偿该极点，相位裕度只有约 45°。调零电阻把零点放在该极点上，这要求 $R_z=(C_c+C_L)/(g_{m6}C_c)=5/g_{m6}=2.97$ kΩ。MZ（1/1，栅极接 2.5 V，源极在节点 a ≈ −1.65 V，计入体效应后 $V_T\approx0.86$ V）给出 $R_z=1/[K'_N(4.15-0.86)]=2.77$ kΩ。剩余的非主根（节点 a 处的 $R_zC$ 极点和电流镜极点）在计入结电容后，估计留下 65–70° 的裕度。

$$
P_{diss}=(5\ \mathrm V)(13.5+33.8+128.5)\ \mu\mathrm A=0.88\ \mathrm{mW}.
$$

### 第 4 步 — SPICE 设置

网表采用含全部电容的 LEVEL-1 模型（交叠电容、TOX，以及按 AD = AS = W × 10 µm、PD = PS = 2W + 20 µm 计算的结电容）。各项测量如下：
- 带直流反馈的开环交流分析（1 GH 电感从输出接到节点 2，1 F 电容接地），得到 $A_{vd}$、GB 和相位裕度；
- 同样的电路用共模交流源同时驱动两个输入，得到 CMRR；
- 单位增益缓冲器加 ±1 V 输入阶跃，得到压摆率；
- 缓冲器输入从 −2.5 V 到 2.5 V 的直流扫描，得到 ICMR，以跟随误差超过 10 mV 或 $I_5$ 下降 10% 处为界；
- 开环驱动并在输出端接两个方向各 50 µA 的电流负载，得到 OVSR。

```spice
* alsim-06-3-17 OTA, open-loop ac (nodes: 1 +in, 2 -in, 3 out, 4 VDD, 5 VSS)
VDD 4 0 DC 2.5
VSS 5 0 DC -2.5
M8 nb nb 4 4 PCH W=10U L=1U AD=100P AS=100P PD=40U PS=40U
MB1 x1 x1 nb nb PCH W=1U L=1U AD=10P AS=10P PD=22U PS=22U
MB2 x2 x2 x1 x1 PCH W=1U L=1U AD=10P AS=10P PD=22U PS=22U
MB3 x2 x2 5 5 NCH W=1U L=1U AD=10P AS=10P PD=22U PS=22U
M5 t nb 4 4 PCH W=25U L=1U AD=250P AS=250P PD=70U PS=70U
M1 d1 2 t 4 PCH W=100U L=1U AD=1000P AS=1000P PD=220U PS=220U
M2 a 1 t 4 PCH W=100U L=1U AD=1000P AS=1000P PD=220U PS=220U
M3 d1 d1 5 5 NCH W=14U L=1U AD=140P AS=140P PD=48U PS=48U
M4 a d1 5 5 NCH W=14U L=1U AD=140P AS=140P PD=48U PS=48U
M6 3 a 5 5 NCH W=100U L=1U AD=1000P AS=1000P PD=220U PS=220U
M7 3 nb 4 4 PCH W=95U L=1U AD=950P AS=950P PD=210U PS=210U
MZ a 4 c 5 NCH W=1U L=1U AD=10P AS=10P PD=22U PS=22U
CC c 3 2.5P
CL 3 0 10P
VIN 1 0 DC 0 AC 1
LF 3 2 1G
CF 2 0 1
.MODEL NCH NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 LAMBDA=0.04 PHI=0.7
+ CGSO=220P CGDO=220P CGBO=700P CJ=770U CJSW=380P MJ=0.5 MJSW=0.38 TOX=140E-10
.MODEL PCH PMOS LEVEL=1 VTO=-0.7 KP=50U GAMMA=0.57 LAMBDA=0.05 PHI=0.8
+ CGSO=220P CGDO=220P CGBO=700P CJ=560U CJSW=350P MJ=0.5 MJSW=0.35 TOX=140E-10
.OP
.AC DEC 100 1 1G
.PRINT AC VDB(3) VP(3)
.END
```

### 第 5 步 — SPICE 结果

工作点给出 $I_{ref}=14.4\ \mu$A，$I_5=36.8\ \mu$A，$I_7=146.9\ \mu$A，电源电流 198.1 µA，$g_{m1}=457\ \mu$S，$g_{m6}=1.89$ mS，$R_z=2.77$ kΩ。由于 $(1+\lambda V_{DS})$ 因子，各电流比手算值高 7–14%。

![10 pF 负载下的仿真开环增益和相位，GB = 25.8 MHz，相位裕度 66.1°](/q/alsim-06-3-17/solution-bode.zh.svg)

![10 pF 负载下单位增益缓冲器对 ±1 V 阶跃的仿真响应，上升 10.8 V/µs，下降 16.6 V/µs](/q/alsim-06-3-17/solution-slew.zh.svg)

| | $A_{vd}$ | OVSR | SR | $R_{id}$ | ICMR | CMRR | GB | $\phi(GB)$ | $P_{diss}$ |
|---|---|---|---|---|---|---|---|---|---|
| 手算值 | 3.9 × 10⁴（91.9 dB） | 4.59 V | 9.5 V/µs | ∞ | 3.84 V | 7.3 × 10⁴ | 26.2 MHz | ≈ 65–70° | 0.88 mW |
| SPICE 值 | 4.78 × 10⁴（93.6 dB） | 4.94 V（+2.45/−2.49 V） | 10.8 V/µs | ∞（MOS 栅极） | 3.98 V（−2.49 至 +1.49 V） | 1.1 × 10⁵（101 dB） | 25.8 MHz | 66.1° | 0.99 mW |

两行之间的差别都有明确原因。
- **电流。** 仿真电流较高，使 SR、$g_{m1}$ 和功耗都升高。
- **OVSR。** 仿真报告的是输出 ±50 µA 时的实际输出极限，晶体管允许进入线性区；手算值则是饱和边缘。
- **ICMR。** M1、M2 的体效应（衬底接 $V_{DD}$）把下限移到 −2.49 V。
- **CMRR。** 仿真电路完全匹配，因此更高。

手算压摆率（忽略 λ）略低于 10 V/µs，而仿真值以 8% 的裕量满足指标。

### 第 6 步 — 得分

采用 SPICE 值，每项上限为 5：

$$
\begin{aligned}
\mathrm{Score}&=\min[5,5(4.78)]+\min\!\left[5,5\tfrac{4.94}{4.5}\right]+\min\!\left[5,5\tfrac{10.8}{10}\right]+5+\min\!\left[5,5\tfrac{3.98}{3}\right]+\min[5,5(110)]\\
&\quad+\min\!\left[5,5\tfrac{25.8}{25}\right]+\min\!\left[5,5\tfrac{66.1}{60}\right]+\min\!\left[5,5\tfrac{1}{0.99}\right]+4=45+4=49 .
\end{aligned}
$$

九项性能指标都达到上限。简洁性因子取 4：单一的标准两级拓扑、只用 MOS 的偏置串和一个调零管，但输出极点是被抵消而不是简单地推远。最紧张的几项是 GB（裕量 3%）、压摆率（8%）和功耗（1%）。它们相互耦合：更大的输出电流会改善 SR 和相位裕度，但会超过 1 mW。
