$\dfrac{v_o}{v_i}(s) = 0.977\,\dfrac{1 + s/2.56\times10^7}{1 + s/2.36\times10^7}$（s 的单位为 rad/s）：低频增益 0.977（−0.20 dB），极点位于 3.75 MHz，零点位于 4.08 MHz；高频增益为 $R_E/(R_E + R_S + r_b) = 0.899$（−0.93 dB）。

- $g_m = 0.3/26 = 11.5$ mA/V，$r_\pi = \beta/g_m = 4.33\ \mathrm{k\Omega}$，$C_\pi = g_m/\omega_T = 459$ pF（因为 $C_\mu = 0$）。$R_S' = R_S + r_b = 450\ \Omega$。
- 低频增益 $\dfrac{g_mR_E + R_E/r_\pi}{1 + g_mR_E + (R_S' + R_E)/r_\pi} = \dfrac{46.15 + 0.92}{1 + 46.15 + 1.03} = 0.977$。
- 零点：$z_1 = -(g_m + 1/r_\pi)/C_\pi = -2.56\times10^7$ rad/s（4.08 MHz）。
- 极点：$p_1 = -1/(R_1C_\pi)$，其中 $R_1 = r_\pi\|[(R_S' + R_E)/(1 + g_mR_E)] = 4.33\ \mathrm{k\Omega}\|94.4\ \Omega = 92.4\ \Omega$ → $p_1 = -2.36\times10^7$ rad/s（3.75 MHz）。
- 草图：在 ≈ 1 MHz 以下平坦，为 −0.20 dB（1 MHz 处 −0.25 dB），在 ≈ 2 到 10 MHz 之间逐步下降（3 MHz 处 −0.47 dB，10 MHz 处 −0.83 dB），到 20 MHz 处为 −0.90 dB，趋近 −0.93 dB。总变化仅 ≈ 0.7 dB；相位在 4 MHz 附近仅下凹到 ≈ −2.4°。由于极点与零点几乎重合，在此范围内不存在真正的 −3-dB 频率。
