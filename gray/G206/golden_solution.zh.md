$T_0 \approx 2.19\ \mu$s → $f_{-3\text{dB}} \approx 73$ kHz（低频增益 −49.1）。

- 在 1 mA 下：$C_\pi + C_\mu = g_m/\omega_T = 12.24$ pF → $C_{\pi2} = 11.84$ pF，$\tau_F = (11.84 - 2)\ \mathrm{pF}/38.5\ \mathrm{mA/V} = 256$ ps。在 10 µA 下：$C_{\pi1} = 256\ \mathrm{ps}\times0.385\ \mathrm{mA/V} + 2\ \mathrm{pF} = 2.10$ pF。$r_{\pi1} = 260\ \mathrm{k\Omega}$，$r_{\pi2} = 2.6\ \mathrm{k\Omega}$。
- $C_{\pi1}$：$R = r_{\pi1}\|\dfrac{R_S + r_{\pi2}}{1 + g_{m1}r_{\pi2}} = 260\ \mathrm{k}\|51.3\ \mathrm{k} = 42.8\ \mathrm{k\Omega}$ → 89.9 ns。
- $C_{\mu1}$（$Q_1$ 基极到输出）：$R = R_A + R_L + G_mR_LR_A$，其中 $R_A = R_S\|R_i = 100\ \mathrm{k}\|522.6\ \mathrm{k} = 83.9\ \mathrm{k\Omega}$，$G_m = \beta(\beta+2)/R_i = 19.5$ mA/V → $5.0$ MΩ → 2.00 µs。
- $C_{cs1}$、$C_{cs2}$（输出端）：$R_L$ → 各 3 ns。
- $C_{\pi2}$：$r_{\pi2}\|$（看进 $Q_1$ 发射极的电阻 $(R_S + r_{\pi1})/(\beta+1) = 3.56\ \mathrm{k\Omega}$）$= 1.50\ \mathrm{k\Omega}$ → 17.8 ns。
- $C_{\mu2}$（$Q_2$ 基极到输出）：≈ 177 kΩ → 70.7 ns。
- $T_0 = 89.9 + 2000.7 + 3 + 17.8 + 70.7 + 3 = 2185$ ns → $f_{-3\text{dB}} = 1/(2\pi T_0) = 72.8$ kHz（精确分析：73.3 kHz）。被整个达林顿增益密勒倍增的 $C_{\mu1}$ 占主导。
