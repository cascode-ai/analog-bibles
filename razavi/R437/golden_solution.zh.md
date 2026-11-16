约束条件：总电流为 6 mW/3 V = 2 mA；由于 $I_{SS} = 0.5$ mA，输出级得到 1.5 mA，即每侧 0.75 mA（忽略偏置网络）。4 V 的差分峰峰值摆幅意味着每个输出端的峰峰值为 2 V，因此 $|V_{OD5}| + V_{OD7} \le 3 - 2 = 1$ V。一种自洽的设计如下：
- 输出级：$|V_{OD5,6}| = 0.5$ V → $(W/L)_{5,6} = 2(0.75\ \mathrm{m})/(38.4\ \mu \cdot 0.25) \approx 156$；$V_{OD7,8} = 0.5$ V → $(W/L)_{7,8} \approx 45$。$V_{b2} = 0.7 + 0.5 = 1.2$ V。
- 第一级的输出共模电平（common-mode level）必须等于 $V_{DD} - |V_{GS5}| = 3 - 1.3 = 1.7$ V。
- 第一级（每侧 0.25 mA）：$M_3$/$M_4$ 取 $|V_{OD}| = 0.4$ V → $(W/L)_{3,4} \approx 81$，$V_{b1} = 3 - 1.2 = 1.8$ V；$M_1$/$M_2$ 取 $V_{OD} = 0.2$ V → $(W/L)_{1,2} \approx 93$；提供尾电流（tail current）的器件取 0.3 V 的过驱动电压（overdrive voltage），电流为 0.5 mA，$W/L \approx 83$。输入共模电平必须低于 $V_X + V_{TH1}$（≈ 2.4 V 或更高）。
- 所得增益：$A_1 = g_{m1}(r_{O1}\|r_{O3}) = 2.5\ \mathrm{mS} \times (40\ \mathrm{k}\|20\ \mathrm{k}) = 33$；$A_2 = g_{m5}(r_{O5}\|r_{O7}) = 3\ \mathrm{mS} \times (6.67\ \mathrm{k}\|13.3\ \mathrm{k}) = 13.3$；$A_v \approx 440$。
- 实际电路中，第一级还需要共模反馈（common-mode feedback，CMFB）把 X 和 Y 稳定在 1.7 V。
