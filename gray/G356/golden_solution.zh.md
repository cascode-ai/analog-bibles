1 kHz 内约为 63 µV rms（点频谱密度 ≈ $3.96\times10^{-12}$ V²/Hz）。

- 该级的噪声发生器：$\overline{v^2} = 2\cdot4kT(r_b + 1/2g_m) = 8.8\times10^{-16}$ V²/Hz；每个基极处 $\overline{i^2} = 2qI_B = 3.2\times10^{-29}$ A²/Hz（$I_C = 0.5\ \mu$A，$I_B = 0.1$ nA）。
- 折算到 $v_s$ 的总噪声：两个源电阻的热噪声（thermal noise），$2\times4kT R_S = 3.32\times10^{-12}$；每个基极的电流噪声流过各自的 $R_S$，$2\times\overline{i^2}R_S^2 = 2\times3.2\times10^{-13} = 6.4\times10^{-13}$；再加上 $\overline{v^2} = 8.8\times10^{-16}$（可忽略）。总和为 $3.96\times10^{-12}$ V²/Hz。
- 在 1 kHz 内：$3.96\times10^{-9}$ V² → 62.9 µV rms。源电阻自身的热噪声占主导（≈ 84%）。
