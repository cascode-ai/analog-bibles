# 详细步骤 - A479

对每个子 DAC 应用给定的两条规则，所用权重因子为其所控制的位在 $N$ 位码字中的权重，再把两部分贡献相加。现在电荷定标 DAC 负责 MSB（位 $0\ldots K-1$），电压定标 DAC 负责 LSB（位 $K\ldots N-1$）。

### 第 1 步 — 权重因子

第 $i$ 位对应 $2^{N-i-1}$ LSB，因此

$$
\text{charge DAC (bits }0\ldots K-1):\ 2^{N-1},\ \dots,\ 2^{N-K}=2^{M};\qquad
\text{voltage DAC (bits }K\ldots N-1):\ 2^{N-K-1}=2^{M-1},\ \dots,\ 1 .
$$

### 第 2 步 — 电容阵列（MSB）的贡献

电容阵列中最大的权重因子是 MSB 的 $2^{N-1}$：

$$
\mathrm{INL}(C)=2^{N-1}\frac{\Delta C}{C}\ \ \mathrm{LSB}.
$$

最坏台阶出现在 MSB 跳变处：最大电容（权重 $2^{N-1}$）接入，而它以下总权重为 $2^{N-1}-1$ LSB 的所有部分断开。按二进制阵列的方式，取最大电容偏大、较低权重的部分以相同相对精度偏小，

$$
\mathrm{DNL}(C)=\left(2^{N-1}+2^{N-1}-1\right)\frac{\Delta C}{C}=\left(2^{N}-1\right)\frac{\Delta C}{C}\ \ \mathrm{LSB}
$$

（若只计最大电容自身的误差，则为 $2^{N-1}\Delta C/C$）。

### 第 3 步 — 电阻串（LSB）的贡献

电阻串所负责各位中最大的权重因子为 $2^{M-1}$（第 $K$ 位）：

$$
\mathrm{INL}(R)=2^{M-1}\frac{\Delta R}{R}\ \ \mathrm{LSB}.
$$

电阻串中每个电阻决定整个 DAC 的一个台阶，其权重即 LSB 的 $2^0=1$：

$$
\mathrm{DNL}(R)=\frac{\Delta R}{R}\ \ \mathrm{LSB}.
$$

### 第 4 步 — 总和

$$
\begin{aligned}
\mathrm{INL}&=2^{M-1}\frac{\Delta R}{R}+2^{N-1}\frac{\Delta C}{C}\ \ \mathrm{LSB},\\
\mathrm{DNL}&=\frac{\Delta R}{R}+\left(2^{N}-1\right)\frac{\Delta C}{C}\approx\frac{\Delta R}{R}+2^{N}\frac{\Delta C}{C}\ \ \mathrm{LSB}.
\end{aligned}
$$

此时 INL 和 DNL 都主要由电容决定：这种结构需要非常精确的电容，但能容忍匹配较差的电阻。
