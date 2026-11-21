# 详细步骤 - A042

氧化层均匀且忽略边缘效应时，每个电容都与其正方形上极板的面积成正比。最坏失配出现在两个极板偏差方向相反时；要求该比值不超过 0.1 %，解出绘制边长。

### 第 1 步 — 正方形极板的电容

绘制边长为 $d$、边长误差为 $\delta$（$|\delta|\le0.05\ \mu$m）时，

$$
C=C_{area}\,(d+\delta)^2 ,
$$

其中 $C_{area}$ 是单位面积电容，两个电容相同。

### 第 2 步 — 最坏情况失配条件

两个偏差相互独立，因此最坏情况是一个电容为 $d+0.05\ \mu$m，另一个为 $d-0.05\ \mu$m。要求为

$$
\frac{C_1}{C_2}=\left(\frac{d+0.05\ \mu\mathrm m}{d-0.05\ \mu\mathrm m}\right)^2\le1.001
\quad\Rightarrow\quad
\frac{d+0.05\ \mu\mathrm m}{d-0.05\ \mu\mathrm m}\le\sqrt{1.001}=1.0005 .
$$

### 第 3 步 — 解出边长

$$
d\ge\frac{(0.05\ \mu\mathrm m)(1+1.0005)}{1.0005-1}=200.1\ \mu\mathrm m .
$$

小误差近似更直观地给出同一结果：每个电容的相对误差至多为 $2\delta/d$（面积取决于边长的平方），最坏情况下两个误差相加，故

$$
\frac{\Delta C}{C}\approx\frac{4\delta}{d}=\frac{0.2\ \mu\mathrm m}{d}\le0.001
\quad\Rightarrow\quad d\ge200\ \mu\mathrm m .
$$

### 第 4 步 — 结果

每个电容约需 $200\ \mu\mathrm m\times200\ \mu\mathrm m\approx4\times10^4\ \mu\mathrm m^2$，按典型的 1 fF/µm² 计约为 40 pF。要求如此苛刻，是因为边缘误差是一个固定长度：相对误差只按 $1/d$ 减小。若 0.1 % 指的是单个电容的偏差而不是一对电容的最坏比值，则由 $2\delta/d\le0.001$ 得 $d\ge100\ \mu$m。实际中，比值匹配采用相同的单位电容，使边缘误差随比值成比例变化，从而在很大程度上相互抵消。
