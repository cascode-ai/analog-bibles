$\sqrt{\overline{V_{n,in}^2}} \approx 1.66$ nV/√Hz（$2.75\times10^{-18}\ \mathrm{V^2/Hz}$）；$\sqrt{\overline{I_{n,in}^2}} \approx 4.07$ pA/√Hz（$1.66\times10^{-23}\ \mathrm{A^2/Hz}$）。

- $g_m = \sqrt{2(134\ \mu)(100)(1\ \mathrm{m})} = 5.18$ mS。
- 电压（输入端短路，增益为 $g_mR_D$）：$\overline{V_{n,in}^2} = 4kT\left(\dfrac{\gamma}{g_m} + \dfrac{1}{g_m^2R_D}\right) = 1.656\times10^{-20}\,(128.8 + 37.3) = 2.75\times10^{-18}$。
- 电流（输入端开路）：$M_1$ 的噪声电流无法流动（源极节点没有其他通路），因此只有 $R_D$ 有贡献：$\overline{I_{n,in}^2} = 4kT/R_D = 1.656\times10^{-23}\ \mathrm{A^2/Hz}$。
- （若计入体效应，电压噪声将改为除以 $(g_m + g_{mb})^2$，数值略低。）
