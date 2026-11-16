# 详细步骤 - R512

**思路。** 以偏置点为基准处理增量：写出流过 $C_F$ 的电流和输出端的 KCL，消去 $V_X$，得到关于 $V_{out}$ 的二阶微分方程，再用拉普拉斯变换和部分分式求解。然后分析其中的三项，并令导数为零求出最小值。

### 第 1 步 — 小信号模型（small-signal model）

对增量而言，$M_{out}$ 相当于一个从输出端流向地的电流 $g_mV_X$（忽略 $r_O$），恒定的 $I_1$ 相当于开路。在 $t = 0^-$ 时，所有增量电压都为零。该模型有两个节点：X 点接有流向地的 $I_{in}$ 以及通往输出端的 $C_F$；输出节点接有 $C_F$、$g_mV_X$ 和 $C_L$。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 两个电路方程

**X 点的 KCL。** 栅极不吸取电流，因此 $I_{in}$ 全部经 $C_F$ 从输出端流向 X：

$$C_F\,\frac{d(V_{out} - V_X)}{dt} = I_{in}. \tag{1}$$

**输出端的 KCL。** 离开输出端的电流有：$g_mV_X$、流入 $C_F$ 的电流（由式 (1) 知它等于 $I_{in}$）以及流入 $C_L$ 的电流：

$$g_mV_X + I_{in} + C_L\,\frac{dV_{out}}{dt} = 0. \tag{2}$$

### 第 3 步 — 消去 $V_X$：微分方程

由式 (2)：

$$V_X = -\frac{1}{g_m}\left(I_{in} + C_L\frac{dV_{out}}{dt}\right), \qquad \frac{dV_X}{dt} = -\frac{1}{g_m}\left(\frac{dI_{in}}{dt} + C_L\frac{d^2V_{out}}{dt^2}\right).$$

将 $\dot V_X$ 代入式 (1)，即 $C_F\dot V_{out} - C_F\dot V_X = I_{in}$：

$$C_F\frac{dV_{out}}{dt} + \frac{C_F}{g_m}\left(\frac{dI_{in}}{dt} + C_L\frac{d^2V_{out}}{dt^2}\right) = I_{in},$$

$$\boxed{\frac{C_FC_L}{g_m}\,\frac{d^2V_{out}}{dt^2} + C_F\,\frac{dV_{out}}{dt} = I_{in} - \frac{C_F}{g_m}\,\frac{dI_{in}}{dt}}$$

输入的导数项产生一个零点：一部分输入电流经 $C_F$ 直接到达输出端。

### 第 4 步 — 拉普拉斯变换

在零初始条件下，$I_{in}(s) = I_{SS}/s$，$dI_{in}/dt$ 的变换为 $s\cdot I_{SS}/s = I_{SS}$：

$$\frac{C_FC_L}{g_m}s^2V_{out}(s) + C_FsV_{out}(s) = \frac{I_{SS}}{s} - \frac{C_F}{g_m}I_{SS} = \frac{I_{SS}}{s}\left(1 - \frac{sC_F}{g_m}\right).$$

左边等于 $C_Fs\left(1 + sC_L/g_m\right)V_{out}(s)$，因此

$$V_{out}(s) = \frac{I_{SS}}{C_F}\cdot\frac{1 - s\,a}{s^2(1 + s\tau)},\qquad a = \frac{C_F}{g_m},\quad \tau = \frac{C_L}{g_m}.$$

$\tau$ 是由跨导 $g_m$ 驱动 $C_L$ 的时间常数。

### 第 5 步 — 部分分式

$$\frac{1 - sa}{s^2(1 + s\tau)} = \frac{A}{s^2} + \frac{B}{s} + \frac{C}{1 + s\tau},$$

其中 $A = 1$（两边乘以 $s^2$ 后令 $s = 0$），

$$C = \frac{1 + a/\tau}{1/\tau^2} = \tau^2 + a\tau = \tau(\tau + a)\quad (\text{at } s = -1/\tau),$$

$$B = \frac{d}{ds}\left[\frac{1 - sa}{1 + s\tau}\right]_{s=0} = \left[\frac{-a(1 + s\tau) - (1 - sa)\tau}{(1 + s\tau)^2}\right]_{s=0} = -(a + \tau).$$

因此

$$V_{out}(s) = \frac{I_{SS}}{C_F}\left[\frac{1}{s^2} - \frac{a + \tau}{s} + \frac{\tau(\tau + a)}{1 + s\tau}\right].$$

### 第 6 步 — 回到时域

利用 $1/s^2 \to t$、$1/s \to 1$ 和 $1/(1 + s\tau) \to (1/\tau)e^{-t/\tau}$（对 $t \ge 0$）：

$$V_{out}(t) = \frac{I_{SS}}{C_F}\left[t - (a + \tau) + (a + \tau)e^{-t/\tau}\right],\qquad \frac{I_{SS}}{C_F}(a + \tau) = \frac{I_{SS}}{C_F}\cdot\frac{C_F + C_L}{g_m} = \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right).$$

因此

$$\boxed{V_{out}(t) = \frac{I_{SS}}{C_F}\,t\,u(t) - \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right)u(t) + \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right)e^{-t/\tau}u(t),\qquad \tau = \frac{C_L}{g_m}.}$$

**验算。**
- $V_{out}(0^+) = 0 - \frac{I_{SS}}{g_m}(1 + \frac{C_L}{C_F}) + \frac{I_{SS}}{g_m}(1 + \frac{C_L}{C_F}) = 0$，这是必然的：$C_L$ 上的电压不能跳变。
- $\dot V_{out}(0^+) = \dfrac{I_{SS}}{C_F} - \dfrac{I_{SS}}{g_m}\left(1 + \dfrac{C_L}{C_F}\right)\dfrac{g_m}{C_L} = \dfrac{I_{SS}}{C_F} - \dfrac{I_{SS}}{C_L} - \dfrac{I_{SS}}{C_F} = -\dfrac{I_{SS}}{C_L}$。在 $t = 0^+$ 时，$V_X$ 尚未变化，因此 $M_{out}$ 仍然流过其偏置电流，全部 $I_{SS}$ 都经 $C_F$ 从 $C_L$ 中抽出。
- 长时间后：$V_X \to -\frac{I_{SS}}{g_m}(1 + C_L/C_F)$。$M_{out}$ 让出 $I_{SS}$（此时流过 $C_F$）以及 $C_LI_{SS}/C_F$（以斜坡速率给 $C_L$ 充电），输出以 $I_{SS}/C_F$ 的斜率斜坡上升，与密勒积分器（Miller integrator）相同。

### 第 7 步 — 三个分量与 $V_{out}(t)$ 的波形

1. **斜坡** $\dfrac{I_{SS}}{C_F}t$，斜率为 $I_{SS}/C_F$：$I_{SS}$ 给 $C_F$ 充电（积分器特性）。
2. **负阶跃** $-\dfrac{I_{SS}}{g_m}\left(1 + \dfrac{C_L}{C_F}\right)$，对所有 $t > 0$ 存在：它是使 $M_{out}$ 让出那部分电流（现在流经 $C_F$ 并流入 $C_L$）所需的栅压变化。
3. **衰减指数项** $+\dfrac{I_{SS}}{g_m}\left(1 + \dfrac{C_L}{C_F}\right)e^{-t/\tau}$：在 $t = 0$ 时抵消阶跃，并以 $\tau = C_L/g_m$ 衰减（约 $5\tau$ 后消失）。

对式 (1) 积分可精确得到 $V_{out} - V_X = I_{SS}t/C_F$，因此第 2 项与第 3 项之和就是栅极电压 $V_X(t)$：它以时间常数 $\tau$ 从 0 变到 $-(I_{SS}/g_m)(1 + C_L/C_F)$，而输出等于它再加上 $C_F$ 两端不断增大的电压。

以 $C_F = C_L$ 为例（此时 $\tau = C_F/g_m$；以 $I_{SS}/g_m$ 为单位，斜坡为 $t/\tau$，阶跃为 $-2$，指数项为 $2e^{-t/\tau}$）：

| $t/\tau$ | 斜坡 | 阶跃 | 指数项 | $V_{out}$（单位为 $I_{SS}/g_m$） |
|---|---|---|---|---|
| 0 | 0 | −2 | 2.000 | 0 |
| 0.25 | 0.25 | −2 | 1.558 | −0.192 |
| 0.5 | 0.50 | −2 | 1.213 | −0.287 |
| 0.693 | 0.693 | −2 | 1.000 | **−0.307**（最小值） |
| 1 | 1.00 | −2 | 0.736 | −0.264 |
| 2 | 2.00 | −2 | 0.271 | 0.271 |
| 3 | 3.00 | −2 | 0.100 | 1.100 |
| 5 | 5.00 | −2 | 0.013 | 3.013 |

**波形。** $V_{out}$ 从 0 开始，初始斜率为 $-I_{SS}/C_L$，先下凹到零以下，在 $t_{min}$ 处转向，随后过零，并趋近渐近线 $\frac{I_{SS}}{C_F}t - \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right)$，即一条斜率为 $I_{SS}/C_F$、被阶跃向下平移的斜坡。

### 第 8 步 — 最小值出现的时刻及其数值

$$\frac{dV_{out}}{dt} = \frac{I_{SS}}{C_F} - \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right)\frac{g_m}{C_L}e^{-t/\tau} = \frac{I_{SS}}{C_F} - I_{SS}\left(\frac{1}{C_L} + \frac{1}{C_F}\right)e^{-t/\tau} = 0$$

得到

$$e^{-t_{min}/\tau} = \frac{1/C_F}{1/C_L + 1/C_F} = \frac{C_L}{C_L + C_F},
\qquad
\boxed{t_{min} = \tau\ln\frac{C_L + C_F}{C_L} = \frac{C_L}{g_m}\ln\left(1 + \frac{C_F}{C_L}\right).}$$

二阶导数 $I_{SS}(1/C_L + 1/C_F)e^{-t/\tau}/\tau$ 为正，因此这是一个最小值。代入 $e^{-t_{min}/\tau} = C_L/(C_L + C_F)$：

$$
\begin{aligned}
V_{out}(t_{min}) &= \frac{I_{SS}}{C_F}\cdot\frac{C_L}{g_m}\ln\left(1 + \frac{C_F}{C_L}\right) - \frac{I_{SS}}{g_m}\cdot\frac{C_F + C_L}{C_F}\left(1 - \frac{C_L}{C_L + C_F}\right)\\
&= \frac{I_{SS}}{g_m}\cdot\frac{C_L}{C_F}\ln\left(1 + \frac{C_F}{C_L}\right) - \frac{I_{SS}}{g_m}\\
&= -\frac{I_{SS}}{g_m}\left[1 - \frac{C_L}{C_F}\ln\left(1 + \frac{C_F}{C_L}\right)\right],
\end{aligned}
$$

由于 $x > 0$ 时 $\ln(1 + x) < x$，该值为负。当 $C_F = C_L$ 时：$t_{min} = \tau\ln2 = 0.693\,C_L/g_m$，$V_{min} = -(1 - \ln2)I_{SS}/g_m = -0.307\,I_{SS}/g_m$，与表中一致。

当 $C_L \to 0$ 时，$\tau \to 0$，$t_{min} \to 0$：下凹就变成我们熟悉的瞬间下降 $-I_{SS}/g_m$，随后是斜坡。$C_L$ 使这一下降变得平滑。

### 结果

$$V_{out}(t) = \frac{I_{SS}}{C_F}\,t\,u(t) - \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right)u(t) + \frac{I_{SS}}{g_m}\left(1 + \frac{C_L}{C_F}\right)e^{-t/\tau}u(t),\qquad \tau = \frac{C_L}{g_m},$$

它来自微分方程 $\dfrac{C_FC_L}{g_m}\ddot V_{out} + C_F\dot V_{out} = I_{in} - \dfrac{C_F}{g_m}\dot I_{in}$。
- 各项分别为斜率为 $I_{SS}/C_F$ 的斜坡、负阶跃 $-(I_{SS}/g_m)(1 + C_L/C_F)$，以及高度相同、以 $\tau = C_L/g_m$ 衰减的正指数项。
- 三者之和给出 $V_{out}(0^+) = 0$，初始斜率为 $-I_{SS}/C_L$。
- 输出先下凹，在下式给出的时刻达到最小值：
$$t_{min} = \frac{C_L}{g_m}\ln\left(1 + \frac{C_F}{C_L}\right),$$
此时 $V_{out} = -\dfrac{I_{SS}}{g_m}\left[1 - \dfrac{C_L}{C_F}\ln\left(1 + \dfrac{C_F}{C_L}\right)\right]$，之后沿平移后的斜坡上升。

**常见错误。** 给指数项加上负号。这样 $V_{out}(0^+) = -2(I_{SS}/g_m)(1 + C_L/C_F)$，这是 $C_L$ 不可能产生的跳变，而且最小值也会消失。

**常见错误。** 用 $C_F/g_m$ 或 $r_OC_L$ 作为时间常数。指数项来自极点 $1 + sC_L/g_m$（$r_O$ 已忽略）；$C_F/g_m$ 只出现在零点中。

**常见错误。** 在输出端的 KCL 中漏掉流过 $C_F$ 的电流，即写成 $g_mV_X + C_L\dot V_{out} = 0$。$I_{in}$ 全部经 $C_F$ 从输出端抽取；漏掉它就会同时丢掉零点和初始的下凹。
