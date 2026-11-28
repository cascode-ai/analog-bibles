# 详细步骤 - R072

思路： 当 $\lambda = 0$ 时，饱和共源级的小信号增益幅度为 $g_mR_D$。在每个输出电压下，由负载线得到漏极电流，由平方律（square law）得到 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$，进而得到增益。把增益直接写成 $V_{out}$ 的函数，就能看出它在摆幅范围内变化多少。

### 第 1 步 — 增益与输出电压的函数关系

当 $M_1$ 饱和且 $\lambda = 0$ 时，$A_v = -g_mR_D$，其幅度为 $g_mR_D$，且

$$\beta = \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})\times100 = 13.4\ \mathrm{mA/V^2}.$$

由负载线和平方律跨导（transconductance）得

$$I_D = \frac{V_{DD} - V_{out}}{R_D}, \qquad g_m = \sqrt{2\beta I_D} = \sqrt{\frac{2\beta\,(V_{DD} - V_{out})}{R_D}} ,$$

$$g_mR_D = R_D\sqrt{\frac{2\beta(V_{DD} - V_{out})}{R_D}} = \sqrt{2\beta R_D\,(V_{DD} - V_{out})} .$$

由于 $2\beta R_D = 2(13.4\times10^{-3}\ \mathrm{A/V^2})(2\times10^{3}\ \Omega) = 53.6\ \mathrm{V^{-1}}$：

$$g_mR_D = \sqrt{53.6\ \mathrm{V^{-1}}\times(3\ \mathrm{V} - V_{out})} .$$

输出较低（电流较大）时增益最大，随着输出向 $V_{DD}$ 升高，增益下降。小信号增益对信号电平的这种依赖正是该级的非线性。

### 第 2 步 — 摆幅的两端

在 $V_{out} = 1$ V 处：

$$I_D = \frac{3 - 1\ \mathrm{V}}{2\ \mathrm{k}\Omega} = 1\ \mathrm{mA}, \qquad g_m = \sqrt{2(13.4\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 5.18\ \mathrm{mS}, \qquad g_mR_D = (5.18\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 10.35 .$$

在 $V_{out} = 2.5$ V 处：

$$I_D = \frac{3 - 2.5\ \mathrm{V}}{2\ \mathrm{k}\Omega} = 0.25\ \mathrm{mA}, \qquad g_m = \sqrt{2(13.4\ \mathrm{mA/V^2})(0.25\ \mathrm{mA})} = 2.59\ \mathrm{mS}, \qquad g_mR_D = (2.59\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 5.18 .$$

过驱动电压（overdrive voltage）$\sqrt{2I_D/\beta} = 0.386$ V 和 $0.193$ V 分别低于 $V_{DS} = 1$ V 和 2.5 V，因此 $M_1$ 处于饱和区（saturation region），$g_mR_D$ 在整个摆幅范围内都适用。

### 第 3 步 — 增益变化多少？

$$\frac{g_mR_D\,|_{V_{out} = 1\ \mathrm{V}}}{g_mR_D\,|_{V_{out} = 2.5\ \mathrm{V}}} = \sqrt{\frac{V_{DD} - 1\ \mathrm{V}}{V_{DD} - 2.5\ \mathrm{V}}} = \sqrt{\frac{2}{0.5}} = \sqrt4 = 2 .$$

增益变化了 2 倍：从 10.35 降到 5.18，变化约 5.2，即比最大值下降了 50 %。由第 1 步的公式得到的中间各点：

| $V_{out}$（V） | 1.0 | 1.5 | 2.0 | 2.5 |
|---|---|---|---|---|
| $I_D$（mA） | 1.0 | 0.75 | 0.5 | 0.25 |
| $g_mR_D$ | 10.35 | 8.97 | 7.32 | 5.18 |

电流按 4:1 变化，而 $g_m$ 只按 2:1 变化，因为 $g_m \propto \sqrt{I_D}$；因此增益随 $R_D$ 两端电压的平方根变化。大的输出摆幅使增益取决于信号所处的位置，因此输出是输入的失真版本。限制摆幅，或者采用增益对电流依赖较小的负载与器件结构，可以减轻这一问题。

### 结果

$$g_mR_D = \sqrt{2\mu_nC_{ox}\frac{W}{L}R_D\,(V_{DD} - V_{out})}$$

从 $V_{out} = 1$ V 时的约 10.35（$I_D = 1$ mA，$g_m = 5.18$ mS）变化到 $V_{out} = 2.5$ V 时的约 5.18（$I_D = 0.25$ mA，$g_m = 2.59$ mS）：在整个摆幅范围内变化了 2 倍（变化约 5.2，即最大值的 50 %）。

常见错误： 认为增益与电流一样变化 4 倍。平方律跨导与 $\sqrt{I_D}$ 成正比，因此增益只变化 $\sqrt4 = 2$ 倍。

常见错误： 认为增益在整个摆幅范围内恒定（用一个偏置点的值代表整个范围）。增益 $g_mR_D$ 取决于瞬时电流；它的变化正是题目所说的非线性。
