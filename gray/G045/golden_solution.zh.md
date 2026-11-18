三个线性斜坡阶段（每个节点电容约 20 fF：结电容 16.4 fF + 交叠电容 3.5 fF）：

1. $0 < t \lesssim 4.2$ ns：晶体管截止（$V_{GS} = -V_S < V_t$）。漏极保持在 +1.5 V；源极以 $10\ \mu\mathrm{A}/C_S \approx 0.5$ V/ns 的速率下降，直到 $V_S \approx -0.6$ V（此时 $V_{GS}$ 达到 $V_t$）。
2. 约 4.2 ns 到约 8.4 ns：晶体管导通并处于饱和区。源极几乎立即稳定在 $-(V_t + V_{ov}) \approx -0.69$ V（$V_{ov} = \sqrt{2(10\ \mu)/(194\ \mu\times12.2)} = 0.09$ V）并保持不变，而此时 10 μA 电流由漏极电容经沟道提供：漏极以 $10\ \mu\mathrm{A}/C_D \approx 0.5$ V/ns 的速率从 +1.5 V 下降到饱和区边缘 $V_D = V_G - V_t = -0.6$ V。
3. 约 8.4 ns 以后：线性区（triode region）。漏极电压趋近源极电压，随后两个节点一起下降（漏极比源极高几 mV，结束时 $V_{DS} \approx 5$ mV），速率为 $10\ \mu\mathrm{A}/(C_S + C_D) \approx 0.25$ V/ns，因此漏极在 $t \approx 12$ ns 时达到 −1.5 V，源极略低于它。（若计入随着 $V_{GS}$ 增大也必须充电的栅-沟道电容 $WLC_{ox} \approx 35$ fF，则斜率约为 0.13 V/ns，结束时间约为 15 ns；若只计结电容，斜率为 0.61 和 0.30 V/ns，结束时间约为 10 ns。）

- $C_S = C_D$：面积部分 $10\ \mu\mathrm{m}^2\times0.2 = 2$ fF + 周边部分 $12\ \mu\mathrm{m}\times1.2 = 14.4$ fF，再加上到接地栅极的交叠电容 $10\times0.35 = 3.5$ fF。
