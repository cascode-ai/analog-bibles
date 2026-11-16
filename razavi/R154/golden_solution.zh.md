$|A_v| = g_mR_D \approx 13$：考虑体效应（body effect）时为 13.2，不考虑时为 12.9；若计入 $r_O$，则 ≈ 11.7。
- 允许的输出范围：从 $V_{in,CM} - V_{TH1} \approx 0.444$ V（$V_{TH1} \approx 0.756$ V，为 $V_P \approx 0.25$ V 时计入体效应的值）到 $V_{DD} = 3$ V。最大对称摆幅要求输出共模电平位于中间：$V_{DD} - R_DI_{SS}/2 = (3 + 0.444)/2 = 1.72$ V，因此 $R_D = (3 - 1.72)/0.25\ \mathrm{mA} \approx 5.1$ kΩ（不考虑体效应时为 5.0 kΩ）。等价地，$R_DI_{SS}$ = 整个单端摆幅。
- $g_m = \sqrt{2(134\ \mu)(100)(0.25\ \mathrm{mA})} = 2.59$ mS，因此 $|A_v| = g_mR_D = 2.59\ \mathrm{mS}\times 5.11\ \mathrm{k\Omega} \approx 13.2$（取 5.0 kΩ 时为 12.9）。
- 考虑沟道长度调制（channel-length modulation）时，$r_O = 1/(0.1 \times 0.25\ \mathrm{mA}) = 40$ kΩ，$|A_v| = g_m(R_D\|r_O) \approx 11.7$（11.5）。
