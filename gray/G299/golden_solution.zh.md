$R_2 = 100$ Ω，$R_1 = 0.1$ Ω，$L = 3.18$ mH。$|z_o|$ 在 5 Hz 以下 ≈ 0.1 Ω，在 5 Hz 到 ≈ 5 kHz 之间以 +20 dB/dec 上升，在 ≈ 5 kHz 以上趋于平坦，为 100 Ω。

推导：
- 环路增益（loop gain）$T(s) = \dfrac{T_0}{1 + s/\omega_p}$，其中 $T_0 = a_0 f = 1000$，$\omega_p = 2\pi \times 5$ Hz = 31.4 rad/s。
- 输出端为并联取样：$z_o = \dfrac{r_o}{1 + T(s)}$，因此输出导纳为
$Y_o = \dfrac{1 + T(s)}{r_o} = \dfrac{1}{r_o} + \dfrac{T_0}{r_o(1 + s/\omega_p)} = \dfrac{1}{R_2} + \dfrac{1}{R_1 + sL}$，
这恰好是 $R_2$ 与（$R_1$ 串联 $L$）并联，其中
$R_2 = r_o = 100$ Ω，$R_1 = r_o/T_0 = 0.1$ Ω，$L = r_o/(T_0\,\omega_p) = 100/(1000 \times 31.4) = 3.18$ mH。
- 等价地，$z_o = r_o\dfrac{1 + s/\omega_p}{(1+T_0) + s/\omega_p}$：零点在 5 Hz，极点在 $(1+T_0) \times 5$ Hz ≈ 5.0 kHz。
- $|z_o|$ 的数值：1 Hz 0.102 Ω；5 Hz 0.141 Ω；50 Hz 1.0 Ω；500 Hz 9.9 Ω；1 kHz 19.6 Ω；5 kHz 70.7 Ω；10 kHz 89 Ω；100 kHz 99.9 Ω。由于环路增益随频率下降，输出在 5 Hz 到 5 kHz 之间呈感性（inductive）。
