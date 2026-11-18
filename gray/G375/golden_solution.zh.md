≈ $1.3\times10^{-18}$ A²，即 ≈ 1.14 nA rms；其中约 87% 来自 $M_1$ 的闪烁噪声（经 $\overline{v_{ia}^2}/R_F^2$），其余主要来自 10-kΩ 反馈电阻。

- $g_m = \sqrt{2k'(W/L)I_D} = \sqrt{2\cdot194\ \mu\cdot100\cdot100\ \mu} = 1.97$ mS。
- 输入端的并联反馈（电流源驱动，因此只有电流发生器起作用）：$\overline{i_i^2} = \overline{i_{ia}^2} + \overline{v_{ia}^2}/R_F^2 + 4kT/R_F$，其中 $\overline{i_{ia}^2} = 0$（无栅极电流，忽略电容）。
- $\overline{v_{ia}^2}$（基本放大器，折算到 $M_1$ 栅极）：热噪声 $4kT\left[\frac{2}{3g_m} + \frac{1}{g_m^2\cdot5\text{ k}} + \dots\right] \approx 4kT(394\ \Omega)$；闪烁噪声 $\frac{K_f}{WLC_{ox}f} = \frac{3\times10^{-24}}{100\ \mu\text{m}^2\cdot4.31\text{ fF}/\mu\text{m}^2\cdot f} = \frac{6.96\times10^{-12}}{f}$ V²/Hz（另有 ≈ 1% 来自 $M_2$，经第一级增益 $g_m\cdot5\text{ k} = 9.85$ 折算）。
- $\overline{i_i^2}/\Delta f = 1.66\times10^{-24} + 6.5\times10^{-26} + \frac{7.0\times10^{-20}}{f}$ A²/Hz。
- 积分：白噪声 $1.73\times10^{-24}\times10^5 = 1.7\times10^{-19}$ A²；闪烁噪声 $7.0\times10^{-20}\ln(10^5/0.01) = 7.0\times10^{-20}\times16.1 = 1.13\times10^{-18}$ A²。总和 $1.31\times10^{-18}$ A² → 1.14 nA rms。
