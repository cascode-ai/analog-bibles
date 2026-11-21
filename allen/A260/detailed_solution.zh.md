# 详细步骤 - A260

选择 $R_z$ 使零点 $z_1=1/[C_c(1/g_{mII}-R_z)]$ 落在输出极点 $p_2\approx-g_{mII}/C_{II}$ 上，再由三次分母近似地和精确地求出其余极点。

### 第 1 步 — 实现零极点对消的 $R_z$

令 $z_1=p_2$：

$$
\frac{1}{C_c(1/g_{mII}-R_z)}=-\frac{g_{mII}}{C_{II}}
\quad\Rightarrow\quad
R_z=\frac{1}{g_{mII}}+\frac{C_{II}}{g_{mII}C_c}=\frac{C_c+C_{II}}{g_{mII}C_c}.
$$

$$
R_z=\frac{35\ \mathrm{pF}}{(500\ \mu\mathrm S)(30\ \mathrm{pF})}=2.33\ \mathrm{k\Omega}.
$$

由于 $R_z>1/g_{mII}=2$ kΩ，零点位于左半平面：

$$
z_1=\frac{1}{(30\ \mathrm{pF})(2\ \mathrm{k\Omega}-2.333\ \mathrm{k\Omega})}=-100\times10^{6}\ \mathrm{rad/s}.
$$

### 第 2 步 — 分母系数

取 $R_z=2.333$ kΩ，

$$
\begin{aligned}
b&=(C_{II}+C_c)R_{II}+(C_I+C_c)R_I+g_{mII}R_IR_{II}C_c+R_zC_c=2.332\times10^{-4}\ \mathrm s,\\
c&=R_IR_{II}(C_IC_{II}+C_cC_I+C_cC_{II})+R_zC_c(R_IC_I+R_{II}C_{II})=2.821\times10^{-12}\ \mathrm{s^2},\\
d&=R_IR_{II}R_zC_IC_{II}C_c=5.25\times10^{-21}\ \mathrm{s^3}.
\end{aligned}
$$

### 第 3 步 — 各极点

在 $R_z\ll R_I,R_{II}$、$C_I\ll C_c,C_{II}$ 下采用根相距很远时的形式：

$$
p_1\approx\frac{-1}{g_{mII}R_{II}R_IC_c}=-4.44\times10^{3}\ \mathrm{rad/s},\qquad
p_2\approx\frac{-g_{mII}}{C_{II}}=-100\times10^{6}\ \mathrm{rad/s},
$$

$$
p_4\approx\frac{-1}{R_zC_I}=\frac{-1}{(2.333\ \mathrm{k\Omega})(1\ \mathrm{pF})}=-429\times10^{6}\ \mathrm{rad/s}.
$$

### 第 4 步 — 精确根与结果

| 根 | 近似值 (rad/s) | 精确值 (rad/s) |
|---|---|---|
| $p_1$ | $-4.44\times10^3$ | $-4.29\times10^3$ |
| $p_2$ | $-100\times10^6$ | $-102\times10^6$ |
| $z_1$ | $-100\times10^6$ | $-100\times10^6$ |
| $p_4$ | $-429\times10^6$ | $-435\times10^6$ |

零点与精确输出极点相差不到 2%，对消几乎完美。放大器剩下约 $-4.3\times10^3$ rad/s 的主极点和约 $-4.3\times10^8$ rad/s 的 $R_z$ 极点，后者现在限制了可用的 GB。
