# 详细步骤 - R660

**思路。** 纹波对 VCO 进行频率调制。对瞬时频率积分得到 VCO 的相位，利用 ÷M 电路把**总相位**除以 M 这一事实，再用窄带调频近似展开分频器的输出：在 $\omega_0/M$ 处有一个载波，在距其 $\pm\omega_m$ 处有边带。最后考察 $\omega_0/M - \omega_m$ 变为负值时会发生什么。

### 第 1 步 — 控制线上有纹波时的 VCO 相位

$$\omega_{out}(t) = \omega_0 + K_{VCO}V_m\cos\omega_mt ,$$

因此相位为

$$
\begin{aligned}
\phi_{VCO}(t) &= \int_0^t\omega_{out}(t')\,dt' = \omega_0t + K_{VCO}V_m\int_0^t\cos\omega_mt'\,dt'\\
&= \omega_0t + \frac{K_{VCO}V_m}{\omega_m}\sin\omega_mt .
\end{aligned}
$$

VCO 输出 $V_{VCO}(t) = A\cos\phi_{VCO}(t)$ 是一个调频信号，其峰值频偏为 $K_{VCO}V_m$，调制指数即峰值相位偏移，其值为

$$\beta_{VCO} = \frac{K_{VCO}V_m}{\omega_m}.$$

### 第 2 步 — VCO 输出端的窄带调频频谱

展开 $\cos(\omega_0t + \beta_{VCO}\sin\omega_mt)$，并对小纹波（$\beta_{VCO} \ll 1$）利用 $\cos x \approx 1$、$\sin x \approx x$：

$$V_{VCO} \approx A\cos\omega_0t - A\beta_{VCO}\sin\omega_mt\,\sin\omega_0t = A\cos\omega_0t + \frac{A\beta_{VCO}}{2}\Big[\cos(\omega_0 + \omega_m)t - \cos(\omega_0 - \omega_m)t\Big].$$

因此 VCO 输出在 $\omega_0$ 处有载波，在 $\omega_0 \pm \omega_m$ 处有边带，每个边带的相对幅度为

$$\frac{\text{sideband}}{\text{carrier}}\bigg|_{VCO} = \frac{\beta_{VCO}}{2} = \frac{K_{VCO}V_m}{2\omega_m}.$$

### 第 3 步 — ÷M 电路对相位的作用

输入相位每前进 $2\pi M$，÷M 电路就产生一个输出周期，因此其输出相位等于输入相位除以 M：

$$
\begin{aligned}
\phi_{div}(t) &= \frac{\phi_{VCO}(t)}{M} = \frac{\omega_0}{M}\,t + \frac{K_{VCO}V_m}{M\,\omega_m}\sin\omega_mt\\
&= \frac{\omega_0}{M}\,t + \beta\sin\omega_mt, \qquad \beta = \frac{K_{VCO}V_m}{M\,\omega_m} = \frac{\beta_{VCO}}{M}.
\end{aligned}
$$

载波（$\omega_0 \to \omega_0/M$）和峰值频偏（$K_{VCO}V_m \to K_{VCO}V_m/M$）都被除以 M，但**调制速率 $\omega_m$ 不变**：相位仍以 $\omega_m$ 摆动，只是幅度小了 M 倍。

### 第 4 步 — 分频器输出端的频谱

先考虑分频器方波的基波 $A\cos\phi_{div}(t)$。在第 2 步的展开式中作代换 $\omega_0 \to \omega_0/M$ 和 $\beta_{VCO} \to \beta$（$\beta \ll 1$ 更加成立），得

$$V_{div}(t) \approx A\cos\frac{\omega_0}{M}t + \frac{A\beta}{2}\left[\cos\left(\frac{\omega_0}{M} + \omega_m\right)t - \cos\left(\frac{\omega_0}{M} - \omega_m\right)t\right].$$

- **载波**位于 $\omega_0/M$。
- **边带**位于 $\omega_0/M \pm \omega_m$：与载波的频率间隔仍为 $\omega_m$，而**不是** $\omega_m/M$。
- 每个边带的**相对幅度**：
$$\frac{\text{sideband}}{\text{carrier}}\bigg|_{div} = \frac{\beta}{2} = \frac{K_{VCO}V_m}{2M\omega_m},$$
比 VCO 输出端小 $M$ 倍，即低 $20\log_{10}M$ dB。

### 第 5 步 — 情况 1：$\omega_0/M > \omega_m$

两个边带的频率都是正的：

$$\omega_{L} = \frac{\omega_0}{M} - \omega_m > 0, \qquad \omega_U = \frac{\omega_0}{M} + \omega_m .$$

频谱由 $\omega_0/M$ 处的载波和关于它对称、位于 $\pm\omega_m$ 处的两个等幅边带构成，每个边带相对于载波为 $K_{VCO}V_m/(2M\omega_m)$。

**例。** $\omega_0 = 2\pi(1\ \mathrm{GHz})$，$M = 100$，因此 $\omega_0/M = 2\pi(10\ \mathrm{MHz})$；$K_{VCO}V_m = 2\pi(100\ \mathrm{kHz})$，$\omega_m = 2\pi(1\ \mathrm{MHz})$。

- VCO：边带位于 999 和 1001 MHz，相对幅度为 $100\ \mathrm{kHz}/(2\times1\ \mathrm{MHz}) = 0.05$（−26 dBc）。
- 分频器：边带位于 9 和 11 MHz，相对幅度为 $0.05/100 = 5\times10^{-4}$（−66 dBc）。

### 第 6 步 — 情况 2：$\omega_0/M < \omega_m$

此时 $\omega_0/M - \omega_m < 0$，由于余弦是偶函数，

$$\cos\left[\left(\frac{\omega_0}{M} - \omega_m\right)t\right] = \cos\left[\left(\omega_m - \frac{\omega_0}{M}\right)t\right]:$$

下边带**折叠**到 $\omega_m - \omega_0/M$。分频器输出包含：

| 分量 | 频率 | 相对幅度 |
|---|---|---|
| 载波 | $\omega_0/M$ | 1 |
| 折叠后的下边带 | $\omega_m - \omega_0/M$ | $K_{VCO}V_m/(2M\omega_m)$（符号相反） |
| 上边带 | $\omega_m + \omega_0/M$ | $K_{VCO}V_m/(2M\omega_m)$ |

此时边带关于 $\omega_m$ 对称（位于 $\omega_m \pm \omega_0/M$），而不是关于载波对称。若 $\omega_m > 2\omega_0/M$，连“下”边带也位于载波**之上**。

**例。** 数值同上，但 $\omega_m = 2\pi(25\ \mathrm{MHz}) > \omega_0/M = 2\pi(10\ \mathrm{MHz})$。分频器输出的载波位于 10 MHz，边带位于 $25 - 10 = 15$ MHz 和 $25 + 10 = 35$ MHz，每个边带的相对幅度为 $100\ \mathrm{kHz}/(2\times100\times25\ \mathrm{MHz}) = 2\times10^{-5}$（−94 dBc）。而 VCO 输出本身的边带是位于 $1000 \pm 25$ MHz 的普通边带。

### 第 7 步 — 方波输出的谐波（进一步讨论）

方波还含有位于 $k\omega_0/M$（$k = 3, 5, \dots$）的奇次谐波，其幅度按 $1/k$ 下降。第 $k$ 次谐波的相位为 $k\phi_{div}$，即调制指数为 $k\beta$，因此它在 $k\omega_0/M \pm \omega_m$ 处的边带的绝对幅度为 $(A/k)(k\beta/2) = A\beta/2$，与基波的边带相同。在情况 2 中，这些边带与各次谐波相互交错；例如，$|3\omega_0/M - \omega_m|$ 可能落在基波附近甚至低于基波（在上例中为 $30 - 25 = 5$ MHz）。在情况 1 中，它们则聚集在各次谐波周围。

### 结果

分频器输出在 $\omega_0/M$ 处有载波，在 $\omega_0/M \pm \omega_m$ 处有边带（频率间隔为 $\omega_m$，未被分频），每个边带与载波之比为

$$\frac{K_{VCO}V_m}{2M\omega_m},$$

即比 VCO 输出端低 $M$ 倍（$20\log M$ dB）。

- **$\omega_0/M > \omega_m$：** 两个边带都位于正频率处，即 $\omega_0/M - \omega_m$ 和 $\omega_0/M + \omega_m$，关于载波对称。
- **$\omega_0/M < \omega_m$：** 下边带落在负频率处，并折叠到 $\omega_m - \omega_0/M$。输出包含 $\omega_0/M$、$\omega_m - \omega_0/M$ 和 $\omega_m + \omega_0/M$；边带关于 $\omega_m$ 而不是关于载波对称（若 $\omega_m > 2\omega_0/M$，两个边带都位于载波之上）。

**常见错误。** 把边带放在 $\omega_0/M \pm \omega_m/M$。分频器把**相位**（从而载波和频偏）按 $1/M$ 缩小，但相位仍以速率 $\omega_m$ 变化。

**常见错误。** 认为分频后边带的相对电平不变。调制指数 $\beta = K_{VCO}V_m/(M\omega_m)$ 减小了 M 倍，因此边带相对于载波降低 $20\log M$ dB。

**常见错误。** 在第二种情况下，仍把“边带”保留在负频率 $\omega_0/M - \omega_m$ 处，或者说它“消失了”。实际上它会重新出现在镜像的正频率 $\omega_m - \omega_0/M$ 处。
