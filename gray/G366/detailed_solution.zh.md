# 详细步骤 - G366

先求偏置，再构建差分对的等效输入噪声电压（两半电路、各自的发射极电阻以及折算过来的负载噪声）和输入噪声电流，最后计算 $R_S=50\ \Omega$ 时的噪声系数。在如此低的源电阻下，电压噪声源占主导。

### 第 1 步 — 偏置点

两个基极的直流电位都是 0 V，因此发射极约为 $-0.7$ V。尾电流流经 100 kΩ 电阻以及与之串联的两个并联 500 Ω 电阻：

$$
I_{EE}\approx\frac{10\ \mathrm V-0.7\ \mathrm V}{100\ \mathrm{k\Omega}+250\ \Omega}=92.8\ \mu\mathrm A,\qquad
I_C=\frac{I_{EE}}{2}=46.4\ \mu\mathrm A .
$$

$$
g_m=\frac{46.4\ \mu\mathrm A}{26\ \mathrm{mV}}=1.78\ \mathrm{mS},\qquad
\frac{1}{2g_m}=280\ \Omega,\qquad
I_B=\frac{I_C}{\beta}=0.464\ \mu\mathrm A .
$$

### 第 2 步 — 等效输入噪声电压

每一半都是带发射极负反馈的共射晶体管，其输入电压噪声源为 $4kT(r_b+1/2g_m+R_E)$，另加可忽略的 $2qI_BR_E^2$。差分输出响应两个基极电压之差，因此 $Q_1$ 和 $Q_2$ 互不相关的噪声源按均方值相加，合并为 $Q_1$ 基极处的一个噪声源：

$$
2\left(r_b+\frac{1}{2g_m}+R_E\right)=2(200+280+500)\ \Omega=1960\ \Omega .
$$

两个 20 kΩ 集电极负载在差分输出端产生互不相关的噪声，经从 $Q_1$ 基极到输出的差模电压增益折算到输入：

$$
|A_d|=\frac{2R_C}{2(1/g_m+R_E)}=\frac{20\ \mathrm{k\Omega}}{561\ \Omega+500\ \Omega}=18.9,
\qquad
\frac{2\cdot4kTR_C}{A_d^2}=4kT\,\frac{40\ \mathrm{k\Omega}}{18.9^2}=4kT(112\ \Omega).
$$

100 kΩ 尾电阻只产生共模噪声电流，它在两侧平均分配，在差分输出中相互抵消。因此

$$
\frac{\overline{v_i^2}}{\Delta f}\approx4kT(1960+112)\ \Omega=4kT(2.07\ \mathrm{k\Omega})=3.44\times10^{-17}\ \mathrm{V^2/Hz}.
$$

### 第 3 步 — 等效输入噪声电流

信号源只驱动 $Q_1$ 的基极，因此起作用的电流噪声源是该基极的散粒噪声：

$$
\frac{\overline{i_i^2}}{\Delta f}=2qI_B=2(1.6\times10^{-19}\ \mathrm C)(0.464\ \mu\mathrm A)=1.48\times10^{-25}\ \mathrm{A^2/Hz}.
$$

### 第 4 步 — $R_S=50\ \Omega$ 时的噪声系数

$$
F=1+\frac{\overline{v_i^2}+\overline{i_i^2}R_S^2}{4kTR_S\,\Delta f}
=1+\frac{4kT(2073\ \Omega)+(1.48\times10^{-25})(50\ \Omega)^2}{4kT(50\ \Omega)}
=1+\frac{2073+0.02}{50}=42.5,
$$

$$
\mathrm{NF}=10\log_{10}42.5=16.3\ \mathrm{dB}.
$$

电流噪声源只相当于 0.02 Ω，可以忽略。不计负载项时，$F=1+1960/50=40.2$（16.0 dB）。差分对加倍的电压噪声和 500 Ω 发射极电阻使电路的噪声远大于 50 Ω 信号源本身。
