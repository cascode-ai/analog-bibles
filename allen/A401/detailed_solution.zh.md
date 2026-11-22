# 详细步骤 - A401

电路对称且受差模驱动，因此响应是反对称的：尾节点为交流地，只需在一个输出节点列一个 KCL 方程。交叉耦合负载向每个输出注入正比于对侧输出的电流，这是正反馈；它在结果中表现为与 $G$ 并联的负电导 $-g_{m3}$。

### 第 1 步 — 差模变量

把反对称信号写成

$$
v_{i1}=-v_{i2}=\frac{\Delta V_i}2,\qquad v_{o1}=-\frac{\Delta v_{out}}2,\qquad v_{o2}=+\frac{\Delta v_{out}}2 .
$$

M1 与 M2 的源极信号大小相等、方向相反，尾节点没有信号，故 $v_{gs1}=\Delta V_i/2$。

### 第 2 步 — $v_{o1}$ 处的 KCL

流出节点 $v_{o1}$ 的电流：经 $C$ 和 $G$，以及流入 M1 漏极的 $g_{m1}v_{gs1}$。流入该节点的电流：来自 M3，其栅极接 $v_{o2}$、源极为交流地，提供 $g_{m3}v_{sg3}=-g_{m3}v_{o2}$。因此

$$
(sC+G)\,v_{o1}+g_{m1}\frac{\Delta V_i}2=-g_{m3}v_{o2}.
$$

代入差模变量并乘以 $-2$：

$$
(sC+G)\Delta v_{out}-g_{m1}\Delta V_i=g_{m3}\Delta v_{out}
\quad\Rightarrow\quad
(sC+G-g_{m3})\,\Delta v_{out}=g_{m1}\Delta V_i .
$$

由对称性，$v_{o2}$ 节点给出相同的方程。

### 第 3 步 — 传递函数与极点

取 $G=1/R$：

$$
\frac{\Delta V_{out}(s)}{\Delta V_i(s)}=\frac{g_{m1}}{G-g_{m3}+sC}
=\frac{g_{m1}R}{1-g_{m3}R+sRC}
=\frac{g_{m1}R/(1-g_{m3}R)}{1+s\,\dfrac{RC}{1-g_{m3}R}},
$$

其单一极点位于

$$
p=-\frac{1-g_{m3}R}{RC}=\frac{g_{m3}-G}C .
$$

### 第 4 步 — 两种情况下的行为

**$g_{m3}R<1$。** 极点位于左半平面，电路是稳定的放大器。其直流增益 $g_{m1}R/(1-g_{m3}R)$ 大于普通电阻负载时的 $g_{m1}R$，因为正反馈部分抵消了 $G$；带宽 $(1-g_{m3}R)/(RC)$ 按同一因子缩小。

**$g_{m3}R>1$。** 节点净电导 $G-g_{m3}$ 为负，极点移到右半平面的 $+(g_{m3}R-1)/(RC)$ 处。响应不再趋于稳定而是指数增长：电路发生再生，起锁存器作用。对输入阶跃 $\Delta V_i$，对 $\Delta v_{out}(s)=g_{m1}\Delta V_i/[s(sC-(g_{m3}-G))]$ 求反变换得

$$
\Delta v_{out}(t)=\frac{g_{m1}R}{g_{m3}R-1}\,\Delta V_i\left(e^{t/\tau_L}-1\right),\qquad
\tau_L=\frac{RC}{g_{m3}R-1}\approx\frac C{g_{m3}}\quad(g_{m3}R\gg1),
$$

初始输出差 $\Delta V_0$ 会再附加一项 $\Delta V_0e^{t/\tau_L}$。增长一直持续到器件离开小信号区、输出到达其极限。

当 $g_{m3}R=1$ 时极点位于原点，电路对输入积分；这是放大与锁存之间的分界。
