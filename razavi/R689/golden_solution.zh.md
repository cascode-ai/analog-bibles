该反相器（inverter）的传输特性与目标情况完全相同：开关阈值（switching threshold）相同，转折点相同，增益也相同。只有各个电流与 $C_{ox}$ 成比例地降低，包括峰值直通电流（crowbar current）和充电电流，因此电路变慢。

该曲线如下，其中 $r = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$：
- $V_{in} < 0.7$ V：$M_1$ 截止，因此 $V_{out} = 3$ V。
- $V_{in} > V_{DD} - |V_{THP}| = 2.2$ V：$M_2$ 截止，因此 $V_{out} = 0$。
- 在两者之间，输出在开关阈值附近陡峭下降。此处两个器件都处于饱和区（saturation region）：$\tfrac12\mu_nC_{ox}(W/L)_1(V_M - 0.7)^2 = \tfrac12\mu_pC_{ox}(W/L)_2(2.2 - V_M)^2$，因此 $V_M = (2.2 + 0.7r)/(1 + r)$。$r = 1$ 时为 1.45 V；$W/L$ 相等（$r = 1.87$）时为 1.22 V。低于 $V_M$ 时，$M_2$ 处于线性区（triode region），$V_{out}$ 接近 3 V；高于该值时，$M_1$ 处于线性区，$V_{out}$ 接近 0。
- $C_{ox}$ 乘在每个电流方程的两边，因此两个器件共同的氧化层变厚不会使 $V_M$ 或各转折点移动。计入沟道长度调制（channel-length modulation）后，$V_M$ 处的增益 $-(g_{m1}+g_{m2})(r_{O1}\|r_{O2})$ 也不变：在相同的过驱动电压（overdrive voltage）下，$g_m \propto C_{ox}$，$r_O \propto 1/C_{ox}$。
- 各电流按 $C_{ox}$ 之比降低，因此反相器的驱动能力减弱，边沿变慢。
