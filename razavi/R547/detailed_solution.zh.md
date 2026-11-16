# 详细步骤 - R547

**思路。** 用商的求导法则对 TC 表达式求导。由于 $V_{BE}$ 依赖于 $T$，它的导数（即原表达式）会出现在结果中并被抵消，最后只剩下一个非常简单的公式。然后求出数值、画出草图，并把它解释为 $V_{BE}(T)$ 的曲率。

### 第 1 步 — 求导并消项

将分子记为：

$$\frac{\partial V_{BE}}{\partial T} = \frac{N(T)}{T}, \qquad N(T) = V_{BE}(T) - (4+m)\frac{kT}{q} - \frac{E_g}{q}.$$

$V_{BE}$ 和 $V_T = kT/q$ 都依赖于 $T$，而 $E_g/q$ 和 $m$ 是常数，因此

$$\frac{dN}{dT} = \frac{\partial V_{BE}}{\partial T} - (4+m)\frac{k}{q}.$$

由商的求导法则得

$$\frac{\partial^2 V_{BE}}{\partial T^2} = \frac{1}{T}\,\frac{dN}{dT} - \frac{N}{T^2} = \frac{1}{T}\left[\frac{\partial V_{BE}}{\partial T} - (4+m)\frac{k}{q}\right] - \frac{N}{T^2}.$$

按定义 $N/T = \partial V_{BE}/\partial T$，所以 $N/T^2 = (1/T)\,\partial V_{BE}/\partial T$，于是

$$
\begin{aligned}
\frac{\partial^2 V_{BE}}{\partial T^2} &= \frac{1}{T}\frac{\partial V_{BE}}{\partial T} - \frac{(4+m)k}{qT} - \frac{1}{T}\frac{\partial V_{BE}}{\partial T}\\
&= -\frac{(4+m)k}{qT}.
\end{aligned}
$$

$V_{BE}$ 和 $E_g$ 完全消失了。由于 $k/(qT) = V_T/T^2$，

$$\boxed{\frac{\partial^2 V_{BE}}{\partial T^2} = -\frac{(4+m)k}{qT} = -\frac{(4+m)V_T}{T^2}.}$$

当 $m = -3/2$ 时，$4 + m = 2.5 > 0$，因此在任何温度下二阶导数都是**负的**。

### 第 2 步 — 数值

$$(4+m)\frac{k}{q} = 2.5\times\left(8.617\times10^{-5}\ \mathrm{V/K}\right) = 2.154\times10^{-4}\ \mathrm{V/K} = 0.2154\ \mathrm{mV/K},$$

所以 $\partial^2V_{BE}/\partial T^2 = -(0.2154\ \mathrm{mV/K})/T$：

$$
\begin{aligned}
T = 200\ \mathrm{K}:&\quad -\frac{2.154\times10^{-4}\ \mathrm{V/K}}{200\ \mathrm{K}} = -1.08\times10^{-6}\ \mathrm{V/K^2} = -1.08\ \mu\mathrm{V/K^2},\\
T = 300\ \mathrm{K}:&\quad -\frac{2.154\times10^{-4}}{300} = -0.72\ \mu\mathrm{V/K^2},\\
T = 400\ \mathrm{K}:&\quad -\frac{2.154\times10^{-4}}{400} = -0.54\ \mu\mathrm{V/K^2}.
\end{aligned}
$$

用第二种形式在 300 K 处验算：$V_T = 25.85$ mV，因此 $-(2.5)(25.85\ \mathrm{mV})/(300\ \mathrm{K})^2 = -64.6\ \mathrm{mV}/9\times10^4\ \mathrm{K^2} = -0.72\ \mu\mathrm{V/K^2}$。

### 第 3 步 — 曲线草图

| $T$ (K) | 200 | 250 | 300 | 350 | 400 |
|---|---|---|---|---|---|
| $\partial^2V_{BE}/\partial T^2$ (μV/K²) | −1.08 | −0.86 | −0.72 | −0.62 | −0.54 |

以 $T$ 为横轴，曲线是双曲线 $y = -C/T$ 的一支，其中 $C = 0.2154$ mV/K：

- 它完全位于**零以下**；
- 它的绝对值在低温时最大，并且**随 $T$ 升高而趋向零**（从 200 K 到 400 K 减小一半），渐近地趋近 $T$ 轴；
- 它以斜率 $+C/T^2$ 上升（300 K 时为 2.4 nV/K³），并且向下凹，因为 $-C/T$ 的二阶导数为 $-2C/T^3 < 0$；
- 当 $T \to 0$ 时它会发散到 $-\infty$，但该模型只适用于正常的工作温度范围。

### 第 4 步 — 结果的含义：$V_{BE}(T)$ 的曲率

$V_{BE}(T)$ 是**向下凹**的：它的斜率本来就约为 −1.5 mV/K，随温度升高还会变得更负一些。在室温附近 100 K 的范围内，斜率的变化约为 $0.72\ \mu\mathrm{V/K^2}\times100\ \mathrm{K} \approx 0.07$ mV/K，约 5 %。

带隙基准（bandgap reference）加上一个 PTAT 项（$\propto V_T$），其大小选择得使总 TC 在某一温度 $T_0$ 处为零。该项是 $T$ 的线性函数，因此它能在 $T_0$ 处抵消 $V_{BE}$ 的**斜率**，却不能抵消曲率。在 $T_0$ 附近做泰勒展开，得

$$
\begin{aligned}
V_{REF}(T) &\approx V_{REF}(T_0) + 0\cdot(T - T_0) + \frac12\,\frac{\partial^2V_{BE}}{\partial T^2}\Big|_{T_0}(T - T_0)^2\\
&= V_{REF}(T_0) - \frac{(4+m)k}{2qT_0}(T - T_0)^2 .
\end{aligned}
$$

因此基准电压在 $T_0$ 处取最大值，并向两侧按抛物线下降。对于 $T_0 = 300$ K、$|T - T_0| = 100$ K：

$$\Delta V_{REF} \approx -\frac{2.154\times10^{-4}\ \mathrm{V/K}}{2\times300\ \mathrm{K}}\,(100\ \mathrm{K})^2 = -\frac{2.154}{600}\ \mathrm{V} = -3.6\ \mathrm{mV}.$$

这种几毫伏的残余“弓形”弯曲把简单带隙基准的温度系数限制在约 10–20 ppm/°C，这也正是需要曲率校正（curvature correction）的原因。

### 结果

$$\frac{\partial^2V_{BE}}{\partial T^2} = \frac{d}{dT}\left[\frac{V_{BE} - (4+m)V_T - E_g/q}{T}\right] = -\frac{(4+m)k}{qT} = -\frac{(4+m)V_T}{T^2}.$$

$V_{BE}$ 项和 $E_g$ 项相互抵消。对 $m = -3/2$，结果为 $-(0.215\ \mathrm{mV/K})/T$：200 K 时为 −1.08 μV/K²，300 K 时为 −0.72 μV/K²，400 K 时为 −0.54 μV/K²。

**草图：** 一条 $\propto -1/T$ 的负双曲线，低温时绝对值最大，随 $T$ 升高而向零上升。因此 $V_{BE}(T)$ 向下凹，这使带隙基准留有残余的抛物线形弯曲（在偏离其零 TC 温度 ±100 K 处约为 −3.6 mV）。

**常见错误。** 求导时把 $V_{BE}$ 当作常数。这样会得到

$$\frac{d}{dT}\left[\frac{V_{BE} - (4+m)kT/q - E_g/q}{T}\right]_{V_{BE}\,\text{fixed}} = \frac{E_g/q - V_{BE}}{T^2},$$

它是正的（室温下约为 $+0.37\ \mathrm{V}/(300\ \mathrm{K})^2 = +4.1\ \mu\mathrm{V/K^2}$）：符号错误，数值也大了约六倍，因为被丢掉的那一项恰好就是用来抵消 $N/T^2$ 的那一项。

**常见错误。** 把 $V_T$ 当作常数。这样 $-(4+m)k/q$ 项就消失了，结果为零，而实际上全部曲率都来自 $(4+m)V_T$ 对 $T$ 的依赖关系。

**常见错误。** 画出的曲率绝对值随温度增大。结果与 $1/T$ 成正比，因此其绝对值随 $T$ 升高而**减小**。
