# 详细步骤 - A118

先求 50 µA 下的跨导和输出电导，再对输出节点列 KCL 并计入各电容。输入由理想电压源驱动，所以输出是唯一具有时间常数的节点：电路只有一个由总输出电导与总输出电容决定的极点，以及经 $C_{gd1}$ 产生的一个右半平面零点。

### 第 1 步 — 小信号参数

两管都处于饱和区（M2 为二极管连接）。在 $I_D=50$ µA 时，由 $g_m=\sqrt{2K'(W/L)I_D}$ 和 $g_{ds}=\lambda I_D$：

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(2)(50\ \mu\mathrm A)}=148.3\ \mu\mathrm S,\qquad
g_{m2}=\sqrt{2(50\ \mu\mathrm{A/V^2})(1)(50\ \mu\mathrm A)}=70.7\ \mu\mathrm S,
$$

$$
g_{ds1}=(0.04\ \mathrm{V^{-1}})(50\ \mu\mathrm A)=2\ \mu\mathrm S,\qquad
g_{ds2}=(0.05\ \mathrm{V^{-1}})(50\ \mu\mathrm A)=2.5\ \mu\mathrm S .
$$

### 第 2 步 — 增益与输出电阻

M2 的栅极接输出，其受控电流 $g_{m2}v_{sg2}$ 中 $v_{sg2}=-v_{out}$，相当于从输出到交流地的电导 $g_{m2}$。总输出电导为

$$
G_{out}=g_{m2}+g_{ds1}+g_{ds2}=75.2\ \mu\mathrm S,
$$

$$
A_v=-\frac{g_{m1}}{G_{out}}=-\frac{148.3}{75.2}=-1.97\ \mathrm{V/V},\qquad
R_{out}=\frac1{G_{out}}=13.3\ \mathrm{k\Omega}.
$$

忽略输出电导时得 $-g_{m1}/g_{m2}=-2.10$ V/V 和 $1/g_{m2}=14.1$ kΩ。

### 第 3 步 — 各电容

$V_{DD}$ 和地都是交流地，输入端由理想源固定。

- $C_{gd2}$：M2 的栅极与漏极都是输出节点，因此被短路。
- $C_{gs2}$：从 M2 的栅极（输出）到源极（$V_{DD}$），即输出到交流地。
- $C_{bd1}$、$C_{bd2}$、$C_L$：输出到交流地。
- $C_{gd1}$：接在输入与输出之间。

$$
C_{out}=C_{bd1}+C_{bd2}+C_{gs2}+C_L=10+10+5+1000\ \mathrm{fF}=1025\ \mathrm{fF}.
$$

### 第 4 步 — 传递函数与 −3 dB 频率

对输出节点列 KCL，$C_{gd1}$ 中的电流从输入端流入：

$$
(v_{in}-v_{out})sC_{gd1}=g_{m1}v_{in}+(G_{out}+sC_{out})v_{out}
\quad\Rightarrow\quad
\frac{v_{out}}{v_{in}}=-\frac{g_{m1}-sC_{gd1}}{G_{out}+s(C_{out}+C_{gd1})}.
$$

由单一极点得 −3 dB 频率：

$$
f_{-3\,\mathrm{dB}}=\frac{G_{out}}{2\pi(C_{out}+C_{gd1})}=\frac{75.2\ \mu\mathrm S}{2\pi(1.029\ \mathrm{pF})}=11.6\ \mathrm{MHz}
$$

（$7.31\times10^7$ rad/s；只计 $g_{m2}$ 时为 10.9 MHz）。由于输入由理想源驱动，$C_{gd1}$ 在分母中只出现一次，不被密勒倍增。右半平面零点 $g_{m1}/(2\pi C_{gd1})=5.9$ GHz 远高于极点。
