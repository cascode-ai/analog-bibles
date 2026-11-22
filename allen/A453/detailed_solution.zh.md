# 详细步骤 - A453

单调性要求每次码字增加都使输出（幅值）增大。写出由一个大电容取代所有较小电容的跳变处的台阶，计入电容失配，求出该台阶何时可能变号。

### 第 1 步 — 用电容比之和表示输出

电荷转移到 $C_X$ 上，得

$$
|v_{OUT}|=\frac{V_{REF}}{C_X}\sum_{i=0}^{N-1}b_iC_i,\qquad C_i=2^{N-1-i}C\ \text{(nominal)},\qquad 1\,\mathrm{LSB}=\frac{C}{C_X}V_{REF}=\frac{V_{REF}}{2^N}.
$$

每个输出电平由不同的电容组合决定，因此电容间的失配会改变每个台阶的大小。

### 第 2 步 — MSB 跳变处的台阶

在 $0111\ldots1\to1000\ldots0$ 处，MSB 电容接通而其余电容全部断开，台阶为

$$
\Delta|v_{OUT}|=\frac{V_{REF}}{C_X}\Big(C_0-\sum_{i=1}^{N-1}C_i\Big).
$$

标称情况下 $C_0=2^{N-1}C$、$\sum_{i\ge1}C_i=(2^{N-1}-1)C$，台阶为一个 LSB。设每个电容有相对误差 $\pm\Delta C/C$，MSB 电容偏小、其余偏大：

$$
\Delta|v_{OUT}|=\frac{V_{REF}}{C_X}\Big[2^{N-1}C\Big(1-\frac{\Delta C}{C}\Big)-(2^{N-1}-1)C\Big(1+\frac{\Delta C}{C}\Big)\Big]
=\Big[1-(2^N-1)\frac{\Delta C}{C}\Big]\ \mathrm{LSB}.
$$

因此该跳变处 $\mathrm{DNL}=-(2^N-1)\Delta C/C$ LSB；其他主进位跳变（如 $0011\ldots1\to0100\ldots0$）给出按比例更小的值。

### 第 3 步 — 不单调的条件

当

$$
(2^N-1)\frac{\Delta C}{C}>1\quad(\mathrm{DNL}<-1\ \mathrm{LSB}).
$$

时台阶变为负值，即码字增加而输出减小。例如电容匹配精度为 0.2% 时，$N\ge9$ 就会出现这种情况（$511\times0.002=1.02$）。

**会**，该 DAC 可能不单调。它的各电平由二进制加权元件构成，因此单调性并不像电阻串 DAC 或温度计码 DAC 那样由结构保证；只有电容匹配满足 $(2^N-1)\Delta C/C<1$ 时才成立。
