[图 1] 所示的 4 位 DAC 中 $M = 2$、$K = 2$：一个理想的 2 位 MSB 子 DAC（subDAC）转换 $b_0 b_1$（$b_0$ 为 MSB），一个理想的 2 位 LSB 子 DAC 转换 $b_2 b_3$（$b_3$ 为 LSB），LSB 子 DAC 的输出先除以除数 $2^M = 4$（该值正确），再与 MSB 子 DAC 的输出相加。理想情况下两个子 DAC 都使用基准电压 $V_{REF}$，但这里 MSB 子 DAC 的基准为 $0.75V_{REF}$，LSB 子 DAC 的基准为 $1.25V_{REF}$。以理想 4 位 DAC 的 LSB（1 LSB $= V_{REF}/16$）为单位求出 $\pm INL$ 和 $\pm DNL$，并判断该 DAC 是否单调（monotonic）。

取每个码处的 INL 为实际输出相对于其理想值的偏差，取相邻两码之间每次跳变处的 DNL 为实际台阶相对于 1 LSB 的偏差；分别给出两者的最大正值和最大负值。
