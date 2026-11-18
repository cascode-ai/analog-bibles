≈ 19 µV rms（点噪声谱密度 ≈ $1.8\times10^{-14}$ V²/Hz × 20 kHz ≈ $3.6\times10^{-10}$ V²）。该电路不适用于低源阻抗：噪声由电路自身的 100-kΩ 电阻及流过该电阻的基极电流散粒噪声（shot noise）决定，比采用发射极负反馈（emitter degeneration）或小集电极电流的方案差约 30 倍。

- $\overline{v_i^2}/\Delta f \approx 4kT(100\text{ k} + r_b + 1/2g_m) + 2qI_B(100.1\text{ k})^2 = 1.66\times10^{-15} + 1.60\times10^{-14} = 1.77\times10^{-14}$ V²/Hz（$I_B = 5\ \mu$A）；计入折算的集电极噪声和负载噪声后，精确计算得 $1.79\times10^{-14}$。
- 对于零阻抗信号源，只有 $\overline{v_i^2}$ 起作用：$\sqrt{1.79\times10^{-14}\times2\times10^4} \approx 18.9\ \mu$V rms。
