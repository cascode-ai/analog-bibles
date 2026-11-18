情况 1（快速区）：$V_{error} \approx 37.5$ mV，$v_{CL} \approx 1.462$ V。情况 2（慢速区）：$V_{error} \approx 16.3$ mV，$v_{CL} \approx 1.484$ V。

- $V_T(V_{SB} = 1.5\ \mathrm{V}) = 0.7 + 0.4(\sqrt{2.2} - \sqrt{0.7}) = 0.959$ V；$V_{HT} = 5 - 1.5 - 0.959 = 2.541$ V；$\beta = 220\ \mu\mathrm{A/V^2}$。
- $W\cdot CGDO = 1.6\ \mu\mathrm{m}\times220\ \mathrm{pF/m} = 0.352$ fF；$C_{channel} = 1.6\times0.8\ \mu\mathrm{m^2}\times24.7\times10^{-4} = 3.16$ fF；$(0.352 + 1.581)/150 = 0.0129$。
- 交叠项（两种情况相同）：$(0.352/150)(1.5 + 0.959 - 0) = 5.8$ mV。
- 工作区判别：$\beta V_{HT}^2/(2C_L) = 4.74\times10^9$ V/s。
- 情况 1：$U = 5\ \mathrm{V}/0.1\ \mathrm{ns} = 5\times10^{10}$ V/s，大十倍：快速区。$\beta V_{HT}^3/(6UC_L) = 0.080$ V，因此 $V_{error} = 0.0129\times(2.541 - 0.080) + 0.0058 = 31.7 + 5.8 = 37.5$ mV；$v_{CL} = 1.5 - 0.0375 = 1.4625$ V。
- 情况 2：$U = 5\ \mathrm{V}/8\ \mathrm{ns} = 6.25\times10^8$ V/s，小 7.6 倍：慢速区。$\sqrt{\pi U C_L/(2\beta)} = 0.818$，因此 $V_{error} = 0.0129\times0.818 + 0.0058 = 10.5 + 5.8 = 16.3$ mV；$v_{CL} = 1.4837$ V。
- 较慢的边沿使误差不到前者的一半，因为大部分沟道电荷在开关仍导通时就流回了电压源。
