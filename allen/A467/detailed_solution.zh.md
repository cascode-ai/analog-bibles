# 详细步骤 - A467

把输出写成缩放因子 $x$ 的函数，得到 INL 和两类 DNL 都是 $(4x-1)$ 的线性函数，再在 $5/24\le x\le7/24$ 范围内求其界。由于每个误差都与 $x$ 呈线性关系，其极值出现在范围两端。

### 第 1 步 — 以 LSB 表示的输出

令 $1\,\mathrm{LSB}=V_{REF}/16$，码字为 $k=4m+n$（$m=2b_0+b_1$，$n=2b_2+b_3$，取值均为 0–3），MSB 子 DAC 给出 $(m/4)V_{REF}=4m$ LSB，经缩放的 LSB 子 DAC 给出 $x(n/4)V_{REF}=4xn$ LSB：

$$
v_{OUT}=4m+4xn\ \mathrm{LSB},\qquad v_{OUT,ideal}=4m+n\ \mathrm{LSB}.
$$

记 $\varepsilon=4x-1$；范围 $x=\tfrac14\pm\tfrac1{24}$ 即 $|\varepsilon|\le\tfrac16$。

### 第 2 步 — INL

$$
\mathrm{INL}=v_{OUT}-v_{OUT,ideal}=(4x-1)\,n=\varepsilon n\ \mathrm{LSB},\qquad
|\mathrm{INL}|\le\frac16\cdot3=0.5\ \mathrm{LSB}.
$$

在 $n=3$ 处达到该界：$x=7/24$ 时为 $+0.5$ LSB，$x=5/24$ 时为 $-0.5$ LSB。

### 第 3 步 — DNL

$$
\begin{aligned}
\text{inside a group }(n\to n+1):&\quad \text{step}=4x,\quad \mathrm{DNL}=4x-1=\varepsilon\in\left[-\tfrac16,+\tfrac16\right],\\
\text{group transition }(n=3\to0,\ m\to m+1):&\quad \text{step}=4-12x,\quad \mathrm{DNL}=3-12x=-3\varepsilon\in[-0.5,+0.5].
\end{aligned}
$$

组间跳变是最坏情况：$x=7/24$ 时其 DNL 为 $-0.5$ LSB，$x=5/24$ 时为 $+0.5$ LSB。

### 第 4 步 — 在端点处核对

| $x$ | INL 范围（LSB） | 组内 DNL（LSB） | 组间跳变 DNL（LSB） |
|---|---|---|---|
| $5/24$ | $0$ 到 $-0.5$ | $-1/6$ | $+0.5$ |
| $1/4$ | $0$ | $0$ | $0$ |
| $7/24$ | $0$ 到 $+0.5$ | $+1/6$ | $-0.5$ |

由于所有误差都与 $x$ 呈线性关系，对 $5/24$ 与 $7/24$ 之间的任意 $x$，INL 和 DNL 都在 ±0.5 LSB 以内，只有在容差范围的两个端点处取等号。
