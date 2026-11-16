关键约束：$I_{SS} \approx 2$ mA（6 mW / 3 V，忽略偏置网络），每条支路 1 mA；输出范围 $[V_{OD,SS} + V_{OD1} + V_{OD3},\ V_{DD} - |V_{OD8}| - |V_{OD6}|]$ 必须覆盖 2.4 V，因此五个过驱动电压（overdrive voltage）之和必须 ≤ 0.6 V。一种自洽的设计：
- 过驱动电压：尾电流管（tail transistor）0.15 V，$V_{OD1} = V_{OD3} = 0.10$ V，$|V_{OD6}| = |V_{OD8}| = 0.125$ V（总和 0.6 V）。
- 尺寸：尾电流管 $W/L \approx 1330$；$(W/L)_{1-4} \approx 1490$；$(W/L)_{5-8} \approx 3330$（均取 L = 0.5 μm）。
- 偏置：计入 $M_1$ 的体效应（body effect），$V_{in,CM} = V_{OD,SS} + V_{GS1} \approx 0.15 + 0.73 + 0.10 = 0.98$ V；$V_{b1} = V_{OD,SS} + V_{OD1} + V_{GS3} \approx 0.25 + 0.76 + 0.10 = 1.11$ V（使 $M_1$ 处于饱和边缘）；选择 $V_{b2}$ 使 $M_8$ 处于饱和边缘，即 $M_6$ 的源极位于 $V_{DD} - |V_{OD8}| = 2.875$ V，$V_{b2} \approx 2.875 - |V_{GS6}| \approx 1.9$ V（若计入 $M_6$ 的体效应则更低）；于是 $M_7$ 的栅极（节点 X）的电压为 $V_{DD} - |V_{GS7}| \approx 2.08$ V。
- 增益：$A_v \approx g_{m1}\{[g_{m3}r_{O3}r_{O1}]\,\|\,[g_{m6}r_{O6}r_{O8}]\}$，其中 $g_{m1} = g_{m3} = 20$ mS，$r_{O1} = r_{O3} = 10$ kΩ，$g_{m6} = 16$ mS，$r_{O6} = r_{O8} = 5$ kΩ：$2\ \mathrm{M\Omega}\,\|\,0.4\ \mathrm{M\Omega} = 333$ kΩ → $A_v \approx 6700$（计入 $g_{mb3}$ 时 ≈ 6900）。
- 说明：如此小的过驱动电压使器件非常宽，实际上还会把它们推向弱反型（weak inversion）；设计者可以牺牲一些摆幅来换取较小的器件。
