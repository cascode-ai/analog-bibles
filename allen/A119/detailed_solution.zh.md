# 详细步骤 - A119

M2 的栅极接直流电压 $V_{GG2}$，因此 M2 是电流源：在小信号模型中它只提供输出电导 $g_{ds2}$，不提供 $g_{m2}$。输出节点的负载只有 $g_{ds1}+g_{ds2}$，所以增益和输出电阻都很高。输入由理想电压源驱动，输出是唯一具有时间常数的节点，带宽由单一极点决定。

### 第 1 步 — 小信号参数

两管在 $I_D=50$ µA 下都饱和。由 $g_m=\sqrt{2K'(W/L)I_D}$ 和 $g_{ds}=\lambda I_D$：

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(2)(50\ \mu\mathrm A)}=148.3\ \mu\mathrm S,
$$

$$
g_{ds1}=(0.04\ \mathrm{V^{-1}})(50\ \mu\mathrm A)=2\ \mu\mathrm S,\qquad
g_{ds2}=(0.05\ \mathrm{V^{-1}})(50\ \mu\mathrm A)=2.5\ \mu\mathrm S .
$$

### 第 2 步 — 增益与输出电阻

M2 的栅极（$V_{GG2}$）和源极（$V_{DD}$）都是交流地，故 $v_{sg2}=0$，其受控源不起作用。对输出节点列 KCL：

$$
g_{m1}v_{in}+(g_{ds1}+g_{ds2})v_{out}=0,
$$

$$
A_v=-\frac{g_{m1}}{g_{ds1}+g_{ds2}}=-\frac{148.3\ \mu\mathrm S}{4.5\ \mu\mathrm S}=-33.0\ \mathrm{V/V},\qquad
R_{out}=\frac1{g_{ds1}+g_{ds2}}=\frac1{4.5\ \mu\mathrm S}=222\ \mathrm{k\Omega}.
$$

### 第 3 步 — 各电容

$V_{DD}$、地和 M2 的栅极都是交流地；输入端由理想源固定。

- $C_{gs2}$ 接在两个交流地节点（M2 的栅极和源极）之间，不构成输出端负载。
- $C_{gd2}$：从 M2 的漏极（输出）到栅极，即输出到交流地。
- $C_{bd1}$、$C_{bd2}$、$C_L$：输出到交流地。
- $C_{gd1}$：接在输入与输出之间。

输出极点看到的电容为

$$
C_{total}=C_{gd1}+C_{gd2}+C_{bd1}+C_{bd2}+C_L=4+4+10+10+1000\ \mathrm{fF}=1028\ \mathrm{fF}.
$$

### 第 4 步 — 传递函数与 −3 dB 频率

对输出节点列 KCL，$C_{gd1}$ 中的电流从输入端流入：

$$
\frac{v_{out}}{v_{in}}=-\frac{g_{m1}-sC_{gd1}}{g_{ds1}+g_{ds2}+sC_{total}} .
$$

$$
f_{-3\,\mathrm{dB}}=\frac{g_{ds1}+g_{ds2}}{2\pi C_{total}}=\frac{4.5\ \mu\mathrm S}{2\pi(1.028\ \mathrm{pF})}=0.697\ \mathrm{MHz}
$$

（$4.38\times10^6$ rad/s）。右半平面零点 $g_{m1}/(2\pi C_{gd1})=5.9$ GHz 在这里无关紧要。与相同电流下的二极管负载反相器相比，增益约高 17 倍，带宽约低 17 倍：增益带宽积 $g_{m1}/(2\pi C_{total})\approx23$ MHz 基本不变。
