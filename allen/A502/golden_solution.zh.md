$0.25V_{REF}$：$1.25N_{REF}$ 个时钟周期；$0.7V_{REF}$：$1.7N_{REF}$ 个时钟周期。

- 正向积分（run-up）：$v_{int}(t_1) = V_{th} + KN_{REF}Tv_{in}^*$（$K$ 为积分器增益常数，$T$ 为时钟周期）。
- 反向积分（run-down）：$v_{int}$ 以速率 $KV_{REF}$ 下降，经过 $N_{out}T$ 后回到 $V_{th}$，满足 $KV_{REF}N_{out}T = KN_{REF}Tv_{in}^*$，因此 $N_{out} = N_{REF}v_{in}^*/V_{REF}$。
- 转换时间 $= N_{REF} + N_{out} = N_{REF}(1 + v_{in}^*/V_{REF})$：$0.25V_{REF}$ → $N_{REF} + 0.25N_{REF} = 1.25N_{REF}$；$0.7V_{REF}$ → $1.7N_{REF}$。（最坏情况 $v_{in}^* \to V_{REF}$：$2N_{REF}$，当 $N_{REF} = 2^N$ 时即 $2\cdot2^N$ 个周期。）
