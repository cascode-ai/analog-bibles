# 详细步骤 - R509

**思路。** 用单位反馈闭合环路，分别求出零点比次极点低 10 % 和高 10 % 时的两个闭环极点，再把 $V_{out}(s) = H_{closed}(s)\,V_0/s$ 展开成部分分式（partial fractions）。以完全的零极点对消（pole–zero cancellation，$\omega_z = \omega_{p2}$）作为比较基准。

### 第 1 步 — 闭环传递函数

当 $\beta = 1$ 时，$H_{closed} = H_{open}/(1 + H_{open})$。将分子分母同乘以两个极点因子，得

$$H_{closed}(s) = \frac{A_0\left(1 + \dfrac{s}{\omega_z}\right)}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_{p2}}\right) + A_0\left(1 + \dfrac{s}{\omega_z}\right)} ,$$

其分母按 $s$ 的幂次整理为

$$D(s) = \frac{s^2}{\omega_{p1}\omega_{p2}} + \left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}\right)s + (1 + A_0) .$$

将 $D(s) = 0$ 两边乘以 $\omega_{p1}\omega_{p2}$，得到首一形式的特征方程（characteristic equation）

$$s^2 + b\,s + c = 0,\qquad b = \omega_{p1} + \omega_{p2} + \frac{A_0\,\omega_{p1}\omega_{p2}}{\omega_z},\qquad c = (1 + A_0)\,\omega_{p1}\omega_{p2} .$$

闭环直流增益为

$$A \equiv H_{closed}(0) = \frac{A_0}{1 + A_0} = \frac{494}{495} = 0.998 ,$$

因此输出最终稳定在 $AV_0$，比 $V_0$ 低 0.2 %。闭环零点仍为 $\omega_z$：反馈只移动极点，不移动零点。

### 第 2 步 — 基准：完全的零极点对消

若恰好 $\omega_z = \omega_{p2}$，则 $H_{open} = A_0/(1 + s/\omega_{p1})$，且

$$H_{closed}(s) = \frac{A_0}{1 + A_0 + s/\omega_{p1}} = \frac{A}{1 + s/\omega_0},\qquad \omega_0 = (1 + A_0)\,\omega_{p1} ,$$

$$\omega_0 = 495 \times 3.66\times10^6\ \mathrm{rad/s} = 1.812\times10^9\ \mathrm{rad/s},\qquad \tau_0 = \frac{1}{\omega_0} = 0.552\ \mathrm{ns}.$$

理想的阶跃响应为 $V_{out}(t) = AV_0\left(1 - e^{-t/\tau_0}\right)$，它建立到 0.1 % 误差以内所需的时间为

$$t_{0.1\%} = \tau_0\ln 1000 = 0.552\ \mathrm{ns}\times 6.91 = 3.81\ \mathrm{ns}.$$

与这一闭环带宽相比，

$$\frac{\omega_{p2}}{\omega_0} = \frac{3.33\times10^9}{1.812\times10^9} = 1.84 ,$$

因此次极点（以及用来抵消它的零点）位于闭环带宽**之上**，而不是远低于闭环带宽。这一点决定了答案的性质（第 7 步）。两种失配情形共用的数值为

$$
\begin{aligned}
\omega_{p1}\omega_{p2} &= (3.66\times10^6)(3.33\times10^9) = 1.2188\times10^{16}\ \mathrm{rad^2/s^2},\\
c &= (1 + A_0)\,\omega_{p1}\omega_{p2} = 495\times1.2188\times10^{16} = 6.033\times10^{18}\ \mathrm{rad^2/s^2},\\
4c &= 2.413\times10^{19}\ \mathrm{rad^2/s^2}.
\end{aligned}
$$

### 第 3 步 — 零点比极点低 10 % 时的闭环极点（$\omega_z = 0.9\,\omega_{p2}$）

$$\omega_z = 0.9\times3.33\times10^9 = 2.997\times10^9\ \mathrm{rad/s},\qquad \frac{A_0\,\omega_{p1}\omega_{p2}}{\omega_z} = \frac{A_0\,\omega_{p1}}{0.9} = \frac{494\times3.66\times10^6}{0.9} = 2.009\times10^9\ \mathrm{rad/s}.$$

$$
\begin{aligned}
b &= 3.66\times10^6 + 3.33\times10^9 + 2.009\times10^9 = 5.343\times10^9\ \mathrm{rad/s},\\
b^2 - 4c &= 2.854\times10^{19} - 2.413\times10^{19} = 4.41\times10^{18},\\
\sqrt{b^2 - 4c} &= 2.100\times10^9\ \mathrm{rad/s}.
\end{aligned}
$$

判别式为正，所以两个极点都是**实极点**。记两个极点为 $s = -\omega_a$ 和 $s = -\omega_b$：

$$
\begin{aligned}
\omega_a &= \frac{b - \sqrt{b^2 - 4c}}{2} = \frac{(5.343 - 2.100)\times10^9}{2} = 1.621\times10^9\ \mathrm{rad/s}, & \tau_a &= 1/\omega_a = 0.617\ \mathrm{ns},\\
\omega_b &= \frac{b + \sqrt{b^2 - 4c}}{2} = \frac{(5.343 + 2.100)\times10^9}{2} = 3.721\times10^9\ \mathrm{rad/s}, & \tau_b &= 1/\omega_b = 0.269\ \mathrm{ns}.
\end{aligned}
$$

验算：$\omega_a\omega_b = 1.621\times3.721\times10^{18} = 6.03\times10^{18} = c$。✓

### 第 4 步 — 零点比极点高 10 % 时的闭环极点（$\omega_z = 1.1\,\omega_{p2}$）

$$\omega_z = 1.1\times3.33\times10^9 = 3.663\times10^9\ \mathrm{rad/s},\qquad \frac{A_0\,\omega_{p1}}{1.1} = \frac{494\times3.66\times10^6}{1.1} = 1.644\times10^9\ \mathrm{rad/s}.$$

$$
\begin{aligned}
b &= 3.66\times10^6 + 3.33\times10^9 + 1.644\times10^9 = 4.977\times10^9\ \mathrm{rad/s},\\
b^2 - 4c &= 2.477\times10^{19} - 2.413\times10^{19} = 6.42\times10^{17},\\
\sqrt{b^2 - 4c} &= 0.801\times10^9\ \mathrm{rad/s}.
\end{aligned}
$$

同样得到两个实极点：

$$
\begin{aligned}
\omega_a &= \frac{(4.977 - 0.801)\times10^9}{2} = 2.088\times10^9\ \mathrm{rad/s}, & \tau_a &= 0.479\ \mathrm{ns},\\
\omega_b &= \frac{(4.977 + 0.801)\times10^9}{2} = 2.889\times10^9\ \mathrm{rad/s}, & \tau_b &= 0.346\ \mathrm{ns}.
\end{aligned}
$$

验算：$2.088\times2.889\times10^{18} = 6.03\times10^{18} = c$。✓

### 第 5 步 — 用部分分式求阶跃响应（一般形式）

由于 $\omega_a\omega_b = c = (1 + A_0)\omega_{p1}\omega_{p2}$，

$$H_{closed}(s) = \frac{A\left(1 + s/\omega_z\right)}{\left(1 + s/\omega_a\right)\left(1 + s/\omega_b\right)} ,$$

对于阶跃输入 $V_0/s$，

$$V_{out}(s) = AV_0\,\frac{1 + s/\omega_z}{s\,(1 + s/\omega_a)(1 + s/\omega_b)} = AV_0\,\frac{\omega_a\omega_b\,(1 + s/\omega_z)}{s\,(s + \omega_a)(s + \omega_b)} .$$

展开成部分分式：

$$\frac{\omega_a\omega_b\,(1 + s/\omega_z)}{s\,(s + \omega_a)(s + \omega_b)} = \frac{1}{s} - \frac{K_a}{s + \omega_a} - \frac{K_b}{s + \omega_b} .$$

$s = 0$ 处的留数为 $\omega_a\omega_b/(\omega_a\omega_b) = 1$。在 $s = -\omega_a$ 处，

$$
-K_a = \frac{\omega_a\omega_b\,(1 - \omega_a/\omega_z)}{(-\omega_a)(\omega_b - \omega_a)} = -\frac{1 - \omega_a/\omega_z}{1 - \omega_a/\omega_b}
\quad\Longrightarrow\quad K_a = \frac{1 - \omega_a/\omega_z}{1 - \omega_a/\omega_b},
$$

同理可得 $K_b = \dfrac{1 - \omega_b/\omega_z}{1 - \omega_b/\omega_a}$。逐项求反变换，得

$$V_{out}(t) = AV_0\left[1 - K_a\,e^{-t/\tau_a} - K_b\,e^{-t/\tau_b}\right]u(t).$$

**初值与初始斜率。** 由于极点比零点多一个，$V_{out}(0^+) = \lim_{s\to\infty}sV_{out}(s) = 0$，这要求 $K_a + K_b = 1$（可用作方便的验算），并且 $\dot V_{out}(0^+) = \lim_{s\to\infty}s^2V_{out}(s) = AV_0\,\omega_a\omega_b/\omega_z$。

### 第 6 步 — 阶跃响应的数值结果

**情形 (a)，$\omega_z = 0.9\,\omega_{p2}$**（$\omega_a = 1.621$，$\omega_b = 3.721$，$\omega_z = 2.997$，单位均为 $\times10^9$ rad/s）：

$$
\begin{aligned}
K_a &= \frac{1 - 1.621/2.997}{1 - 1.621/3.721} = \frac{1 - 0.541}{1 - 0.436} = \frac{0.459}{0.564} = 0.814,\\
K_b &= 1 - K_a = 0.186 \quad\left(\text{directly: } \frac{1 - 3.721/2.997}{1 - 3.721/1.621} = \frac{-0.242}{-1.296} = 0.186\ \checkmark\right).
\end{aligned}
$$

$$V_{out}(t) = AV_0\left[1 - 0.814\,e^{-t/0.617\,\mathrm{ns}} - 0.186\,e^{-t/0.269\,\mathrm{ns}}\right].$$

**情形 (b)，$\omega_z = 1.1\,\omega_{p2}$**（$\omega_a = 2.088$，$\omega_b = 2.889$，$\omega_z = 3.663$，单位均为 $\times10^9$ rad/s）：

$$
\begin{aligned}
K_a &= \frac{1 - 2.088/3.663}{1 - 2.088/2.889} = \frac{1 - 0.570}{1 - 0.723} = \frac{0.430}{0.277} = 1.550,\\
K_b &= 1 - K_a = -0.550 .
\end{aligned}
$$

$$V_{out}(t) = AV_0\left[1 - 1.550\,e^{-t/0.479\,\mathrm{ns}} + 0.550\,e^{-t/0.346\,\mathrm{ns}}\right].$$

**波形。** 两个响应都从 0 开始，**单调**上升到 $AV_0$，既无过冲，也无振铃（ringing）：
- 在情形 (a) 中，两个指数项都是被减去的，因此在任何时刻都有 $V_{out} < AV_0$ 且 $dV_{out}/dt > 0$。
- 在情形 (b) 中，正项 $0.550\,e^{-t/0.346\,\mathrm{ns}}$ 比主项 $1.550\,e^{-t/0.479\,\mathrm{ns}}$ 衰减得更快，并且始终比主项小，因此误差始终为正；斜率 $AV_0\left[\tfrac{1.550}{0.479} e^{-t/0.479} - \tfrac{0.550}{0.346} e^{-t/0.346}\right]$（t 以 ns 为单位）在 $t = 0$ 时为 $AV_0(3.24 - 1.59)/\mathrm{ns} > 0$，并一直保持为正。

归一化输出 $V_{out}/(AV_0)$：

| $t$ (ns) | $\omega_z = 0.9\,\omega_{p2}$ | 完全对消 | $\omega_z = 1.1\,\omega_{p2}$ |
|---|---|---|---|
| 0.1 | 0.180 | 0.166 | 0.154 |
| 0.25 | 0.384 | 0.364 | 0.347 |
| 0.5 | 0.609 | 0.596 | 0.584 |
| 1 | 0.835 | 0.837 | 0.838 |
| 2 | 0.968 | 0.973 | 0.978 |
| 3 | 0.9937 | 0.9956 | 0.9971 |
| 4 | 0.9988 | 0.9993 | 0.9996 |

初始斜率为 $AV_0\,\omega_a\omega_b/\omega_z = AV_0\,\omega_0\,(\omega_{p2}/\omega_z)$：情形 (a) 为 $2.01\times10^9\,AV_0$/s，情形 (b) 为 $1.65\times10^9\,AV_0$/s，而完全对消时为 $1.81\times10^9\,AV_0$/s。零点低于极点时，起步更快，但闭环主极点（dominant pole）更慢。

**建立过程。** 经过较长时间后，只有慢指数项起作用：
- 情形 (a)：由 $0.814\,e^{-t/0.617\,\mathrm{ns}} = 10^{-3}$ 得 $t = 0.617\ \mathrm{ns}\times\ln 814 = 0.617\times6.70 = 4.1$ ns；
- 情形 (b)：由 $1.550\,e^{-t/0.479\,\mathrm{ns}} = 10^{-3}$ 得 $t = 0.479\ \mathrm{ns}\times\ln 1550 = 0.479\times7.35 = 3.5$ ns；
- 完全对消：3.8 ns（第 2 步）。

### 第 7 步 — 为什么这里没有缓慢建立的拖尾

人们所担心的**零极点对**效应（一个约为 $(\omega_z - \omega_{p2})/\omega_0$ 的小留数，以较慢的时间常数 $1/\omega_z$ 衰减）要求零极点对位于远低于闭环带宽之处，即 $\omega_{p2} \ll (1 + A_0)\omega_{p1}$。这里该条件不成立：$\omega_{p2} = 1.84\,\omega_0$（第 2 步）。因此：
- “失配”指数项（即 $\tau_b$ 项）的时间常数为 0.27 ns 或 0.35 ns，比主时间常数**更短**，所以它先衰减完。即使用零极点对的粗略估计，得到的幅度 $|\omega_z - \omega_{p2}|/\omega_0 = 0.333/1.812 \approx 0.18$ 也以 $1/\omega_z \approx 0.3$ ns 衰减，同样是一个快速项。
- 可见的影响是**主**闭环时间常数发生偏移：变为 0.617 ns（+12 %）或 0.479 ns（−13 %），而不是 0.552 ns，因此 0.1 % 建立时间变为约 4.1 ns 或 3.5 ns，而不是 3.8 ns。

对这个运放而言，10 % 的零极点失配是无害的。

### 结果

闭环极点是下列方程的根：

$$\frac{s^2}{\omega_{p1}\omega_{p2}} + \left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}\right)s + 1 + A_0 = 0,$$

且 $V_{out}(t) = AV_0\left[1 - K_ae^{-\omega_at} - K_be^{-\omega_bt}\right]$，其中 $A = A_0/(1 + A_0) = 0.998$，$K_a = (1 - \omega_a/\omega_z)/(1 - \omega_a/\omega_b)$，$K_b = 1 - K_a$。

- $\omega_z = 0.9\,\omega_{p2}$：极点为 $1.62\times10^9$ 和 $3.72\times10^9$ rad/s，
$$V_{out}(t) = AV_0\left[1 - 0.814\,e^{-t/0.617\,\mathrm{ns}} - 0.186\,e^{-t/0.269\,\mathrm{ns}}\right].$$
- $\omega_z = 1.1\,\omega_{p2}$：极点为 $2.09\times10^9$ 和 $2.89\times10^9$ rad/s，
$$V_{out}(t) = AV_0\left[1 - 1.55\,e^{-t/0.479\,\mathrm{ns}} + 0.55\,e^{-t/0.346\,\mathrm{ns}}\right].$$
- 两个响应都从 0 开始单调上升，没有过冲。由于 $\omega_{p2} \approx 1.8\,(1 + A_0)\omega_{p1}$，零极点对位于闭环带宽之上：失配项比主指数项衰减得更快，不存在缓慢的拖尾，主要影响是主时间常数改变 ±12 %（0.1 % 建立时间 ≈ 4.1 ns 或 3.5 ns，而不是 3.8 ns）。

**常见错误。** 不检验前提条件就照搬教科书中零极点对的图像，预测出一个幅度约为 10 % 的漫长缓慢建立拖尾。这一图像要求 $\omega_{p2} \ll (1 + A_0)\omega_{p1}$；而这里 $\omega_{p2}$ **高于**闭环带宽，是它的 1.8 倍，因此失配项是快速项。

**常见错误。** 因为系统是二阶的，就预期会出现过冲或振铃。在两种情形下判别式 $b^2 - 4c$ 都为正，因此两个极点都是实极点，响应是单调的。

**常见错误。** 认为失配会留下 10 % 的稳态误差（steady-state error）。终值由直流增益 $A_0/(1 + A_0) = 0.998$ 决定，与 $\omega_z$ 和 $\omega_{p2}$ 无关。
