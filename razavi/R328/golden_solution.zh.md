均方根（rms）值约为 15.6 μV：输入参考功率谱密度 ≈ 2.44×10⁻¹⁸ V²/Hz（≈ 1.56 nV/√Hz），在整个频带内是平坦的。

- $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D} = \sqrt{2(134\ \mu)(100)(1\ \mathrm{m})} = 5.18$ mS。
- $\overline{V_{n,in}^2} = 4kT\left(\dfrac{\gamma}{g_m} + \dfrac{1}{g_m^2R_D}\right) = 1.656\times10^{-20}\,(128.8 + 18.7) = 2.44\times10^{-18}\ \mathrm{V^2/Hz}$（M1 贡献 ≈ 87%，$R_D$ 贡献 ≈ 13%）。
- 在 0–100 MHz 内积分：$2.44\times10^{-18}\times10^{8} = 2.44\times10^{-10}\ \mathrm{V^2}$，即 $\sqrt{\cdot} \approx 15.6\ \mu\mathrm{V_{rms}}$。
- $r_O$（若计入）是无噪声的，它使增益和输出噪声按相同比例变化，因此不改变输入参考值。（若取 γ = 1，结果将 ≈ 18.7 μV rms。）
