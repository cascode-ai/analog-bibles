# 详细步骤 - R651

**思路。** 异或鉴相器的平均输出是相位差的三角形函数，其中间点，即鉴相器的零输出点，位于 90°。在静态锁定时，经滤波的鉴相器输出必须恰好提供使 VCO 频率等于输入频率的控制电压，因此相位差偏离零输出点的量等于频率偏差除以 $K_{PD}K_{VCO}$；环路增益（loop gain）很大时，这一偏离可以忽略。

### 第 1 步 — 异或鉴相器的平均输出

对于占空比为 50 %、周期为 $T$、相位差为 $\Delta\phi = \phi_{in} - \phi_{out}$（$0 \le \Delta\phi \le \pi$）的方波输入，每个周期内两个输入有两段长度为 $\frac{\Delta\phi}{2\pi}T$ 的时间不相同，因此每个周期内输出为高电平（$V_0$）的时间为

$$2\cdot\frac{\Delta\phi}{2\pi}T = \frac{\Delta\phi}{\pi}T$$

其平均值（由低通滤波器取出）为

$$\overline{V_{PD}} = V_0\,\frac{\Delta\phi}{\pi}, \qquad 0 \le \Delta\phi \le \pi .$$

当 $\pi \le \Delta\phi \le 2\pi$ 时，$\overline{V_{PD}} = V_0(2\pi - \Delta\phi)/\pi$：特性是一个以 $2\pi$ 为周期的**三角形**，

| $\Delta\phi$ | 0 | 45° | 90° | 135° | 180° | 270° | 360° |
|---|---|---|---|---|---|---|---|
| $\overline{V_{PD}}/V_0$ | 0 | 0.25 | 0.5 | 0.75 | 1 | 0.5 | 0 |

斜率的大小为

$$K_{PD} = \frac{V_0}{\pi}\ \text{per radian}.$$

### 第 2 步 — 鉴相器的可用范围：90° 处的零输出点

在 $\Delta\phi = 0$（以及 $\pi$）处，斜率改变符号：在 0 附近，输出只取决于 $|\Delta\phi|$，因此鉴相器无法区分超前和滞后；越过拐角后，反馈的极性就错了。在这些拐角处无法可靠地保持锁定。在 0 与 $\pi$ 之间，特性是线性且单调的，其中心位于 $\Delta\phi = 90^\circ$，此处输出处于中间值 $V_0/2$，两侧各有 90° 的线性范围。

以这一中间电平为参考；差分异或门，例如吉尔伯特单元（Gilbert cell），直接给出的就是这个量：

$$V_{PD} = \overline{V_{PD}} - \frac{V_0}{2} = K_{PD}\left(\Delta\phi - \frac{\pi}{2}\right), \qquad 0 < \Delta\phi < \pi ,$$

因此异或鉴相器的**零输出点**位于 $\Delta\phi = 90^\circ$，而不是 0。

### 第 3 步 — 静态锁定条件

令 $\omega_{out} = \omega_0 + K_{VCO}V_{cont}$，其中 $V_{cont}$ 从同一中间电平算起，因此 $\omega_0$ 是鉴相器处于零输出点时的 VCO 频率，即调谐范围（tuning range）的中心。锁定时 $\omega_{out} = \omega_{in}$，相位差恒定，因此滤波器（直流增益为 1）传递 $V_{cont} = V_{PD} = K_{PD}(\Delta\phi - \pi/2)$：

$$\omega_{in} = \omega_0 + K_{VCO}K_{PD}\left(\Delta\phi - \frac{\pi}{2}\right),$$

$$\Delta\phi = \frac{\pi}{2} + \frac{\omega_{in} - \omega_0}{K_{PD}K_{VCO}} .$$

鉴相器偏离其零输出点的程度，恰好足以产生使 VCO 从中心频率移到输入频率的控制电压 $(\omega_{in} - \omega_0)/K_{VCO}$。

### 第 4 步 — 环路增益很大时

当 $K_{PD}K_{VCO}$ 很大时，

$$\frac{\omega_{in} - \omega_0}{K_{PD}K_{VCO}} \to 0 \quad\Longrightarrow\quad \Delta\phi \to \frac{\pi}{2} = 90^\circ .$$

**示例。** 取 $V_0 = 1$ V，则 $K_{PD} = 1\ \mathrm{V}/\pi = 0.318$ V/rad；频率偏差为 $\omega_{in} - \omega_0 = 2\pi\times10$ MHz。

- 当 $K_{VCO} = 2\pi\times100$ MHz/V 时：$K_{PD}K_{VCO} = 2.0\times10^8\ \mathrm{s^{-1}}$，偏离量为 $6.28\times10^7/2.0\times10^8 = 0.31$ rad $= 18^\circ$，因此 $\Delta\phi = 108^\circ$。
- 当 $K_{VCO} = 2\pi\times1$ GHz/V 时，偏离量只有 $1.8^\circ$，因此 $\Delta\phi \approx 92^\circ$。

很大的环路增益并不能把 $\Delta\phi$ 推向 0°：它只会把工作点拉向零输出点；而要达到 0°，就需要鉴相器输出最负的值，即处于调谐范围的极端，并且恰好位于增益反向的拐角处。乘法器型（模拟吉尔伯特单元）鉴相器的平均输出与 $\cos\Delta\phi$ 成正比，其零输出点同样位于 90°，因此同样锁定在正交点附近。

### 结果

经平均的异或门输出是三角形函数，在 $0 \le \Delta\phi \le \pi$ 时 $\overline{V_{PD}} = V_0\Delta\phi/\pi$，斜率为 $K_{PD} = V_0/\pi$。其增益在 0 和 $\pi$ 处反向，零输出点（中间值输出、差分输出为零、线性范围的中心）位于 90°：以中间电平为参考，$V_{PD} = K_{PD}(\Delta\phi - \pi/2)$。锁定时，鉴相器必须提供把 VCO 从中心频率 $\omega_0$ 移到 $\omega_{in}$ 的控制电压：

$$K_{PD}\left(\Delta\phi - \frac{\pi}{2}\right) = \frac{\omega_{in} - \omega_0}{K_{VCO}} \quad\Longrightarrow\quad \Delta\phi = \frac{\pi}{2} + \frac{\omega_{in} - \omega_0}{K_{PD}K_{VCO}} .$$

当 $K_{PD}K_{VCO}$ 很大时，第二项趋于零，因此环路在 $\phi_{in} - \phi_{out} \approx 90^\circ$ 处锁定，即位于鉴相器线性范围的中间，在增益反向之前两侧各有 ±90° 的余量。

**常见错误。** 用增益最大或输出最大来解释 90°。异或门的增益在 0 到 180° 之间处处相同，其最大输出位于 180°；90° 是零输出点，即对应 VCO 中心频率的中间值点。

**常见错误。** 认为很大的 $K_{PD}K_{VCO}$ 会把相位差推向 0°，好像输出是以其最小值为参考的。很大的环路增益把相位差推向鉴相器的零输出点，而对于异或门，零输出点位于 90°；在 0° 处异或门无法区分超前和滞后。

**常见错误。** 只说“90° 是异或门线性范围的中间”，而不给出锁定条件。中间点之所以重要，是因为环路增益很大时，偏离中间点的静态偏差 $(\omega_{in} - \omega_0)/(K_{PD}K_{VCO})$ 会变得很小。
