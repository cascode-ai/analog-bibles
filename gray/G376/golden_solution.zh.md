≈ $4.6$–$4.8\times10^{-19}$ A²，即 ≈ 0.68–0.69 nA rms；白噪声贡献 ≈ $3.3\times10^{-19}$ A²，基极电流闪烁噪声贡献 ≈ $1.3\times10^{-19}$ A²。

- 第一个晶体管：$I_B = 5\ \mu$A，$g_m = 38.5$ mS；$\overline{i_{ia}^2} = 2qI_B(1 + f_a/f) + 2qI_C/\beta^2 = 1.6\times10^{-24}(1 + 5000/f) + 8\times10^{-27}$ A²/Hz；$\overline{v_{ia}^2} \approx 4kT(r_b + 1/2g_m) = 4kT(313\ \Omega)$。
- 并联反馈：$\overline{i_i^2} = \overline{i_{ia}^2} + \overline{v_{ia}^2}/R_F^2 + 4kT/R_F = 1.6\times10^{-24} + 8\times10^{-27} + 5.2\times10^{-26} + 1.66\times10^{-24} + 8\times10^{-21}/f$ A²/Hz。
- 在 0.01 Hz–100 kHz 上积分：白噪声 $3.32\times10^{-24}\times10^5 = 3.3\times10^{-19}$；闪烁噪声 $8\times10^{-21}\ln(10^7) = 1.29\times10^{-19}$；总和 $4.6\times10^{-19}$ A² → 0.68 nA rms（精确的节点分析给出 0.69 nA）。后级可以忽略（被 β² 或第一级增益除）。
