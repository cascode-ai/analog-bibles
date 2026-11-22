# 详细步骤 - G321

分母对 $C$ 是线性的，可写成 $G(s)+C\,H(s)$，因此极点以 $C$ 为增益参数沿根轨迹移动。起点（$C=0$）是 $G$ 的根，终点（$C\to\infty$）是 $H$ 的根。由实轴规则，再加上判别式始终不变号的校核，可知两个极点始终为实数并相互远离，即极点分裂。

### 第 1 步 — 拆分分母

合并含 $C$ 的项：
$$
\begin{aligned}
D(s)&=\underbrace{(1+sR_1C_1)(1+sR_2C_2)}_{G(s)}+C\,\underbrace{s\left[(R_1+R_2+g_mR_1R_2)+sR_1R_2(C_1+C_2)\right]}_{H(s)} .
\end{aligned}
$$
校核：$G$ 给出 $s(R_1C_1+R_2C_2)$ 和 $s^2R_1R_2C_1C_2$ 两项，$H$ 给出 $s\,C(R_1+R_2+g_mR_1R_2)$ 和 $s^2R_1R_2C(C_1+C_2)$ 两项，与给定分母一致。

### 第 2 步 — 起点与终点

$C=0$ 时极点为 $G$ 的根：
$$
-\frac1{R_1C_1}=-\frac1{(200\ \mathrm{k\Omega})(0.1\ \mathrm{pF})}=-5.0\times10^7\ \mathrm{rad/s},\qquad
-\frac1{R_2C_2}=-\frac1{(100\ \mathrm{k\Omega})(8\ \mathrm{pF})}=-1.25\times10^6\ \mathrm{rad/s}.
$$
$C\to\infty$ 时极点趋于 $H$ 的根：
$$
s=0,\qquad
s=-\frac{R_1+R_2+g_mR_1R_2}{R_1R_2(C_1+C_2)}=-\frac{4.03\times10^7\ \Omega}{(2\times10^{10}\ \Omega^2)(8.1\ \mathrm{pF})}=-2.49\times10^8\ \mathrm{rad/s}.
$$
由于分子中 $g_mR_1R_2$ 占主导，第二个终点接近 $-g_m/(C_1+C_2)=-2.47\times10^8$ rad/s。

### 第 3 步 — 实轴上的轨迹段，无分离点

参数为正时，实轴上某点右侧的起点与终点总数为奇数，该点即在轨迹上。因此轨迹占据 $[-1.25\times10^6,\,0]$ 和 $[-2.49\times10^8,\,-5\times10^7]$ 两段。每段恰好一条支路：

- 慢极点从 $-1.25\times10^6$ rad/s 移向原点；
- 快极点从 $-5\times10^7$ rad/s 向外移到 $-2.49\times10^8$ rad/s。

两条支路永不相遇，因此极点不会变成复数。为确认这一点，把分母写成 $1+b_1s+b_2s^2$，其中 $b_1=A+BC$，$A=R_1C_1+R_2C_2=0.82\ \mu\mathrm s$，$B=R_1+R_2+g_mR_1R_2=4.03\times10^7\ \Omega$。判别式为
$$
b_1^2-4b_2=\left(A^2-4R_1R_2C_1C_2\right)+C\left[2AB-4R_1R_2(C_1+C_2)\right]+B^2C^2 .
$$
各系数为 $6.1\times10^{-13}\ \mathrm{s^2}$、$65.4\ \mathrm{s\,\Omega}$ 和 $1.6\times10^{15}\ \Omega^2$，都为正，因此对所有 $C\ge0$ 判别式都为正。

### 第 4 步 — 数值标定与渐近值

几个 $C$ 值下 $1+b_1s+b_2s^2=0$ 的根：

| $C$（pF） | 慢极点（rad/s） | 快极点（rad/s） |
|---|---|---|
| 0 | $-1.25\times10^6$ | $-5.0\times10^7$ |
| 0.01 | $-8.3\times10^5$ | $-6.9\times10^7$ |
| 0.1 | $-2.1\times10^5$ | $-1.50\times10^8$ |
| 1 | $-2.4\times10^4$ | $-2.31\times10^8$ |
| 10 | $-2.5\times10^3$ | $-2.47\times10^8$ |
| 100 | $-2.5\times10^2$ | $-2.49\times10^8$ |

$C$ 较大时，相距很远的两个极点可很好地近似为
$$
p_1\approx-\frac1{g_mR_1R_2C},\qquad
p_2\approx-\frac{g_mC}{C_1C_2+C(C_1+C_2)}\ \to\ -\frac{g_m}{C_1+C_2}.
$$
慢极点按 $1/C$ 下降，快极点则趋于约 $2.5\times10^8$ rad/s。

![对数坐标下极点随 C 变化的轨迹：慢极点从 1.25×10⁶ rad/s 出发，按 1/C 移向原点；快极点从 5×10⁷ rad/s 出发，增大到 2.49×10⁸ rad/s；两者始终在负实轴上](/q/G321/solution-root-locus.zh.svg)

$s=+g_m/C$ 处的右半平面零点是零点而不是极点，不出现在该轨迹中。
