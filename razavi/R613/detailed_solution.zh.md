# 详细步骤 - R613

**思路。** 写出栅极电压等于偏置加正弦信号时的漏极电流，提出偏置电流 $I$，再把指数函数展开为泰勒级数。把 $\cos\omega t$ 的各次幂转换为谐波，即可得到各个幅度；输出 $V_{DD} - R_DI_D$ 的每个谐波都乘以 $R_D$。

### 第 1 步 — 把漏极电流对偏置电流归一化

令 $V_{GS} = V_{GS0} + V_m\cos\omega t$：

$$I_D = I_0\exp\!\left(\frac{V_{GS0} + V_m\cos\omega t}{\zeta V_T}\right) = \underbrace{I_0\exp\!\left(\frac{V_{GS0}}{\zeta V_T}\right)}_{=\,I}\cdot\exp\!\left(\frac{V_m}{\zeta V_T}\cos\omega t\right),$$

其中室温下 $V_T \approx 26$ mV，斜率因子（slope factor）$\zeta > 1$。定义归一化输入幅度

$$u = \frac{V_m}{\zeta V_T} \ll 1,$$

于是

$$I_D = I\,e^{u\cos\omega t}.$$

尺度 $\zeta V_T$（几十 mV）所起的作用，相当于强反型（strong inversion）中过驱动电压（overdrive voltage）的作用。

### 第 2 步 — 泰勒展开

$$e^{u\cos\theta} = 1 + u\cos\theta + \frac{u^2}{2}\cos^2\theta + \frac{u^3}{6}\cos^3\theta + \frac{u^4}{24}\cos^4\theta + \dots$$

其中

$$
\begin{aligned}
\cos^2\theta &= \tfrac12 + \tfrac12\cos2\theta,\\
\cos^3\theta &= \tfrac34\cos\theta + \tfrac14\cos3\theta,\\
\cos^4\theta &= \tfrac38 + \tfrac12\cos2\theta + \tfrac18\cos4\theta .
\end{aligned}
$$

### 第 3 步 — 归并各次谐波

| 分量 | 贡献项 | 幅度（× $I$） |
|---|---|---|
| 直流 | $1 + \tfrac{u^2}{2}\cdot\tfrac12 + \tfrac{u^4}{24}\cdot\tfrac38$ | $1 + \dfrac{u^2}{4} + \dfrac{u^4}{64}$ |
| 基波 | $u + \tfrac{u^3}{6}\cdot\tfrac34$ | $u + \dfrac{u^3}{8}$ |
| 二次谐波 | $\tfrac{u^2}{2}\cdot\tfrac12 + \tfrac{u^4}{24}\cdot\tfrac12$ | $\dfrac{u^2}{4} + \dfrac{u^4}{48}$ |
| 三次谐波 | $\tfrac{u^3}{6}\cdot\tfrac14$ | $\dfrac{u^3}{24}$ |
| 四次谐波 | $\tfrac{u^4}{24}\cdot\tfrac18$ | $\dfrac{u^4}{192}$ |

只保留 $u$ 的最低阶项：

$$
\begin{aligned}
\text{fundamental:}&\quad I_{1} = Iu = \frac{I\,V_m}{\zeta V_T},\\
\text{2nd harmonic:}&\quad I_{2} = \frac{Iu^2}{4} = \frac{I\,V_m^2}{4\zeta^2V_T^2},\\
\text{3rd harmonic:}&\quad I_{3} = \frac{Iu^3}{24} = \frac{I\,V_m^3}{24\zeta^3V_T^3}.
\end{aligned}
$$

**一般项。** 精确地，$e^{u\cos\theta} = I_0(u) + 2\sum_{n\ge1}I_n(u)\cos n\theta$，其中 $I_n$ 是第一类修正贝塞尔函数（不是电流）。当 $u$ 很小时，$I_n(u) \approx (u/2)^n/n!$，因此漏极电流的 $n$ 次谐波为

$$I_{n\text{th}} = 2I\,I_n(u) \approx \frac{I\,u^n}{2^{n-1}\,n!},$$

这再现了 $Iu$、$Iu^2/4$、$Iu^3/24$、$Iu^4/192$……

平均电流增大到 $I(1 + u^2/4)$，因为指数曲线是向上凹的。

### 第 4 步 — 失真比

$$\mathrm{HD2} = \frac{I_2}{I_1} = \frac{u}{4} = \frac{V_m}{4\zeta V_T}, \qquad \mathrm{HD3} = \frac{I_3}{I_1} = \frac{u^2}{24} = \frac{V_m^2}{24\zeta^2V_T^2}.$$

与只产生到二次谐波为止的平方律（square law）不同，指数特性会产生**所有**各次谐波，每一次谐波大约是前一次的 $u/(2n)$ 倍。

**示例。** 取 $\zeta = 1.5$，$V_T = 26$ mV（$\zeta V_T = 39$ mV），$V_m = 5$ mV：$u = 0.128$，HD2 $= 3.2\ \%$，HD3 $= 0.068\ \%$（精确数值计算的结果与之一致）。在强反型下，若 $V_{ov} = 0.4$ V，同样的输入会给出 HD2 $= 5/(4\times400) = 0.3\ \%$：由于 $\zeta V_T$ 很小，亚阈值器件的非线性要强约十倍。

### 第 5 步 — 输出电压

由于 $V_{out} = V_{DD} - R_DI_D$（器件保持在亚阈值饱和状态，$V_{DS} \gtrsim 4V_T$），$I_D$ 的每个交流分量都乘以 $-R_D$：

$$
\begin{aligned}
V_{out,1} &= R_DIu = \frac{R_DI\,V_m}{\zeta V_T} = g_mR_D\,V_m, \qquad g_m = \frac{I}{\zeta V_T},\\
V_{out,2} &= \frac{R_DIu^2}{4} = \frac{R_DI\,V_m^2}{4\zeta^2V_T^2},\\
V_{out,3} &= \frac{R_DIu^3}{24} = \frac{R_DI\,V_m^3}{24\zeta^3V_T^3},\\
V_{out,n} &\approx \frac{R_DI\,u^n}{2^{n-1}n!}\quad(\text{exactly } 2R_DI\,I_n(u)),
\end{aligned}
$$

其中基波是反相的（与输入相差 180°），输出直流电平降低 $R_DIu^2/4$。输出的 HD2 和 HD3 与电流的相同。

### 结果

令 $u = V_m/(\zeta V_T)$，则 $I_D = I\exp(u\cos\omega t)$，只保留 $u$ 的最低阶项时：

- 基波：$\dfrac{IV_m}{\zeta V_T}$（更精确地为 $I(u + u^3/8)$）；
- 二次谐波：$\dfrac{IV_m^2}{4\zeta^2V_T^2}$，因此 $\mathrm{HD2} = \dfrac{V_m}{4\zeta V_T}$；
- 三次谐波：$\dfrac{IV_m^3}{24\zeta^3V_T^3}$，因此 $\mathrm{HD3} = \dfrac{V_m^2}{24\zeta^2V_T^2}$；
- $n$ 次谐波：$\approx Iu^n/(2^{n-1}n!)$，精确值为 $2I\,I_n(u)$（修正贝塞尔函数）。

输出电压 $V_{DD} - R_DI_D$ 的各个幅度都乘以 $R_D$（基波为 $g_mR_DV_m$，其中 $g_m = I/(\zeta V_T)$），而直流电流增大到 $I(1 + u^2/4)$。

**常见错误。** 声称该级没有偶次谐波。这只对对称的差分对（differential pair）成立；单个指数器件不是奇对称的，其二次谐波是最大的失真项。

**常见错误。** 系数出错，例如 HD2 $= V_m/(2\zeta V_T)$（漏掉 $\cos^2\theta$ 中的 $\tfrac12$）或 HD3 $= V_m^2/(6\zeta^2V_T^2)$（漏掉 $\cos^3\theta$ 中的 $\tfrac14$），或者套用平方律的结果（$V_m/(4V_{ov})$，只有二次谐波）：这里存在所有各次谐波，电压尺度是 $\zeta V_T$。
