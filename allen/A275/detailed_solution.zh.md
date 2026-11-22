# 详细步骤 - A275

直流增益很大时，主极点在单位增益频率处贡献整整 −90°。其余相移来自输出极点 $p_2$ 和右半平面零点；后者位于右半平面，因此带来相位滞后（而不是超前）。两者都由 $g_{m6}$ 决定。

### 第 1 步 — 第二级跨导

M6 饱和，$I_6=228$ µA：

$$
g_{m6}=\sqrt{2K'_P\left(\frac WL\right)_6I_6}=\sqrt{2(50\ \mu\mathrm{A/V^2})(100)(228\ \mu\mathrm A)}=1.51\ \mathrm{mS}.
$$

### 第 2 步 — 输出极点和右半平面零点

$$
|p_2|=\frac{g_{m6}}{C_L}=\frac{1.51\ \mathrm{mS}}{20\ \mathrm{pF}}=7.55\times10^7\ \mathrm{rad/s}\ (12.0\ \mathrm{MHz}),\qquad
z=\frac{g_{m6}}{C_c}=\frac{1.51\ \mathrm{mS}}{5\ \mathrm{pF}}=3.02\times10^8\ \mathrm{rad/s}\ (48.1\ \mathrm{MHz}).
$$

### 第 3 步 — 1 MHz 处的相位裕度

频率 $\omega$ 处的开环相位为 $-90^\circ-\arctan(\omega/|p_2|)-\arctan(\omega/z)$，因此

$$
\Phi_M=180^\circ+\angle A(j\omega_u)=90^\circ-\arctan\frac{1\ \mathrm{MHz}}{12.0\ \mathrm{MHz}}-\arctan\frac{1\ \mathrm{MHz}}{48.1\ \mathrm{MHz}}
=90^\circ-4.8^\circ-1.2^\circ=84^\circ .
$$

该裕度对应题给的 1 MHz 交越频率。若在该运放自身的 $GB=g_{m1}/C_c=7.1$ MHz 处计算，同一模型给出约 51°。
