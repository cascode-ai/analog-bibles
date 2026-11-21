# 详细步骤 - A254

把 $\omega=GB$ 处的相位裕度写成 $180°$ 减去各极点和右半平面零点的滞后，令其为 45°，求 $|p_2|$，再换算为绝对单位。

### 第 1 步 — 相位裕度方程

$F=1$ 时，各奇点在 $\omega=GB$ 处的贡献为：

- 主极点：$\arctan(GB/|p_1|)=\arctan A_v(0)\approx90°$（直流增益很大）；
- 位于 $-3GB$ 的极点：滞后 $\arctan(1/3)=18.43°$；
- 位于 $20GB$ 的右半平面零点：因子 $1-s/z$ 的相位为 $-\arctan(\omega/z)$，故增加 $\arctan(1/20)=2.86°$ 的滞后；
- 第二极点：滞后 $\arctan(GB/|p_2|)$。

$$
\Phi_M=180°-90°-\arctan\frac{GB}{|p_2|}-\arctan\frac13-\arctan\frac1{20}.
$$

### 第 2 步 — 求 $p_2$

令 $\Phi_M=45°$：

$$
\arctan\frac{GB}{|p_2|}=90°-45°-18.43°-2.86°=23.70°,
$$

$$
\frac{GB}{|p_2|}=\tan23.70°=0.439\quad\Rightarrow\quad|p_2|=2.28\,GB .
$$

### 第 3 步 — 绝对位置

$GB=1$ MHz，即 $2\pi\times10^6$ rad/s，

$$
p_2=-2.28\,(2\pi\times10^6\ \mathrm{rad/s})=-1.43\times10^{7}\ \mathrm{rad/s}\quad(\approx-2.28\ \mathrm{MHz}).
$$

$|p_2|$ 更大只会增大裕度，所以这是获得 45° 所需的最小距离。若没有零点，同样的计算恰好给出 $2.0\,GB$；零点的 2.9° 滞后使 $p_2$ 外移约 14%。
