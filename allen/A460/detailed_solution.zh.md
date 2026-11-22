# 详细步骤 - A460

把每个输出电平以 4 位 DAC 的 LSB 为单位写成 MSB 部分加上缩放后的 LSB 部分，对每个除数列出全部 16 个电平，再直接由列表读出 INL（输出减理想值）和 DNL（台阶减 1 LSB）。

### 第 1 步 — 以 LSB 表示的输出

令 $1\,\mathrm{LSB}=V_{REF}/16$，把码字写成 $k=4m+n$，其中 $m=2b_0+b_1$、$n=2b_2+b_3$，取值均为 0 到 3。

- MSB 子 DAC 输出 $(m/4)V_{REF}=4m$ LSB。
- LSB 子 DAC 输出 $(n/4)V_{REF}=4n$ LSB，再除以除数 $d$：$4n/d$ LSB。

$$
v_{OUT}=4m+\frac{4n}{d}\ \ \mathrm{LSB},\qquad
\mathrm{INL}(k)=v_{OUT}-k=\left(\frac4d-1\right)n\ \ \mathrm{LSB}.
$$

理想的 $d=4$ 给出 $v_{OUT}=k$ LSB。INL 只与 $n$ 有关，台阶有两种：组内（$n\to n+1$）台阶为 $4/d$ LSB；组间跳变（$n=3\to0$，$m\to m+1$）台阶为 $4-3(4/d)$ LSB。

### 第 2 步 — 除数 $d=2$

LSB 部分为 $2n$ LSB：

| 码字 | 0000–0011 | 0100–0111 | 1000–1011 | 1100–1111 |
|---|---|---|---|---|
| $v_{OUT}$（LSB） | 0, 2, 4, 6 | 4, 6, 8, 10 | 8, 10, 12, 14 | 12, 14, 16, 18 |

$$
\mathrm{INL}=n=0\ \text{to}\ {+3}\ \mathrm{LSB},\qquad
\text{steps: }2\ \mathrm{LSB}\ (\mathrm{DNL}=+1),\quad 4-6=-2\ \mathrm{LSB}\ (\mathrm{DNL}=-3).
$$

因此 $+\mathrm{INL}=+3$ LSB，$-\mathrm{INL}=0$ LSB，$+\mathrm{DNL}=+1$ LSB，$-\mathrm{DNL}=-3$ LSB。在 $0011\to0100$、$0111\to1000$ 和 $1011\to1100$ 处输出下降 2 LSB，所以该 DAC **不单调**。

### 第 3 步 — 除数 $d=6$

LSB 部分为 $2n/3$ LSB：

| 码字 | 0000–0011 | 0100–0111 | 1000–1011 | 1100–1111 |
|---|---|---|---|---|
| $v_{OUT}$（LSB） | 0, 2/3, 4/3, 2 | 4, 14/3, 16/3, 6 | 8, 26/3, 28/3, 10 | 12, 38/3, 40/3, 14 |

$$
\mathrm{INL}=-\frac n3=0,\ -\tfrac13,\ -\tfrac23,\ -1\ \mathrm{LSB},\qquad
\text{steps: }\tfrac23\ \mathrm{LSB}\ (\mathrm{DNL}=-\tfrac13),\quad 4-2=2\ \mathrm{LSB}\ (\mathrm{DNL}=+1).
$$

因此 $+\mathrm{INL}=0$ LSB，$-\mathrm{INL}=-1$ LSB，$+\mathrm{DNL}=+1$ LSB，$-\mathrm{DNL}=-1/3$ LSB $\approx-0.33$ LSB。所有台阶均为正，所以该 DAC **单调**；不过组间跳变处 +1 LSB 的 DNL 意味着那里跳过了一个输出电平。
