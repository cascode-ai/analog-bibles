增益 ≈ 24.4；$V_{in,CM,min} \approx 1.46$ V，不考虑体效应（body effect）时为 1.37 V；每个输出可以从 0.67 V 摆动到 2.28 V，单端 ≈ 1.6 V pp（差分 ≈ 3.2 V pp）。
- $g_{m1} = 3.66$ mS，$r_{O1} = 1/(0.1\times0.5\ \mathrm{m}) = 20$ kΩ，$r_{O3} = 1/(0.2\times0.5\ \mathrm{m}) = 10$ kΩ：$|A_v| = g_{m1}(r_{O1}\|r_{O3}) = 3.66\ \mathrm{mS}\times 6.67\ \mathrm{k\Omega} = 24.4$。
- 最小共模电平：$0.4 + 0.273 + V_{TH1}(0.4\ \mathrm{V}) = 0.4 + 0.273 + 0.786 = 1.46$ V。
- 输出下限：$V_{in,CM} - V_{TH1} = 0.4 + 0.273 = 0.673$ V。上限：$M_3$ 保持在饱和区（saturation region），即 $V_{DD} - |V_{GS3} - V_{TH3}|$，其中 $|V_{GS3} - V_{TH3}| = \sqrt{2(0.5\ \mathrm{m})/(38.4\ \mu\times 50)} = 0.722$ V，即 2.278 V。每个输出的摆幅为 2.278 − 0.673 = 1.61 V，差分为 3.21 V pp；输出共模电平必须保持在 1.48 V 附近，例如借助共模反馈（common-mode feedback）。
