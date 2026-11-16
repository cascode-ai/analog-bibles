$V_{in,CM,min} \approx 1.23$ V，$V_{in,CM,max} \approx 2.32$ V；不考虑体效应（body effect）时为 1.17 V 和 2.09 V。
- 过驱动电压（overdrive voltage）：$M_1$ 在 0.25 mA 下为 $\sqrt{2(0.25\ \mathrm{m})/(134\ \mu\times100)} = 0.193$ V；尾电流管在 0.5 mA 下为 0.273 V；$M_3$ 在 0.25 mA 下为 $\sqrt{2(0.25\ \mathrm{m})/(38.4\ \mu\times20)} = 0.807$ V，因此 $|V_{GS3}| = 1.607$ V。
- 最小值：尾电流管需要 $V_P \ge 0.273$ V；$V_{TH1}(V_{SB} = 0.273) = 0.761$ V；$V_{in,CM} \ge 0.273 + 0.193 + 0.761 = 1.227$ V。
- 最大值：$M_1$ 处于饱和区（saturation region）要求 $V_{in,CM} \le V_X + V_{TH1}$，其中 $V_X = V_{DD} - |V_{GS3}| = 1.393$ V。此时 $V_P = V_X - 0.193 = 1.20$ V，$V_{TH1} = 0.7 + 0.45(\sqrt{2.1} - \sqrt{0.9}) = 0.925$ V，因此 $V_{in,CM} \le 2.318$ V。
