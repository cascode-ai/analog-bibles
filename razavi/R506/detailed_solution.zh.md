# 详细步骤 - R506

**思路。** 把闭环传递函数的分子和分母都除以 $1 + A_0$，使分母的常数项为 1；然后通过比较系数得到其因子 $(1 + s/\omega_{pA})(1 + s/\omega_{pB})$，而给定条件使两个极点相距很远。对 $H_{closed}(s)V_0/s$ 作部分分式展开即得阶跃响应。

### 第 1 步 — 分母归一化

从下式出发

$$H_{closed}(s) = \frac{A_0\left(1 + s/\omega_z\right)}{\dfrac{s^2}{\omega_{p1}\omega_{p2}} + b\,s + (1 + A_0)}, \qquad b = \frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z} .$$

分子和分母同除以 $1 + A_0$：

$$H_{closed}(s) = \frac{\dfrac{A_0}{1 + A_0}\left(1 + \dfrac{s}{\omega_z}\right)}{\dfrac{s^2}{(1 + A_0)\,\omega_{p1}\omega_{p2}} + \dfrac{b}{1 + A_0}\,s + 1} ,$$

因此低频增益就是单位增益缓冲器（unity-gain buffer）的增益（略小于 1）：

$$A = \frac{A_0}{1 + A_0}.$$

### 第 2 步 — 分母因式分解

将

$$\left(1 + \frac{s}{\omega_{pA}}\right)\left(1 + \frac{s}{\omega_{pB}}\right) = 1 + \left(\frac{1}{\omega_{pA}} + \frac{1}{\omega_{pB}}\right)s + \frac{s^2}{\omega_{pA}\omega_{pB}}$$

与归一化后的分母比较，得

$$\frac{1}{\omega_{pA}} + \frac{1}{\omega_{pB}} = \frac{b}{1 + A_0}, \qquad \omega_{pA}\,\omega_{pB} = (1 + A_0)\,\omega_{p1}\omega_{p2} .$$

**化简 $b$。** 由 $\omega_z \approx \omega_{p2}$，

$$b \approx \frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_{p2}} = \frac{1}{\omega_{p1}} + \frac{1 + A_0}{\omega_{p2}} ,$$

而 $\omega_{p2} \ll (1 + A_0)\omega_{p1}$ 意味着 $(1 + A_0)/\omega_{p2} \gg 1/\omega_{p1}$，因此 $b \approx (1 + A_0)/\omega_{p2}$。

**极点。** 当 $\omega_{pA} \ll \omega_{pB}$ 时，倒数之和由 $1/\omega_{pA}$ 主导：

$$\frac{1}{\omega_{pA}} \approx \frac{b}{1 + A_0} \approx \frac{1}{\omega_{p2}} \quad\Longrightarrow\quad \omega_{pA} \approx \omega_{p2}\ (\approx \omega_z),$$

再由乘积得

$$\omega_{pB} = \frac{(1 + A_0)\,\omega_{p1}\omega_{p2}}{\omega_{pA}} \approx (1 + A_0)\,\omega_{p1} .$$

二者之比 $\omega_{pB}/\omega_{pA} \approx (1 + A_0)\omega_{p1}/\omega_{p2} \gg 1$，与假设一致。因此

$$H_{closed}(s) = \frac{A\left(1 + \dfrac{s}{\omega_z}\right)}{\left(1 + \dfrac{s}{\omega_{pA}}\right)\left(1 + \dfrac{s}{\omega_{pB}}\right)}, \quad A = \frac{A_0}{1 + A_0},\ \omega_{pA} \approx \omega_{p2},\ \omega_{pB} \approx (1 + A_0)\omega_{p1}.$$

$\omega_{pB}$ 是主要的闭环极点，约等于增益带宽积（gain-bandwidth product）；$\omega_{pA}$ 靠近零点 $\omega_z$：二者共同构成一个**零极点对**（doublet）。

### 第 3 步 — 阶跃响应：部分分式

对于 $V_{in}(t) = V_0\,u(t)$：

$$V_{out}(s) = \frac{AV_0}{s}\cdot\frac{1 + s/\omega_z}{(1 + s/\omega_{pA})(1 + s/\omega_{pB})} = AV_0\,\frac{\omega_{pA}\omega_{pB}\,(1 + s/\omega_z)}{s\,(s + \omega_{pA})(s + \omega_{pB})} = AV_0\left[\frac1s - \frac{K_A}{s + \omega_{pA}} - \frac{K_B}{s + \omega_{pB}}\right].$$

$s = 0$ 处的留数为 1。在 $s = -\omega_{pA}$ 和 $s = -\omega_{pB}$ 处：

$$-K_A = \frac{\omega_{pA}\omega_{pB}\,(1 - \omega_{pA}/\omega_z)}{(-\omega_{pA})(\omega_{pB} - \omega_{pA})} \quad\Longrightarrow\quad K_A = \frac{1 - \omega_{pA}/\omega_z}{1 - \omega_{pA}/\omega_{pB}} ,$$

$$-K_B = \frac{\omega_{pA}\omega_{pB}\,(1 - \omega_{pB}/\omega_z)}{(-\omega_{pB})(\omega_{pA} - \omega_{pB})} \quad\Longrightarrow\quad K_B = \frac{1 - \omega_{pB}/\omega_z}{1 - \omega_{pB}/\omega_{pA}} .$$

**验证：** 通分到公分母 $\omega_{pB} - \omega_{pA}$，

$$K_A + K_B = \frac{\omega_{pB}(1 - \omega_{pA}/\omega_z) - \omega_{pA}(1 - \omega_{pB}/\omega_z)}{\omega_{pB} - \omega_{pA}} = \frac{\omega_{pB} - \omega_{pA}}{\omega_{pB} - \omega_{pA}} = 1,$$

因此 $V_{out}(0^+) = AV_0(1 - K_A - K_B) = 0$，这正是极点多于零点时应有的结果。

### 第 4 步 — 时域响应

$$V_{out}(t) = AV_0\left[1 - K_Ae^{-\omega_{pA}t} - K_Be^{-\omega_{pB}t}\right]u(t).$$

当 $\omega_{pB} \gg \omega_{pA}, \omega_z$ 时，$\omega_{pA}/\omega_{pB} \approx 0$，因此 $K_A \approx 1 - \omega_{pA}/\omega_z$，$K_B = 1 - K_A \approx \omega_{pA}/\omega_z$：

$$V_{out}(t) \approx AV_0\left[1 - \frac{\omega_{pA}}{\omega_z}\,e^{-(1 + A_0)\omega_{p1}t} - \left(1 - \frac{\omega_{pA}}{\omega_z}\right)e^{-\omega_{pA}t}\right].$$

- **快**指数项的时间常数为 $1/[(1 + A_0)\omega_{p1}]$，承担了几乎整个阶跃（幅度 $\omega_{pA}/\omega_z \approx 1$）：这就是理想单极点缓冲器的响应。
- **慢**指数项的时间常数为 $1/\omega_{pA} \approx 1/\omega_{p2}$，幅度 $1 - \omega_{pA}/\omega_z$ 很小，与零极点对的失配成正比：输出要么缓慢爬升到终值（$\omega_{pA} < \omega_z$），要么从略高于终值处回落到终值（$\omega_{pA} > \omega_z$）。
- 两个极点都是实极点，因此没有振铃；零极点对的危害在于**建立缓慢**，因为这个小的拖尾以较长的时间常数 $1/\omega_{p2}$ 衰减。

**例子。** $A_0 = 1000$，$\omega_{p1} = 10^6$ rad/s，$\omega_{p2} = 10^8$ rad/s，$\omega_z = 0.9\times10^8$ rad/s（失配 10 %）。精确的极点为 $\omega_{pA} = 0.89\times10^8$ rad/s 和 $\omega_{pB} = 1.12\times10^9$ rad/s，$K_A = 0.010$。快速部分在几纳秒内就建立完毕，但时间常数为 11 ns、幅度为 1 % 的拖尾把建立到 0.1 % 精度所需的时间延长到约 26 ns，大约是没有零极点对时的四倍。

### 第 5 步 — 精确对消

若严格有 $\omega_z = \omega_{p2}$，分母可精确分解且 $\omega_{pA} = \omega_z$，因此

$$K_A = 0, \qquad K_B = 1, \qquad V_{out}(t) = AV_0\left[1 - e^{-(1 + A_0)\omega_{p1}t}\right]u(t),$$

只有一个时间常数，没有过冲。

### 结果

$$H_{closed}(s) = \frac{A\left(1 + \dfrac{s}{\omega_z}\right)}{\left(1 + \dfrac{s}{\omega_{pA}}\right)\left(1 + \dfrac{s}{\omega_{pB}}\right)}, \qquad A = \frac{A_0}{1 + A_0},\quad \omega_{pA} \approx \omega_{p2}\ (\approx \omega_z),\quad \omega_{pB} \approx (1 + A_0)\,\omega_{p1}.$$

对于输入阶跃 $V_0u(t)$：

$$V_{out}(t) = AV_0\left[1 - K_Ae^{-\omega_{pA}t} - K_Be^{-\omega_{pB}t}\right],\quad K_A = \frac{1 - \omega_{pA}/\omega_z}{1 - \omega_{pA}/\omega_{pB}},\quad K_B = \frac{1 - \omega_{pB}/\omega_z}{1 - \omega_{pB}/\omega_{pA}},$$

其中 $K_A + K_B = 1$。当 $\omega_{pB} \gg \omega_{pA}, \omega_z$ 时：

$$V_{out}(t) \approx AV_0\left[1 - \frac{\omega_{pA}}{\omega_z}e^{-(1 + A_0)\omega_{p1}t} - \left(1 - \frac{\omega_{pA}}{\omega_z}\right)e^{-\omega_{pA}t}\right].$$

快速的指数响应之后跟着一个幅度小、变化慢的零极点对拖尾；若精确对消，响应简化为 $AV_0[1 - e^{-(1 + A_0)\omega_{p1}t}]$。

**常见错误。** 写成 $\omega_{pB} \approx \omega_{p1}$ 或 $A = A_0$。反馈使主极点（dominant pole）频率乘以 $1 + A_0$，并使增益减小到 $A_0/(1 + A_0)$。

**常见错误。** 预言会出现振铃或振荡性过冲。两个闭环极点都是实极点；不完全的零极点对只会增加一个幅度很小、衰减缓慢的指数项。

**常见错误。** 得到不从零开始的阶跃响应，例如漏掉了一个留数。有两个极点和一个零点时，$V_{out}(0^+) = 0$，这要求 $K_A + K_B = 1$。
