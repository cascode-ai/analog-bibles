# 详细步骤 - R281

**思路。** 在亚阈值饱和状态下，$V_{DS} \gg V_T$ 使电流方程中的方括号等于 1，因此 $I_D$ 只通过一个指数项依赖于 $V_{GS}$。对 $V_{GS}$ 求导，得到同一个指数项除以 $V_T$，由此得 $g_m = I_D/V_T$。

### 第 1 步 — 饱和：方括号变为 1

当 $V_{DS} \gg V_T$ 时，$\exp(-V_{DS}/V_T)$ 可以忽略（在 $V_{DS} = 4V_T \approx 0.1$ V 时它已经只有 $e^{-4} = 0.018$），因此

$$1 - \exp\!\left(\frac{-V_{DS}}{V_T}\right) \approx 1, \qquad I_D \approx \mu C_d\frac{W}{L}V_T^2\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right).$$

电流不再依赖于 $V_{DS}$：亚阈值区的“饱和”只需几个 $V_T$ 的漏源电压就能达到，远小于强反型（strong inversion）时所需的 $V_{GS} - V_{TH}$。

### 第 2 步 — 对 $V_{GS}$ 求导

只有指数项依赖于 $V_{GS}$，因此在 $V_{DS}$ 不变时

$$
\begin{aligned}
g_m = \frac{\partial I_D}{\partial V_{GS}} &= \mu C_d\frac{W}{L}V_T^2\cdot\frac{1}{V_T}\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)\\
&= \mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right).
\end{aligned}
$$

### 第 3 步 — 用偏置电流表示

与第 1 步比较，这恰好是 $I_D$ 除以 $V_T$：

$$g_m = \frac{1}{V_T}\left[\mu C_d\frac{W}{L}V_T^2\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)\right] = \frac{I_D}{V_T},$$

这与双极晶体管（bipolar transistor）的 $g_m = I_C/V_T$ 形式相同。（实际器件中 $g_m = I_D/(\zeta V_T)$，其中非理想因子 $\zeta > 1$，因为栅极只能部分地控制表面势；这里给出的模型中 $\zeta = 1$。）

### 第 4 步 — 物理解释及与强反型的比较

**跨导效率（transconductance efficiency）。** 在亚阈值区，

$$\frac{g_m}{I_D} = \frac{1}{V_T} \approx \frac{1}{26\ \mathrm{mV}} = 38.5\ \mathrm{V^{-1}},$$

它与器件尺寸和电流都无关。在强反型区，按平方律（square law）模型有 $g_m/I_D = 2/(V_{GS} - V_{TH})$，过驱动电压（overdrive voltage）为 0.2 V 时该值为 $10\ \mathrm{V^{-1}}$。亚阈值工作能以单位偏置电流获得最大的跨导，代价是器件尺寸大、速度低。

**数值示例。** 在 $I_D = 1\ \mu\mathrm{A}$ 时：

$$g_m = \frac{1\ \mu\mathrm{A}}{26\ \mathrm{mV}} = 38.5\ \mu\mathrm{S},$$

而在相同电流下，$V_{GS} - V_{TH} = 0.2$ V 的平方律器件的 $g_m = 2(1\ \mu\mathrm{A})/(0.2\ \mathrm{V}) = 10\ \mu\mathrm{S}$。

**与线性区导通电阻（on-resistance）的联系。** 在深线性区（$V_{DS} \ll V_T$），同一模型给出 $R_{on} = V_T/I_{D,sat}$，其中 $I_{D,sat}$ 是相同 $V_{GS}$ 下的饱和电流；在数值上，饱和区的 $g_m$ 等于相同 $V_{GS}$ 下深线性区的 $1/R_{on}$。

### 结果

在饱和区（$V_{DS} \gg V_T$），方括号 ≈ 1，因此 $I_D = \mu C_d\frac{W}{L}V_T^2\exp[(V_{GS} - V_{TH})/V_T]$，与 $V_{DS}$ 无关，且

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right) = \frac{I_D}{V_T}.$$

**常见错误。** 使用平方律公式 $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ 或 $g_m = 2I_D/(V_{GS} - V_{TH})$。在亚阈值区，$I_D$–$V_{GS}$ 关系是指数型的，因此 $g_m$ 正比于 $I_D$ 本身，而不是它的平方根。

**常见错误。** 写成 $g_m = I_DV_T$。$g_m$ 的单位必须是 A/V，$I_D/V_T$ 满足这一点；而 $I_DV_T$ 是功率。

**常见错误。** 在保留含 $V_{DS}$ 的方括号的情况下求导，或者把 $V_T$ 当作阈值电压（threshold voltage）。在饱和区，方括号等于 1，而 $V_T = kT/q$ 在给定温度下是常数。
