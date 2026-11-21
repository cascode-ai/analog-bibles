# 详细步骤 - G348

这里的高输入电阻来自极低集电极电流下的 $r_\pi$ 本身，信号通路中没有附加电阻。因此等效输入噪声源就是普通共射级的噪声源；在 $I_C=13\ \mu$A 下计算它们，此时 $g_m$ 很低，使 $1/2g_m$ 项和负载项都较大。

### 第 1 步 — 小信号参数

$$
g_m=\frac{I_C}{V_T}=\frac{13\ \mu\mathrm A}{26\ \mathrm{mV}}=0.5\ \mathrm{mS},\qquad
\frac{1}{2g_m}=1\ \mathrm{k\Omega},\qquad
r_\pi=\frac{\beta}{g_m}=\frac{50}{0.5\ \mathrm{mS}}=100\ \mathrm{k\Omega},\qquad
I_B=\frac{I_C}{\beta}=0.26\ \mu\mathrm A .
$$

输入电阻 $r_b+r_\pi\approx100$ kΩ 由 $r_\pi$ 决定，电压增益只有 $g_mR_L=(0.5\ \mathrm{mS})(10\ \mathrm{k\Omega})=5$。

### 第 2 步 — 等效输入噪声电压

将输入短路。此时基极散粒噪声（shot noise）经 $r_b\ll r_\pi$ 被短路，贡献可以忽略。$r_b$ 的热噪声直接与输入串联。集电极散粒噪声 $2qI_C$ 和负载热噪声电流 $4kT/R_L$ 都在输出节点，除以 $g_m^2$ 折算到输入：

$$
\frac{\overline{v_i^2}}{\Delta f}=4kTr_b+\frac{2qI_C}{g_m^2}+\frac{4kT}{g_m^2R_L}
=4kT\left(r_b+\frac{1}{2g_m}+\frac{1}{g_m^2R_L}\right),
$$

其中用到 $2qI_C/g_m^2=2kT/g_m$。由 $1/(g_m^2R_L)=1/[(0.5\ \mathrm{mS})^2(10\ \mathrm{k\Omega})]=400\ \Omega$，

$$
\frac{\overline{v_i^2}}{\Delta f}=(1.66\times10^{-20}\ \mathrm{V\cdot C})(100+1000+400)\ \Omega=2.49\times10^{-17}\ \mathrm{V^2/Hz}
\quad(\approx5.0\ \mathrm{nV/\sqrt{Hz}}).
$$

集电极散粒噪声项 $1/2g_m=1$ kΩ 占主导。不计负载项时结果为 $4kT(1100\ \Omega)=1.83\times10^{-17}$ V²/Hz；由于增益只有 5，负载在这里不可忽略。

### 第 3 步 — 等效输入噪声电流

将输入开路。基极散粒噪声流入 $r_\pi$，直接表现为输入电流；输出端的噪声源经电流增益 $\beta$ 折算：

$$
\frac{\overline{i_i^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta^2}\right)+\frac{4kT}{\beta^2R_L}
=2(1.6\times10^{-19}\ \mathrm C)(0.26\ \mu\mathrm A+5.2\ \mathrm{nA})+6.6\times10^{-28}\ \mathrm{A^2/Hz}
=8.5\times10^{-26}\ \mathrm{A^2/Hz},
$$

约为 $0.29\ \mathrm{pA/\sqrt{Hz}}$。基极散粒噪声 $2qI_B=8.3\times10^{-26}$ A²/Hz 占其中的 98%，负载项可以忽略。

### 第 4 步 — 比较

与在 $I_C=0.5$ mA 下用 100 kΩ 基极串联电阻或发射极负反馈获得相同输入电阻的做法相比，小电流级的噪声电流小得多（其基极电流只有 0.26 µA，而不是 5 µA），代价是噪声电压约为 $2.5\times10^{-17}$ V²/Hz，并由较大的 $1/2g_m$ 主导。
