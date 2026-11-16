# 详细步骤 - R652

**思路。** 把 XOR 的平均输出看作周期性三角波 $F(\Delta\phi)$，将环路写成关于相位误差的一个微分方程。求出它的平衡点（每段斜率上各有一个），通过线性化逐一检验其稳定性，跟踪一个从“错误”斜率出发的相位误差，最后说明反转极性只是交换了两种斜率的角色。

### 第 1 步 — 鉴相器特性

对于占空比（duty cycle）为 50 % 的方波输入，在每个周期内 $V_1$ 的两个边沿之后，两个输入各有占周期 $|\Delta\phi|/(2\pi)$ 的一段时间互不相同，因此输出为高电平的时间占比为 $2\cdot|\Delta\phi|/(2\pi) = |\Delta\phi|/\pi$（在 $\Delta\phi \approx 0$ 时平均值约为 0，在 $\pi/2$ 和 $3\pi/2$ 处为 $V_0/2$，在 $\pi$ 处为 $V_0$）：

$$F(\Delta\phi) \equiv \overline{V_{out}} = V_0\,\frac{|\Delta\phi|}{\pi}, \qquad -\pi \le \Delta\phi \le \pi,$$

并以 $2\pi$ 为周期重复。其斜率为

$$F'(\Delta\phi) = \begin{cases} +V_0/\pi & \text{on } (0,\pi),\ (2\pi,3\pi),\ (-2\pi,-\pi),\ \dots \quad\text{(rising segments)}\\ -V_0/\pi & \text{on } (\pi,2\pi),\ (-\pi,0),\ \dots \quad\text{(falling segments)} \end{cases}$$

**关键性质。** 每个周期都包含一个上升段和一个下降段，二者斜率的大小相等，因此鉴相器增益的符号并不固定：它取决于环路工作在曲线上的哪个位置。

### 第 2 步 — 相位误差的环路方程

由 $\Delta\phi = \phi_{in} - \phi_{out}$ 得 $d\Delta\phi/dt = \omega_{in} - \omega_{out}$。压控振荡器（VCO）满足 $\omega_{out} = \omega_0 + K_{VCO}V_{cont}$；暂取 $K_{VCO} > 0$。若相位误差相对于 LPF 的时间常数变化得足够缓慢（慢环路近似；第 7 步会再把滤波器的作用加回来），LPF 只让平均值通过，即 $V_{cont} \approx F(\Delta\phi)$。于是

$$\frac{d\Delta\phi}{dt} = \omega_{in} - \omega_0 - K_{VCO}F(\Delta\phi) = K_{VCO}\left[V_c^{\ast} - F(\Delta\phi)\right],$$

其中 $V_c^{\ast} \equiv (\omega_{in} - \omega_0)/K_{VCO}$ 是使 VCO 恰好工作在 $\omega_{in}$ 的控制电压。在某个工作点附近，反馈的“极性”就是 $K_{VCO}F'(\Delta\phi)$ 的符号。

### 第 3 步 — 平衡点：每段斜率上各有一个

锁定（$d\Delta\phi/dt = 0$）要求

$$F(\Delta\phi^{\ast}) = V_c^{\ast} ,$$

只有当 $0 \le V_c^{\ast} \le V_0$，即 $\omega_0 \le \omega_{in} \le \omega_0 + K_{VCO}V_0$ 时，该方程才有解；这正是鉴相器输出所能控制的输入频率范围。在一般情况 $0 < V_c^{\ast} < V_0$ 下，$[0, 2\pi)$ 内有两个解。

**在上升段上**（$0 \le \Delta\phi \le \pi$，此处 $F = V_0\Delta\phi/\pi$）：

$$V_0\,\frac{\Delta\phi_r}{\pi} = V_c^{\ast} \quad\Longrightarrow\quad \Delta\phi_r = \pi\,\frac{V_c^{\ast}}{V_0}.$$

**在下降段上**（$\pi \le \Delta\phi \le 2\pi$，此处 $F = V_0(2\pi - \Delta\phi)/\pi$）：

$$
\begin{aligned}
V_0\,\frac{2\pi - \Delta\phi_f}{\pi} &= V_c^{\ast}\\
\Delta\phi_f &= 2\pi - \pi\,\frac{V_c^{\ast}}{V_0}.
\end{aligned}
$$

将这些解平移 $2\pi$ 的任意整数倍也都是解。**例：** 当 $V_c^{\ast} = V_0/2$ 时，$\Delta\phi_r = \pi/2$，$\Delta\phi_f = 3\pi/2$，恰好对应图中平均值为 $V_0/2$ 的两种波形情况。两个点都满足静态锁定条件，但这一条件是必要而非充分的：锁定点还必须是**稳定**的。

### 第 4 步 — 各平衡点的稳定性

令 $\Delta\phi = \Delta\phi^{\ast} + \delta$ 并线性化，$F(\Delta\phi^{\ast} + \delta) \approx V_c^{\ast} + F'(\Delta\phi^{\ast})\,\delta$：

$$
\begin{aligned}
\frac{d\delta}{dt} &= K_{VCO}\left[V_c^{\ast} - V_c^{\ast} - F'(\Delta\phi^{\ast})\,\delta\right] = -K_{VCO}F'(\Delta\phi^{\ast})\,\delta\\
\delta(t) &= \delta(0)\,\exp\!\left[-K_{VCO}F'(\Delta\phi^{\ast})\,t\right].
\end{aligned}
$$

- **上升段**，$F' = +V_0/\pi$：指数为 $-K_{VCO}V_0t/\pi$，因此 $\delta$ 以时间常数 $\pi/(K_{VCO}V_0)$ 衰减。**稳定锁定。**
- **下降段**，$F' = -V_0/\pi$：指数为 $+K_{VCO}V_0t/\pi$，因此任何偏差都会增长。**不稳定平衡点。**

从物理上看，若输出稍有滞后（$\Delta\phi$ 增大），在上升段上 $V_{cont}$ 会升高，VCO 随之追赶上来（负反馈）；而在下降段上 $V_{cont}$ 会降低，输出滞后得更多（正反馈）。

### 第 5 步 — 从“错误”斜率出发，最终仍会锁定

对于大的相位误差，$d\Delta\phi/dt = K_{VCO}[V_c^{\ast} - F(\Delta\phi)]$（$K_{VCO} > 0$）的方向只取决于 $F$ 是高于还是低于 $V_c^{\ast}$。在从 $\Delta\phi_r$ 到 $\Delta\phi_r + 2\pi$ 的一个周期内：

| $\Delta\phi$ 的区间 | 所在段 | $F$ 与 $V_c^{\ast}$ 比较 | $d\Delta\phi/dt$ 的符号 | $\Delta\phi$ 的走向 |
|---|---|---|---|---|
| $\Delta\phi_r < \Delta\phi < \pi$ | 上升段 | $F > V_c^{\ast}$ | $-$ | 减小至 $\Delta\phi_r$ |
| $\pi < \Delta\phi < \Delta\phi_f$ | 下降段 | $F > V_c^{\ast}$ | $-$ | 减小，越过 $\pi$ 处的峰，然后到达 $\Delta\phi_r$ |
| $\Delta\phi_f < \Delta\phi < 2\pi$ | 下降段 | $F < V_c^{\ast}$ | $+$ | 增大，越过 $2\pi$ 处的谷，然后到达 $\Delta\phi_r + 2\pi$ |
| $2\pi < \Delta\phi < \Delta\phi_r + 2\pi$ | 上升段 | $F < V_c^{\ast}$ | $+$ | 增大至 $\Delta\phi_r + 2\pi$ |

- 从**正斜率**段出发的相位误差直接在该段上稳定下来。
- 从**负斜率**段出发的相位误差会被推离排斥点 $\Delta\phi_f$，越过 $\pi$ 处的峰或 $2\pi$ 处的谷，进入相邻的正斜率段，并稳定在 $\Delta\phi_r$ 或 $\Delta\phi_r + 2\pi$；后者是经过一次周跳后的同一锁定状态。
- 只有恰好从 $\Delta\phi_f$ 出发时才会停留在那里，而哪怕最微小的噪声也会把它推开。

因此，无论初始相位差落在哪一段斜率上，环路都会锁定。

### 第 6 步 — 反转极性只是交换两种斜率

反转反馈极性，例如把鉴相器的一个输入反相。这相当于把该输入移相 $\pi$，并使 XOR 变为 XNOR，其平均输出为 $G(\Delta\phi) = V_0 - F(\Delta\phi)$，即同一个三角波平移了 $\pi$。验证：当 $0 \le \Delta\phi \le \pi$ 时，$\Delta\phi + \pi$ 位于下降段上，因此

$$
\begin{aligned}
F(\Delta\phi + \pi) &= V_0\,\frac{2\pi - (\Delta\phi + \pi)}{\pi} = V_0\,\frac{\pi - \Delta\phi}{\pi}\\
&= V_0 - V_0\,\frac{\Delta\phi}{\pi} = V_0 - F(\Delta\phi) = G(\Delta\phi).
\end{aligned}
$$

环路方程 $d\Delta\phi/dt = K_{VCO}[V_c^{\ast} - F(\Delta\phi + \pi)]$ 就是把第 2–5 步中的 $\Delta\phi$ 换成 $\Delta\phi + \pi$ 后的结果，因此所有结论都可以平移 $\pi$ 后照搬过来：

- 此时稳定锁定要求 $G' > 0$，即 $F'(\Delta\phi) < 0$：环路锁定在原特性的**下降**段上，位于 $\Delta\phi = \pi V_c^{\ast}/V_0 - \pi$（mod $2\pi$）；
- 上升段现在给出正反馈，从那里出发的相位误差会漂移到相邻的下降段。

当 $V_c^{\ast} = V_0/2$ 时，正常环路锁定在 $\Delta\phi = +\pi/2$，反转极性的环路锁定在 $\Delta\phi = -\pi/2 \equiv 3\pi/2$。**两者都能锁定。** 极性只决定静态相位偏移（static phase offset），而不决定能否锁定。

另有两点附注：

- 交换 XOR 的两个输入不会带来任何变化，因为 $F$ 是偶函数：$F(-\Delta\phi) = F(\Delta\phi)$。
- 使 $K_{VCO}$ 为负（$\omega_0$ 不变）同样会把稳定点移到下降斜率上，因为稳定性要求 $K_{VCO}F' > 0$。但 $V_c^{\ast} = (\omega_{in} - \omega_0)/K_{VCO}$ 仍必须位于 0 与 $V_0$ 之间，这时要求 $\omega_{in} \le \omega_0$：平衡点是否存在，是调谐范围的问题，而不是极性问题。

### 第 7 步 — 计入低通滤波器

有了一阶 LPF，$V_{cont}$ 会滞后地跟随 $F(\Delta\phi)$：

$$\frac{1}{\omega_{LPF}}\frac{dV_{cont}}{dt} + V_{cont} = F(\Delta\phi).$$

在锁定点附近线性化，令 $\delta = \Delta\phi - \Delta\phi^{\ast}$，$v = V_{cont} - V_c^{\ast}$：

$$\frac{d\delta}{dt} = -K_{VCO}\,v, \qquad \frac{1}{\omega_{LPF}}\frac{dv}{dt} + v = F'\,\delta .$$

在拉普拉斯域中，第二个方程给出 $v = F'\delta/(1 + s/\omega_{LPF})$；将其代入第一个方程，得

$$
\begin{aligned}
s\,\delta &= -\frac{K_{VCO}F'}{1 + s/\omega_{LPF}}\,\delta\\
s\left(1 + \frac{s}{\omega_{LPF}}\right) + K_{VCO}F' &= 0\\
\frac{s^2}{\omega_{LPF}} + s + K_{VCO}F' &= 0 .
\end{aligned}
$$

- 若 $K_{VCO}F' > 0$，三个系数均为正，因此两个根都位于左半平面：**稳定**（可能会振铃，但最终会稳定下来）。
- 若 $K_{VCO}F' < 0$，两根之积 $\omega_{LPF}K_{VCO}F'$ 为负，因此有一个根是正实数：**不稳定**。

滤波器改变的是环路的建立过程，而不是哪一段斜率稳定，因此第 4–6 步的结论仍然成立。

### 第 8 步 — 为什么有频率检测时极性就很重要

上述论证依赖于这样一个鉴相器特性：它是周期性的，并且每个周期内都同时具有两种斜率；错误的符号会因相位误差滑向另一段斜率而得到“修复”。鉴频器输出的符号与 $\omega_{in} - \omega_{out}$ 相同，而且永远不会反转，因此在极性错误时，它会驱使 $\omega_{out}$ 远离 $\omega_{in}$，又没有另一段斜率可以滑向，环路就永远无法锁定。这正是题目限定 PLL 不带频率检测的原因。

### 结果

XOR 特性是周期性的，每个周期内都有一段上升斜率（$0 < \Delta\phi < \pi$）和一段下降斜率（$\pi < \Delta\phi < 2\pi$）。由 $d\Delta\phi/dt = K_{VCO}[V_c^{\ast} - F(\Delta\phi)]$ 可知：

- 两种斜率上都存在平衡点 $F(\Delta\phi^{\ast}) = V_c^{\ast}$：$\Delta\phi_r = \pi V_c^{\ast}/V_0$ 和 $\Delta\phi_f = 2\pi - \pi V_c^{\ast}/V_0$；
- 偏差满足 $\dot\delta = -K_{VCO}F'\delta$，因此当 $K_{VCO} > 0$ 时，上升斜率上的点是稳定的（负反馈），下降斜率上的点是不稳定的（正反馈）；
- 从负斜率出发的相位误差会漂离，越过峰或谷进入相邻的正斜率段，并在那里锁定（可能经过一次周跳）；
- 反转极性（例如 XOR → XNOR，$F \to F(\Delta\phi + \pi)$）只是交换了哪一段斜率稳定，于是环路改为锁定在另一段斜率上，例如锁定在 $-\pi/2$ 而不是 $+\pi/2$；
- 一阶 LPF 不改变这一结论：$s^2/\omega_{LPF} + s + K_{VCO}F' = 0$ 恰在 $K_{VCO}F' > 0$ 时稳定。

因此，极性只决定锁定点，从不决定能否锁定。若有鉴频器（特性单调），极性就很重要了。

**常见错误。** 因为 $F(\Delta\phi) = V_c^{\ast}$ 在两种斜率上都有解，就断言**两种**斜率上都能稳定锁定。在 $K_{VCO}F' < 0$ 的斜率上，任何微小扰动都会增长，因此这些点永远不会作为锁定点出现。

**常见错误。** 断定极性“错误”的环路永远无法锁定，这相当于把鉴相器当作像鉴频器那样单调的器件。由于 XOR 特性是周期性的，相位误差只会移到下一段斜率相反的线段上。

**常见错误。** 只分析 $\omega_{in} = \omega_0$ 的情况，此时锁定点位于尖点 $\Delta\phi = 0$，斜率没有定义。一般情况 $0 < V_c^{\ast} < V_0$ 才能清楚地显示稳定点与不稳定点成对出现的关系。
