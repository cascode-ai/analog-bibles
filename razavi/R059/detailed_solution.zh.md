# 详细步骤 - R059

**思路：** 取两个栅极电压下亚阈值电流之比，并令其等于 10。然后将电流对 $V_{GS}$ 求导，得到 $g_m = I_D/(\zeta V_T)$，再代入数值。

### 第 1 步 — 使 $I_D$ 变化十倍的栅极电压变化量

由 $I_D = I_0\exp[V_{GS}/(\zeta V_T)]$，处处出现的乘积为

$$\zeta V_T = 1.5\times26\ \mathrm{mV} = 39\ \mathrm{mV}.$$

当栅极电压从 $V_{GS1}$ 变到 $V_{GS2} = V_{GS1} + \Delta V_{GS}$ 时，

$$\frac{I_{D2}}{I_{D1}} = \frac{I_0\exp\left[V_{GS2}/(\zeta V_T)\right]}{I_0\exp\left[V_{GS1}/(\zeta V_T)\right]} = \exp\frac{V_{GS2} - V_{GS1}}{\zeta V_T} = \exp\frac{\Delta V_{GS}}{\zeta V_T} .$$

$I_0$ 被约去，因此答案既与器件尺寸无关，也与起始电流无关。令该比值等于 10：

$$\frac{\Delta V_{GS}}{\zeta V_T} = \ln 10 = 2.303 \quad\Longrightarrow\quad \Delta V_{GS} = \zeta V_T\ln 10 = (1.5)(26\ \mathrm{mV})(2.303) = 39\ \mathrm{mV}\times2.303 = 89.8\ \mathrm{mV} \approx 90\ \mathrm{mV}.$$

这就是亚阈值斜率（subthreshold slope），大约每十倍电流 90 mV。$\zeta = 1$ 的理想器件每十倍电流只需 $V_T\ln10 \approx 60$ mV；$\zeta = 1.5$ 意味着每十倍电流需要多 50 % 的栅极电压，因此器件的陡峭程度只有理想器件的 2/3。（若 $V_T = 25$ mV，结果为 86 mV。）

### 第 2 步 — $I_D = 10\ \mu$A 时的跨导（transconductance）

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = I_0\exp\frac{V_{GS}}{\zeta V_T}\cdot\frac{1}{\zeta V_T} = \frac{I_D}{\zeta V_T} ,$$

它与电流成正比，与器件尺寸和 $I_0$ 都无关。在 $I_D = 10\ \mu$A 时：

$$g_m = \frac{I_D}{\zeta V_T} = \frac{10\times10^{-6}\ \mathrm{A}}{1.5\times26\times10^{-3}\ \mathrm{V}} = \frac{10\times10^{-6}}{39\times10^{-3}}\ \mathrm{A/V} = 2.56\times10^{-4}\ \mathrm{S} = 256\ \mu\mathrm{S}.$$

等价地，$1/g_m = 3.9\ \mathrm{k}\Omega$。（若 $V_T = 25$ mV，$g_m = 267\ \mu$S。）

比较： 跨导效率为

$$\frac{g_m}{I_D} = \frac{1}{\zeta V_T} = \frac{1}{39\ \mathrm{mV}} = 25.6\ \mathrm{V^{-1}} .$$

在相同电流下，过驱动电压（overdrive voltage）为 0.2 V 的平方律（square law）器件的 $g_m = 2I_D/(V_{GS} - V_{TH}) = 2(10\ \mu\mathrm{A})/(0.2\ \mathrm{V}) = 100\ \mu$S，即 $g_m/I_D = 10\ \mathrm{V^{-1}}$。亚阈值工作在单位电流下提供的跨导最大，这就是它被用于低功耗电路的原因（代价是速度和较大的器件尺寸）。

两部分之间的一致性验证： 在小变化下，$\Delta I_D \approx g_m\Delta V_{GS}$，因此 $\Delta I_D/I_D \approx \Delta V_{GS}/(\zeta V_T)$：1 mV 的变化使电流变化约 $1/39 = 2.6\ \%$。把这一变化在 90 mV 上累积，得到 $e^{89.8/39} = e^{2.303} = 10$，与第 1 步一致。

### 结果

- $I_D$ 变化十倍需要 $\Delta V_{GS} = \zeta V_T\ln10 = 1.5\times26\ \mathrm{mV}\times2.303 \approx 90$ mV。
- 在 $I_D = 10\ \mu$A 时：$g_m = I_D/(\zeta V_T) = 10\ \mu\mathrm{A}/39\ \mathrm{mV} \approx 256\ \mu$S（约 0.26 mS，即 $1/g_m \approx 3.9\ \mathrm{k}\Omega$）。

**常见错误：** 漏掉 $\zeta$，得到每十倍 60 mV 以及 $g_m = 385\ \mu$S：这是理想（$\zeta = 1$）极限。$\zeta = 1.5$ 的实际器件每十倍电流需要多 50 % 的栅极电压，跨导只有该值的 1/1.5。

**常见错误：** 忘记 $\ln10$，答成 $\zeta V_T = 39$ mV；这是电流变化 $e \approx 2.72$ 倍（而不是 10 倍）所需的电压。

**常见错误：** 在亚阈值区使用诸如 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ 的平方律公式。在阈值以下，指数规律给出 $g_m = I_D/(\zeta V_T)$，不需要器件尺寸。
