# 详细步骤 - R642

**思路。** 指标 $g_{m3,4}R = 0.5$ 确定了 $M_3$ 和 $M_4$ 在漏极电流为 $I_T/2$ 时必须具有的跨导（transconductance）；再反解平方律（square law）关系 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$，即可得到宽长比。

### 第 1 步 — $M_3$–$M_4$ 的作用与所需的跨导

交叉耦合（cross-coupled）对在每个半边电路（half circuit）中呈现与 $R$ 并联的 $-1/g_{m3,4}$；把电流导入交叉耦合对会提高级增益并降低其极点频率，从而对振荡器进行调谐。当 $g_{m3,4}R = 0.5 < 1$ 时，净负载仍为正，因此该级不会锁定（latch）：

$$R \parallel \left(-\frac{1}{g_{m3,4}}\right) = \frac{R}{1 - g_{m3,4}R} = 2R .$$

取 $R = 546\ \Omega$：

$$g_{m3,4} = \frac{0.5}{R} = \frac{0.5}{546\ \Omega} = 0.916\ \mathrm{mS}.$$

### 第 2 步 — 由平方律求宽长比

该条件针对全部 $I_T$ 被导向交叉耦合对并平均分配的情况：

$$I_{D3} = I_{D4} = \frac{I_T}{2} = 0.5\ \mathrm{mA}.$$

反解 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$：

$$\left(\frac{W}{L}\right)_{3,4} = \frac{g_{m3,4}^2}{2\mu_nC_{ox}I_D},$$

$$
\begin{aligned}
g_{m3,4}^2 &= (0.916\times10^{-3}\ \mathrm{S})^2 = 8.39\times10^{-7}\ \mathrm{S^2},\\
2\mu_nC_{ox}I_D &= 2\,(134\times10^{-6}\ \mathrm{A/V^2})(0.5\times10^{-3}\ \mathrm{A}) = 1.34\times10^{-7}\ \mathrm{A^2/V^2},\\
\left(\frac{W}{L}\right)_{3,4} &= \frac{8.39\times10^{-7}}{1.34\times10^{-7}} = 6.26 \approx 6.25 .
\end{aligned}
$$

取 $L = 0.5\ \mu$m，即 $W \approx 3.1\ \mu$m。

### 第 3 步 — 由 $M_1$–$M_2$ 按比例验算

$(W/L)_{1,2} = 100$、每管 0.5 mA 时，$R = 546\ \Omega$ 使 $g_{m1,2}R = 2$。由于 $g_m \propto \sqrt{W/L}$，在相同电流下要得到四分之一的跨导，宽长比需取十六分之一：

$$\left(\frac{W}{L}\right)_{3,4} = \frac{100}{16} = 6.25 . \ \checkmark$$

相应的过驱动电压（overdrive voltage）为 $V_{ov} = 2I_D/g_m = 1\ \mathrm{mA}/0.916\ \mathrm{mS} = 1.09$ V，远大于 $M_1$–$M_2$ 的过驱动电压（0.27 V）。

### 结果

$$\left(\frac{W}{L}\right)_{3,4} = \frac{(0.5/R)^2}{2\mu_nC_{ox}(I_T/2)} = \frac{(0.916\ \mathrm{mS})^2}{2(134\ \mu\mathrm{A/V^2})(0.5\ \mathrm{mA})} \approx 6.25,$$

例如取 $L = 0.5\ \mu$m 时 $W \approx 3.1\ \mu$m（宽长比为 $M_1$–$M_2$ 的十六分之一）。

**常见错误。** 每个器件都按全部 $I_T = 1$ mA 计算，得到 $(W/L)_{3,4} = 8.39\times10^{-7}/(2.68\times10^{-7}) \approx 3.1$。题目给出的条件是 $M_3$ 和 $M_4$ 各流过 $I_T/2$。

**常见错误。** 使用错误的跨导公式，例如 $g_m = \mu_nC_{ox}(W/L)I_D$，或假设一个题目没有给出的过驱动电压。在 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ 中只需要已知的电流。
