# 详细步骤 - R601

**思路。** 写出栅极电压等于偏置加正弦信号时的平方律漏极电流。展开平方项后只得到基波（fundamental）和二次谐波；两者之比就是谐波失真，而与 $I_D$ 成线性关系的输出电压 $V_{DD} - R_DI_D$ 具有相同的失真。然后考察过驱动电压（进而失真）如何随 $W/L$ 和 $I$ 变化。

### 第 1 步 — 偏置点：过驱动电压

令 $k = \mu_nC_{ox}(W/L)$，并令偏置点处 $V_{ov} = V_{GS} - V_{TH}$。由 $W/L = 20/0.5 = 40$：

$$k = (134\ \mu\mathrm{A/V^2})(40) = 5.36\ \mathrm{mA/V^2},$$

再由 $I = \tfrac12kV_{ov}^2$，

$$V_{ov} = \sqrt{\frac{2I}{k}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{5.36\ \mathrm{mA/V^2}}} = \sqrt{0.1866}\ \mathrm{V} = 0.432\ \mathrm{V}.$$

### 第 2 步 — 正弦输入下的漏极电流

令 $V_{GS} = V_{GS0} + V_m\cos\omega t$，$V_m = 100$ mV，瞬时过驱动电压 $V_{ov} + V_m\cos\omega t$ 保持在 $0.432 - 0.1 = 0.332$ V 与 $0.532$ V 之间，因此器件始终导通（并且按题意处于饱和区）：

$$
\begin{aligned}
I_D &= \tfrac12k\,(V_{ov} + V_m\cos\omega t)^2\\
&= \tfrac12kV_{ov}^2 + kV_{ov}V_m\cos\omega t + \tfrac12kV_m^2\cos^2\omega t\\
&= \tfrac12kV_{ov}^2 + kV_{ov}V_m\cos\omega t + \tfrac14kV_m^2\,(1 + \cos2\omega t)\qquad\left(\cos^2\theta = \tfrac12 + \tfrac12\cos2\theta\right)\\
&= \underbrace{I + \tfrac14kV_m^2}_{\text{DC}} + \underbrace{kV_{ov}V_m}_{\text{fundamental}}\cos\omega t + \underbrace{\tfrac14kV_m^2}_{\text{2nd harmonic}}\cos2\omega t .
\end{aligned}
$$

平方律是严格的二次函数，因此**不存在三次或更高次谐波**。基波为 $g_mV_m$，其中 $g_m = kV_{ov}$。

### 第 3 步 — 二次谐波失真

$$\mathrm{HD2} = \frac{\text{2nd-harmonic amplitude}}{\text{fundamental amplitude}} = \frac{\tfrac14kV_m^2}{kV_{ov}V_m} = \frac{V_m}{4V_{ov}}.$$

$V_{out} = V_{DD} - R_DI_D$ 把电流的每个交流分量都乘以同一个 $-R_D$，因此输出具有相同的 HD2；由于只有一个谐波，THD = HD2。数值计算：

$$
\begin{aligned}
g_m &= kV_{ov} = (5.36\ \mathrm{mA/V^2})(0.432\ \mathrm{V}) = 2.32\ \mathrm{mS},\\
\text{fundamental} &= g_mV_m = (2.32\ \mathrm{mS})(0.1\ \mathrm{V}) = 232\ \mu\mathrm{A},\\
\text{2nd harmonic} &= \tfrac14kV_m^2 = \tfrac14(5.36\ \mathrm{mA/V^2})(0.01\ \mathrm{V^2}) = 13.4\ \mu\mathrm{A},\\
\mathrm{HD2} &= \frac{13.4}{232} = \frac{0.1\ \mathrm{V}}{4\times0.432\ \mathrm{V}} = 0.0579 = 5.8\ \%\quad(-24.7\ \mathrm{dB}),
\end{aligned}
$$

按功率之比则为 $0.0579^2 = 3.4\times10^{-3}$。HD2 比较的是栅极摆幅与过驱动电压：$V_{ov}$ 越大，同样 100 mV 的摆幅沿抛物线移动的相对范围就越小。

### 第 4 步 — $W/L$ 加倍

当 $W/L = 80$ 时，$k = 10.72\ \mathrm{mA/V^2}$，电流不变：

$$
\begin{aligned}
V_{ov} &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{10.72\ \mathrm{mA/V^2}}} = \sqrt{0.0933}\ \mathrm{V} = 0.305\ \mathrm{V},\\
\mathrm{HD2} &= \frac{0.1}{4\times0.305} = 0.0819 = 8.2\ \%.
\end{aligned}
$$

过驱动电压降低 $\sqrt2$ 倍，因此失真**升高** $\sqrt2$ 倍。

### 第 5 步 — $I$ 加倍

当 $I = 1$ mA、$W/L = 40$ 时：

$$
\begin{aligned}
V_{ov} &= \sqrt{\frac{2(1\ \mathrm{mA})}{5.36\ \mathrm{mA/V^2}}} = \sqrt{0.373}\ \mathrm{V} = 0.611\ \mathrm{V},\\
\mathrm{HD2} &= \frac{0.1}{4\times0.611} = 0.0409 = 4.1\ \%.
\end{aligned}
$$

过驱动电压升高 $\sqrt2$ 倍，因此失真**降低** $\sqrt2$ 倍。

### 第 6 步 — 缩放关系小结

| 情形 | $W/L$ | $I$ | $V_{ov}$ | $g_m$ | HD2 |
|---|---|---|---|---|---|
| 给定值 | 40 | 0.5 mA | 0.432 V | 2.32 mS | 5.8 % |
| $2\times W/L$ | 80 | 0.5 mA | 0.305 V | 3.27 mS | 8.2 % |
| $2\times I$ | 40 | 1 mA | 0.611 V | 3.27 mS | 4.1 % |

由于 $V_{ov} = \sqrt{2I/(\mu_nC_{ox}W/L)}$，

$$\mathrm{HD2} = \frac{V_m}{4V_{ov}} \propto \sqrt{\frac{W/L}{I}}.$$

两种改变都使 $g_m$（以及增益）提高 $\sqrt2$ 倍，但只有增大电流才能改善线性度；在功耗不变的情况下加宽器件，是以线性度换取增益。

### 结果

平方律漏极电流只含有二次谐波：

$$\mathrm{HD2} = \frac{V_m}{4\,(V_{GS} - V_{TH})} = \frac{0.1\ \mathrm{V}}{4\times0.432\ \mathrm{V}} \approx 5.8\ \%$$

（其中 $V_{GS} - V_{TH} = 0.432$ V），输出电压具有相同的失真。把 $W/L$ 加倍会使过驱动电压降到 0.305 V，并使 HD2 **升高**到约 8.2 %（×√2）；把 $I$ 加倍会使过驱动电压升到 0.611 V，并使 HD2 **降低**到约 4.1 %（÷√2）。

**常见错误。** 系数出错，例如得到 $V_m/(2V_{ov})$（11.6 %）：二次谐波等于 $\tfrac12kV_m^2$ 乘以由 $\cos^2\theta = \tfrac12(1 + \cos2\theta)$ 得到的 $\tfrac12$，即 $\tfrac14kV_m^2$。在严格抛物线的平方律模型中，声称存在三次谐波（third harmonic）也是错误的。

**常见错误。** 认为更宽的晶体管增益更高，因而“更线性”。在电流固定时，更大的 $W/L$ 意味着更小的过驱动电压，因此失真增大；只有更大的过驱动电压（更大的电流或更窄的器件）才能降低 HD2。
