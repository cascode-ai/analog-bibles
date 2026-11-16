# 详细步骤 - R474

**思路。** 单位闭环增益意味着 $\beta = 1$，因此环路增益为 $A_0/(1 + j\omega/\omega_p)^2$。60° 的相位裕度确定了增益交点处的相位，从而确定了交点频率；再令该处环路增益的幅值为 1，即可得到允许的最大 $A_0$。

### 第 1 步 — 环路增益

设反馈系数为 $\beta$（单位闭环增益意味着 $\beta = 1$，即电压跟随器接法），环路增益为

$$\beta H(j\omega) = \frac{\beta A_0}{\left(1 + j\omega/\omega_p\right)^2},$$

其幅值与相位为

$$
\begin{aligned}
|\beta H(j\omega)| &= \frac{\beta A_0}{\left|1 + j\omega/\omega_p\right|^2} = \frac{\beta A_0}{1 + \omega^2/\omega_p^2},\\
\angle\beta H(j\omega) &= -2\tan^{-1}\frac{\omega}{\omega_p}.
\end{aligned}
$$

### 第 2 步 — 相位条件：交点频率

在增益交点 $\omega_u$ 处，$\mathrm{PM} = 180° + \angle\beta H(j\omega_u) = 60°$：

$$
\begin{aligned}
180° - 2\tan^{-1}\frac{\omega_u}{\omega_p} &= 60°\\
2\tan^{-1}\frac{\omega_u}{\omega_p} &= 120°\\
\tan^{-1}\frac{\omega_u}{\omega_p} &= 60° .
\end{aligned}
$$

两个相同的极点各自恰好贡献 60°，因此

$$\frac{\omega_u}{\omega_p} = \tan60° = \sqrt3 \quad\Longrightarrow\quad \omega_u = \sqrt3\,\omega_p \approx 1.73\,\omega_p .$$

### 第 3 步 — 幅值条件：环路增益

在 $\omega_u$ 处，环路增益的幅值为 1：

$$
\begin{aligned}
\frac{\beta A_0}{1 + (\omega_u/\omega_p)^2} &= 1\\
\frac{\beta A_0}{1 + (\sqrt3)^2} &= 1\\
\frac{\beta A_0}{1 + 3} &= 1\\
\beta A_0 &= 4 .
\end{aligned}
$$

### 第 4 步 — 为什么这是最大值

幅值 $\beta A_0/(1 + \omega^2/\omega_p^2)$ 随 $\omega$ 单调下降，因此更大的 $\beta A_0$ 会使交点**上移**，而在那里 $-2\tan^{-1}(\omega_u/\omega_p)$ 更负，相位裕度**更小**：

$$\mathrm{PM} \ge 60° \quad\Longleftrightarrow\quad \beta A_0 \le 4 .$$

例如，$\beta A_0 = 8$ 时 $1 + (\omega_u/\omega_p)^2 = 8$，因此 $\omega_u = \sqrt7\,\omega_p$，相位为 $-2\tan^{-1}\sqrt7 = -138.6°$，PM = 41.4°。

### 第 5 步 — 代入 $\beta = 1$

$$A_{0,max} = \frac{4}{\beta} = \frac{4}{1} = 4 .$$

**关于“单位”增益的说明。** 当 $A_0 = 4$ 时，实际闭环增益为

$$\frac{A_0}{1 + \beta A_0} = \frac{4}{1 + 4} = 0.8,$$

因此“单位”增益指的是名义增益 $1/\beta$。若实际闭环增益必须恰好等于 1，则 $A_0/(1 + \beta A_0) = 1$，即 $\beta = 1 - 1/A_0$，$\beta A_0 = A_0 - 1$；条件 $\beta A_0 \le 4$ 变为 $A_0 - 1 \le 4$，即 $A_0 \le 5$（此时 $\beta = 0.8$）。通常的理解是 $\beta = 1$。

两个重合极点在 $\sqrt3\,\omega_p$ 处就已产生 120° 的相移，而该处幅值仅衰减了 4 倍，因此这种放大器需要进行频率补偿（frequency compensation），即极点分裂（pole splitting），才能在获得大增益的同时保证可用的相位裕度。

### 结果

$$\omega_u = \sqrt3\,\omega_p, \qquad \beta A_0 = 4, \qquad A_{0,max} = 4 \quad(\beta = 1).$$

（若实际闭环增益 $A_0/(1 + \beta A_0)$ 必须恰好为 1，则 $\beta = 0.8$，$A_{0,max} = 5$。）

**常见错误。** 让每个极点贡献 30° 而不是 60°：交点处的总相位为 $-120°$，因此每个相同的极点贡献 60°。若把 60° 的**裕度**分摊给两个极点，交点会落在 $\omega_p/\sqrt3$，并得到错误的结果 $A_0 = 1 + 1/3 \approx 1.33$。

**常见错误。** 把交点放在 $\omega_p$ 处，此时两个极点只贡献 $45° + 45° = 90°$（PM = 90°）；由此得到的 $A_0 = 2$ 并不是 60° 裕度下的最大值。

**常见错误。** 用 $\sqrt{1 + 3}$（或 $(1 + 3)^2$）作为幅值因子。两个极点各贡献一个因子 $\sqrt{1 + (\omega/\omega_p)^2}$，因此乘积为 $1 + 3 = 4$。
