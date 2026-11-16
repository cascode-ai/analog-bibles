# 详细步骤 - R288

**思路。** 在拉普拉斯域中列输出节点 Y 的 KCL 方程，其中 $V_X = V_{in}$（理想源），两个电容用导纳 $sC_F$ 和 $sC_L$ 表示，放大器为 $-AV_X$ 串联 $R_{out}$；一个方程即可给出 $V_Y/V_{in}$。对 $H(s)\,\Delta V/s$ 做部分分式展开，即得阶跃响应。

### 第 1 步 — 节点 Y 的 KCL

<!-- diagram: diagram-01.cir -->

从 Y 流出的三个电流之和为零：

$$\underbrace{\frac{V_Y - (-AV_{in})}{R_{out}}}_{\text{through } R_{out}} + \underbrace{(V_Y - V_{in})\,sC_F}_{\text{through } C_F} + \underbrace{V_Y\,sC_L}_{\text{through } C_L} = 0 .$$

乘以 $R_{out}$ 并合并同类项：

$$V_Y + AV_{in} + sR_{out}C_F\,V_Y - sR_{out}C_F\,V_{in} + sR_{out}C_L\,V_Y = 0 \quad\Longrightarrow\quad V_Y\left[1 + sR_{out}(C_F + C_L)\right] = V_{in}\left(sR_{out}C_F - A\right).$$

### 第 2 步 — 传递函数、极点与零点

$$\boxed{\frac{V_Y}{V_{in}}(s) = \frac{R_{out}C_Fs - A}{1 + R_{out}(C_F + C_L)s}}$$

- **极点：** $s_p = -\dfrac{1}{R_{out}(C_F + C_L)}$：$R_{out}$ 驱动 Y 处的总电容，其中 $C_F$ 全额计入，因为它的另一端由理想源固定。
- **零点：** $s_z = +\dfrac{A}{R_{out}C_F}$，是一个**右半平面零点**，它只取决于前馈（feedforward）元件 $C_F$，而与 $C_L$ 无关。
- **直流增益：** $-A$。**高频增益：** $\dfrac{R_{out}C_F}{R_{out}(C_F + C_L)} = \dfrac{C_F}{C_F + C_L}$，为正值：输入经 $C_F$ 前馈，并与 $C_L$ 分压。

（密勒定理会在输出端放置 $(1 + 1/A)C_F$，得到单个极点而**没有零点**，从而漏掉前馈通路。）

### 第 3 步 — 用部分分式求阶跃响应

令 $\tau = R_{out}(C_F + C_L)$，$\tau_F = R_{out}C_F$。对于 $V_{in}(s) = \Delta V/s$：

$$V_Y(s) = \frac{\Delta V}{s}\cdot\frac{\tau_Fs - A}{1 + \tau s} = \Delta V\left[\frac{a}{s} + \frac{b}{1 + \tau s}\right],$$

$$
\begin{aligned}
a &= \left.\frac{\tau_Fs - A}{1 + \tau s}\right|_{s = 0} = -A,\\
b &= \left.\frac{\tau_Fs - A}{s}\right|_{s = -1/\tau} = \frac{-\tau_F/\tau - A}{-1/\tau} = \tau_F + A\tau .
\end{aligned}
$$

因此

$$V_Y(s) = \Delta V\left[-\frac{A}{s} + \frac{\tau_F + A\tau}{1 + \tau s}\right] = \Delta V\left[-\frac{A}{s} + \frac{A + \tau_F/\tau}{s + 1/\tau}\right],$$

利用 $\tau_F/\tau = C_F/(C_F + C_L)$，逐项求逆变换：

$$\boxed{V_Y(t) = \Delta V\left[-A + \left(A + \frac{C_F}{C_F + C_L}\right)e^{-t/\tau}\right], \qquad \tau = R_{out}(C_F + C_L),\ \ t \ge 0 .}$$

### 第 4 步 — 检验结果

- **$t = 0^+$：** $V_Y = \Delta V\,C_F/(C_F + C_L)$，这是一个与输入同方向的跳变，与 $H(\infty)\Delta V$ 以及 Y 处的电荷守恒一致：有限的 $R_{out}$ 无法瞬间输送电荷，因此阶跃只能经电容分压器（capacitive divider）$C_F$–$C_L$ 到达 Y。
- **$t \to \infty$：** $V_Y = -A\Delta V = H(0)\Delta V$。
- **特殊情况 $C_L = 0$：** $V_Y(t) = \Delta V[-A + (1 + A)e^{-t/(R_{out}C_F)}]$，即无负载时的结果。
- **过零点：** $e^{-t/\tau} = A/[A + C_F/(C_F + C_L)]$，即 $t = \tau\ln\left[1 + \frac{C_F}{A(C_F + C_L)}\right]$；当 $A$ 很大时，这一时间非常短。

### 第 5 步 — 数值示例

$A = 10$，$R_{out} = 10\ \mathrm{k}\Omega$，$C_F = 1$ pF，$C_L = 4$ pF，$\Delta V = 0.1$ V：

$$
\begin{aligned}
\tau &= (10\ \mathrm{k}\Omega)(5\ \mathrm{pF}) = 50\ \mathrm{ns}, \qquad \frac{C_F}{C_F + C_L} = 0.2,\\
V_Y(t) &= 0.1\left[-10 + 10.2\,e^{-t/50\,\mathrm{ns}}\right]\ \mathrm{V} = -1 + 1.02\,e^{-t/50\,\mathrm{ns}}\ \mathrm{V},\\
s_p &= -2\times10^7\ \mathrm{s^{-1}}, \qquad s_z = +\frac{10}{(10\ \mathrm{k}\Omega)(1\ \mathrm{pF})} = +10^9\ \mathrm{s^{-1}}.
\end{aligned}
$$

| $t$ | 0⁺ | 5 ns | 10 ns | 50 ns | 150 ns | ∞ |
|---|---|---|---|---|---|---|
| $V_Y$ (V) | +0.020 | −0.077 | −0.165 | −0.625 | −0.949 | −1.000 |

输出从比其初始值**高** 20 mV 的位置开始，约 1 ns 后过零，并以 50 ns 的时间常数稳定在 −1 V。

### 结果

$$\frac{V_Y}{V_{in}}(s) = \frac{R_{out}C_Fs - A}{1 + R_{out}(C_F + C_L)s},$$

其极点位于 $s = -1/[R_{out}(C_F + C_L)]$，右半平面零点位于 $s = +A/(R_{out}C_F)$；直流增益为 $-A$，高频增益为 $C_F/(C_F + C_L)$。

阶跃响应（$t \ge 0$），其中 $\tau = R_{out}(C_F + C_L)$：

$$V_Y(t) = \Delta V\left[-A + \left(A + \frac{C_F}{C_F + C_L}\right)e^{-t/\tau}\right].$$

它从 $\Delta V\,C_F/(C_F + C_L)$ 开始，衰减到 $-A\Delta V$。

**常见错误。** 在极点中漏掉 $C_L$，即采用 $\tau = R_{out}C_F$。两个电容都挂在节点 Y 上，阶跃之后它们的另一端都是固定的（理想源和地），因此 $R_{out}$ 看到的是 $C_F + C_L$。

**常见错误。** 把 $C_L$ 放进零点中，或者把零点放在左半平面。零点来自前馈电流 $sC_FV_{in}$ 与放大器电流 $AV_{in}/R_{out}$ 的相互抵消；它只与 $C_F$ 有关，并且由于这两个电流符号相反，它位于正的 $s$ 处。

**常见错误。** 使用密勒定理，它给出含 $(1 + 1/A)C_F + C_L$ 的单个极点而没有零点，因此阶跃响应从 0 开始直接下降，漏掉了初始跳变。
