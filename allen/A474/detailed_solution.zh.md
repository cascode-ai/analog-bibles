# 详细步骤 - A474

用实际耦合电容 $C_x+\Delta C_x$ 求解两级阵列的双节点电荷平衡，再利用标称设计关系 $C=7C_x/8$ 表示单位电容，使结果只依赖于 $\varepsilon=\Delta C_x/C_x$。

### 第 1 步 — 电荷方程

设 MSB 节点（缓冲器输入）电压为 $v_{OUT}$，LSB 节点电压为 $v_L$，两部分的码值为

$$
A=\sum_{i=1}^{3}b_{i-1}2^{3-i}=4b_0+2b_1+b_2,\qquad B=\sum_{i=4}^{6}b_{i-1}2^{6-i}=4b_3+2b_4+b_5 .
$$

MSB 一侧总电容为 $7C$，LSB 一侧为 $8C$（含端接电容 $C$），耦合电容为 $C_x'=C_x+\Delta C_x$。所有电容初始都已放电，所以每个浮空节点的电荷保持为零：

$$
\begin{aligned}
7C\,v_{OUT}+C_x'\left(v_{OUT}-v_L\right)&=C\,V_{REF}A,\\
8C\,v_L+C_x'\left(v_L-v_{OUT}\right)&=C\,V_{REF}B .
\end{aligned}
$$

### 第 2 步 — 解出 $v_{OUT}$

由第二式得 $v_L=(CV_{REF}B+C_x'v_{OUT})/(8C+C_x')$。代入第一式，$v_{OUT}$ 的系数变为 $\left[(7C+C_x')(8C+C_x')-C_x'^2\right]/(8C+C_x')=(56C^2+15CC_x')/(8C+C_x')$，因此

$$
v_{OUT}=V_{REF}\,\frac{A\left(8C+C_x'\right)+C_x'B}{56C+15C_x'} .
$$

### 第 3 步 — 用 $C_x$ 和 $\Delta C_x$ 表示

标称设计给出 $C_x=8C/7$，即 $C=7C_x/8$。令 $C_x'=C_x(1+\varepsilon)$，$\varepsilon=\Delta C_x/C_x$，分子变为 $C_x[(8+\varepsilon)A+(1+\varepsilon)B]$，分母变为 $C_x(64+15\varepsilon)$：

$$
v_{OUT}=V_{REF}\,\frac{(8+\varepsilon)A+(1+\varepsilon)B}{64+15\varepsilon}
=\frac{V_{REF}}{8}\left(1-\frac{7\varepsilon}{64+15\varepsilon}\right)\left[A+\left(1+\frac{7\varepsilon}{8+\varepsilon}\right)\frac{B}{8}\right].
$$

展开各因子可验证第二种形式：$\frac{V_{REF}}{8}\cdot\frac{8(8+\varepsilon)}{64+15\varepsilon}\left[A+\frac{8(1+\varepsilon)}{8+\varepsilon}\cdot\frac B8\right]$ 等于第一种形式。

### 第 4 步 — 一阶形式与检验

当 $|\varepsilon|\ll1$ 时，

$$
v_{OUT}\approx\frac{V_{REF}}{8}\left(1-\frac{7\Delta C_x}{64C_x}\right)\left[\sum_{i=1}^{3}b_{i-1}2^{3-i}+\left(1+\frac{7\Delta C_x}{8C_x}\right)\sum_{i=4}^{6}\frac{b_{i-1}2^{6-i}}{8}\right].
$$

当 $\Delta C_x=0$ 时它化为 $V_{REF}(A/8+B/64)$，即理想 6 位输出。因此 $C_x$ 的误差有两种作用：改变总增益（因子 $1-7\varepsilon/64$），并改变 LSB 部分相对 MSB 部分的权重（因子 $1+7\varepsilon/8$）。
