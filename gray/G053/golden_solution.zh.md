$g_m \approx 0.77$ mA/V，$r_o \approx 15$ kΩ，$C_{gs} \approx 0.46$ fF，$C_{gd} = 0.05$ fF，$I_G \approx 55$–60 pA。

- $L_{\text{eff}} = 0.1 - 0.01 = 0.09\ \mu$m，$W/L = 5.56$。
- $g_m = \sqrt{2k'(W/L)I_D} = \sqrt{2(539\ \mu)(5.56)(100\ \mu)} = 774\ \mu$A/V（$V_{ov} = 0.26$ V，处于饱和区）。
- $\lambda = 0.06/0.09 = 0.67\ \mathrm{V^{-1}}$；$r_o = 1/(\lambda I_D) = 15$ kΩ。（由于 λ 很大，在平方律中保留 $(1+\lambda V_{DS}) = 1.67$ 会使结果明显不同：$V_{ov} = 0.20$ V，$g_m \approx 1.0$ mA/V，$r_o = (1+\lambda V_{DS})/(\lambda I_D) = 25$ kΩ。）
- $C_{gs} = \tfrac23WL_{\text{eff}}C_{ox} + WC_{ol} = \tfrac23(0.5)(0.09)(13.8) + 0.05 = 0.41 + 0.05 = 0.46$ fF；$C_{gd} = WC_{ol} = 0.05$ fF。
- $I_G = J_G\times$ 栅面积 $= 1.2\ \mathrm{nA/\mu m^2}\times0.5\ \mu\mathrm{m}\times0.1\ \mu\mathrm{m} = 60$ pA（用 $L_{\text{eff}}$ 计算则为 54 pA）。
