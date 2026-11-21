# 详细步骤 - grsim-11-09

先求偏置点，再把每个噪声源折算到 $M_1$ 的栅极。位于 $M_1$ 源极节点的噪声源经 $1/g_{m1}$ 折算。$Q_1$ 级看作由跟随器戴维南等效电路（Thevenin equivalent）驱动、带发射极负反馈（emitter degeneration）的共射级：其噪声先折算到 $Q_1$ 基极，再除以跟随器的开路增益。最后用 SPICE `.noise` 分析核对低频结果，并在加入电容后求噪声加倍的频率。

### 第 1 步 — 直流工作点

$I_{C1}=1$ mA、$\beta=100$ 时，$I_{B1}=10\ \mu$A，$I_{E1}=1.01$ mA。由指数律得

$$
V_{BE1}=\frac{kT}{q}\ln\frac{I_{C1}}{I_S}=(26\ \mathrm{mV})\ln\frac{10^{-3}}{10^{-16}}=0.778\ \mathrm V,\qquad
V_{B1}=V_{BE1}+I_{E1}R_2=0.778+0.101=0.879\ \mathrm V.
$$

$M_1$ 同时提供 $R_1$ 的电流和基极电流：$I_{D1}=0.879/300+0.01\ \mathrm{mA}=2.94$ mA。$M_1$ 处于饱和区（$V_{DS}\approx4.1$ V），故

$$
g_{m1}=\sqrt{2\mu_nC_{ox}(W/L)I_{D1}}=\sqrt{2(60\ \mu\mathrm{A/V^2})(100)(2.94\ \mathrm{mA})}=5.94\ \mathrm{mS},
\qquad V_{ov}=\frac{2I_{D1}}{g_{m1}}=0.99\ \mathrm V,
$$

$V_i\approx0.879+0.7+0.99=2.57$ V。对 $Q_1$：$g_{m}=I_C/(kT/q)=38.5$ mS（$1/g_m=26\ \Omega$），$r_\pi=\beta/g_m=2.6$ kΩ。

### 第 2 步 — $M_1$ 与 $R_1$ 的噪声

二者都是注入源极节点的电流源。无论该节点的负载如何，栅压 $v_g$ 对该节点的作用都与注入电流 $g_{m1}v_g$ 完全相同，因此源极处的电流 $i_n$ 等效于 $v_g=i_n/g_{m1}$：

$$
\begin{aligned}
M_1:&\quad \frac{4kT\cdot\tfrac23g_{m1}}{g_{m1}^2}=4kT\frac{2}{3g_{m1}}=4kT(112\ \Omega),\\
R_1:&\quad \frac{4kT/R_1}{g_{m1}^2}=4kT\frac{1}{(300\ \Omega)(5.94\ \mathrm{mS})^2}=4kT(94\ \Omega).
\end{aligned}
$$

### 第 3 步 — $Q_1$ 级在其基极处的噪声

从 $Q_1$ 基极看，跟随器是一个电压源 $A_fv_g$ 串联输出电阻 $R_o$：

$$
A_f=\frac{g_{m1}R_1}{1+g_{m1}R_1}=\frac{1.782}{2.782}=0.641,\qquad
R_o=R_1\parallel\frac1{g_{m1}}=108\ \Omega.
$$

令基极回路总电阻 $R_b=R_o+r_b=208\ \Omega$。写出基极回路方程 $v=i_bR_b+v_\pi+i_eR_2$，其中 $i_b=v_\pi/r_\pi$，即可求出与该级各噪声源等效的基极串联电压：

- $r_b$ 和 $R_2$ 是同一回路中的电压源：各为 $4kT(100\ \Omega)$。
- 集电极散粒噪声（shot noise）$2qI_C$：要使输出为零需 $v_\pi=-i_c/g_m$，这会产生流过 $R_b$ 和 $R_2$ 的 $i_b=-i_c/\beta$，故 $v_{eq}=i_c\left[\frac1{g_m}+\frac{R_b+R_2}{\beta}\right]=i_c(29.1\ \Omega)$，$\overline{v^2}/\Delta f=2qI_C(29.1\ \Omega)^2=4kT(16.3\ \Omega)$。
- 基极散粒噪声 $2qI_B$ 流过 $R_o$、$r_b$ 和 $R_2$：$\overline{v^2}/\Delta f=2qI_B(308\ \Omega)^2=4kT(18.3\ \Omega)$。
- $R_3$：从基极起的增益为 $|A_2|=\dfrac{\beta R_3}{R_b+r_\pi+(\beta+1)R_2}=\dfrac{100(2\ \mathrm{k\Omega})}{12.9\ \mathrm{k\Omega}}=15.5$，故 $4kTR_3/A_2^2=4kT(8.3\ \Omega)$。

该级在 $Q_1$ 基极处的总噪声为 $4kT(243\ \Omega)$。

### 第 4 步 — 低频等效输入噪声源

$Q_1$ 级噪声除以 $A_f^2=0.410$ 即折算到栅极：

| 噪声源 | $Q_1$ 基极处 | $M_1$ 栅极处 |
|---|---|---|
| $r_b$ | $4kT(100\ \Omega)$ | $4kT(244\ \Omega)$ |
| $R_2$ | $4kT(100\ \Omega)$ | $4kT(244\ \Omega)$ |
| $2qI_C$ | $4kT(16.3\ \Omega)$ | $4kT(40\ \Omega)$ |
| $2qI_B$ | $4kT(18.3\ \Omega)$ | $4kT(45\ \Omega)$ |
| $R_3$ | $4kT(8.3\ \Omega)$ | $4kT(20\ \Omega)$ |
| $M_1$ 沟道 | — | $4kT(112\ \Omega)$ |
| $R_1$ | — | $4kT(94\ \Omega)$ |

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT(799\ \Omega)=1.33\times10^{-17}\ \mathrm{V^2/Hz}\quad(3.6\ \mathrm{nV/\sqrt{Hz}}).
$$

总增益为 $v_o/v_i=A_f|A_2|=9.9$。栅极没有电流，低频下也没有电容，没有任何电流能流入栅极，故 $\overline{i_i^2}\approx0$。

### 第 5 步 — 低频 SPICE 验证

网表采用 level-1 NMOS（$K_P=60\ \mu$A/V²，$V_{TO}=0.7$ V，$\gamma=\lambda=0$；其热噪声为 $4kT\tfrac23g_m$）、按题给 IS、BF、RB 设置的 Gummel–Poon NPN，并设定温度使 $4kT=1.66\times10^{-20}$ V·C。将 $V_i$ 调到 2.5644 V 以得到 $I_{C1}=1.000$ mA（仿真器的 $kT/q$ 为 25.9 mV，所以 $V_i$ 比手算值低几 mV）。求 $\overline{v_i^2}$ 时输入为理想电压源，仿真器给出的输入参考谱密度正好就是 $\overline{v_i^2}$。求 $\overline{i_i^2}$ 时用交流电流源驱动栅极，直流偏置经 1 TΩ 电阻送入，再将输出噪声除以跨阻。

```spice
* grsim-11-09 BiCMOS Darlington noise
VDD vdd 0 5
VI in 0 dc 2.56435 ac 1
M1 vdd in s 0 nm W=100u L=1u
R1 s 0 300
Q1 c s e qn
R2 e 0 100
R3 vdd c 2k
* for part 2: CGS in s 150f and CSB s 0 50f; add cjc, tf to qn
.model nm nmos level=1 vto=0.7 kp=60u lambda=0 gamma=0
.model qn npn is=1e-16 bf=100 rb=100
.temp 27.4
.noise v(c) VI dec 10 1k 100k
.end
```

仿真得 $g_{m1}=5.92$ mS，$\overline{v_i^2}/\Delta f=1.33\times10^{-17}$ V²/Hz 且不随频率变化，与手算一致；电流驱动的仿真给出的 $\overline{i_i^2}$ 恰为 1 TΩ 偏置电阻自身的 $4kT/R$，即电路本身的输入噪声电流为零。

### 第 6 步 — 加入电容

$C_{gs}=150$ fF 和 $C_{sb}=50$ fF 作为外接电容加入。对 $Q_1$，$C_\mu=50$ fF 取为恒定的集电结电容，$C_\pi$ 由 $f_T$ 求出：

$$
C_\pi=\frac{g_m}{2\pi f_T}-C_\mu=\frac{38.6\ \mathrm{mS}}{2\pi(10\ \mathrm{GHz})}-50\ \mathrm{fF}=0.56\ \mathrm{pF},\qquad
\mathrm{TF}=\frac{C_\pi}{g_m}=14.6\ \mathrm{ps}.
$$

频率接近 $f_T$ 时，$Q_1$ 的电流增益下降，栅极到输出的增益随之下降，因此输入之后产生的噪声（主要是集电极散粒噪声和 $R_3$）以越来越大的系数折算到输入端。仿真得到的输入参考谱密度为：

| $f$ | 0.1 GHz | 1 GHz | 3.16 GHz | 6.31 GHz | 8.3 GHz | 10 GHz |
|---|---|---|---|---|---|---|
| $\overline{v_i^2}/\Delta f$（V²/Hz） | $1.33\times10^{-17}$ | $1.39\times10^{-17}$ | $1.80\times10^{-17}$ | $2.43\times10^{-17}$ | $2.66\times10^{-17}$ | $2.75\times10^{-17}$ |

$\overline{v_i^2}$ 在约 1 GHz 以下保持平坦，在约 **8.3 GHz** 处达到低频值的两倍 $2.66\times10^{-17}$ V²/Hz，接近 $f_T$。

### 第 7 步 — 该频率下的等效输入噪声电流

此时栅极不再开路：$C_{gs}$，以及经跟随器作用的 $C_{sb}$ 和 $Q_1$ 的输入电容，使输出噪声表现为流入栅极的电流。电流驱动的仿真给出

$$
\frac{\overline{i_i^2}}{\Delta f}\approx4.2\times10^{-22}\ \mathrm{A^2/Hz}\quad(\approx20\ \mathrm{pA/\sqrt{Hz}})\ \text{at}\ 8.3\ \mathrm{GHz},
$$

它从 8 GHz 处的 $3.9\times10^{-22}$ 上升到 9 GHz 处的 $4.8\times10^{-22}$ A²/Hz。这两个高频数值都取决于仿真器如何通过 TF 实现 $C_\pi$，因此只是数量级估计，而非精确值。
