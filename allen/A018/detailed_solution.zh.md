# 详细步骤 - A018

对突变结采用耗尽近似（depletion approximation）：耗尽区完全电离，p 侧电荷密度为 $-qN_A$，n 侧为 $+qN_D$，耗尽区以外呈电中性。势垒电势由掺杂浓度求得；再由泊松方程和电荷中性得到耗尽区边界，电容则相当于极板间距为耗尽宽度的平行板电容。

### 第 1 步 — 势垒电势

$$
\phi_0=\frac{kT}{q}\ln\frac{N_AN_D}{n_i^2}
=(0.0259\ \mathrm V)\ln\frac{(5\times10^{15})(10^{20})\ \mathrm{cm^{-6}}}{(1.45\times10^{10}\ \mathrm{cm^{-3}})^2}
=(0.0259\ \mathrm V)\ln(2.378\times10^{15})=0.917\ \mathrm V .
$$

$v_D=-2$ V 时，耗尽区两端的总电势差为 $\phi_0-v_D=2.917$ V。

### 第 2 步 — 耗尽区边界

对两层电荷积分泊松方程，并令电势降等于 $\phi_0-v_D$，得 p 侧边界

$$
x_p=-\left[\frac{2\varepsilon_{Si}(\phi_0-v_D)N_D}{qN_A(N_A+N_D)}\right]^{1/2}.
$$

取 $\varepsilon_{Si}=11.7(8.85\times10^{-14}\ \mathrm{F/cm})=1.035\times10^{-12}$ F/cm，且 $N_D/(N_A+N_D)=0.99995\approx1$：

$$
x_p\approx-\left[\frac{2(1.035\times10^{-12}\ \mathrm{F/cm})(2.917\ \mathrm V)}{(1.6\times10^{-19}\ \mathrm C)(5\times10^{15}\ \mathrm{cm^{-3}})}\right]^{1/2}
=-8.69\times10^{-5}\ \mathrm{cm}=-0.869\ \mu\mathrm m .
$$

由电荷中性 $N_Dx_n=-N_Ax_p$ 得 n 侧边界：

$$
x_n=|x_p|\frac{N_A}{N_D}=(0.869\ \mu\mathrm m)(5\times10^{-5})=4.3\times10^{-5}\ \mu\mathrm m\approx0.04\ \mathrm{nm}.
$$

由于 n 侧掺杂浓度高出 $2\times10^4$ 倍，耗尽区几乎全部位于 p 侧：

$$
x_d=x_n-x_p=0.869\ \mu\mathrm m .
$$

### 第 3 步 — 零偏耗尽电容

对面积为 $A$ 的突变结，

$$
C_{j0}=A\left[\frac{\varepsilon_{Si}qN_AN_D}{2(N_A+N_D)}\right]^{1/2}\frac{1}{\sqrt{\phi_0}} .
$$

取 $A=(10\ \mu\mathrm m)^2=10^{-6}\ \mathrm{cm^2}$，且 $N_AN_D/(N_A+N_D)\approx N_A$：

$$
C_{j0}=(10^{-6}\ \mathrm{cm^2})\sqrt{\frac{(1.035\times10^{-12}\ \mathrm{F/cm})(1.6\times10^{-19}\ \mathrm C)(5\times10^{15}\ \mathrm{cm^{-3}})}{2(0.917\ \mathrm V)}}=21.3\ \mathrm{fF}.
$$

### 第 4 步 — $v_D=-2$ V 时的耗尽电容

耗尽电荷随 $\sqrt{\phi_0-v_D}$ 增长，因此增量电容按其倒数减小：

$$
C_j=\frac{C_{j0}}{\sqrt{1-v_D/\phi_0}}=\frac{21.3\ \mathrm{fF}}{\sqrt{1+2/0.917}}=\frac{21.3\ \mathrm{fF}}{1.784}=11.9\ \mathrm{fF}.
$$

校核：平行板公式给出同样的值，$\varepsilon_{Si}A/x_d=(1.035\times10^{-12}\ \mathrm{F/cm})(10^{-6}\ \mathrm{cm^2})/(8.69\times10^{-5}\ \mathrm{cm})=11.9$ fF。

| 物理量 | 数值 |
|---|---|
| $\phi_0$ | 0.917 V |
| $x_p$ | −0.869 µm |
| $x_n$ | $4.3\times10^{-5}$ µm |
| $x_d$ | 0.869 µm |
| $C_{j0}$ | 21.3 fF |
| $C_j(-2\ \mathrm V)$ | 11.9 fF |
