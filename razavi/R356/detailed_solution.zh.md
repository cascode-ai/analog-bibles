# 详细步骤 - R356

**思路。** 把三个热噪声源（$M_1$、以串联电压表示的 $R_S$、$R_D$）同时放入小信号电路，求出漏极电流和输出电压，再除以电压增益。由于 $\lambda = 0$ 且无体效应，晶体管电流只取决于 $v_{GS}$，代数运算因而很简短。

### 第 1 步 — 含噪声源的小信号模型（small-signal model）

- **$M_1$：** 漏源电流 $g_m(v_{in} - v_S)$，其沟道噪声 $I_{n1}$（$\overline{I_{n1}^2} = 4kT\gamma g_m$）与之并联；没有 $r_O$，也没有 $g_{mb}$。
- **$R_S$：** 接在源极节点 S 与地之间，与其戴维南噪声电压 $V_{nS}$（$\overline{V_{nS}^2} = 4kTR_S$）串联。
- **$R_D$：** 接在输出端与交流地之间，其诺顿噪声 $I_{nD}$（$\overline{I_{nD}^2} = 4kT/R_D$）从 $V_{DD}$ 流入输出端。

三个噪声源互不相关。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 所有噪声源都存在时的漏极电流

流过 $M_1$ 的总电流为

$$i_d = g_m(v_{in} - v_S) + I_{n1},$$

它全部向下流过 $R_S$，因此

$$v_S = i_dR_S + V_{nS}.$$

代入并解出 $i_d$：

$$
\begin{aligned}
i_d &= g_m\left(v_{in} - i_dR_S - V_{nS}\right) + I_{n1}\\
i_d(1 + g_mR_S) &= g_m(v_{in} - V_{nS}) + I_{n1}\\
i_d &= \frac{g_m}{1 + g_mR_S}\left(v_{in} - V_{nS} + \frac{I_{n1}}{g_m}\right).
\end{aligned}
$$

因此 **$V_{nS}$ 和 $I_{n1}/g_m$ 恰好与 $v_{in}$ 从同一位置进入**，经过同一个带负反馈的跨导（transconductance）$G_m = g_m/(1 + g_mR_S)$。

### 第 3 步 — 输出电压与增益

由于 $\lambda = 0$，漏极是理想电流源（current source），因此 $R_D$ 支路的电流恰好为 $i_d$：$(0 - v_{out})/R_D + I_{nD} = i_d$，于是

$$v_{out} = -R_Di_d + R_DI_{nD} = -\frac{g_mR_D}{1 + g_mR_S}\left(v_{in} - V_{nS} + \frac{I_{n1}}{g_m}\right) + R_DI_{nD}.$$

电压增益为

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_mR_D}{1 + g_mR_S}.$$

### 第 4 步 — 输入参考噪声

把输出除以 $A_v$：

$$
\begin{aligned}
\frac{v_{out}}{A_v} &= v_{in} - V_{nS} + \frac{I_{n1}}{g_m} + \frac{R_DI_{nD}}{-g_mR_D/(1 + g_mR_S)}\\
&= v_{in} + \underbrace{\left[-V_{nS} + \frac{I_{n1}}{g_m} - \frac{1 + g_mR_S}{g_m}I_{nD}\right]}_{v_{n,in}} .
\end{aligned}
$$

把各项平方后相加（各噪声源互不相关）：

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \overline{V_{nS}^2} + \frac{\overline{I_{n1}^2}}{g_m^2} + \frac{(1 + g_mR_S)^2}{g_m^2}\overline{I_{nD}^2}\\
&= 4kTR_S + \frac{4kT\gamma g_m}{g_m^2} + \frac{(1 + g_mR_S)^2}{g_m^2}\cdot\frac{4kT}{R_D}\\
&= 4kT\left[\frac{\gamma}{g_m} + R_S + \frac{(1 + g_mR_S)^2}{g_m^2R_D}\right].
\end{aligned}
$$

### 第 5 步 — 各项的含义

- **$M_1$，$4kT\gamma/g_m$：** 源极负反馈使漏极噪声电流减小 $1 + g_mR_S$ 倍，但信号电流也减小同样的倍数，因此输入参考值不变。
- **$R_S$，$4kTR_S$：** 其噪声电压位于输入回路中，对 $v_{GS}$ 的影响与 $v_{in}$ 完全相同，因此一比一地折算到输入端。
- **$R_D$，$4kT(1 + g_mR_S)^2/(g_m^2R_D)$：** 其输出噪声 $4kTR_D$ 除以**带负反馈**的增益的平方，后者比 $(g_mR_D)^2$ 小 $(1 + g_mR_S)^2$ 倍。

当 $R_S = 0$ 时，结果化为普通共源级的值 $4kT\left[\gamma/g_m + 1/(g_m^2R_D)\right]$；源极负反馈改善了线性度，却增加了噪声。

### 结果

$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_m} + R_S + \frac{(1+g_mR_S)^2}{g_m^2R_D}\right]$$

三项分别来自 $M_1$（折算到栅极，与 $R_S$ 无关）、$R_S$（其串联噪声电压与输入电压的作用相同）和 $R_D$（输出噪声 $4kTR_D$ 除以增益的平方 $[g_mR_D/(1+g_mR_S)]^2$）。

**常见错误。** 把 $R_S$ 的噪声除以增益。$V_{nS}$ 位于输入回路中而不在输出端，它对 $v_{GS}$ 的影响与 $v_{in}$ 完全相同，因此折算到输入端为 $4kTR_S$。

**常见错误。** 因为源极负反馈在漏极处“抑制”了沟道噪声，就把晶体管项除以 $(1 + g_mR_S)^2$。增益也减小了同样的倍数，因此输入参考值仍为 $4kT\gamma/g_m$。

**常见错误。** 用无负反馈时的增益 $g_mR_D$ 折算 $R_D$ 的噪声，从而漏掉因子 $(1 + g_mR_S)^2$；或者把晶体管项写成 $4kT\gamma g_m$，这是电流的功率谱密度，而不是电压的。
