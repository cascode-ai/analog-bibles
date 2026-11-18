噪声系数减小：从 50 Ω 时的约 16.3 dB 降至 200 kΩ 时的约 4.4–4.5 dB。

- $Q_1$ 基极处的噪声发生器：$\overline{v_i^2} \approx 4kT(2.1\text{ k}\Omega) \approx 3.5\times10^{-17}$ V²/Hz，$\overline{i_i^2} = 2qI_B \approx 1.47\times10^{-25}$ A²/Hz（$I_C \approx 46\ \mu$A，$I_B \approx 0.46\ \mu$A）。
- 在 200 kΩ 时：$F = 1 + \dfrac{\overline{v_i^2}}{4kTR_S} + \dfrac{\overline{i_i^2}R_S}{4kT} = 1 + 0.0105 + 1.77 \approx 2.8$ → 4.5 dB。
- 最佳源电阻（source resistance）为 $\sqrt{\overline{v_i^2}/\overline{i_i^2}} \approx 15$ kΩ（$F_{opt} \approx 1.3$，≈ 1.1 dB）。200 kΩ 高于最佳值，因此此时基极电流噪声占主导，F 已开始重新上升，但仍远低于 50 Ω 时的值。
