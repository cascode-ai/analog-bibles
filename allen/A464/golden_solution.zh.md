$x = 2^M = 8$。

LSB 子 DAC 的基准为 $V_{REF}/x$ 时，$v_{OUT} = \left(\frac{b_0}{2} + \frac{b_1}{4} + \frac{b_2}{8}\right)V_{REF} + \left(\frac{b_3}{2} + \frac{b_4}{4} + \frac{b_5}{8}\right)\frac{V_{REF}}{x}$。对于 6 位二进制 DAC，LSB 子 DAC 的各项必须为 $b_3/16 + b_4/32 + b_5/64$，因此 $1/x = 1/8$：LSB 子 DAC 的满量程必须等于 MSB 子 DAC 的一个 LSB（$V_{REF}/8$）。
