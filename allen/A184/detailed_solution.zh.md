# 详细步骤 - A184

$v_{IN}=V_{DD}$ 时，n 沟道器件被强烈驱动进入非饱和区，而栅压固定的负载管仍保持饱和并决定电流。先求出每个放大器的负载电流，再求非饱和器件承载该电流所需的很小的漏源电压；$v_{OUT}(\min)$ 等于 $V_{SS}$ 加上这些电压之和。所有电压都相对于地，$V_{SS}=-5$ V。

### 第 1 步 — 反相器：负载电流

M2 饱和，$V_{SG2}=V_{DD}-V_{GG2}=5$ V，$\beta_2=K'_P(W/L)_2=50\ \mu\mathrm{A/V^2}$：

$$
I=\frac{\beta_2}2(V_{SG2}-|V_{TP}|)^2=\frac{50\ \mu\mathrm{A/V^2}}2(5-0.7)^2=462\ \mu\mathrm A .
$$

### 第 2 步 — 反相器：$v_{OUT}(\min)$

M1 的 $V_{GS1}=V_{DD}-V_{SS}=10$ V，$\beta_1=K'_N(W/L)_1=330\ \mu\mathrm{A/V^2}$。非饱和区中

$$
I=\beta_1\left[(V_{GS1}-V_{TN})v_{DS1}-\frac{v_{DS1}^2}2\right]
\quad\Rightarrow\quad
462\ \mu\mathrm A=(330\ \mu\mathrm{A/V^2})\left[(9.3\ \mathrm V)v_{DS1}-\frac{v_{DS1}^2}2\right].
$$

取较小的根 $v_{DS1}=0.152$ V（闭式解为 $v_{DS1}=(V_{DD}-V_{SS}-V_{TN})\{1-\sqrt{1-(\beta_2/\beta_1)[(V_{DD}-V_{GG2}-|V_{TP}|)/(V_{DD}-V_{SS}-V_{TN})]^2}\}$），故

$$
v_{OUT}(\min)=V_{SS}+v_{DS1}=-5+0.152=-4.85\ \mathrm V .
$$

### 第 3 步 — 共源共栅：负载电流

共源共栅放大器的负载 M3 的 $V_{SG3}=V_{DD}-V_{GG3}=2.5$ V，尺寸与 M2 相同：

$$
I=\frac{50\ \mu\mathrm{A/V^2}}2(2.5-0.7)^2=81\ \mu\mathrm A ,
$$

远小于反相器的 462 µA。

### 第 4 步 — 共源共栅：$v_{OUT}(\min)$

M1（$V_{GS1}=10$ V）和 M2（$V_{GS2}=V_{GG2}-V_{SS}-v_{DS1}\approx5$ V）都处于深度非饱和区，各自相当于沟道电阻 $1/[\beta(V_{GS}-V_T)]$（即该电路的串联电阻结果，此处电压从 $V_{SS}$ 起算）：

$$
\begin{aligned}
v_{DS1}&\approx\frac{I}{\beta_1(V_{DD}-V_{SS}-V_{TN})}=\frac{81\ \mu\mathrm A}{(330\ \mu\mathrm{A/V^2})(9.3\ \mathrm V)}=0.026\ \mathrm V,\\
v_{DS2}&\approx\frac{I}{\beta_2(V_{GG2}-V_{SS}-V_{TN})}=\frac{81\ \mu\mathrm A}{(330\ \mu\mathrm{A/V^2})(4.3\ \mathrm V)}=0.057\ \mathrm V,
\end{aligned}
$$

$$
v_{OUT}(\min)=V_{SS}+v_{DS1}+v_{DS2}=-5+0.083=-4.92\ \mathrm V .
$$

不作线性化、完整求解非饱和区方程，结果相差不到 1 mV。

### 第 5 步 — 比较

两个放大器都能把输出拉到距 $V_{SS}$ 约 0.1–0.15 V 以内：反相器为 −4.85 V，共源共栅放大器为 −4.92 V。共源共栅放大器甚至略低，因为其负载电流（81 µA）远小于反相器的（462 µA），而且 $v_{IN}=V_{DD}$ 时多出的串联器件 M2 只是一个很小的线性区电阻，仅占 57 mV。作为对比，所有晶体管仍保持饱和时的最低输出，反相器为 $V_{SS}+V_{DS1}(\mathrm{sat})=-3.33$ V，共源共栅放大器为 $V_{SS}+V_{DS1}(\mathrm{sat})+V_{DS2}(\mathrm{sat})=-3.60$ V；但这里定义的 $v_{OUT}(\min)$ 是线性区下的极限。
