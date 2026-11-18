$v_{CL}$ 上升约 0.12 mV（≈ +115 µV）：p 沟道管的注入（+1.83 mV）略大于 n 沟道管的注入（−1.72 mV）。

- 公共量：$W\cdot CGDO = 0.176$ fF，$C_{channel} = 1.58$ fF，$(0.176 + 0.790)\ \mathrm{fF}/1\ \mathrm{pF} = 9.66\times10^{-4}$；每个器件的交叠项均为 $0.176\ \mathrm{fF}/1\ \mathrm{pF}\times3.2\ \mathrm{V} = 0.563$ mV。
- n 沟道：$V_{HT} = 5 - 2.5 - 0.7 = 1.8$ V，$\beta = 110\ \mu\mathrm{A/V^2}$，$\beta V_{HT}^2/(2C_L) = 1.78\times10^8 > U$：慢速区。沟道项 $9.66\times10^{-4}\times\sqrt{\pi\times10^8\times10^{-12}/(2\times110\ \mu)} = 9.66\times10^{-4}\times1.195 = 1.155$ mV；合计 1.718 mV，使 $v_{CL}$ 降低（电子）。
- p 沟道：$V_{HT} = 2.5 - 0.7 - 0 = 1.8$ V，$\beta = 50\ \mu\mathrm{A/V^2}$，$\beta V_{HT}^2/(2C_L) = 8.1\times10^7 < U$：快速区。$\beta V_{HT}^3/(6UC_L) = 0.486$ V，沟道项 $9.66\times10^{-4}\times(1.8 - 0.486) = 1.270$ mV；合计 1.833 mV，使 $v_{CL}$ 升高（空穴）。
- 净效果：两个交叠项正好抵消；$\Delta v_{CL} = +1.833 - 1.718 = +0.115$ mV，因此 $v_{CL} \approx 2.50012$ V。
