# 详细步骤 - R286

**思路。** 直接在拉普拉斯域中列输出节点 Y 的 KCL 方程，其中 $V_X = V_{in}$（理想源），放大器为 $-AV_X$ 串联 $R_{out}$；一个方程即可给出 $V_Y/V_{in}$。对于阶跃响应，乘以 $\Delta V/s$，展开为部分分式（partial fractions）后求逆变换。这里不需要密勒定理，而且实际上它会漏掉经 $C_F$ 的前馈（feedforward）通路。

### 第 1 步 — s 域中节点 Y 的 KCL

<!-- diagram: diagram-01.cir -->

从 Y 流出的电流——经 $R_{out}$ 流向受控源的电流和经 $C_F$ 流向 X 的电流——之和为零：

$$\frac{V_Y + AV_{in}}{R_{out}} + (V_Y - V_{in})\,sC_F = 0 .$$

乘以 $R_{out}$ 并合并同类项：

$$V_Y + AV_{in} + R_{out}C_Fs\,V_Y - R_{out}C_Fs\,V_{in} = 0 \quad\Longrightarrow\quad V_Y\,(1 + R_{out}C_Fs) = V_{in}\,(R_{out}C_Fs - A).$$

### 第 2 步 — 传递函数、极点与零点

$$\boxed{\frac{V_Y}{V_{in}}(s) = \frac{R_{out}C_Fs - A}{1 + R_{out}C_Fs}} = -A\,\frac{1 - s\,\dfrac{R_{out}C_F}{A}}{1 + sR_{out}C_F}.$$

- **极点：** $s_p = -\dfrac{1}{R_{out}C_F}$（左半平面，稳定）。
- **零点：** $s_z = +\dfrac{A}{R_{out}C_F}$，是一个**右半平面零点**。
- **直流增益**（$s \to 0$）：$-A$，对应放大器通路。
- **高频增益**（$s \to \infty$）：$+1$；此时 $C_F$ 相当于短路，把输入直接送到 Y。

经过放大器的反相通路与经过 $C_F$ 的同相通路符号相反，并在 $s = s_z$ 处相互抵消，这就是零点位于右半平面的原因。

**为什么密勒定理会导致错误。** 把 $C_F$ 拆分为 X 处的 $(1 + A)C_F$ 和 Y 处的 $(1 + 1/A)C_F$，将得到 $-A/[1 + sR_{out}(1 + 1/A)C_F]$：极点略有不同，而且**没有零点**，因为低频增益无法体现经 $C_F$ 的直接前馈。

### 第 3 步 — 用部分分式求阶跃响应

令 $V_{in}(s) = \Delta V/s$，$\tau = R_{out}C_F$：

$$V_Y(s) = \frac{\Delta V}{s}\cdot\frac{\tau s - A}{1 + \tau s} .$$

写成 $\dfrac{\tau s - A}{s(1 + \tau s)} = \dfrac{a}{s} + \dfrac{b}{1 + \tau s}$：

$$
\begin{aligned}
a &= \left.\frac{\tau s - A}{1 + \tau s}\right|_{s = 0} = -A,\\
b &= \left.\frac{\tau s - A}{s}\right|_{s = -1/\tau} = \frac{-1 - A}{-1/\tau} = \tau(1 + A).
\end{aligned}
$$

因此

$$V_Y(s) = \Delta V\left[-\frac{A}{s} + \frac{\tau(1 + A)}{1 + \tau s}\right] = \Delta V\left[-\frac{A}{s} + \frac{1 + A}{s + 1/\tau}\right],$$

逐项求逆变换，得

$$\boxed{V_Y(t) = \Delta V\left[-A + (1 + A)\,e^{-t/(R_{out}C_F)}\right], \qquad t \ge 0 .}$$

### 第 4 步 — 检验响应

- **初始值：** 在 $t = 0^+$ 时，$V_Y = \Delta V[-A + 1 + A] = +\Delta V$，初值定理也证实了这一点：$\lim_{s\to\infty}sV_Y(s) = \Delta V\cdot H(\infty) = +\Delta V$。由于唯一的充电通路是有限的 $R_{out}$，$C_F$ 两端的电压不能突变，因此 Y 随 X 一起跳变。
- **终值：** $-A\Delta V$，终值定理也证实了这一点：$\lim_{s\to0}sV_Y(s) = H(0)\Delta V = -A\Delta V$。
- **时间常数：** $\tau = R_{out}C_F$，**而不是** $(1 + A)R_{out}C_F$：X 的电压由理想源固定。
- **过零点：** 当 $e^{-t/\tau} = A/(1 + A)$，即 $t = \tau\ln[(1 + A)/A]$ 时，$V_Y = 0$。

因此输出先向上跳变 $\Delta V$（同相前馈通路），然后按指数规律衰减到 $-A\Delta V$（反相主通路）。

### 第 5 步 — 数值示例

$A = 10$，$R_{out} = 10\ \mathrm{k}\Omega$，$C_F = 1$ pF，$\Delta V = 0.1$ V：

$$
\begin{aligned}
\tau &= (10\ \mathrm{k}\Omega)(1\ \mathrm{pF}) = 10\ \mathrm{ns}, \qquad s_p = -10^8\ \mathrm{s^{-1}}, \qquad s_z = +10^9\ \mathrm{s^{-1}},\\
V_Y(t) &= 0.1\left[-10 + 11\,e^{-t/10\,\mathrm{ns}}\right]\ \mathrm{V} = -1 + 1.1\,e^{-t/10\,\mathrm{ns}}\ \mathrm{V}.
\end{aligned}
$$

| $t$ | 0⁺ | 1 ns | 5 ns | 10 ns | 30 ns | ∞ |
|---|---|---|---|---|---|---|
| $V_Y$ (V) | +0.100 | −0.005 | −0.333 | −0.595 | −0.945 | −1.000 |

### 结果

$$\frac{V_Y}{V_{in}}(s) = \frac{R_{out}C_Fs - A}{1 + R_{out}C_Fs},$$

其极点位于 $s = -1/(R_{out}C_F)$，零点位于 $s = +A/(R_{out}C_F)$（右半平面）；直流增益为 $-A$，高频增益为 $+1$。

阶跃响应（$t \ge 0$）：

$$V_Y(t) = \Delta V\left[-A + (1 + A)\,e^{-t/(R_{out}C_F)}\right],$$

即在 $t = 0^+$ 时跳到 $+\Delta V$，随后以 $\tau = R_{out}C_F$ 按指数规律衰减到 $-A\Delta V$。

**常见错误。** 丢掉零点，写成 $-A/(1 + R_{out}C_Fs)$，或者使用含 $(1 + A)C_F$ 的密勒极点。$C_F$ 把输入直接连到输出，这在分子中引入了 $sC_F$ 项；没有这一项，阶跃响应将从 0 而不是 $+\Delta V$ 开始。

**常见错误。** 把零点放在左半平面（$s = -A/(R_{out}C_F)$）。经 $C_F$ 的同相前馈与反相主通路是在**正**实数 $s$ 处相互抵消的。

**常见错误。** 用 $(1 + A)R_{out}C_F$ 作为时间常数。X 处经密勒倍增（Miller multiplication）的电容不起作用，因为 X 由理想电压源驱动；唯一的时间常数是输出端的 $R_{out}C_F$。
