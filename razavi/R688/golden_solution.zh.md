$V_{out}$–$V_{in}$ 特性与目标情况完全相同。氧化层变厚使两个晶体管的 $C_{ox}$ 按同一比例降低，而在决定 $V_{out}$ 的每个方程中 $C_{ox}$ 都会消去。只有流过该级的电流下降（因而速度也随之下降），且与 $C_{ox}$ 成正比，即按 $t_{ox,\mathrm{target}}/t_{ox,\mathrm{actual}}$ 的比例缩小。

该曲线如下（目标情况与厚氧化层情况相同），其中 $A = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$：
- $0 \le V_{in} \le 0.7$ V：$M_1$ 截止。二极管连接（diode-connected）的 $M_2$ 中没有电流，因此按惯例取 $V_{out} = V_{DD} - |V_{THP}| = 2.2$ V。严格地说，在平方律模型中，$V_{out}$ 取 2.2 V 到 3 V 之间的任何值都使两个器件的电流为零；$M_2$ 的亚阈值导电（subthreshold conduction）会把 $V_{out}$ 缓慢地拉向 $V_{DD}$。
- $M_1$ 处于饱和区（saturation region）：$\tfrac12\mu_nC_{ox}(W/L)_1(V_{in}-0.7)^2 = \tfrac12\mu_pC_{ox}(W/L)_2(2.2 - V_{out})^2$，因此 $V_{out} = 2.2 - A(V_{in} - 0.7)$。这是一条斜率（即小信号增益）为 $-A$ 的直线。
- 当 $V_{out} = V_{in} - 0.7$，即 $V_{in} = 0.7 + 2.2/(1+A)$ 时，$M_1$ 进入线性区（triode region）。此后 $V_{out}$ 逐渐变平，在 $V_{in} = 3$ V 时趋于一个较小的非零值，该值由 $\mu_n(W/L)_1[2.3V_{out} - V_{out}^2/2] = \tfrac12\mu_p(W/L)_2(2.2 - V_{out})^2$ 确定。例如，$A = 2$ 时转折点位于 1.43 V，且 $V_{in} = 3$ V 时 $V_{out} = 0.22$ V。
- 每个方程的两边都含有 $C_{ox}$，因此各转折点、斜率 $-A$ 以及两端的电平都不变。计入沟道长度调制（channel-length modulation）后，曲线仍然不变：在给定的工作点上，$g_m \propto C_{ox}$，而 $r_O \propto 1/I_D \propto 1/C_{ox}$。
- 真正改变的是：偏置电流和跨导（transconductance）都按 $C_{ox}$ 的比例降低，因此该级变慢。其栅电容也随之减小，但结电容（junction capacitance）和负载电容不变。
