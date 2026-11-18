$T_0 \approx 2.9\ \mu$s → $f_{-3\text{dB}} \approx 55$ kHz（低频增益 −69.5）。

- $\tau_F = 256$ ps；$C_{\pi1} = 256\ \mathrm{ps}\times1.92\ \mathrm{mA/V} + 2\ \mathrm{pF} = 2.49$ pF；$C_{\pi2} = 11.84$ pF；$r_{\pi1} = 52\ \mathrm{k\Omega}$；$R_{E1} \equiv r_{\pi2}\|R_B = 2.22\ \mathrm{k\Omega}$。
- $C_{\pi1}$：$r_{\pi1}\|(R_S + R_{E1})/(1 + g_{m1}R_{E1}) = 14.1\ \mathrm{k\Omega}$ → 35.2 ns。
- $C_{\mu1}$（$Q_1$ 基极到输出）：$R_A = R_S\|R_i = 100\ \mathrm{k}\|275.8\ \mathrm{k} = 73.4\ \mathrm{k\Omega}$，$G_m = 8708/R_i = 31.6$ mA/V → $R = 7.03$ MΩ → 2.81 µs。
- $C_{\pi2}$：$r_{\pi2}\|R_B\|(R_S + r_{\pi1})/(\beta+1) = 896\ \Omega$ → 10.6 ns；$C_{\mu2}$：≈ 106 kΩ → 42.2 ns；$C_{cs1}$、$C_{cs2}$：$R_L$ → 各 3 ns。
- $T_0 = 2905$ ns → $f_{-3\text{dB}} = 54.8$ kHz（精确值：54.8 kHz）。更高的增益加剧了 $C_{\mu1}$ 上的密勒效应（Miller effect），因此带宽比不接泄放电阻时（≈ 73 kHz）更低。
