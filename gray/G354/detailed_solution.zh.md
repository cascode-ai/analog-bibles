# 详细步骤 - G354

在漏极噪声电流中加入 $1/f$ 分量，并按其在 100 kHz 处等于沟道热噪声来定标；把漏极噪声和负载噪声经 $g_m$ 折算到输入，再在频带边界之间对所得谱密度积分。闪烁项积分得到对数，这正是频带下限重要的原因。

### 第 1 步 — 含闪烁分量的漏极噪声

闪烁噪声的谱密度与 $1/f$ 成正比。要求它在 $f_c=100$ kHz 处等于热噪声项 $4kT\tfrac23g_m$，得到漏极总噪声电流

$$
\frac{\overline{i_d^2}}{\Delta f}=4kT\,\frac23g_m\left(1+\frac{f_c}{f}\right),\qquad f_c=10^5\ \mathrm{Hz}.
$$

10 kΩ 负载在同一节点上增加 $4kT/R_L$。

### 第 2 步 — 等效输入噪声源

输入短路时，输出噪声电流除以 $g_m^2$ 折算到输入：

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\,\frac{2}{3g_m}\left(1+\frac{f_c}{f}\right)+\frac{4kT}{g_m^2R_L}
=1.107\times10^{-17}\left(1+\frac{10^5\ \mathrm{Hz}}{f}\right)\ \mathrm{V^2/Hz}+1.66\times10^{-18}\ \mathrm{V^2/Hz},
$$

其中 $4kT\cdot2/(3g_m)=(1.66\times10^{-20}\ \mathrm{V\cdot C})(667\ \Omega)$，$4kT/(g_m^2R_L)=(1.66\times10^{-20}\ \mathrm{V\cdot C})(100\ \Omega)$。

输入开路时没有栅极电流，且 $C_{gs}=0$，因此任何输入电流都不能影响输出，输出噪声与输入短路时相同：

$$
\frac{\overline{i_i^2}}{\Delta f}=0 .
$$

### 第 3 步 — 在 1 Hz–20 kHz 内积分

在 $f_L=1$ Hz 和 $f_H=20$ kHz 处锐截止，

$$
\int_{f_L}^{f_H}\left(1+\frac{f_c}{f}\right)df=(f_H-f_L)+f_c\ln\frac{f_H}{f_L}
=2\times10^4\ \mathrm{Hz}+(10^5\ \mathrm{Hz})\ln(2\times10^4)=2\times10^4+9.90\times10^5=1.01\times10^6\ \mathrm{Hz}.
$$

总均方输入噪声为

$$
\overline{v_i^2}=(1.107\times10^{-17}\ \mathrm{V^2/Hz})(1.01\times10^6\ \mathrm{Hz})+(1.66\times10^{-18}\ \mathrm{V^2/Hz})(2\times10^4\ \mathrm{Hz})
=1.118\times10^{-11}+3.3\times10^{-14}=1.12\times10^{-11}\ \mathrm{V^2},
$$

故

$$
v_{i,\mathrm{rms}}=\sqrt{1.12\times10^{-11}\ \mathrm{V^2}}=3.35\ \mu\mathrm V .
$$

### 第 4 步 — 解释

闪烁项约占总量的 98%。若没有它，同一频带只有 $\sqrt{(1.107\times10^{-17})(2\times10^4)}\ \mathrm V=0.47\ \mu$V，因此 100 kHz 的闪烁噪声转折频率使音频频段的噪声增大约七倍。由于闪烁噪声的贡献按 $\ln(f_H/f_L)$ 增长，低频带宽每增加十倍，等效带宽就增加 $f_c\ln10=2.3\times10^5$ Hz。
