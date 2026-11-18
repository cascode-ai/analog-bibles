共射级：$T_0 = 104$ ns → $f_{-3\text{dB}} \approx 1.5$ MHz。共射共基级：$T_0 = 26.2$ ns → $f_{-3\text{dB}} \approx 6.1$ MHz，带宽约宽 4 倍。

- $g_m = 38.5$ mA/V，$r_\pi = 2.6\ \mathrm{k\Omega}$，$C_\pi = g_m/\omega_T - C_\mu = 11.84$ pF；$R_{\pi0} = R_S\|r_\pi = 1.71\ \mathrm{k\Omega}$。
- 共射级：$C_\pi$：1.71 kΩ → 20.3 ns；$C_\mu$：$1.71 + 3 + 0.0385(3\ \mathrm{k})(1.71\ \mathrm{k}) = 202\ \mathrm{k\Omega}$ → 80.8 ns；$C_{cs}$：3 kΩ → 3 ns；$T_0 = 104.1$ ns → 1.53 MHz（精确值：1.54 MHz）。
- 共射共基级：$Q_1$ 的负载是共基级的输入电阻 $r_\pi/(\beta+1) = 25.7\ \Omega$。$C_{\pi1}$：20.3 ns；$C_{\mu1}$：$1.71\ \mathrm{k} + 25.7 + g_m(25.7)(1.71\ \mathrm{k}) = 3.43\ \mathrm{k\Omega}$ → 1.37 ns；$C_{cs1}$：25.7 Ω → 0.03 ns；$C_{\pi2}$：$r_\pi\|1/g_m = 25.7\ \Omega$ → 0.30 ns；$C_{\mu2}$ 和 $C_{cs2}$（输出到交流地）：$R_L$ → 1.2 ns 和 3 ns；$T_0 = 26.2$ ns → 6.08 MHz（精确值：7.1 MHz）。
- 这里限制共射共基级带宽的是 $C_{\pi1}$ 与 $R_S\|r_\pi$，因此改善幅度（≈ 4×）比 MOS 电路略小。
