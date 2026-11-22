# 详细步骤 - G429

差模回归比只有一个极点，其直流值远大于 1，因此其单位增益频率为 $\omega_r\approx g_{m1}f/C_{L\mathrm{eff}}$，其中 $f$ 为电容反馈系数，$C_{L\mathrm{eff}}$ 为断开环路时输出节点上的总电容。先求出所需的 $C_{L\mathrm{eff}}$，再减去反馈网络贡献的部分。

### 第 1 步 — 反馈系数与单位增益频率

在受控源 $g_{m1}v_{in}$ 处断开环路，输出电压经 $C_2$ 与 $C_1+C_{ia}$ 构成的分压器返回输入节点：

$$
f=\frac{C_2}{C_2+C_1+C_{ia}}=\frac{4\ \mathrm{pF}}{10.58\ \mathrm{pF}}=0.378 .
$$

回归比为 $\mathcal R_{dm}(j\omega)=g_{m1}R_{odh}f/(1+j\omega R_{odh}C_{L\mathrm{eff}})$。其直流值 $a_{dm0}f=484\gg1$，因此在远高于极点处才降到 1，那里

$$
\omega_r\approx\frac{g_{m1}f}{C_{L\mathrm{eff}}}.
$$

### 第 2 步 — 所需的输出节点电容

要求 $\omega_r=1.0\times10^{9}$ rad/s：

$$
C_{L\mathrm{eff}}=\frac{g_{m1}f}{\omega_r}=\frac{(30\ \mathrm{mA/V})(0.378)}{1.0\times10^{9}\ \mathrm{rad/s}}=11.34\ \mathrm{pF}.
$$

### 第 3 步 — 减去反馈网络的负载

断开环路时，输出节点看到 $C_L$ 加上 $C_2$ 与 $C_1+C_{ia}$ 的串联：

$$
C_{L\mathrm{eff}}=C_L+\frac{C_2(C_1+C_{ia})}{C_2+C_1+C_{ia}}=C_L+\frac{(4)(6.58)}{10.58}\ \mathrm{pF}=C_L+2.49\ \mathrm{pF}.
$$

因此

$$
C_L=11.34\ \mathrm{pF}-2.49\ \mathrm{pF}=8.85\ \mathrm{pF}.
$$

该值大于使 $\omega_r=1.34\times10^{9}$ rad/s 的 6 pF，与 $\omega_r\propto1/C_{L\mathrm{eff}}$ 一致。
