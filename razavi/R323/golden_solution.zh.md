对差分信号而言，尾节点是虚地（virtual ground），负载管的栅极保持在交流地，因此电路简化为一个共源（common-source，CS）半边电路（half circuit），信号源电阻为 $R_S$，负载为 $R_L = r_{O1}\|r_{O3}$，输出电容为 $C_L$：
$$\frac{V_{out}}{V_{in}}(s) = \frac{(C_{GD1}s - g_{m1})R_L}{R_SR_L\xi s^2 + [R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)]s + 1}$$
其中 $\xi = C_{GS1}C_{GD1} + C_{GS1}C_L + C_{GD1}C_L$，$R_L = r_{O1}\|r_{O3}$（$V_{out} = V_{out1} - V_{out2}$，$V_{in} = V_{in1} - V_{in2}$；对每个半边电路，同样的表达式也成立）。
- 直流增益为 $-g_{m1}(r_{O1}\|r_{O3})$；右半平面零点（right-half-plane zero）位于 $g_{m1}/C_{GD1}$。
- 由于 $R_L$ 很大，输出极点通常是主极点（dominant pole）：当 $C_L$ 占主导时，$\omega_{p1} \approx 1/\{R_L(C_L + C_{GD1}) + R_S[(1 + g_{m1}R_L)C_{GD1} + C_{GS1}]\} \approx 1/[(r_{O1}\|r_{O3})C_L]$。
- 第二个极点为 $\omega_{p2} \approx \dfrac{R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)}{R_SR_L\xi}$。
- 注意，只有在输出极点以下的频率，$C_{GD1}$ 才会经密勒效应（Miller effect）被很大的增益因子 $1 + g_{m1}R_L$ 倍增，因此基于低频增益对输入节点的估算是偏悲观的。
