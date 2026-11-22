# 详细步骤 - A167

M1、M2 和 M3 串联，流过同一电流，而该电流由唯一饱和的器件 M3 决定。M1 和 M2 都处于深度非饱和区，相当于两个串联的沟道电阻；各自的漏源电压等于电流乘以其电阻，$v_{OUT}$ 为二者之和。

### 第 1 步 — 串联电流

M3 饱和，$v_{SG3}=V_{DD}-V_{GG3}$，忽略 λ 时其电流只取决于固定电压：

$$
I=i_{D3}=\frac{\beta_3}2(V_{DD}-V_{GG3}-|V_{T3}|)^2 .
$$

沿串联支路列基尔霍夫电流定律（KCL）（输出端和 M1–M2 之间的节点都没有其他支路）得 $i_{D1}=i_{D2}=I$。

### 第 2 步 — M1 的漏源电压

M1 的 $v_{GS1}=V_{DD}$，$v_{DS1}$ 很小，因此略去非饱和区电流的二次项：

$$
I\cong\beta_1(V_{DD}-V_{T1})v_{DS1}
\quad\Rightarrow\quad
v_{DS1}=\frac{I}{\beta_1(V_{DD}-V_{T1})}.
$$

### 第 3 步 — M2 的漏源电压

M2 的源极位于 $v_{DS1}$，故 $v_{GS2}=V_{GG2}-v_{DS1}$，$v_{DS2}=v_{OUT}-v_{DS1}$。按提示，$V_{GG2}-V_{T2}\gg v_{DS1}$，因此从栅极驱动中略去 $v_{DS1}$；$v_{DS2}$ 很小，二次项也可略去：

$$
I\cong\beta_2(V_{GG2}-V_{T2})v_{DS2}
\quad\Rightarrow\quad
v_{DS2}=\frac{I}{\beta_2(V_{GG2}-V_{T2})}.
$$

### 第 4 步 — 求和与代入

输出电压就是两个器件上的电压之和：

$$
v_{OUT}(\min)=v_{DS1}+v_{DS2}=I\left[\frac1{\beta_1(V_{DD}-V_{T1})}+\frac1{\beta_2(V_{GG2}-V_{T2})}\right].
$$

取 $\beta_1=\beta_2$，把因子 $1/\beta_2$ 提到括号外，并代入第 1 步的 $I$：

$$
v_{OUT}(\min)=\frac{\beta_3}{2\beta_2}(V_{DD}-V_{GG3}-|V_{T3}|)^2\left(\frac1{V_{GG2}-V_{T2}}+\frac1{V_{DD}-V_{T1}}\right),
$$

即题中结果。括号内每一项都等于 $\beta$ 乘以一个线性区器件的沟道电阻 $1/[\beta(V_{GS}-V_T)]$，因此当 M1、M2 相对 M3 较宽且栅极驱动较大时，$v_{OUT}(\min)$ 较小。
