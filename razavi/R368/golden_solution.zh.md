$\overline{V_{n,in}^2} \approx 4.63\times10^{-18}\ \mathrm{V^2/Hz}$（≈ 2.15 nV/√Hz）；$\overline{I_{n,in}^2} \approx 6.2\times10^{-23}\ \mathrm{A^2/Hz}$（≈ 7.9 pA/√Hz）。

- $g_{m1} = g_{m2} = \sqrt{2(134\ \mu)(100)(0.5\ \mathrm{m})} = 3.66$ mS；$g_{m3} = \sqrt{2(38.4\ \mu)(100)(0.5\ \mathrm{m})} = 1.96$ mS。
- 噪声电压（输入短路）：$M_1$ 和 $M_3$ 的噪声电流到达输出端；$M_2$ 的噪声电流流入被短路的输入端。$\overline{V_{n,in}^2} = 4kT\gamma\dfrac{g_{m1} + g_{m3}}{g_{m1}^2} = 1.104\times10^{-20}(273.2 + 146.3)$。
- 噪声电流（输入开路）：$M_2$ 的噪声电流经 $M_1$ 流到输出端；$M_3$ 的噪声几乎一比一地折算到输入端（当 $g_mr_O \gg 1$ 时）；$M_1$ 的噪声可以忽略。$\overline{I_{n,in}^2} = 4kT\gamma(g_{m2} + g_{m3}) = 1.104\times10^{-20}\times5.62\times10^{-3}$。
- （若计入体效应（body effect），噪声电压改为除以 $(g_{m1}+g_{mb1})^2$，数值略低。）
