# 详细步骤 - A031

−3 dB 频率确定了乘积 $RC$。电阻越大所需电容越小，反之亦然；因此把两者的面积都用方块数 $N$ 表示，相加后求总面积的最小值。

### 第 1 步 — 电阻值与面积

方块数为 $N$、方块电阻 $R_\square=50\ \Omega/\square$、宽度 $W=5\ \mu$m 的电阻满足

$$
R=NR_\square=50N\ \Omega,\qquad
L=NW=5N\ \mu\mathrm m,\qquad
A_R=NW^2=25N\ \mu\mathrm m^2 .
$$

### 第 2 步 — 电容值与面积

一阶 RC 低通滤波器的极点位于 $f_{-3dB}=1/(2\pi RC)$。取 $f_{-3dB}=1$ MHz，

$$
C=\frac{1}{2\pi Rf_{-3dB}}=\frac{1}{2\pi(50N\ \Omega)(10^6\ \mathrm{Hz})}=\frac{3.18\times10^{-9}}{N}\ \mathrm F .
$$

单位面积电容为 $C_A=2\ \mathrm{fF/\mu m^2}$ 时，电容面积为

$$
A_C=\frac{C}{C_A}=\frac{3.18\times10^{-9}\ \mathrm F}{(2\times10^{-15}\ \mathrm{F/\mu m^2})\,N}=\frac{1.59\times10^{6}}{N}\ \mu\mathrm m^2 .
$$

### 第 3 步 — 使总面积最小

$$
A(N)=25N+\frac{1.59\times10^6}{N}\ \mu\mathrm m^2,\qquad
\frac{dA}{dN}=25-\frac{1.59\times10^6}{N^2}=0 .
$$

$$
N=\sqrt{\frac{1.59\times10^6}{25}}=252.3\ \text{squares}.
$$

二阶导数 $2(1.59\times10^6)/N^3>0$，确认是最小值。在最优点 $25N=1.59\times10^6/N$：电阻与电容面积相等，这是对一个正比于 $N$ 的项与一个正比于 $1/N$ 的项之和求最小值的通常结果。

### 第 4 步 — 元件值与面积

| | 数值 | 面积 |
|---|---|---|
| 电阻 | $R=50\times252.3=12.6$ kΩ（$L=1262\ \mu$m） | $A_R=25\times252.3=6.31\times10^3\ \mu\mathrm m^2$ |
| 电容 | $C=1/(2\pi\cdot12.6\ \mathrm{k\Omega}\cdot1\ \mathrm{MHz})=12.6$ pF | $A_C=12.6\ \mathrm{pF}/(2\ \mathrm{fF/\mu m^2})=6.31\times10^3\ \mu\mathrm m^2$ |

总面积约为 $1.26\times10^4\ \mu\mathrm m^2$。校核：$RC=(12.6\ \mathrm{k\Omega})(12.6\ \mathrm{pF})=159$ ns，$1/(2\pi\cdot159\ \mathrm{ns})=1.00$ MHz。
