# 详细步骤 - grsim-07-35

由 $Q_6$ 基准和 $Q_5$ 尾电流源求偏置，再求混合 π 元件。增益由两个差分对的差模半边电路得到；注意输出是从 $Q_4$ 单端取出的。对零值时间常数求和得到 −3 dB 频率和上升时间，ngspice（结电容为常数，$\tau_F$ 由 $f_T$ 求得）给出精确带宽和 −135° 频率。

### 第 1 步 — 偏置

基准电流从地经 5 kΩ、二极管 $Q_6$ 和 1 kΩ 流到 −6 V：

$$
I_{REF}=\frac{6-0.6}{5\ \mathrm{k\Omega}+1\ \mathrm{k\Omega}}=0.9\ \mathrm{mA}.
$$

于是 $Q_5$ 的基极位于 $-0.9\ \mathrm{mA}\times5\ \mathrm{k\Omega}=-4.5$ V，发射极位于 −5.1 V，故 $I_{C5}=0.9\ \mathrm V/2\ \mathrm{k\Omega}=0.45$ mA，$I_{C1}=I_{C2}=0.225$ mA。第一级集电极位于 $6-2.25=3.75$ V，第二级尾节点位于 3.15 V，因此 $I_{C3}=I_{C4}=3.15\ \mathrm V/(2\times5\ \mathrm{k\Omega})=0.315$ mA，$V_O=6-1.575=4.43$ V。

### 第 2 步 — 小信号元件

$\tau_F$ 由 1 mA 时的 $f_T$ 求得：$C_\pi+C_\mu=g_m/\omega_T=(38.5\ \mathrm{mA/V})/(2\pi\cdot600\ \mathrm{MHz})=10.2$ pF，故 $C_\pi=10.0$ pF，$\tau_F=(10.0-2)\ \mathrm{pF}/38.5\ \mathrm{mA/V}=208$ ps。

| | $Q_1$、$Q_2$（0.225 mA） | $Q_3$、$Q_4$（0.315 mA） |
|---|---|---|
| $g_m$ | 8.65 mA/V | 12.1 mA/V |
| $r_\pi=\beta/g_m$ | 23.1 kΩ | 16.5 kΩ |
| $C_\pi=\tau_Fg_m+C_{je}$ | 3.80 pF | 4.52 pF |

### 第 3 步 — 低频增益

在差模半边电路中，第一级集电极负载为 $10\ \mathrm{k\Omega}\parallel r_{\pi3}=6.23\ \mathrm{k\Omega}$，输入在 $R_S=20\ \mathrm{k\Omega}$ 与 $r_{\pi1}$ 之间分压：

$$
A_1=-g_{m1}(10\ \mathrm{k\Omega}\parallel r_{\pi3})\frac{r_{\pi1}}{r_{\pi1}+20\ \mathrm{k\Omega}}=-(53.9)(0.536)=-28.9,\qquad A_2=-g_{m3}(5\ \mathrm{k\Omega})=-60.6 .
$$

单端输入 $v_i$ 使第一级差分输出为 $A_1v_i$。输出只取 $Q_4$ 的集电极，它携带第二级差分输出的一半，而 $Q_4$ 的基极由 $Q_2$（反相一侧）驱动：

$$
\frac{v_o}{v_i}=-\frac{A_1A_2}{2}=-\frac{(28.9)(60.6)}{2}=-875\quad(58.8\ \mathrm{dB}).
$$

### 第 4 步 — 零值时间常数与上升时间

在差模半边电路中发射极为交流地。每个 $C_\mu$ 看到的电阻为 $R_{left}+R_{right}+g_mR_{left}R_{right}$：

| 电容 | 看到的电阻 | $R$ (kΩ) | $RC$ (ns) |
|---|---|---|---|
| $C_{\pi1}$（3.80 pF） | $20\ \mathrm k\parallel r_{\pi1}$ | 10.7 | 40.7 |
| $C_{\mu1}$（0.2 pF） | $10.7+6.23+g_{m1}(6.23)(10.7)$ | 595 | 119 |
| $C_{cs1}$（1 pF） | $10\ \mathrm k\parallel r_{\pi3}$ | 6.23 | 6.2 |
| $C_{\pi3}$（4.52 pF） | $10\ \mathrm k\parallel r_{\pi3}$ | 6.23 | 28.2 |
| $C_{\mu3}$（0.2 pF） | $6.23+5+g_{m3}(5)(6.23)$ | 388 | 77.7 |
| $C_{cs3}$（1 pF） | $5\ \mathrm k$ | 5 | 5.0 |
| 总和 $T_0$ | | | 277 |

$$
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=575\ \mathrm{kHz},\qquad t_r\approx2.2T_0=0.61\ \mu\mathrm s.
$$

上升时间采用单一主极点关系 $t_r=2.2\tau$。两个密勒电容 $C_{\mu1}$ 和 $C_{\mu3}$ 贡献了 $T_0$ 的 70 %。

### 第 5 步 — SPICE

器件模型采用给定偏置点数值的恒定结电容（梯度系数为零），$\tau_F=208$ ps，$\beta=200$；$I_S$ 的取值使 $V_{BE}\approx0.6$ V。

```spice
* grsim-07-35 two-stage amplifier
.model qn npn is=4e-14 bf=200 tf=208p cje=2p mje=0 cjc=0.2p mjc=0 cjs=1p mjs=0
VCC vcc 0 6
VEE vee 0 -6
Vi  s 0 dc 0 ac 1 pulse(0 10u 10n 1p 1p 5u 10u)
RS1 s  b1 20k
RS2 b2 0  20k
Q1 c1 b1 t1 vee qn
Q2 c2 b2 t1 vee qn
RC1 vcc c1 10k
RC2 vcc c2 10k
Q5 t1 bb e5 vee qn
R5 e5 vee 2k
Q6 bb bb e6 vee qn
R6 e6 vee 1k
RB bb 0 5k
Q3 c3 c1 t2 vee qn
Q4 c4 c2 t2 vee qn
RC3 vcc c3 5k
RC4 vcc c4 5k
RT t2 0 5k
.ac dec 200 1k 1G
.tran 2n 3u
.end
```

| 量 | 手算 | ngspice |
|---|---|---|
| $I_{C1}$、$I_{C3}$、$V_O$ | 0.225 mA，0.315 mA，4.43 V | 0.226 mA，0.312 mA，4.44 V |
| 增益 | −875（58.8 dB） | 58.86 dB（−877） |
| −3 dB 频率 | 575 kHz（零值法） | 621 kHz |
| 相位比低频值滞后 135° 的频率 | — | 7.41 MHz |
| 10–90 % 上升时间（10 µV 阶跃） | 0.61 µs | 0.56 µs，无过冲 |

零值估算与仿真带宽相差 8 % 以内，并略偏保守，这在存在主极点时是预期的。−135° 点远高于 −3 dB 频率。主极点（约 0.63 MHz）提供 90° 滞后，其余 45° 来自约 7 MHz 处的第二极点。因此 −135° 频率基本上就是第二极点频率，若在该级外加反馈，正是它限制了性能。
