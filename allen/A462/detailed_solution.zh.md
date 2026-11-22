# 详细步骤 - A462

按各子 DAC 的实际参考电压缩放其输出，把所有电平用理想 4 位 DAC 的 LSB 表示，再由每个码字的误差得到 INL，由两类台阶（组内台阶与组间跳变台阶）得到 DNL。

### 第 1 步 — 实际输出与理想输出

令 $1\,\mathrm{LSB}=V_{REF}/16$，码字为 $k=4m+n$（$m=2b_0+b_1$，$n=2b_2+b_3$，取值均为 0–3）：

- 参考电压为 $0.75V_{REF}$ 的 MSB 子 DAC：$(m/4)(0.75V_{REF})=0.75(4m)=3m$ LSB。
- 参考电压为 $1.25V_{REF}$、再除以 4 的 LSB 子 DAC：$(n/4)(1.25V_{REF})/4=1.25n$ LSB。

$$
v_{OUT}=3m+1.25n\ \mathrm{LSB},\qquad v_{OUT,ideal}=4m+n\ \mathrm{LSB}.
$$

### 第 2 步 — INL

$$
\mathrm{INL}=v_{OUT}-v_{OUT,ideal}=-m+0.25\,n\ \mathrm{LSB}.
$$

它在 $m=0$、$n=3$（码字 0011）时最大，为 $+0.75$ LSB；在 $m=3$、$n=0$（码字 1100）时最小，为 $-3$ LSB。因此 $+\mathrm{INL}=+0.75$ LSB，$-\mathrm{INL}=-3$ LSB。

### 第 3 步 — DNL

$$
\begin{aligned}
\text{inside a group }(n\to n+1):&\quad 1.25\ \mathrm{LSB},\quad \mathrm{DNL}=+0.25\ \mathrm{LSB},\\
\text{group transition }(n=3\to0,\ m\to m+1):&\quad 3-3(1.25)=-0.75\ \mathrm{LSB},\quad \mathrm{DNL}=-1.75\ \mathrm{LSB}.
\end{aligned}
$$

因此 $+\mathrm{DNL}=+0.25$ LSB，$-\mathrm{DNL}=-1.75$ LSB。

### 第 4 步 — 单调性

在 $0011\to0100$、$0111\to1000$ 和 $1011\to1100$ 处输出下降 0.75 LSB（例如码字 0011 为 3.75 LSB，0100 为 3 LSB）。台阶为负说明该 DAC **不单调**，这与 $-\mathrm{DNL}<-1$ LSB 一致。
