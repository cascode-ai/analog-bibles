# 详细步骤 - G376

电流源输入时只有等效输入噪声电流起作用。对于电压并联反馈，它等于第一个晶体管的电流噪声源，加上其电压噪声源除以 $R_F$，再加上 $R_F$ 的热噪声电流。这里第一个晶体管的基极电流含有闪烁噪声，在 0.01 Hz–100 kHz 这一很宽的频带内积分得到对数。

### 第 1 步 — 第一个晶体管的噪声源

在 $I_C=1$ mA 时，$g_m=38.5$ mS（$1/2g_m=13\ \Omega$），$I_B=I_C/\beta=5\ \mu$A。电流噪声源为含闪烁噪声的基极电流噪声加上经 $\beta$ 折算的集电极散粒噪声；电压噪声源为通常的白噪声：

$$
\frac{\overline{i_{ia}^2}}{\Delta f}=2qI_B\left(1+\frac{f_a}{f}\right)+\frac{2qI_C}{\beta^2}=1.6\times10^{-24}\left(1+\frac{5000\ \mathrm{Hz}}{f}\right)+8\times10^{-27}\ \mathrm{A^2/Hz},
$$

$$
\frac{\overline{v_{ia}^2}}{\Delta f}\approx4kT\left(r_b+\frac{1}{2g_m}\right)=4kT(313\ \Omega)=5.20\times10^{-18}\ \mathrm{V^2/Hz}.
$$

5 kΩ 负载及后续晶体管的噪声需经第一级增益（电流则经 $\beta$）折算，可以忽略。

### 第 2 步 — 并联反馈下的输入噪声电流谱密度

$$
\frac{\overline{i_i^2}}{\Delta f}=\frac{\overline{i_{ia}^2}}{\Delta f}+\frac{\overline{v_{ia}^2}}{R_F^2\,\Delta f}+\frac{4kT}{R_F}.
$$

| 项 | 谱密度 (A²/Hz) |
|---|---|
| 基极散粒噪声 $2qI_B$ | $1.6\times10^{-24}$ |
| 集电极散粒噪声 $2qI_C/\beta^2$ | $8\times10^{-27}$ |
| $\overline{v_{ia}^2}/R_F^2$ | $5.2\times10^{-26}$ |
| $R_F$ 热噪声 $4kT/R_F$ | $1.66\times10^{-24}$ |
| 白噪声合计 | $3.32\times10^{-24}$ |
| 闪烁噪声 $2qI_Bf_a/f$ | $8.0\times10^{-21}\ \mathrm{A^2}/f$ |

### 第 3 步 — 在 0.01 Hz–100 kHz 内积分

$$
\begin{aligned}
\text{white:}\quad &(3.32\times10^{-24}\ \mathrm{A^2/Hz})(10^5\ \mathrm{Hz})=3.32\times10^{-19}\ \mathrm{A^2},\\
\text{flicker:}\quad &(8.0\times10^{-21}\ \mathrm{A^2})\ln\frac{10^5\ \mathrm{Hz}}{0.01\ \mathrm{Hz}}=(8.0\times10^{-21})(16.1)=1.29\times10^{-19}\ \mathrm{A^2},\\
\overline{i_i^2}&=4.61\times10^{-19}\ \mathrm{A^2},\qquad i_{i,\mathrm{rms}}=0.68\ \mathrm{nA}.
\end{aligned}
$$

精确的节点分析给出 0.69 nA。白噪声中的基极散粒噪声与反馈电阻噪声贡献大致相等，合计占总量的 72%；闪烁噪声占其余 28%。与该放大器的 MOS 版本（约 1.14 nA，由经 $R_F$ 转换的栅极折算闪烁噪声主导）相比，尽管存在基极电流噪声，双极型放大器在这一频带内更安静。
