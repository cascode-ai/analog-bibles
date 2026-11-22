# 详细步骤 - G364

把未旁路的发射极电阻视为串联反馈：将其热噪声以及流经它的基极电流噪声计入等效输入噪声源，再对 $R_S$ 求噪声系数的最小值。由于同一基极电流噪声也流经 $R_S$，这里两个噪声源是相关的；精确结果需直接写出总输入噪声并数值求最小。

### 第 1 步 — 偏置与晶体管噪声源

在 $I_C=2$ mA 时，$g_m=76.9$ mS（$1/2g_m=13\ \Omega$），$I_B=I_C/\beta_F=40\ \mu$A。单个晶体管有

$$
\frac{\overline{v_{ia}^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right),\qquad
\frac{\overline{i_{ia}^2}}{\Delta f}=2qI_B=2(1.6\times10^{-19}\ \mathrm C)(40\ \mu\mathrm A)=1.28\times10^{-23}\ \mathrm{A^2/Hz}.
$$

### 第 2 步 — 不相关噪声源的标准分析

发射极接 $R_E$ 时，输入短路使基极电流噪声流经 $R_E$，且 $R_E$ 串联加入自身的热噪声：

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}+R_E\right)+2qI_BR_E^2
=(1.66\times10^{-20}\ \mathrm{V\cdot C})(1106.5\ \Omega)+1.28\times10^{-17}=3.12\times10^{-17}\ \mathrm{V^2/Hz},
$$

而 $\overline{i_i^2}=\overline{i_{ia}^2}$。对 $F=1+(\overline{v_i^2}+\overline{i_i^2}R_S^2)/(4kTR_S\Delta f)$ 求最小：

$$
R_{S(\mathrm{opt})}=\sqrt{\frac{\overline{v_i^2}}{\overline{i_i^2}}}=\sqrt{\frac{3.12\times10^{-17}}{1.28\times10^{-23}}}\ \Omega=1.56\ \mathrm{k\Omega},\qquad
F_{\mathrm{opt}}=1+\frac{2\sqrt{\overline{v_i^2}\,\overline{i_i^2}}}{4kT\,\Delta f}=3.41\ (5.3\ \mathrm{dB}).
$$

### 第 3 步 — 计入相关性的精确分析

同一基极电流噪声在整个输入回路中流动，流经 $R_t=R_S+r_b+R_E$，因此它在 $R_S$ 和 $R_E$ 上的贡献相干相加。集电极散粒噪声以该回路电阻折算到输入，所需源电压为 $i_c(1/g_m+R_t/\beta_F)$。因此总等效输入噪声电压谱密度为

$$
\frac{\overline{v_{n,tot}^2}}{\Delta f}=4kT(R_S+r_b+R_E)+2qI_BR_t^2+2qI_C\left(\frac{1}{g_m}+\frac{R_t}{\beta_F}\right)^2,
$$

且

$$
F=1+\frac{4kT(r_b+R_E)+2qI_BR_t^2+2qI_C\left(1/g_m+R_t/\beta_F\right)^2}{4kTR_S}.
$$

以最小值处 $R_S=1.63$ kΩ（$R_t=2.73$ kΩ）为代表计算：分子三项分别为 $1.83\times10^{-17}$、$9.51\times10^{-17}$ 和 $2.9\times10^{-18}$ V²/Hz，得到 $F=1+4.31=5.31$。

| $R_S$ | 1.0 kΩ | 1.63 kΩ | 2.5 kΩ |
|---|---|---|---|
| $F$ | 5.62 | 5.31 | 5.55 |

精确最佳值为 $R_{S(\mathrm{opt})}\approx1.63$ kΩ，$F_{\mathrm{opt}}\approx5.3$（7.2 dB）。与第 2 步的差别来自 $R_S$ 和 $R_E$ 中基极电流噪声之间的交叉项 $2\cdot2qI_BR_SR_E$，不相关模型忽略了这一项。

### 第 4 步 — 发射极电阻的影响

没有 $R_E$ 时，同一晶体管在 $R_S\approx370\ \Omega$ 处达到 $F_{\mathrm{opt}}\approx2$ dB。1 kΩ 发射极电阻使最佳源电阻升高到约 1.6 kΩ，最小噪声系数升高到约 5–7 dB，因为它的热噪声和流经它的基极电流噪声都会增加输入噪声。发射极负反馈改善的是线性度和输入电阻，而不是噪声。
