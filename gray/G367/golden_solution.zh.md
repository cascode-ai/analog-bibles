噪声系数减小：从 50 Ω 时的约 16.3 dB 降至 100 Ω 时的约 13.4 dB。

- 该电路的等效输入噪声电压（equivalent input noise voltage）对应约 2.1 kΩ 的噪声电阻（$\overline{v_i^2} \approx 4kT\cdot2.1$ kΩ：对于 $I_C \approx 46\ \mu$A 的差分对，为 $r_b + 1/2g_m + R_E$ 的两倍，再加上折算到输入端的负载噪声），而在如此低的 $R_S$ 下，电流发生器（$2qI_B$，$I_B \approx 0.46\ \mu$A）可以忽略。
- 于是 $F - 1 \approx R_{eq}/R_S$：$R_S$ 加倍使超额噪声比减半：$F \approx 1 + 2100/100 = 22$（13.4 dB），而不是 43（16.3 dB）。信号源自身的噪声与 $R_S$ 成正比增大，而放大器的主要噪声（电压发生器）不变。
- 最佳源电阻为 $\sqrt{\overline{v_i^2}/\overline{i_i^2}} \approx 15$ kΩ，因此从 50 Ω 向该值的任何增大都会降低 F。
