# 详细步骤 - R325

**思路。** 零值时间常数（ZVTC）法用 $\omega_{-3dB}\approx1/\sum_jR_jC_j$ 估算带宽，其中 $R_j$ 是输入置零、其他所有电容都**开路**时 $C_j$ 所看到的电阻。该和式等于分母的 $s$ 项系数 $b_1$，$b_1 = \sum_k 1/|\omega_{pk}|$；当最低的极点为主极点（dominant pole）时，该和式主要由它决定。在每个电容处加测试电流求出 $R_{GS}$、$R_{GD}$、$R_{CL}$，此时计入 $r_O$ 和 $g_{mb}$，并检验 $r_O\to\infty$、$g_{mb} = 0$ 的极限。

### 第 1 步 — 含 $r_O$ 和 $g_{mb}$ 的小信号模型

<!-- diagram: diagram-01.cir -->

把栅极、源极和漏极（输出端）分别记为 G、S 和 D。输入置零时，$R_G$、$R_S$ 和 $R_D$ 分别从 G、S 和 D 接到交流地；衬底（bulk）接地（$v_{bs} = -V_S$），因此从漏极流向源极的电流为

$$i_{DS} = g_m(V_G - V_S) - g_{mb}V_S + \frac{V_D - V_S}{r_O}.$$

**从漏极看带源极负反馈的晶体管。** 由 $V_S = i_{DS}R_S$：

$$
\begin{aligned}
i_{DS}\left[1 + (g_m + g_{mb})R_S + \frac{R_S}{r_O}\right] &= g_mV_G + \frac{V_D}{r_O}\\
i_{DS} &= G_mV_G + \frac{V_D}{R_{deg}},
\end{aligned}
$$

$$R_{deg} = r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S, \qquad G_m = \frac{g_mr_O}{R_{deg}} = \frac{g_mr_O}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S},$$

它们分别是带源极负反馈的该级的输出电阻（output resistance）和跨导。

### 第 2 步 — $C_L$ 所看到的电阻

$C_{GS}$ 和 $C_{GD}$ 开路时，$R_G$ 中没有电流，因此 $V_G = 0$，晶体管吸取电流 $V_D/R_{deg}$：

$$R_{CL} = R_{out} = R_D\parallel R_{deg} = R_D\parallel\left\{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S\right\}.$$

### 第 3 步 — $C_{GD}$ 所看到的电阻

将 $C_{GS}$ 和 $C_L$ 开路，用测试电流 $I_X$ 代替 $C_{GD}$，使其从 G 流入、从 D 流出。在栅极，$I_X$ 只能流过 $R_G$，因此 $V_G = I_XR_G$。在漏极，经 $R_D$、晶体管和测试源流出的电流之和为零：

$$
\begin{aligned}
\frac{V_D}{R_D} + G_mV_G + \frac{V_D}{R_{deg}} + I_X &= 0\\
V_D &= -R_{out}\left(I_X + G_mV_G\right) = -R_{out}I_X(1 + G_mR_G).
\end{aligned}
$$

由 $V_X = V_G - V_D$ 得：

$$R_{GD} = \frac{V_X}{I_X} = R_G + R_{out}(1 + G_mR_G).$$

$R_{out}G_mR_G$ 项就是密勒效应（Miller effect）：栅极电压 $I_XR_G$ 被该级的增益 $G_mR_{out}$ 放大到漏极。

### 第 4 步 — $C_{GS}$ 所看到的电阻

<!-- diagram: diagram-02.cir -->

将 $C_{GD}$ 和 $C_L$ 开路，用 $I_X$ 代替 $C_{GS}$，使其从 G 流入、从 S 流出。同样 $V_G = I_XR_G$。在漏极，唯一的电流是晶体管电流，它经 $R_D$ 提供，因此 $V_D = -R_Di_{DS}$，晶体管方程变为

$$
\begin{aligned}
i_{DS} &= g_m(V_G - V_S) - g_{mb}V_S - \frac{R_Di_{DS} + V_S}{r_O}\\
i_{DS}\,\frac{r_O + R_D}{r_O} &= g_mV_G - \left(g_m + g_{mb} + \frac{1}{r_O}\right)V_S\\
i_{DS} &= \frac{g_mr_OV_G - \left[1 + (g_m + g_{mb})r_O\right]V_S}{r_O + R_D}.
\end{aligned}
$$

在源极，$i_{DS}$ 经 $R_S$ 和测试源流出：$i_{DS} = V_S/R_S + I_X$。代入 $i_{DS}$，并乘以 $R_S(r_O + R_D)$：

$$
\begin{aligned}
g_mr_OR_SV_G - \left[1 + (g_m + g_{mb})r_O\right]R_SV_S &= (r_O + R_D)V_S + (r_O + R_D)R_SI_X\\
V_S\,\underbrace{\left\{r_O + R_D + \left[1 + (g_m + g_{mb})r_O\right]R_S\right\}}_{\equiv\,N} &= g_mr_OR_SV_G - (r_O + R_D)R_SI_X .
\end{aligned}
$$

由 $V_X = V_G - V_S$，

$$V_X = \frac{V_G\left(N - g_mr_OR_S\right) + (r_O + R_D)R_SI_X}{N},$$

其中 $N - g_mr_OR_S = r_O + R_D + R_S(1 + g_{mb}r_O)$。代入 $V_G = I_XR_G$：

$$R_{GS} = \frac{R_G\left[r_O + R_D + R_S(1 + g_{mb}r_O)\right] + R_S(r_O + R_D)}{r_O + R_D + R_S\left[1 + (g_m + g_{mb})r_O\right]}.$$

令 $R_x = (r_O + R_D)/(1 + g_{mb}r_O)$，将分子、分母同除以 $(1 + g_{mb}r_O)(R_S + R_{x})$，得到等价形式

$$R_{GS} = \frac{R_G + R_S'}{1 + g_m'R_S'},\qquad R_S' = R_S\,\Big\|\,\frac{r_O + R_D}{1 + g_{mb}r_O},\qquad g_m' = \frac{g_mr_O}{r_O + R_D}.$$

它与理想结果 $(R_G + R_S)/(1 + g_mR_S)$ 的结构相同，但 $r_O$ 和体效应**削弱了 $C_{GS}$ 的自举作用**：$g_m' < g_m$，且源极看到的电阻 $R_S'$ 更小。

### 第 5 步 — 带宽估算

$$\omega_{-3dB}\approx\frac{1}{R_{GS}C_{GS} + R_{GD}C_{GD} + R_{CL}C_L}$$

其中

$$
\begin{aligned}
R_{CL} &= R_{out} = R_D\parallel\left\{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S\right\},\\
R_{GD} &= R_G + R_{out}\left(1 + G_mR_G\right),\qquad G_m = \frac{g_mr_O}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S},\\
R_{GS} &= \frac{R_G\left[r_O + R_D + R_S(1 + g_{mb}r_O)\right] + R_S(r_O + R_D)}{r_O + R_D + R_S\left[1 + (g_m + g_{mb})r_O\right]}.
\end{aligned}
$$

### 第 6 步 — 验证：$\lambda = \gamma = 0$

令 $r_O\to\infty$，$g_{mb} = 0$。

- $R_{deg}\to\infty$，因此 $R_{CL}\to R_D$。
- $G_m\to\dfrac{g_m r_O}{r_O(1 + g_mR_S)} = \dfrac{g_m}{1 + g_mR_S}$，因此 $R_{GD}\to R_G + R_D\left(1 + \dfrac{g_mR_G}{1 + g_mR_S}\right) = R_D + \left(1 + \dfrac{g_mR_D}{1 + g_mR_S}\right)R_G$。
- 将 $R_{GS}$ 的分子、分母同除以 $r_O$：$R_{GS}\to\dfrac{R_G + R_S}{1 + g_mR_S}$。

这些都是理想的带源极负反馈共源级的熟知结果。

### 结果

$$\omega_{-3dB}\approx\frac{1}{R_{GS}C_{GS} + R_{GD}C_{GD} + R_{CL}C_L}$$

- $R_{CL} = R_{out} = R_D\parallel\left\{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S\right\}$
- $R_{GD} = R_G + R_{out}(1 + G_mR_G)$，其中 $G_m = \dfrac{g_mr_O}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S}$
- $R_{GS} = \dfrac{R_G\left[r_O + R_D + R_S(1 + g_{mb}r_O)\right] + R_S(r_O + R_D)}{r_O + R_D + R_S\left[1 + (g_m + g_{mb})r_O\right]} = \dfrac{R_G + R_S'}{1 + g_m'R_S'}$，其中 $R_S' = R_S\parallel\dfrac{r_O + R_D}{1 + g_{mb}r_O}$，$g_m' = \dfrac{g_mr_O}{r_O + R_D}$

当 $r_O\to\infty$、$g_{mb} = 0$ 时：$R_{GS} = (R_G + R_S)/(1 + g_mR_S)$，$R_{GD} = R_D + [1 + g_mR_D/(1 + g_mR_S)]R_G$，$R_{CL} = R_D$。

**常见错误。** 在计算每个 $R_j$ 时把其他电容短路。在零值法中，其他电容取**零值**，即**开路**；把它们短路属于用于求低频转折点的无穷值法。

**常见错误。** 把各个带宽相加，即 $\omega\approx\sum_j1/(R_jC_j)$。该方法相加的是**时间常数**，$b_1 = \sum_jR_jC_j$，带宽是该和的倒数。

**常见错误。** 存在 $r_O$ 时仍取 $R_{CL} = R_D$。带源极负反馈的晶体管在漏极呈现 $r_O + [1 + (g_m + g_{mb})r_O]R_S$，并与 $R_D$ 并联：它很大，但不是无穷大。同样，在 $R_{GS}$ 中漏掉 $g_{mb}$ 会高估 $C_{GS}$ 的自举作用。
