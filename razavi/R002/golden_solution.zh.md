NMOS：$g_m \approx 3.66$ mS（≈ 1/273 Ω），$r_O = 20$ kΩ，$g_m r_O \approx 73$。
PMOS：$g_m \approx 1.96$ mS（≈ 1/511 Ω），$r_O = 10$ kΩ，$g_m r_O \approx 19.6$。

- $g_m = \sqrt{2\mu C_{ox}(W/L)|I_D|}$：NMOS 为 $\sqrt{2(134\times10^{-6})(100)(0.5\times10^{-3})} = 3.66$ mS，对应的过驱动电压（overdrive voltage）为 0.27 V；PMOS 为 $\sqrt{2(38.4\times10^{-6})(100)(0.5\times10^{-3})} = 1.96$ mS，过驱动电压为 0.51 V。
- $r_O \approx 1/(\lambda |I_D|)$：NMOS 为 $1/(0.1 \times 0.5\ \mathrm{mA}) = 20$ kΩ；PMOS 为 $1/(0.2 \times 0.5\ \mathrm{mA}) = 10$ kΩ。
- 本征增益：$3.66\ \mathrm{mS} \times 20\ \mathrm{k\Omega} \approx 73.3$；$1.96\ \mathrm{mS} \times 10\ \mathrm{k\Omega} \approx 19.6$。NMOS 的本征增益约为 PMOS 的 3.7 倍，原因是其迁移率（mobility）更高、λ 更小。
