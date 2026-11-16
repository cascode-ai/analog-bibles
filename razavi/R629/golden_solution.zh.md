$C_L \approx 0.55$ pF，对应 $R_D \approx 504\ \Omega$。

推导：
- 低频环路增益 $A_0^3 = 16$ → $A_0 = g_mR_D = 16^{1/3} = 2.52$ → $R_D = 2.52 \times 200\ \Omega = 504\ \Omega$。
- 三级环形振荡器在每级贡献 60° 相移的频率处振荡：$\omega_{osc} = \sqrt3\,\omega_0 = \sqrt3/(R_DC_L)$。
- $C_L = \sqrt3/(2\pi \cdot 10^9\ \mathrm{s^{-1}} \cdot 504\ \Omega) = 0.547$ pF。
- 另一种模型（也可接受）：当 $A_0 > 2$ 时，闭环极点为 $s = \omega_0[A_0(1 \pm j\sqrt3)/2 - 1]$，因此不断增长的小信号振荡的角频率为 $\omega = \sqrt3A_0\omega_0/2$；令其等于 $2\pi \cdot 1$ GHz，得到 $C_L = \sqrt3A_0/(2\omega R_D) = \sqrt3\,g_m/(2\omega) = 0.69$ pF。稳态频率由大信号（large-signal）特性决定；$\sqrt3\,\omega_0$ 是常用的设计值。
