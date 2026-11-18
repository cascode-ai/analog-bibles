$T_0 \approx 215$ ns → $f_{-3\text{dB}} \approx 0.74$ MHz（低频增益 −48.7）。

- $\tau_F = 256$ ps；$C_{\pi1} = 2.10$ pF，$C_{\pi2} = 11.84$ pF；$r_{\pi1} = 260\ \mathrm{k\Omega}$，$r_{\pi2} = 2.6\ \mathrm{k\Omega}$。
- $C_{\pi1}$：$r_{\pi1}\|(R_S + r_{\pi2})/(1 + g_{m1}r_{\pi2}) = 42.8\ \mathrm{k\Omega}$ → 89.9 ns。
- $C_{\mu1}$（由于集电极接交流地，为 $Q_1$ 基极到地）：$R_S\|R_i = 100\ \mathrm{k}\|522.6\ \mathrm{k} = 83.9\ \mathrm{k\Omega}$ → 33.6 ns。（$C_{cs1}$ 被短路。）
- $C_{\pi2}$：$1.50\ \mathrm{k\Omega}$ → 17.8 ns。
- $C_{\mu2}$：$R_A + R_L + g_{m2}R_LR_A$，其中 $R_A = 1.50\ \mathrm{k\Omega}$ → 178 kΩ → 71.2 ns。
- $C_{cs2}$：$R_L$ → 3 ns。
- $T_0 = 215.5$ ns → 0.74 MHz（精确分析：≈ 1.0 MHz，极点为复数）。由于消除了对 $C_{\mu1}$ 的密勒倍增（Miller multiplication），该级比达林顿级快约 10 倍。
