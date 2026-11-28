# 详细步骤 - R071

思路： 输出电压通过负载线 $I_D = (V_{DD} - V_{out})/R_D$ 决定漏极电流。在检查 $M_1$ 处于饱和之后，由该电流求出平方律（square law）跨导 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$。

### 第 1 步 — 负载线与跨导公式

没有电流流入输出端，因此全部漏极电流都流过 $R_D$：

$$V_{out} = V_{DD} - R_DI_D \quad\Longrightarrow\quad I_D = \frac{V_{DD} - V_{out}}{R_D} .$$

在 $\lambda = 0$ 且

$$\beta = \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})\times\frac{50}{0.5} = 13.4\ \mathrm{mA/V^2},$$

时，从 $g_m = \beta V_{ov}$ 中消去 $V_{ov} = \sqrt{2I_D/\beta}$，得到

$$g_m = \beta\sqrt{\frac{2I_D}{\beta}} = \sqrt{2\beta I_D} = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} .$$

### 第 2 步 — $V_{out} = 1$ V

$$I_D = \frac{3\ \mathrm{V} - 1\ \mathrm{V}}{2\ \mathrm{k}\Omega} = \frac{2\ \mathrm{V}}{2\ \mathrm{k}\Omega} = 1\ \mathrm{mA}.$$

过驱动电压为 $V_{ov} = \sqrt{2I_D/\beta} = \sqrt{2(1\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = \sqrt{0.1493}\ \mathrm{V} = 0.386$ V $< V_{DS} = 1$ V，因此 $M_1$ 饱和 ✓，且

$$g_m = \sqrt{2(13.4\times10^{-3}\ \mathrm{A/V^2})(1\times10^{-3}\ \mathrm{A})} = \sqrt{2.68\times10^{-5}}\ \mathrm{A/V} = 5.18\ \mathrm{mS}.$$

（等价地，$g_m = \beta V_{ov} = 13.4\times0.386 = 5.18$ mS，或 $2I_D/V_{ov} = 2/0.386 = 5.18$ mS。）

### 第 3 步 — $V_{out} = 2.5$ V

$$I_D = \frac{3\ \mathrm{V} - 2.5\ \mathrm{V}}{2\ \mathrm{k}\Omega} = \frac{0.5\ \mathrm{V}}{2\ \mathrm{k}\Omega} = 0.25\ \mathrm{mA}.$$

$V_{ov} = \sqrt{2(0.25\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = \sqrt{0.0373}\ \mathrm{V} = 0.193$ V $< V_{DS} = 2.5$ V，因此 $M_1$ 饱和 ✓，且

$$g_m = \sqrt{2(13.4\times10^{-3}\ \mathrm{A/V^2})(0.25\times10^{-3}\ \mathrm{A})} = \sqrt{6.7\times10^{-6}}\ \mathrm{A/V} = 2.59\ \mathrm{mS}.$$

### 第 4 步 — 比较

电流变化 4 倍（1 mA 对 0.25 mA），而跨导只变化 2 倍（5.18 mS 对 2.59 mS），因为在 $W/L$ 固定时 $g_m \propto \sqrt{I_D}$：

$$\frac{g_m(1\ \mathrm{V})}{g_m(2.5\ \mathrm{V})} = \sqrt{\frac{1\ \mathrm{mA}}{0.25\ \mathrm{mA}}} = \sqrt4 = 2 .$$

由于小信号增益为 $-g_mR_D$，在这一输出范围内增益也变化 2 倍（从 $-10.4$ 到 $-5.2$）。

### 结果

| $V_{out}$ | $I_D = (V_{DD} - V_{out})/R_D$ | $V_{ov}$ | $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ |
|---|---|---|---|
| 1 V | 1 mA | 0.386 V | 5.18 mS |
| 2.5 V | 0.25 mA | 0.193 V | 2.59 mS |

在两种情况下 $M_1$ 都处于饱和区。

常见错误： 使用与电流成线性关系的 $g_m$ 公式，例如 $g_m = \beta I_D$ 或 $g_m = I_D/V_T$，后者是双极晶体管（bipolar transistor）或亚阈值（subthreshold）区的公式。对于平方律 MOSFET，电流变化 4 倍只使 $g_m$ 变化 2 倍。

常见错误： 把电流取为 $V_{out}/R_D$ 而不是 $(V_{DD} - V_{out})/R_D$。电阻位于 $V_{DD}$ 与输出端之间，因此其两端电压为 $V_{DD} - V_{out}$。
