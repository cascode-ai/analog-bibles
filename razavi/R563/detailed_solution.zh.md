# 详细步骤 - R563

**思路。** 在 $V_X = V_Y = |V_{BE1}|$ 的条件下，分别在 X 和 Y 处列 KCL。只有当两个集电极电流保持固定的、与温度无关的比值时，差值 $|V_{BE1}| - |V_{BE2}|$ 才是纯粹的 PTAT 电压；施加这一条件即可用 $R_2$ 确定 $R_3$。其余部分就是通常的零 TC 平衡，只是电流密度之比由 $n$ 变为 $nK$。

### 第 1 步 — 在 X 和 Y 处列 KCL

$M_3$ 的宽度是 $M_4$ 的 $K$ 倍且 $V_{GS}$ 相同，因此 $|I_{D3}| = K|I_{D4}|$；$M_5$ 把 $|I_{D4}|$ 复制到 $R_4$ 中，因此 $V_{BG} = |I_{D4}|R_4$。由于 $V_Y = V_X = |V_{BE1}|$，$R_3$ 和 $R_2$ 中分别流过 CTAT 电流 $|V_{BE1}|/R_3$ 和 $|V_{BE1}|/R_2$。在 X 处，$M_3$ 的电流分流到 $Q_1$ 和 $R_3$；在 Y 处，$M_4$ 的电流分流到 $R_1$–$Q_2$ 支路和 $R_2$：

$$K|I_{D4}| = I_{C1} + \frac{|V_{BE1}|}{R_3}, \qquad |I_{D4}| = I_{C2} + \frac{|V_{BE1}|}{R_2}.$$

### 第 2 步 — 集电极电流之比与 $R_3$ 的条件

消去 $|I_{D4}|$（将 Y 处的方程乘以 $K$）：

$$
\begin{aligned}
K I_{C2} + \frac{K|V_{BE1}|}{R_2} &= I_{C1} + \frac{|V_{BE1}|}{R_3}\\
I_{C1} &= K I_{C2} + |V_{BE1}|\left(\frac{K}{R_2} - \frac{1}{R_3}\right),
\end{aligned}
$$

$$\frac{I_{C1}}{I_{C2}} = K + \frac{|V_{BE1}|}{I_{C2}}\left(\frac{K}{R_2} - \frac{1}{R_3}\right).$$

第二项的分子是 CTAT 的，分母近似是 PTAT 的，因此它随温度变化很大；这样 $\Delta V_{BE} = V_T\ln(\text{density ratio})$ 就不再与 $T$ 成正比。因此括号内必须为零：

$$\frac{K}{R_2} = \frac{1}{R_3}\quad\Longrightarrow\quad \boxed{R_3 = \frac{R_2}{K}}$$

此时 $I_{C1} = KI_{C2}$ 严格成立：除了 $R_1$ 和面积比之外，X 一侧是 Y 一侧按 $K$ 倍放大的副本（$M_3$ 相当于 $K$ 个 $M_4$，$R_3$ 相当于 $K$ 个 $R_2$ 并联）。

### 第 3 步 — PTAT 关系

从 Y 经 $R_1$ 和 $Q_2$ 到地列 KVL，其中 $V_Y = |V_{BE1}|$，$I_{S2} = nI_S$：

$$|V_{BE1}| = I_{C2}R_1 + |V_{BE2}|,$$

$$
\begin{aligned}
I_{C2}R_1 = |V_{BE1}| - |V_{BE2}| &= V_T\ln\frac{I_{C1}}{I_S} - V_T\ln\frac{I_{C2}}{nI_S}\\
&= V_T\ln\left(n\,\frac{I_{C1}}{I_{C2}}\right) = V_T\ln(nK).
\end{aligned}
$$

因此 $I_{C2} = V_T\ln(nK)/R_1$ 是 PTAT 电流，而电流密度之比现在为 $nK$：与 $Q_2$ 相比，$Q_1$ 的面积为 $1/n$，**并且**电流为 $K$ 倍。

### 第 4 步 — 输出电压与零 TC 条件

由 Y 处的方程，

$$|I_{D4}| = \frac{V_T\ln(nK)}{R_1} + \frac{|V_{BE1}|}{R_2} = \frac{1}{R_2}\left[|V_{BE1}| + \frac{R_2}{R_1}V_T\ln(nK)\right],$$

$$V_{BG} = |I_{D4}|R_4 = \frac{R_4}{R_2}\left[|V_{BE1}| + \frac{R_2}{R_1}V_T\ln(nK)\right].$$

方括号内是约 1.2 V 的带隙电压之和，再由 $R_4/R_2$ 进行缩放，因此这种结构可以在低电源电压下输出低于 1.2 V 的电压；若所有电阻采用同一种材料，电阻的 TC 会在比值中相互抵消。零 TC 条件：

$$\frac{\partial V_{BG}}{\partial T} = \frac{R_4}{R_2}\left[\frac{\partial|V_{BE1}|}{\partial T} + \frac{R_2}{R_1}\cdot\frac{k}{q}\ln(nK)\right] = 0 .$$

取 $\partial|V_{BE1}|/\partial T = -1.5$ mV/K、$k/q \approx 0.087$ mV/K：

$$\frac{R_2}{R_1}\ln(nK) = \frac{1.5}{0.087} \approx 17.2 .$$

**例。** 取 $n = 8$：

- $K = 1$（原电路）：$\ln 8 = 2.08$，所以 $R_2/R_1 = 17.2/2.08 = 8.3$，$R_3 = R_2$。
- $K = 2$：$\ln 16 = 2.77$，所以 $R_2/R_1 = 17.2/2.77 = 6.2$，$R_3 = R_2/2$。

然后由 $R_4$ 设定输出电平，$V_{BG} \approx (R_4/R_2)\times1.2$ V。

**附带的好处。** 运放的失调 $V_{os}$ 叠加在 $R_1$ 两端的电压上，并被放大 $R_4/R_1 = (R_4/R_2)(R_2/R_1)$ 倍后出现在 $V_{BG}$ 上。更大的密度比 $nK$ 允许采用更小的 $R_2/R_1$（例中为 6.2 而不是 8.3），因此失调被放大得更少。

### 结果

选取

$$R_3 = \frac{R_2}{K}\qquad\text{and}\qquad\frac{R_2}{R_1}\ln(nK) \approx 17.2 .$$

于是 $I_{C1} = KI_{C2}$，$I_{C2} = V_T\ln(nK)/R_1$，

$$|I_{D4}| = \frac{1}{R_2}\left[|V_{BE1}| + \frac{R_2}{R_1}V_T\ln(nK)\right], \qquad V_{BG} = \frac{R_4}{R_2}\left[|V_{BE1}| + \frac{R_2}{R_1}V_T\ln(nK)\right].$$

由于 $V_X \approx V_Y \approx |V_{BE1}|$，KCL 在 X 处给出 $K|I_{D4}| = I_{C1} + |V_{BE1}|/R_3$，在 Y 处给出 $|I_{D4}| = I_{C2} + |V_{BE1}|/R_2$。要使 $|V_{BE1}| - |V_{BE2}|$ 为 PTAT，集电极电流之比必须与温度无关，这要求 $K|V_{BE1}|/R_2 = |V_{BE1}|/R_3$，即 $R_3 = R_2/K$。此时密度比变为 $nK$，而更大的密度比还能降低对运放失调的敏感度。

**常见错误。** 把关系弄反，选取 $R_3 = KR_2$。$M_3$ 提供 $K$ 倍的电流，因此 X 处的电阻在相同电压下必须吸收 $K$ 倍的电流：应该是**更小**的电阻，即 $R_2/K$。

**常见错误。** 沿用原设计中的 $R_2 = R_3$。此时 $I_{C1} = KI_{C2} + (K - 1)|V_{BE1}|/R_2$，集电极电流之比中出现 CTAT 项，$\Delta V_{BE}$ 不再是 PTAT 的。

**常见错误。** 在零 TC 条件中使用 $\ln n$ 而不是 $\ln(nK)$。PTAT 电压取决于电流**密度**之比，其中既包括面积比 $n$，也包括电流比 $K$。
