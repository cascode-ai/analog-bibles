# 详细步骤 - A120

推挽反相器的两个栅极都由 $v_{in}$ 驱动，因此两管都起跨导作用：M1 把输出拉低，M2 把输出推高，两者的跨导相加。输出端的负载只有两管的输出电导。输入由理想源驱动，输出是唯一具有时间常数的节点，带宽由单一极点决定。

### 第 1 步 — 小信号参数

两管在 $I_D=50$ µA 下都饱和。由 $g_m=\sqrt{2K'(W/L)I_D}$ 和 $g_{ds}=\lambda I_D$：

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(2)(50\ \mu\mathrm A)}=148.3\ \mu\mathrm S,\qquad
g_{m2}=\sqrt{2(50\ \mu\mathrm{A/V^2})(1)(50\ \mu\mathrm A)}=70.7\ \mu\mathrm S,
$$

$$
g_{ds1}=2\ \mu\mathrm S,\qquad g_{ds2}=2.5\ \mu\mathrm S .
$$

### 第 2 步 — 增益与输出电阻

M1 从输出端吸取 $g_{m1}v_{in}$。对 M2，$v_{sg2}=0-v_{in}=-v_{in}$（其源极为交流地），它向输出端提供 $g_{m2}v_{sg2}=-g_{m2}v_{in}$，即同样吸取 $g_{m2}v_{in}$。对输出节点列 KCL：

$$
(g_{m1}+g_{m2})v_{in}+(g_{ds1}+g_{ds2})v_{out}=0,
$$

$$
A_v=-\frac{g_{m1}+g_{m2}}{g_{ds1}+g_{ds2}}=-\frac{219.0\ \mu\mathrm S}{4.5\ \mu\mathrm S}=-48.7\ \mathrm{V/V},\qquad
R_{out}=\frac1{g_{ds1}+g_{ds2}}=222\ \mathrm{k\Omega}.
$$

求 $R_{out}$ 时令 $v_{in}=0$，两个受控源都不起作用，所以输出电阻与电流源负载时相同。

### 第 3 步 — 各电容

$V_{DD}$ 和地都是交流地；输入端由理想源固定。

- $C_{gd1}$ 和 $C_{gd2}$：两个栅极都接输入，两个漏极都接输出，所以两者都接在输入与输出之间，$C_M=C_{gd1}+C_{gd2}=8$ fF。
- $C_{gs2}$：从输入到 $V_{DD}$；它由信号源驱动，不构成输出端负载。
- $C_{bd1}$、$C_{bd2}$、$C_L$：输出到交流地。

$$
C_{total}=C_{gd1}+C_{gd2}+C_{bd1}+C_{bd2}+C_L=4+4+10+10+1000\ \mathrm{fF}=1028\ \mathrm{fF}.
$$

### 第 4 步 — 传递函数与 −3 dB 频率

对输出节点列 KCL，$C_M$ 中的电流从输入端流入：

$$
\frac{v_{out}}{v_{in}}=-\frac{(g_{m1}+g_{m2})-sC_M}{g_{ds1}+g_{ds2}+sC_{total}} .
$$

$$
f_{-3\,\mathrm{dB}}=\frac{g_{ds1}+g_{ds2}}{2\pi C_{total}}=\frac{4.5\ \mu\mathrm S}{2\pi(1.028\ \mathrm{pF})}=0.697\ \mathrm{MHz}
$$

（$4.38\times10^6$ rad/s）。右半平面零点位于 $(g_{m1}+g_{m2})/(2\pi C_M)=4.4$ GHz，远高于极点。由于输出电导和电容相同，带宽与电流源负载反相器相同，而增益高出 $(g_{m1}+g_{m2})/g_{m1}=1.48$ 倍。
