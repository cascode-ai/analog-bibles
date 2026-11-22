# 详细步骤 - grsim-05-25

设计由三项预算决定：待机功耗确定 $I_{\text{BIAS}}$ 与输出静态电流；增益误差限制（误差放大器增益取最大值 5）确定输出器件的 $g_m$；电流源的电压余度确定 $M_{15}$、$M_{16}$ 的最小尺寸。取最大的静态电流、最大的允许 $A$ 以及充裕的输出器件尺寸，可使失真最小。互补的一半按 $k_n'/k_p'$ 之比确定尺寸，最后用晶体管级 ngspice 仿真验证。

### 第 1 步 — 误差放大器中的电流

失调为零时尾电流平分，$I_{D11}=I_{D12}=I_{\text{TAIL}}/2=2.5I_{\text{BIAS}}$。$M_{13}$ 与 $M_{14}$ 以 10 倍比例镜像 $M_{17}$，各流过 $10I_{\text{BIAS}}$，其余部分流入 $M_{15}$、$M_{16}$：

$$
|I_{D13}|=|I_{D14}|=10I_{\text{BIAS}},\qquad |I_{D15}|=|I_{D16}|=10I_{\text{BIAS}}-2.5I_{\text{BIAS}}=7.5I_{\text{BIAS}},\qquad |I_{D1}|=100I_{\text{BIAS}}.
$$

### 第 2 步 — 功耗预算：$I_{\text{BIAS}}$ 与 $I_Q$

每个误差放大器从电源吸取 $I_{\text{BIAS}}$（经 $M_{17}$）以及 $|I_{D13}|+|I_{D14}|=20I_{\text{BIAS}}$；尾电流和 $M_{15}$/$M_{16}$ 的电流都包含在这两个镜像电流之中。输出支路从 $V_{DD}$ 到 $-V_{SS}$ 流过 $I_Q=100I_{\text{BIAS}}$。取 $I_{\text{BIASP}}=I_{\text{BIAS}}$：

$$
P=(V_{DD}+V_{SS})(100+21+21)I_{\text{BIAS}}=(5\ \mathrm V)(142\,I_{\text{BIAS}})\le70\ \mathrm{mW}
\;\Rightarrow\;I_{\text{BIAS}}\le98.6\ \mu\mathrm A .
$$

选 $I_{\text{BIAS}}=I_{\text{BIASP}}=98\ \mu$A、$I_{\text{TAIL}}=I_{\text{TAILP}}=490\ \mu$A、$I_Q=9.8$ mA，得 $P=69.6$ mW。取最大的 $I_Q$，是因为它能在最大的负载电流范围内保持两个输出器件都导通（第 6 步）。

### 第 3 步 — 增益误差：确定 $M_1$ 与 $M_2$ 的尺寸

闭环特性为 $V_o=V_i/(1+1/(2Ag_mR_L))$，因此

$$
\frac{1}{1+2Ag_mR_L}\le0.01\;\Rightarrow\;2Ag_mR_L\ge99\;\Rightarrow\;g_m\ge\frac{99}{2(5)(100\ \Omega)}=0.099\ \mathrm S .
$$

由 $g_m=\sqrt{2k'(W/L)I_Q}$，最小值为 $(W/L)_1=g_m^2/(2k_p'I_Q)=8.7\times10^3$。为留裕量并降低失真，取 $(W/L)_1=10\,000$：

$$
|V_{ov1}|=\sqrt{\frac{2(9.8\ \mathrm{mA})}{(57.5\ \mu\mathrm{A/V^2})(10^4)}}=0.185\ \mathrm V,\qquad
g_m=\frac{2I_Q}{|V_{ov1}|}=0.106\ \mathrm S .
$$

$M_2$ 必须具有相同的 $k'W/L$：$(W/L)_2=10^4(57.5/127)=4530$。再由指标 (e) 的镜像比得 $(W/L)_{17}=100$、$(W/L)_{13}=(W/L)_{14}=1000$、$(W/L)_{27}=45.3$、$(W/L)_{23}=(W/L)_{24}=453$。

### 第 4 步 — 电压余度：确定 $M_{15}$、$M_{16}$ 的尺寸

$I_{\text{BIAS}}$ 接在节点 $B$（$M_{15}$ 的栅极）与 $-V_{SS}$ 之间，$V_B=V_{DD}-V_{SG13}-V_{SG15}$。最坏情况是 $M_{12}$ 截止，$M_{15}$ 流过全部 $10I_{\text{BIAS}}=0.98$ mA。由 $V_{SG13}=0.7+\sqrt{2(0.98\ \mathrm{mA})/(57.5\ \mu\cdot1000)}=0.885$ V，0.5 V 的要求给出

$$
V_{SG15}\le5-0.885-0.5=3.615\ \mathrm V\;\Rightarrow\;|V_{ov15}|\le2.915\ \mathrm V\;\Rightarrow\;\left(\frac WL\right)_{15}\ge\frac{2(0.98\ \mathrm{mA})}{(57.5\ \mu\mathrm{A/V^2})(2.915\ \mathrm V)^2}=4.0 .
$$

取 $(W/L)_{15}=(W/L)_{16}=5$；此时 $V_{SG15}=0.7+2.61=3.31$ V，电流源两端电压为 $5-0.885-3.31=0.81$ V。尾电流源两端电压为 $V_i-V_{GS11}+V_{SS}$；当 $V_o\ge0$（$V_i\ge0$）时，即使 $M_{11}$ 承担全部尾电流也有 $V_{GS11}\le0.92$ V，因此该电压至少为 1.58 V。

### 第 5 步 — 误差放大器增益：确定 $M_{11}$、$M_{12}$ 的尺寸

不计体效应时 $A=g_{m11}/g_{m16}$：

$$
g_{m16}=\sqrt{2(57.5\ \mu)(5)(735\ \mu\mathrm A)}=0.650\ \mathrm{mS}.
$$

$A\le5$ 要求 $g_{m11}\le3.25$ mS，即 $(W/L)_{11}\le g_{m11}^2/(2k_n'I_{D11})=170$。取 $(W/L)_{11}=(W/L)_{12}=165$：

$$
g_{m11}=\sqrt{2(127\ \mu)(165)(245\ \mu\mathrm A)}=3.20\ \mathrm{mS},\qquad A=\frac{3.20}{0.650}=4.92 .
$$

此时增益误差为 $1/(1+2(4.92)(0.106\ \mathrm S)(100\ \Omega))=0.95\ \%$。互补放大器取 $(W/L)_{25}=(W/L)_{26}=5(57.5/127)=2.27$、$(W/L)_{21}=(W/L)_{22}=165(127/57.5)=365$，得到相同的电流、电压和 $A$。

| 器件 | 1 | 11, 12 | 13, 14 | 15, 16 | 17 | 2 | 21, 22 | 23, 24 | 25, 26 | 27 |
|---|---|---|---|---|---|---|---|---|---|---|
| $W/L$（$L=1$ µm） | 10 000 | 165 | 1000 | 5 | 100 | 4530 | 365 | 453 | 2.27 | 45.3 |

### 第 6 步 — 为何该设计失真最小

两个误差放大器都迫使各自的输出器件跟随同一输入，因此 $M_1$ 与 $M_2$ 的栅极驱动围绕 $V_{ov}=0.185$ V 变化大小相等、方向相反的 $\delta$。由于 $k'W/L$ 相等，平方律给出

$$
|I_{D1}|-I_{D2}=\tfrac12k'\tfrac WL\left[(V_{ov}+\delta)^2-(V_{ov}-\delta)^2\right]=2k'\tfrac WL V_{ov}\,\delta ,
$$

只要两管都导通，即 $|I_o|<4I_Q=39$ mA 或 $|V_o|<3.9$ V，它对 $\delta$ 就严格线性。该范围超过了电源所限的摆幅，因此完全不存在交越区。剩余的非线性只来自有限的环路增益，而较大的 $2Ag_mR_L\approx104$ 使其很小；进一步增大 $I_Q$、$A$ 或 $W/L$ 虽能继续降低失真，但会违反功耗、静态电流或面积的约束。

### 第 7 步 — SPICE 验证

采用 $\lambda=0$、不计体效应的 level-1 模型；按题意使用理想电流源。

```spice
* grsim-05-25 class AB output stage with error amplifiers
.model nm nmos level=1 kp=127u  vto=0.7  lambda=0 gamma=0
.model pm pmos level=1 kp=57.5u vto=-0.7 lambda=0 gamma=0
VDD vdd 0 2.5
VSS vss 0 -2.5
* top error amplifier and M1
M17 b  g   vdd vdd pm w=100u   l=1u
IB  b  vss 98u
M13 g  g   vdd vdd pm w=1000u  l=1u
M14 d  g   vdd vdd pm w=1000u  l=1u
M11 d  vi  t   vss nm w=165u   l=1u
M12 g  out t   vss nm w=165u   l=1u
IT  t  vss 490u
M15 vss b  g   vdd pm w=5u     l=1u
M16 vss b  d   vdd pm w=5u     l=1u
M1  out d  vdd vdd pm w=10000u l=1u
* bottom (complementary) error amplifier and M2
M27 bp gp  vss vss nm w=45.3u  l=1u
IBP vdd bp 98u
M23 gp gp  vss vss nm w=453u   l=1u
M24 dp gp  vss vss nm w=453u   l=1u
M21 dp vi  tp  vdd pm w=365u   l=1u
M22 gp out tp  vdd pm w=365u   l=1u
ITP vdd tp 490u
M25 vdd bp gp  vss nm w=2.27u  l=1u
M26 vdd bp dp  vss nm w=2.27u  l=1u
M2  out dp vss vss nm w=4530u  l=1u
RL out 0 100
Vin vi 0 sin(0 2 1k)
.dc Vin -3 3 2m
.tran 1u 3m 1.9m 0.2u
.four 1k v(out)
.end
```

| 量 | 设计值 | ngspice |
|---|---|---|
| $V_o=0$ 时 $\lvert I_{D1}\rvert$、$I_{D2}$ | 9.8 mA | 9.800 mA |
| 待机功耗 | 69.6 mW | 69.58 mW |
| $V_o=0$ 时 $M_1$ 栅极；节点 $B$ | 1.615 V；−1.34 V | 1.615 V；−1.346 V |
| 斜率 $V_o/V_i$，$\lvert V_i\rvert\le2$ V | 0.9905 | 0.99048–0.99053 |
| 与直线的偏差，$\lvert V_i\rvert\le2$ V | — | < 15 µV |
| 2 V 峰值输入时的 THD | — | 0.0004 % |
| $0\le V_o\le2$ V 时 $I_{\text{BIAS}}$、$I_{\text{TAIL}}$ 两端电压 | ≥ 0.5 V | ≥ 1.10 V，≥ 1.65 V |

![仿真的 Vo 随 Vi 变化：斜率为 0.9905 的直线，延伸到约 ±2.2 V](/q/grsim-05-25/solution-transfer.zh.svg)

![仿真的输出器件电流随 Vi 变化：零点处各为 9.8 mA，在线性范围内两管都导通](/q/grsim-05-25/solution-currents.zh.svg)

增益误差为 0.95 %，在 1 % 的限值之内。特性是一条过零的直线，没有交越失真；例如 $V_o=1$ V 时两管电流为 15.38 mA 和 5.47 mA，正好等于第 6 步预言的 $9.8\ \mathrm{mA}\,(1\pm0.253)^2$。输出在约 ±2.2 V 以内保持线性，此时输出器件进入线性区（22 mA 时 $V_{SD1}$ 降到 $|V_{ov1}|\approx0.28$ V），随后在 ±2.3 V 附近削波。所有指标均得到满足，功耗还有 0.4 mW 的裕量。
