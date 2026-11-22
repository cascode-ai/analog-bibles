# 详细步骤 - A466

利用分段 DAC 的两类台阶（组内台阶与组间跳变台阶）把 DNL 写成 $x$ 的函数，找出最坏情况 DNL 幅值达到 2 LSB 的位置，再取其中最小的 $x$。

### 第 1 步 — 输出与台阶大小

令 $1\,\mathrm{LSB}=V_{REF}/64$，码字为 $k=8m+n$（$m,n=0\ldots7$），MSB 子 DAC 贡献 $8m$ LSB，LSB 子 DAC 贡献 $(n/8)(V_{REF}/x)=8n/x$ LSB：

$$
v_{OUT}=8m+\frac{8n}{x}\ \mathrm{LSB}.
$$

$$
\begin{aligned}
\text{inside a group }(n\to n+1):&\quad \mathrm{DNL}_g=\frac8x-1,\\
\text{group transition }(n=7\to0,\ m\to m+1):&\quad \text{step}=8-\frac{56}{x},\quad \mathrm{DNL}_t=7-\frac{56}{x}.
\end{aligned}
$$

该 DAC 的 DNL 为 $\max\left(|\mathrm{DNL}_g|,|\mathrm{DNL}_t|\right)$。

### 第 2 步 — $|\mathrm{DNL}|=2$ LSB 的解

组间 DNL 随 $1/x$ 的变化速度是组内 DNL 的七倍，因此在 $x=8$ 两侧都是它先达到 $\pm2$：

$$
7-\frac{56}{x}=-2\ \Longrightarrow\ x=\frac{56}{9}=6.22,\qquad
7-\frac{56}{x}=+2\ \Longrightarrow\ x=\frac{56}{5}=11.2 .
$$

在 $x=56/9$ 处，组内 DNL 为 $8/6.22-1=+0.29$ LSB，所以最坏情况确实在组间跳变处：那里每个台阶为 $8-9=-1$ LSB，即输出下降 1 LSB。

### 第 3 步 — 最小的 $x$

当 $x<56/9$ 时组间 DNL 比 $-2$ LSB 更负，DNL 幅值超过 2 LSB；因此 DNL 恰为 2 LSB 的最小除数为

$$
x=\frac{56}{9}\approx6.22 .
$$

若只看组内 DNL，它要到 $x=8/3$ 才达到 $+2$，但此时组间 DNL 为 $7-56/(8/3)=-14$ LSB，所以该值并不对应该 DAC 的 2 LSB DNL。
