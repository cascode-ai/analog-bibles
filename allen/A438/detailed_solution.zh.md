# 详细步骤 - A438

该电流型 DAC 本身没有参考电压；$V_{REF}$ 规定了它所要再现的电压标度。使该 DAC 的转移特性与参考电压为 $V_{REF}$ 的常规电压型 DAC 一致，即可解出 $I$。

### 第 1 步 — 已知转移特性的标度

电流沉 R–2R DAC 的输出为

$$
v_{OUT}=RI\sum_{i=1}^{N}b_i2^{-i},
$$

因此 $RI$ 起参考电压的作用：一个 LSB 为 $RI/2^N$，满量程范围（full-scale range）为 $RI$，全 1 时的输出为 $RI(1-2^{-N})$。

### 第 2 步 — 与基于 $V_{REF}$ 的 DAC 匹配

参考电压为 $V_{REF}$ 的常规 $N$ 位 DAC 输出 $v_{OUT}=V_{REF}\sum_{i=1}^{N}b_i2^{-i}$，即满量程范围为 $V_{REF}$，LSB 为 $V_{REF}/2^N$。令两者的转移特性逐项相等，要求

$$
RI=V_{REF}\quad\Longrightarrow\quad I=\frac{V_{REF}}{R}=\frac{5\ \mathrm V}{R}.
$$

此时 $1\,\mathrm{LSB}=5\ \mathrm V/2^N$，满量程值为 $5\ \mathrm V\,(1-2^{-N})$。例如 $R=1\ \mathrm{k\Omega}$ 时 $I=5$ mA。

### 第 3 步 — 另一种约定

若改为要求全 1 时的输出本身等于 $V_{REF}$，则

$$
RI\left(1-2^{-N}\right)=V_{REF}\quad\Longrightarrow\quad I=\frac{V_{REF}}{R\left(1-2^{-N}\right)}=\frac{5\ \mathrm V}{R\left(1-2^{-N}\right)},
$$

它与第一种结果相差 $2^N-1$ 分之一，并使 LSB 变为 $V_{REF}/(2^N-1)$，而不再是 $V_{REF}$ 的二进制分数。
