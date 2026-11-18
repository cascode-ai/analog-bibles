$INL = INL(R) + INL(C) = \left(2^{M-1}\frac{\Delta R}{R} + 2^{N-1}\frac{\Delta C}{C}\right)$ LSB
$DNL = DNL(R) + DNL(C) = \left(\frac{\Delta R}{R} + (2^{N} - 1)\frac{\Delta C}{C}\right) \approx \frac{\Delta R}{R} + 2^N\frac{\Delta C}{C}$ LSB

推导：
- 电容阵列，位 $0 \ldots K-1$：最大权重因子 $2^{N-1}$ → $INL(C) = 2^{N-1}\Delta C/C$。最坏台阶出现在 MSB 跳变处（最大电容为高、其余全为低）：$(2^N - 1)\Delta C/C$（若只计最大电容，则为 $2^{N-1}\Delta C/C$）。
- 电阻串，位 $K \ldots N-1$：最大权重因子 $2^{N-K-1} = 2^{M-1}$ → $INL(R) = 2^{M-1}\Delta R/R$。每个电阻对应整个 DAC 的一个 LSB（权重 $2^0$）→ $DNL(R) = \Delta R/R$。
- 此时 INL 和 DNL 都由电容主导：这种结构需要非常精确的电容，但对电阻精度的要求很宽松。
