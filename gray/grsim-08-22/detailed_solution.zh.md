# 详细步骤 - grsim-08-22

采用电流驱动时，从输出端接回 $M_1$ 栅极的 30 kΩ 电阻检测输出电压，并把电流送回输入节点，因此放大器为电压并联反馈（跨阻放大器），理想跨阻为 $-30$ kΩ。先求偏置，注意输入节点没有直流电流，所以 $V_{G1}=V_o$。然后建立计入反馈电阻负载的基本放大器，求出 $a$、$T$、闭环跨阻和阻抗，并用 ngspice 全部核对，包括大信号传输特性。

### 第 1 步 — 偏置点

- **基准支路。** 10 kΩ 电阻向二极管连接的 $Q_2$ 和 $M_2$ 供电：
$$
I_2=\frac{5-V_{BE2}-V_{GS2}}{10\ \mathrm{k\Omega}},\qquad V_{BE2}=V_T\ln\frac{I_2}{I_S},\qquad V_{GS2}=0.6+\sqrt{\frac{2I_2}{(200\ \mu\mathrm{A/V^2})(20)}} .
$$
求解得 $I_2=0.325$ mA，$V_{BE2}=0.749$ V，$V_{GS2}=1.003$ V，$Q_1$ 的基极位于 $V_{B1}=1.752$ V。
- **$M_1$ 的漏极节点。** $Q_1$ 的发射极位于 $V_{B1}-V_{BE1}=1.004$ V，所以 $R_{L1}$ 中的电流为 $(5-1.004)/1\ \mathrm{k\Omega}=4.00$ mA。$Q_1$ 的发射极电流也流入同一节点，所以 $M_1$ 吸收两者之和：$I_{D1}=I_{R_{L1}}+I_{E1}$。
- **经 $Q_1$ 和 $Q_3$ 的环路。** $Q_1$ 的集电极电流流过 $R_{L2}$，其下端是 $Q_3$ 的基极：$I_{C1}=(5-V_o-V_{BE3})/10\ \mathrm{k\Omega}-I_{B3}$，且 $I_{C3}\approx V_o/1\ \mathrm{k\Omega}$。$M_1$ 的栅极位于 $V_o$，所以 $V_o=0.6+\sqrt{2I_{D1}/[(200\ \mu\mathrm{A/V^2})(300)]}$。

联立求解：

| $I_{C1}$ | $I_{D1}$ | $V_o=V_{GS1}$ | $I_{C3}$ | $V_{C1}$ |
|---|---|---|---|---|
| 0.315 mA | 4.31 mA | 0.979 V | 0.970 mA | 1.757 V |

$Q_1$ 的集电极（1.757 V）略高于其基极（1.752 V），所以 $Q_1$ 处于放大区，但接近饱和。

### 第 2 步 — 小信号参数

| 量 | 数值 |
|---|---|
| $g_{m1}=\sqrt{2(60\ \mathrm{mA/V^2})I_{D1}}$ | 22.8 mS |
| $Q_1$：$g_m$，$r_\pi$ | 12.1 mS，8.26 kΩ |
| $Q_3$：$g_m$，$r_\pi$ | 37.3 mS，2.68 kΩ |
| $Q_1$ 基极处电阻：$10\ \mathrm{k\Omega}\parallel(1/g_{m,Q2}+1/g_{m,M2})$ | 655 Ω |

### 第 3 步 — 基本放大器

对电压并联反馈，$f=-1/R_F=-1/30\ \mathrm{k\Omega}$，反馈电阻在输入端和输出端各形成一个 30 kΩ 的对地负载。输入节点是 MOS 栅极，所以基本放大器的输入电阻为 30 kΩ，$v_{g}=(30\ \mathrm{k\Omega})\,i_i$。

- **$M_1$ 与漏极节点。** $M_1$ 从节点 $X$ 吸取 $g_{m1}v_g$。节点 $X$ 由 $R_{L1}$ 和 $Q_1$ 的发射极供电，后者呈现 $(r_{\pi1}+655\ \Omega)/(\beta+1)=88.3\ \Omega$。流入 $Q_1$ 的比例为 $1\ \mathrm{k\Omega}/(1\ \mathrm{k\Omega}+88.3\ \Omega)=0.919$。
- **$Q_1$ 的集电极。** $Q_1$ 把该电流的 $\alpha$ 倍送入 $R_{L2}$ 与 $Q_3$ 输入电阻 $r_{\pi3}+(\beta+1)(1\ \mathrm{k\Omega}\parallel30\ \mathrm{k\Omega})=100.4\ \mathrm{k\Omega}$ 的并联，即 9.09 kΩ。$v_g$ 增大时该节点电压下降。
- **跟随器 $Q_3$。** 增益为 $(\beta+1)(968\ \Omega)/100.4\ \mathrm{k\Omega}=0.973$。

$$
\frac{v_o}{v_g}=-g_{m1}(0.919)(0.990)(9.09\ \mathrm{k\Omega})(0.973)=-183.2,\qquad a=\frac{v_o}{i_i}=(-183.2)(30\ \mathrm{k\Omega})=-5.50\ \mathrm{M\Omega}.
$$

### 第 4 步 — 环路增益与闭环结果

$$
T=af=\frac{5.50\ \mathrm{M\Omega}}{30\ \mathrm{k\Omega}}=183.2,\qquad \frac{v_o}{i_i}=\frac{a}{1+T}=\frac{-5.50\ \mathrm{M\Omega}}{184.2}=-29.84\ \mathrm{k\Omega}.
$$

输入电阻为基本放大器的 30 kΩ 除以 $1+T$：

$$
R_{\text{in}}=\frac{30\ \mathrm{k\Omega}}{184.2}=163\ \Omega .
$$

基本放大器的输出电阻是由 $R_{L2}$ 驱动的跟随器 $Q_3$ 的输出电阻（$Q_1$ 的集电极为高阻电流源，故源电阻为 10 kΩ），与 $R_{L3}\parallel R_F$ 并联：

$$
z_{oa}=\frac{10\ \mathrm{k\Omega}+r_{\pi3}}{\beta+1}\parallel968\ \Omega=111\ \Omega,\qquad R_{\text{out}}=\frac{z_{oa}}{1+T}=\frac{111\ \Omega}{184.2}=0.60\ \Omega .
$$

### 第 5 步 — 与 SPICE 比较

网表采用题给器件参数，MOS 为 level-1 模型，$V_T=26$ mV。交流电流源驱动栅极节点。$R_{\text{out}}$ 通过向输出端注入 1 A 交流电流测得。由于输入节点由理想电流源驱动且 $M_1$ 栅极不取电流，反馈电阻的远端对环路而言是开路。因此在输出端与 30 kΩ 电阻之间做串联电压注入，$T=-v_o/v_f$ 是精确的。

```spice
* grsim-08-22 BiCMOS transresistance amplifier
.options temp=28.57 tnom=28.57
.model qn npn is=1e-16 bf=100
.model nm nmos level=1 kp=200u vto=0.6 lambda=0 gamma=0
VDD vdd 0 5
RL1 vdd x 1k
M1 x g 0 0 nm w=300u l=1u
Q1 c1 b1 x qn
RL2 vdd c1 10k
RB vdd b1 10k
Q2 b1 b1 e2 qn
M2 e2 e2 0 0 nm w=20u l=1u
Q3 vdd c1 o qn
RL3 o 0 1k
RF o g 30k
Ii 0 g dc 0 ac 1
.op
.ac lin 1 1k 1k
.dc Ii -200u 100u 0.5u
.end
```

| 量 | 手算 | ngspice |
|---|---|---|
| $V_o$（直流）、$I_{D1}$、$I_{C1}$ | 0.979 V，4.31 mA，0.315 mA | 0.979 V，4.32 mA，0.315 mA |
| $v_o/i_i$ | −29.84 kΩ | −29.84 kΩ |
| 环路增益 $T$ | 183 | 184 |
| $R_{\text{in}}$ | 163 Ω | 163 Ω |
| $R_{\text{out}}$ | 0.60 Ω | 0.60 Ω |

### 第 6 步 — 大信号传输特性

![输出电压随输入电流（−200 µA 至 100 µA）变化的曲线：−95 µA 以下恒为 3.80 V，过零输入时 0.979 V 的斜率为 −29.8 kΩ 的直线，在 33 µA 处降到约 0 V，之后按 (1 kΩ)·ii 缓慢上升](/q/grsim-08-22/solution-transfer.zh.svg)

- **线性区**，$-95\ \mu\mathrm{A}\lesssim i_i\lesssim33\ \mu$A：$v_o\approx0.979\ \mathrm{V}-(29.8\ \mathrm{k\Omega})\,i_i$。环路把栅极保持在 $V_{GS1}$ 附近，输入电流流过 30 kΩ 电阻。
- **正向极限。** $i_i$ 增大时 $v_o$ 下降，直到 $v_o$ 约为 0 V 时 $Q_3$ 截止，此时 $i_i\approx0.98\ \mathrm{V}/30\ \mathrm{k\Omega}=33\ \mu$A。此后输入电流只是经 30 kΩ 电阻和 $R_{L3}$ 流到地，$v_o\approx(1\ \mathrm{k\Omega})\,i_i$，只有几十毫伏。
- **负向极限。** $i_i$ 变为负值时 $v_o$ 上升，这要求 $Q_1$ 的电流减小。$Q_1$ 截止后，$M_1$ 只吸收 $R_{L1}$ 的电流，$Q_3$ 仅经 10 kΩ 电阻驱动。发射极负载约为 1 kΩ，$v_o\approx(5-V_{BE3})(\beta+1)R_{L3}/[R_{L2}+(\beta+1)R_{L3}]\approx3.8$ V（仿真为 3.80 V）。该值在 $i_i\approx-95\ \mu$A 处达到，输入更负时输出保持不变。
