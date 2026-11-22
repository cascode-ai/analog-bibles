# 详细步骤 - A025

逐项计算阈值表达式：由衬底和栅的费米势得到功函数差 $\phi_{MS}$；用氧化层电容把耗尽电荷和界面电荷换算成电压；这些合起来给出零偏阈值 $V_{T0}$，再由体效应项计入 $V_{SB}=2$ V 的影响。

### 第 1 步 — 费米势与 $\phi_{MS}$

$$
\phi_F(\text{substrate})=-(0.0259\ \mathrm V)\ln\frac{3\times10^{16}}{1.45\times10^{10}}=-0.377\ \mathrm V,
\qquad
\phi_F(\text{gate})=(0.0259\ \mathrm V)\ln\frac{4\times10^{19}}{1.45\times10^{10}}=0.563\ \mathrm V,
$$

$$
\phi_{MS}=\phi_F(\text{substrate})-\phi_F(\text{gate})=-0.377\ \mathrm V-0.563\ \mathrm V=-0.940\ \mathrm V .
$$

强反型要求表面能带弯曲 $2|\phi_F|=0.753$ V，故 $-2\phi_F=+0.753$ V。

### 第 2 步 — 氧化层电容

$$
C_{ox}=\frac{\varepsilon_{ox}}{t_{ox}}=\frac{3.9(8.854\times10^{-14}\ \mathrm{F/cm})}{200\times10^{-8}\ \mathrm{cm}}=1.727\times10^{-7}\ \mathrm{F/cm^2}.
$$

### 第 3 步 — 电荷项

取 $\varepsilon_{Si}=11.7\varepsilon_0=1.036\times10^{-12}$ F/cm，零偏阈值处的耗尽电荷为

$$
Q_{b0}=-\sqrt{2q\varepsilon_{Si}N_A\,2|\phi_F|}
=-\sqrt{2(1.6\times10^{-19}\ \mathrm C)(1.036\times10^{-12}\ \mathrm{F/cm})(3\times10^{16}\ \mathrm{cm^{-3}})(0.753\ \mathrm V)}
=-8.66\times10^{-8}\ \mathrm{C/cm^2},
$$

故 $-Q_{b0}/C_{ox}=0.501$ V。界面电荷给出

$$
\frac{Q_{ss}}{C_{ox}}=\frac{(1.6\times10^{-19}\ \mathrm C)(10^{10}\ \mathrm{cm^{-2}})}{1.727\times10^{-7}\ \mathrm{F/cm^2}}=0.0093\ \mathrm V .
$$

### 第 4 步 — 零偏阈值与体效应系数

$$
V_{T0}=\phi_{MS}-2\phi_F-\frac{Q_{b0}}{C_{ox}}-\frac{Q_{ss}}{C_{ox}}
=-0.940+0.753+0.501-0.009=0.306\ \mathrm V,
$$

$$
\gamma=\frac{\sqrt{2q\varepsilon_{Si}N_A}}{C_{ox}}
=\frac{\sqrt{2(1.6\times10^{-19})(1.036\times10^{-12})(3\times10^{16})}\ \mathrm{C\,cm^{-2}V^{-1/2}}}{1.727\times10^{-7}\ \mathrm{F/cm^2}}=0.578\ \mathrm{V^{1/2}}.
$$

### 第 5 步 — $V_{SB}=2$ V 时的阈值

$$
\begin{aligned}
V_T&=V_{T0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right)\\
&=0.306\ \mathrm V+(0.578\ \mathrm{V^{1/2}})\left(\sqrt{2.753\ \mathrm V}-\sqrt{0.753\ \mathrm V}\right)\\
&=0.306+0.578(1.659-0.868)=0.306+0.457=0.763\ \mathrm V .
\end{aligned}
$$

2 V 的源-衬底反向偏压使阈值升高 0.457 V，从 0.306 V 变为 0.763 V。这里界面电荷只是次要项（9 mV），功函数差和耗尽电荷起主导作用。
