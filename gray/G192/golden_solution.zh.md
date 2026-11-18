$z_o(s) = \dfrac{1}{g_m}\cdot\dfrac{1 + sR_SC_{gs}}{1 + sC_{gs}/g_m}$：一个感性（inductive）阻抗。

- 低频：$z_o = 1/g_m = 3.33\ \mathrm{k\Omega}$（70.5 dBΩ）。
- 零点位于 $\omega_z = 1/(R_SC_{gs})$，即 $f_z = 0.159/C_{gs}[\mathrm{pF}]$ MHz；极点位于 $\omega_p = g_m/C_{gs}$（$\approx \omega_T$），即 $f_p = 47.7/C_{gs}[\mathrm{pF}]$ MHz。二者之比为 $g_mR_S = 300$。
- 在 $f_z$ 与 $f_p$ 之间，$|z_o|$ 以 +20 dB/decade 上升（电感 $L \approx R_SC_{gs}/g_m$，例如 $C_{gs} = 0.1$ pF 时为 0.33 mH）；在 $f_p$ 以上平坦，为 $R_S = 1$ MΩ（120 dBΩ）。
- 模型元件：$R_1 = 1/(g_m - 1/R_S) = 3.34\ \mathrm{k\Omega}$，$R_2 = R_S = 1$ MΩ，$L = R_SC_{gs}/(g_m - 1/R_S) = 3.34\times10^{9}\ \mathrm{\Omega\cdot s/F}\times C_{gs}$。
- 例：$C_{gs} = 0.1$ pF 时 $f_z = 1.6$ MHz，$f_p = 477$ MHz，因此曲线在 ≈ 1 MHz 以下平坦于 3.33 kΩ，在 1.6–480 MHz 之间上升，之后直到 10 GHz 都平坦于 1 MΩ。
