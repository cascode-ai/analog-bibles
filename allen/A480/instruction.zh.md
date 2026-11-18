下面给出了某 DAC 的 INL 和 DNL（以 LSB 为单位）的公式，其 MSB 阵列和 LSB 阵列分别为电压定标（voltage scaling，电阻串，精度 $\Delta R/R$）或电荷定标（charge scaling，二进制加权电容，精度 $\Delta C/C$）。$N = M + K$，其中 $M$ 为 MSB 阵列的位数，$K$ 为 LSB 阵列的位数，$N$ 为总位数。

- MSB 电压定标（$M$ 位），LSB 电荷定标（$K$ 位）：$INL = 2^{N-1}\frac{\Delta R}{R} + 2^{K-1}\frac{\Delta C}{C}$，$DNL = 2^{K}\frac{\Delta R}{R} + (2^K - 1)\frac{\Delta C}{C}$。
- MSB 电荷定标（$M$ 位），LSB 电压定标（$K$ 位）：$INL = 2^{K-1}\frac{\Delta R}{R} + 2^{N-1}\frac{\Delta C}{C}$，$DNL = \frac{\Delta R}{R} + (2^N - 1)\frac{\Delta C}{C}$。

若 $\Delta R/R = 1$%，$\Delta C/C = 0.1$%，且 DAC 组合的 INL 和 DNL 都应不超过 1 LSB，求能满足要求并给出最多位数的 $N$、$M$ 和 $K$ 值，并指出应采用哪种类型的 DAC（电压 MSB 加电荷 LSB，或电荷 MSB 加电压 LSB）。
