# 详细步骤 - A355

该放大器是带漏极电阻 $R_D$ 的共源级。输出端有两个热噪声源：MOSFET 的沟道噪声和 $R_D$ 的噪声。把两者都表示为漏极节点上的噪声电流，相加（二者不相关），再除以 $g_m^2$，即得等效输入噪声电压，也就是在栅极上产生相同输出噪声所需的电压。

### 第 1 步 — 跨导

饱和区中 $g_m=\sqrt{2K'(W/L)I_D}$，其中 $W/L=150/10=15$：

$$
g_m=\sqrt{2(25\ \mu\mathrm{A/V^2})(15)(20\ \mu\mathrm A)}=122.5\ \mu\mathrm S .
$$

### 第 2 步 — 漏极处的噪声电流

单位带宽内，MOSFET 的沟道热噪声和 $R_D$ 的热噪声都是从漏极到地的电流源：

$$
\overline{i_{n,M}^2}=\frac{8kT}3g_m,\qquad \overline{i_{n,R}^2}=\frac{4kT}{R_D}.
$$

两者与信号电流 $g_mv_{in}$ 一样流入同一输出阻抗（$R_D\parallel r_{ds}$），所以把噪声折算到输入端时该阻抗相互抵消。

### 第 3 步 — 折算到输入端

把漏极总噪声电流除以 $g_m^2$：

$$
\overline{e_{eq}^2}=\frac{8kT}{3g_m}+\frac{4kT}{g_m^2R_D}.
$$

300 K 时 $kT=4.14\times10^{-21}$ J：

$$
\frac{8kT}{3g_m}=\frac{1.104\times10^{-20}\ \mathrm J}{122.5\ \mu\mathrm S}=9.02\times10^{-17}\ \mathrm{V^2/Hz},
$$
$$
\frac{4kT}{g_m^2R_D}=\frac{1.656\times10^{-20}\ \mathrm J}{(1.50\times10^{-8}\ \mathrm{S^2})(100\ \mathrm{k\Omega})}=1.10\times10^{-17}\ \mathrm{V^2/Hz}.
$$

### 第 4 步 — 总噪声

$$
\overline{e_{eq}^2}=9.02\times10^{-17}+1.10\times10^{-17}=1.01\times10^{-16}\ \mathrm{V^2/Hz},\qquad
e_{eq}=10.1\ \mathrm{nV/\sqrt{Hz}}.
$$

MOSFET 单独贡献 9.5 nV/√Hz；$R_D$ 使噪声功率增加约 11 %，因为其噪声被增益 $g_mR_D=12.2$ 所除。
