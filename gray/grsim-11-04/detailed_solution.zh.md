# 详细步骤 - grsim-11-04

$r_b=0$、$r_o=\infty$ 且不计电容时，小信号电路只有两个节点。在基极节点，$R_S$ 与 $r_\pi$ 并联，承受 $R_S$ 的噪声电流和基极散粒噪声。在集电极节点，$R_L$ 承受集电极散粒噪声和自身的热噪声。基极节点的噪声经 $v_{be}$ 和增益 $g_mR_L$ 到达输出；集电极节点的噪声直接出现在 $R_L$ 上。各个不相关的贡献按功率相加。输出谱密度除以跨阻的平方得到等效输入噪声电流，在 2 MHz 带宽内积分即得最小可检测信号。

### 第 1 步 — 小信号参数

$$
g_m=\frac{I_C}{V_T}=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.5\ \mathrm{mS},\qquad r_\pi=\frac{\beta}{g_m}=1.3\ \mathrm{k\Omega},\qquad I_B=\frac{I_C}{\beta}=20\ \mu\mathrm{A},
$$

$$
R_b=R_S\parallel r_\pi=1\ \mathrm{k\Omega}\parallel1.3\ \mathrm{k\Omega}=565\ \Omega,\qquad g_mR_L=385 .
$$

### 第 2 步 — 来自基极节点的噪声

$R_S$ 的热噪声和基极散粒噪声都流入 $R_b$：

$$
\frac{\overline{i_b^2}}{\Delta f}=\frac{4kT}{R_S}+2qI_B=\frac{1.66\times10^{-20}}{1\ \mathrm{k\Omega}}+2(1.6\times10^{-19})(20\ \mu\mathrm{A})=1.66\times10^{-23}+0.64\times10^{-23}=2.30\times10^{-23}\ \mathrm{A^2/Hz}.
$$

由此产生的 $v_{be}$ 被 $g_mR_L$ 放大：

$$
\frac{\overline{v_{o1}^2}}{\Delta f}=\frac{\overline{i_b^2}}{\Delta f}R_b^2(g_mR_L)^2=(2.30\times10^{-23})(565\ \Omega)^2(385)^2=1.087\times10^{-12}\ \mathrm{V^2/Hz}.
$$

### 第 3 步 — 来自集电极节点的噪声

集电极散粒噪声和 $R_L$ 的热噪声直接流入 $R_L$：

$$
\frac{\overline{v_{o2}^2}}{\Delta f}=\left(2qI_C+\frac{4kT}{R_L}\right)R_L^2=(3.2\times10^{-22}+1.66\times10^{-24})(10\ \mathrm{k\Omega})^2=3.22\times10^{-14}\ \mathrm{V^2/Hz}.
$$

### 第 4 步 — 总输出谱密度与 2 MHz 内的噪声

$$
\frac{\overline{v_o^2}}{\Delta f}=1.087\times10^{-12}+0.032\times10^{-12}=1.12\times10^{-12}\ \mathrm{V^2/Hz}\quad(1.06\ \mu\mathrm{V}/\sqrt{\mathrm{Hz}}).
$$

噪声谱是白噪声，所以在 2 MHz 理想截止下

$$
\overline{v_o^2}=(1.12\times10^{-12}\ \mathrm{V^2/Hz})(2\ \mathrm{MHz})=2.24\times10^{-6}\ \mathrm{V^2},\qquad v_{o,\text{rms}}=1.50\ \mathrm{mV}.
$$

### 第 5 步 — 最小可检测信号

信号源电流在 $R_S$ 与 $r_\pi$ 之间分流，所以跨阻为

$$
\frac{v_o}{i_S}=g_mR_LR_b=(38.5\ \mathrm{mS})(10\ \mathrm{k\Omega})(565\ \Omega)=217\ \mathrm{k\Omega}.
$$

等效输入噪声电流密度为 $1.12\times10^{-12}/(217\ \mathrm{k\Omega})^2=2.37\times10^{-23}\ \mathrm{A^2/Hz}$。最小可检测信号是等于输入折算噪声的输入电流有效值：

$$
i_{S,\min}=\frac{v_{o,\text{rms}}}{217\ \mathrm{k\Omega}}=\frac{1.50\ \mathrm{mV}}{217\ \mathrm{k\Omega}}=6.9\ \mathrm{nA\ rms}.
$$

在输入折算噪声中，$R_S$ 占 70 %，基极散粒噪声占 27 %，集电极散粒噪声占 3 %，$R_L$ 不到 0.1 %。

### 第 6 步 — 与 SPICE 比较

偏置不能引入噪声。基极由理想（无噪声）的 20 µA 直流电流源偏置，因此在 $\beta=50$、无厄利效应时恰好有 $I_C=1$ mA。$R_S$ 经 1 F 电容接地，电容隔断其直流电流，但在噪声频率上相当于短路。$R_L$ 接 15 V 电源，电源为交流地。交流输入 $i_S$ 是另一个流入基极的电流源，噪声分析以它作为输入参考。

```spice
* grsim-11-04 CE stage noise, noiseless bias
.options temp=28.57 tnom=28.57
.model qn npn is=1e-15 bf=50
VCC vcc 0 15
IB 0 b 20u
Is 0 b dc 0 ac 1
RS b rs 1k
CS rs 0 1
Q1 c b 0 qn
RL vcc c 10k
.noise v(c) Is lin 201 1 2meg
.end
```

| 量 | 手算 | ngspice |
|---|---|---|
| $I_C$、$g_m$ | 1 mA，38.5 mS | 1.000 mA，38.46 mS |
| 跨阻 $v_o/i_S$ | 217 kΩ | 217.4 kΩ |
| 输出噪声谱密度 | $1.12\times10^{-12}$ V²/Hz | $1.12\times10^{-12}$ V²/Hz（1 Hz 至 2 MHz 平坦） |
| 输入噪声电流谱密度 | $2.37\times10^{-23}$ A²/Hz | $2.38\times10^{-23}$ A²/Hz |
| 输出噪声，1 Hz–2 MHz | 1.50 mV rms | 1.498 mV rms |
| 最小可检测信号（输入噪声，1 Hz–2 MHz） | 6.9 nA rms | 6.89 nA rms |

仿真与手算结果相差在 0.3 % 以内。这一微小差别来自 ngspice 在为得到 $V_T=26$ mV 所选的温度下计算的 $4kT$（$1.667\times10^{-20}$ V·C，而不是 $1.66\times10^{-20}$ V·C）。
