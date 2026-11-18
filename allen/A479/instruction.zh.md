一个 $N$ 位 DAC 由一个 $M$ 位电压定标 DAC（voltage scaling DAC，由 $2^M$ 个相等电阻构成的电阻串）和一个 $K$ 位电荷定标 DAC（charge scaling DAC，二进制加权电容）组成，$N = M + K$。$M$ 位电压定标 DAC 中电阻的精度为 $\pm\Delta R/R$，电荷定标 DAC 中二进制加权电容的精度为 $\Delta C/C$。假设 INL 和 DNL 一般可以表示为

INL =（元件精度）×（最大权重因子）
DNL =（最大元件的精度）×（对应的权重因子）

其中第 $i$ 位的权重因子（weighting factor）为 $2^{N-i-1}$ LSB（$i = 0$ 为该 $N$ 位 DAC 的 MSB），并假设两个子 DAC 的 INL 和 DNL 贡献相加。若高位使用 $K$ 位电荷定标 DAC，低位使用 $M$ 位电压定标 DAC，用 $M$、$K$、$N$、$\Delta R/R$ 和 $\Delta C/C$ 表示该 $N$ 位 DAC 的 INL 和 DNL（以该 $N$ 位 DAC 的 LSB 为单位）。
