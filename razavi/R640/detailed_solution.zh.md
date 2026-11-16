# 详细步骤 - R640

**思路。** 向漏极节点注入一个测试电流，分别在栅极节点和漏极节点列 KCL 方程（源极接地），消去栅极电压，得到闭环传递函数。其分母与考毕兹振荡器的三次多项式相同，只是用 $L_1$ 代替了 $L_P$。令 $s = j\omega$，由虚部得到频率，由实部得到振荡条件；先用通常的高 $Q$ 近似，再给出精确结果。

### 第 1 步 — 小信号模型（small-signal model）

把 $M_1$ 的栅极记为节点 G，漏极记为节点 D。于是：

- G 与 D 之间：$Y(s) = \dfrac{1}{L_1s} + \dfrac{1}{R_P}$；
- $C_1$ 从 G 接到地，$C_2$ 从 D 接到地；
- $M_1$：从 D 流向地的受控电流 $g_mV_{GS} = g_mV_G$；
- 向 D 注入测试电流 $I_{in}$。令其为零即恢复原电路，因此 $V_D/I_{in}$ 的极点就是自然频率。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 栅极节点 G 的 KCL

栅极不吸取电流，因此从 D 经 $Y$ 到达的电流全部流入 $C_1$：

$$Y(V_G - V_D) + C_1sV_G = 0 \quad\Longrightarrow\quad V_G\,(Y + C_1s) = Y\,V_D \quad\Longrightarrow\quad V_G = \frac{Y}{Y + C_1s}\,V_D .$$

在谐振频率附近，这一分压网络使信号**反相**（栅极的摆动方向与漏极相反），它与反相的共源晶体管配合，使环路具有再生作用。

### 第 3 步 — 漏极节点 D 的 KCL

$I_{in}$ 经 $Y$（流向 G）、$C_2$ 和 $M_1$ 离开 D：

$$I_{in} = Y(V_D - V_G) + C_2sV_D + g_mV_G .$$

整理并代入 $V_G$：

$$
\begin{aligned}
I_{in} &= V_D(Y + C_2s) + (g_m - Y)\,V_G\\
&= V_D\left[(Y + C_2s) + \frac{(g_m - Y)\,Y}{Y + C_1s}\right]\\
&= V_D\,\frac{(Y + C_2s)(Y + C_1s) + g_mY - Y^2}{Y + C_1s}.
\end{aligned}
$$

分子中的 $Y^2$ 项相互抵消：

$$(Y + C_2s)(Y + C_1s) + g_mY - Y^2 = Y(C_1 + C_2)s + C_1C_2s^2 + g_mY = Y\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2 ,$$

因此

$$\frac{V_D}{I_{in}} = \frac{Y + C_1s}{Y\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2}.$$

### 第 4 步 — 以多项式之比表示的传递函数

分子和分母同乘 $R_PL_1s$，并利用 $R_PL_1s\,Y = R_P + L_1s$：

$$
\begin{aligned}
\text{numerator:}&\quad R_P + L_1s + R_PL_1C_1s^2,\\
\text{denominator:}&\quad (R_P + L_1s)\left[g_m + (C_1 + C_2)s\right] + R_PL_1C_1C_2s^3\\
&\quad = R_PC_1C_2L_1s^3 + (C_1 + C_2)L_1s^2 + \left[g_mL_1 + R_P(C_1 + C_2)\right]s + g_mR_P ,
\end{aligned}
$$

$$\frac{V_D}{I_{in}} = \frac{R_PL_1C_1s^2 + L_1s + R_P}{R_PC_1C_2L_1s^3 + (C_1 + C_2)L_1s^2 + \left[g_mL_1 + R_P(C_1 + C_2)\right]s + g_mR_P}.$$

### 第 5 步 — 频率与条件（高 $Q$ 近似）

在 $s = j\omega$ 处：

$$D(j\omega) = \left[g_mR_P - (C_1 + C_2)L_1\omega^2\right] + j\omega\left[g_mL_1 + R_P(C_1 + C_2) - R_PC_1C_2L_1\omega^2\right].$$

**虚部 = 0：**

$$\omega_{osc}^2 = \frac{g_mL_1 + R_P(C_1 + C_2)}{R_PL_1C_1C_2} \approx \frac{C_1 + C_2}{L_1C_1C_2} = \frac{1}{L_1\,\dfrac{C_1C_2}{C_1 + C_2}},$$

这里利用了 $g_mL_1 \ll R_P(C_1 + C_2)$（$Q$ 值较高的电感）。

**实部 = 0：**

$$g_mR_P = (C_1 + C_2)L_1\omega_{osc}^2 \approx \frac{(C_1 + C_2)^2}{C_1C_2},$$

即振荡的临界状态。起振要求：

$$g_mR_P \ge \frac{(C_1 + C_2)^2}{C_1C_2} = \frac{C_1}{C_2} + 2 + \frac{C_2}{C_1} \ge 4,$$

最小值 4 出现在 $C_1 = C_2$ 时。

### 第 6 步 — 精确的临界值（实部与虚部联立求解）

把精确的 $\omega_{osc}^2$ 代入实部：

$$
\begin{aligned}
g_mR_P &= (C_1 + C_2)\,\frac{g_mL_1 + R_P(C_1 + C_2)}{R_PC_1C_2},\\
g_mR_P^2C_1C_2 &= g_mL_1(C_1 + C_2) + R_P(C_1 + C_2)^2,\\
g_m\left[R_P^2C_1C_2 - L_1(C_1 + C_2)\right] &= R_P(C_1 + C_2)^2,\\
g_m &= \frac{R_P(C_1 + C_2)^2}{R_P^2C_1C_2 - L_1(C_1 + C_2)} .
\end{aligned}
$$

令 $\omega_0^2 = (C_1 + C_2)/(L_1C_1C_2)$，$Q = R_P/(\omega_0L_1)$，从而 $Q^2 = R_P^2C_1C_2/[L_1(C_1 + C_2)]$；两边乘以 $R_P$，再把分子和分母同除以 $R_P^2C_1C_2$：

$$g_mR_P = \frac{R_P^2(C_1 + C_2)^2}{R_P^2C_1C_2 - L_1(C_1 + C_2)} = \frac{(C_1 + C_2)^2/(C_1C_2)}{1 - 1/Q^2} = \frac{(C_1 + C_2)^2}{C_1C_2}\cdot\frac{Q^2}{Q^2 - 1},$$

在这一临界值处，$\omega_{osc}^2 = g_mR_P/[(C_1 + C_2)L_1] = \omega_0^2\,Q^2/(Q^2 - 1)$。$Q = 10$ 时修正因子为 $100/99 \approx 1.01$，因此高 $Q$ 近似的结果是准确的。

### 第 7 步 — 结果为何与考毕兹振荡器一致

| 元件 | 考毕兹振荡器（栅极 = 交流地） | 本电路（源极 = 地） |
|---|---|---|
| 电感（含 $R_P$） | 漏极–栅极 | 栅极–漏极 |
| $C_1$ | 源极–栅极 | 栅极–源极 |
| $C_2$ | 漏极–源极 | 漏极–源极 |

这是同一个三节点网络，只是接地的节点不同，而这并不改变自然频率，因此频率和起振条件都相同。

**负电阻（negative resistance）观点。** 从电感（接在栅极与漏极之间）看去，$M_1$ 与 $C_1$、$C_2$ 一起呈现

$$Z(j\omega) = \frac{1}{j\omega\,C_1C_2/(C_1 + C_2)} - \frac{g_m}{C_1C_2\omega^2},$$

即一个串联电容 $C_1C_2/(C_1 + C_2)$（电感与之谐振）和一个负电阻 $-g_m/(C_1C_2\omega^2)$。把并联损耗 $R_P$ 换算为串联电阻 $R_S \approx (\omega L_1)^2/R_P$，令 $g_m/(C_1C_2\omega^2) \ge R_S$，同样得到 $g_mR_P \ge (C_1 + C_2)^2/(C_1C_2)$。

### 结果

采用漏极激励时，

$$\frac{V_D}{I_{in}} = \frac{R_PL_1C_1s^2 + L_1s + R_P}{R_PC_1C_2L_1s^3 + (C_1 + C_2)L_1s^2 + \left[g_mL_1 + R_P(C_1 + C_2)\right]s + g_mR_P},$$

令分母在 $s = j\omega$ 处为零，得到：

- **频率：** $\omega_{osc}^2 = \dfrac{g_mL_1 + R_P(C_1 + C_2)}{R_PL_1C_1C_2} \approx \dfrac{1}{L_1\,C_1C_2/(C_1 + C_2)}$。
- **条件：** $g_mR_P \ge \dfrac{(C_1 + C_2)^2}{C_1C_2}$（至少为 4，在 $C_1 = C_2$ 时取最小值）；精确地说，$g_mR_P \ge \dfrac{(C_1 + C_2)^2}{C_1C_2}\cdot\dfrac{Q^2}{Q^2 - 1}$。

二者都与考毕兹振荡器完全相同。

**常见错误。** 写成 $\omega_{osc} = 1/\sqrt{L_1(C_1 + C_2)}$。经过电感的回路要经过串联的 $C_1$ 和 $C_2$（栅极–地–漏极），因此谐振电容为 $C_1C_2/(C_1 + C_2)$。

**常见错误。** 使用 $g_mR_P \ge 1$。$L_1$–$C_1$ 分压网络只把漏极摆幅的一部分送到栅极，这使要求提高到 $(C_1 + C_2)^2/(C_1C_2) \ge 4$。

**常见错误。** 因为共源级（common-source stage）是反相的，就认为电路不能振荡。在谐振频率附近，$L_1$–$C_1$ 网络提供了第二次反相，因此环路相移为 360°。
