总增益 ≈ 34.5 × 13.1 ≈ 450。每个输出端可以从 $V_{OD7} \approx 0.27$ V 摆动到 $V_{DD} - |V_{OD5}| \approx 2.49$ V，即每个输出端的峰峰值摆幅 ≈ 2.2 V，差分峰峰值摆幅 ≈ 4.4 V。

- 第一级（每侧 0.5 mA）：$g_{m1} = \sqrt{2(134\ \mu)(200)(0.5\ \mathrm{m})} = 5.18$ mS，$r_{O1} = 20$ kΩ，$r_{O3} = 10$ kΩ → $A_1 = g_{m1}(r_{O1}\|r_{O3}) = 5.18\ \mathrm{mS} \times 6.67\ \mathrm{k\Omega} = 34.5$。
- 第二级（每侧 1 mA）：$g_{m5} = \sqrt{2(38.4\ \mu)(200)(1\ \mathrm{m})} = 3.92$ mS，$r_{O5} = 1/(0.2 \times 1\ \mathrm{mA}) = 5$ kΩ，$r_{O7} = 1/(0.1 \times 1\ \mathrm{mA}) = 10$ kΩ → $A_2 = 3.92\ \mathrm{mS} \times 3.33\ \mathrm{k\Omega} = 13.1$。
- $A_v = A_1A_2 \approx 451$。
- 摆幅：$V_{OD7} = \sqrt{2(1\ \mathrm{m})/(134\ \mu \cdot 200)} = 0.273$ V；$|V_{OD5}| = 0.510$ V → 输出范围为 0.273 V 至 2.490 V = 每个输出端峰峰值 2.22 V，差分峰峰值 4.43 V。
