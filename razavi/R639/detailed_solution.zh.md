# 详细步骤 - R639

**思路。** 向栅极节点注入一个小测试电流，分别在栅极节点和源极节点列 KCL 方程，消去源极电压，得到闭环传递函数。其分母与考毕兹振荡器的三次多项式相同，只是用 $L_1$ 代替了 $L_P$；令 $s = j\omega$ 即可得到频率和起振条件。最后用负电阻（negative resistance）论证来验证结果。

### 第 1 步 — 小信号模型（small-signal model）

把 $M_1$ 的栅极记为节点 G，源极记为节点 S。漏极为交流地。于是：

- 从 G 到地：$Y_L(s) = \dfrac{1}{L_1s} + \dfrac{1}{R_P}$；
- $C_1$ 接在 G 与 S 之间，$C_2$ 从 S 接到地；
- $M_1$：从漏极（交流地）流入 S 的受控电流 $g_m(V_G - V_S)$；
- 向 G 注入测试电流 $I_{in}$（令 $I_{in} = 0$ 即恢复原电路）。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 源极节点 S 的 KCL

$M_1$ 和 $C_1$ 向 S 送入电流，$C_2$ 把它导入地：

$$g_m(V_G - V_S) + C_1s(V_G - V_S) = C_2sV_S \quad\Longrightarrow\quad (V_G - V_S)(g_m + C_1s) = C_2sV_S .$$

展开得 $V_G(g_m + C_1s) = V_S(g_m + C_1s + C_2s)$，因此

$$V_S = \frac{g_m + C_1s}{g_m + (C_1 + C_2)s}\,V_G ,$$

同时驱动 $M_1$ 和 $C_1$ 的栅源电压为

$$V_G - V_S = V_G\left[1 - \frac{g_m + C_1s}{g_m + (C_1 + C_2)s}\right] = \frac{C_2s}{g_m + (C_1 + C_2)s}\,V_G .$$

### 第 3 步 — 栅极节点 G 的 KCL

$I_{in}$ 经 $Y_L$ 和 $C_1$ 离开 G：

$$I_{in} = Y_LV_G + C_1s(V_G - V_S).$$

代入 $V_G - V_S$：

$$
\begin{aligned}
I_{in} &= V_G\left[Y_L + \frac{C_1C_2s^2}{g_m + (C_1 + C_2)s}\right]\\
&= V_G\,\frac{Y_L\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2}{g_m + (C_1 + C_2)s},
\end{aligned}
$$

$$\frac{V_G}{I_{in}} = \frac{g_m + (C_1 + C_2)s}{Y_L\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2}.$$

### 第 4 步 — 以多项式之比表示的闭环传递函数

分子和分母同乘 $R_PL_1s$，并利用 $R_PL_1s\,Y_L = R_P + L_1s$：

$$\frac{V_G}{I_{in}} = \frac{R_PL_1s\left[g_m + (C_1 + C_2)s\right]}{(R_P + L_1s)\left[g_m + (C_1 + C_2)s\right] + R_PL_1C_1C_2s^3}.$$

由于

$$(R_P + L_1s)\left[g_m + (C_1 + C_2)s\right] = g_mR_P + \left[R_P(C_1 + C_2) + g_mL_1\right]s + L_1(C_1 + C_2)s^2 ,$$

得到

$$\frac{V_G}{I_{in}} = \frac{R_PL_1s\left[g_m + (C_1 + C_2)s\right]}{R_PC_1C_2L_1s^3 + (C_1 + C_2)L_1s^2 + \left[g_mL_1 + R_P(C_1 + C_2)\right]s + g_mR_P}.$$

### 第 5 步 — 振荡频率（虚部）

在 $s = j\omega$ 处：

$$D(j\omega) = \left[g_mR_P - (C_1 + C_2)L_1\omega^2\right] + j\left\{\left[g_mL_1 + R_P(C_1 + C_2)\right]\omega - R_PC_1C_2L_1\omega^3\right\}.$$

虚部在以下频率处为零：

$$\omega_{osc}^2 = \frac{g_mL_1 + R_P(C_1 + C_2)}{R_PL_1C_1C_2} \approx \frac{C_1 + C_2}{L_1C_1C_2} = \frac{1}{L_1\,\dfrac{C_1C_2}{C_1 + C_2}},$$

其中，对于 $Q$ 值较高的电感，$g_mL_1 \ll R_P(C_1 + C_2)$（在起振时被忽略的比值约为 $1/Q^2$）。

### 第 6 步 — 振荡条件（实部）

实部为零的条件是

$$g_mR_P = (C_1 + C_2)L_1\omega_{osc}^2 ,$$

再利用 $L_1\omega_{osc}^2 \approx (C_1 + C_2)/(C_1C_2)$，得到

$$g_mR_P = \frac{(C_1 + C_2)^2}{C_1C_2}$$

这是振荡临界时的条件。要使振荡起振并增长：

$$g_mR_P \ge \frac{(C_1 + C_2)^2}{C_1C_2} = \frac{C_1}{C_2} + 2 + \frac{C_2}{C_1} \ge 4,$$

最小值 4 出现在 $C_1 = C_2$ 时（因为当 $x > 0$ 时 $x + 1/x \ge 2$）。

### 第 7 步 — 结果为何与考毕兹振荡器相同

| 元件 | 考毕兹振荡器（漏极 = 输出，栅极 = 交流地） | 本电路（漏极 = 交流地） |
|---|---|---|
| 电感（含 $R_P$） | 接在漏极与栅极之间 | 接在栅极与漏极之间 |
| $C_1$ | 接在源极与栅极之间 | 接在栅极与源极之间 |
| $C_2$ | 接在漏极与源极之间 | 接在源极与漏极之间 |

在 $M_1$ 周围，二者是**同一个网络**；只是选作交流地的节点不同，而这并不改变自然频率、振荡频率或起振条件。

**负电阻验证。** 从 $M_1$ 的栅极看进去（接有 $C_1$ 和 $C_2$），

$$Z_{in}(s) = \frac{1}{C_1s} + \frac{1}{C_2s} + \frac{g_m}{C_1C_2s^2}\quad\xrightarrow{\ s = j\omega\ }\quad \frac{1}{j\omega\,C_1C_2/(C_1 + C_2)} - \frac{g_m}{C_1C_2\omega^2},$$

即串联电容 $C_1C_2/(C_1 + C_2)$ 与负电阻 $-g_m/(C_1C_2\omega^2)$ 串联，电感正是与这一串联电容谐振（得到同样的 $\omega_{osc}$）。对于 $Q$ 值较高的电感，并联损耗 $R_P$ 等效于串联电阻 $R_S \approx (\omega L_1)^2/R_P$，振荡要求负电阻能抵消它：

$$
\begin{aligned}
\frac{g_m}{C_1C_2\omega^2} &\ge \frac{\omega^2L_1^2}{R_P},\\
g_mR_P &\ge C_1C_2\,\omega^4L_1^2 = C_1C_2\left(\frac{C_1 + C_2}{C_1C_2}\right)^2 = \frac{(C_1 + C_2)^2}{C_1C_2},
\end{aligned}
$$

得到相同的条件。

### 结果

闭环传递函数（向栅极节点注入电流 $I_{in}$）为

$$\frac{V_G}{I_{in}} = \frac{R_PL_1s\left[g_m + (C_1 + C_2)s\right]}{R_PC_1C_2L_1s^3 + (C_1 + C_2)L_1s^2 + \left[g_mL_1 + R_P(C_1 + C_2)\right]s + g_mR_P},$$

令分母在 $s = j\omega$ 处为零，得到：

- **频率：** $\omega_{osc}^2 = \dfrac{g_mL_1 + R_P(C_1 + C_2)}{R_PL_1C_1C_2} \approx \dfrac{1}{L_1\,C_1C_2/(C_1 + C_2)}$。
- **条件：** $g_mR_P \ge \dfrac{(C_1 + C_2)^2}{C_1C_2}$（至少为 4，在 $C_1 = C_2$ 时取最小值）。

这些结果与考毕兹振荡器完全相同，因为该电路在 $M_1$ 周围是同一个网络，只是接地的节点不同。

**常见错误。** 把频率取为 $1/\sqrt{L_1(C_1 + C_2)}$。从电感看去，$C_1$ 和 $C_2$ 是串联的。

**常见错误。** 使用条件 $g_mR_P \ge 1$。电容分压器只反馈一部分电压，因此要求为 $(C_1 + C_2)^2/(C_1C_2) \ge 4$。

**常见错误。** 误读拓扑，例如把 $C_1$ 接在栅极与地之间，或把 $C_2$ 跨接在栅极与漏极之间。$C_1$ 接在栅极与源极之间，$C_2$ 接在源极与地之间，正是这一点使该电路与考毕兹振荡器等效。
