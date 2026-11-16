# 详细步骤 - R504

**思路。** 在单位增益环路（$\beta = 1$）中，闭环增益（closed-loop gain）为 $H_{open}/(1 + H_{open})$。代入给定的 $H_{open}$，分子分母同乘以开环分母以消去繁分式，再展开。

### 第 1 步 — 单位反馈下的闭环增益

当 $\beta = 1$ 时，$V_{out}/V_{in} = H/(1 + \beta H)$ 变为

$$H_{closed}(s) = \frac{H_{open}(s)}{1 + H_{open}(s)} .$$

记 $H_{open} = N(s)/D(s)$，其中

$$N(s) = A_0\left(1 + \frac{s}{\omega_z}\right), \qquad D(s) = \left(1 + \frac{s}{\omega_{p1}}\right)\left(1 + \frac{s}{\omega_{p2}}\right).$$

将 $(N/D)/(1 + N/D)$ 的分子和分母同乘以 $D(s)$：

$$H_{closed} = \frac{N}{D + N} = \frac{A_0\left(1 + \dfrac{s}{\omega_z}\right)}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_{p2}}\right) + A_0\left(1 + \dfrac{s}{\omega_z}\right)} .$$

分子已经是所要求的形式：当 $\beta = 1$ 时，闭环零点就是开环零点。

### 第 2 步 — 展开分母

极点因子的乘积：

$$
\begin{aligned}
\left(1 + \frac{s}{\omega_{p1}}\right)\left(1 + \frac{s}{\omega_{p2}}\right) &= 1 + \frac{s}{\omega_{p2}} + \frac{s}{\omega_{p1}} + \frac{s^2}{\omega_{p1}\omega_{p2}}\\
&= \frac{s^2}{\omega_{p1}\omega_{p2}} + \left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}}\right)s + 1 .
\end{aligned}
$$

第二项为 $A_0(1 + s/\omega_z) = (A_0/\omega_z)s + A_0$。相加并按 $s$ 的幂次合并：

$$
\begin{aligned}
D + N &= \frac{s^2}{\omega_{p1}\omega_{p2}} + \left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}}\right)s + 1 + \frac{A_0}{\omega_z}s + A_0\\
&= \frac{s^2}{\omega_{p1}\omega_{p2}} + \left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}\right)s + A_0 + 1 .
\end{aligned}
$$

因此

$$H_{closed}(s) = \frac{A_0\left(1 + \dfrac{s}{\omega_z}\right)}{\dfrac{s^2}{\omega_{p1}\omega_{p2}} + \left(\dfrac{1}{\omega_{p1}} + \dfrac{1}{\omega_{p2}} + \dfrac{A_0}{\omega_z}\right)s + A_0 + 1},$$

这正是要证明的表达式。$\blacksquare$

### 第 3 步 — 合理性检验

- **直流（$s = 0$）：** $H_{closed}(0) = A_0/(1 + A_0)$，这正是开环增益（open-loop gain）有限时单位增益缓冲器（unity-gain buffer）熟知的增益（略小于 1）。
- **精确的零极点对消（pole–zero cancellation），即 $\omega_z = \omega_{p2}$：** 第 1 步的分母变为
$$\left(1 + \frac{s}{\omega_{p2}}\right)\left(1 + \frac{s}{\omega_{p1}}\right) + A_0\left(1 + \frac{s}{\omega_{p2}}\right) = \left(1 + \frac{s}{\omega_{p2}}\right)\left(1 + A_0 + \frac{s}{\omega_{p1}}\right),$$
因此 $(1 + s/\omega_{p2})$ 与分子约去，得
$$H_{closed}(s) = \frac{A_0}{1 + A_0 + s/\omega_{p1}} = \frac{A_0}{1 + A_0}\cdot\frac{1}{1 + \dfrac{s}{(1 + A_0)\omega_{p1}}} ,$$
这是一个只有一个极点（位于 $(1 + A_0)\omega_{p1}$）的一阶系统：只有一个时间常数且没有过冲，与题目所述一致。若 $\omega_z$ 与 $\omega_{p2}$ 略有差异，对消就不完全，会留下一个零极点对。

### 结果

$$H_{closed}(s) = \frac{H_{open}}{1 + H_{open}} = \frac{A_0(1 + s/\omega_z)}{(1 + s/\omega_{p1})(1 + s/\omega_{p2}) + A_0(1 + s/\omega_z)} = \frac{A_0\left(1 + \dfrac{s}{\omega_z}\right)}{\dfrac{s^2}{\omega_{p1}\omega_{p2}} + \left(\dfrac{1}{\omega_{p1}} + \dfrac{1}{\omega_{p2}} + \dfrac{A_0}{\omega_z}\right)s + A_0 + 1} .$$

**常见错误。** 使用 $H/(1 - H)$ 或 $1/(1 + H)$。对于负反馈，分母中是 1 加上环路增益（loop gain）；而 $1/(1 + H)$ 是误差（灵敏度）函数，不是闭环增益。

**常见错误。** 消去繁分式时忘了把“1”也乘以开环分母，结果分母中只剩 $1 + A_0(1 + s/\omega_z)$，丢失了 $s^2$ 项和 $1/\omega_{p1} + 1/\omega_{p2}$ 项。
