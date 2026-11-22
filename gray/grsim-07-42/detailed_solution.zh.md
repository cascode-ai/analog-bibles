# 详细步骤 - grsim-07-42

折叠节点（folding node，即 $M_1$ 的漏极、$M_{1A}$ 的源极）是一个由多个器件电容负载的低阻节点，因此其极点远高于由 $g_{m1}$ 和 $C_L$ 决定的单位增益频率。用短路时间常数求这个极点：其余电容全部短路，把该节点剩下的电容乘以从该节点看进去的电阻。单位增益频率处的相位贡献由 $\arctan(\omega_u/|p|)$ 得出，再用 ngspice 核对极点和相位。

### 第 1 步 — 小信号参数

所有晶体管都工作在饱和区，且 $\lambda=0$、$\gamma=0$，因此每个器件都是纯跨导 $g_m=\sqrt{2\mu C_{ox}(W/L)|I_D|}$。需要的是输入对管（p 沟道，100 µA）和共栅管 $M_{1A}$（n 沟道，100 µA）的跨导：

$$
\begin{aligned}
g_{m1}&=\sqrt{2(30\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm{A})}=0.2449\ \mathrm{mA/V},\\
g_{m1A}&=\sqrt{2(60\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm{A})}=0.3464\ \mathrm{mA/V},\qquad \frac{1}{g_{m1A}}=2.887\ \mathrm{k\Omega}.
\end{aligned}
$$

$M_{11}$ 流过 200 µA：其中 100 µA 来自 $M_1$ 的漏极，另外 100 µA 经 $M_{1A}$ 向上流入电流镜。

### 第 2 步 — 折叠节点的电容

其余电容全部短路时，$M_1$ 的栅极（电压驱动）、$M_{11}$ 和 $M_{1A}$ 的栅极（低阻抗偏置）以及所有衬底都是交流地。因此接在 $M_1$ 漏极上的每个电容都接到地：

| 电容 | 数值 |
|---|---|
| $C_{gd1}$ | 3 fF |
| $C_{db1}$ | 10 fF |
| $C_{gd11}$（宽度加倍） | 6 fF |
| $C_{db11}$（宽度加倍） | 20 fF |
| $C_{gs1A}$ | 20 fF |
| $C_{sb1A}$ | 10 fF |
| 合计 $C_{X}$ | 69 fF |

### 第 3 步 — 电阻与极点

该节点连接三个器件。由于 $\lambda=0$，$M_1$ 和 $M_{11}$ 的漏极电阻为无穷大。从 $M_{1A}$ 的源极看进去，其栅极为交流地，漏极节点被短路的电容接地，测试电压 $v_x$ 吸取电流 $g_{m1A}v_x$（$\gamma=0$，无体效应）。所以

$$
R_X=\infty\parallel\infty\parallel\frac{1}{g_{m1A}}=2.887\ \mathrm{k\Omega}.
$$

短路时间常数及其对应的极点为

$$
\tau_X=R_XC_X=(2.887\ \mathrm{k\Omega})(69\ \mathrm{fF})=0.1992\ \mathrm{ns},\qquad |p_{nd}|=\frac{1}{\tau_X}=5.02\times10^{9}\ \mathrm{rad/s}\ (799\ \mathrm{MHz}).
$$

$M_2$ 的漏极节点完全相同（器件相同、电流相同），给出同样的极点。

### 第 4 步 — 单位增益频率与相移

输出节点为高阻节点（$\lambda=0$ 时为无穷大），主极点位于此处，增益按 $G_m/(sC_{\text{out}})$ 下降。差分信号电流全部到达输出：$M_2$ 的电流直接进入 $M_{2A}$，$M_1$ 的电流经 $M_3$–$M_4$ 镜像。因此 $G_m=g_{m1}$，

$$
\omega_u=\frac{g_{m1}}{C_L}=\frac{0.2449\ \mathrm{mA/V}}{1\ \mathrm{pF}}=2.45\times10^{8}\ \mathrm{rad/s}\ (39\ \mathrm{MHz}).
$$

输出端的漏极电容（$C_{db4A}+C_{gd4A}+C_{db2A}+C_{gd2A}=26$ fF）使其略降为 $2.39\times10^{8}$ rad/s。次极点在 $\omega_u$ 处附加的相移为

$$
\Delta\phi=\arctan\frac{\omega_u}{|p_{nd}|}=\arctan\frac{2.45\times10^{8}}{5.02\times10^{9}}=\arctan(0.049)\approx2.8^\circ
$$

（计入 26 fF 时为 2.7°）。由于 $\omega_u\ll|p_{nd}|$，折叠节点只消耗几度相位裕度。

### 第 5 步 — SPICE 检验

网表使用 level-1 模型（$\lambda=0$，$\gamma=0$），每个器件的所有偏置点电容都以固定电容加入（$M_{11}$、$M_{12}$ 取 $W=20\ \mu$m，电容加倍）。偏置电压的选取使每个器件流过题给电流，且 $V_{GD11}=V_{GD12}=0$。输出端到地的 1 GΩ 电阻只用于确定直流输出电平，其极点约在 1 krad/s。输入为 ±0.5 V 的平衡交流驱动。

```spice
* grsim-07-42 folded cascode (capacitor list abbreviated)
.model nm nmos level=1 kp=60u vto=0.7 lambda=0 gamma=0
.model pm pmos level=1 kp=30u vto=-0.7 lambda=0 gamma=0
VDD vdd 0 3
VSS vss 0 -3
VB1 b1 0 1.1453
VB2 b2 0 -0.4453
VB3 b3 0 -1.7226
Vp inp 0 dc 0 ac 0.5
Vn inn 0 dc 0 ac -0.5
M5 t b1 vdd vdd pm w=10u l=1u
M1 d1 inp t vdd pm w=10u l=1u
M2 d2 inn t vdd pm w=10u l=1u
M11 d1 b3 vss vss nm w=20u l=1u
M12 d2 b3 vss vss nm w=20u l=1u
M1A x b2 d1 vss nm w=10u l=1u
M2A o b2 d2 vss nm w=10u l=1u
M3 y y vdd vdd pm w=10u l=1u
M3A x x y vdd pm w=10u l=1u
M4 z y vdd vdd pm w=10u l=1u
M4A o x z vdd pm w=10u l=1u
CL o 0 1p
Rdc o 0 1G
* folding node d1 (d2 alike)
Cgd1 inp d1 3f
Cdb1 d1 0 10f
Cgd11 b3 d1 6f
Cdb11 d1 0 20f
Cgs1A b2 d1 20f
Csb1A d1 0 10f
* ... Cgs, Cgd, Csb, Cdb of all other devices
.ac dec 200 1k 10G
.pz inp inn o 0 vol pz
.end
```

工作点显示 $M_1$、$M_{1A}$、$M_{2A}$ 和 $M_{4A}$ 均流过 100 µA，$V_{D1}=V_{D2}=-1.723$ V，$V_O\approx0$，所有器件都处于饱和区。

| 量 | 手算 | ngspice |
|---|---|---|
| 折叠节点极点 | $5.02\times10^{9}$ rad/s（799 MHz） | $5.02\times10^{9}$ rad/s |
| 单位增益频率 | 39 MHz（计入输出寄生电容为 38 MHz） | 37.6 MHz |
| $\omega_u$ 处相位 | −90° − 折叠节点贡献的 2.7° | −96.6° |
| 去掉折叠节点电容后的相位 | −90° | −93.8° |

去掉 $d_1$ 和 $d_2$ 处的电容后，单位增益频率处的相位从 −96.6° 变为 −93.8°，因此折叠节点贡献 2.9°，与 2.7°–2.8° 的估计一致。其余约 3.8° 主要来自 $M_3$–$M_{3A}$ 的电流镜节点，它们承载一半信号，极点在几百兆赫兹。总的剩余相位（excess phase）只有几度，证实折叠节点极点远高于单位增益频率。
