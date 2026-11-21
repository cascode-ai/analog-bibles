# 详细步骤 - G427

在半边电路的受控源 $g_{m1}v_{in}$ 处断开差模环路，并计入输出节点的频率特性。回归比是一个单极点函数，其直流值远大于 1，因此在远高于极点的频率处才降到 1，那里 $|\mathcal R|\approx g_{m1}f/(\omega C_{L\mathrm{eff}})$。

### 第 1 步 — 断开环路时输出节点的电容

用测试电流代替受控源后，输出节点看到对地的 $C_L$，再加上 $C_2$ 与 $(C_1+C_{ia})$ 的串联，因为输入节点只有接到（已置零的）信号源的 $C_1$ 和接地的 $C_{ia}$，没有其他通路：

$$
C_{L\mathrm{eff}}=C_L+\frac{C_2(C_1+C_{ia})}{C_2+C_1+C_{ia}}
=6\ \mathrm{pF}+\frac{(4)(6.58)}{10.58}\ \mathrm{pF}=8.49\ \mathrm{pF}.
$$

### 第 2 步 — 回归比随频率的变化

测试电流 $i_t$ 在输出端产生 $v_o=-i_tR_{odh}/(1+j\omega R_{odh}C_{L\mathrm{eff}})$。输入节点经电容分压器 $f=C_2/(C_2+C_1+C_{ia})=4/10.58=0.378$ 跟随输出，该分压比与频率无关。因此

$$
\mathcal R_{dm}(j\omega)=\frac{g_{m1}R_{odh}\,f}{1+j\omega R_{odh}C_{L\mathrm{eff}}},\qquad
\mathcal R_{dm0}=a_{dm0}f=484 .
$$

### 第 3 步 — 单位增益频率

极点位于 $1/(R_{odh}C_{L\mathrm{eff}})=1/[(42.7\ \mathrm{k\Omega})(8.49\ \mathrm{pF})]=2.8\times10^{6}$ rad/s。由于 $\mathcal R_{dm0}=484\gg1$，回归比在远高于极点处才降到 1，那里 $1+j\omega R_{odh}C_{L\mathrm{eff}}\approx j\omega R_{odh}C_{L\mathrm{eff}}$：

$$
|\mathcal R_{dm}(j\omega)|\approx\frac{g_{m1}f}{\omega C_{L\mathrm{eff}}}=1
\;\Rightarrow\;
\omega_r=\frac{g_{m1}f}{C_{L\mathrm{eff}}}=\frac{(30\ \mathrm{mA/V})(0.378)}{8.49\ \mathrm{pF}}=1.34\times10^{9}\ \mathrm{rad/s},
$$

即 $f_r=\omega_r/2\pi=213$ MHz。
