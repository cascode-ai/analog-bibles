# 详细步骤 - R539

**思路。** 在栅极电压相同时，阈值失配使 $M_1$ 和 $M_2$ 的电流不相等；平方律（square law）给出电流比。环路方程 $V_X = V_Y$ 把这个比值转化为 $R_1$ 上 PTAT 电压的误差，而输出将其放大 $1 + R_2/R_1$ 倍。较小的、未被放大的发射极-基极电压变化最后再加上。

### 第 1 步 — 电路关系

忽略基极电流，$Q_2$ 流过 $I_{D1}$，$Q_1$ 流过 $I_{D3}$，$Q_4$ 流过 $I_{D2}$，$Q_3$ 流过 $I_{D4}$：

$$V_X = |V_{EB1}| + |V_{EB2}|,\qquad V_Y = |V_{EB3}| + |V_{EB4}| + I_{D2}R_1,\qquad V_{out} = V_Y + I_{D2}R_2 ,$$

其中 $|V_{EB}| = V_T\ln(I_C/I_S)$，$I_S \propto$ 发射极面积。运放强制 $V_X = V_Y$：

$$V_T\ln\frac{I_{D1}}{I_S} + V_T\ln\frac{I_{D3}}{I_S} = V_T\ln\frac{I_{D2}}{nI_S} + V_T\ln\frac{I_{D4}}{nI_S} + I_{D2}R_1
\quad\Longrightarrow\quad I_{D2}R_1 = V_T\ln\left(n^2\,\frac{I_{D1}I_{D3}}{I_{D2}I_{D4}}\right),$$

输出为

$$V_{out} = |V_{EB3}| + |V_{EB4}| + \left(1 + \frac{R_2}{R_1}\right)I_{D2}R_1 .$$

理想情况下所有电流都相等，$I_{D2}R_1 = 2V_T\ln n$，PTAT 项为 $2(1 + R_2/R_1)V_T\ln n$。

### 第 2 步 — 阈值失配引起的电流比

四个 PMOS 器件的 $|V_{GS}|$ 都相同。$M_1$、$M_3$、$M_4$ 的过驱动电压为 $V_{ov}$，而 $M_2$ 只有 $V_{ov} - \Delta V$，因此由平方律

$$\frac{I_{D1}}{I_{D2}} = \frac{V_{ov}^2}{(V_{ov} - \Delta V)^2} = \left(1 - \frac{\Delta V}{V_{ov}}\right)^{-2} \approx 1 + \frac{2\Delta V}{V_{ov}}\qquad(\Delta V \ll V_{ov}),$$

即 $\Delta I_D/I_D = g_m\Delta V/I_D$，其中 $g_m/I_D = 2/V_{ov}$。此外 $I_{D3} = I_{D4} = I_{D1}$。

### 第 3 步 — PTAT 电压的误差

由于 $I_{D3} = I_{D4}$，环路方程变为

$$I_{D2}R_1 = V_T\ln\left(n^2\frac{I_{D1}}{I_{D2}}\right) = 2V_T\ln n + V_T\ln\frac{I_{D1}}{I_{D2}} .$$

$R_1$ 两端的电压增大了 $V_T\ln(I_{D1}/I_{D2})$：$Q_2$ 现在的工作电流高于 $Q_4$，因此失配的作用恰好相当于发射极面积比的改变。

### 第 4 步 — 输出误差：主导的（被放大的）项

$V_{out}$ 中的 PTAT 项为 $(1 + R_2/R_1)I_{D2}R_1$，因此

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{I_{D1}}{I_{D2}} \approx \left(1 + \frac{R_2}{R_1}\right)\frac{2V_T\,\Delta V}{V_{ov}} .$$

输出**升高**：阈值较大的 $M_2$ 电流较小，这使 PTAT 电压升高。对于典型的 $1 + R_2/R_1 \approx 8$ 和 $V_{ov} = 0.2$ V，误差约为 $2\,\Delta V$。

### 第 5 步 — 完整的一阶结果（包括未被放大的项）

支路电流本身也会变化，使 $V_{out}$ 中的发射极-基极电压发生偏移。设 $r = I_{D1}/I_{D2}$，理想电流为 $I$（$IR_1 = 2V_T\ln n$）：
- 由第 3 步，$I_{D2} = I\left(1 + \dfrac{\ln r}{2\ln n}\right)$，因此 $|V_{EB4}|$（$Q_4$ 流过 $I_{D2}$）升高 $V_T\ln(I_{D2}/I) \approx V_T\ln r/(2\ln n)$。
- $Q_3$ 流过 $I_{D4} = rI_{D2}$，因此 $|V_{EB3}|$ 升高 $V_T\ln r + V_T\ln r/(2\ln n)$。

把这些加到被放大的项上：

$$
\begin{aligned}
\Delta V_{out} &\approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln r + V_T\ln r + \frac{V_T\ln r}{\ln n}\\
&= \left(2 + \frac{R_2}{R_1} + \frac{1}{\ln n}\right)V_T\ln\frac{I_{D1}}{I_{D2}} .
\end{aligned}
$$

### 第 6 步 — 数值示例

$n = 8$，按零温度系数（temperature coefficient）取 $1 + R_2/R_1 = 17.2/\ln8 \approx 8.27$，$V_{ov} = 0.2$ V，$\Delta V = 5$ mV，$V_T = 26$ mV：

$$
\begin{aligned}
\frac{I_{D1}}{I_{D2}} &= \left(\frac{0.200}{0.195}\right)^2 = 1.052,\qquad \ln1.052 = 0.0506,\\
\text{dominant term:}\quad \Delta V_{out} &\approx 8.27\times26\ \mathrm{mV}\times0.0506 = 10.9\ \mathrm{mV}\\
&\left(\text{linearized: } 8.27\times\frac{2\times26\ \mathrm{mV}\times5\ \mathrm{mV}}{200\ \mathrm{mV}} = 10.8\ \mathrm{mV}\right),\\
\text{complete:}\quad \Delta V_{out} &\approx \left(2 + 7.27 + \frac{1}{2.079}\right)\times26\ \mathrm{mV}\times0.0506 = 9.75\times1.32\ \mathrm{mV} = 12.8\ \mathrm{mV}.
\end{aligned}
$$

对电路方程的精确数值求解给出 12.8 mV，证实了完整的一阶表达式：5-mV 的阈值失配会产生超过 10 mV 的输出误差。

### 结果

失配使 $I_{D1}/I_{D2} = [V_{ov}/(V_{ov} - \Delta V)]^2 \approx 1 + 2\Delta V/V_{ov}$。通过 $V_X = V_Y$，这在 $R_1$ 上的 PTAT 电压中加入了 $V_T\ln(I_{D1}/I_{D2})$，而输出将其放大：

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{I_{D1}}{I_{D2}} \approx \left(1 + \frac{R_2}{R_1}\right)\frac{2V_T\,\Delta V}{V_{ov}}$$

（主导的、被放大的项；$V_{out}$ 升高）。若计入堆叠的发射极-基极电压未被放大的升高，完整的一阶结果为

$$\Delta V_{out} \approx \left(2 + \frac{R_2}{R_1} + \frac{1}{\ln n}\right)V_T\ln\frac{I_{D1}}{I_{D2}} .$$

例（$n = 8$，$1 + R_2/R_1 \approx 8.3$，$V_{ov} = 0.2$ V，$\Delta V = 5$ mV）：≈ 10.8 mV（主导项），≈ 12.8 mV（完整结果）。

**常见错误。** 认为运放使 $V_X$ 和 $V_Y$ 相等，所以没有误差。运放使**电压**相等，但支路**电流**不同，因此发射极-基极电压不同，$R_1$ 两端的电压必须改变以作补偿。

**常见错误。** 把 $\Delta V$ 当作运放失调，即 $\Delta V_{out} = (1 + R_2/R_1)\Delta V$。失配是通过电流比起作用的，因此它在 $R_1$ 上的影响是 $V_T\ln(I_{D1}/I_{D2}) \approx (2V_T/V_{ov})\Delta V$，这里约为 $\Delta V$ 的四分之一。

**常见错误。** 漏掉 $I_{D1}/I_{D2} \approx 1 + 2\Delta V/V_{ov}$ 中的因子 2，或者把每个堆叠当作单个结（$I_{D2}R_1 = V_T\ln n$，而不是 $2V_T\ln n$）。
