# 详细步骤 - A134

推挽反相器的两个栅极都由 $v_{in}$ 驱动，所以 M1 和 M2 都作为跨导器作用于输出节点，两者跨导相加，而负载只有它们的输出电导。电源 $V_{DD}$ 和 $V_{SS}$ 都是交流地，不影响小信号结果。输入由理想源驱动，输出节点决定一个极点。

### 第 1 步 — 小信号参数

两管都在饱和区流过 $I_D=200$ µA，$W/L=5$。由 $g_m=\sqrt{2K'(W/L)I_D}$ 和 $g_{ds}=\lambda I_D$：

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(5)(200\ \mu\mathrm A)}=469.0\ \mu\mathrm S,\qquad
g_{m2}=\sqrt{2(50\ \mu\mathrm{A/V^2})(5)(200\ \mu\mathrm A)}=316.2\ \mu\mathrm S,
$$

$$
g_{ds1}+g_{ds2}=(0.04+0.05\ \mathrm{V^{-1}})(200\ \mu\mathrm A)=18\ \mu\mathrm S .
$$

### 第 2 步 — 增益与输出电阻

M1（源极接 $V_{SS}$）从输出端吸取 $g_{m1}v_{in}$；M2（源极接 $V_{DD}$）有 $v_{sg2}=-v_{in}$，因此同样吸取 $g_{m2}v_{in}$。对输出节点列 KCL：

$$
(g_{m1}+g_{m2})v_{in}+(g_{ds1}+g_{ds2})v_{out}=0,
$$

$$
A_v=-\frac{g_{m1}+g_{m2}}{g_{ds1}+g_{ds2}}=-\frac{785.2\ \mu\mathrm S}{18\ \mu\mathrm S}=-43.6\ \mathrm{V/V},
\qquad
R_{out}=\frac1{g_{ds1}+g_{ds2}}=55.6\ \mathrm{k\Omega}.
$$

求 $R_{out}$ 时令输入为零，两个受控源都不起作用，只剩下 $r_{ds1}\|r_{ds2}$。

### 第 3 步 — −3 dB 频率

输入由理想源驱动，所以 $C_{gd1}$ 和 $C_{gd2}$ 与 $C_{bd1}$、$C_{bd2}$、$C_L$ 一样，都接在输出与交流固定节点之间：

$$
C_{out}=C_{gd1}+C_{gd2}+C_{bd1}+C_{bd2}+C_L=5+5+30+30\ \mathrm{fF}+10\ \mathrm{pF}=10.07\ \mathrm{pF}.
$$

对输出节点列 KCL，得

$$
\frac{v_{out}}{v_{in}}=-\frac{(g_{m1}+g_{m2})-s(C_{gd1}+C_{gd2})}{g_{ds1}+g_{ds2}+sC_{out}},
\qquad
f_{-3\,\mathrm{dB}}=\frac{g_{ds1}+g_{ds2}}{2\pi C_{out}}=\frac{18\ \mu\mathrm S}{2\pi(10.07\ \mathrm{pF})}=284\ \mathrm{kHz}.
$$

10 pF 负载占主导；只计 $C_L$ 时结果为 286.5 kHz。位于 $(g_{m1}+g_{m2})/[2\pi(C_{gd1}+C_{gd2})]\approx12.5$ GHz 的右半平面零点可以忽略。
