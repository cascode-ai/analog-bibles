# 详细步骤 - G042

$p$ 沟道器件的阈值是使 $n$ 型表面反型所需的栅压：它必须克服功函数差、表面态电荷和耗尽层电荷，并使能带弯曲 $2|\phi_f|$。对于注入后的器件，$p$ 型注入在表面附近部分补偿了阱的掺杂，减少了需要支撑的耗尽层电荷。

### 第 1 步 — 阈值表达式及公共项

对于耗尽层中为电离施主 $qN_D$、表面态电荷 $Q_{ss}$ 为正的 PMOS，

$$
V_t=\phi_{ms}-2|\phi_f|-\frac{|Q_b|}{C_{ox}}-\frac{Q_{ss}}{C_{ox}} ,\qquad |Q_b|=\sqrt{2q\epsilon_{Si}N_D(2|\phi_f|)} .
$$

公共项为

$$
C_{ox}=\frac{3.9(8.86\times10^{-14}\ \mathrm{F/cm})}{400\times10^{-8}\ \mathrm{cm}}=8.64\times10^{-8}\ \mathrm{F/cm^2},\qquad
\frac{Q_{ss}}{C_{ox}}=\frac{(1.6\times10^{-19}\ \mathrm C)(10^{11}\ \mathrm{cm^{-2}})}{8.64\times10^{-8}\ \mathrm{F/cm^2}}=0.19\ \mathrm V,
$$
$$
|\phi_f|=\frac{kT}q\ln\frac{N_D}{n_i}=(0.026\ \mathrm V)\ln\frac{10^{16}}{1.5\times10^{10}}=0.349\ \mathrm V,\qquad 2|\phi_f|=0.70\ \mathrm V .
$$

### 第 2 步 — 未注入器件

取 $\epsilon_{Si}=11.6\epsilon_0=1.03\times10^{-12}$ F/cm：

$$
|Q_b|=\sqrt{2(1.6\times10^{-19}\ \mathrm C)(1.03\times10^{-12}\ \mathrm{F/cm})(10^{16}\ \mathrm{cm^{-3}})(0.70\ \mathrm V)}=4.79\times10^{-8}\ \mathrm{C/cm^2},\qquad \frac{|Q_b|}{C_{ox}}=0.55\ \mathrm V,
$$

$$
V_t=-0.1-0.70-0.55-0.19=-1.54\ \mathrm V .
$$

### 第 3 步 — 注入器件，箱形模型

注入后，表面 0.3 µm 内的净施主浓度为 $10^{16}-0.9\times10^{16}=10^{15}\ \mathrm{cm^{-3}}$。反型条件仍由阱掺杂决定，$2|\phi_f|=0.70$ V。若整个耗尽层都位于该层内，

$$
|Q_b|=\sqrt{2q\epsilon_{Si}(10^{15}\ \mathrm{cm^{-3}})(0.70\ \mathrm V)}=1.51\times10^{-8}\ \mathrm{C/cm^2},\qquad \frac{|Q_b|}{C_{ox}}=0.18\ \mathrm V,\qquad V_t=-1.16\ \mathrm V .
$$

### 第 4 步 — 检验：耗尽层延伸到阱中

在 $10^{15}\ \mathrm{cm^{-3}}$ 下，0.70 V 的耗尽层深约 0.95 µm，远超 0.3 µm 的注入层，因此耗尽区实际上伸入 $10^{16}$ 的阱中。取 $N_1=10^{15}$ 直到 $x_i=0.3\ \mu$m，其下为 $N_2=10^{16}$，由泊松方程（Poisson's equation）得表面势 $\psi=(q/\epsilon)\int_0^Wx\,N(x)\,dx$：

$$
\psi=\frac q{\epsilon_{Si}}\left[\frac{N_1x_i^2}2+\frac{N_2\left(W^2-x_i^2\right)}2\right]=0.70\ \mathrm V\quad\Rightarrow\quad W=0.41\ \mu\mathrm m,
$$
$$
|Q_b|=q\left[N_1x_i+N_2(W-x_i)\right]=2.29\times10^{-8}\ \mathrm{C/cm^2},\qquad \frac{|Q_b|}{C_{ox}}=0.26\ \mathrm V,\qquad V_t\approx-1.25\ \mathrm V .
$$

结果：未注入时 $V_t\approx-1.54$ V，注入后 $V_t\approx-1.2$ V（简单箱形模型为 $-1.16$ V，耗尽层伸入阱中时为 $-1.25$ V）。$p$ 型注入减少了栅下的净施主电荷，因而使阈值的负值减小。若把注入看作剂量为 $(0.9\times10^{16}\ \mathrm{cm^{-3}})(0.3\ \mu\mathrm m)=2.7\times10^{11}\ \mathrm{cm^{-2}}$ 的薄受主电荷层，阈值移动 $+0.50$ V，即 $V_t\approx-1.04$ V。
