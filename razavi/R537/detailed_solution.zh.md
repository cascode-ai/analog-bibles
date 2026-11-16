# 详细步骤 - R537

**思路。** 把 $V_X$ 和 $V_Y$ 写成发射极-基极电压之和（再加上 $R_1$ 上的压降），由运放强制 $V_X = V_Y$，解出 $R_1$ 两端的电压：它取决于四个支路电流之比的对数。沟道长度调制使 $M_1$ 和 $M_2$ 流过不同的电流，因为它们的漏极分别位于 $V_X$ 和 $V_{out}$；这个比值进入 $R_1$ 上的 PTAT 电压，而输出把该电压放大 $1 + R_2/R_1$ 倍。

### 第 1 步 — 各支路电压

忽略基极电流，$Q_2$ 流过 $I_{D1}$，$Q_1$ 流过 $I_{D3}$，$Q_4$ 流过 $I_{D2}$，$Q_3$ 流过 $I_{D4}$，因此

$$V_X = |V_{EB2}| + |V_{EB1}|,\qquad V_Y = |V_{EB4}| + |V_{EB3}| + I_{D2}R_1,\qquad V_{out} = V_Y + I_{D2}R_2 ,$$

并且运放强制 $V_X = V_Y$。由 $|V_{EB}| = V_T\ln(I_C/I_S)$，$Q_1$、$Q_2$ 的饱和电流为 $I_S$，$Q_3$、$Q_4$ 的饱和电流为 $nI_S$。

### 第 2 步 — $R_1$ 两端电压的一般表达式

令 $V_X = V_Y$：

$$V_T\ln\frac{I_{D1}}{I_S} + V_T\ln\frac{I_{D3}}{I_S} = V_T\ln\frac{I_{D2}}{nI_S} + V_T\ln\frac{I_{D4}}{nI_S} + I_{D2}R_1 ,$$

$$I_{D2}R_1 = V_T\ln\frac{I_{D1}I_{D3}}{I_S^2} - V_T\ln\frac{I_{D2}I_{D4}}{n^2I_S^2} = V_T\ln\left(n^2\,\frac{I_{D1}I_{D3}}{I_{D2}I_{D4}}\right).$$

输出为

$$V_{out} = |V_{EB3}| + |V_{EB4}| + \left(1 + \frac{R_2}{R_1}\right)I_{D2}R_1 .$$

当四个电流都相等时（理想情况），得到常见的堆叠式带隙结果：

$$I_{D2}R_1 = 2V_T\ln n,\qquad V_{out,ideal} = |V_{EB3}| + |V_{EB4}| + 2\left(1 + \frac{R_2}{R_1}\right)V_T\ln n .$$

### 第 3 步 — $M_1$ 和 $M_2$ 中沟道长度调制的影响

四个 PMOS 器件的 $V_{SG}$ 都相同。设 $I_0$ 为不考虑沟道长度调制时的电流：
- $M_3$、$M_4$：$I_{D3} = I_{D4} = I_0$。
- $M_1$（漏极接 X）：$|V_{DS1}| = V_{DD} - V_X$，$I_{D1} = I_0\left[1 + \lambda(V_{DD} - V_X)\right]$。
- $M_2$（漏极接 $V_{out}$）：$|V_{DS2}| = V_{DD} - V_{out}$，$I_{D2} = I_0\left[1 + \lambda(V_{DD} - V_{out})\right]$。

$V_{out}$ 比 $V_X$ 高出 $R_2$ 上的压降，因此

$$\frac{I_{D1}}{I_{D2}} = \frac{1 + \lambda(V_{DD} - V_X)}{1 + \lambda(V_{DD} - V_{out})} > 1 .$$

运放使 X 和 Y 相等，但不能使 $M_1$ 和 $M_2$ 的漏极电压相等。

### 第 4 步 — PTAT 电压与输出误差

由于 $I_{D3} = I_{D4}$，第 2 步给出

$$I_{D2}R_1 = V_T\ln\left(n^2\frac{I_{D1}}{I_{D2}}\right) = 2V_T\ln n + V_T\ln\frac{I_{D1}}{I_{D2}} .$$

PTAT 电压产生了误差 $V_T\ln(I_{D1}/I_{D2})$，输出将其乘以 $1 + R_2/R_1$。在一阶近似下（忽略由电流大小略有不同所引起的、未被放大的 $|V_{EB3}| + |V_{EB4}|$ 的微小变化）：

$$\boxed{\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{1 + \lambda(V_{DD} - V_X)}{1 + \lambda(V_{DD} - V_{out})}}$$

把该比值写成 $1 + \dfrac{\lambda(V_{out} - V_X)}{1 + \lambda(V_{DD} - V_{out})}$，并利用 $\ln(1 + \epsilon) \approx \epsilon$：

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\,\frac{\lambda\,(V_{out} - V_X)}{1 + \lambda(V_{DD} - V_{out})}.$$

由于 $I_{D1} > I_{D2}$，误差为**正**（$V_{out}$ 升高）；又因为 $V_{out} - V_X = I_{D2}R_2$ 的量级为 1 V，且结果被放大 $1 + R_2/R_1$ 倍，所以误差很大。（若写成 $V_{out} = V_X + (R_2/R_1)\,I_{D2}R_1$ 并认为 $V_X$ 固定，则放大因子为 $R_2/R_1$；二者之差是一个未被放大的项，与被忽略的 $V_{EB}$ 偏移同一量级。）

### 第 5 步 — 数值示例

取 $n = 8$，并按零温度系数选择 $R_2/R_1$：每个 $V_{EB}$ 的漂移约为 $-1.5$ mV/K，$V_T/T \approx 0.087$ mV/K，因此 $(1 + R_2/R_1)\ln n \approx 17.2$，于是

$$1 + \frac{R_2}{R_1} = \frac{17.2}{\ln8} = \frac{17.2}{2.079} = 8.27 .$$

单位面积器件的 $|V_{EB}| \approx 0.78$ V：

$$
\begin{aligned}
V_X &= 2\times0.78 = 1.56\ \mathrm{V},\\
|V_{EB3}| = |V_{EB4}| &= 0.78 - V_T\ln8 = 0.78 - 0.026\times2.079 = 0.726\ \mathrm{V},\\
V_{out} &= 2\times0.726 + 8.27\times2\times0.026\times2.079 = 1.452 + 0.894 = 2.35\ \mathrm{V}.
\end{aligned}
$$

取 $\lambda = 0.2\ \mathrm{V^{-1}}$，$V_{DD} = 3$ V：

$$
\begin{aligned}
\frac{I_{D1}}{I_{D2}} &= \frac{1 + 0.2(3 - 1.56)}{1 + 0.2(3 - 2.35)} = \frac{1.288}{1.130} = 1.139,\\
\Delta V_{out} &\approx 8.27\times26\ \mathrm{mV}\times\ln1.139 = 8.27\times26\ \mathrm{mV}\times0.130 = 28\ \mathrm{mV}.
\end{aligned}
$$

计入未被放大的 $V_{EB}$ 偏移的完整数值解约为 27.6 mV，因此一阶公式是准确的。约 28 mV 的误差超过了 2.35-V 输出的 1 %，这就是 $M_1$/$M_2$ 最好采用长沟道或共源共栅（cascode）电流源的原因。

### 结果

$M_1$ 和 $M_2$ 的漏源电压不同，分别为 $V_{DD} - V_X$ 和 $V_{DD} - V_{out}$，因此存在沟道长度调制时 $I_{D1}/I_{D2} = [1 + \lambda(V_{DD} - V_X)]/[1 + \lambda(V_{DD} - V_{out})] > 1$，而 $I_{D3} = I_{D4}$。$R_1$ 上的 PTAT 电压变为 $2V_T\ln n + V_T\ln(I_{D1}/I_{D2})$，输出误差为

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{1 + \lambda(V_{DD} - V_X)}{1 + \lambda(V_{DD} - V_{out})} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\,\frac{\lambda(V_{out} - V_X)}{1 + \lambda(V_{DD} - V_{out})},$$

该误差为正（$V_{out}$ 升高）。例：$n = 8$，$1 + R_2/R_1 \approx 8.3$，$V_X \approx 1.56$ V，$V_{out} \approx 2.35$ V，$\lambda = 0.2\ \mathrm{V^{-1}}$，误差约为 28 mV。

**常见错误。** 认为运放强制 $V_X = V_Y$，所以没有误差。$M_1$ 和 $M_2$ 的漏极分别位于 X 和 $V_{out}$，二者相差 $R_2$ 上的压降，因此它们的电流不同。

**常见错误。** 不把误差放大，即给出 $V_T\ln(I_{D1}/I_{D2})$（这里只有约 3.4 mV）。它出现在 $R_1$ 上的 PTAT 电压中，而输出会把该电压乘以 $1 + R_2/R_1$。

**常见错误。** 在输出端直接加上类似 $\lambda V_{out}$ 的项。PMOS 器件只通过其电流的**比值**影响输出，而该比值是以对数形式进入的。
