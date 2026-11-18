$F \approx 42$–$43$，即 NF ≈ 16.3 dB（若忽略负载电阻噪声则约为 16.1 dB）。

- 偏置：尾电流 $\approx (10 - 0.7)/(100\text{ k} + 250) \approx 93\ \mu$A，因此每个器件 $I_C \approx 46\ \mu$A；$g_m = 1.77$ mS，$1/2g_m = 283\ \Omega$，$I_B = 0.46\ \mu$A。
- $Q_1$ 基极处的等效输入噪声发生器：每半边贡献 $4kT(r_b + 1/2g_m + R_E) = 4kT(983\ \Omega)$（另有可忽略的 $2qI_BR_E^2$），差分对使其加倍：$4kT(1966\ \Omega)$；两个 20-kΩ 负载经差模增益（differential gain）≈ $R_C/(1/g_m + R_E) = 18.8$ 折算到输入端，增加 $4kT(2\times20\text{ k}/18.8^2) = 4kT(114\ \Omega)$。总和 $\overline{v_i^2} \approx 4kT(2.08$–$2.1\text{ k}\Omega) \approx 3.5\times10^{-17}$ V²/Hz。$\overline{i_i^2} = 2qI_B \approx 1.47\times10^{-25}$ A²/Hz。
- $F = 1 + \dfrac{\overline{v_i^2} + \overline{i_i^2}R_S^2}{4kTR_S} = 1 + \dfrac{2100 + 0.02}{50} \approx 43$ → 16.3 dB。在 50 Ω 时电流发生器可以忽略。
