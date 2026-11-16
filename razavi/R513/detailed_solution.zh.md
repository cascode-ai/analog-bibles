# 详细步骤 - R513

**思路。** 设 $H(s) = A_0/[(1 + s/\omega_{p1})(1 + s/\omega_{p2})]$，相位裕度只取决于增益交点 $\omega_u$ 相对于 $\omega_{p2}$ 的位置。先利用 $\beta = 1$ 时 60° 的设计，求出以 $\omega_{p2}$ 为单位的 $A_0\omega_{p1}$，再求出反馈系数为 $\beta_1$ 时新的增益交点和新的相位裕度。

### 第 1 步 — 双极点模型的环路增益（loop gain）

增益交点远高于主极点（$\omega \gg \omega_{p1}$，只要 $\beta A_0 \gg 1$ 就成立），因此 $|1 + j\omega/\omega_{p1}| \approx \omega/\omega_{p1}$，主极点几乎恰好贡献 $-90^\circ$，且

$$|\beta H(j\omega)| \approx \frac{\beta A_0\,\omega_{p1}}{\omega\sqrt{1 + (\omega/\omega_{p2})^2}} ,\qquad \angle\beta H(j\omega) \approx -90^\circ - \tan^{-1}\frac{\omega}{\omega_{p2}} .$$

在增益交点 $\omega_u$ 处 $|\beta H| = 1$，

$$\mathrm{PM} = 180^\circ + \angle\beta H(j\omega_u) = 90^\circ - \tan^{-1}\frac{\omega_u}{\omega_{p2}} .$$

$\beta$ 不进入相位表达式；它只移动 $\omega_u$。

### 第 2 步 — 利用 $\beta = 1$ 时 60° 的设计

$$90^\circ - \tan^{-1}\frac{\omega_{u1}}{\omega_{p2}} = 60^\circ
\quad\Longrightarrow\quad
\frac{\omega_{u1}}{\omega_{p2}} = \tan30^\circ = \frac{1}{\sqrt3} = 0.577 .$$

于是幅值条件 $|H(j\omega_{u1})| = 1$ 确定了 $A_0\omega_{p1}$：

$$\frac{A_0\,\omega_{p1}}{\omega_{u1}\sqrt{1 + (\omega_{u1}/\omega_{p2})^2}} = 1
\quad\Longrightarrow\quad
A_0\,\omega_{p1} = \omega_{u1}\sqrt{1 + \tfrac13} = \frac{\omega_{p2}}{\sqrt3}\cdot\frac{2}{\sqrt3} = \frac23\,\omega_{p2}.$$

这个增益带宽积（gain-bandwidth product）只是运放本身的属性，不随 $\beta$ 变化。

### 第 3 步 — $\beta = \beta_1$ 时新的增益交点

增益交点现在满足

$$\frac{\beta_1A_0\,\omega_{p1}}{\omega_u\sqrt{1 + (\omega_u/\omega_{p2})^2}} = 1 .$$

代入 $A_0\omega_{p1} = \tfrac23\omega_{p2}$，并记归一化的增益交点频率为 $x = \omega_u/\omega_{p2}$：

$$x\sqrt{1 + x^2} = \frac{2\beta_1}{3}
\quad\Longrightarrow\quad
x^2(1 + x^2) = \frac{4\beta_1^2}{9}
\quad\Longrightarrow\quad
x^4 + x^2 - \frac{4\beta_1^2}{9} = 0 .$$

取这个关于 $x^2$ 的二次方程的正根：

$$x^2 = \frac{-1 + \sqrt{1 + 16\beta_1^2/9}}{2}
\quad\Longrightarrow\quad
x = \sqrt{\frac{\sqrt{1 + 16\beta_1^2/9} - 1}{2}} .$$

用 $\beta_1 = 1$ 验算：$\sqrt{1 + 16/9} = 5/3$，因此 $x^2 = (5/3 - 1)/2 = 1/3$，$x = 1/\sqrt3$，与第 2 步一致。✓

### 第 4 步 — 新的相位裕度

$$\boxed{\mathrm{PM}(\beta_1) = 90^\circ - \tan^{-1}x,\qquad x = \sqrt{\frac{\sqrt{1 + 16\beta_1^2/9} - 1}{2}}}$$

**例，$\beta_1 = 0.5$：**

$$
\begin{aligned}
\frac{16\beta_1^2}{9} &= \frac{16\times0.25}{9} = 0.444,\\
\sqrt{1.444} &= 1.2019,\\
x^2 &= \frac{1.2019 - 1}{2} = 0.1009, \qquad x = 0.318,\\
\mathrm{PM} &= 90^\circ - \tan^{-1}0.318 = 90^\circ - 17.6^\circ = 72.4^\circ .
\end{aligned}
$$

**例，$\beta_1 = 0.25$：**

$$
\begin{aligned}
\frac{16\beta_1^2}{9} &= \frac{16\times0.0625}{9} = 0.111,\\
\sqrt{1.111} &= 1.0541,\\
x^2 &= \frac{1.0541 - 1}{2} = 0.0270, \qquad x = 0.164,\\
\mathrm{PM} &= 90^\circ - \tan^{-1}0.164 = 90^\circ - 9.3^\circ = 80.7^\circ .
\end{aligned}
$$

| $\beta_1$ | $x = \omega_u/\omega_{p2}$ | PM（双极点） | PM $\approx 90^\circ - \tan^{-1}(\beta_1/\sqrt3)$ |
|---|---|---|---|
| 1 | 0.577 | 60.0° | 60.0° |
| 0.75 | 0.455 | 65.5° | 66.6° |
| 0.5 | 0.318 | 72.4° | 73.9° |
| 0.25 | 0.164 | 80.7° | 81.8° |
| 0.1 | 0.067 | 86.2° | 86.7° |

### 第 5 步 — 更简单的近似与物理图像

忽略第二个极点对**幅值**的影响（一个因子 $\sqrt{1 + x^2}$，在 $\beta = 1$ 时也只有 1.15），增益交点与 $\beta$ 成正比：

$$\omega_u \approx \beta_1A_0\omega_{p1}\quad\text{and}\quad\omega_{u1} \approx A_0\omega_{p1}\ \ \Longrightarrow\ \ \omega_u \approx \beta_1\,\omega_{u1} = \frac{\beta_1}{\sqrt3}\,\omega_{p2},$$

其中 $\omega_{u1} = \omega_{p2}/\sqrt3$ 来自 60° 条件。于是

$$\mathrm{PM} \approx 90^\circ - \tan^{-1}\frac{\beta_1}{\sqrt3},$$

$\beta_1 = 0.5$ 时得 73.9°，$\beta_1 = 0.25$ 时得 81.8°，与双极点结果相差不超过 1.5°（见表的最后一列）。

减小 $\beta$ 会按比例缩小环路增益的幅值而不改变其相位，因此增益交点下移，而在更低的频率处 $\omega_{p2}$ 引入的相位滞后更小；当 $\beta_1 \to 0$ 时，PM 趋近 90°。因此，按单位增益反馈（最坏情况）补偿的放大器，在任何 $\beta < 1$ 下都是稳定的，而且裕度更大。该分析要求 $\beta_1A_0 \gg 1$，使主极点在增益交点处仍贡献 ≈ 90°。

### 结果

$$\mathrm{PM}(\beta_1) = 90^\circ - \tan^{-1}x,\qquad x = \frac{\omega_u}{\omega_{p2}} \text{ solving } x\sqrt{1 + x^2} = \frac{2\beta_1}{3},\ \text{ i.e. } x = \sqrt{\frac{\sqrt{1 + 16\beta_1^2/9} - 1}{2}} .$$

随着 $\beta_1$ 减小，相位裕度**增大**并趋近 90°，例如 $\beta_1 = 0.5$ 时 ≈ 72°，$\beta_1 = 0.25$ 时 ≈ 81°。忽略第二个极点对幅值的影响，可得更简单的估计 $\mathrm{PM} \approx 90^\circ - \tan^{-1}(\beta_1/\sqrt3)$（≈ 74° 和 ≈ 82°）。

**常见错误。** 认为 $\beta$ 减小时相位裕度变差（或保持不变）。$\beta H$ 的相位与 $\beta$ 无关；只有增益交点移动，而且是**向下**移动，远离 $\omega_{p2}$。

**常见错误。** 让相位裕度本身随 $\beta$ 按比例变化，例如 PM = 60°/$\beta_1$。应先由幅值条件求出新的增益交点，再计算该处的相位。

**常见错误。** 把 60° 条件当成 $\omega_{u1} = \omega_{p2}$。它确定的是 $\omega_{u1}/\omega_{p2} = \tan30^\circ$；$\omega_{u1} = \omega_{p2}$ 对应的是 45° 的相位裕度。
