# 详细步骤 - A461

以 4 位 DAC 的 LSB 为单位，把每个输出电平写成 MSB 部分加上除过之后的 LSB 部分。INL（输出减理想值）和 DNL（台阶减 1 LSB）就由两类台阶决定：四个码字一组的组内台阶，以及组间跳变处的台阶。

### 第 1 步 — 除数为 $d$ 时的输出、INL 与台阶

令 $1\,\mathrm{LSB}=V_{REF}/16$，把码字写成 $k=4m+n$（$m=2b_0+b_1$，$n=2b_2+b_3$，取值均为 0–3），MSB 子 DAC 输出 $(m/4)V_{REF}=4m$ LSB，LSB 子 DAC 在相除之前输出 $(n/4)V_{REF}=4n$ LSB：

$$
v_{OUT}=4m+\frac{4n}{d}\ \mathrm{LSB},\qquad
\mathrm{INL}=v_{OUT}-(4m+n)=\left(\frac4d-1\right)n\ \mathrm{LSB}.
$$

$$
\text{step inside a group}=\frac4d\ \mathrm{LSB},\qquad
\text{step at a group transition }(n=3\to0)=4-\frac{12}{d}\ \mathrm{LSB}.
$$

### 第 2 步 — 除数 $d=3$

$$
\mathrm{INL}=+\frac n3=0,\ \tfrac13,\ \tfrac23,\ 1\ \mathrm{LSB};\qquad
\text{steps: }\tfrac43\ \mathrm{LSB}\ \left(\mathrm{DNL}=+\tfrac13\right),\quad 4-4=0\ \mathrm{LSB}\ (\mathrm{DNL}=-1).
$$

输出电平为 0, 4/3, 8/3, 4 │ 4, 16/3, 20/3, 8 │ 8, … │ 12, …, 16 LSB。因此 $+\mathrm{INL}=+1$ LSB，$-\mathrm{INL}=0$ LSB，$+\mathrm{DNL}=+1/3$ LSB $\approx0.33$ LSB，$-\mathrm{DNL}=-1$ LSB。

在 $0011\to0100$、$0111\to1000$ 和 $1011\to1100$ 处台阶恰好为零：相邻两个码字给出相同的输出。输出从不下降，因此在“不减”的意义上该 DAC 是单调的，但它恰好处于极限（DNL $=-1$ LSB），并非严格单调；同方向的任何进一步误差都会使它不单调。

### 第 3 步 — 除数 $d=5$

$$
\mathrm{INL}=-0.2\,n=0,\ -0.2,\ -0.4,\ -0.6\ \mathrm{LSB};\qquad
\text{steps: }0.8\ \mathrm{LSB}\ (\mathrm{DNL}=-0.2),\quad 4-2.4=1.6\ \mathrm{LSB}\ (\mathrm{DNL}=+0.6).
$$

因此 $+\mathrm{INL}=0$ LSB，$-\mathrm{INL}=-0.6$ LSB，$+\mathrm{DNL}=+0.6$ LSB，$-\mathrm{DNL}=-0.2$ LSB。所有台阶均为正，所以该 DAC **单调**。
