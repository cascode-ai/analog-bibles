# 详细步骤 - A026

保持缓变沟道推导不变，只把常数 $V_T$ 换成随位置变化的形式。此时反型电荷沿沟道下降得更快，对同一电流关系从源极到漏极积分，就得到修正后的线性区方程。

### 第 1 步 — 阈值变化时的反型电荷

把 $V_T=V_{T0}+\alpha v(y)$ 代入 $Q_I(y)=C_{ox}[v_{GS}-v(y)-V_T]$：

$$
Q_I(y)=C_{ox}\left[v_{GS}-V_{T0}-(1+\alpha)\,v(y)\right].
$$

现在沟道电压以权重 $1+\alpha$（而不是 1）减少反型电荷，因为 $v(y)$ 升高既降低了栅-沟道电压，又抬高了局部阈值。

### 第 2 步 — 从源极到漏极积分

漏极电流在每个截面上都相同，因此对 $i_D\,dy=W\mu_nQ_I(y)\,dv$ 积分，$y$ 从 0 到 $L$，$v$ 从 0 到 $v_{DS}$：

$$
\int_0^L i_D\,dy=W\mu_nC_{ox}\int_0^{v_{DS}}\left[v_{GS}-V_{T0}-(1+\alpha)v\right]dv ,
$$

$$
i_DL=W\mu_nC_{ox}\left[(v_{GS}-V_{T0})v_{DS}-(1+\alpha)\frac{v_{DS}^2}{2}\right].
$$

### 第 3 步 — 结果

$$
i_D=\frac{\mu_nC_{ox}W}{L}\left[(v_{GS}-V_{T0})v_{DS}-(1+\alpha)\frac{v_{DS}^2}{2}\right].
$$

$\alpha=0$ 时它退化为阈值恒定的表达式，且 $V_T=V_{T0}$。

### 第 4 步 — 对饱和的影响

令 $\partial i_D/\partial v_{DS}=0$，得到电流达到峰值时的漏压，此时 $Q_I(L)=0$，沟道在漏端夹断：

$$
v_{DS(sat)}=\frac{v_{GS}-V_{T0}}{1+\alpha},
\qquad
i_{D(sat)}=\frac{\mu_nC_{ox}W}{2(1+\alpha)L}\,(v_{GS}-V_{T0})^2 .
$$

阈值沿沟道升高（体效应的局部作用）使饱和电压和饱和电流都按因子 $1+\alpha$ 减小。
