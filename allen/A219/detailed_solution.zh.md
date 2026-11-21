# 详细步骤 - A219

用小信号模型代替两只晶体管，把电容归并为输入与输出之间的一个（$C_1$）和输出对地的一个（$C_2$），然后在输出节点列一个节点方程。由于 M2 的栅极接固定电压 $V_{GG2}$，M2 只贡献其输出电导。

### 第 1 步 — 小信号参数

两管电流均为 $I_D=100\ \mu\mathrm A$，$W/L=10$，均处于饱和区：

$$
g_{m1}=\sqrt{2K'_N\frac WL I_D}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=469.0\ \mu\mathrm S,
$$

$$
g_{mbs1}=\frac{\gamma\,g_{m1}}{2\sqrt{2|\phi_F|+V_{SB1}}}=\frac{(0.4\ \mathrm{V^{1/2}})(469.0\ \mu\mathrm S)}{2\sqrt{5.7\ \mathrm V}}=39.3\ \mu\mathrm S,
$$

$$
g_{ds1}=g_{ds2}=\lambda I_D=4\ \mu\mathrm S .
$$

M2 的 $v_{gs2}=0$（栅极接 $V_{GG2}$，源极接 $V_{SS}$，均为交流地），因此其 $g_{m2}$ 受控源不产生信号电流。

### 第 2 步 — 电容

$C_{gs1}$ 跨接在输入与输出之间；其余电容接在输出与交流地之间（$C_{gd2}$ 接到 M2 的栅极，即交流地）：

$$
C_1=C_{gs1}=5\ \mathrm{fF},\qquad
C_2=C_{bs1}+C_{gd2}+C_{bd2}+C_L=30+5+30+1000\ \mathrm{fF}=1.065\ \mathrm{pF}.
$$

### 第 3 步 — 传递函数

小信号电路：$C_1$ 接在 $v_{in}$ 与 $v_{out}$ 之间；输出节点有流入的受控源 $g_{m1}(v_{in}-v_{out})$、体效应受控源 $-g_{mbs1}v_{out}$，以及对地的 $1/g_{ds1}$、$1/g_{ds2}$ 和 $C_2$。

<!-- diagram: diagram-01.cir -->

输出节点 KCL：

$$
(g_{m1}+sC_1)(v_{in}-v_{out})=(g_{mbs1}+g_{ds1}+g_{ds2}+sC_2)\,v_{out},
$$

$$
\frac{v_{out}}{v_{in}}=\frac{g_{m1}+sC_1}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}+s(C_1+C_2)} .
$$

### 第 4 步 — 零点与极点

分子给出一个左半平面零点（left-half-plane zero）：

$$
z=-\frac{g_{m1}}{C_1}=-\frac{469.0\ \mu\mathrm S}{5\ \mathrm{fF}}=-9.38\times10^{10}\ \mathrm{rad/s}\quad(-14.9\ \mathrm{GHz}).
$$

分母给出唯一的极点，总电导为 $469.0+39.3+4+4=516.3\ \mu\mathrm S$：

$$
p=-\frac{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}}{C_1+C_2}=-\frac{516.3\ \mu\mathrm S}{1.07\ \mathrm{pF}}=-4.83\times10^{8}\ \mathrm{rad/s}\quad(-76.8\ \mathrm{MHz}).
$$

该极点位于输出节点，由大电容 $C_L$ 与低电阻 $\approx1/(g_{m1}+g_{mbs1})$ 决定。其频率约为二极管负载跟随器的一半，后者多出的 $g_{m2}$ 使输出电导接近加倍；但这里的直流增益为 $469.0/516.3=0.91$，而不是约 0.48。若不计 $g_{mbs1}$，极点为 $-71.0$ MHz。
