# 详细步骤 - R508

**思路。** 在零极点完全对消（$\omega_z = \omega_{p2}$）时，开环传递函数退化为单极点，因此单位增益闭环也只有一个极点，其阶跃响应是单一的指数函数。由给定数据计算其终值和时间常数。

### 第 1 步 — 完全对消时的开环传递函数

当 $\omega_z = \omega_{p2}$ 时，因子 $(1 + s/\omega_{p2})$ 被约去：

$$H_{open}(s) = \frac{A_0\left(1 + s/\omega_{p2}\right)}{\left(1 + s/\omega_{p1}\right)\left(1 + s/\omega_{p2}\right)} = \frac{A_0}{1 + s/\omega_{p1}} ,$$

这是一个直流增益为 $A_0 = 494$、极点为 $\omega_{p1} = 3.66\times10^6$ rad/s 的理想单极点放大器；位于 $3.33\times10^9$ rad/s 的次极点不再出现。

### 第 2 步 — 单位反馈下的闭环

当 $\beta = 1$ 时，$H_{closed} = H_{open}/(1 + H_{open})$：

$$
\begin{aligned}
H_{closed}(s) &= \frac{\dfrac{A_0}{1 + s/\omega_{p1}}}{1 + \dfrac{A_0}{1 + s/\omega_{p1}}} = \frac{A_0}{1 + s/\omega_{p1} + A_0} = \frac{A_0}{(1 + A_0) + s/\omega_{p1}}\\
&= \frac{A_0}{1 + A_0}\cdot\frac{1}{1 + \dfrac{s}{(1 + A_0)\,\omega_{p1}}} .
\end{aligned}
$$

**直流增益：**

$$A = \frac{A_0}{1 + A_0} = \frac{494}{495} = 0.99798 .$$

**单一极点**，被展宽了 $1 + A_0$ 倍：

$$\omega_{-3dB} = (1 + A_0)\,\omega_{p1} = 495\times3.66\times10^6\ \mathrm{rad/s} = 1.81\times10^9\ \mathrm{rad/s}\quad(f = 288\ \mathrm{MHz}).$$

**时间常数：**

$$\tau = \frac{1}{(1 + A_0)\,\omega_{p1}} = \frac{1}{1.8117\times10^9\ \mathrm{rad/s}} = 0.552\ \mathrm{ns}.$$

### 第 3 步 — 阶跃响应

对于 $V_{in}(s) = V_0/s$：

$$V_{out}(s) = \frac{AV_0}{s\,(1 + s\tau)} = AV_0\left[\frac1s - \frac{\tau}{1 + s\tau}\right] = AV_0\left[\frac1s - \frac{1}{s + 1/\tau}\right]$$

（验证：$\frac1s - \frac{1}{s + 1/\tau} = \frac{1/\tau}{s(s + 1/\tau)} = \frac{1}{s(1 + s\tau)}$ ✓），因此

$$V_{out}(t) = AV_0\left(1 - e^{-t/\tau}\right)u(t) = 0.998\,V_0\left(1 - e^{-t/0.552\ \mathrm{ns}}\right)u(t).$$

### 第 4 步 — 响应的特性

- **形状：** 单一的上升指数曲线，从 0 开始，初始斜率为 $AV_0/\tau$，并单调地趋近终值：**没有过冲，也没有振铃**（只有一个实极点）。
- **终值：** $0.998\,V_0$，由有限的开环增益（open-loop gain）引起的静态误差为 $1/(1 + A_0) = 0.2\,\%$。
- **建立时间。** 建立到与终值相差 $\epsilon$ 以内需要 $t = \tau\ln(1/\epsilon)$：
$$
\begin{aligned}
1\,\%: &\quad t = \tau\ln100 = 4.6\tau = 2.5\ \mathrm{ns},\\
0.1\,\%: &\quad t = \tau\ln1000 = 6.9\tau = 3.8\ \mathrm{ns}.
\end{aligned}
$$
- **10–90 % 上升时间：** $2.2\tau = 1.2$ ns。

零点恰好落在次极点上时，相位裕度（phase margin）基本上为 90°；$\omega_z$ 与 $\omega_{p2}$ 之间的任何失配都会增加一个小而缓慢的“零极点对”（doublet）拖尾，其时间常数接近 $1/\omega_{p2}$。

### 结果

$$V_{out}(t) = V_0\,\frac{A_0}{1 + A_0}\left[1 - e^{-t/\tau}\right]u(t), \qquad \tau = \frac{1}{(1 + A_0)\,\omega_{p1}} = \frac{1}{495\times3.66\times10^6\ \mathrm{rad/s}} \approx 0.55\ \mathrm{ns},$$

即 $V_{out}(t) \approx 0.998\,V_0\,(1 - e^{-t/0.55\ \mathrm{ns}})$：单一指数，没有过冲，约 2.5 ns 建立到 1 %，约 3.8 ns 建立到 0.1 %。

**常见错误。** 取 $\tau = 1/\omega_{p1}$（273 ns）或 $1/\omega_{p2}$（0.3 ns）。反馈把主极点（dominant pole）提高了 $1 + A_0$ 倍，而在完全对消时 $\omega_{p2}$ 不再出现在响应中。

**常见错误。** 预言会有过冲、振铃或第二个指数项。当严格有 $\omega_z = \omega_{p2}$ 时，闭环只有一个实极点。

**常见错误。** 认为终值恰好为 $V_0$。$A_0 = 494$ 时，缓冲器建立到输入的 $A_0/(1 + A_0) = 0.998$ 倍，静态误差为 0.2 %。
