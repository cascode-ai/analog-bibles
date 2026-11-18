$I_C = 2$ mA 时：$g_m = 76.9$ mA/V，$r_\pi = 1.3$ kΩ，$r_o = 20$ kΩ，$C_\pi \approx 22.6$ pF（$C_b = 19.2$ pF + $C_{je} \approx 3.4$ pF），$C_\mu = 0.6$ pF，$C_{cs} = 2$ pF，$r_b = 150\ \Omega$，$r_c = 150\ \Omega$（$r_\mu$ 和 $r_{ex}$ 未给出：$r_\mu$ 视为开路，$r_{ex} = 0$）。

电路：B – $r_b$ – B′；B′ 与 E 之间接 $r_\pi \parallel C_\pi$；B′ 与内部集电极 C′ 之间接 $C_\mu$；C′ 与 E 之间接 $g_mv_1$ 和 $r_o$；C′ 与 C 之间接 $r_c$；C′ 与衬底（交流地）之间接 $C_{cs}$。

- 在 50 MHz 处增益幅值（9）位于 −20 dB/decade 的下降段上，因此 1 mA 时 $f_T \approx 9\times50 = 450$ MHz（精确的单极点公式给出 452 MHz）。
- $\tau_T = 1/(2\pi f_T) = 353.7$ ps $= \tau_F + (C_{je}+C_\mu)/g_m$，其中 $1/g_m = 26\ \Omega$：$C_{je}+C_\mu = (353.7 - 250)\ \mathrm{ps}/26\ \Omega = 3.99$ pF → $C_{je} = 3.39$ pF。
- 2 mA 时：$g_m = 2/26 = 76.9$ mA/V；$r_\pi = \beta_0/g_m = 1.3$ kΩ；$r_o = V_A/I_C = 20$ kΩ；$C_b = \tau_Fg_m = 19.2$ pF；$C_\pi = 19.2 + 3.4 = 22.6$ pF。（由此得到的 $f_T$ ≈ 527 MHz。）
