# 详细步骤 - R576

**思路。** 跟踪期间，开关处于深线性区（deep triode region），相当于一个由过驱动电压（overdrive voltage）$V_{DD} - V_{in} - V_{TH}$ 决定的电阻。提高输入的直流电平会减小过驱动电压、增大 $R_{on1}$，从而增大 RC 延迟和相位滞后。计算两种情况，然后说明随瞬时输入而变的导通电阻如何转化为失真，并对二次谐波（second harmonic）作一阶估计。

### 第 1 步 — 深线性区中的导通电阻与相位

输出跟踪输入，因此 $V_{DS}$ 远小于一毫伏，源极约处于 $V_{in}$，且

$$R_{on1} = \frac{1}{\beta\,(V_{DD} - V_{in} - V_{TH})}, \qquad \beta = \mu_nC_{ox}\frac WL = (134\ \mu\mathrm{A/V^2})(40) = 5.36\ \mathrm{mA/V^2}.$$

它与 $C_H$ 构成低通电路 $V_{out}/V_{in} = 1/(1 + j\omega R_{on1}C_H)$，因此

$$\phi = -\arctan(\omega_{in}R_{on1}C_H), \qquad \omega_{in} = 2\pi\times10^{8}\ \mathrm{rad/s}.$$

### 第 2 步 — 情形 $V_m = 1$ V，$V_0 = 10$ mV

在平均电平 $V_{in} = 1$ V 处：

$$
\begin{aligned}
V_{ov} &= 3 - 1 - 0.7 = 1.3\ \mathrm{V},\\
R_{on1} &= \frac{1}{(5.36\ \mathrm{mA/V^2})(1.3\ \mathrm{V})} = \frac{1}{6.97\ \mathrm{mS}} = 143.5\ \Omega,\\
\omega_{in}R_{on1}C_H &= (6.283\times10^{8})(143.5\ \Omega)(10^{-12}\ \mathrm{F}) = 0.0902,\\
\phi &= -\arctan(0.0902) = -0.0899\ \mathrm{rad} = -5.15^\circ,
\end{aligned}
$$

相当于 $0.0899/(6.283\times10^{8}) = 143$ ps $\approx R_{on1}C_H$ 的延迟。在 ±10 mV 摆幅的两端：

| $V_{in}$ | $V_{ov}$ | $R_{on1}$ | $\phi$ |
|---|---|---|---|
| 0.99 V | 1.31 V | $1/(5.36\times1.31)\ \mathrm{k}\Omega = 142.4\ \Omega$ | −5.11° |
| 1.00 V | 1.30 V | 143.5 Ω | −5.15° |
| 1.01 V | 1.29 V | $1/(5.36\times1.29)\ \mathrm{k}\Omega = 144.6\ \Omega$ | −5.19° |

### 第 3 步 — 与 $V_m = V_0 = 10$ mV 的比较

当 $V_{in} = 10$ mV 时，过驱动电压为 $3 - 0.01 - 0.7 = 2.29$ V：

$$R_{on1} = \frac{1}{(5.36\ \mathrm{mA/V^2})(2.29\ \mathrm{V})} = 81.5\ \Omega,\quad \omega R_{on1}C_H = 0.0512,\quad \phi = -2.93^\circ\ (81\ \mathrm{ps}).$$

| 输入电平 $V_m$ | $R_{on1}$ | 相位 | 延迟 |
|---|---|---|---|
| 10 mV | 81.5 Ω | −2.93° | 81 ps |
| 1 V | 143.5 Ω | −5.15° | 143 ps |

把输入电平提高 1 V，会使过驱动电压从 2.29 V 降到 1.3 V，从而使 $R_{on1}$ 增大约 76 %，延迟几乎加倍。幅度损失仍然很小（1 V 时为 0.4 %，10 mV 时为 0.13 %）。

### 第 4 步 — 为什么随电平变化的相位意味着失真

$R_{on1}$ 取决于**瞬时**输入电压，因此时间常数 $\tau = R_{on1}C_H$ 在一个周期内不断变化，波形的不同部分被延迟的量各不相同。与信号有关的时移是一种非线性运算，会产生谐波。

**一阶估计。** 当 $\omega\tau \ll 1$ 时，输出约滞后 $\tau$：

$$V_{out}(t) \approx V_{in}(t) - \tau(V_{in})\,\frac{dV_{in}}{dt}.$$

展开 $\tau(V_{in}) \approx \tau_0 + \tau'(V_{in} - V_m)$，其中

$$\tau' = \frac{d\tau}{dV_{in}} = \frac{d}{dV_{in}}\left[\frac{C_H}{\beta(V_{DD} - V_{in} - V_{TH})}\right] = \frac{C_H}{\beta(V_{DD} - V_{in} - V_{TH})^2} ,$$

并代入 $V_{in} - V_m = V_0\sin\omega t$、$dV_{in}/dt = V_0\omega\cos\omega t$，附加项为

$$\tau'(V_{in} - V_m)\frac{dV_{in}}{dt} = \tau'V_0^2\omega\sin\omega t\cos\omega t = \frac12\tau'\omega V_0^2\sin 2\omega t,$$

这是幅度为 $\tfrac12\tau'\omega V_0^2$ 的**二次谐波**。当 $V_m = 1$ V 时：

$$
\begin{aligned}
\tau' &= \frac{1\ \mathrm{pF}}{(5.36\ \mathrm{mA/V^2})(1.3\ \mathrm{V})^2} = 110\ \mathrm{ps/V},\\
V_{2\omega} &= \tfrac12(110\times10^{-12})(6.283\times10^{8})(0.01)^2 = 3.5\ \mu\mathrm{V},
\end{aligned}
$$

约为 10 mV 基波（fundamental）的 $3.5\times10^{-4}$（−69 dB）。当 $V_m = 10$ mV 时，$\tau' = 1\ \mathrm{pF}/[(5.36\ \mathrm{mA/V^2})(2.29\ \mathrm{V})^2] = 36$ ps/V，得到约 1.1 μV（−79 dB）。对非线性电路的数值仿真证实了这两个值。

失真随输入电平增大而增大（过驱动电压更小，$\tau'$ 更陡），随输入幅度增大而增大（相对于基波 $\propto V_0$），也随频率增大而增大（$\propto\omega$）。当摆幅达到几百毫伏时，失真成为简单 MOS 采样电路的主要问题，这促使人们采用互补开关和自举（bootstrapped）开关，使 $V_{GS}$ 从而使 $R_{on}$ 保持恒定。

### 结果

| 情形 | $R_{on1}$ | 相移 |
|---|---|---|
| $V_0 = 10$ mV, $V_m = 1$ V | ≈ 143.5 Ω（在摆幅范围内为 142.4–144.6 Ω） | ≈ −5.15°（−5.11° 至 −5.19°），延迟 ≈ 143 ps |
| $V_0 = V_m = 10$ mV | 81.5 Ω | −2.93°，延迟 ≈ 81 ps |

这些结果来自 $R_{on1} = 1/[5.36\ \mathrm{mA/V^2}\times(3 - V_{in} - 0.7)\ \mathrm{V}]$ 和 $\phi = -\arctan(\omega R_{on1}C_H)$。输入电平提高 1 V，会使 $R_{on}$ 增大约 76 %，滞后从 2.9° 增加到 5.2°。

**失真：** 导通电阻以及随之而来的延迟和衰减都取决于输入的**瞬时**电平。因此输出是输入的一个与信号有关的时移副本，这是一种非线性运算，会产生谐波。即使在 1 V 附近 ±10 mV 的范围内，相位也会变化约 ±0.04°，由此产生约 $\tfrac12\tau'\omega V_0^2 \approx 3.5\ \mu$V（−69 dB）的二次谐波。

**常见错误。** 认为输入电平升高时 $R_{on}$ 会**减小**。栅极固定在 $V_{DD}$ 时，更高的输入（即源极）电压意味着更小的过驱动电压和**更大**的导通电阻。

**常见错误。** 以电路“只是一个 RC 滤波器”为由，声称相移与输入电平无关。这只有在 $R_{on}$ 恒定时才成立，而这里 $R_{on} = 1/[\beta(V_{DD} - V_{in} - V_{TH})]$。

**常见错误。** 对开关采用饱和区模型。跟踪期间 $V_{DS} \approx 0$（深线性区）；饱和区公式会给出错误的电阻，并掩盖引起失真的 $1/(V_{DD} - V_{in} - V_{TH})$ 依赖关系。
