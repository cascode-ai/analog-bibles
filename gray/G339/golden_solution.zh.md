环路带宽 $K_v = K_OK_DA = 10^3 \times 1 \times 1 = 1000\ \mathrm{s^{-1}}$（1000 rad/s，约 159 Hz）。单极点滤波器：$\omega_1 = 2K_v = 2000$ rad/s，此时闭环极点位于 $s = -1000 \pm j1000$ rad/s。

- 一阶环路：$V_o/\omega_i = (1/K_O)\,K_v/(s + K_v)$，在 $-K_v$ 处有单个极点；对频率调制而言，带宽为 $K_v$。10⁵ rad/s 的中心频率不影响结果。
- 二阶环路：$V_o/\omega_i = (1/K_O)/[1 + s/K_v + s^2/(\omega_1K_v)]$，因此 $\omega_n = \sqrt{K_v\omega_1}$，$\zeta = \tfrac12\sqrt{\omega_1/K_v}$。
- 极点位于 45° 射线上意味着 $\zeta = 1/\sqrt2$ → $\omega_1/K_v = 2$ → $\omega_1 = 2000$ rad/s（例如用 $RC = 0.5$ ms 的 RC 低通滤波器实现）。此时 $\omega_n = 1414$ rad/s，这也是该最大平坦响应的 −3 dB 带宽，极点位于 $-\omega_n/\sqrt2 \pm j\omega_n/\sqrt2 = -1000 \pm j1000$ rad/s。
