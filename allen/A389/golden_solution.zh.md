$p_1 = -1/(R_{out}C_L) = -26.9\times10^3$ rad/s（4.28 kHz）；响应是线性的（最大斜率 ≈ 0.99 V/µs ≪ SR = 20 V/µs）；$t_p \approx 0.77\ \mu$s。
- $|p_1| = 1/(7.44\ \mathrm{M\Omega}\times5\ \mathrm{pF}) = 26.9$ krad/s，$\tau = 37.2\ \mu$s。
- 压摆率：输入对完全切换时，输出电流为 $I_3 = 100\ \mu$A（例如 M7 支路电流 $I_5 - I_3 = 25\ \mu$A，而镜像过来的是 125 µA），因此 $SR = 100\ \mu\mathrm{A}/5\ \mathrm{pF} = 20$ V/µs。这里假设的是通常的单端输出折叠式共源共栅、负载为 1:1 共源共栅电流镜；其他任何合理的理解也至少给出 $I_5 - I_3 = 25\ \mu$A 的驱动电流，即 ≥ 5 V/µs，结论相同。
- 线性斜率：$A_v(0)V_{in}|p_1| = 3678\times0.01\times26.9\times10^3 = 0.99$ V/µs < 20 V/µs → 线性（不发生压摆）。
- $V_{in}(\min) = 1.5\ \mathrm{V}/3678 = 0.408$ mV，$k = 24.5$；$t_p = \tau\ln\dfrac{2k}{2k-1} = 37.2\ \mu\mathrm{s}\times0.0206 = 0.77\ \mu$s（≈ 0.75 V / 0.99 V/µs）。
