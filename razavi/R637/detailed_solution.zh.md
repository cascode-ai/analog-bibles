# 详细步骤 - R637

**思路。** 在源极节点注入一个小电流 $I_{in}$ 来激励电路，分别在漏极（输出）节点和源极节点列 KCL 方程，消去源极电压，得到闭环传递函数，其分母就是特征方程。在 $s = j\omega$ 处，虚部确定振荡频率，实部确定起振条件。利用一个对 $Q$ 值较高的谐振回路成立的近似，就能把精确的频率表达式化为题中给出的公式。

### 第 1 步 — 小信号模型（small-signal model）

把 $M_1$ 的源极记为节点 S，其电压为 $V_1$。$C_P$ 与 $L_P$、$R_P$ 一起跨接在谐振回路两端（从输出到交流地），谐振回路的导纳为

$$Y_T(s) = \frac{1}{L_Ps} + \frac{1}{R_P} + C_Ps .$$

栅极为交流地，因此 $V_{GS} = -V_1$，$M_1$ 是一个从漏极（输出）流向 S 的受控电流 $-g_mV_1$；理想偏置电流源相当于开路。激励 $I_{in}$ 注入 S。令 $I_{in} = 0$ 即恢复原电路，因此 $V_{out}/I_{in}$ 的极点就是电路的自然频率。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 节点方程

**输出（漏极）节点的 KCL**（流出的电流：谐振回路、经 $C_2$ 流向 S、经 $M_1$ 流向 S）：

$$Y_TV_{out} + C_2s(V_{out} - V_1) - g_mV_1 = 0. \tag{A}$$

**源极节点 S 的 KCL**（流入的电流：$I_{in}$、$C_2$ 的电流、$M_1$ 的电流；流出的电流：$C_1sV_1$）：

$$I_{in} + C_2s(V_{out} - V_1) - g_mV_1 - C_1sV_1 = 0. \tag{B}$$

### 第 3 步 — 消去 $V_1$

由 (A)：

$$V_{out}(Y_T + C_2s) = V_1(g_m + C_2s) \quad\Longrightarrow\quad V_1 = \frac{Y_T + C_2s}{g_m + C_2s}\,V_{out}.$$

用 (B) 减去 (A)，$C_2$ 项和 $g_m$ 项相互抵消：

$$I_{in} - Y_TV_{out} - C_1sV_1 = 0 \quad\Longrightarrow\quad I_{in} = Y_TV_{out} + C_1sV_1 .$$

代入 $V_1$：

$$
\begin{aligned}
I_{in} &= V_{out}\left[Y_T + \frac{C_1s(Y_T + C_2s)}{g_m + C_2s}\right]\\
&= V_{out}\,\frac{Y_T(g_m + C_2s) + C_1sY_T + C_1C_2s^2}{g_m + C_2s}\\
&= V_{out}\,\frac{Y_T\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2}{g_m + C_2s}.
\end{aligned}
$$

因此

$$\frac{V_{out}}{I_{in}} = \frac{g_m + C_2s}{Y_T\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2}.$$

### 第 4 步 — 特征多项式

分子和分母同乘 $R_PL_Ps$，并利用 $R_PL_Ps\,Y_T = R_P + L_Ps + R_PL_PC_Ps^2$：

$$\frac{V_{out}}{I_{in}} = \frac{R_PL_Ps\,(g_m + C_2s)}{\left(R_P + L_Ps + R_PL_PC_Ps^2\right)\left[g_m + (C_1 + C_2)s\right] + R_PL_PC_1C_2s^3}.$$

分母展开为

$$
\begin{aligned}
&R_Pg_m + R_P(C_1 + C_2)s + L_Pg_ms + L_P(C_1 + C_2)s^2\\
&\quad + R_PL_PC_Pg_ms^2 + R_PL_PC_P(C_1 + C_2)s^3 + R_PL_PC_1C_2s^3 ,
\end{aligned}
$$

按 $s$ 的幂次整理得

$$D(s) = R_PL_P\left[C_1C_2 + C_P(C_1 + C_2)\right]s^3 + L_P\left(C_1 + C_2 + g_mR_PC_P\right)s^2 + \left[g_mL_P + R_P(C_1 + C_2)\right]s + g_mR_P .$$

若 $D(j\omega_R) = 0$，电路就在 $\omega_R$ 处振荡。

### 第 5 步 — 虚部：振荡频率

利用 $s^2 = -\omega^2$ 和 $s^3 = -j\omega^3$，奇次幂项给出虚部：

$$\omega\left[g_mL_P + R_P(C_1 + C_2)\right] - \omega^3R_PL_P\left[C_1C_2 + C_P(C_1 + C_2)\right] = 0 ,$$

$$\omega_R^2 = \frac{g_mL_P + R_P(C_1 + C_2)}{R_PL_P\left[C_1C_2 + C_P(C_1 + C_2)\right]} .$$

**近似。** 假设

$$g_mL_P \ll R_P(C_1 + C_2),$$

这对 $Q$ 值较高的谐振回路成立。利用振荡边缘处的值 $g_mR_P \approx (C_1 + C_2)^2/(C_1C_2) = (C_1 + C_2)/C_{eq}$（第 6 步），其中 $C_{eq} = C_1C_2/(C_1 + C_2)$，以及 $L_P \approx 1/[\omega_R^2(C_P + C_{eq})]$：

$$\frac{g_mL_P}{R_P(C_1 + C_2)} = \frac{L_P}{R_P^2C_{eq}} = \frac{1}{\omega_R^2R_P^2C_{eq}(C_P + C_{eq})} = \frac{1}{Q^2}\left(1 + \frac{C_P}{C_{eq}}\right),$$

其中 $Q = \omega_RR_P(C_P + C_{eq}) = R_P/(\omega_RL_P)$。当 $Q$ 为 10 或更大、且 $C_P$ 不比 $C_{eq}$ 大很多时，这一比值至多为百分之几。于是

$$\omega_R^2 \approx \frac{R_P(C_1 + C_2)}{R_PL_P\left[C_1C_2 + C_P(C_1 + C_2)\right]} = \frac{C_1 + C_2}{L_P\left[C_1C_2 + C_P(C_1 + C_2)\right]} ,$$

分子和分母同除以 $C_1 + C_2$，得

$$\omega_R^2 = \frac{1}{L_P\left(C_P + \dfrac{C_1C_2}{C_1 + C_2}\right)},$$

这正是要证明的结果。$C_P$ 直接跨接在电感两端，而 $C_1$–$C_2$ 串联支路构成从输出到地的第二条通路，因此电感看到的是 $C_P$ 与 $C_1C_2/(C_1 + C_2)$ 并联。晶体管只通过很小的 $g_mL_P$ 项使频率发生偏移。

### 第 6 步 — 实部：起振条件不变

偶次幂项给出

$$g_mR_P - \omega_R^2L_P\left(C_1 + C_2 + g_mR_PC_P\right) = 0 \quad\Longrightarrow\quad g_mR_P\left(1 - L_PC_P\omega_R^2\right) = L_P(C_1 + C_2)\,\omega_R^2 .$$

利用 $\omega_R^2L_P = 1/(C_P + C_{eq})$：

$$
\begin{aligned}
1 - L_PC_P\omega_R^2 &= 1 - \frac{C_P}{C_P + C_{eq}} = \frac{C_{eq}}{C_P + C_{eq}},\\
g_mR_P\,\frac{C_{eq}}{C_P + C_{eq}} &= \frac{C_1 + C_2}{C_P + C_{eq}},\\
g_mR_P &= \frac{C_1 + C_2}{C_{eq}} = \frac{(C_1 + C_2)^2}{C_1C_2} .
\end{aligned}
$$

因此 $g_mR_P$ 的最小值与没有 $C_P$ 时相同，为 $(C_1 + C_2)^2/(C_1C_2)$，它至少为 4，在 $C_1 = C_2$ 时等于 4。$C_P$ 只是降低了频率。

### 结果

特征方程为

$$Y_T(s)\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2 = 0, \qquad Y_T = \frac{1}{L_Ps} + \frac{1}{R_P} + C_Ps,$$

其在 $s = j\omega_R$ 处的虚部给出

$$\omega_R^2 = \frac{g_mL_P + R_P(C_1 + C_2)}{R_PL_P\left[C_1C_2 + C_P(C_1 + C_2)\right]} \approx \frac{1}{L_P\left(C_P + \dfrac{C_1C_2}{C_1 + C_2}\right)},$$

这里利用了近似 $g_mL_P \ll R_P(C_1 + C_2)$（$Q$ 值较高的谐振回路）。$C_P$ 只是与 $C_1$、$C_2$ 的串联组合并联相加，起振条件 $g_mR_P \ge (C_1 + C_2)^2/(C_1C_2)$ 保持不变。

**常见错误。** 写成 $\omega_R^2 = 1/[L_P(C_P + C_1 + C_2)]$。$C_1$ 和 $C_2$ 是（经过 S）**串联**在输出与地之间的，因此只有它们的串联组合出现在公式中。

**常见错误。** 不加说明地丢掉 $g_mL_P$ 项。只有当 $g_mL_P \ll R_P(C_1 + C_2)$ 时才能得到题中的公式，这一高 $Q$ 近似应当明确说明。

**常见错误。** 不作任何推导就断言 $C_P$ 是并联相加的。支撑这一结果的是节点分析，或者至少是“$C_P$ 和 $C_1$–$C_2$ 串联支路都跨接在电感两端”这一论证。
