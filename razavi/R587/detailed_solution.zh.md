# 详细步骤 - R587

**思路。** 把运放建模为跨导 $G_m$ 加输出电阻 $R_0$，在 X 点和输出端列基尔霍夫电流定律（KCL）方程，推导闭环传递函数。其直流值给出增益误差，其极点给出时间常数。没有负载电容时，时间常数仅由 $C_1 + C_{in}$ 决定，因此速度指标限定了 $C_1$ 的上限，而精度指标则确定该 $C_1$ 下的最小 $C_2$。

### 第 1 步 — 小信号模型

把反相输入端记为 X。运算跨导放大器（OTA）向输出节点注入电流 $G_m(V^+ - V^-) = -G_mV_X$，输出节点上还接有到地的 $R_0$ 以及 $C_2$ 的另一端，其中

$$G_m = 1/(100\ \Omega) = 10\ \mathrm{mS}, \qquad R_0 = A_{v1}/G_m = 1000 \times 100\ \Omega = 100\ \mathrm{k}\Omega.$$

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 节点方程

**X 点的 KCL：**

$$sC_1(V_{in} - V_X) = sC_{in}V_X + sC_2(V_X - V_{out}).$$

记 X 处的总电容为 $C_T = C_1 + C_2 + C_{in}$，合并各项并除以 $s$：

$$V_X = \frac{C_1V_{in} + C_2V_{out}}{C_T}.$$

**输出端的 KCL：**

$$-G_mV_X = \frac{V_{out}}{R_0} + sC_2(V_{out} - V_X)\quad\Longrightarrow\quad V_{out}\left(\frac{1}{R_0} + sC_2\right) = V_X\,(sC_2 - G_m).$$

### 第 3 步 — 传递函数

代入 $V_X$ 并乘以 $C_T$：

$$
\begin{aligned}
V_{out}\left(\frac{1}{R_0} + sC_2\right)C_T &= (C_1V_{in} + C_2V_{out})(sC_2 - G_m)\\
V_{out}\left[\frac{C_T}{R_0} + sC_2C_T - sC_2^2 + G_mC_2\right] &= C_1V_{in}\,(sC_2 - G_m)\\
V_{out}\left[G_mC_2 + \frac{C_T}{R_0} + sC_2(C_1 + C_{in})\right] &= C_1V_{in}\,(sC_2 - G_m),
\end{aligned}
$$

其中利用了 $C_T - C_2 = C_1 + C_{in}$。因此

$$\frac{V_{out}}{V_{in}}(s) = \frac{C_1\,(sC_2 - G_m)}{G_mC_2 + C_T/R_0 + sC_2(C_1 + C_{in})}.$$

**直流增益**（$s = 0$），除以 $G_mC_2$ 并利用 $G_mR_0 = A_{v1}$：

$$\frac{V_{out}}{V_{in}}(0) = -\frac{C_1}{C_2}\cdot\frac{1}{1 + \dfrac{C_T}{A_{v1}C_2}}.$$

**极点**位于 $s = -1/\tau$：

$$\tau = \frac{C_2(C_1 + C_{in})}{G_mC_2 + C_T/R_0} = \frac{C_1 + C_{in}}{G_m\left(1 + \dfrac{C_T}{A_{v1}C_2}\right)} = \frac{R_0C_2(C_1 + C_{in})}{C_T + A_{v1}C_2}.$$

位于 $s = G_m/C_2$ 的右半平面零点（right-half-plane zero）由经 $C_2$ 的前馈（feedforward）引起，只影响阶跃响应的最初瞬间；建立过程由 $\tau$ 决定。

### 第 4 步 — 理解时间常数

利用反馈系数 $\beta = C_2/C_T$ 和环路增益（loop gain）$A_{v1}\beta = A_{v1}C_2/C_T$，

$$\tau = \frac{C_1 + C_{in}}{G_m\,(1 + 1/(A_{v1}\beta))} \approx \frac{C_1 + C_{in}}{G_m}\qquad(A_{v1}\beta \gg 1).$$

$C_2$ 之所以消失，是因为输出节点本身没有电容：OTA 的等效跨导被反馈降低为 $G_m\beta$，它驱动的是 $C_2$ 与 $C_1 + C_{in}$ 的串联电容 $C_s = C_2(C_1 + C_{in})/C_T$，因此 $\tau = C_s/(G_m\beta) = (C_1 + C_{in})/G_m$。较小的 $C_2$ 减轻了负载，但也削弱了反馈，两种效应正好抵消。

### 第 5 步 — 速度约束：允许的最大 $C_1$

要求 $\tau \le 2$ ns：

$$
\begin{aligned}
\frac{C_1 + C_{in}}{G_m} &\le 2\ \mathrm{ns}\\
C_1 + C_{in} &\le (2\times10^{-9}\ \mathrm{s})(10\times10^{-3}\ \mathrm{S}) = 20\ \mathrm{pF}\\
C_1 &\le 20\ \mathrm{pF} - 0.2\ \mathrm{pF} = 19.8\ \mathrm{pF}.
\end{aligned}
$$

### 第 6 步 — 精度约束：允许的最小 $C_2$

由第 3 步，相对增益误差为 $x/(1 + x) \approx x$，其中

$$x = \frac{C_T}{A_{v1}C_2} = \frac{C_1 + C_2 + C_{in}}{1000\,C_2}.$$

要求 $x \le 0.01$：

$$
\begin{aligned}
C_1 + C_2 + C_{in} &\le 10\,C_2\\
C_2 &\ge \frac{C_1 + C_{in}}{9},
\end{aligned}
$$

因此标称增益的上限为

$$\frac{C_1}{C_2} \le \frac{9\,C_1}{C_1 + C_{in}}.$$

该上限**随 $C_1$ 增大而升高**（固定的寄生电容 $C_{in}$ 的影响变小），因此应采用速度指标所允许的最大 $C_1$。

### 第 7 步 — 设计值

取 $C_1 = 19.8$ pF（因此 $C_1 + C_{in} = 20$ pF）：

$$
\begin{aligned}
C_2 &= \frac{C_1 + C_{in}}{9} = \frac{20\ \mathrm{pF}}{9} = 2.22\ \mathrm{pF},\\
\frac{C_1}{C_2} &= \frac{19.8\ \mathrm{pF}}{2.222\ \mathrm{pF}} = 8.91 .
\end{aligned}
$$

**验证。**

$$
\begin{aligned}
x &= \frac{19.8 + 2.222 + 0.2}{1000 \times 2.222} = \frac{22.22}{2222} = 0.0100 \;\Rightarrow\; \text{error} \approx 1\ \%,\\
\beta &= \frac{2.222}{22.22} = 0.100, \qquad A_{v1}\beta = 100 \gg 1,\\
\tau &= \frac{20\ \mathrm{pF}}{10\ \mathrm{mS}\times(1 + 0.01)} = 1.98\ \mathrm{ns} \le 2\ \mathrm{ns}.\ \checkmark
\end{aligned}
$$

**采用精确表达式。** 精确误差 $x/(1+x) = 0.01$ 给出 $x = 0.010101$ 以及 $C_1 + C_{in} = 9.101\,C_2$。精确的 $\tau = (C_1 + C_{in})/[G_m(1 + x)] = 2$ ns 给出 $C_1 + C_{in} = 20\ \mathrm{pF}\times1.0101 = 20.20$ pF，因此 $C_1 = 20.0$ pF，$C_2 = 20.20/9.101 = 2.22$ pF，$C_1/C_2 = 9.01$，与一阶结果相差约 1 %，这正是指标本身的精度。

**对比。** 若 $C_1 = 2$ pF，则 $\tau = 2.2\ \mathrm{pF}/10\ \mathrm{mS} = 0.22$ ns，远快于所需，但此时 $C_{in}$ 占 $C_1$ 的 10 %，增益被限制在 $9 \times 2/2.2 = 8.2$。把速度余量用在更大的 $C_1$ 上就能换取增益；当 $C_1 \to \infty$ 时，增益上限为 9（一阶近似）。

### 结果

没有负载电容时，$\tau \approx (C_1 + C_{in})/G_m$，与 $C_2$ 无关；增益误差 $\approx (C_1 + C_2 + C_{in})/(A_{v1}C_2)$。

- 速度：$C_1 + C_{in} \le 20$ pF，因此 $C_1 \approx 19.8$ pF。
- 精度：$C_2 \ge (C_1 + C_{in})/9 \approx 2.2$ pF。
- **最大标称增益 $C_1/C_2 \approx 8.9$**，此时 $C_1 \approx 19.8$ pF，$C_2 \approx 2.22$ pF（采用精确表达式：$C_1 \approx 20.0$ pF，$C_2 \approx 2.22$ pF，增益 $\approx 9.0$）。

**常见错误。** 使用了错误的时间常数：$C_2/G_m$、$(C_1 + C_2 + C_{in})/G_m$ 或 $R_0C_2$。$R_0C_2$ 是忽略了反馈的开环量（此处为 222 ns，慢了一百倍）；没有负载电容时，闭环极点的时间常数为 $(C_1 + C_{in})/G_m$。

**常见错误。** 保持 $C_1 = 2$ pF，并声称增益受时间常数限制。速度指标限制的是 $C_1$ 的**上限**；增益受精度限制，在速度预算允许的范围内把 $C_1$ 取得尽可能大，才能使增益最大。
