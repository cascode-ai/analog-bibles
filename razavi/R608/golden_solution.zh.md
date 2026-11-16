THD ≈ HD2 ≈ 0.069%（≈ −63 dB），而由同样 10 mV 输入驱动的开环级为 ≈ 0.65%。
- 偏置：$V_{ov} = \sqrt{2(1\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2}\times100)} = 0.386$ V，$g_m = 2I/V_{ov} = 5.18$ mS。
- 前向放大器（反相已归入环路中）：$y = \alpha_1x + \alpha_2x^2$，其中 $\alpha_1 = g_mR_D = 10.35$，$\alpha_2 = \tfrac12\mu_nC_{ox}\tfrac WL R_D = 13.4\ \mathrm{V^{-1}}$。
- 对于 $x = V_m\cos\omega t$，令 $y \approx a\cos\omega t + b\cos2\omega t$ 并比较系数（弱非线性）：$a = \dfrac{\alpha_1V_m}{1+\beta\alpha_1}$，$b = \dfrac{\alpha_2V_m^2}{2(1+\beta\alpha_1)^3}$，因此 $\dfrac ba = \dfrac{\alpha_2V_m}{2\alpha_1}\cdot\dfrac{1}{(1+\beta\alpha_1)^2}$。
- 数值：$\beta\alpha_1 = 2.07$，$(1+\beta\alpha_1)^2 = 9.43$；$\alpha_2V_m/(2\alpha_1) = 6.47\times10^{-3}$；$b/a = 6.9\times10^{-4} = 0.069\%$。输出基波（fundamental）$a$ ≈ 33.7 mV。直接对环路方程进行数值求解也得到相同的值；更高次谐波可以忽略。
- （若计入 $\lambda = 0.1\ \mathrm{V^{-1}}$ 时的 $r_O = 1/(\lambda I) = 10\ \mathrm{k\Omega}$，则 $\alpha_1$ = 8.6，THD ≈ 0.087%。）
