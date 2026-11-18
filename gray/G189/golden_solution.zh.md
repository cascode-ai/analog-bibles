每个晶体管：$I_D = 0.5$ mA，$g_m = 1.94$ mA/V，$C_{gs} = 74.7$ fF。

- 差模增益：$A_{dm} = -g_mR_L = -5.81$（15.3 dB）。其极点（密勒）：$1/\{R_S[C_{gs} + C_{gd}(1 + g_mR_L)]\} = 1/(5\ \mathrm{k\Omega}\times170\ \mathrm{fF}) = 1.18\times10^9$ rad/s ≈ 187 MHz（精确值 ≈ 182 MHz），因此 $|A_{dm}|$ 在 10 kHz–20 MHz 范围内平坦，为 15.3 dB（20 MHz 处 −0.05 dB）。
- 共模增益：共模半边电路（half circuit）中源极到地接 $2R_T \| (C_T/2)$：$A_{cm} \approx -\dfrac{g_mR_L}{1 + g_mZ_T} \approx -\dfrac{R_L}{Z_T} = -\dfrac{R_L}{2R_T}(1 + sR_TC_T)$。低频值 $-R_L/(2R_T) = -0.0050$（−46 dB）；零点位于 $1/(2\pi R_TC_T) = 265$ kHz；在此之上 $|A_{cm}|$ 以 +20 dB/decade 上升：1 MHz 处 ≈ 0.019（−34 dB），10 MHz 处 ≈ 0.19（−14.6 dB），20 MHz 处 ≈ 0.37（−8.6 dB）。（其他电容只在 ≈ 100 MHz 以上起作用；$C_{gd}$ 的馈通使零点的移动可以忽略，仅移到 ≈ 269 kHz。）
- CMRR $= |A_{dm}/A_{cm}| = 2g_mR_T/|1 + sR_TC_T|$：低频时为 1162（61.3 dB），在 265 kHz 以上以 −20 dB/decade 下降：1 MHz 处 ≈ 300（49.6 dB），10 MHz 处 ≈ 31（29.9 dB），20 MHz 处 ≈ 15.5（23.8 dB）。
