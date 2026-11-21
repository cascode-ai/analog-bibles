# 详细步骤 - G367

用电路的等效噪声电阻表示噪声系数。由于在几十欧时等效输入噪声电流可以忽略，超额噪声比 $F-1$ 与 $R_S$ 成反比，因此 $R_S$ 加倍大约使其减半。

### 第 1 步 — 该级的等效输入噪声源

由 $I_{EE}\approx9.3\ \mathrm V/100.25\ \mathrm{k\Omega}=92.8\ \mu$A，每个器件有 $I_C=46.4\ \mu$A、$1/2g_m=280\ \Omega$、$I_B=0.464\ \mu$A。差分对使每侧的电压噪声 $4kT(r_b+1/2g_m+R_E)$ 加倍，两个 20 kΩ 负载经差模增益 $|A_d|=R_C/(1/g_m+R_E)=18.9$ 折算后增加 $4kT(112\ \Omega)$：

$$
\frac{\overline{v_i^2}}{\Delta f}\approx4kT\left[2(200+280+500)+112\right]\ \Omega=4kT(2.07\ \mathrm{k\Omega}),\qquad
\frac{\overline{i_i^2}}{\Delta f}=2qI_B=1.48\times10^{-25}\ \mathrm{A^2/Hz}.
$$

### 第 2 步 — 噪声系数随 $R_S$ 的变化

$$
F=1+\frac{\overline{v_i^2}+\overline{i_i^2}R_S^2}{4kTR_S\,\Delta f}\approx1+\frac{R_{eq}}{R_S},\qquad R_{eq}=\frac{\overline{v_i^2}}{4kT\,\Delta f}=2.07\ \mathrm{k\Omega},
$$

因为电流项 $\overline{i_i^2}R_S^2$ 在 50 Ω 时只相当于 $0.02\ \Omega$，在 100 Ω 时只相当于 $0.09\ \Omega$。信号源自身的噪声 $4kTR_S$ 与 $R_S$ 成正比增大，而占主导的放大器噪声，即电压噪声源，并不变化。

### 第 3 步 — 数值比较

| $R_S$ | $F$ | NF |
|---|---|---|
| 50 Ω | $1+2073/50=42.5$ | 16.3 dB |
| 100 Ω | $1+2073/100=21.7$ | 13.4 dB |

$R_S$ 由 50 Ω 增大到 100 Ω 时，噪声系数减小约 2.9 dB。

### 第 4 步 — 与最佳值的关系

在 $R_S$ 向最佳值

$$
R_{S(\mathrm{opt})}=\sqrt{\frac{\overline{v_i^2}}{\overline{i_i^2}}}=\sqrt{\frac{3.44\times10^{-17}\ \mathrm{V^2/Hz}}{1.48\times10^{-25}\ \mathrm{A^2/Hz}}}\approx15\ \mathrm{k\Omega}
$$

增大的过程中，噪声系数会持续下降，因此在这一范围内从 50 Ω 起任何增大都会降低 $F$。只有超过约 15 kΩ 后，电流噪声源才开始占主导，噪声系数重新上升。
