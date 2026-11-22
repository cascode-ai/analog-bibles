# 详细步骤 - A028

只有 $C_{ox}=\varepsilon_{ox}/t_{ox}$ 与氧化层厚度有关；$\phi_{MS}$、$\phi_F$、$Q_{b0}$ 和 $Q_{ss}$ 取决于掺杂和界面。因此先一次算出与厚度无关的各项，再对每种氧化层计算两个电荷项，最后用直接表达式验证差值。

### 第 1 步 — 与 $t_{ox}$ 无关的各项

$$
\phi_F(\text{substrate})=-(0.0259\ \mathrm V)\ln\frac{3\times10^{16}}{1.45\times10^{10}}=-0.377\ \mathrm V,\qquad
\phi_F(\text{gate})=(0.0259\ \mathrm V)\ln\frac{4\times10^{19}}{1.45\times10^{10}}=0.563\ \mathrm V,
$$

故 $\phi_{MS}=-0.940$ V，$-2\phi_F=0.753$ V。取 $\varepsilon_{Si}=1.036\times10^{-12}$ F/cm，

$$
Q_{b0}=-\sqrt{2(1.6\times10^{-19}\ \mathrm C)(1.036\times10^{-12}\ \mathrm{F/cm})(3\times10^{16}\ \mathrm{cm^{-3}})(0.753\ \mathrm V)}=-8.66\times10^{-8}\ \mathrm{C/cm^2},
$$

且 $Q_{ss}=(1.6\times10^{-19}\ \mathrm C)(10^{10}\ \mathrm{cm^{-2}})=1.6\times10^{-9}\ \mathrm{C/cm^2}$。

### 第 2 步 — 两种氧化层的阈值

$t_{ox}=200$ Å 时，$C_{ox}=3.9(8.854\times10^{-14}\ \mathrm{F/cm})/(200\times10^{-8}\ \mathrm{cm})=1.727\times10^{-7}\ \mathrm{F/cm^2}$，且

$$
V_{T0}=\phi_{MS}-2\phi_F-\frac{Q_{b0}}{C_{ox}}-\frac{Q_{ss}}{C_{ox}}=-0.940+0.753+0.501-0.0093=0.306\ \mathrm V .
$$

对较厚的氧化层重复同样步骤：

| $t_{ox}$ | $C_{ox}$ (F/cm²) | $-Q_{b0}/C_{ox}$ | $Q_{ss}/C_{ox}$ | $V_{T0}$ |
|---|---|---|---|---|
| 200 Å | $1.727\times10^{-7}$ | 0.501 V | 0.0093 V | 0.306 V |
| 210 Å | $1.644\times10^{-7}$ | 0.526 V | 0.0097 V | 0.330 V |

### 第 3 步 — 差值

由于 $1/C_{ox}=t_{ox}/\varepsilon_{ox}$，只有电荷项发生变化，变化量为

$$
\Delta V_{T0}=\left(-Q_{b0}-Q_{ss}\right)\frac{\Delta t_{ox}}{\varepsilon_{ox}}
=\frac{(8.66-0.16)\times10^{-8}\ \mathrm{C/cm^2}\times(10\times10^{-8}\ \mathrm{cm})}{3.453\times10^{-13}\ \mathrm{F/cm}}=0.0246\ \mathrm V .
$$

氧化层加厚 5 % 使零偏阈值升高约 25 mV，从 0.306 V 变为 0.330 V。升高来自栅极必须通过更小的电容去平衡的净电荷 $-Q_{b0}-Q_{ss}$；其中耗尽电荷占主导，正的界面电荷略有抵消。这种敏感性正是氧化层厚度偏差会表现为晶圆间阈值偏差的原因之一。
