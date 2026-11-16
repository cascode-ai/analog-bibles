忽略体效应（body effect）时，CMRR ≈ $(1 + 2g_{m1,2}r_{O5})\,g_{m3,4}(r_{O1,2}\|r_{O3,4}) \approx 1.9\times10^3$（≈ 66 dB）；若在尾电流项中计入 $M_1$、$M_2$ 的体效应，则 ≈ $2.3\times10^3$（≈ 67 dB）。

- $A_{DM} \approx g_{m1}(r_{O1}\|r_{O3})$，$A_{CM} \approx -\dfrac{1}{1+2g_{m1}R_{SS}}\cdot\dfrac{g_{m1}}{g_{m3}}$，其中 $R_{SS} = r_{O5}$。
- $g_{m1} = \sqrt{2(134\ \mu)(100)(0.25\ \mathrm{m})} = 2.59$ mS；$g_{m3} = \sqrt{2(38.4\ \mu)(100)(0.25\ \mathrm{m})} = 1.39$ mS；$r_{O1} = 40$ kΩ，$r_{O3} = 20$ kΩ → $r_{O1}\|r_{O3} = 13.3$ kΩ；$r_{O5} = 1/(0.1\times0.5\ \mathrm{mA}) = 20$ kΩ。
- $1 + 2g_{m1}r_{O5} = 104.5$；$g_{m3}(r_{O1}\|r_{O3}) = 18.5$；CMRR ≈ 1.93×10³（65.7 dB）。
- 计入体效应（$V_P \approx 0.50$ V，$\eta = \gamma/(2\sqrt{2|\phi_F|+V_P}) \approx 0.19$）：$1 + 2(g_{m1}+g_{mb1})r_{O5} = 124$ → CMRR ≈ 2.3×10³（67.2 dB）。
- 精确的节点分析（计入所有 $r_O$ 和体效应）：$A_{DM} \approx 33.9$，$A_{CM} \approx -0.0144$，CMRR ≈ 2.36×10³（67.4 dB）；不计体效应时为 1.99×10³（66.0 dB）。
- 若在偏置计算中也保留 $(1+\lambda V_{DS})$ 因子（$g_m = 2I_D/V_{ov}$）：$V_{ov1} \approx 0.180$ V，$g_{m1} \approx 2.77$ mS，$g_{m3} \approx 1.52$ mS，计入体效应时 CMRR ≈ 2.76×10³（68.8 dB），不计时为 2.33×10³（67.3 dB）。这需要用 PMOS 的阈值电压（threshold voltage）来求 $V_{SD3}$，但 $|V_{THP}|$ 在 0.7–0.9 V 之间变化对结果的影响小于 0.1 dB。
