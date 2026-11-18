(1) $f_T \approx 7.7$ GHz，$f_\beta = f_T/\beta_0 \approx 77$ MHz。(2) $f_T \approx 9.8$ GHz，$f_\beta \approx 98$ MHz。

曲线：$|\beta(j\omega)| = \beta_0/|1 + jf/f_\beta|$。两条曲线从 0.1 MHz 到 ≈ 10 MHz 都平坦地保持在 100，在 $f_\beta$ 处经过 70.7（−3 dB），随后以 −20 dB/decade 下降（双对数坐标上斜率为 −1）：情况 1 在 100 MHz 处≈ 61，在 1000 MHz 处≈ 7.7；情况 2 在 100 MHz 处≈ 70，在 1000 MHz 处≈ 9.8。在所画范围内两条曲线都未降到单位增益；按 −1 斜率外推，在 $f_T$ 处降到单位增益。

- 情况 1：$g_m = 7.69$ mA/V，$C_\pi = \tau_Fg_m + C_{je} = 0.115 + 0.040 = 0.155$ pF，$C_\mu = 10/\sqrt{1+3/0.55} = 3.9$ fF；$f_T = g_m/[2\pi(C_\pi + C_\mu)] = 7.69\ \mathrm{mA/V}/(2\pi\times0.159\ \mathrm{pF}) = 7.68$ GHz（等价地，$\tau_T = \tau_F + (C_{je}+C_\mu)/g_m = 15 + 5.7 = 20.7$ ps）。
- 情况 2：$g_m = 38.5$ mA/V，$C_\pi = 0.577 + 0.040 = 0.617$ pF，$C_\mu = 6.0$ fF；$f_T = 38.5\ \mathrm{mA/V}/(2\pi\times0.623\ \mathrm{pF}) = 9.83$ GHz（$\tau_T = 15 + 1.2 = 16.2$ ps）。
- 电流较大时 $f_T$ 较高，因为耗尽层电容项 $(C_{je}+C_\mu)/g_m$ 减小，$\tau_F$ 成为主导。
