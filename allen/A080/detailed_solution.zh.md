# 详细步骤 - A080

把 CMOS 开关的两个晶体管分开处理。对每个器件，计算公共的几何因子，用判据 $\beta V_{HT}^2/(2C_L)$ 与 $U$ 的比较确定其所处区域，计算其注入误差，并给出正确的符号：n 沟道器件使 $v_{CL}$ 降低（电子），p 沟道器件使之升高（空穴）。净变化量为二者之差。

### 第 1 步 — 两个器件共同的量

两个器件都是 $0.8\ \mu\mathrm m/0.8\ \mu\mathrm m$，$C_{ox}$ 和 CGDO 相同：

$$
W\cdot\mathrm{CGDO}=(0.8\ \mu\mathrm m)(220\ \mathrm{pF/m})=0.176\ \mathrm{fF},\qquad
C_{channel}=(0.8\ \mu\mathrm m)^2(24.7\times10^{-4}\ \mathrm{F/m^2})=1.58\ \mathrm{fF},
$$

$$
\frac{W\cdot\mathrm{CGDO}+C_{channel}/2}{C_L}=\frac{0.176\ \mathrm{fF}+0.790\ \mathrm{fF}}{1\ \mathrm{pF}}=9.66\times10^{-4}.
$$

忽略体效应，两者的 $|V_T|=0.7$ V。两个交叠项相等：

$$
\text{n: }\frac{W\cdot\mathrm{CGDO}}{C_L}(v_{in}+V_T-V_L)=\frac{0.176\ \mathrm{fF}}{1\ \mathrm{pF}}(3.2\ \mathrm V)=0.563\ \mathrm{mV},\qquad
\text{p: }\frac{W\cdot\mathrm{CGDO}}{C_L}(V_H-v_{in}+|V_T|)=0.563\ \mathrm{mV},
$$

由于符号相反，二者相互抵消。两个器件的 $V_{HT}$ 也相同：n 沟道为 $5-2.5-0.7=1.8$ V，p 沟道为 $2.5-0.7-0=1.8$ V。

### 第 2 步 — n 沟道 M1：慢速区

$\beta_n=110\ \mu\mathrm{A/V^2}$：

$$
\frac{\beta_nV_{HT}^2}{2C_L}=\frac{(110\ \mu\mathrm{A/V^2})(1.8\ \mathrm V)^2}{2(1\ \mathrm{pF})}=1.78\times10^{8}\ \mathrm{V/s}>U=10^{8}\ \mathrm{V/s},
$$

因此采用慢速区表达式：

$$
V_{error,n}=9.66\times10^{-4}\sqrt{\frac{\pi(10^{8}\ \mathrm{V/s})(1\ \mathrm{pF})}{2(110\ \mu\mathrm{A/V^2})}}+0.563\ \mathrm{mV}
=9.66\times10^{-4}(1.195\ \mathrm V)+0.563\ \mathrm{mV}=1.155+0.563=1.718\ \mathrm{mV}.
$$

### 第 3 步 — p 沟道 M2：快速区

$\beta_p=50\ \mu\mathrm{A/V^2}$：

$$
\frac{\beta_pV_{HT}^2}{2C_L}=8.1\times10^{7}\ \mathrm{V/s}<U ,
$$

因此采用快速区表达式：

$$
\frac{\beta_pV_{HT}^3}{6UC_L}=\frac{(50\ \mu\mathrm{A/V^2})(1.8\ \mathrm V)^3}{6(10^{8}\ \mathrm{V/s})(1\ \mathrm{pF})}=0.486\ \mathrm V,
\qquad
V_{error,p}=9.66\times10^{-4}(1.8-0.486)\ \mathrm V+0.563\ \mathrm{mV}=1.270+0.563=1.833\ \mathrm{mV}.
$$

较弱的 p 沟道器件把沟道电荷导回源端的能力较差，因此有更多电荷到达 $C_L$。

### 第 4 步 — $v_{CL}$ 的净变化

n 沟道开关的栅压下降时注入电子，使 $v_{CL}$ 降低；p 沟道开关的栅压上升时注入空穴，使之升高：

$$
\Delta v_{CL}=+V_{error,p}-V_{error,n}=1.833\ \mathrm{mV}-1.718\ \mathrm{mV}=+0.115\ \mathrm{mV},
$$

因此 $v_{CL}$ 升高到约 2.50012 V。交叠项完全抵消，沟道项也几乎抵消，净误差约为任一单管误差的十五分之一。
