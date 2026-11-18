一个两级、每级 2 位的分区式流水线 ADC（subranging pipeline ADC）工作原理如下。第一级：参考电压为 $V_{REF}$ 的 2 位 ADC 将 $v_{in}(1)$（$0 \le v_{in}(1) < V_{REF}$）转换为 $b_0b_1$（阈值为 $V_{REF}/4$、$V_{REF}/2$、$3V_{REF}/4$；码等于所达到的阈值个数），2 位 DAC 将 $b_0b_1$ 转换为 $v_{out}(1) = (b_0/2 + b_1/4)V_{DAC1}$。余量（residue）$v_{in}(2) = v_{in}(1) - v_{out}(1)$ 不经放大送入第二级：一个参考电压为 $V_{REF}/4$ 的 2 位 ADC（阈值为 $V_{REF}/16$、$V_{REF}/8$、$3V_{REF}/16$），产生 $b_2b_3$。输出字为 $b_0b_1b_2b_3$。

第一级 DAC 的参考电压为 $V_{DAC1} = V_{REF} \pm \Delta V_{REF}$；其余均为理想。使 INL 保持在 ±0.5 LSB 以内的 $\Delta V_{REF}$ 最大值是多少？INL 取为码跳变相对其理想位置 $kV_{REF}/16$ 的最大偏差，以 LSB 计（1 LSB = $V_{REF}/16$）。
