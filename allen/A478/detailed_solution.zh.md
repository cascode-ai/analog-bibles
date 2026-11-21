# 详细步骤 - A478

对每个子 DAC 分别应用给定的两条规则，所用权重因子是该子 DAC 实际控制的位在 $N$ 位码字中的权重，再把两部分贡献相加。电压定标 DAC 负责位 $0\ldots M-1$，电荷定标 DAC 负责位 $M\ldots N-1$。

### 第 1 步 — 权重因子

$N$ 位 DAC 的第 $i$ 位对应 $2^{N-i-1}$ LSB。因此

$$
\text{voltage DAC (bits }0\ldots M-1):\ 2^{N-1},\ \dots,\ 2^{N-M}=2^{K};\qquad
\text{charge DAC (bits }M\ldots N-1):\ 2^{N-M-1}=2^{K-1},\ \dots,\ 1 .
$$

### 第 2 步 — 电阻串（MSB）的贡献

电阻串所负责各位中最大的权重因子是 MSB 的 $2^{N-1}$：

$$
\mathrm{INL}(R)=2^{N-1}\frac{\Delta R}{R}\ \ \mathrm{LSB}.
$$

（等价地，以 $M$ 位 LSB 计为 $2^{M-1}\Delta R/R$，再乘以 $2^N/2^M=2^K$。）电阻串中每个电阻决定 $M$ 位 DAC 的一个台阶，即其最低位 $M-1$ 的权重 $2^{N-M}=2^K$：

$$
\mathrm{DNL}(R)=2^{K}\frac{\Delta R}{R}\ \ \mathrm{LSB}.
$$

### 第 3 步 — 电容阵列（LSB）的贡献

电容阵列中最大的权重因子为 $2^{K-1}$（其最高位，即第 $M$ 位）：

$$
\mathrm{INL}(C)=2^{K-1}\frac{\Delta C}{C}\ \ \mathrm{LSB}.
$$

最大的电容（权重 $2^{K-1}$）在其自身的主进位跳变处造成最坏台阶：此时它接入，而所有较小电容（总权重 $2^{K-1}-1$）断开。两者误差方向相反时，

$$
\mathrm{DNL}(C)=\left(2^{K-1}+2^{K-1}-1\right)\frac{\Delta C}{C}=\left(2^{K}-1\right)\frac{\Delta C}{C}\ \ \mathrm{LSB};
$$

若只计最大电容自身的误差，则为 $2^{K-1}\Delta C/C$。

### 第 4 步 — 总和

$$
\begin{aligned}
\mathrm{INL}&=\mathrm{INL}(R)+\mathrm{INL}(C)=2^{N-1}\frac{\Delta R}{R}+2^{K-1}\frac{\Delta C}{C}\ \ \mathrm{LSB},\\
\mathrm{DNL}&=\mathrm{DNL}(R)+\mathrm{DNL}(C)=2^{K}\frac{\Delta R}{R}+\left(2^{K}-1\right)\frac{\Delta C}{C}\approx2^{K}\left(\frac{\Delta R}{R}+\frac{\Delta C}{C}\right)\ \ \mathrm{LSB}.
\end{aligned}
$$

由于电阻串承担 MSB，INL 主要由电阻串决定。
