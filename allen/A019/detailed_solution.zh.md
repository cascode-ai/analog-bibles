# 详细步骤 - A019

两个边界表达式含有共同因子 $2\varepsilon_{Si}(\phi_0-v_D)/[q(N_A+N_D)]$，只是掺杂浓度之比不同。把它提出来，两边界相减，再把两个比值通分合并。

### 第 1 步 — 提出公共项

定义

$$
k=\left[\frac{2\varepsilon_{Si}(\phi_0-v_D)}{q(N_A+N_D)}\right]^{1/2}.
$$

于是题给边界写成

$$
x_n=k\sqrt{\frac{N_A}{N_D}},\qquad x_p=-k\sqrt{\frac{N_D}{N_A}} .
$$

### 第 2 步 — 求宽度

由于 $x_p<0$，宽度等于两个幅值之和：

$$
x_d=x_n-x_p=k\left(\sqrt{\frac{N_A}{N_D}}+\sqrt{\frac{N_D}{N_A}}\right)
=k\,\frac{N_A+N_D}{\sqrt{N_AN_D}} .
$$

### 第 3 步 — 化简

平方并代入 $k^2$：

$$
x_d^2=\frac{2\varepsilon_{Si}(\phi_0-v_D)}{q(N_A+N_D)}\cdot\frac{(N_A+N_D)^2}{N_AN_D}
=\frac{2\varepsilon_{Si}(N_A+N_D)(\phi_0-v_D)}{qN_AN_D}.
$$

因此

$$
x_d=\left[\frac{2\varepsilon_{Si}(N_A+N_D)}{qN_AN_D}\right]^{1/2}(\phi_0-v_D)^{1/2}
=\left[\frac{2\varepsilon_{Si}}{q}\left(\frac1{N_A}+\frac1{N_D}\right)(\phi_0-v_D)\right]^{1/2}.
$$

### 第 4 步 — 校核

宽度按 $\sqrt{\phi_0-v_D}$ 增长，因此反向偏置（$v_D<0$）使耗尽区变宽。第二种形式表明掺杂较轻的一侧起主导作用：对 $N_D\gg N_A$ 的单边结，

$$
x_d\approx\left[\frac{2\varepsilon_{Si}(\phi_0-v_D)}{qN_A}\right]^{1/2}\approx|x_p| ,
$$

因为此时耗尽区几乎全部位于轻掺杂的 p 侧。
