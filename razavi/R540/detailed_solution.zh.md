# 详细步骤 - R540

**思路。** $M_3$ 和 $M_4$ 为两个堆叠中下方的晶体管供电（X 侧为 $Q_1$，Y 侧为 $Q_3$）。它们的阈值失配使这两个电流不相等，而这个比值进入环路方程 $V_X = V_Y$ 的方式与 $M_1$–$M_2$ 失配完全相同：它改变 $R_1$ 上的 PTAT 电压，而输出会将其放大。下面推导电流比、环路方程和输出误差，并计入未被放大的修正项。

### 第 1 步 — 电路关系

忽略基极电流，$Q_1$ 流过 $I_{D3}$，$Q_2$ 流过 $I_{D1}$，$Q_3$ 流过 $I_{D4}$，$Q_4$ 流过 $I_{D2}$：

$$V_X = |V_{EB1}| + |V_{EB2}|,\qquad V_Y = |V_{EB3}| + |V_{EB4}| + I_{D2}R_1,\qquad V_{out} = V_Y + I_{D2}R_2 .$$

由 $|V_{EB}| = V_T\ln(I_C/I_S)$（$I_S \propto$ 发射极面积），$V_X = V_Y$ 给出

$$I_{D2}R_1 = V_T\ln\left(n^2\,\frac{I_{D1}I_{D3}}{I_{D2}I_{D4}}\right),\qquad
V_{out} = |V_{EB3}| + |V_{EB4}| + \left(1 + \frac{R_2}{R_1}\right)I_{D2}R_1 .$$

$I_{D3}$ 和 $I_{D4}$ 与 $I_{D1}$ 和 $I_{D2}$ 的地位相同：$M_3$ 和 $M_4$ 位于环路之内。

### 第 2 步 — 阈值失配引起的电流比

在相同的 $|V_{GS}|$ 下，$M_1$、$M_2$、$M_3$ 的过驱动电压为 $V_{ov}$，$M_4$ 的过驱动电压为 $V_{ov} - \Delta V$，因此由平方律（square law）

$$\frac{I_{D3}}{I_{D4}} = \left(\frac{V_{ov}}{V_{ov} - \Delta V}\right)^2 \approx 1 + \frac{2\Delta V}{V_{ov}},\qquad I_{D1} = I_{D2} = I_{D3}.$$

### 第 3 步 — PTAT 电压的误差

由于 $I_{D1} = I_{D2}$：

$$I_{D2}R_1 = V_T\ln\left(n^2\frac{I_{D3}}{I_{D4}}\right) = 2V_T\ln n + V_T\ln\frac{I_{D3}}{I_{D4}} .$$

$Q_1$ 现在的电流比 $Q_3$ 大，这使 $V_X$ 相对于右侧堆叠升高，运放的响应是使 $R_1$ 两端的电压增大：PTAT 电压增大了 $V_T\ln(I_{D3}/I_{D4})$。

### 第 4 步 — 输出误差：主导项

**(a)** 由 $V_{out} = |V_{EB3}| + |V_{EB4}| + (1 + R_2/R_1)I_{D2}R_1$，只保留被放大的项：

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{I_{D3}}{I_{D4}} \approx \left(1 + \frac{R_2}{R_1}\right)\frac{2V_T\,\Delta V}{V_{ov}} .$$

**(b)** 由 $V_{out} = V_X + I_{D2}R_2 = V_X + (R_2/R_1)\,I_{D2}R_1$，且 $V_X$ 几乎不变（其各结流过的是阈值为标称值的器件所提供的电流）：

$$\Delta V_{out} \approx \frac{R_2}{R_1}\,V_T\ln\frac{I_{D3}}{I_{D4}} .$$

二者相差一个未被放大的 $V_T\ln(I_{D3}/I_{D4})$，在形式 (a) 中它被 $|V_{EB3}|$ 的**下降**抵消（$Q_3$ 现在的电流低于 $Q_4$），因此形式 (b) 略微更接近精确值。无论哪种形式，输出都**升高**。

### 第 5 步 — 完整的一阶结果

设 $r = I_{D3}/I_{D4}$，理想电流为 $I$（$IR_1 = 2V_T\ln n$），由第 3 步得 $I_{D2} = I(1 + \ln r/(2\ln n))$。于是
- $|V_{EB4}|$（$Q_4$ 流过 $I_{D2}$）升高 $V_T\ln(I_{D2}/I) \approx V_T\ln r/(2\ln n)$；
- $|V_{EB3}|$（$Q_3$ 流过 $I_{D4} = I_{D2}/r$）变化 $V_T\ln r/(2\ln n) - V_T\ln r$。

把这些加到被放大的项上：

$$
\begin{aligned}
\Delta V_{out} &\approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln r - V_T\ln r + \frac{V_T\ln r}{\ln n}\\
&= \left(\frac{R_2}{R_1} + \frac{1}{\ln n}\right)V_T\ln\frac{I_{D3}}{I_{D4}} .
\end{aligned}
$$

### 第 6 步 — 数值示例

$n = 8$，$1 + R_2/R_1 = 17.2/\ln8 \approx 8.27$，$V_{ov} = 0.2$ V，$\Delta V = 5$ mV，$V_T = 26$ mV：

$$
\begin{aligned}
\frac{I_{D3}}{I_{D4}} &= \left(\frac{0.200}{0.195}\right)^2 = 1.052,\qquad V_T\ln1.052 = 26\ \mathrm{mV}\times0.0506 = 1.32\ \mathrm{mV},\\
\text{form (a):}\quad \Delta V_{out} &\approx 8.27\times1.32\ \mathrm{mV} = 10.9\ \mathrm{mV},\\
\text{form (b):}\quad \Delta V_{out} &\approx 7.27\times1.32\ \mathrm{mV} = 9.6\ \mathrm{mV},\\
\text{complete:}\quad \Delta V_{out} &\approx \left(7.27 + \frac{1}{2.079}\right)\times1.32\ \mathrm{mV} = 7.75\times1.32\ \mathrm{mV} = 10.2\ \mathrm{mV}.
\end{aligned}
$$

对电路的精确数值求解给出约 10.2 mV。沟道长度调制在 $M_3$/$M_4$ 中是无害的，因为它们的漏极电压几乎相等；与之不同，阈值失配会直接改变它们的电流比，因而与 $M_1$/$M_2$ 中的失配同样有害。

### 结果

$I_{D3}/I_{D4} = [V_{ov}/(V_{ov} - \Delta V)]^2 \approx 1 + 2\Delta V/V_{ov}$。由于 $Q_1$（由 $M_3$ 供电）位于 X 支路，$Q_3$（由 $M_4$ 供电）位于 Y 支路，这个比值进入 PTAT 电压的方式与 $M_1$–$M_2$ 失配完全相同：$I_{D2}R_1 = 2V_T\ln n + V_T\ln(I_{D3}/I_{D4})$。输出升高

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{I_{D3}}{I_{D4}} \approx \left(1 + \frac{R_2}{R_1}\right)\frac{2V_T\,\Delta V}{V_{ov}}$$

（主导阶），或者等价地，利用 $V_{out} = V_X + I_{D2}R_2$ 且 $V_X$ 基本不变，得 $(R_2/R_1)V_T\ln(I_{D3}/I_{D4})$。完整的一阶结果为

$$\Delta V_{out} \approx \left(\frac{R_2}{R_1} + \frac{1}{\ln n}\right)V_T\ln\frac{I_{D3}}{I_{D4}} .$$

例（$n = 8$，$1 + R_2/R_1 \approx 8.3$，$V_{ov} = 0.2$ V，$\Delta V = 5$ mV）：三种形式分别给出 ≈ 10.9、9.6 和 10.2 mV。与沟道长度调制不同，$M_3$/$M_4$ 中的阈值失配与 $M_1$/$M_2$ 中的同样有害。

**常见错误。** 类比沟道长度调制，认为 $M_3$/$M_4$ 的误差可以忽略。无论漏极电压如何，阈值失配都会改变它们的电流比，而这个比值就在环路方程之中。

**常见错误。** 认为失配只改变 $|V_{EB3}|$，从而得到 $\Delta V_{out} = -V_T\ln(I_{D3}/I_{D4})$。$|V_{EB1}|$ 相对于 $|V_{EB3}|$ 的变化迫使 $R_1$ 两端出现新的电压，而该电压随后被放大。

**常见错误。** 把 $V_T\ln(I_{D3}/I_{D4}) \approx 1.3$ mV 当作输出误差。它位于 $R_1$ 上的 PTAT 电压中，而输出会把该电压乘以 $1 + R_2/R_1$（在另一种拆分中则为 $R_2/R_1$）。
