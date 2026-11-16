$\overline{V_{n,in}^2} \approx 1.85\times10^{-17}\ \mathrm{V^2/Hz}$，即 ≈ 4.3 nV/√Hz（折合到差分输入），几乎完全由第一级决定：
$$\overline{V_{n,in}^2} = 2\cdot4kT\gamma\left[\frac{1}{g_{m1}}\left(1 + \frac{g_{m3}}{g_{m1}}\right) + \frac{g_{m5} + g_{m7}}{(g_{m1}R_Xg_{m5})^2}\right].$$
- $g_{m1}$ = 1.83 mS，$g_{m3} = \sqrt{2(38.4\ \mu)(100)(0.125\ \mathrm{m})} = 0.98$ mS，$g_{m5}$ = 3.04 mS，$g_{m7} = \sqrt{2(134\ \mu)(100)(1\ \mathrm{m})} = 5.18$ mS，$R_X = r_{O1} \parallel r_{O3}$ = 26.7 kΩ。
- 半边电路（half circuit）：$M_1$ 和 $M_3$ 在 X 处的噪声电流折合到 $M_1$ 的栅极，得到 $4kT\gamma(g_{m1} + g_{m3})/g_{m1}^2$，相当于 839 Ω 的等效电阻。第二级（$M_5$、$M_7$）的噪声要除以第一级增益的平方，只增加 0.37 Ω，可以忽略。
- $4kT\gamma = 1.10\times10^{-20}$ J。每个半边电路：9.3×10⁻¹⁸ V²/Hz。差分输入同时受两个半边的影响：× 2，得到 1.85×10⁻¹⁷ V²/Hz → 4.3 nV/√Hz。
- 尾电流源（tail current source）$I_{SS}$ 只贡献共模（common-mode）噪声。
