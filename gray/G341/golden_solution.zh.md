捕获范围 ≈ ±135 rad/s（≈ ±21.5 Hz），以 10⁵ rad/s 的中心频率为中心，即输入频率约为 99,865 至 100,135 rad/s（总宽度 ≈ 270 rad/s）。这远小于锁定范围（lock range）$\pm(\pi/2)K_v = \pm1571$ rad/s。

- 判据：$\Delta\omega < \dfrac{\pi}{2}K_DK_O\,|F(j\Delta\omega)| = 1570.8\,|F(j\Delta\omega)|$ rad/s，其中 $\Delta\omega = |\omega_i - \omega_{osc}|$。
- $|F(j\Delta\omega)| = \sqrt{1 + (\Delta\omega/116.5)^2}\,/\sqrt{1 + (\Delta\omega/7.61)^2}$。在 $\Delta\omega = 135$ rad/s 处：$\sqrt{1 + 1.348}/\sqrt{1 + 315.8} = 1.532/17.80 = 0.0861$，而 $1570.8 \times 0.0861 = 135$ rad/s，因此边界位于 $\Delta\omega \approx 135$ rad/s。
- 作为比较，若采用高频渐近值 $|F| \to \omega_1/\omega_2 = 0.0653$，得到较粗略的估计 ≈ ±103 rad/s。
