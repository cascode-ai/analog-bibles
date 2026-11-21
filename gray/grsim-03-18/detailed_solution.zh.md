# 详细步骤 - grsim-03-18

先求偏置电流（10 MΩ 尾电阻使 20 μA 电流源略有增加），再使用差模和共模半边电路（half circuit）。对差模信号，发射极节点为交流地；对共模信号，每一半的发射极中都有 $2R_{\mathrm{TAIL}}$。然后用 ngspice 分别以纯差模和纯共模输入做交流分析进行验证，先用理想模型，再加入 $r_b=200\ \Omega$ 和 $V_A=130$ V。

### 第 1 步 — 偏置

基极接 0 V 时，发射极位于 $-V_{BE}$。取 $I_C\approx10\ \mu$A，由 $V_{BE}=V_T\ln(I_C/I_S)$：

$$
V_{BE}=26\ \mathrm{mV}\,\ln\frac{10.17\ \mu\mathrm A}{5\times10^{-15}\ \mathrm A}=0.557\ \mathrm V,\qquad
I_{R_{\mathrm{TAIL}}}=\frac{-0.557\ \mathrm V+5\ \mathrm V}{10\ \mathrm{M\Omega}}=0.44\ \mu\mathrm A .
$$

发射极总电流为 $20.44\ \mu$A，因此每侧 $I_E=10.22\ \mu$A、$I_C=\tfrac{200}{201}I_E=10.17\ \mu$A。于是

$$
g_m=\frac{I_C}{V_T}=0.391\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta_0}{g_m}=511\ \mathrm{k\Omega}.
$$

集电极电位为 $5-(10.17\ \mu\mathrm A)(100\ \mathrm{k\Omega})=3.98$ V，两管都处于正向放大区。

### 第 2 步 — 差模

在差模半边电路中发射极节点为交流地，每侧都是负载为 $R_C$、输入为 $\pm v_{id}/2$ 的共射级：

$$
A_{dm}=\frac{v_{od}}{v_{id}}=-g_mR_C=-(0.391\ \mathrm{mA/V})(100\ \mathrm{k\Omega})=-39.1,
\qquad
R_{id}=\frac{v_{id}}{i_b}=2r_\pi=1.02\ \mathrm{M\Omega}.
$$

### 第 3 步 — 共模

在共模半边电路中，每个晶体管的发射极接 $2R_{\mathrm{TAIL}}=20$ MΩ（理想电流源对交流为开路）。发射极负反馈电阻为 $R_E$ 时 $G_m=g_m/[1+g_mR_E(1+1/\beta_0)]$：

$$
A_{cm}=\frac{v_{oc}}{v_{ic}}=-\frac{g_mR_C}{1+2g_mR_{\mathrm{TAIL}}(1+1/\beta_0)}
=-\frac{39.1}{1+7863}\approx-\frac{R_C}{2R_{\mathrm{TAIL}}}=-4.97\times10^{-3},
$$

$$
R_{ic}=\frac{v_{ic}}{i_b}=r_\pi+(\beta_0+1)\,2R_{\mathrm{TAIL}}=0.51\ \mathrm{M\Omega}+201(20\ \mathrm{M\Omega})=4.02\ \mathrm{G\Omega}.
$$

### 第 4 步 — 共模抑制比

$$
\mathrm{CMRR}=\left|\frac{A_{dm}}{A_{cm}}\right|=1+2g_mR_{\mathrm{TAIL}}\left(1+\frac1{\beta_0}\right)=7.86\times10^{3}\quad(77.9\ \mathrm{dB}).
$$

### 第 5 步 — $r_b=200\ \Omega$ 与 $V_A=130$ V 的影响（手算）

- $r_b$ 使 $R_{id}$ 增加 $2r_b=0.4$ kΩ，使 $R_{ic}$ 增加 $r_b$，并使两个增益乘以 $r_\pi/(r_\pi+r_b)=0.9996$：在这样小的电流下 $r_\pi=511$ kΩ $\gg r_b$，影响可以忽略。
- $V_A=130$ V 给出 $r_o=V_A/I_C=12.8$ MΩ。差模时 $r_o$ 与 $R_C$ 并联：$A_{dm}=-g_m(R_C\parallel r_o)=-38.8$。共模时 $A_{cm}$ 几乎不变（$-4.93\times10^{-3}$），因此 CMRR 仍约为 $7.9\times10^{3}$。但是，与 $R_C$ 串联的 $r_o$ 现在把发射极接到交流地，与 $2R_{\mathrm{TAIL}}$ 并联（$20\ \mathrm{M\Omega}\parallel12.9\ \mathrm{M\Omega}\approx7.8$ MΩ），对共模半边电路做节点分析得 $R_{ic}\approx1.56$ GΩ，约降低为原来的 1/2.5。

### 第 6 步 — SPICE 验证

该网表先计算工作点，再做两次交流分析：第一次 $v_{i1}=+0.5$、$v_{i2}=-0.5$（纯差模，$v_{id}=1$），第二次 $v_{i1}=v_{i2}=1$（纯共模）。增益直接读为 $v_{od}$ 和 $v_{oc}$，输入电阻为 $1/|i(V_1)|$。

```spice
* grsim-03-18 emitter-coupled pair
VCC vcc 0 5
VEE vee 0 -5
V1  b1 0 dc 0 ac 0.5
V2  b2 0 dc 0 ac -0.5
Q1  o1 b1 e npn
Q2  o2 b2 e npn
RC1 vcc o1 100k
RC2 vcc o2 100k
IT  e vee 20u
RT  e vee 10meg
.model npn npn is=5e-15 bf=200
.control
op
print @q1[ic] v(e) v(o1)
ac lin 1 1 1
print v(o1)-v(o2) i(V1)
alter V1 ac = 1
alter V2 ac = 1
ac lin 1 1 1
print (v(o1)+v(o2))/2 i(V1)
.endc
.end
```

第二次运行时模型改为 `is=5e-15 bf=200 rb=200 vaf=130`。

| 量 | 手算，理想 | ngspice，理想 | 手算，含 $r_b$ 和 $V_A$ | ngspice，含 $r_b$ 和 $V_A$ |
|---|---|---|---|---|
| $I_C$ | 10.17 μA | 10.17 μA | 10.17 μA | 10.17 μA |
| $A_{dm}$ | −39.1 | −39.3 | −38.8 | −39.0 |
| $A_{cm}$ | $-4.97\times10^{-3}$ | $-4.97\times10^{-3}$ | $-4.93\times10^{-3}$ | $-4.94\times10^{-3}$ |
| CMRR | $7.86\times10^{3}$ | $7.91\times10^{3}$ | $7.87\times10^{3}$ | $7.90\times10^{3}$ |
| $R_{id}$ | 1.02 MΩ | 1.02 MΩ | 1.02 MΩ | 1.05 MΩ |
| $R_{ic}$ | 4.02 GΩ | 4.00 GΩ | 1.56 GΩ | 1.64 GΩ |

使用理想模型时，仿真重现了手算结果；$|A_{dm}|$ 高 0.5% 是因为 SPICE 在 27 °C 时 $V_T=25.9$ mV。加入 $r_b$ 和 $V_A$ 后，$r_b$ 没有可见影响，$|A_{dm}|$ 下降约 1%，CMRR 不变，$R_{ic}$ 约降低为 1/2.5，与预测一致。第二次仿真中 $R_{id}$ 升高 3%，来自 Gummel–Poon 模型：设置 VAF 后，集电极电流乘以 $(1+V_{CE}/V_A)$ 而基极电流不变，因此有效 $\beta$（以及 $r_\pi$）升高约 $4.5\ \mathrm V/130\ \mathrm V=3.5\%$。
