# 详细步骤 - R542

**思路。** $Q_2$ 的基极电流流入 $Q_1$ 的发射极节点，$Q_4$ 的基极电流流入 $Q_3$ 的发射极节点。这改变了全部四个集电极电流，但两侧的改变完全相同。用正确的集电极电流写出 $V_X$ 和 $V_Y$，并令 $V_X = V_Y$，可以看出 PTAT 项不受影响；只剩下发射极-基极电压一个很小的、未被放大的偏移。

### 第 1 步 — 各晶体管中的电流

所有 PMOS 器件都流过 $I$。令 $\alpha = \beta/(\beta + 1)$，PNP 管的发射极电流分为集电极的 $\alpha I_E$ 和从基极流出的 $I_E/(\beta + 1)$。

**左侧。**
- $Q_2$：$I_{E2} = I$（来自 $M_1$），$I_{C2} = \alpha I = \dfrac{\beta}{\beta + 1}I$，$I_{B2} = \dfrac{I}{\beta + 1}$ 从其基极流出。
- $Q_1$：其发射极节点接收来自 $M_3$ 的 $I$，**再加上** $I_{B2}$，而 $Q_1$ 不吸取基极电流，因此
$$I_{C1} = I_{E1} = I + \frac{I}{\beta + 1} = \frac{\beta + 2}{\beta + 1}\,I .$$

**右侧**（结构相同，面积为 $nA$）：
- $Q_4$：$I_{E4} = I$（也就是 $R_1$ 中的电流），$I_{C4} = \alpha I$，$I_{B4} = I/(\beta + 1)$。
- $Q_3$：$I_{C3} = I_{E3} = \dfrac{\beta + 2}{\beta + 1}\,I$。

### 第 2 步 — 各支路电压

由 $|V_{EB}| = V_T\ln(I_C/I_S)$，且 $I_S$ 与发射极面积成正比：

$$V_X = |V_{EB1}| + |V_{EB2}| = V_T\ln\frac{\frac{\beta + 2}{\beta + 1}I}{I_S} + V_T\ln\frac{\alpha I}{I_S},$$

$$V_Y = |V_{EB3}| + |V_{EB4}| + IR_1 = V_T\ln\frac{\frac{\beta + 2}{\beta + 1}I}{nI_S} + V_T\ln\frac{\alpha I}{nI_S} + IR_1 .$$

### 第 3 步 — 环路条件：基极电流的影响相互抵消

在 $V_X = V_Y$ 中，因子 $(\beta + 2)/(\beta + 1)$ 和 $\alpha$ 在两边以相同方式出现，相互抵消：

$$IR_1 = V_T\ln n + V_T\ln n = 2V_T\ln n\qquad\text{exactly}.$$

PTAT 电流 $I = 2V_T\ln n/R_1$ **不**因 β 有限而改变：两半受到的扰动相同，因此它们的发射极-基极电压之差（环路所响应的只有这个差）不受影响。

### 第 4 步 — 输出电压

$$V_{out} = V_Y + IR_2 = |V_{EB3}| + |V_{EB4}| + I(R_1 + R_2) .$$

$I(R_1 + R_2) = 2(1 + R_2/R_1)V_T\ln n$ 不变。与 $\beta \to \infty$ 的情况（两个集电极电流都等于 $I$）相比，只有 $|V_{EB3}| + |V_{EB4}|$ 不同：

$$
\begin{aligned}
\Delta V_{out} &= V_T\ln\frac{\beta + 2}{\beta + 1} + V_T\ln\frac{\beta}{\beta + 1}\\
&= V_T\ln\frac{\beta(\beta + 2)}{(\beta + 1)^2} .
\end{aligned}
$$

由于 $\beta(\beta + 2) = (\beta + 1)^2 - 1$，

$$\boxed{\Delta V_{out} = V_T\ln\left[1 - \frac{1}{(\beta + 1)^2}\right] \approx -\frac{V_T}{(\beta + 1)^2}}$$

这个误差**不**被 $1 + R_2/R_1$ 放大，而且是 $1/\beta$ 的二阶量：$Q_3$ 的电流增大约 $1/\beta$，而 $Q_4$ 的电流减小约 $1/\beta$。

### 第 5 步 — 数值

$$
\begin{aligned}
\beta = 10:&\quad \Delta V_{out} = 26\ \mathrm{mV}\times\ln\frac{10\times12}{121} = 26\ \mathrm{mV}\times\ln0.9917 = -0.22\ \mathrm{mV},\\
\beta = 5:&\quad \Delta V_{out} = 26\ \mathrm{mV}\times\ln\frac{5\times7}{36} = 26\ \mathrm{mV}\times\ln0.9722 = -0.73\ \mathrm{mV}.
\end{aligned}
$$

即使是 CMOS 中寄生衬底 PNP 管那样很低的 β，引起的误差也可以忽略，而被放大的 PTAT 项误差则会达到几十毫伏。

**变体。** 如果（较不准确地）用发射极电流来计算发射极-基极电压，则只有 $|V_{EB3}|$ 改变，变化量为 $V_T\ln[(\beta + 2)/(\beta + 1)] \approx +V_T/(\beta + 1)$（β = 10 时约 +2.3 mV）；它仍然在环路中抵消，并且仍不被放大。

**何时会产生影响。** 这种抵消依赖于对称性：如果 $Q_2$ 和 $Q_4$ 的 β **不同**，差值就会进入 $R_1$ 上的 PTAT 电压，并被乘以 $1 + R_2/R_1$。

### 结果

$Q_2$ 和 $Q_4$ 的基极电流 $I/(\beta + 1)$ 分别加到 $Q_1$ 和 $Q_3$ 的发射极电流上（$I_{C1} = I_{C3} = I(\beta + 2)/(\beta + 1)$），而 $I_{C2} = I_{C4} = \alpha I$。这些变化在两半中完全相同，因此在 $V_X = V_Y$ 中相互抵消：$IR_1 = 2V_T\ln n$ 严格成立，PTAT 项（被 $1 + R_2/R_1$ 放大的部分）不受影响。唯一的变化在 $|V_{EB3}| + |V_{EB4}|$ 中：

$$\Delta V_{out} = V_T\ln\frac{\beta(\beta + 2)}{(\beta + 1)^2} \approx -\frac{V_T}{(\beta + 1)^2},$$

即可以忽略：β = 10 时约 −0.2 mV，β = 5 时约 −0.7 mV。

**常见错误。** 只考虑 $Q_1$ 中多出的电流，并把它乘以 $1 + R_2/R_1$，得到量级为 $(1 + R_2/R_1)V_T/\beta$ 的误差。同样多出的电流也流过 $Q_3$，因此该效应在环路方程中相互抵消。

**常见错误。** 让基极电流流过 $R_1$ 或 $R_2$。$Q_4$ 的基极电流流向 $Q_3$ 的发射极节点；$R_1$ 中的电流是 $Q_4$ 的发射极电流，即 PMOS 电流 $I$。

**常见错误。** 断定在这种拓扑中有限 β 永远无关紧要。这种抵消要求 $Q_2$ 和 $Q_4$ 的 β 相等；β 失配会产生被放大的误差。
