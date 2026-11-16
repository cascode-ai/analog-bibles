# 详细步骤 - R241

**思路。** 完全匹配时两条支路完全相同，因此 $V_{out} = V_F$。阈值失配（threshold mismatch）使 $M_4$ 在相同 $V_{SG}$ 下提供的电流略小于 $M_3$。在匹配工作点附近线性化，并逐个器件比较两条支路，可知这一电流差只能由 $V_{out}$ 与 $V_F$ 之差通过 $r_{O2}$ 和 $r_{O4}$ 来吸收。

### 第 1 步 — 匹配工作点与小信号参数

每条支路流过 $I_{D5}/2 = 0.25$ mA，所有器件的 $W/L = 50/0.5 = 100$。匹配时，$M_3$ 和 $M_4$ 的 $V_{SG}$ 和电流都相同，因此（在 $\lambda \neq 0$ 时）$V_{SD}$ 也相同：$V_{out} = V_F$。

$$g_{m4} = \sqrt{2\mu_pC_{ox}\frac{W}{L}I_D} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = \sqrt{1.92\times10^{-6}}\ \mathrm{A/V} = 1.39\ \mathrm{mS},$$

$$g_{m1} = g_{m2} = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = 2.59\ \mathrm{mS},$$

$$r_{O2} = \frac{1}{\lambda_nI_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 40\ \mathrm{k}\Omega, \qquad r_{O4} = \frac{1}{\lambda_pI_D} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,$$

$$r_{O2}\|r_{O4} = \frac{40\times20}{40 + 20}\ \mathrm{k}\Omega = 13.3\ \mathrm{k}\Omega .$$

### 第 2 步 — 失配如何起作用

令 $\delta = |V_{TH4}| - |V_{TH3}| = 1$ mV。$M_4$ 的 $V_{SG}$ 与 $M_3$ 相同，但阈值电压大 $\delta$，因此其过驱动电压（overdrive voltage）小 $\delta$，在一阶近似下其电流减小

$$\Delta I_{mis} = g_{m4}\,\delta = (1.39\ \mathrm{mS})(1\ \mathrm{mV}) = 1.39\ \mu\mathrm{A} ,$$

就好像有一个 1 mV 的误差电压源串联在 $M_4$ 的栅极上。

### 第 3 步 — 比较两条支路

令 $\Delta = V_{out} - V_F$，并在匹配工作点（$\Delta = 0$）附近线性化。

**$M_2$ 与 $M_1$ 比较。** 二者栅极电压相同（1.5 V），源极也相同，因此它们的电流只因 $V_{DS2} - V_{DS1} = \Delta$ 而不同：

$$I_{D2} - I_{D1} = \frac{\Delta}{r_{O2}} .$$

**$M_4$ 与 $M_3$ 比较。** 二者 $V_{SG}$ 相同；差别来自失配，以及 $V_{SD4} - V_{SD3} = (V_{DD} - V_{out}) - (V_{DD} - V_F) = -\Delta$：

$$I_{D4} - I_{D3} = -g_{m4}\delta - \frac{\Delta}{r_{O4}} .$$

由于 $I_{D3} = I_{D1}$，$I_{D4} = I_{D2}$，两个差值相等：

$$\frac{\Delta}{r_{O2}} = -g_{m4}\delta - \frac{\Delta}{r_{O4}} ,$$

$$
\begin{aligned}
\Delta\left(\frac{1}{r_{O2}} + \frac{1}{r_{O4}}\right) &= -g_{m4}\delta,\\
\Delta &= -g_{m4}\,(r_{O2}\|r_{O4})\,\delta .
\end{aligned}
$$

尾电流源和 P 点的移动对两条支路的影响相同，相互抵消；计入 $r_{O5}$、$r_{O1}$、$r_{O3}$ 和体效应（body effect）的完整小信号分析给出的正是这一表达式。

### 第 4 步 — 数值

$$V_{out} - V_F = -(1.39\ \mathrm{mS})(13.3\ \mathrm{k}\Omega)(1\ \mathrm{mV}) = -18.5\times1\ \mathrm{mV} = -18.5\ \mathrm{mV} .$$

$V_{out}$ **比 $V_F$ 约低 18.5 mV**。实际上全部变化都体现在 $V_{out}$ 上：F 点由二极管连接（diode-connected）的 $M_3$ 钳住（$\approx 1/g_{m3} = 0.72\ \mathrm{k}\Omega$），只移动约 0.16 mV。换言之，$M_4$ 提供的电流比 $M_2$ 吸收的少 1.39 μA，在高阻输出端，这一差额使 $V_{out}$ 下降 $1.39\ \mu\mathrm{A}\times13.3\ \mathrm{k}\Omega = 18.5$ mV。

**输入参考的观点。** 负载栅极上的误差 $\delta$ 相当于输入失调（input offset）$\delta\,g_{m4}/g_{m1} = 1\ \mathrm{mV}\times1.39/2.59 = 0.54$ mV；乘以增益 $g_{m1}(r_{O2}\|r_{O4}) = 34.5$，同样得到 18.5 mV。

**修正。** 在偏置计算中保留 $(1 + \lambda V_{DS})$（取典型阈值电压 0.7 V 和 $-0.8$ V），增量电阻 $r_O = (1 + \lambda V_{DS})/(\lambda I_D)$ 和 $g_m$ 都会变大（分别约为 45 kΩ、24.5 kΩ 和 1.53 mS），偏差增大到约 $-24$ mV，数量级相同。

### 结果

$$V_{out} - V_F = -g_{m4}(r_{O2}\|r_{O4})\,\Delta|V_{TH}| = -(1.39\ \mathrm{mS})(40\ \mathrm{k}\Omega\,\|\,20\ \mathrm{k}\Omega)(1\ \mathrm{mV}) \approx -18.5\ \mathrm{mV},$$

即 $V_{out}$ 比 $V_F$ **低**约 18.5 mV（若在 $g_m$ 和 $r_O$ 中保留 $(1 + \lambda V_{DS})$ 因子，则约为 24 mV）。

**常见错误。** 以“失配只有 1 mV”为由，回答 1 mV（或零）。失配在高阻输出端产生电流误差 $g_{m4}\delta$，该误差在那里被乘以 $r_{O2}\|r_{O4}$。

**常见错误。** 把符号弄反。**较大的** $|V_{TH4}|$ 使 $M_4$ **变弱**，因此输出低于 $V_F$。

**常见错误。** 在输出端只用 $r_{O4}$（或只用 $r_{O2}$）。两个器件都通过沟道长度调制（channel-length modulation）对 $V_{out}$ 作出响应，因此电阻为 $r_{O2}\|r_{O4}$。
