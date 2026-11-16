# 详细步骤 - R638

**思路。** 在栅极偏置上串联一个小电压源 $V_{in}$，分别在源极节点和输出（漏极）节点列 KCL 方程，消去源极电压，得到 $V_{out}/V_{in}$。激励置零后栅极回到交流地，即恢复了原电路，因此该传递函数的极点就是振荡器的自然频率。在 $s = j\omega$ 处，分母的虚部给出频率，实部给出所需的 $g_mR_P$。

### 第 1 步 — 小信号模型（small-signal model）

把 $M_1$ 的源极记为节点 S，其电压为 $V_S$。从输出到交流地的谐振回路（tank）导纳为 $Y_T = \dfrac{1}{L_Ps} + \dfrac{1}{R_P}$；S 处的偏置电流源相当于开路。栅极的小信号电压为 $V_{in}$，因此 $M_1$ 是一个从漏极流向 S 的受控电流 $g_m(V_{in} - V_S)$。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 节点方程

**S 点的 KCL**（流入：$M_1$ 和 $C_2$ 的电流；流出：$C_1sV_S$）：

$$g_m(V_{in} - V_S) + C_2s(V_{out} - V_S) = C_1sV_S. \tag{1}$$

**输出节点的 KCL**（流出：谐振回路、$C_2$、$M_1$）：

$$Y_TV_{out} + C_2s(V_{out} - V_S) + g_m(V_{in} - V_S) = 0. \tag{2}$$

### 第 3 步 — 一个有用的化简

(2) 式的最后两项正是 (1) 式的左边；用 $C_1sV_S$ 替换它们：

$$Y_TV_{out} + C_1sV_S = 0 \quad\Longrightarrow\quad V_S = -\frac{Y_T}{C_1s}\,V_{out} .$$

S 除 $C_1$ 外没有其他到地的通路，因此经 $C_2$ 和 $M_1$ 离开输出端的电流最终都流入 $C_1$，它与谐振回路的电流大小相等、方向相反。

### 第 4 步 — 求解 $V_{out}/V_{in}$

整理 (1) 式：

$$g_mV_{in} = V_S\left[g_m + (C_1 + C_2)s\right] - C_2sV_{out}.$$

代入第 3 步的 $V_S$：

$$
\begin{aligned}
g_mV_{in} &= -\frac{Y_T}{C_1s}\left[g_m + (C_1 + C_2)s\right]V_{out} - C_2sV_{out}\\
&= -\frac{Y_T\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2}{C_1s}\,V_{out},
\end{aligned}
$$

$$\frac{V_{out}}{V_{in}} = -\frac{g_mC_1s}{Y_T\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2}.$$

分子和分母同乘 $R_PL_Ps$，并利用 $R_PL_Ps\,Y_T = R_P + L_Ps$：

$$\frac{V_{out}}{V_{in}} = -\frac{g_mC_1R_PL_Ps^2}{(R_P + L_Ps)\left[g_m + (C_1 + C_2)s\right] + R_PL_PC_1C_2s^3}.$$

展开并按 $s$ 的幂次整理：

$$
\begin{aligned}
(R_P + L_Ps)\left[g_m + (C_1 + C_2)s\right] &= g_mR_P + \left[R_P(C_1 + C_2) + g_mL_P\right]s + L_P(C_1 + C_2)s^2,\\
\frac{V_{out}}{V_{in}} &= \frac{-g_mC_1R_PL_Ps^2}{R_PC_1C_2L_Ps^3 + (C_1 + C_2)L_Ps^2 + \left[g_mL_P + R_P(C_1 + C_2)\right]s + g_mR_P}.
\end{aligned}
$$

这与在源极节点加电流激励时的分母相同：自然频率是电路本身的属性，前提是激励置零后能恢复原电路（与栅极串联的零值电压源相当于短路）。

### 第 5 步 — 振荡频率（虚部）

在 $s = j\omega$ 处：

$$D(j\omega) = \left[g_mR_P - (C_1 + C_2)L_P\omega^2\right] + j\left\{\left[g_mL_P + R_P(C_1 + C_2)\right]\omega - R_PC_1C_2L_P\omega^3\right\}.$$

在 $\omega_R$ 处实部和虚部都为零。由虚部得

$$\omega_R^2 = \frac{g_mL_P + R_P(C_1 + C_2)}{R_PL_PC_1C_2}.$$

对于 $Q$ 值较高的谐振回路，$g_mL_P \ll R_P(C_1 + C_2)$（在起振时该比值约为 $1/Q^2$），因此

$$\omega_R^2 \approx \frac{C_1 + C_2}{L_PC_1C_2} = \frac{1}{L_P\,\dfrac{C_1C_2}{C_1 + C_2}} .$$

电感与 $C_1$、$C_2$ 的串联组合发生谐振。

### 第 6 步 — 起振条件（实部）

由实部得

$$g_mR_P = (C_1 + C_2)L_P\omega_R^2 ,$$

再利用 $L_P\omega_R^2 \approx (C_1 + C_2)/(C_1C_2)$，

$$g_mR_P = \frac{(C_1 + C_2)^2}{C_1C_2} = \frac{C_1}{C_2}\left(1 + \frac{C_2}{C_1}\right)^2 .$$

这是振荡的临界状态（极点位于 $j\omega$ 轴上）；要使振荡起振并增长，需要

$$g_mR_P \ge \frac{(C_1 + C_2)^2}{C_1C_2} .$$

（若保留 $g_mL_P$ 项，精确的临界条件为 $g_mR_P = \dfrac{(C_1 + C_2)^2}{C_1C_2}\Big/\left(1 - \dfrac{1}{Q^2}\right)$，其中 $Q^2 = R_P^2C_1C_2/[L_P(C_1 + C_2)]$；当 $Q \gg 1$ 时二者几乎相同。）

### 第 7 步 — 使所需增益最小的比值 $C_1/C_2$

令 $x = C_1/C_2$，

$$\frac{(C_1 + C_2)^2}{C_1C_2} = \frac{C_1^2 + 2C_1C_2 + C_2^2}{C_1C_2} = x + 2 + \frac1x ,$$

它在 $x = 1$ 时最小（因为 $x + 1/x \ge 2$，当 $x = 1$ 时取等号），最小值为

$$1 + 2 + 1 = 4 .$$

| $C_1/C_2$ | 0.25 | 0.5 | 1 | 2 | 4 |
|---|---|---|---|---|---|
| 所需的 $g_mR_P$ | 6.25 | 4.5 | **4** | 4.5 | 6.25 |

因此，考毕兹振荡器在最好的情况下（$C_1 = C_2$）也需要 $g_mR_P \ge 4$，比交叉耦合（cross-coupled）对的 $g_mR_P \ge 1$ 高得多，因为电容分压器只把输出摆幅的一部分送回 $M_1$ 的源极。

### 结果

$$\frac{V_{out}}{V_{in}} = \frac{-g_mC_1R_PL_Ps^2}{R_PC_1C_2L_Ps^3 + (C_1 + C_2)L_Ps^2 + \left[g_mL_P + R_P(C_1 + C_2)\right]s + g_mR_P},$$

其分母与电流激励时相同。在 $s = j\omega$ 处：

- **频率：** $\omega_R^2 = \dfrac{g_mL_P + R_P(C_1 + C_2)}{R_PL_PC_1C_2} \approx \dfrac{1}{L_P\,C_1C_2/(C_1 + C_2)}$（当 $g_mL_P \ll R_P(C_1 + C_2)$ 时）。
- **起振：** $g_mR_P \ge \dfrac{(C_1 + C_2)^2}{C_1C_2} = \dfrac{C_1}{C_2}\left(1 + \dfrac{C_2}{C_1}\right)^2$，其最小值 $g_mR_P = 4$ 出现在 $C_1 = C_2$ 时。

**常见错误。** 把频率取为 $1/\sqrt{L_P(C_1 + C_2)}$。经过节点 S，$C_1$ 和 $C_2$ 是串联在输出与地之间的。

**常见错误。** 套用交叉耦合振荡器的起振条件 $g_mR_P \ge 1$。经 $C_1$–$C_2$ 分压器，只有一部分输出电压到达 $M_1$ 的源极，这使要求提高到 $(C_1 + C_2)^2/(C_1C_2) \ge 4$。

**常见错误。** 认为在栅极加电压激励与在源极加电流激励会得到不同的自然频率。二者置零后都还原为原电路，因此只有分子（即零点）不同。
