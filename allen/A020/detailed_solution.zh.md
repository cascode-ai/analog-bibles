# 详细步骤 - A020

用新的电荷密度重复突变结的推导。耗尽区内没有可动载流子，空间电荷为 $\rho(x)=q[N_D(x)-N_A(x)]=qax$。电荷中性确定两边界之间的关系，高斯定律给出电场，对电场积分得到总电势 $\phi_0-v_D$，由此确定宽度。

### 第 1 步 — 电荷中性

由于两侧中性区内电场为零，耗尽区的净电荷必须为零：

$$
\int_{x_p}^{x_n}qax\,dx=\frac{qa}{2}\left(x_n^2-x_p^2\right)=0
\;\Rightarrow\;
x_p=-x_n .
$$

由于 $\rho(x)$ 是 $x$ 的奇函数，耗尽区关于冶金结对称；这与突变结不同，突变结的耗尽区主要伸入掺杂较轻的一侧。

### 第 2 步 — 电场

一维高斯定律 $dE/dx=\rho/\varepsilon_{Si}=qax/\varepsilon_{Si}$，在边界条件 $E(\pm x_n)=0$ 下积分：

$$
E(x)=\frac{qa}{2\varepsilon_{Si}}\left(x^2-x_n^2\right),\qquad -x_n\le x\le x_n .
$$

电场为负（由 n 指向 p），呈抛物线分布，在 $x=0$ 处幅值最大，为 $qax_n^2/(2\varepsilon_{Si})$。

### 第 3 步 — 耗尽区两端的电势

从 p 侧边界到 n 侧边界的电势升高为

$$
\phi_0-v_D=-\int_{-x_n}^{x_n}E(x)\,dx
=-\frac{qa}{2\varepsilon_{Si}}\left[\frac{x^3}{3}-x_n^2x\right]_{-x_n}^{x_n}
=-\frac{qa}{2\varepsilon_{Si}}\left(-\frac{4}{3}x_n^3\right)
=\frac{2qa\,x_n^3}{3\varepsilon_{Si}} .
$$

### 第 4 步 — 耗尽区边界与宽度

解出 $x_n$，并利用 $x_p=-x_n$：

$$
x_n=\left[\frac{3\varepsilon_{Si}(\phi_0-v_D)}{2qa}\right]^{1/3},
\qquad
x_p=-\left[\frac{3\varepsilon_{Si}(\phi_0-v_D)}{2qa}\right]^{1/3}.
$$

总宽度为

$$
x_d=x_n-x_p=2x_n=\left[\frac{12\varepsilon_{Si}(\phi_0-v_D)}{qa}\right]^{1/3}.
$$

现在边界按 $(\phi_0-v_D)$ 的立方根而不是平方根变化。由于结电容为 $\varepsilon_{Si}A/x_d$，它按 $(\phi_0-v_D)^{-1/3}$ 变化：缓变系数（grading coefficient）为 $m=1/3$，而突变结为 $1/2$。该结果只在 $x_n$ 仍位于 [图 1] 分布的线性部分时成立；反向偏压很大时，耗尽区边界进入平坦区，特性趋向于突变结。
