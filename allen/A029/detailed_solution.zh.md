# 详细步骤 - A029

逐项计算题给的阈值表达式：由掺杂浓度求费米势和功函数差，由厚度求氧化层电容，经 $C_{ox}$ 把耗尽电荷和界面电荷换算成电压，最后由衬底掺杂和 $C_{ox}$ 求体效应系数。

### 第 1 步 — 费米势与 $\phi_{MS}$

$$
\phi_F(\text{substrate})=-(0.0259\ \mathrm V)\ln\frac{7\times10^{16}}{1.45\times10^{10}}=-0.399\ \mathrm V,
\qquad
\phi_F(\text{gate})=(0.0259\ \mathrm V)\ln\frac{10^{19}}{1.45\times10^{10}}=0.527\ \mathrm V,
$$

$$
\phi_{MS}=-0.399\ \mathrm V-0.527\ \mathrm V=-0.926\ \mathrm V,\qquad -2\phi_F=0.797\ \mathrm V .
$$

### 第 2 步 — 氧化层电容

$$
C_{ox}=\frac{3.9(8.854\times10^{-14}\ \mathrm{F/cm})}{200\times10^{-8}\ \mathrm{cm}}=1.727\times10^{-7}\ \mathrm{F/cm^2}.
$$

### 第 3 步 — 电荷项

取 $\varepsilon_{Si}=11.7\varepsilon_0=1.036\times10^{-12}$ F/cm，

$$
Q_{b0}=-\sqrt{2q\varepsilon_{Si}N_A\,2|\phi_F|}
=-\sqrt{2(1.6\times10^{-19}\ \mathrm C)(1.036\times10^{-12}\ \mathrm{F/cm})(7\times10^{16}\ \mathrm{cm^{-3}})(0.797\ \mathrm V)}
=-1.36\times10^{-7}\ \mathrm{C/cm^2},
$$

故 $-Q_{b0}/C_{ox}=0.788$ V。界面电荷 $Q_{ss}=1.6\times10^{-9}\ \mathrm{C/cm^2}$ 给出 $Q_{ss}/C_{ox}=0.0093$ V。

### 第 4 步 — 零偏阈值

$$
V_{T0}=\phi_{MS}-2\phi_F-\frac{Q_{b0}}{C_{ox}}-\frac{Q_{ss}}{C_{ox}}
=-0.926+0.797+0.788-0.009=0.650\ \mathrm V .
$$

### 第 5 步 — 体效应系数

$$
\gamma=\frac{\sqrt{2q\varepsilon_{Si}N_A}}{C_{ox}}
=\frac{\sqrt{2(1.6\times10^{-19})(1.036\times10^{-12})(7\times10^{16})}\ \mathrm{C\,cm^{-2}V^{-1/2}}}{1.727\times10^{-7}\ \mathrm{F/cm^2}}
=\frac{1.523\times10^{-7}}{1.727\times10^{-7}}\ \mathrm{V^{1/2}}=0.882\ \mathrm{V^{1/2}}.
$$

与衬底掺杂为 $3\times10^{16}\ \mathrm{cm^{-3}}$ 的情形相比（相同氧化层下 $V_{T0}\approx0.31$ V，$\gamma\approx0.58\ \mathrm{V^{1/2}}$），更重的掺杂使二者都增大：耗尽电荷大致按 $\sqrt{N_A}$ 增长，而 $\gamma$ 严格按 $\sqrt{N_A}$ 变化。
