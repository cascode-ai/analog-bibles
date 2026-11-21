# 详细步骤 - grsim-07-36

由 $Q_5$ 基准和 $Q_4$ 尾电流源求偏置，再经差分对的差模半边电路和带发射极负反馈的横向 pnp 级 $Q_3$ 计算增益。对 $Q_2$/$Q_3$ 一侧的零值时间常数求和以估算带宽，然后用 ngspice 极零点分析求整个电路的极点。横向 pnp 的 $f_T=6$ MHz，因此其 $C_\pi$ 达数百皮法并占主导。

### 第 1 步 — 偏置

$$
I_{REF}=\frac{6-0.6}{10\ \mathrm{k\Omega}+1\ \mathrm{k\Omega}}=0.491\ \mathrm{mA}.
$$

$Q_4$ 的基极位于 $-4.91$ V，故其发射极位于 $-5.51$ V，$I_{C4}=0.491\ \mathrm V/2.5\ \mathrm{k\Omega}=0.196$ mA；$I_{C1}=I_{C2}=98\ \mu$A。于是 $V_{C2}=6-0.098\ \mathrm{mA}\times12.5\ \mathrm{k\Omega}=4.77$ V，$Q_3$ 的发射极位于 5.37 V，$|I_{E3}|=(6-5.37)/1\ \mathrm{k\Omega}=0.627$ mA，$|I_{C3}|=0.621$ mA，$V_O=-6+6.21=0.2$ V。

### 第 2 步 — 小信号元件

$\tau_F$ 由给定电流下的 $C_\pi+C_\mu=g_m/\omega_T$ 求得。npn 管：$(38.5\ \mathrm{mA/V})/(2\pi\cdot400\ \mathrm{MHz})=15.3$ pF，故 $\tau_F=(15.0-3)\ \mathrm{pF}/38.5\ \mathrm{mA/V}=312$ ps。横向 pnp 管：$(19.2\ \mathrm{mA/V})/(2\pi\cdot6\ \mathrm{MHz})=510$ pF，故 $\tau_F=26.4$ ns。

| | $Q_2$（98 µA） | $Q_3$（0.621 mA） |
|---|---|---|
| $g_m$ | 3.78 mA/V | 23.9 mA/V |
| $r_\pi$ | 53.1 kΩ | 4.19 kΩ |
| $C_\pi=\tau_Fg_m+C_{je}$ | 4.18 pF | 633 pF |

### 第 3 步 — 低频增益

$Q_3$ 是带 1 kΩ 发射极负反馈的共射级。其输入电阻为 $R_{i3}=r_{\pi3}+(\beta+1)(1\ \mathrm{k\Omega})=105\ \mathrm{k\Omega}$，从基极到输出的增益为 $-\beta(10\ \mathrm{k\Omega})/R_{i3}=-9.53$。

在差模半边电路中，$Q_2$ 经 $10\ \mathrm{k\Omega}$ 接收 $-v_i/2$，驱动 $12.5\ \mathrm{k\Omega}\parallel R_{i3}=11.2\ \mathrm{k\Omega}$：

$$
\frac{v_{c2}}{v_i/2}=g_{m2}(11.2\ \mathrm{k\Omega})\frac{r_{\pi2}}{r_{\pi2}+10\ \mathrm{k\Omega}}=35.4,\qquad
\frac{v_o}{v_i}=-\frac{35.4\times9.53}{2}=-169\quad(44.5\ \mathrm{dB}).
$$

### 第 4 步 — 零值时间常数

全部取 $Q_2$/$Q_3$ 一侧（差模半边电路中 $Q_2$ 的发射极为交流地）。对 $C_{\pi3}$，发射极带负反馈，电阻为 $r_{\pi3}\parallel(R_B+R_E)/(1+g_{m3}R_E)$，其中 $R_B=12.5\ \mathrm{k\Omega}$、$R_E=1\ \mathrm{k\Omega}$。对 $C_{\mu3}$，等效跨导为 $G_m=g_{m3}/(1+g_{m3}R_E)=0.96$ mA/V。

| 电容 | 看到的电阻 | $R$ | $RC$ (ns) |
|---|---|---|---|
| $C_{\pi2}$（4.18 pF） | $10\ \mathrm k\parallel r_{\pi2}$ | 8.41 kΩ | 35 |
| $C_{\mu2}$（0.3 pF） | $8.41+11.2+g_{m2}(11.2)(8.41)$ | 374 kΩ | 112 |
| $C_{cs2}$（1.5 pF） | $12.5\ \mathrm k\parallel R_{i3}$ | 11.2 kΩ | 16.8 |
| $C_{bs3}$（1.5 pF） | 同一节点 | 11.2 kΩ | 16.8 |
| $C_{\pi3}$（633 pF） | $r_{\pi3}\parallel\dfrac{13.5\ \mathrm k}{24.9}$ | 480 Ω | 304 |
| $C_{\mu3}$（0.3 pF） | $11.2+10+G_m(10)(11.2)$ | 127 kΩ | 38 |
| 总和 $T_0$ | | | 523 |

$$
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=\frac{1}{2\pi(523\ \mathrm{ns})}=0.30\ \mathrm{MHz}.
$$

缓慢的横向 pnp 管（$C_{\pi3}$，占 $T_0$ 的 58 %）贡献最大，其次是密勒电容 $C_{\mu2}$。

### 第 5 步 — SPICE 极点

模型采用给定偏置点数值的恒定结电容以及上面的 $\tau_F$。横向 pnp 的基极-衬底电容用一个从其基极接到交流地的 1.5 pF 显式电容表示。

```spice
* grsim-07-36 two-stage amplifier
.model qn npn is=4e-14 bf=200 tf=312p   cje=3p mje=0 cjc=0.3p mjc=0 cjs=1.5p mjs=0
.model qp pnp is=4e-14 bf=100 tf=26.35n cje=3p mje=0 cjc=0.3p mjc=0
VCC vcc 0 6
VEE vee 0 -6
Vi  s 0 dc 0 ac 1
RS1 s  b1 10k
RS2 b2 0  10k
Q1 c1 b1 t vee qn
Q2 c2 b2 t vee qn
RC1 vcc c1 12.5k
RC2 vcc c2 12.5k
Q4 t  bb e4 vee qn
R4 e4 vee 2.5k
Q5 bb bb e5 vee qn
R5 e5 vee 1k
RB bb 0 10k
Q3 o c2 e3 qp
RE3 vcc e3 1k
Cbs3 c2 0 1.5p
RL o vee 10k
.ac dec 200 1k 1G
.pz s 0 o 0 vol pol
.end
```

| 量 | 手算 | ngspice |
|---|---|---|
| $I_{C2}$、$\lvert I_{C3}\rvert$、$V_O$ | 98 µA，0.621 mA，0.2 V | 101 µA，0.584 mA，−0.16 V |
| 增益 | −169（44.5 dB） | 44.8 dB（−174） |
| −3 dB 频率 | 0.30 MHz（零值法） | 0.344 MHz |
| 第一极点 | — | $2.27\times10^6$ rad/s（0.361 MHz） |
| 第二极点 | — | $9.90\times10^6$ rad/s（1.58 MHz） |
| 其后的极点 | — | 23 MHz，57 MHz，72 MHz，84 MHz |

偏置上的小差别来自 SPICE 中的指数型 $V_{BE}$（约 0.62–0.64 V 而不是 0.6 V）。零值法只估算主极点：0.30 MHz 对比 0.36 MHz，照例略偏保守。第二极点只高约 4.4 倍，因此零值带宽（以及仿真的 −3 dB 点 0.34 MHz）略低于第一极点。由于只有 $Q_2$ 一侧驱动第二级，差模半边电路本身也是一种近似。单独仿真半边电路时，第二极点约在 4.6 MHz 而不是 1.6 MHz，而第一极点几乎不变。
