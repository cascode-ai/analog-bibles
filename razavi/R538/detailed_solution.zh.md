# 详细步骤 - R538

**思路。** 把每条支路的电压写成发射极-基极电压之和（再加上 $R_1$ 上的压降），令 $V_X = V_Y$，并跟踪 PMOS 电流如何进入结果。$M_3$ 和 $M_4$ 的漏极位于 $Q_1$ 和 $Q_3$ 的发射极，比地高一个 $V_{EB}$，而且两者电压几乎相同，因此它们的电流**比值**几乎不变，被放大的 PTAT 误差很小。然而它们的电流**大小**增大了，这会直接使发射极-基极电压升高。下面分别计算这两个效应并相加。

### 第 1 步 — 电路关系

忽略基极电流，$Q_1$ 流过 $I_{D3}$，$Q_2$ 流过 $I_{D1}$，$Q_3$ 流过 $I_{D4}$，$Q_4$ 流过 $I_{D2}$：

$$V_X = |V_{EB1}| + |V_{EB2}|,\qquad V_Y = |V_{EB3}| + |V_{EB4}| + I_{D2}R_1,\qquad V_{out} = V_Y + I_{D2}R_2 ,$$

其中 $|V_{EB}| = V_T\ln(I_C/I_S)$，饱和电流按发射极面积取 $I_S$ 或 $nI_S$。令 $V_X = V_Y$ 并合并对数项，得到环路方程

$$I_{D2}R_1 = V_T\ln\left(n^2\,\frac{I_{D1}I_{D3}}{I_{D2}I_{D4}}\right),$$

输出为

$$V_{out} = |V_{EB3}| + |V_{EB4}| + \left(1 + \frac{R_2}{R_1}\right)I_{D2}R_1 .$$

理想情况下（所有 PMOS 电流都等于 $I$）：$IR_1 = 2V_T\ln n$，$V_{out} = |V_{EB3}| + |V_{EB4}| + 2(1 + R_2/R_1)V_T\ln n$。

### 第 2 步 — 仅 $M_3$ 和 $M_4$ 存在沟道长度调制时的 PMOS 电流

设 $I_D = I_0(1 + \lambda|V_{DS}|)$，其中 $I_0$ 为不考虑沟道长度调制时的电流：
- $M_1$、$M_2$：$I_{D1} = I_{D2} = I_0$。
- $M_3$（漏极接 $Q_1$ 的发射极，$|V_{DS3}| = V_{DD} - |V_{EB1}|$）：
$$I_{D3} = I_0\,a,\qquad a = 1 + \lambda(V_{DD} - |V_{EB1}|).$$
- $M_4$（漏极接 $Q_3$ 的发射极，$|V_{DS4}| = V_{DD} - |V_{EB3}|$）：
$$I_{D4} = I_0\,b,\qquad b = 1 + \lambda(V_{DD} - |V_{EB3}|).$$

$a$ 和 $b$ 都很大（$\lambda = 0.2\ \mathrm{V^{-1}}$ 时 ≈ 1.44），但几乎相等。

### 第 3 步 — 效应 1：被放大的 PTAT 项（很小）

环路方程变为

$$I_0R_1 = V_T\ln\left(n^2\frac{I_0\cdot I_0a}{I_0\cdot I_0b}\right) = 2V_T\ln n + V_T\ln\frac ab .$$

两个漏极电压相差 $|V_{EB1}| - |V_{EB3}| \approx V_T\ln n$（$Q_3$ 的面积是 $n$ 倍，而电流几乎相同；$n = 8$ 时 ≈ 54 mV），因此

$$\frac ab = \frac{1 + \lambda(V_{DD} - |V_{EB1}|)}{1 + \lambda(V_{DD} - |V_{EB3}|)} \approx 1 - \frac{\lambda V_T\ln n}{1 + \lambda(V_{DD} - |V_{EB}|)} .$$

$M_4$（漏极电压较低）的电流比 $M_3$ 略**大**，因此 PTAT 电压减小 $V_T\ln(b/a)$，输出减小其 $1 + R_2/R_1$ 倍：

$$\Delta V_{out,1} = \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac ab \approx -\left(1 + \frac{R_2}{R_1}\right)\frac{\lambda V_T^2\ln n}{1 + \lambda(V_{DD} - |V_{EB}|)} ,$$

这一项很小，因为漏极电压差只有 $V_T\ln n$，而不是 $M_1$ 和 $M_2$ 存在沟道长度调制时出现的约 1 V。

### 第 4 步 — 效应 2：$|V_{EB3}|$ 未被放大的升高（占主导）

$Q_1$ 和 $Q_3$ 现在的工作电流分别是 $Q_2$ 和 $Q_4$ 的 $a$ 倍和 $b$ 倍，因此输出中的 $|V_{EB3}|$ 升高

$$\Delta V_{out,2} = V_T\ln b = V_T\ln\left[1 + \lambda(V_{DD} - |V_{EB3}|)\right].$$

它不被放大，但 $\ln b$ 的量级为 0.4，因此超过了效应 1。（$I_0$ 本身按因子 $1 + \ln(a/b)/(2\ln n)$ 变化，使 $|V_{EB3}| + |V_{EB4}|$ 再偏移 $V_T\ln(a/b)/\ln n$，只有零点几毫伏。）

### 第 5 步 — 总误差

$$\boxed{\Delta V_{out} \approx V_T\ln\left[1 + \lambda(V_{DD} - |V_{EB3}|)\right] + \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{1 + \lambda(V_{DD} - |V_{EB1}|)}{1 + \lambda(V_{DD} - |V_{EB3}|)}}$$

或者把比值线性化，

$$\Delta V_{out} \approx V_T\ln\left[1 + \lambda(V_{DD} - |V_{EB}|)\right] - \left(1 + \frac{R_2}{R_1}\right)\frac{\lambda V_T^2\ln n}{1 + \lambda(V_{DD} - |V_{EB}|)} .$$

（把输出拆分为 $V_{out} = V_X + I_0R_2$，得到 $V_T\ln a + (R_2/R_1)V_T\ln(a/b)$，总和相同。）

**数值示例。** $n = 8$，按零温度系数（temperature coefficient）取 $1 + R_2/R_1 = 17.2/\ln8 \approx 8.27$，$|V_{EB1}| \approx 0.78$ V，$|V_{EB3}| \approx 0.78 - V_T\ln8 = 0.726$ V，$\lambda = 0.2\ \mathrm{V^{-1}}$，$V_{DD} = 3$ V：

$$
\begin{aligned}
a &= 1 + 0.2(3 - 0.78) = 1.444, \qquad b = 1 + 0.2(3 - 0.726) = 1.455,\\
\Delta V_{out,2} &= 26\ \mathrm{mV}\times\ln1.455 = 26\ \mathrm{mV}\times0.375 = +9.7\ \mathrm{mV},\\
\Delta V_{out,1} &= 8.27\times26\ \mathrm{mV}\times\ln\frac{1.444}{1.455} = 8.27\times26\ \mathrm{mV}\times(-0.0075) = -1.6\ \mathrm{mV},\\
\Delta V_{out} &\approx +9.7 - 1.6 = +8\ \mathrm{mV}.
\end{aligned}
$$

对电路的完整数值求解给出 +8.0 mV（$\lambda = 0.1\ \mathrm{V^{-1}}$ 时为 +4.3 mV）。若改为 $M_1$ 和 $M_2$ 存在沟道长度调制，它们的漏极相差约 0.8 V，电流比变化约 14 %，被放大的误差约为 28 mV；$M_3$/$M_4$ 中的沟道长度调制则温和得多。

### 结果

设 $a = 1 + \lambda(V_{DD} - |V_{EB1}|)$，$b = 1 + \lambda(V_{DD} - |V_{EB3}|)$（$M_3$ 和 $M_4$ 的漏极分别位于 $|V_{EB1}|$ 和 $|V_{EB3}|$），由环路得 $I_0R_1 = 2V_T\ln n + V_T\ln(a/b)$，并且

$$\Delta V_{out} \approx V_T\ln\left[1 + \lambda(V_{DD} - |V_{EB3}|)\right] + \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{1 + \lambda(V_{DD} - |V_{EB1}|)}{1 + \lambda(V_{DD} - |V_{EB3}|)} \approx V_T\ln\left[1 + \lambda(V_{DD} - |V_{EB}|)\right] - \left(1 + \frac{R_2}{R_1}\right)\frac{\lambda V_T^2\ln n}{1 + \lambda(V_{DD} - |V_{EB}|)} .$$

误差为正，且只有几毫伏（$n = 8$、$\lambda = 0.2\ \mathrm{V^{-1}}$ 时 ≈ +9.7 − 1.6 ≈ +8 mV），远小于 $M_1$ 和 $M_2$ 存在沟道长度调制时得到的 ≈ 28 mV。它主要来自发射极-基极电压未被放大的升高，而不是 PTAT 项。

**常见错误。** 把 $M_3$ 和 $M_4$ 的漏极当作位于 $V_X$ 和 $V_{out}$（像 $M_1$ 和 $M_2$ 那样），从而预测出一个很大的、被放大的误差。它们位于 $Q_1$ 和 $Q_3$ 的发射极，二者只相差 $\approx V_T\ln n$。

**常见错误。** 只给出很小的负 PTAT 项。$Q_1$ 和 $Q_3$ 的电流比 $Q_2$ 和 $Q_4$ 大约 40 %，这使 $|V_{EB3}|$ 升高约 10 mV，并在误差中占主导。

**常见错误。** 把沟道长度调制因子 $\lambda|V_{DS}| \approx 0.44$ 乘以 $1 + R_2/R_1$。进入 PTAT 电压的只有**比值** $a/b$；公共因子只通过对数起作用，且不被放大。
