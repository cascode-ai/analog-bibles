# 详细步骤 - R661

**思路。** 写出闭环特征方程 $1 + H_{open}(s) = 0$，解出极点随增益 $K = I_PK_{VCO}/2\pi$ 变化的表达式，再在复数极点的实部与虚部之间消去 $K$，得到一个圆的方程。然后跟踪大增益下的实数极点，并对照图中检查会合点（break-in point）和终点。

### 第 1 步 — 特征方程

令

$$K \equiv \frac{I_PK_{VCO}}{2\pi} \quad(> 0),$$

则开环传递函数为

$$H_{open}(s) = K\left(R_P + \frac{1}{C_Ps}\right)\frac{1}{s} = K\,\frac{R_PC_Ps + 1}{C_Ps^2},$$

它在**原点处有二重极点**（来自 $C_P$ 和 VCO），在 **$s = -1/(R_PC_P)$ 处有一个零点**（来自 $R_P$）。闭环极点满足 $1 + H_{open}(s) = 0$：

$$
\begin{aligned}
1 + K\,\frac{R_PC_Ps + 1}{C_Ps^2} &= 0\\
C_Ps^2 + KR_PC_Ps + K &= 0\\
s^2 + KR_P\,s + \frac{K}{C_P} &= 0 .
\end{aligned}
$$

与 $s^2 + 2\zeta\omega_ns + \omega_n^2$ 比较：

$$\omega_n^2 = \frac{K}{C_P}, \qquad 2\zeta\omega_n = KR_P \;\Rightarrow\; \zeta = \frac{KR_P}{2\sqrt{K/C_P}} = \frac{R_P}{2}\sqrt{KC_P}.$$

与 I 型 PLL 不同，这里的 $\zeta$ 随增益**增大**。

### 第 2 步 — 极点与 $K$ 的关系

$$s_{1,2} = \frac{-KR_P \pm \sqrt{K^2R_P^2 - 4K/C_P}}{2}.$$

- **$K = 0$：** $s_{1,2} = 0$，即原点处的开环二重极点，根轨迹由此出发。
- 当判别式为负时为**复数极点**：
$$K^2R_P^2 < \frac{4K}{C_P} \quad\Longleftrightarrow\quad K < \frac{4}{R_P^2C_P}\quad(\Longleftrightarrow \zeta < 1).$$
- 当 $K \ge 4/(R_P^2C_P)$（$\zeta \ge 1$）时为**实数极点**。

### 第 3 步 — 复数极点位于一个圆上

当 $K < 4/(R_P^2C_P)$ 时，记 $s = \sigma \pm j\omega$，其中

$$\sigma = -\frac{KR_P}{2}, \qquad \omega^2 = \frac{K}{C_P} - \frac{K^2R_P^2}{4}.$$

由第一式得 $K = -2\sigma/R_P$，代入第二式：

$$
\begin{aligned}
\omega^2 &= \frac{1}{C_P}\left(-\frac{2\sigma}{R_P}\right) - \frac{R_P^2}{4}\left(\frac{4\sigma^2}{R_P^2}\right)\\
\omega^2 &= -\frac{2\sigma}{R_PC_P} - \sigma^2 .
\end{aligned}
$$

对 $\sigma$ 配方：

$$
\begin{aligned}
\sigma^2 + \frac{2\sigma}{R_PC_P} + \omega^2 &= 0\\
\sigma^2 + \frac{2\sigma}{R_PC_P} + \frac{1}{(R_PC_P)^2} + \omega^2 &= \frac{1}{(R_PC_P)^2}\\
\left(\sigma + \frac{1}{R_PC_P}\right)^2 + \omega^2 &= \left(\frac{1}{R_PC_P}\right)^2 .
\end{aligned}
$$

这是一个**圆心在 $s = -1/(R_PC_P)$（即零点）、半径为 $1/(R_PC_P)$ 的圆**，它经过原点，其最左端点为 $s = -2/(R_PC_P)$。

当 $K$ 从 0 增大到 $4/(R_P^2C_P)$ 时，$\sigma = -KR_P/2$ 从 0 单调地移到 $-2/(R_PC_P)$，因此这对共轭极点分别沿整个圆的上半圆和下半圆，从原点移动到最左端点，与图中一致。当 $K$ 很小时，$|\sigma| = KR_P/2 \propto K$，而 $|\omega| \approx \sqrt{K/C_P} \propto \sqrt K$ 大得多，因此极点垂直离开原点，这与该圆在原点处与 $j\omega$ 轴相切相符。

### 第 4 步 — $\zeta = 1$ 时的会合点

当 $K = 4/(R_P^2C_P)$ 时判别式为零，两极点会合于

$$s = -\frac{KR_P}{2} = -\frac{4}{R_P^2C_P}\cdot\frac{R_P}{2} = -\frac{2}{R_PC_P},$$

即圆最左端点处的二重实数极点，此时

$$\zeta = \frac{R_P}{2}\sqrt{\frac{4}{R_P^2C_P}\,C_P} = \frac{R_P}{2}\cdot\frac{2}{R_P} = 1 .$$

（等价地，由 $K = -C_Ps^2/(R_PC_Ps + 1)$ 和会合条件 $dK/ds = 0$ 得 $R_PC_Ps^2 + 2s = 0$，即 $s = 0$ 或 $s = -2/(R_PC_P)$。）

### 第 5 步 — 增益更大时的实数极点

当 $K > 4/(R_P^2C_P)$ 时，两个极点都是负实数，且

$$s_1 + s_2 = -KR_P, \qquad s_1s_2 = \frac{K}{C_P}.$$

当 $K \to \infty$ 时，一个极点趋于 $-\infty$，$s_2 \approx -KR_P$，另一个则趋于

$$s_1 = \frac{s_1s_2}{s_2} \approx \frac{K/C_P}{-KR_P} = -\frac{1}{R_PC_P},$$

即开环零点。因此从会合点出发，一个极点向右移向零点，另一个向左移向 $-\infty$，这就是图中实轴上的两个箭头。这与实轴规则一致：只有 $(-\infty, -1/(R_PC_P)]$ 段右侧的开环极点与零点总数为奇数（两个极点和一个零点）。

### 第 6 步 — 数值验证与角 $\varphi$

归一化取 $R_P = 1$，$C_P = 1$（于是 $1/(R_PC_P) = 1$）：方程为 $s^2 + Ks + K = 0$，圆为 $(\sigma + 1)^2 + \omega^2 = 1$。

| $K$ | 极点 | $(\sigma + 1)^2 + \omega^2$ | $\zeta = \frac12\sqrt K$ |
|---|---|---|---|
| 1 | $-0.5 \pm j0.866$ | $0.25 + 0.75 = 1$ | 0.50 |
| 2 | $-1 \pm j1$ | $0 + 1 = 1$ | 0.71 |
| 3 | $-1.5 \pm j0.866$ | $0.25 + 0.75 = 1$ | 0.87 |
| 4 | $-2$（二重） | $1 + 0 = 1$ | 1.00 |
| 8 | $-1.17,\ -6.83$ | 实数 | 1.41 |
| 100 | $-1.01,\ -99.0$ | 实数 | 5.0 |

**角 $\varphi$。** 对于复数极点，$|s|^2 = \sigma^2 + \omega^2 = K/C_P = \omega_n^2$，因此

$$\cos\varphi = \frac{|\sigma|}{|s|} = \frac{KR_P/2}{\omega_n} = \zeta .$$

从几何上看，从原点到 $-2/(R_PC_P)$ 的线段是圆的直径，因此由泰勒斯定理，$\cos\varphi = |s|/(2/(R_PC_P))$，结果相同。由于 $\zeta = \frac{R_P}{2}\sqrt{KC_P}$ 随 $K$ 增大，$\varphi$ 随之减小：增大 $I_PK_{VCO}$ 会使极点向实轴靠拢，使环路的阻尼**更大**。

### 结果

令 $K = I_PK_{VCO}/2\pi$，则闭环极点满足

$$s^2 + KR_Ps + \frac{K}{C_P} = 0, \qquad \omega_n^2 = \frac{K}{C_P},\quad \zeta = \frac{R_P}{2}\sqrt{KC_P}.$$

- $K = 0$：原点处的二重极点。
- $0 < K < 4/(R_P^2C_P)$：复数极点位于圆 $\left(\sigma + \frac{1}{R_PC_P}\right)^2 + \omega^2 = \left(\frac{1}{R_PC_P}\right)^2$ 上，圆心在 $-1/(R_PC_P)$，半径为 $1/(R_PC_P)$，极点垂直离开原点。
- $K = 4/(R_P^2C_P)$：在会合点 $-2/(R_PC_P)$ 处出现二重极点，$\zeta = 1$。
- $K \to \infty$：一个实数极点趋于零点 $-1/(R_PC_P)$，另一个趋于 $-\infty$。

这正是图中的根轨迹，且 $\cos\varphi = \zeta$ 随 $I_PK_{VCO}$ 增大。

**常见错误。** 在特征方程中漏掉 $R_P$ 项，只剩下 $s^2 + K/C_P = 0$，于是在任何增益下极点都位于 $j\omega$ 轴上。正是 $R_P$ 提供的零点把根轨迹弯成了一个圆。

**常见错误。** 把圆心放在原点，或者把会合点放在 $-1/(R_PC_P)$。圆心在零点 $-1/(R_PC_P)$ 处；会合点是直径的另一端，即 $-2/(R_PC_P)$。
