# 详细步骤 - A471

$R_9=16R$ 时低 4 位是准确的，而 $R_{10}$ 决定高 4 位的增益 $g=R/R_{10}$。于是每组 16 个码字内部的台阶始终为 1 LSB；只有低 4 位从 15 翻转到 0 的主进位台阶与 $g$ 有关。单调性要求这些台阶非负。

### 第 1 步 — 以 LSB 表示的输出

由三个反相级得

$$
v_{out}=\frac{R}{R_{10}}V_{REF}\left(\frac{b_0}{2}+\cdots+\frac{b_3}{16}\right)+\frac{R}{R_9}V_{REF}\left(\frac{b_4}{2}+\cdots+\frac{b_7}{16}\right).
$$

取 $R_9=16R$、$g=R/R_{10}$、$1\,\mathrm{LSB}=V_{REF}/256$，高、低 4 位的数值分别为 $m$ 和 $n$，取值均为 0–15：

$$
v_{out}=V_{REF}\left[g\frac{m}{16}+\frac{n}{256}\right]=16g\,m+n\ \ \mathrm{LSB}.
$$

### 第 2 步 — 台阶大小

$$
\begin{aligned}
\text{inside a group }(n\to n+1):&\quad 1\ \mathrm{LSB},\\
\text{major transition }(n=15\to0,\ m\to m+1):&\quad 16g-15\ \mathrm{LSB}.
\end{aligned}
$$

理想情况 $g=1$ 时主进位台阶为 1 LSB。

### 第 3 步 — 单调性条件

主进位台阶非负时输出就不会下降：

$$
16g-15\ge0\;\Longrightarrow\;g=\frac{R}{R_{10}}\ge\frac{15}{16}\;\Longrightarrow\;R_{10}\le\frac{16}{15}R=1.067R .
$$

当 $R_{10}=16R/15$ 时主进位台阶恰为零（两个码字对应同一输出电平），因此严格单调要求 $R_{10}<16R/15$。更小的 $R_{10}$（$g>1$）只会增大主进位台阶，产生正的 DNL（丢失电平），但输出不会下降，所以单调性对 $R_{10}$ 没有下限。转换器在下述条件下保持单调：

$$
R_{10}\le\frac{16}{15}R\approx1.067R .
$$
