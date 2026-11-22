# 详细步骤 - grsim-07-37

$M_1$ 是共源驱动管，其负载是类似二极管的源极跟随器 $M_2$，因此增益等于两个跨导之比，并须计入 $M_2$ 的体效应。由 $V_O=2.5$ V 求偏置，计算各电容，并对零值时间常数求和。再用 level-1 ngspice 模型核对，同时求第二极点以及带宽随输入偏置的变化。(b) 部分加入短沟道源极电阻后重复计算。

### 第 1 步 — (a) 偏置与小信号参数

$M_2$ 的栅极和漏极接 5 V，源极位于 $V_O=2.5$ V，因此 $V_{GS2}=2.5$ V，$V_{SB2}=2.5$ V：

$$
V_{t2}=0.7+0.4\left(\sqrt{0.6+2.5}-\sqrt{0.6}\right)=1.094\ \mathrm V,\qquad
I_D=\tfrac12(60\ \mu\mathrm{A/V^2})(4)(2.5-1.094)^2=237\ \mu\mathrm A .
$$

$M_1$ 流过相同电流：$V_{ov1}=\sqrt{2(237\ \mu\mathrm A)/(60\ \mu\cdot100)}=0.281$ V，因此直流输入为 $V_{GS1}=0.981$ V。于是

$$
g_{m1}=\frac{2I_D}{V_{ov1}}=1.69\ \mathrm{mA/V},\quad g_{m2}=\frac{2I_D}{1.406\ \mathrm V}=0.337\ \mathrm{mA/V},\quad g_{mb2}=\frac{\gamma\,g_{m2}}{2\sqrt{0.6+2.5}}=0.038\ \mathrm{mA/V}.
$$

### 第 2 步 — (a) 低频增益

从 $M_2$ 的源极看入的电阻为 $R_L=1/(g_{m2}+g_{mb2})=2.66\ \mathrm{k\Omega}$，因此

$$
A_v=-\frac{g_{m1}}{g_{m2}+g_{mb2}}=-\frac{1.69}{0.375}=-4.49\quad(13.0\ \mathrm{dB}).
$$

不计体效应时该比值为 $\sqrt{(W/L)_1/(W/L)_2}=5$；$g_{mb2}$ 使其降低 10 %。

### 第 3 步 — (a) 电容与零值时间常数

取 $C_{ox}=1.73\ \mathrm{fF/\mu m^2}$，反偏修正因子 $1/\sqrt{1+2.5/0.6}=0.44$：

| 电容 | 表达式 | 数值 |
|---|---|---|
| $C_{gs1}$ | $\tfrac23(100)(1)(1.73)+0.3(100)$ | 145 fF |
| $C_{gd1}$ | $0.3(100)$ | 30 fF |
| 2.5 V 下的 $C_{db1}$ | $80\ \mathrm{fF}\times0.44$ | 35.2 fF |
| $C_{gs2}$（输出对交流地） | $\tfrac23(4)(1.73)+0.3(4)$ | 5.8 fF |
| 2.5 V 下的 $C_{sb2}$ | $3.2\ \mathrm{fF}\times0.44$ | 1.4 fF |

$C_{gd2}$ 被短路（栅极与漏极都接 $V_{DD}$）。各时间常数为：

- $C_{gs1}$：$R_S=1\ \mathrm{k\Omega}$ → 0.145 ns。
- $C_{gd1}$：$R_S+R_L+g_{m1}R_LR_S=8.15\ \mathrm{k\Omega}$ → 0.245 ns。
- 输出节点：$(100+35.2+5.8+1.4)\ \mathrm{fF}\times R_L=142.4\ \mathrm{fF}\times2.66\ \mathrm{k\Omega}=0.379$ ns。

$$
T_0=0.769\ \mathrm{ns},\qquad f_{-3\text{dB}}\approx\frac{1}{2\pi T_0}=207\ \mathrm{MHz}.
$$

### 第 4 步 — (a) SPICE：带宽、第二极点与偏置扫描

level-1 模型采用给定的 $k'$、$V_t$、$\gamma$、$2\phi_f$、$t_{ox}$、交叠电容和结电容（零偏值为 0.8 fF/µm 乘以宽度，$\psi_o=0.6$ V，梯度系数 0.5）。$M_1$ 的源极接地，其 $C_{sb}$ 不起作用。

```spice
* grsim-07-37 (a)
.model n1 nmos level=1 kp=60u vto=0.7 gamma=0.4 phi=0.6 lambda=0 tox=20n
+ cgso=0.3n cgdo=0.3n cbd=80f  cbs=80f  pb=0.6 mj=0.5
.model n2 nmos level=1 kp=60u vto=0.7 gamma=0.4 phi=0.6 lambda=0 tox=20n
+ cgso=0.3n cgdo=0.3n cbd=3.2f cbs=3.2f pb=0.6 mj=0.5
VDD vdd 0 5
Vi  s 0 dc 0.981 ac 1
RS  s g 1k
M1  o   g   0 0 n1 w=100u l=1u
M2  vdd vdd o 0 n2 w=4u   l=1u
CL  o 0 100f
.ac dec 200 1Meg 100G
.pz s 0 o 0 vol pz
.end
```

| 量 | 手算 | ngspice |
|---|---|---|
| $I_D$、$V_O$ | 237 µA，2.5 V | 236.9 µA，2.5005 V |
| 增益 | −4.49 | 13.04 dB（−4.49） |
| −3 dB 带宽 | 207 MHz（零值法） | 237 MHz |
| 主极点 | — | $1.54\times10^9$ rad/s（245 MHz） |
| 第二极点 | — | $8.32\times10^9$ rad/s（1.32 GHz） |
| 零点 | — | $+5.6\times10^{10}$ rad/s（右半平面，8.9 GHz） |

零值估算偏低 13 %，这在第二极点只比第一极点高 5.4 倍时是预期的。

![仿真的 −3 dB 带宽随直流输入电压的变化：从导通开始经饱和区上升，在线性区继续上升](/q/grsim-07-37/solution-bandwidth.zh.svg)

扫描直流输入可见：

- **$V_i<0.7$ V。** $M_1$ 截止，没有增益。
- **饱和区，0.7–1.39 V。** 带宽大致按 $\sqrt{I_D}$ 上升，因为决定输出极点的 $g_{m2}$ 随电流增大。0.78 V 时约 90 MHz，0.98 V 时 237 MHz，1.15 V 时 306 MHz，1.39 V 附近约 350 MHz。其间增益保持在 −4.3 至 −4.5，因为两个 $g_m$ 同比例变化。
- **线性区，1.39 V 以上。** $V_O$ 降到 $V_{GS1}-V_t$ 以下，$M_1$ 进入线性区。增益幅值下降（1.45 V 时为 3.7 dB，1.55 V 以上低于 0 dB），而由于输出电阻减小，带宽继续上升。

### 第 5 步 — (b) 短沟道源极电阻

$$
R_{SX1}=\frac{1}{\mathcal E_c\mu_nC_{ox}W_1}=\frac{1}{(1.5\times10^6)(60\times10^{-6})(100\times10^{-6})}=111\ \Omega,\qquad R_{SX2}=2.78\ \mathrm{k\Omega}.
$$

偏置电流不变时，$M_1$ 的等效跨导降为 $G_{m1}=g_{m1}/(1+g_{m1}R_{SX1})=1.42$ mA/V，负载变为 $R_{SX2}+1/(g_{m2}+g_{mb2})=5.44\ \mathrm{k\Omega}$：

$$
A_v=-G_{m1}(5.44\ \mathrm{k\Omega})=-7.7 .
$$

时间常数（电容接在电阻的下端，即分别接地和接输出）：

- $C_{gs1}$：$R_S$ → 0.145 ns。
- $C_{gd1}$：$R_S+R_L+G_{m1}R_LR_S=14.2\ \mathrm{k\Omega}$ → 0.425 ns。
- 输出：$142.4\ \mathrm{fF}\times5.44\ \mathrm{k\Omega}$ → 0.775 ns。

$$
T_0=1.35\ \mathrm{ns},\qquad f_{-3\text{dB}}\approx118\ \mathrm{MHz}.
$$

用这些元件建立的线性 ngspice 模型给出 −7.73（17.8 dB）和 129 MHz。小尺寸负载管的大电阻 $R_{SX2}$ 使负载电阻增大一倍多，而 $R_{SX1}$ 只使 $M_1$ 的跨导降低 16 %。因此速度饱和（velocity saturation）使增益升高、带宽降低。
