# 详细步骤 - A464

写出 LSB 子 DAC 以 $V_{REF}/x$ 为参考时的合成输出，并要求它对每个码字都等于理想 6 位二进制 DAC 的输出。

### 第 1 步 — 合成输出

每个子 DAC 都是以各自参考电压工作的理想 3 位二进制 DAC，因此

$$
v_{OUT}=\left(\frac{b_0}{2}+\frac{b_1}{4}+\frac{b_2}{8}\right)V_{REF}+\left(\frac{b_3}{2}+\frac{b_4}{4}+\frac{b_5}{8}\right)\frac{V_{REF}}{x}.
$$

### 第 2 步 — 所需的二进制权重

理想 6 位 DAC 的输出为

$$
v_{OUT}=\left(\frac{b_0}{2}+\frac{b_1}{4}+\frac{b_2}{8}+\frac{b_3}{16}+\frac{b_4}{32}+\frac{b_5}{64}\right)V_{REF}.
$$

令 $b_3$ 的系数相等（$b_4$、$b_5$ 同理），要求 $\dfrac{1}{2x}=\dfrac{1}{16}$，因此

$$
x=2^M=8 .
$$

### 第 3 步 — 含义

当 $x=8$ 时，LSB 子 DAC 的满量程范围 $V_{REF}/8$ 恰好等于 MSB 子 DAC 的一个 LSB，因此 LSB 子 DAC 把每个 MSB 台阶细分为 $2^K=8$ 个更细的电平，合成特性是一个均匀的 64 级阶梯。
