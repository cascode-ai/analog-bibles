# 详细步骤 - R630

**思路。** 在振荡边缘摆幅极小，因此每个差分对都处于平衡点，每个晶体管的电流为 $I_{SS}/2$，可以用小信号模型（small-signal model）来分析。于是每级的差分增益为 $g_mR_1$，在其输出节点处有一个极点；三级环形振荡器只有在每级低频增益至少为 2 时才会振荡。用 $I_{SS}$ 表示 $g_m$，这一条件就变成尾电流（tail current）的下限。

### 第 1 步 — 振荡边缘处的小信号模型

每级都使差分信号反相，因此环路有三次反相：在直流时是负反馈，平衡状态就是其工作点。在平衡点附近，每个晶体管的电流为 $I_D = I_{SS}/2$，因此

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2\mu_nC_{ox}\frac{W}{L}\cdot\frac{I_{SS}}{2}} = \sqrt{\mu_nC_{ox}\frac{W}{L}I_{SS}} .$$

对于差分信号，每个尾节点都是虚地（virtual ground），因此每级都简化为一个共源半边电路（half circuit），其负载为 $R_1$ 和输出节点的电容 $C$（下一级的栅电容加上漏极结电容）：

$$\frac{v_{out}}{v_{in}} = -\frac{g_mR_1}{1 + s/\omega_0}, \qquad \omega_0 = \frac{1}{R_1C}.$$

于是该环路的行为与由三个这样的级构成的单端环形振荡器相同：

<!-- diagram: diagram-01.cir -->

每个受控源 $g_mv_{gs}$ 从其漏极节点（X，以及 $M_3$ 和 $M_5$ 的漏极）抽取电流，每个节点都有 $R_1$ 和 $C$ 接到交流地。

### 第 2 步 — 三个相同级的振荡条件

环路增益（loop gain）为

$$H(s) = -\frac{A_0^3}{(1 + s/\omega_0)^3}, \qquad A_0 = g_mR_1 .$$

三次反相在直流时提供 180°，因此极点必须提供另外的 180°，每个 60°：

$$\tan^{-1}\frac{\omega_{osc}}{\omega_0} = 60^\circ \quad\Longrightarrow\quad \omega_{osc} = \sqrt3\,\omega_0 .$$

此时每级的增益为 $A_0/\sqrt{1 + 3} = A_0/2$，因此环路增益的幅值为 $A_0^3/8$，由 $|H(j\omega_{osc})| \ge 1$ 得

$$\frac{A_0^3}{8} \ge 1 \quad\Longrightarrow\quad A_0 = g_mR_1 \ge 2 .$$

不需要知道节点电容 $C$：它决定的是频率，而不是起振条件。

### 第 3 步 — 最小尾电流

把第 1 步的 $g_m$ 代入 $g_mR_1 \ge 2$ 并两边平方：

$$\sqrt{\mu_nC_{ox}\frac{W}{L}I_{SS}}\;R_1 \ge 2 \quad\Longrightarrow\quad \mu_nC_{ox}\frac{W}{L}I_{SS}R_1^2 \ge 4 \quad\Longrightarrow\quad I_{SS} \ge \frac{4}{\mu_nC_{ox}(W/L)R_1^2} .$$

取 $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$：

$$\frac{4}{134\times10^{-6}\ \mathrm{A/V^2}} = 2.99\times10^4\ \mathrm{V^2/A} = 2.99\times10^4\ \mathrm{A\,\Omega^2},$$

因此

$$I_{SS,min} = \frac{2.99\times10^4\ \mathrm{A\,\Omega^2}}{(W/L)\,R_1^2} .$$

**示例。** 当 $W/L = 50$，$R_1 = 1$ kΩ 时：

$$I_{SS,min} = \frac{2.99\times10^4\ \mathrm{A\,\Omega^2}}{50\times(10^3\ \Omega)^2} = 5.97\times10^{-4}\ \mathrm{A} \approx 0.6\ \mathrm{mA}.$$

验算：$g_m = \sqrt{(134\ \mu\mathrm{A/V^2})(50)(0.597\ \mathrm{mA})} = \sqrt{4.0\times10^{-6}}\ \mathrm{A/V} = 2.0$ mS，$g_mR_1 = 2.0$ mS × 1 kΩ = 2。✓

### 第 4 步 — 说明

- **电流为何重要。** 级增益通过 $g_m \propto \sqrt{I_{SS}}$ 依赖于偏置。电流低于 $I_{SS,min}$ 时，各级无法提供 2 的增益，扰动会逐渐消失。
- **沟道长度调制。** 若 $\lambda \neq 0$，负载变为 $R_1 \parallel r_O$，其中 $r_O = 1/(\lambda I_{SS}/2)$，条件 $g_m(R_1 \parallel r_O) \ge 2$ 需要略大的电流。
- **高于最小值时。** 若 $I_{SS} > I_{SS,min}$，振荡不断增长，直到各差分对几乎把尾电流完全切换到一侧，每级的差分摆幅趋近 $I_{SS}R_1$。振荡能否**开始**由小信号增益决定，而不是由这一摆幅决定。

### 结果

在振荡边缘，每个晶体管的电流为 $I_{SS}/2$，因此 $g_m = \sqrt{\mu_nC_{ox}(W/L)I_{SS}}$。三级环形振荡器需要 $g_mR_1 \ge 2$（在 $\sqrt3\,\omega_0$ 处每级 60°，环路增益 $A_0^3/8 \ge 1$），由此得到

$$I_{SS,min} = \frac{4}{\mu_nC_{ox}(W/L)R_1^2} \approx \frac{2.99\times10^4\ \mathrm{A\,\Omega^2}}{(W/L)R_1^2},$$

例如，$W/L = 50$、$R_1 = 1$ kΩ 时约为 0.6 mA。

**常见错误。** 按一个晶体管承载全部尾电流来计算 $g_m$，得到 $I_{SS} \ge 2/[\mu_nC_{ox}(W/L)R_1^2]$，只有正确值的一半。在振荡边缘，各差分对处于平衡状态，每个器件的电流为 $I_{SS}/2$。

**常见错误。** 要求每级增益为 1（或 $\sqrt2$，或 8）。在 $\sqrt3\,\omega_0$ 处，每个极点都使级增益减半，因此低频增益至少为 2。

**常见错误。** 根据大信号（large-signal）摆幅确定下限（例如要求 $I_{SS}R_1$ 超过某个电压）。正如提示所指出的，起振由平衡点附近的小信号环路增益决定。
