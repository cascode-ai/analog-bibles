# 详细步骤 - A480

把 $\Delta R/R=0.01$、$\Delta C/C=0.001$ 代入两种组合的公式，找出存在某种分配 $N=M+K$ 使 INL 和 DNL 都不超过 1 LSB 的最大 $N$，再比较两种组合。

### 第 1 步 — 电荷定标 MSB、电压定标 LSB

$$
\mathrm{INL}=2^{K-1}(0.01)+2^{N-1}(0.001),\qquad
\mathrm{DNL}=0.01+\left(2^{N}-1\right)(0.001)\quad(\mathrm{LSB}).
$$

DNL 只与 $N$ 有关：

$$
0.01+\left(2^{N}-1\right)(0.001)\le1\ \Longrightarrow\ 2^N\le991\ \Longrightarrow\ N\le9 ,
$$

$N=9$ 时 $\mathrm{DNL}=0.521$ LSB，$N=10$ 时为 $1.033$ LSB（不满足）。$N=9$ 时，INL 条件限制了电阻串的位数：

$$
2^{K-1}(0.01)+256(0.001)\le1\ \Longrightarrow\ 2^{K-1}\le74.4\ \Longrightarrow\ K\le7 .
$$

例如 $M=7$（电荷）、$K=2$（电压）：

$$
\mathrm{INL}=2(0.01)+0.256=0.276\ \mathrm{LSB},\qquad \mathrm{DNL}=0.521\ \mathrm{LSB},
$$

只需 4 个电阻，电容的元件值分散度为 $2^{6}=64$。任何满足 $2\le M\le8$（$K\le7$）的分配都能同时满足两项指标。

### 第 2 步 — 电压定标 MSB、电荷定标 LSB

$$
\mathrm{INL}=2^{N-1}(0.01)+2^{K-1}(0.001),\qquad
\mathrm{DNL}=2^{K}(0.01)+\left(2^{K}-1\right)(0.001)=0.011\cdot2^{K}-0.001\quad(\mathrm{LSB}).
$$

仅 INL 的电阻项就要求 $2^{N-1}(0.01)\le1$，即 $2^{N-1}\le100$、$N\le7$（$N=8$ 时已达 1.28 LSB）。DNL 要求 $2^K\le91$，即 $K\le6$。$N=7$ 时，例如 $M=1$、$K=6$：$\mathrm{INL}=0.64+0.032=0.672$ LSB，$\mathrm{DNL}=0.703$ LSB。这种组合最多只能达到 7 位。

### 第 3 步 — 选择

| 组合 | 最大 $N$ | 分配示例 | INL（LSB） | DNL（LSB） |
|---|---|---|---|---|
| 电荷 MSB / 电压 LSB | 9 | $M=7$, $K=2$ | 0.276 | 0.521 |
| 电压 MSB / 电荷 LSB | 7 | $M=1$, $K=6$ | 0.672 | 0.703 |

最佳选择是**电荷定标 MSB 阵列加电压定标 LSB 阵列**，得到 $N=9$ 位，例如 $M=7$、$K=2$。把较精确的电容（0.1%）用于高权重位、把精度较低的电阻（1%）用于低权重位，正是多出两位的原因。
