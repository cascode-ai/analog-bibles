# 详细步骤 - R130

**思路。** 在 $I_D = 0.5$ mA 下计算 $g_m$、$r_O$ 和 $g_{mb}$（源极比接地的衬底高 $I_DR_S = 0.1$ V，因此存在体效应），推导同时计入 $r_O$ 和 $g_{mb}$ 的带源极负反馈共源级的增益，并代入数值。与简化公式比较，可以看出每种效应的影响有多大。

### 第 1 步 — 偏置点与小信号参数

$$
\begin{aligned}
V_S &= I_DR_S = (0.5\ \mathrm{mA})(200\ \Omega) = 0.1\ \mathrm{V} = V_{SB},\\
V_{out} &= V_{DD} - I_DR_D = 3 - (0.5\ \mathrm{mA})(2\ \mathrm{k\Omega}) = 2\ \mathrm{V}.
\end{aligned}
$$

由 $(W/L) = 50/0.5 = 100$（并且按手算惯例，$\lambda$ 只用于计算 $r_O$）得：

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{13.4\times10^{-6}}\ \mathrm{A/V} = 3.66\ \mathrm{mS},$$

$$r_O = \frac{1}{\lambda I_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega}.$$

**体效应**：$g_{mb} = \eta g_m$，其中 $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$：

$$
\begin{aligned}
\eta &= \frac{0.45}{2\sqrt{0.9 + 0.1}} = \frac{0.45}{2\times1} = 0.225,\\
g_{mb} &= 0.225\times3.66\ \mathrm{mS} = 0.824\ \mathrm{mS},\\
g_m + g_{mb} &= 3.66 + 0.824 = 4.484\ \mathrm{mS}.
\end{aligned}
$$

**工作区检查。** $V_{TH} = 0.7 + 0.45(\sqrt{1.0} - \sqrt{0.9}) = 0.7 + 0.45(1 - 0.9487) = 0.723$ V，$V_{ov} = \sqrt{2(0.5\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.273$ V；$V_{DS} = 2 - 0.1 = 1.9$ V $> V_{ov}$，因此 $M_1$ 处于饱和区（saturation region）✓。（输入直流电平为 $V_{GS} + V_S = 0.723 + 0.273 + 0.1 = 1.10$ V。）

### 第 2 步 — 小信号模型（small-signal model）

由于 $v_{gs} = v_{in} - v_S$，$v_{bs} = -v_S$，$M_1$ 有两个从漏极流向源极的受控源 $g_m(v_{in} - v_S)$ 和 $g_{mb}(-v_S)$，$r_O$ 接在漏极与源极之间；$R_D$ 从 out 接到交流地，$R_S$ 从源极接到地。

<!-- diagram: diagram-01.cir -->

单一的信号电流 $i$ 从输出端向下流过 $M_1$，进入 $R_S$。

### 第 3 步 — 推导增益

$$v_S = iR_S, \qquad v_{out} = -iR_D, \qquad i = g_m(v_{in} - v_S) - g_{mb}v_S + \frac{v_{out} - v_S}{r_O}.$$

代入 $v_S$ 和 $v_{out}$：

$$i = g_mv_{in} - (g_m + g_{mb})R_S\,i + \frac{-iR_D - iR_S}{r_O}.$$

合并含 $i$ 的项，再乘以 $r_O$：

$$i\left[1 + (g_m + g_{mb})R_S + \frac{R_D + R_S}{r_O}\right] = g_mv_{in},$$

$$i\left[r_O + (g_m + g_{mb})R_Sr_O + R_D + R_S\right] = g_mr_O\,v_{in},$$

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_mr_OR_D}{R_D + r_O + R_S + (g_m + g_{mb})R_Sr_O}.$$

**验证。** 当 $r_O \to \infty$ 时，$A_v \to -g_mR_D/[1 + (g_m + g_{mb})R_S]$，这正是熟悉的计入体效应的带源极负反馈共源级结果 ✓。

### 第 4 步 — 数值计算

$$g_mr_OR_D = (3.66\ \mathrm{mS})(20\ \mathrm{k\Omega})(2\ \mathrm{k\Omega}) = 73.2\times2\ \mathrm{k\Omega} = 146.4\ \mathrm{k\Omega},$$

$$
\begin{aligned}
R_D + r_O + R_S &= 2 + 20 + 0.2 = 22.2\ \mathrm{k\Omega},\\
(g_m + g_{mb})R_Sr_O &= (4.484\ \mathrm{mS})(200\ \Omega)(20\ \mathrm{k\Omega}) = 0.897\times20\ \mathrm{k\Omega} = 17.94\ \mathrm{k\Omega},\\
\text{denominator} &= 22.2 + 17.94 = 40.14\ \mathrm{k\Omega},
\end{aligned}
$$

$$A_v = -\frac{146.4\ \mathrm{k\Omega}}{40.14\ \mathrm{k\Omega}} \approx -3.65 .$$

### 第 5 步 — 各效应的影响有多大

| 模型 | 公式 | $A_v$ |
|---|---|---|
| 既不计 $r_O$ 也不计体效应 | $-g_mR_D/(1 + g_mR_S)$ | $-7.32/1.732 = -4.23$ |
| 仅计体效应 | $-g_mR_D/[1 + (g_m + g_{mb})R_S]$ | $-7.32/1.897 = -3.86$ |
| 仅计 $r_O$ | $-g_mr_OR_D/(R_D + r_O + R_S + g_mR_Sr_O)$ | $-146.4/36.84 = -3.97$ |
| 两者都计（本题） | 第 3 步 | $-3.65$ |

- **体效应。** $v_S$ 升高还会使阈值电压升高，因此负反馈因子变为 $1 + (g_m + g_{mb})R_S$，而不是 $1 + g_mR_S$。
- **沟道长度调制。** $r_O$ 连接在漏极与源极之间，因此输出电压的变化会反馈到源极；当 $R_D/r_O = 0.1$ 时，它使增益损失约 6 %。
- 两者合起来使增益从 $-4.23$ 减小约 14 %。理想的“$-R_D/R_S$”极限（$-10$）相差甚远，因为 $g_mR_S = 0.73$ 并不远大于 1。

### 结果

$$A_v = -\frac{g_mr_OR_D}{R_D + r_O + R_S + (g_m + g_{mb})R_Sr_O} \approx -3.65,$$

其中 $g_m = 3.66$ mS，$r_O = 20$ kΩ，$V_{SB} = 0.1$ V，$\eta = 0.225$，$g_{mb} = 0.824$ mS。

**常见错误。** 忽略源极负反馈，得到 $A_v = -g_mR_D = -7.3$；或者使用强负反馈极限 $-R_D/R_S = -10$，而该极限要求 $g_mR_S \gg 1$，这里却只有 $g_mR_S = 0.73$。

**常见错误。** 用 $V_{SB} = 0$ 计算 $g_{mb}$（$\eta = 0.237$）。源极比接地的衬底高 $I_DR_S = 0.1$ V，因此 $\eta = 0.45/(2\sqrt{1.0}) = 0.225$（在本题中增益只有很小的变化）。

**常见错误。** 把 $r_O$ 与 $R_D$ 并联：$-g_m(R_D\parallel r_O)/[1 + (g_m + g_{mb})R_S] = -3.51$。在带源极负反馈的电路中，$r_O$ 连接在漏极与源极之间，而不是漏极与地之间；精确表达式给出 $-3.65$。
