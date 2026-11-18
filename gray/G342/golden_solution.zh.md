$V_o(t)$ 是一个 200-Hz 方波（周期 5 ms，每个频率各持续 2.5 ms），在约 −26.9 mV（输入为 1.95 kHz）与 +26.9 mV（输入为 2.05 kHz）之间切换，即峰峰值 53.8 mV，以 0 V 为中心。每次跳变都是时间常数为 $\tau = 1/K_v \approx 34\ \mu$s 的单指数过程（10–90% 上升时间 ≈ 74 µs，≈ 0.17 ms 内建立完毕），因此波形近似为方波。

- $K_O = 0.93 \times 2\pi \times 2000 = 1.169 \times 10^4$ rad/(V·s)；$K_v = AK_DK_O = 2.55 \times 1.169\times10^4 = 2.98 \times 10^4\ \mathrm{s^{-1}}$。
- 一阶环路：$V_o/\omega_i = (1/K_O)\,K_v/(s + K_v)$，因此输入频率的阶跃使 $V_o$ 产生指数阶跃，$\tau = 1/K_v = 33.6\ \mu$s。
- 稳态：$V_o = (\omega_i - \omega_o)/K_O = \pm 2\pi(50)/1.169\times10^4 = \pm 0.0269$ V（等价地为 $\pm 50/(0.93 \times 2000)$ V）。
- 环路始终保持锁定：稳态相位误差仅为 $\Delta\omega/K_v = 0.011$ rad，且锁定范围（lock range）$\pm(\pi/2)K_v \approx \pm 7.5$ kHz 远大于 ±50 Hz。
