手算分析（平方律，$\lambda = 0$）：
- 偏置：$M_3$ 流过约 1 mA（$V_{SG3} \approx 2.0$ V），因此 $I_{D1} = V_{SG3}/4.35\text{k} \approx 0.46$ mA；$V_{GS1} = 1 + \sqrt{0.46/3} = 1.39$ V，尾电流 $(6 - 1.39)/5\text{k} = 0.92$ mA，因此 $I_{D2} \approx 0.46$ mA——4.35 kΩ 这一取值使差分对达到平衡。自洽求解得：$I_{D1} = 0.460$ mA，$I_{D2} = 0.462$ mA，$I_{D3} = 1.00$ mA，$V_o \approx +8$ mV。
- $g_{m1} \approx g_{m2} \approx 2.35$ mS，$g_{m3} = 2.0$ mS。
- 电压串联反馈（series–shunt feedback）二端口分析（$f = 1/11$）：$a \approx 41$，$T \approx 3.8$，$A = a/(1+T) \approx 8.7$；精确的小信号节点分析给出 $v_o/v_i \approx 9.3$（环路增益较低，加上有限的尾电阻，使等效理想增益约为 $11[1 + 1/(g_{m2}\cdot5\text{k})] \approx 11.9$）。
- $Z_{in} = \infty$（MOS 栅极）；$Z_{out} \approx (6\text{k}\|11\text{k})/(1+T) \approx 0.82$ kΩ（精确值约 0.87 kΩ）。
- 大信号：零点附近斜率约 9.3；$M_3$ 截止时达到负向极限 −3.9 V（无源分压），对应 $v_i \approx -0.45$ V；在正向一侧，$V_o \approx 4.5$ V 以上 $M_3$ 进入线性区（triode region），输出在 +6 V 以下趋于平坦。
- 0.5 V 峰峰值输入时的失真（输出峰值约 2.3 V）：由于环路增益只有约 4，失真比双极型版本大得多；平方律大信号计算给出 HD2 ≈ 2%，HD3 ≈ 0.25%。
