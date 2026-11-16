$V_{in} \approx 2.74$ V，此为计入体效应（body effect）的结果；不计体效应时为 2.47 V。

- $M_3$ 向输出节点送入 0.5 mA，$M_1$ 向源极节点送入 0.5 mA。由基尔霍夫电流定律（KCL）：$0.5\ \mathrm{mA} = V_{out}/3\mathrm{k} + (V_{out} - V_S)/3\mathrm{k}$，$V_S/3\mathrm{k} = 0.5\ \mathrm{mA} + (V_{out} - V_S)/3\mathrm{k}$ → $V_{out} = V_S = 1.5$ V，$R_F$ 中没有电流。
- $V_{SB1} = 1.5$ V：$V_{TH1} = 0.7 + 0.45(\sqrt{2.4} - \sqrt{0.9}) = 0.970$ V；过驱动电压（overdrive voltage）$\sqrt{2(0.5\ \mathrm{mA})/(134\ \mu \times 100)} = 0.273$ V；$V_{GS1} = 1.243$ V。
- $V_{in} = 1.5 + 1.243 = 2.743$ V。
- 注：$V_X = 3 - |V_{GS3}| = 3 - 1.31 = 1.69$ V，因此 $V_{DS1} \approx 0.19$ V，略低于 0.27 V 的过驱动电压：$M_1$ 实际上处于线性区（triode region）的边缘；这里仍保留题目给定的饱和假设。
