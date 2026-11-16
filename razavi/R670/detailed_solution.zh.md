# 详细步骤 - R670

**思路。** 把恒定电场按比例缩小的规则（尺寸 ÷ α，电压 ÷ α，掺杂 × α，温度不变）应用到亚阈值电流公式的每个因子上。然后由指数项推导亚阈值斜率 $S = 2.3\,\zeta V_T$，它只含 $\zeta$ 和热电压（thermal voltage），两者都不随 $\alpha$ 缩放。

### 第 1 步 — $\zeta$ 的作用

在阈值以下，栅极通过 $C_{ox}$（栅极到表面）与 $C_d$（表面到衬底）构成的分压器来设定表面势：栅压的变化 $\Delta V_{GS}$ 只能使表面势变化 $\Delta V_{GS}\,C_{ox}/(C_{ox} + C_d) = \Delta V_{GS}/\zeta$，而电流与该电势呈指数关系。

### 第 2 步 — 各参数的缩放

- **宽长比：** $W/L \to (W/\alpha)/(L/\alpha) = W/L$，不变。
- **迁移率：** 理想情况下不变（实际上会有所下降，原因是更高的掺杂带来更多的杂质散射，更高的纵向电场带来更多的表面散射）。
- **热电压：** $V_T = kT/q \to V_T \approx 25.9$ mV（300 K 时），不变，因为温度不按比例缩小。
- **电压：** $V_{GS}$、$V_{TH}$、$V_{GS} - V_{TH}$ 和 $V_{DS}$ 都除以 $\alpha$。
- **栅氧电容：** $C_{ox} = \epsilon_{ox}/t_{ox} \to \alpha C_{ox}$。

**费米势。** 当 $N_{sub} \to \alpha N_{sub}$ 时，

$$\phi_B \to \frac{kT}{q}\ln\frac{\alpha N_{sub}}{n_i} = \phi_B + V_T\ln\alpha,$$

这是一个很小的增量（$\alpha = 2$ 时为 18 mV），基本不变。

**耗尽层电容。**

$$C_d \to \sqrt{\frac{\epsilon_{si}q\,\alpha N_{sub}}{4(\phi_B + V_T\ln\alpha)}} \approx \sqrt\alpha\;C_d\quad\text{(slightly less than }\sqrt\alpha\text{)}.$$

它只增大到约 $\sqrt\alpha$ 倍，而不是 $\alpha$ 倍，因为阈值处的表面势（$2\phi_B$）不按比例缩小：耗尽宽度 $\sqrt{2\epsilon_{si}(2\phi_B)/(qN_{sub})}$ 只减小 $\sqrt\alpha$ 倍。（若假设**所有**耗尽宽度都理想地按 $1/\alpha$ 缩小，则 $C_d \to \alpha C_d$。）

**斜率因子。**

$$\frac{C_d}{C_{ox}} \to \frac{\sqrt\alpha\,C_d}{\alpha\,C_{ox}} = \frac{1}{\sqrt\alpha}\cdot\frac{C_d}{C_{ox}}, \qquad \zeta = 1 + \frac{C_d}{C_{ox}} \to 1 + \frac{1}{\sqrt\alpha}\cdot\frac{C_d}{C_{ox}} ,$$

因此 $\zeta$ 略有减小，趋向 1（若耗尽宽度理想缩放，$C_d/C_{ox}$ 和 $\zeta$ 保持不变）。

**漏极因子。** 在 $V_{DS} \to V_{DS}/\alpha$、$V_T$ 固定的情况下，只要 $V_{DS}$ 保持在约 $4V_T \approx 100$ mV 以上，$1 - \exp(-V_{DS}/V_T)$ 就大于 0.98；一旦缩放后的电源电压接近几个 $V_T$，它就开始依赖于 $V_{DS}$。

**前置系数。** $\mu C_d(W/L)V_T^2 \to 1\cdot\sqrt\alpha\cdot1\cdot1 = \sqrt\alpha$ 倍。

### 第 3 步 — 汇总表

| 参数 | 缩放因子 |
|---|---|
| $W/L$ | 1 |
| $\mu$ | 1（理想情况） |
| $V_T = kT/q$ | 1 |
| $V_{GS}$, $V_{TH}$, $V_{GS} - V_{TH}$, $V_{DS}$ | $1/\alpha$ |
| $C_{ox}$ | $\alpha$ |
| $\phi_B$ | $+V_T\ln\alpha$（≈ 1） |
| $C_d$ | ≈ $\sqrt\alpha$（若耗尽宽度理想缩放则为 $\alpha$） |
| $\zeta$ | 略小，趋向 1（或为 1） |
| 前置系数 $\mu C_d(W/L)V_T^2$ | ≈ $\sqrt\alpha$ |
| 指数 $(V_{GS} - V_{TH})/(\zeta V_T)$ | ≈ $1/\alpha$ |

### 第 4 步 — 亚阈值斜率

当 $V_{DS} \gg V_T$（漏极因子为 1）时，

$$\ln I_D = \ln\!\left(\mu C_d\frac{W}{L}V_T^2\right) + \frac{V_{GS} - V_{TH}}{\zeta V_T} \quad\Rightarrow\quad \frac{d\log_{10}I_D}{dV_{GS}} = \frac{1}{\zeta V_T\ln10},$$

因此电流每变化十倍所需的栅压变化为

$$S = \frac{dV_{GS}}{d\log_{10}I_D} = \zeta V_T\ln10 = 2.3\,\zeta\,\frac{kT}{q}.$$

在 300 K 时，$2.3\,kT/q = 2.3026 \times 25.9\ \mathrm{mV} = 59.5$ mV/dec，因此 $S \approx 60\zeta$ mV/dec，其下限约为 60 mV/dec（$\zeta \ge 1$）。

按比例缩小时，$kT/q$ 不变，$\zeta$ 不变或略小，因此 **$S$ 不会按比例缩小**：它大致保持不变（通常为 60–100 mV/dec），最多随 $\zeta$ 趋向 1 而略有改善，而其他所有电压都减小 $\alpha$ 倍。

### 第 5 步 — 数值示例（$\alpha = 2$）

取 $N_{sub} = 10^{17}\ \mathrm{cm^{-3}}$，并选择氧化层使缩放前 $\zeta = 1.5$。

- 缩放前：$\phi_B = 0.0259\ln(10^{17}/1.45\times10^{10}) = 0.407$ V，$C_d = 101\ \mathrm{nF/cm^2}$，$C_{ox} = 2C_d = 202\ \mathrm{nF/cm^2}$（$t_{ox} \approx 17$ nm），$S = 1.5\times59.5 = 89$ mV/dec。
- 缩放后：$N_{sub} = 2\times10^{17}\ \mathrm{cm^{-3}}$，$\phi_B = 0.425$ V，$C_d = 140\ \mathrm{nF/cm^2}$（×1.38，略小于 $\sqrt2 = 1.41$），$C_{ox} = 404\ \mathrm{nF/cm^2}$，$\zeta = 1 + 140/404 = 1.35$，$S = 1.35\times59.5 = 80$ mV/dec。

斜率只改善了 10 %，而电源电压和阈值电压都减半了。

### 第 6 步 — 后果：关态电流

在 $V_{GS} = 0$ 时，$I_D \propto \exp[-V_{TH}/(\zeta V_T)]$。把 $V_{TH}$ 除以 $\alpha$，而 $\zeta V_T$ 大致不变，会使关态电流**呈指数增长**。对于 $V_{TH}$：0.7 V → 0.35 V，$\zeta \approx 1.5$：

$$\frac{I_{off}'}{I_{off}} \approx \exp\!\left(\frac{0.35\ \mathrm{V}}{1.5\times0.0259\ \mathrm{V}}\right) = e^{9.0} \approx 8\times10^3 \approx 10^4 .$$

等价地，在 $V_{TH}$ 范围内开态与关态电流之间相差的十倍数，即 $V_{TH}/S$，减小了 $\alpha$ 倍。正是 $S$ 的这种不可缩放性，使 $V_{TH}$ 以及电源电压无法随意按比例缩小。

### 结果

在理想按比例缩小下，$W/L$、$\mu$ 和 $V_T = kT/q$ 不变；$V_{GS}$、$V_{TH}$、$V_{DS}$ 除以 $\alpha$；$C_{ox}$ 增大到 $\alpha$ 倍；$C_d$ 约增大到 $\sqrt\alpha$ 倍（若假设耗尽宽度理想缩放，则为 $\alpha$ 倍）；$\zeta = 1 + C_d/C_{ox}$ 不变或略微减小、趋向 1；前置系数约增大到 $\sqrt\alpha$ 倍；在 $V_{DS} \gg V_T$ 时漏极因子保持 ≈ 1。

亚阈值斜率

$$S = 2.3\,\zeta\,\frac{kT}{q} \approx 60\zeta\ \mathrm{mV/dec}$$

**不会按比例缩小**（最多略有改善），而且在室温下永远不可能低于约 60 mV/dec。由于 $V_{TH}$ 被除以 $\alpha$，亚阈值（关态）电流呈指数增长。

**常见错误。** 以为斜率会像其他电压一样减小 $\alpha$ 倍。$S$ 由 $kT/q$（以及 $\zeta \ge 1$）决定，而温度并不按比例缩小。

**常见错误。** 让 $V_T$ 随电源电压一起缩放。这里的 $V_T = kT/q$ 是热电压，在给定温度下是固定的，并不是器件电压。
