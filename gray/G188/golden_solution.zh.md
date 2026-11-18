$Z_o(s) = \dfrac{1 + sR_S(C_{gs} + C_{gd})}{sC_{gd}(1 + g_mR_S + sR_SC_{gs})}$，其中 $g_m = 1.94$ mA/V，$C_{gs} = 74.7$ fF，$g_mR_S = 19.4$。

- 低频时：为一个电容 $C_{gd}(1 + g_mR_S) = 285$ fF。
- 零点位于 $1/[R_S(C_{gs} + C_{gd})] = 1.13\times10^9$ rad/s（180 MHz）；极点位于 $(1 + g_mR_S)/(R_SC_{gs}) = 2.7\times10^{10}$ rad/s（4.3 GHz）。
- 等效电路：$C_\infty = C_{gd}C_{gs}/(C_{gs} + C_{gd}) = 11.8$ fF 与一个由 $C_x = 273$ fF 和 $R_x \approx (C_{gs} + C_{gd})/(g_mC_{gd}) = 3.2\ \mathrm{k\Omega}$ 组成的串联支路并联。
- 曲线：在整个 1 kHz–100 MHz 范围内，$|Z_o|$ 基本上就是 285 fF 电容的阻抗，以 −20 dB/decade 从 1 kHz 处的 ≈ 560 MΩ 下降到 100 MHz 处的 ≈ 5.6 kΩ（100 MHz 处的精确值 ≈ 6.4 kΩ，此时曲线开始弯向从 180 MHz 附近开始的 ≈ 3.2 kΩ 平台）。
- 与双极型级相比，MOS 级没有 $r_\pi$，且 $C_{gd}$ 小得多，因此电阻性平台位于 100 MHz 以上。
