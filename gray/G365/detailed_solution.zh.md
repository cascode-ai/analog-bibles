# 详细步骤 - G365

把发射极电阻的热噪声及流经它的基极电流噪声计入等效输入噪声电压，基极散粒噪声仍作为电流噪声源，再对 $R_S$ 求噪声系数的最小值。在如此低的电流下，噪声源之间的相关性很小，最后加以验证。

### 第 1 步 — 偏置与噪声源

在 $I_C=10\ \mu$A 时，$g_m=10\ \mu\mathrm A/26\ \mathrm{mV}=0.385$ mS（$1/2g_m=1.3$ kΩ），$I_B=0.1\ \mu$A。$R_E$ 构成串联反馈时，

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}+R_E\right)+2qI_BR_E^2,\qquad
\frac{\overline{i_i^2}}{\Delta f}=2qI_B .
$$

$$
\begin{aligned}
4kT(300+1300+1000)\ \Omega&=(1.66\times10^{-20}\ \mathrm{V\cdot C})(2600\ \Omega)=4.316\times10^{-17}\ \mathrm{V^2/Hz},\\
2qI_BR_E^2&=2(1.6\times10^{-19}\ \mathrm C)(0.1\ \mu\mathrm A)(1\ \mathrm{k\Omega})^2=3.2\times10^{-20}\ \mathrm{V^2/Hz},\\
\frac{\overline{v_i^2}}{\Delta f}&=4.32\times10^{-17}\ \mathrm{V^2/Hz},\qquad
\frac{\overline{i_i^2}}{\Delta f}=3.2\times10^{-26}\ \mathrm{A^2/Hz}.
\end{aligned}
$$

由于基极电流很小，$2qI_BR_E^2$ 项仅占 $\overline{v_i^2}$ 的 0.07%。

### 第 2 步 — 最小噪声系数

对于不相关噪声源，$F=1+(\overline{v_i^2}+\overline{i_i^2}R_S^2)/(4kTR_S\Delta f)$ 在 $\overline{i_i^2}R_S^2=\overline{v_i^2}$ 处最小：

$$
R_{S(\mathrm{opt})}=\sqrt{\frac{4.32\times10^{-17}}{3.2\times10^{-26}}}\ \Omega=36.7\ \mathrm{k\Omega},\qquad
F_{\mathrm{opt}}=1+\frac{2\sqrt{(4.32\times10^{-17})(3.2\times10^{-26})}}{1.66\times10^{-20}}=1.142,
$$

$$
\mathrm{NF}_{\mathrm{opt}}=10\log_{10}1.142=0.58\ \mathrm{dB}.
$$

### 第 3 步 — 相关性验证与比较

精确写出总输入噪声（基极电流噪声流经 $R_t=R_S+r_b+R_E$，集电极散粒噪声按 $i_c(1/g_m+R_t/\beta_F)$ 折算）并数值求最小，得到 $R_{S(\mathrm{opt})}\approx36.7$ kΩ、$F_{\mathrm{opt}}\approx1.158$（0.64 dB），与简单结果接近。

没有 $R_E$ 时，同一晶体管的 $R_{S(\mathrm{opt})}=28.8$ kΩ、噪声系数为 0.46 dB。1 kΩ 发射极电阻把自身的热噪声加到电压噪声源上，使最佳源电阻和最小噪声系数都升高。这里代价较小，因为 $R_E$ 与原有的 $r_b+1/2g_m=1.6$ kΩ 相当；而对于 2 mA 的器件，$R_E$ 远大于 $r_b+1/2g_m=113\ \Omega$。
