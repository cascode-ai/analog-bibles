# 详细步骤 - R535

**思路。** PMOS 电流镜（current mirror）使所有支路流过相同的电流 $I_{out}$。$R_S$ 位于 $M_1$ 的栅极与漏极之间，因此它使 $V_{GS1}$ 比 $V_{GS2}$ 大 $I_{out}R_S$；代入各器件的平方律 $V_{GS}$，就得到一个关于 $I_{out}$ 的方程。

### 第 1 步 — 所有支路电流都等于 $I_{out}$

把 $M_4$ 的漏极（$R_S$ 的上端、$M_1$ 的栅极）记为 A，把 $R_S$ 的下端（$M_1$ 的漏极、$M_2$ 的栅极）记为 B。
- $M_2$ 与 $M_3$ 串联：$I_{D2} = I_{D3} = I_{out}$。
- $M_3$ 和 $M_4$ 完全相同且 $V_{GS}$ 相同，因此在 $\lambda = 0$ 时 $I_{D4} = I_{D3} = I_{out}$。
- $M_1$ 和 $M_2$ 的栅极不吸取电流，因此 $M_4$ 的电流全部经 $R_S$ 流入 $M_1$：$I_{R_S} = I_{D1} = I_{D4} = I_{out}$。

### 第 2 步 — 环路方程

两个源极都接地，因此 $V_A = V_{GS1}$，$V_B = V_{GS2}$。$R_S$ 中有电流 $I_{out}$ 从 A 流向 B：

$$V_A - V_B = I_{out}R_S \quad\Longrightarrow\quad V_{GS1} = V_{GS2} + I_{out}R_S .$$

在相同电流下，$M_1$ 需要比 $M_2$ 更大的 $V_{GS}$，因此它必须是“较弱”的器件，即 $W/L$ 较小。

### 第 3 步 — 代入平方律

利用 $V_{GS} = V_{TH} + \sqrt{2I_D/\beta}$，并且两个器件的 $V_{TH}$ **相同**（源极和衬底都接地，没有体效应）：

$$V_{TH} + \sqrt{\frac{2I_{out}}{\beta_1}} = V_{TH} + \sqrt{\frac{2I_{out}}{\beta_2}} + I_{out}R_S .$$

### 第 4 步 — 求解 $I_{out}$

消去 $V_{TH}$ 并提出 $\sqrt{2I_{out}}$：

$$\sqrt{2I_{out}}\left(\frac{1}{\sqrt{\beta_1}} - \frac{1}{\sqrt{\beta_2}}\right) = I_{out}R_S .$$

除了 $I_{out} = 0$（第 5 步）之外，两边除以 $\sqrt{I_{out}}$ 得

$$\sqrt2\left(\frac{1}{\sqrt{\beta_1}} - \frac{1}{\sqrt{\beta_2}}\right) = \sqrt{I_{out}}\,R_S ,$$

两边平方，

$$\boxed{I_{out} = \frac{2}{R_S^2}\left(\frac{1}{\sqrt{\beta_1}} - \frac{1}{\sqrt{\beta_2}}\right)^2 = \frac{2}{\mu_nC_{ox}(W/L)_1R_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2,\qquad K = \frac{(W/L)_2}{(W/L)_1},}$$

其中第二种形式是把 $1/\sqrt{\beta_1}$ 提到括号外，并利用 $\sqrt{\beta_1/\beta_2} = 1/\sqrt K$ 得到的。

**符号条件。** $\sqrt{I_{out}}R_S > 0$ 要求 $\beta_2 > \beta_1$（$K > 1$）：$M_2$ 的 $W/L$ 较大（若沟道长度相等，则它更宽），正如第 2 步所预料的。

**性质。** 结果中不出现 $V_{DD}$，因此电流**与电源无关**（supply-independent），只要沟道长度调制可以忽略。由于两个 NMOS 的源极都接地，不涉及体效应；这是相对于把 $R_S$ 接在 $M_2$ 源极的经典结构的一个优点，后者给出同样的表达式，但受 $M_2$ 体效应的影响。

### 第 5 步 — 附加条件

**$M_1$ 的饱和。** $V_{DS1} = V_{GS2}$，由 $V_{DS1} \ge V_{GS1} - V_{TH}$ 得

$$V_{GS2} \ge V_{GS2} + I_{out}R_S - V_{TH}\quad\Longrightarrow\quad I_{out}R_S \le V_{TH}.$$

**$M_2$ 的饱和**要求 $V_{DS2} = V_{DD} - |V_{GS3}| \ge V_{GS2} - V_{TH}$，合理的电源电压都能满足。

**启动。** 环路方程也被 $I_{out} = 0$（所有器件截止）所满足，因此需要启动电路。

**数值示例。** 取 $\beta_1 = 2\ \mathrm{mA/V^2}$，$\beta_2 = 8\ \mathrm{mA/V^2}$（$K = 4$），$R_S = 2\ \mathrm{k\Omega}$：

$$
\begin{aligned}
I_{out} &= \frac{2}{(2\times10^{-3})(2\times10^3)^2}\left(1 - \frac12\right)^2\ \mathrm{A} = 0.25\ \mathrm{mA}\times0.25 = 62.5\ \mu\mathrm{A},\\
\sqrt{2I_{out}/\beta_1} &= \sqrt{2\times62.5\ \mu\mathrm{A}/2\ \mathrm{mA/V^2}} = 0.250\ \mathrm{V},\\
\sqrt{2I_{out}/\beta_2} &= \sqrt{2\times62.5\ \mu\mathrm{A}/8\ \mathrm{mA/V^2}} = 0.125\ \mathrm{V},\\
I_{out}R_S &= 62.5\ \mu\mathrm{A}\times2\ \mathrm{k\Omega} = 0.125\ \mathrm{V} = 0.250 - 0.125\ \mathrm{V}. \ \checkmark
\end{aligned}
$$

### 结果

$$I_{out} = \frac{2}{R_S^2}\left(\frac{1}{\sqrt{\beta_1}} - \frac{1}{\sqrt{\beta_2}}\right)^2 = \frac{2}{\mu_nC_{ox}(W/L)_1R_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2,\qquad K = \frac{(W/L)_2}{(W/L)_1},$$

它由 $I_{D1} = I_{D2} = I_{D4} = I_{out}$ 和 $V_{GS1} = V_{GS2} + I_{out}R_S$ 得出。非零解要求 $\beta_2 > \beta_1$（$M_2$ 的 $W/L$ 较大）。该电流与 $V_{DD}$ 无关，也没有体效应引起的误差；若 $I_{out}R_S \le V_{TH}$，$M_1$ 保持饱和；还需要启动电路来避免零电流状态。

**常见错误。** 把环路关系反写成 $V_{GS2} = V_{GS1} + I_{out}R_S$，就像熟悉的 $R_S$ 接在 $M_2$ 源极的电路那样。这里 $R_S$ 位于 $M_1$ 的栅极与漏极之间，因此 $M_1$ 的栅极电位更高，$M_2$ 必须是较宽的器件。

**常见错误。** 认为 $R_S$ 中流过的是另一个电流，或者让结果依赖于 $V_{DD}$。三条支路都流过 $I_{out}$，而 $V_{DD}$ 从不进入环路方程。

**常见错误。** 漏掉平方律中的因子 2，即写成 $V_{GS} = V_{TH} + \sqrt{I_D/\beta}$。过驱动电压（overdrive voltage）为 $\sqrt{2I_D/\beta}$，结果中的因子 2 正是由此而来。
