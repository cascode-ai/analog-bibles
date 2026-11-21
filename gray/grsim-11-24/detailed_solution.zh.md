# 详细步骤 - grsim-11-24

把电路看作并联反馈跨阻放大器。基本放大器（从 $M_1$ 栅极到 $v_o$）用一个等效输入噪声电压 $\overline{v_{ia}^2}$ 表示；由于 MOS 栅极不取电流，其输入噪声电流为零。折算到输入电流节点时，反馈电阻贡献 $4kT/R_F$，$\overline{v_{ia}^2}$ 则通过输入节点的总导纳 $1/R_F+j\omega(C_S+C_{gs1})$ 起作用。该导纳随频率增大，所以输入噪声电流在高频处上升。最后用 SPICE 核对偏置、带宽和噪声谱密度。

### 第 1 步 — 直流工作点

栅极没有电流，30-kΩ 电阻中没有直流电流，故 $V_o=V_{GS1}$。偏置支路决定 $Q_1$ 的基极电位：取 $I\approx0.32$ mA，$V_{BE2}=0.75$ V，$V_{GS2}=0.6+\sqrt{2(0.32\ \mathrm{mA})/(200\ \mu\mathrm{A/V^2}\cdot20)}=1.0$ V，于是

$$
I_{bias}=\frac{5-0.75-1.0}{10\ \mathrm{k\Omega}}=0.33\ \mathrm{mA},\qquad V_{B1}=1.75\ \mathrm V,\qquad V_{E1}=1.75-0.75=1.0\ \mathrm V.
$$

于是 $R_{L1}$ 中的电流为 $(5-1.0)/1\ \mathrm{k\Omega}=4.0$ mA。$R_{L2}$ 中的电流为 $(5-1.75)/10\ \mathrm{k\Omega}=0.33$ mA，其中约 10 µA 是 $Q_3$ 的基极电流，故 $I_{C1}\approx0.31$ mA，$I_{D1}=4.0+0.31=4.31$ mA。饱和区中

$$
V_{GS1}=V_t+\sqrt{\frac{2I_{D1}}{\mu_nC_{ox}(W/L)}}=0.6+\sqrt{\frac{2(4.31\ \mathrm{mA})}{(200\ \mu\mathrm{A/V^2})(300)}}=0.98\ \mathrm V,
\qquad g_{m1}=\frac{2I_{D1}}{V_{GS1}-V_t}=22.7\ \mathrm{mS}.
$$

因此 $V_o\approx0.98$ V，$I_{C3}\approx0.98\ \mathrm V/1\ \mathrm{k\Omega}=0.98$ mA。

### 第 2 步 — 前向增益、跨阻与 −3 dB 频率

$M_1$ 的漏极电流在 $R_{L1}$ 与 $Q_1$ 发射极（$1/g_{m,Q1}=26\ \mathrm{mV}/0.31\ \mathrm{mA}=83\ \Omega$）之间分流。$Q_1$ 的集电极电流流入 $R_{L2}$ 与 $Q_3$ 输入电阻 $(\beta+1)(r_{e3}+R_{L3}\parallel R_F)=100$ kΩ 的并联。$Q_3$ 再以增益 $R_{L3}\parallel R_F/(R_{L3}\parallel R_F+r_{e3})=0.973$ 跟随。因此

$$
a=\frac{v_o}{v_g}=-g_{m1}\cdot\frac{1\ \mathrm{k\Omega}}{1\ \mathrm{k\Omega}+83\ \Omega}\cdot\alpha\cdot(10\ \mathrm{k\Omega}\parallel100\ \mathrm{k\Omega})\cdot0.973\approx-184.
$$

前向通路是反相的，因此经 $R_F$ 的反馈是负反馈。无反馈时输入节点的极点为

$$
f_{p}=\frac{1}{2\pi R_F(C_S+C_{gs1})}=\frac{1}{2\pi(30\ \mathrm{k\Omega})(1.5\ \mathrm{pF})}=3.54\ \mathrm{MHz}.
$$

闭环后低频跨阻为 $R_F|a|/(1+|a|)=29.8$ kΩ，极点移到

$$
f_{-3\,\mathrm{dB}}\approx(1+|a|)f_p=185\times3.54\ \mathrm{MHz}\approx650\ \mathrm{MHz}.
$$

### 第 3 步 — 基本放大器的等效输入噪声电压

把各噪声源折算到 $M_1$ 栅极：

- $M_1$ 的沟道噪声：$4kT\dfrac{2}{3g_{m1}}=4kT(29.3\ \Omega)$。
- $R_{L1}$：其电流 $4kT/R_{L1}$ 注入漏极节点的方式与 $g_{m1}v_g$ 完全相同，故为 $\dfrac{4kT}{R_{L1}g_{m1}^2}=4kT(1.9\ \Omega)$。
- $Q_1$：作为由 1 kΩ 驱动的共基级，其集电极散粒噪声到达集电极时被缩小约 $1+g_{m,Q1}(1\ \mathrm{k\Omega})\approx13$ 倍，贡献低于 $4kT(0.1\ \Omega)$。$R_{L2}$ 贡献约 $4kT(0.2\ \Omega)$，偏置支路、$Q_3$ 和 $R_{L3}$ 合计约 $4kT(1\ \Omega)$ 或更小。

$$
\frac{\overline{v_{ia}^2}}{\Delta f}\approx4kT(31\ \Omega)=5.2\times10^{-19}\ \mathrm{V^2/Hz}.
$$

### 第 4 步 — 等效输入噪声电流

与栅极串联的电压 $v_{ia}$ 迫使电流 $v_{ia}[1/R_F+j\omega(C_S+C_{gs1})]$ 流过输入导纳，因此等效输入电流源为

$$
\frac{\overline{i_i^2}}{\Delta f}=\frac{4kT}{R_F}+\frac{\overline{v_{ia}^2}}{\Delta f}\left|\frac1{R_F}+j\omega(C_S+C_{gs1})\right|^2.
$$

低频时第二项为 $\overline{v_{ia}^2}/R_F^2=5.8\times10^{-28}$ A²/Hz，可以忽略，故

$$
\frac{\overline{i_i^2}}{\Delta f}\approx\frac{1.66\times10^{-20}\ \mathrm{V\,C}}{30\ \mathrm{k\Omega}}=5.5\times10^{-25}\ \mathrm{A^2/Hz}\quad(0.74\ \mathrm{pA/\sqrt{Hz}}),
$$

由反馈电阻决定。

在 $f_{-3\,\mathrm{dB}}=650$ MHz 处，$\omega(C_S+C_{gs1})=2\pi(650\ \mathrm{MHz})(1.5\ \mathrm{pF})=6.1$ mS，远大于 $1/R_F=33\ \mu$S：

$$
\frac{\overline{i_i^2}}{\Delta f}=5.5\times10^{-25}+(5.2\times10^{-19})(6.1\ \mathrm{mS})^2=5.5\times10^{-25}+2.0\times10^{-23}\approx2.1\times10^{-23}\ \mathrm{A^2/Hz},
$$

约 4.6 pA/√Hz。此时 $M_1$ 的沟道噪声作用在 $C_S+C_{gs1}$ 上占主导；当 $\omega(C_S+C_{gs1})\overline{v_{ia}}$ 超过 $R_F$ 的噪声（转折频率约 110 MHz）后，谱密度按 $f^2$ 上升。

### 第 5 步 — SPICE 验证

网表采用 level-1 MOSFET（$K_P=200\ \mu$A/V²，$V_{TO}=0.6$ V，$\lambda=0$，无本征电容，热噪声 $4kT\tfrac23g_m$）、IS $=10^{-16}$ A 和 BF $=100$ 且无电容的 NPN、外接的 $C_S$ 与 $C_{gs1}$，并设定温度使 $4kT=1.66\times10^{-20}$ V·C。输入为接在栅极的交流电流源；对电流输入，仿真器给出的输入参考噪声就是 $\overline{i_i^2}$。

```spice
* grsim-11-24 BiCMOS TIA noise
VDD vdd 0 5
IIN 0 g dc 0 ac 1
CS g 0 1p
CGS1 g 0 0.5p
M1 d1 g 0 0 nm W=300u L=1u
RL1 vdd d1 1k
Q1 c1 b1 d1 qn
RL2 vdd c1 10k
RB vdd b1 10k
Q2 b1 b1 s2 qn
M2 s2 s2 0 0 nm W=20u L=1u
Q3 vdd c1 out qn
RL3 out 0 1k
RF out g 30k
.model nm nmos level=1 vto=0.6 kp=200u lambda=0
.model qn npn is=1e-16 bf=100
.temp 27.4
.ac dec 50 1e5 1e10
.noise v(out) IIN dec 1 1e3 1e9
.end
```

工作点为 $I_{D1}=4.32$ mA，$g_{m1}=22.7$ mS，$I_{C1}=0.315$ mA，$I_{C3}=0.970$ mA，$V_o=0.979$ V。交流分析给出跨阻 29.8 kΩ，$f_{-3\,\mathrm{dB}}=651$ MHz。噪声分析结果为：

| $f$ | 1 kHz | 10 MHz | 100 MHz | 651 MHz（−3 dB） | 1 GHz |
|---|---|---|---|---|---|
| 手算（A²/Hz） | $5.54\times10^{-25}$ | $5.58\times10^{-25}$ | $1.01\times10^{-24}$ | $2.0\times10^{-23}$ | $4.7\times10^{-23}$ |
| SPICE，$r_b=0$（A²/Hz） | $5.54\times10^{-25}$ | $5.59\times10^{-25}$ | $1.04\times10^{-24}$ | $2.13\times10^{-23}$ | $4.95\times10^{-23}$ |
| SPICE，$r_b=200\ \Omega$（A²/Hz） | $5.54\times10^{-25}$ | $5.59\times10^{-25}$ | $1.06\times10^{-24}$ | $2.19\times10^{-23}$ | $5.08\times10^{-23}$ |

高频处仿真值比手算估计高约 6%，原因是手算忽略了 $\overline{v_{ia}^2}$ 中几个较小的贡献。

### 第 6 步 — $r_b=200\ \Omega$ 的影响

在双极模型中加入 RB $=200\ \Omega$ 后，偏置和 −3 dB 频率基本不变（649 MHz）。它在 $Q_1$（以及 $Q_3$）基极引入 $r_b$ 的热噪声，但到达 $M_1$ 栅极时被大幅衰减：共基管的基极电压折算到栅极时约被除以 $g_{m1}(1\ \mathrm{k\Omega}+83\ \Omega)\approx25$。低频谱密度不变，仍由 $R_F$ 决定；−3 dB 频率处的谱密度只上升约 2.5%，从 $2.13\times10^{-23}$ 增至 $2.19\times10^{-23}$ A²/Hz。
