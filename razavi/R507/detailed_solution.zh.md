# 详细步骤 - R507

**思路。** 写出闭环传递函数，确定其两个极点（一个在 $(1 + A_0)\omega_{p1}$ 附近，另一个非常靠近零点 $\omega_z$），并把阶跃响应展开成部分分式。所求的正是靠近 $\omega_z$ 的那个极点对应的项；要正确得到其幅度，需要求出该闭环极点离零点有多近。

### 第 1 步 — 闭环传递函数

在单位反馈下，$H_{closed} = H_{open}/(1 + H_{open})$。分子和分母同乘以 $(1 + s/\omega_{p1})(1 + s/\omega_{p2})$：

$$H_{closed}(s) = \frac{A_0\left(1 + s/\omega_z\right)}{D(s)}, \qquad D(s) = \left(1 + \frac{s}{\omega_{p1}}\right)\left(1 + \frac{s}{\omega_{p2}}\right) + A_0\left(1 + \frac{s}{\omega_z}\right).$$

除以 $D(0) = 1 + A_0$：

$$H_{closed}(s) = \frac{A\left(1 + s/\omega_z\right)}{\left(1 + s/\omega_{pA}\right)\left(1 + s/\omega_{pB}\right)}, \qquad A = \frac{A_0}{1 + A_0},$$

其中 $s = -\omega_{pA}$ 和 $s = -\omega_{pB}$ 是 $D(s)$ 的根。

### 第 2 步 — 两个闭环极点（一阶近似）

两根之积为 $\omega_{pA}\omega_{pB} = (1 + A_0)\omega_{p1}\omega_{p2}$，其倒数之和为 $(1/\omega_{p1} + 1/\omega_{p2} + A_0/\omega_z)/(1 + A_0)$。由于 $\omega_z \approx \omega_{p2}$ 且 $\omega_{p2} \ll (1 + A_0)\omega_{p1}$（两根相距很远）：

$$\omega_{pB} \approx (1 + A_0)\,\omega_{p1}, \qquad \omega_{pA} \approx \omega_{p2} \approx \omega_z .$$

$\omega_{pB}$ 是主要的闭环极点，$\omega_{pA}$ 与零点构成一个**零极点对**。$\omega_{pA}$ 处的留数取决于**微小的差值** $1 - \omega_{pA}/\omega_z$，因此需要更精确地求出 $\omega_{pA}$。

### 第 3 步 — $\omega_{pA}$ 离 $\omega_z$ 有多近？

**零点处的 $D$。** 在 $s = -\omega_z$ 处，$A_0$ 项为零，再利用 $\omega_z \gg \omega_{p1}$：

$$D(-\omega_z) = \left(1 - \frac{\omega_z}{\omega_{p1}}\right)\left(1 - \frac{\omega_z}{\omega_{p2}}\right) \approx -\frac{\omega_z}{\omega_{p1}}\left(1 - \frac{\omega_z}{\omega_{p2}}\right),$$

它很小，正比于失配，并在 $\omega_z = \omega_{p2}$ 时恰好为零。

**该处 $D$ 的斜率。**

$$D'(s) = \frac{1}{\omega_{p1}}\left(1 + \frac{s}{\omega_{p2}}\right) + \frac{1}{\omega_{p2}}\left(1 + \frac{s}{\omega_{p1}}\right) + \frac{A_0}{\omega_z} .$$

在 $s = -\omega_z$ 处，由于 $\omega_z \approx \omega_{p2}$，第一项约为零，第二项约为 $-1/\omega_{p1}$，第三项为 $A_0/\omega_z$；由于 $A_0\omega_{p1} \gg \omega_z$，

$$D'(-\omega_z) \approx \frac{A_0}{\omega_z} - \frac{1}{\omega_{p1}} \approx \frac{A_0}{\omega_z} .$$

从 $s = -\omega_z$ 出发，向根 $s = -\omega_{pA}$ **做一步牛顿迭代**：

$$
\begin{aligned}
0 = D(-\omega_{pA}) &\approx D(-\omega_z) + D'(-\omega_z)\,(\omega_z - \omega_{pA})\\
\omega_{pA} &\approx \omega_z + \frac{D(-\omega_z)}{D'(-\omega_z)} = \omega_z - \frac{\omega_z^2}{A_0\,\omega_{p1}}\left(1 - \frac{\omega_z}{\omega_{p2}}\right),
\end{aligned}
$$

因此

$$1 - \frac{\omega_{pA}}{\omega_z} \approx \frac{\omega_z}{A_0\,\omega_{p1}}\left(1 - \frac{\omega_z}{\omega_{p2}}\right) .$$

闭环极点离零点比 $\omega_{p2}$ 离零点近得多：开环失配被缩小为原来的 $\omega_z/(A_0\omega_{p1}) \approx \omega_{p2}/[(1 + A_0)\omega_{p1}] \ll 1$ 倍，这大致是 $\omega_z$ 处环路增益（loop gain）的倒数。

### 第 4 步 — 阶跃响应与零极点对项

对于输入阶跃 $V_0u(t)$，对 $H_{closed}(s)V_0/s$ 作部分分式展开，得

$$V_{out}(t) = AV_0\left[1 - K_Ae^{-\omega_{pA}t} - K_Be^{-\omega_{pB}t}\right]u(t),$$

$$K_A = \frac{1 - \omega_{pA}/\omega_z}{1 - \omega_{pA}/\omega_{pB}}, \qquad K_B = \frac{1 - \omega_{pB}/\omega_z}{1 - \omega_{pB}/\omega_{pA}}, \qquad K_A + K_B = 1 .$$

由于 $\omega_{pA} \ll \omega_{pB}$，$K_A$ 的分母约为 1，再结合第 3 步：

$$K_A \approx 1 - \frac{\omega_{pA}}{\omega_z} \approx \frac{\omega_z}{A_0\omega_{p1}}\left(1 - \frac{\omega_z}{\omega_{p2}}\right).$$

因此阶跃响应中的零极点对项为

$$-AV_0\,\frac{\omega_z}{A_0\,\omega_{p1}}\left(1 - \frac{\omega_z}{\omega_{p2}}\right)e^{-\omega_{pA}t}, \qquad \omega_{pA} \approx \omega_z \approx \omega_{p2} ,$$

这正是所要证明的形式 **$\propto (1 - \omega_z/\omega_{p2})\exp(-\omega_{p2}t)$**：其幅度正比于零极点失配（精确对消时为零），并以约 $1/\omega_z$（$\approx 1/\omega_{p2}$）的时间常数衰减，远长于 $K_B$ 项的主时间常数 $1/[(1 + A_0)\omega_{p1}]$。$\blacksquare$

### 第 5 步 — 解释以及系数的大小

- **符号。** 若 $\omega_z < \omega_{p2}$，则 $K_A > 0$，输出缓慢爬升到终值；若 $\omega_z > \omega_{p2}$，则 $K_A < 0$，输出先略微超过终值，然后缓慢回落。两个极点都是实极点，因此没有振铃，只有一个**建立缓慢的拖尾**。
- **快速估算。** 在 $K_A$ 中直接令 $\omega_{pA} = \omega_{p2}$，得 $K_A \approx 1 - \omega_{p2}/\omega_z \approx -(1 - \omega_z/\omega_{p2})$：对失配的依赖关系相同，但系数为 1 的量级，把拖尾高估了约 $A_0\omega_{p1}/\omega_z$ 倍，因为它忽略了闭环会把极点拉向零点。
- **例子。** $A_0 = 1000$，$\omega_{p1} = 10^6$ rad/s，$\omega_{p2} = 10^8$ rad/s，$\omega_z = 1.1\times10^8$ rad/s（失配 10 %）：$\omega_z/(A_0\omega_{p1}) = 0.11$，因此 $K_A \approx 0.11\times(-0.1) = -0.011$，拖尾约为终值的 +1.1 %（精确的根给出 +1.4 %），以 $1/\omega_{pA} \approx 9$ ns 的时间常数衰减。快速估算则会给出约 10 %。

### 结果

零极点对附近的闭环极点为

$$\omega_{pA} \approx \omega_z\left[1 - \frac{\omega_z}{A_0\,\omega_{p1}}\left(1 - \frac{\omega_z}{\omega_{p2}}\right)\right],$$

它对阶跃响应的贡献为

$$-AV_0\,\frac{1 - \omega_{pA}/\omega_z}{1 - \omega_{pA}/\omega_{pB}}\,e^{-\omega_{pA}t} \approx -AV_0\,\frac{\omega_z}{(1 + A_0)\,\omega_{p1}}\left(1 - \frac{\omega_z}{\omega_{p2}}\right)e^{-\omega_z t},$$

其中 $A = A_0/(1 + A_0)$，$\omega_{pB} \approx (1 + A_0)\omega_{p1}$（当 $A_0 \gg 1$ 时，这里的 $A_0$ 与 $1 + A_0$ 可以互换）。该项正比于 $1 - \omega_z/\omega_{p2}$，精确对消时为零，并以时间常数 ≈ $1/\omega_z$ ≈ $1/\omega_{p2}$ 衰减：这是一个建立缓慢的分量。

**常见错误。** 认为零极点对项的时间常数为 $1/[(1 + A_0)\omega_{p1}]$。那是快速的主极点；零极点对中的极点停留在 $\omega_z \approx \omega_{p2}$ 附近，这正是拖尾**缓慢**的原因。

**常见错误。** 认为零极点对会引起振铃或振荡性过冲。两个闭环极点都是实极点；失配只会增加一个幅度小、衰减慢的指数项。

**常见错误。** 认为拖尾幅度与失配无关，或认为它等于全部失配 $|1 - \omega_z/\omega_{p2}|$。它正比于失配，但要乘以约 $\omega_z/[(1 + A_0)\omega_{p1}]$ 的缩小因子，因为反馈把闭环极点拉向了零点。
