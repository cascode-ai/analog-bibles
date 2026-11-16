约为 5.1 mV rms；输出功率谱密度（PSD）≈ 5.1×10⁻¹³ V²/Hz，即 ≈ 715 nV/√Hz，且在频带内平坦。

- $g_m = \sqrt{2(134\ \mu)(100)(0.05\ \mathrm{m})} = 1.158$ mS；$r_O = 1/(\lambda I_D) = 1/(0.1 \times 0.05\ \mathrm{m}) = 200$ kΩ。
- 负载为理想电流源时，噪声电流只看到 $r_O$：$\overline{V_{n,out}^2} = 4kT\gamma g_mr_O^2 = 1.104\times10^{-20}\times1.158\times10^{-3}\times(2\times10^5)^2 = 5.11\times10^{-13}\ \mathrm{V^2/Hz}$。
- 在 50 MHz 内：$2.56\times10^{-5}\ \mathrm{V^2}$ → ≈ 5.06 mV rms。（若 γ = 1，则为 6.2 mV。）
- 这是单个晶体管在该电流下所能产生的最大输出噪声；$r_O$ 本身不是噪声源。
