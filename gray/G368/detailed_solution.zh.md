# 详细步骤 - G368

用该级的等效输入噪声源把噪声系数写成 $R_S$ 的函数。在 50 Ω 时电压噪声源占主导；在高于最佳源电阻的 200 kΩ 时，基极电流噪声占主导。直接比较两者的数值。

### 第 1 步 — 等效输入噪声源

由 $I_{EE}\approx9.3\ \mathrm V/100.25\ \mathrm{k\Omega}=92.8\ \mu$A，每个晶体管有 $I_C=46.4\ \mu$A、$1/2g_m=280\ \Omega$、$I_B=0.464\ \mu$A。把每侧的电压噪声 $4kT(r_b+1/2g_m+R_E)$ 加倍，再加上折算过来的负载噪声 $4kT(112\ \Omega)$：

$$
\frac{\overline{v_i^2}}{\Delta f}\approx4kT(2.07\ \mathrm{k\Omega})=3.44\times10^{-17}\ \mathrm{V^2/Hz},\qquad
\frac{\overline{i_i^2}}{\Delta f}=2qI_B=1.48\times10^{-25}\ \mathrm{A^2/Hz}.
$$

### 第 2 步 — 噪声系数随源电阻的变化

$$
F=1+\frac{\overline{v_i^2}+\overline{i_i^2}R_S^2}{4kTR_S\,\Delta f}
=1+\frac{\overline{v_i^2}}{4kTR_S\,\Delta f}+\frac{\overline{i_i^2}R_S}{4kT\,\Delta f}.
$$

电压项按 $1/R_S$ 下降，电流项按 $R_S$ 增大；两者在最佳值处相等：

$$
R_{S(\mathrm{opt})}=\sqrt{\frac{\overline{v_i^2}}{\overline{i_i^2}}}\approx15\ \mathrm{k\Omega},\qquad
F_{\mathrm{opt}}=1+\frac{2\sqrt{\overline{v_i^2}\,\overline{i_i^2}}}{4kT\,\Delta f}=1.27\ (1.0\ \mathrm{dB}).
$$

### 第 3 步 — 50 Ω 与 200 kΩ 时的数值

$R_S=50\ \Omega$ 时电压项占主导：$F=1+2073/50=42.5$，即 16.3 dB。

$R_S=200$ kΩ 时：

$$
F=1+\frac{2073\ \Omega}{200\ \mathrm{k\Omega}}+\frac{(1.48\times10^{-25}\ \mathrm{A^2/Hz})(200\ \mathrm{k\Omega})}{1.66\times10^{-20}\ \mathrm{V\cdot C}}
=1+0.0104+1.79=2.80,\qquad \mathrm{NF}=4.5\ \mathrm{dB}.
$$

### 第 4 步 — 结论

噪声系数减小，从 50 Ω 时的约 16.3 dB 降到 200 kΩ 时的约 4.5 dB。在 200 kΩ 时源电阻已超过 15 kΩ 的最佳值，流经 $R_S$ 的基极电流散粒噪声占主导，$F$ 已开始从 1.0 dB 的最小值回升；但它仍远低于 50 Ω 时的数值，那时放大器的电压噪声是信号源噪声的 40 倍。
