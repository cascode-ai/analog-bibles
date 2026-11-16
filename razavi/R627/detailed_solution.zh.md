# 详细步骤 - R627

**思路。** 在 $M_1$ 栅极处断开环路，让一个测试电压沿环路走一圈：先经过两个相同的共源级，每级在其漏极处有一个极点，再经过理想反相器。环路增益的直流值为 $(g_mR_D)^2$，并有两个重合的极点；求出其幅值为 1 的频率，并计算该频率处的相位。

### 第 1 步 — 断开环路

$M_1$ 的栅极不吸取电流，因此在这里断开环路不会改变任何负载效应。在栅极加测试电压 $V_{in}$，计算返回的 $V_{out}$。在小信号模型（small-signal model）中，取 $\lambda = 0$ 并只保留两个 $C_L$：$g_mV_{in}$ 从 E 抽取电流，$g_mV_E$ 从 F 抽取电流，每个节点都有 $R_D$ 和 $C_L$ 接到交流地，反相器给出 $V_{out} = -V_F$。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 开环传递函数

每个漏极看到的阻抗为

$$Z_E = R_D \parallel \frac{1}{sC_L} = \frac{R_D}{1 + sR_DC_L},$$

在 E 点应用 KCL 得 $g_mV_{in} = -V_E/Z_E$。节点 F 的情况完全相同，只是由 $V_E$ 驱动，因此

$$\frac{V_E}{V_{in}} = -\frac{g_mR_D}{1 + sR_DC_L}, \qquad \frac{V_F}{V_E} = -\frac{g_mR_D}{1 + sR_DC_L}, \qquad \frac{V_{out}}{V_F} = -1 .$$

三个因子相乘：

$$
\begin{aligned}
H(s) = \frac{V_{out}}{V_{in}} &= \left(-\frac{g_mR_D}{1 + sR_DC_L}\right)\left(-\frac{g_mR_D}{1 + sR_DC_L}\right)(-1)\\
&= -\frac{(g_mR_D)^2}{(1 + sR_DC_L)^2},
\end{aligned}
$$

两个重合的极点分别位于 E 和 F，均在

$$\omega_p = \frac{1}{R_DC_L}.$$

直流时 $H(0) = -(g_mR_D)^2 < 0$，因此反馈为**负反馈**。写成 $1/(1 + \beta H)$ 的形式时，环路增益为

$$\beta H(s) = \frac{(g_mR_D)^2}{(1 + s/\omega_p)^2}.$$

（若没有反相器，仅两个共源级就会在直流时形成正反馈，电路将发生锁定。）

### 第 3 步 — 单位增益频率

令 $A = g_mR_D$。在 $j\omega$ 轴上

$$\left|\beta H(j\omega)\right| = \frac{A^2}{\left|1 + j\omega/\omega_p\right|^2} = \frac{A^2}{1 + (\omega/\omega_p)^2}.$$

令其在 $\omega_u$ 处等于 1：

$$
\begin{aligned}
1 + \left(\frac{\omega_u}{\omega_p}\right)^2 &= A^2,\\
\frac{\omega_u}{\omega_p} &= \sqrt{A^2 - 1},\\
\omega_u &= \frac{\sqrt{(g_mR_D)^2 - 1}}{R_DC_L}.
\end{aligned}
$$

这要求 $A > 1$；若 $g_mR_D \le 1$，环路增益始终达不到单位增益，相位裕度没有定义（环路显然稳定）。

### 第 4 步 — 相位裕度

每个极点贡献 $-\tan^{-1}(\omega/\omega_p)$，因此

$$\angle\beta H(j\omega_u) = -2\tan^{-1}\frac{\omega_u}{\omega_p} = -2\tan^{-1}\sqrt{A^2 - 1},$$

$$\mathrm{PM} = 180^\circ - 2\tan^{-1}\sqrt{(g_mR_D)^2 - 1}.$$

直角边为 $\sqrt{A^2 - 1}$ 和 1 的直角三角形，其斜边为 $\sqrt{(A^2 - 1) + 1} = A$，因此 $\tan^{-1}\sqrt{A^2 - 1} = \cos^{-1}(1/A)$，且

$$\mathrm{PM} = 180^\circ - 2\cos^{-1}\frac{1}{A} = 2\left(90^\circ - \cos^{-1}\frac1A\right) = 2\sin^{-1}\frac{1}{g_mR_D}.$$

增益很大时，$\sin^{-1}x \approx x$：

$$\mathrm{PM} \approx \frac{2}{g_mR_D}\ \mathrm{rad} \approx \frac{115^\circ}{g_mR_D}.$$

| $g_mR_D$ | $\omega_u/\omega_p = \sqrt{A^2 - 1}$ | PM $= 2\sin^{-1}(1/A)$ |
|---|---|---|
| 2 | 1.73 | 60.0° |
| 5 | 4.90 | 23.1° |
| 10 | 9.95 | 11.5° |
| 20 | 20.0 | 5.7° |

### 第 5 步 — 解释，以及用闭环极点验证

两个极点只有在 $\omega \to \infty$ 时才达到 $-180^\circ$，因此在任何有限的 $\omega_u$ 处，**相位裕度都为正**；只有当 $g_mR_D \to \infty$ 时它才趋于零。

**验证。** 闭环极点是 $1 + \beta H(s) = 0$ 的根：

$$
\begin{aligned}
(1 + s/\omega_p)^2 + A^2 &= 0,\\
1 + s/\omega_p &= \pm jA,\\
s &= \omega_p(-1 \pm jA).
\end{aligned}
$$

对任何 $A$，两个根的实部都是 $-\omega_p < 0$，因此环路总是稳定的；但当 $A$ 很大时，其阻尼比 $\zeta = 1/\sqrt{1 + A^2}$ 变得很小：阶跃响应振铃强烈、建立缓慢，这正是相位裕度小的表现。

### 结果

$$H(s) = \frac{V_{out}}{V_{in}} = -\frac{(g_mR_D)^2}{(1 + sR_DC_L)^2}$$

（在 $M_1$ 栅极处断开环路），即这是一个负反馈环路，环路增益为 $(g_mR_D)^2/(1 + s/\omega_p)^2$，在 $\omega_p = 1/(R_DC_L)$ 处有两个重合的极点，分别位于节点 E 和 F。单位增益频率为 $\omega_u = \sqrt{(g_mR_D)^2 - 1}/(R_DC_L)$，且

$$\mathrm{PM} = 180^\circ - 2\tan^{-1}\sqrt{(g_mR_D)^2 - 1} = 2\sin^{-1}\frac{1}{g_mR_D} \approx \frac{2}{g_mR_D}\ \mathrm{rad}\quad(g_mR_D > 1).$$

例如，$g_mR_D = 2$、5、10、20 时，PM 分别为 60°、23.1°、11.5°、5.7°。对任何有限增益，环路都会振铃，但不会振荡。

**常见错误。** 把单位增益频率处的相位当作 $-180^\circ$，从而得出 PM $= 0$。两个极点只有在频率无穷大时才达到 $-180^\circ$；在 $\omega_u$ 处，每个极点贡献的相移为 $\tan^{-1}\sqrt{A^2 - 1} < 90^\circ$。

**常见错误。** 把极点放在 $g_m/C_L$ 处，好像每个节点都由二极管连接（diode-connected）的器件驱动一样。$\lambda = 0$ 时 E 和 F 处的电阻为 $R_D$，因此极点位于 $1/(R_DC_L)$。

**常见错误。** 因为两个共源级合起来是同相的，就认为反馈是正反馈。理想反相器提供了第三次反相，因此环路增益在直流时为负，电路会稳定下来，而不是锁定。
