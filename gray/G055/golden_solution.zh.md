$$\frac{v_o}{v_i} = -\frac{r_\pi}{R_S + r_\pi}\,g_m (R_C\|r_o) = -\frac{\beta_0 (R_C\|r_o)}{R_S + r_\pi} = -\frac{\beta_0 R_C V_A I_C}{(V_A + I_C R_C)(I_C R_S + \beta_0 V_T)},$$
其中 $g_m = I_C/V_T$，$r_\pi = \beta_0 V_T/I_C$，$r_o = V_A/I_C$。

最优值：$I_{C,\text{opt}} = \sqrt{\dfrac{\beta_0 V_T V_A}{R_S R_C}}$（此时 $R_C/r_o = r_\pi/R_S$）。

最优点的增益：$\left|\dfrac{v_o}{v_i}\right|_{\max} = \dfrac{\beta_0 V_A R_C}{\left(\sqrt{\beta_0 V_T R_C} + \sqrt{V_A R_S}\right)^2}$，等价于 $\dfrac{V_A}{V_T}\dfrac{x^2}{(1+x)^2}$，其中 $x = I_{C,\text{opt}}R_C/V_A = \sqrt{\beta_0 V_T R_C/(V_A R_S)}$（增益为负，即反相）。

推导：
- 信号源与 $r_\pi$ 在输入端构成分压器；集电极节点看到的电阻为 $R_C \| r_o$。
- 记 $|A_v| = \beta_0 R_C V_A\, f(I_C)$，其中 $f = I_C/[(V_A + I_C R_C)(R_S I_C + \beta_0 V_T)]$。令 $df/dI_C = 0$：分母 $D = R_C R_S I_C^2 + (V_A R_S + \beta_0 V_T R_C) I_C + \beta_0 V_T V_A$ 必须满足 $D = I_C D'$，由此得 $R_C R_S I_C^2 = \beta_0 V_T V_A$。
- 代回即得上述最大值。

增益下降的原因：
- $I_C$ 很小时：$r_\pi \gg R_S$ 且 $r_o \gg R_C$，因此 $A_v \approx -g_m R_C = -I_C R_C/V_T$，与 $I_C$ 成正比：跨导太小。
- $I_C$ 很大时：$r_\pi = \beta_0 V_T/I_C$ 变得远小于 $R_S$，因此 $v_i$ 中只有 $r_\pi/(R_S + r_\pi) \propto 1/I_C$ 的部分到达基极（增益趋于电流增益极限 $-\beta_0 (R_C\|r_o)/R_S$）；同时 $r_o = V_A/I_C$ 降到 $R_C$ 以下，因此负载项也按 $1/I_C$ 下降。
