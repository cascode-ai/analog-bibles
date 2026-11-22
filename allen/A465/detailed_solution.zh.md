# 详细步骤 - A465

把所有输出电平用 6 位 DAC 的 LSB 表示成 $x$ 的函数。台阶只有两类：八个码字一组的组内台阶和组间跳变台阶，因此 DNL 是两个简单的 $x$ 函数中较大的一个；令其等于 1 LSB，取最大的根。

### 第 1 步 — 以 LSB 表示的输出

令 $1\,\mathrm{LSB}=V_{REF}/64$，码字为 $k=8m+n$（$m$ 为 MSB 子 DAC 的值，$n$ 为 LSB 子 DAC 的值，取值均为 0–7）：

$$
v_{OUT}=\frac m8V_{REF}+\frac n8\cdot\frac{V_{REF}}{x}=8m+\frac{8n}{x}\ \mathrm{LSB}.
$$

$x=8$ 时它等于 $k$ LSB，即理想特性。

### 第 2 步 — 两类台阶的 DNL

$$
\begin{aligned}
\text{inside a group }(n\to n+1):&\quad \text{step}=\frac8x,\qquad \mathrm{DNL}_g=\frac8x-1,\\
\text{group transition }(n=7\to0,\ m\to m+1):&\quad \text{step}=8-\frac{56}{x},\qquad \mathrm{DNL}_t=7-\frac{56}{x}.
\end{aligned}
$$

### 第 3 步 — DNL 达到 1 LSB 之处

两式在 $x=8$ 时都为零。$x>8$ 时组间 DNL 为正并随 $x$ 增大，而对所有 $x>4$ 都有 $|\mathrm{DNL}_g|<1$。组间 DNL 在下式处达到 $+1$ LSB：

$$
7-\frac{56}{x}=1\quad\Longrightarrow\quad x=\frac{56}{6}=\frac{28}{3}=9.33 ,
$$

此时组内 DNL 只有 $8/9.33-1=-0.14$ LSB。$x<8$ 时组间 DNL 变为负值，在 $7-56/x=-1$ 即 $x=7$ 处达到 $-1$ LSB。因此 $7\le x\le9.33$ 时 $|\mathrm{DNL}|\le1$ LSB。

| $x$ | $\mathrm{DNL}_g$（LSB） | $\mathrm{DNL}_t$（LSB） |
|---|---|---|
| 7 | +0.14 | −1 |
| 8 | 0 | 0 |
| 9.33 | −0.14 | +1 |

引起 1 LSB DNL 的最大除数为 $x=28/3\approx9.33$；更大的 $x$ 会使组间跳变处的 DNL 超过 1 LSB。
