# 详细步骤 - R681

**思路。** 对经验公式 $E_g(T)$ 求导，并在 300 K 处求值。然后把随温度变化的 $E_g$ 代入带隙基准所要抵消的量 $\partial V_{BE}/\partial T$，考察多出的这一项如何改变 (a) 所需的 PTAT 增益和输出电压，以及 (b) 基准电压随温度变化的曲率。

### 第 1 步 — 对 $E_g(T)$ 求导

由商的求导法则，

$$
\begin{aligned}
\frac{d}{dT}\left[\frac{T^2}{T + 1108}\right] &= \frac{2T(T + 1108) - T^2\cdot1}{(T + 1108)^2}\\
&= \frac{2T^2 + 2216T - T^2}{(T + 1108)^2} = \frac{T(T + 2216)}{(T + 1108)^2},
\end{aligned}
$$

因此

$$\frac{\partial E_g}{\partial T} = -7.02\times10^{-4}\,\frac{T(T + 2216)}{(T + 1108)^2}\ \ \mathrm{eV/K}.$$

由于 $T(T + 2216) = (T + 1108)^2 - 1108^2$，也可等价地写成

$$\frac{\partial E_g}{\partial T} = -7.02\times10^{-4}\left[1 - \left(\frac{1108}{T + 1108}\right)^2\right]\ \mathrm{eV/K}.$$

### 第 2 步 — 在 300 K 处求值

$$
\begin{aligned}
\frac{T(T + 2216)}{(T + 1108)^2} &= \frac{300\times2516}{1408^2} = \frac{754\,800}{1\,982\,464} = 0.3807,\\
\frac{\partial E_g}{\partial T}\bigg|_{300\ \mathrm{K}} &= -7.02\times10^{-4}\times0.3807\ \mathrm{eV/K} = -2.67\times10^{-4}\ \mathrm{eV/K}.
\end{aligned}
$$

用电压表示，$E_g/q$ 的变化率为 **$-0.27$ mV/K**。300 K 时禁带宽度本身为

$$E_g(300\ \mathrm{K}) = 1.16 - 7.02\times10^{-4}\times\frac{90\,000}{1408} = 1.16 - 0.0449 = 1.115\ \mathrm{eV}.$$

**斜率并非常数：** 250 K 时为 $-2.35\times10^{-4}$ eV/K，350 K 时为 $-2.97\times10^{-4}$ eV/K，且

$$\frac{\partial^2E_g}{\partial T^2} = -7.02\times10^{-4}\cdot\frac{2\times1108^2}{(T + 1108)^3} = -6.2\times10^{-7}\ \mathrm{eV/K^2}\quad\text{at 300 K}.$$

### 第 3 步 — $E_g$ 如何进入 $V_{BE}$

带隙基准把一个 PTAT 电压加到温度系数为负的 $V_{BE}$ 上。由

$$V_{BE} = V_T\ln\frac{I_C}{I_S}, \qquad I_S = b\,T^{4+m}\exp\!\left(-\frac{E_g}{kT}\right),$$

（$b$ 为常数，$m \approx -3/2$ 为迁移率的温度指数）以及 $V_T\cdot E_g/(kT) = E_g/q$，得

$$V_{BE} = \frac{E_g(T)}{q} - V_T\left[(4 + m)\ln T + \ln b - \ln I_C\right].$$

在 $I_C$ 恒定时求导，$E_g(T)/q$ 的导数在熟悉的结果之外又增加了一项：

$$\frac{\partial V_{BE}}{\partial T} = \frac{V_{BE} - (4 + m)V_T - E_g/q}{T} + \frac{1}{q}\frac{\partial E_g}{\partial T} .$$

合并两个含 $E_g$ 的项，

$$\frac{\partial V_{BE}}{\partial T} = \frac{V_{BE} - (4 + m)V_T - E_{g0}/q}{T}, \qquad E_{g0} = E_g - T\,\frac{\partial E_g}{\partial T},$$

因此 $E_g$ 实际上被它从 300 K 直线外推到 0 K 的值所取代：

$$E_{g0} = 1.115\ \mathrm{eV} + (300\ \mathrm{K})(2.67\times10^{-4}\ \mathrm{eV/K}) = 1.115 + 0.080 = 1.195\ \mathrm{eV}.$$

### 第 4 步 — 对 $V_{BE}$ 温度系数及基准电压的影响

取 $V_{BE} = 750$ mV，$m = -3/2$（$4 + m = 2.5$），300 K 时 $V_T = 25.85$ mV，因此 $(4 + m)V_T = 64.6$ mV。

**$E_g$ 为常数（1.12 eV）：**

$$\frac{\partial V_{BE}}{\partial T} = \frac{0.750 - 0.0646 - 1.12}{300}\ \mathrm{V/K} = \frac{-0.4346}{300}\ \mathrm{V/K} = -1.45\ \mathrm{mV/K}.$$

**计入 $E_g(T)$：**

$$\frac{\partial V_{BE}}{\partial T} = \frac{0.750 - 0.0646 - 1.195}{300}\ \mathrm{V/K} = \frac{-0.510}{300}\ \mathrm{V/K} = -1.70\ \mathrm{mV/K}.$$

$V_{BE}$ 的下降速度比恒定 $E_g$ 公式的预测快约 0.25–0.27 mV/K。对于基准电压 $V_{REF} = V_{BE} + K\,V_T\ln n$：

- **更大的 PTAT 增益。** 要使温度系数为零，PTAT 斜率需要 1.70 mV/K 而不是 1.45 mV/K，即增大约 17 %（更大的 $\ln n$ 或电阻比）。
- **更高的输出电压。** 1.70 mV/K 的 PTAT 斜率在 300 K 时对应 $300\times1.70\ \mathrm{mV} = 0.510$ V，因此
$$V_{REF} = 0.750 + 0.510 = 1.26\ \mathrm{V} \;=\; \frac{E_{g0}}{q} + (4 + m)V_T = 1.195 + 0.065\ \mathrm{V}.$$
按约 1.12 eV 的恒定 $E_g$ 设计，预测值为 $1.12 + 0.065 \approx 1.18$ V；按这种方式实现的电路会设置错误，留下约 $-0.27$ mV/K 的残余温度系数（若所取的常数值恰为 $E_g(300\ \mathrm{K})$，则残余温度系数正好是 $(1/q)\,\partial E_g/\partial T$）。这就是实际带隙基准的输出在约 1.2–1.25 V 的原因。

### 第 5 步 — 对曲率的影响

$E_g(T)$ 是弯曲的：在 300 K 附近 $\pm50$ K 的范围内，它偏离切线约

$$\frac12\,\frac{\partial^2E_g}{\partial T^2}\,(\Delta T)^2 = \frac12(-6.2\times10^{-7})(50)^2\ \mathrm{eV} \approx -0.77\ \mathrm{meV},$$

即在 $V_{BE}$ 中约为 $-0.8$ mV（直接计算得 250 K 时为 $-0.80$ mV，350 K 时为 $-0.75$ mV），与 $(4 + m)V_T\ln T$ 项的曲率相当，后者在同一范围内约为 $-(4 + m)(k/q)(\Delta T)^2/(2T) \approx -0.9$ mV。

PTAT 项是 $T$ 的线性函数，只能抵消线性部分，因此基准电压只在单一温度点上温度系数为零，并在 100 K 的范围内留下约一毫伏或更大的抛物线形残差（“弓形”）；精密基准会加入曲率校正。

### 结果

$$\frac{\partial E_g}{\partial T} = -7.02\times10^{-4}\,\frac{T(T + 2216)}{(T + 1108)^2}\ \mathrm{eV/K} \;\approx\; -2.7\times10^{-4}\ \mathrm{eV/K}\ \ (-0.27\ \mathrm{mV/K})\ \text{at 300 K},$$

其中 $E_g(300\ \mathrm{K}) \approx 1.115$ eV。

对带隙基准的影响：

- $V_{BE}$ 的温度系数多了一项 $(1/q)\,\partial E_g/\partial T$：对于 $V_{BE} = 750$ mV，约为 $-1.70$ mV/K 而不是 $-1.45$ mV/K。等价地，零温度系数条件中的等效禁带宽度是外推值 $E_{g0} \approx 1.195$ eV。PTAT 增益必须增大约 17 %，零温度系数时的输出为 $V_{REF} \approx E_{g0}/q + (4 + m)V_T \approx 1.26$ V，而不是约 1.18 V。
- 由于斜率本身随 $T$ 变化（$\partial^2E_g/\partial T^2 \approx -6.2\times10^{-7}$ eV/K²），$V_{BE}$ 会额外带上曲率（在 $\pm50$ K 处约为 $-0.8$ mV），线性的 PTAT 项无法抵消它：温度系数只在一个温度点上为零，并存在需要曲率校正的抛物线形残差。

**常见错误。** 得到正的导数。公式中减去的是一个随 $T$ 增大的项，因此禁带宽度随温度**减小**。

**常见错误。** 以基准电压“由 $E_g$ 决定”为由，认为 $E_g$ 的变化无关紧要。基准电路抵消的是 $V_{BE}$ 的温度系数，而它包含 $\partial E_g/\partial T$；忽略这一项会使 PTAT 增益设置偏差约 17 %，输出电压偏差约 80 mV。
