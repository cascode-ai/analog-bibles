$INL = INL(R) + INL(C) = \left(2^{N-1}\frac{\Delta R}{R} + 2^{K-1}\frac{\Delta C}{C}\right)$ LSB
$DNL = DNL(R) + DNL(C) = \left(2^{K}\frac{\Delta R}{R} + (2^{K} - 1)\frac{\Delta C}{C}\right) \approx 2^K\left(\frac{\Delta R}{R} + \frac{\Delta C}{C}\right)$ LSB

推导：
- 电阻串，位 $0 \ldots M-1$：其最大权重因子为 MSB 的权重因子 $2^{N-1}$ → $INL(R) = 2^{N-1}\Delta R/R$（等价于以 $M$ 位 LSB 计的 $2^{M-1}\Delta R/R$ 乘以 $2^N/2^M = 2^K$）。每个电阻决定 $M$ 位 DAC 的一个台阶，其权重为第 $M-1$ 位的权重：$2^{N-M} = 2^K$ → $DNL(R) = 2^K\Delta R/R$。
- 电容阵列，位 $M \ldots N-1$：最大权重因子 $2^{N-M-1} = 2^{K-1}$ → $INL(C) = 2^{K-1}\Delta C/C$。最大电容（权重 $2^{K-1}$）在其主跳变处给出最坏的台阶；该电容为高、其余全为低时，台阶误差为 $(2^{K-1} + 2^{K-1} - 1)\Delta C/C = (2^K - 1)\Delta C/C$（若只计最大电容自身的误差，则为 $2^{K-1}\Delta C/C$）。
