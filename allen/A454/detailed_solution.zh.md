# 详细步骤 - A454

匹配精度一定时，二进制加权电容的误差随电容大小增大。求出以 LSB 计的最坏情况 DNL 和 INL 随 $N$ 的变化，再取两者都在 ±0.5 LSB 以内的最大 $N$。

### 第 1 步 — 误差模型

输出幅值为 $|v_{OUT}|=(V_{REF}/C_X)\sum b_iC_i$，其中 $C_i=2^{N-1-i}C$、$C_X=2^NC$，$1\,\mathrm{LSB}=V_{REF}/2^N$。设每个电容相对 $C_X$ 偏离其标称值至多 $\varepsilon=\Delta C/C=0.002$。则标称值为 $2^{k}C$ 的电容引入的输出误差最多为 $2^{k}\varepsilon$ LSB。

### 第 2 步 — 最坏情况 DNL

在 MSB 跳变 $0111\ldots1\to1000\ldots0$ 处，MSB 电容（$2^{N-1}C$）接通，其余电容（合计 $(2^{N-1}-1)C$）全部断开。两者误差方向相反时，台阶偏离 1 LSB 的量为

$$
|\mathrm{DNL}|_{\max}=\left[2^{N-1}+\left(2^{N-1}-1\right)\right]\varepsilon=(2^N-1)\,\varepsilon\ \ \mathrm{LSB}.
$$

### 第 3 步 — 最坏情况 INL

满量程时 $N$ 个电容全部接通。若每个电容相对 $C_X$ 都偏大（或都偏小）$\varepsilon$，误差相加：

$$
|\mathrm{INL}|_{\max}=\left(2^{N-1}+2^{N-2}+\cdots+1\right)\varepsilon=(2^N-1)\,\varepsilon\ \ \mathrm{LSB},
$$

与 DNL 的限制相同。

### 第 4 步 — 最大 $N$

要求 $(2^N-1)\varepsilon\le0.5$，取 $\varepsilon=0.002$，即 $2^N\le251$：

| $N$ | $(2^N-1)\times0.002$ |
|---|---|
| 7 | $127\times0.002=0.254$ LSB |
| 8 | $255\times0.002=0.51$ LSB |

$N=8$ 以微小差距不满足，因此理想工作的最大分辨率为 $N=7$。若只考虑 MSB 电容自身的 INL 贡献 $2^{N-1}\varepsilon\le0.5$，会错误地允许 $N=8$（0.256 LSB），因为它忽略了 MSB 跳变处所有位误差的叠加。
