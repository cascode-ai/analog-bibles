# 详细步骤 - A022

突变结的电场在冶金结处达到峰值，并随结总电势的平方根增大。把峰值电场用反向电压表示，令其等于临界电场，再解出电压。

### 第 1 步 — 突变结的峰值电场

在耗尽近似下，由高斯定律，电场从两侧耗尽区边界线性上升到结处，在结处达到峰值 $|E_0|=qN_Ax_p'/\varepsilon_{Si}=qN_Dx_n/\varepsilon_{Si}$（其中 $x_p'=|x_p|$）。代入突变结的耗尽区边界，得

$$
|E_0|=\left[\frac{2qN_AN_D}{\varepsilon_{Si}(N_A+N_D)}\right]^{1/2}(\phi_0+v_R)^{1/2},
$$

其中 $v_R=-v_D>0$ 为反向偏压。

### 第 2 步 — 击穿条件

当 $|E_0|=E_{max}$ 时发生击穿。两边平方，并按题意忽略 $\phi_0$ 相对于 $v_R$ 的贡献：

$$
BV\approx\frac{\varepsilon_{Si}(N_A+N_D)}{2qN_AN_D}\,E_{max}^2 .
$$

### 第 3 步 — 数值计算

取 $\varepsilon_{Si}=11.7(8.85\times10^{-14}\ \mathrm{F/cm})=1.035\times10^{-12}$ F/cm，$N_A=N_D=10^{16}\ \mathrm{cm^{-3}}$：

$$
BV\approx\frac{(1.035\times10^{-12}\ \mathrm{F/cm})(2\times10^{16}\ \mathrm{cm^{-3}})(3\times10^{5}\ \mathrm{V/cm})^2}{2(1.6\times10^{-19}\ \mathrm C)(10^{16}\ \mathrm{cm^{-3}})^2}
=58.2\ \mathrm V .
$$

因此 $BV\approx58$ V。对此掺杂浓度，被忽略的势垒电势约为 0.70 V；若保留它，结果降为 $58.2-0.7\approx57.5$ V，仅 1 % 的修正，说明该近似是合理的。
