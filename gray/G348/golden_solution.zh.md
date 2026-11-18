$\overline{v_i^2}/\Delta f = 4kT\left(r_b + \frac{1}{2g_m}\right) + \frac{4kT}{g_m^2R_L} = 4kT(100 + 1000 + 400)\ \Omega \approx 2.5\times10^{-17}$ V²/Hz（≈ 5 nV/√Hz；不计负载项时为 $1.8\times10^{-17}$）；$\overline{i_i^2}/\Delta f = 2q\left(I_B + \frac{I_C}{\beta^2}\right) \approx 8.5\times10^{-26}$ A²/Hz（≈ 0.29 pA/√Hz）。

- $g_m = 0.5$ mS（$1/2g_m = 1$ kΩ），$r_\pi = 100$ kΩ（它决定了输入电阻），$I_B = 0.26\ \mu$A。
- 增益较低（$g_mR_L = 5$），使 10-kΩ 负载的噪声不可忽略：$4kT R_L/25 = 4kT\cdot400\ \Omega$。
- $\overline{i_i^2} = 2q(0.26\ \mu\text{A} + 5.2\ \text{nA}) = 8.5\times10^{-26}$ A²/Hz（负载项 $4kT/(\beta^2R_L)$ 可忽略）。
