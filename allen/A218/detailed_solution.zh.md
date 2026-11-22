# 详细步骤 - A218

用小信号模型代替两只晶体管，把电容归并为输入与输出之间的一个（$C_1$）和输出对地的一个（$C_2$），然后在输出节点列一个节点方程。二极管连接负载 M2 贡献其全部 $g_{m2}$。

### 第 1 步 — 小信号参数

两管电流均为 $I_D=100\ \mu\mathrm A$，$W/L=10$，且都处于饱和区（M2 为二极管连接，M1 的漏极接 $V_{DD}$）：

$$
g_{m1}=g_{m2}=\sqrt{2K'_N\frac WL I_D}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=469.0\ \mu\mathrm S,
$$

$$
g_{mbs1}=\frac{\gamma\,g_{m1}}{2\sqrt{2|\phi_F|+V_{SB1}}}=\frac{(0.4\ \mathrm{V^{1/2}})(469.0\ \mu\mathrm S)}{2\sqrt{5.7\ \mathrm V}}=39.3\ \mu\mathrm S,
$$

$$
g_{ds1}=g_{ds2}=\lambda I_D=4\ \mu\mathrm S .
$$

M2 的源极接 $V_{SS}$，也就是其衬底，因此无体效应。二极管连接器件满足 $v_{gs2}=v_{out}$，相当于对交流地的电导 $g_{m2}+g_{ds2}$。

### 第 2 步 — 电容

$C_{gs1}$ 跨接在输入与输出之间，其余电容都接在输出与交流地之间：

$$
C_1=C_{gs1}=5\ \mathrm{fF},\qquad
C_2=C_{bs1}+C_{gs2}+C_{bd2}+C_L=30+5+30+1000\ \mathrm{fF}=1.065\ \mathrm{pF}.
$$

### 第 3 步 — 传递函数

小信号电路：$C_1$ 接在 $v_{in}$ 与 $v_{out}$ 之间；输出节点有流入的受控源 $g_{m1}(v_{in}-v_{out})$、体效应受控源 $g_{mbs1}v_{bs1}=-g_{mbs1}v_{out}$，以及对地的 $1/g_{ds1}$、$1/g_{m2}$、$1/g_{ds2}$ 和 $C_2$。

<!-- diagram: diagram-01.cir -->

输出节点 KCL：

$$
(g_{m1}+sC_1)(v_{in}-v_{out})=(g_{mbs1}+g_{ds1}+g_{m2}+g_{ds2}+sC_2)\,v_{out},
$$

$$
\frac{v_{out}}{v_{in}}=\frac{g_{m1}+sC_1}{g_{m1}+g_{mbs1}+g_{m2}+g_{ds1}+g_{ds2}+s(C_1+C_2)} .
$$

### 第 4 步 — 零点与极点

分子给出一个左半平面零点（left-half-plane zero），因为 $C_{gs1}$ 把输入以与 $g_{m1}$ 同相的方式前馈到输出：

$$
z=-\frac{g_{m1}}{C_1}=-\frac{469.0\ \mu\mathrm S}{5\ \mathrm{fF}}=-9.38\times10^{10}\ \mathrm{rad/s}\quad(-14.9\ \mathrm{GHz}).
$$

分母给出唯一的极点，总电导为 $469.0+39.3+469.0+4+4=985.4\ \mu\mathrm S$：

$$
p=-\frac{g_{m1}+g_{mbs1}+g_{m2}+g_{ds1}+g_{ds2}}{C_1+C_2}=-\frac{985.4\ \mu\mathrm S}{1.07\ \mathrm{pF}}=-9.21\times10^{8}\ \mathrm{rad/s}\quad(-146.6\ \mathrm{MHz}).
$$

与电流沉负载相比，二极管负载的 $g_{m2}$ 使输出电导、从而使极点频率大约加倍，代价是直流增益只有约 $g_{m1}/985.4\ \mu\mathrm S\approx0.48$。

这里按题给值取 $V_{SB1}=5$ V。在所画电路中，M1 的源极位于 $V_{SS}+V_{GS2}$，其中 $V_{GS2}=V_T+\sqrt{2I_D/\beta}=1.13$ V；若取 $V_{SB1}=1.13$ V，则 $g_{mbs1}=69.4\ \mu\mathrm S$，$p\approx-9.49\times10^{8}$ rad/s（$-151$ MHz）。零点不变。
