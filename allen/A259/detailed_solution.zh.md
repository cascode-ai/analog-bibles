# 详细步骤 - A259

调零电阻使零点位于 $z_1=1/[C_c(1/g_{mII}-R_z)]$，括号为零时零点移到无穷远。取该 $R_z$，由三次分母求三个极点，先用根相距很远时的近似，再精确求解。

### 第 1 步 — 零点位于无穷远时的 $R_z$

$V_{out}/V_{in}$ 的分子为 $1-s\,C_c(1/g_{mII}-R_z)$。其 $s$ 项消失、零点移到无穷远的条件是

$$
R_z=\frac{1}{g_{mII}}=\frac{1}{500\ \mu\mathrm S}=2\ \mathrm{k\Omega}.
$$

### 第 2 步 — 分母系数

分母为 $1+bs+cs^2+ds^3$，其中

$$
\begin{aligned}
b&=(C_{II}+C_c)R_{II}+(C_I+C_c)R_I+g_{mII}R_IR_{II}C_c+R_zC_c=2.332\times10^{-4}\ \mathrm s,\\
c&=R_IR_{II}(C_IC_{II}+C_cC_I+C_cC_{II})+R_zC_c(R_IC_I+R_{II}C_{II})=2.814\times10^{-12}\ \mathrm{s^2},\\
d&=R_IR_{II}R_zC_IC_{II}C_c=4.5\times10^{-21}\ \mathrm{s^3}.
\end{aligned}
$$

根相距很远时，$p_1\approx-1/b$，$p_2\approx-b/c$，$p_4\approx-c/d$；下面的简化形式来自 $R_z\ll R_I,R_{II}$ 和 $C_I\ll C_c,C_{II}$。

### 第 3 步 — 各极点

主极点，取 $b$ 中的密勒项：

$$
p_1\approx\frac{-1}{g_{mII}R_{II}R_IC_c}=\frac{-1}{(500\ \mu\mathrm S)(100\ \mathrm{k\Omega})(150\ \mathrm{k\Omega})(30\ \mathrm{pF})}=-4.44\times10^{3}\ \mathrm{rad/s}.
$$

输出极点：

$$
p_2\approx\frac{-g_{mII}}{C_{II}}=\frac{-500\ \mu\mathrm S}{5\ \mathrm{pF}}=-100\times10^{6}\ \mathrm{rad/s},
$$

若用更完整的形式，$-g_{mII}C_c/(C_IC_{II}+C_cC_I+C_cC_{II})=-81\times10^6$ rad/s。

由 $R_z$ 产生的极点：

$$
p_4\approx\frac{-1}{R_zC_I}=\frac{-1}{(2\ \mathrm{k\Omega})(1\ \mathrm{pF})}=-500\times10^{6}\ \mathrm{rad/s}.
$$

### 第 4 步 — 精确根与结果

对三次方程数值求解：

| 根 | 近似值 (rad/s) | 精确根 (rad/s) |
|---|---|---|
| $p_1$ | $-4.44\times10^3$ | $-4.29\times10^3$ |
| $p_2$ | $-100\times10^6$（完整形式为 $-81\times10^6$） | $-98.3\times10^6$ |
| $p_4$ | $-500\times10^6$ | $-527\times10^6$ |
| $z_1$ | $\infty$ | $\infty$ |

近似值的误差在约 20% 以内。精确的 $p_1$ 略小于 $1/(g_{mII}R_IR_{II}C_c)$，因为 $g_{mII}R_{II}=50$ 不算很大，$b$ 中其他项贡献了几个百分点。取 $R_z=2$ kΩ 后右半平面零点被消除，剩下约 $-1\times10^8$ rad/s 的输出极点和约 $-5\times10^8$ rad/s 的高频极点。
