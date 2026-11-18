$L = 3$。

- 过采样率（oversampling ratio）$M = f_s/(2f_B) = 10\ \mathrm{MHz}/200\ \mathrm{kHz} = 50$。
- $L$ 阶环路的带内噪声：$n_0 = \dfrac{\Delta}{\sqrt{12}}\dfrac{\pi^L}{\sqrt{2L+1}}\left(\dfrac{1}{M}\right)^{L+1/2}$。
- 取 $\Delta = V_{REF}/2$，比值 $n_0 / [V_{REF}/(2^{16}\sqrt{12})] = 2^{15}\,\dfrac{\pi^L}{\sqrt{2L+1}}M^{-(L+1/2)}$：
  - $L = 1$：168（不满足）；
  - $L = 2$：8.2（不满足，约差 18 dB）；
  - $L = 3$：0.43（满足，裕量 ≈ 7 dB）。
- 等价地，$L$ = 2 时峰值 SQNR ≈ 80 dB，$L$ = 3 时 ≈ 105 dB，而 16 位需要 98 dB。
