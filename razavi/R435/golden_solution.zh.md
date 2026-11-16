$V_{X,CM} = V_{Y,CM} = V_{DD} - |V_{GS5}| \approx 1.69$ V。于是输入共模电平必须满足 $V_{in,CM} \le V_X + V_{TH1} \approx 2.66$ V；这里计入了体效应（body effect），$V_{TH1} \approx 0.97$ V；不计体效应时，上限 ≈ 2.39 V。

- $|V_{GS5}| = 0.8 + \sqrt{2(1\ \mathrm{mA})/(38.4\ \mu \cdot 200)} = 0.8 + 0.510 = 1.310$ V → $V_X = 1.690$ V。
- $M_1$ 饱和要求 $V_X \ge V_{in,CM} - V_{TH1}$。在这一极限下，源极节点电压为 $V_P = V_X - V_{OD1}$，其中 $V_{OD1} = \sqrt{2(0.5\ \mathrm{m})/(134\ \mu \cdot 200)} = 0.193$ V，因此 $V_P = 1.497$ V，$V_{TH1} = 0.7 + 0.45(\sqrt{0.9 + 1.497} - \sqrt{0.9}) = 0.970$ V → $V_{in,CM,max} \approx 2.66$ V。
- 因此，由第二级 PMOS 器件确定的第一级输出共模电平，把输入共模范围的上限限定在比 $V_X$ 高一个阈值电压（threshold voltage）处。
