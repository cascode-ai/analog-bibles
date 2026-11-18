$g_m = 19.2$ mA/V，$r_\pi = 10.4\ \mathrm{k\Omega}$，$C_\pi = 5.82$ pF。

(a) 零值时间常数：$R_{\pi0} = (R_S + r_b)\|r_\pi = 3.51\ \mathrm{k\Omega}$ → 20.4 ns；$R_{\mu0} = R_{\pi0} + R_L + g_mR_LR_{\pi0} = 209\ \mathrm{k\Omega}$ → 62.7 ns；$T_0 = 83.2$ ns → $|p_1| \approx 1.20\times10^7$ rad/s（1.91 MHz）。
短路时间常数：$C_\pi$ 短路时 $C_\mu$ 看到 $R_L$ → 0.9 ns；$C_\mu$ 短路时 $C_\pi$ 看到 $(R_S + r_b)\|r_\pi\|R_L\|(1/g_m) = 50.4\ \Omega$ → 0.293 ns；$|p_2| \approx 1/0.9\ \mathrm{ns} + 1/0.293\ \mathrm{ns} = 4.52\times10^9$ rad/s（720 MHz）。

(b) 线性模型的仿真：$p_1$ 位于 1.919 MHz，$p_2$ 位于 717.6 MHz（另有一个位于 $g_m/C_\mu$ 即 10.2 GHz 的右半平面零点）：两个估算值的误差都约在 0.5% 以内。
