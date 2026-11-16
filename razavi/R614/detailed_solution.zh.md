# 详细步骤 - R614

**思路。** 两个晶体管共用一个源极节点，因此它们的指数电流之**比**只取决于差分输入；再结合固定的电流之和 $I_{D1} + I_{D2} = I_{SS}$，即可求出各管电流，而两者之差可以化简为双曲正切。然后把 $\tanh$ 展开为只含奇次项的泰勒级数，代入余弦输入，并把 $\cos^3$ 转换为谐波。

### 第 1 步 — 两个漏极电流之比

两个器件完全相同（$I_0$ 相同），并共用源极节点 P，因此

$$\frac{I_{D1}}{I_{D2}} = \frac{I_0\exp[V_{GS1}/(\zeta V_T)]}{I_0\exp[V_{GS2}/(\zeta V_T)]} = \exp\!\left(\frac{V_{GS1} - V_{GS2}}{\zeta V_T}\right) = \exp\!\left(\frac{V_{G1} - V_{G2}}{\zeta V_T}\right) = e^{V_{in}/(\zeta V_T)},$$

这是因为 $V_{GS1} - V_{GS2} = (V_{G1} - V_P) - (V_{G2} - V_P) = V_{in}$。$I_0$ 对源–衬电压的任何依赖对两个器件都是相同的，同样会被抵消。令 $r = e^{V_{in}/(\zeta V_T)}$。

### 第 2 步 — 利用尾电流约束求各管电流

在 P 点应用基尔霍夫电流定律（KCL）得 $I_{D1} + I_{D2} = I_{SS}$，且 $I_{D1} = rI_{D2}$：

$$
\begin{aligned}
rI_{D2} + I_{D2} &= I_{SS}\\
I_{D2} &= \frac{I_{SS}}{1 + r} = \frac{I_{SS}}{1 + e^{V_{in}/(\zeta V_T)}},\\
I_{D1} &= \frac{rI_{SS}}{1 + r} = \frac{I_{SS}}{1 + e^{-V_{in}/(\zeta V_T)}}.
\end{aligned}
$$

### 第 3 步 — 电流之差是双曲正切

$$\Delta I = I_{D1} - I_{D2} = I_{SS}\,\frac{r - 1}{r + 1} = I_{SS}\,\frac{e^{V_{in}/(\zeta V_T)} - 1}{e^{V_{in}/(\zeta V_T)} + 1}.$$

分子和分母同乘以 $e^{-V_{in}/(2\zeta V_T)}$，并令 $z = V_{in}/(2\zeta V_T)$：

$$\Delta I = I_{SS}\,\frac{e^{z} - e^{-z}}{e^{z} + e^{-z}} = I_{SS}\tanh z = I_{SS}\tanh\frac{V_{in}}{2\zeta V_T},$$

这就证明了 $I_{D1} - I_{D2} \propto \tanh[V_{in}/(2\zeta V_T)]$。一旦 $|V_{in}|$ 超过几个 $\zeta V_T$（约 100 mV），输出就在 $\pm I_{SS}$ 处饱和：亚阈值差分对在很小的输入范围内就完全切换。

### 第 4 步 — $\tanh$ 的泰勒展开

$$\tanh z = z - \frac{z^3}{3} + \frac{2z^5}{15} - \dots$$

$\tanh$ 是奇函数，因此只出现奇次幂，对称差分对**不产生偶次谐波**。令 $u = V_m/(\zeta V_T) \ll 1$，$V_{in} = V_m\cos\omega t$：

$$z = \frac{V_m\cos\omega t}{2\zeta V_T} = \frac{u}{2}\cos\omega t .$$

### 第 5 步 — 各次谐波的幅度

线性项为 $z = \dfrac u2\cos\omega t$。对于三次项，利用 $\cos^3\theta = \tfrac34\cos\theta + \tfrac14\cos3\theta$：

$$\frac{z^3}{3} = \frac13\cdot\frac{u^3}{8}\cos^3\omega t = \frac{u^3}{24}\left(\tfrac34\cos\omega t + \tfrac14\cos3\omega t\right) = \frac{u^3}{32}\cos\omega t + \frac{u^3}{96}\cos3\omega t .$$

忽略五阶项：

$$\Delta I \approx I_{SS}\left[\left(\frac u2 - \frac{u^3}{32}\right)\cos\omega t - \frac{u^3}{96}\cos3\omega t\right],$$

即

$$
\begin{aligned}
\text{fundamental:}&\quad I_{SS}\left(\frac{V_m}{2\zeta V_T} - \frac{V_m^3}{32\zeta^3V_T^3}\right) \approx \frac{I_{SS}V_m}{2\zeta V_T},\\
\text{3rd harmonic:}&\quad \frac{I_{SS}V_m^3}{96\,\zeta^3V_T^3}\quad(\text{opposite in sign to the fundamental: compression}),\\
\mathrm{HD3}&= \frac{u^3/96}{u/2} = \frac{u^2}{48} = \frac{V_m^2}{48\,\zeta^2V_T^2}.
\end{aligned}
$$

五次谐波来自 $2z^5/15$，利用 $\cos^5\theta = (10\cos\theta + 5\cos3\theta + \cos5\theta)/16$，可得其为 $I_{SS}u^5/3840$，在 $u \ll 1$ 时可以忽略。

### 第 6 步 — 验证与比较

由于 $I_{SS} = 2I$，基波为 $2I\cdot u/2 = IV_m/(\zeta V_T) = g_mV_m$，其中每个器件的 $g_m = I/(\zeta V_T)$：与偏置在 $I$ 的共源级的基波相同。

**示例。** $\zeta = 1.5$，$V_T = 26$ mV（$\zeta V_T = 39$ mV），$V_m = 5$ mV：$u = 0.128$，因此 HD3 $= 0.128^2/48 = 3.4\times10^{-4} = 0.034\ \%$，HD2 = 0，与对 $\tanh$ 的数值计算结果一致。在同样输入下，单个亚阈值共源级的 HD2 $= u/4 = 3.2\ \%$，约大一百倍：对称性消除了占主导的偶次项。

### 结果

$$I_{D1} - I_{D2} = I_{SS}\tanh\frac{V_{in}}{2\zeta V_T},$$

这由 $I_{D1}/I_{D2} = e^{V_{in}/(\zeta V_T)}$ 和 $I_{D1} + I_{D2} = I_{SS}$ 得出。对于 $V_{in} = V_m\cos\omega t$，且 $u = V_m/(\zeta V_T) \ll 1$，只出现奇次谐波：

- 基波：$\dfrac{I_{SS}V_m}{2\zeta V_T}$（再减去一个小的压缩量 $\dfrac{I_{SS}V_m^3}{32\zeta^3V_T^3}$）；
- 三次谐波：$\dfrac{I_{SS}V_m^3}{96\,\zeta^3V_T^3}$；
- $\mathrm{HD3} = \dfrac{V_m^2}{48\,\zeta^2V_T^2}$；没有二次谐波（second harmonic）。

**常见错误。** 把 $V_{in}/(\zeta V_T)$ 当作 $\tanh$ 的自变量（忘记了对称拆分指数时产生的因子 2），这会使 HD3 大四倍，成为 $V_m^2/(12\zeta^2V_T^2)$。

**常见错误。** 声称存在偶次谐波，或者套用平方律（square law）的结果。$\tanh$ 是奇函数，因此对称差分对没有偶次谐波，而非线性的电压尺度是 $\zeta V_T$（几十毫伏），而不是过驱动电压（overdrive voltage）。
