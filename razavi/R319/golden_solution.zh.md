$$R_{in} = \frac{R_1 + r_O}{1 + (g_m + g_{mb})r_O} \approx \frac{1}{g_m + g_{mb}} + \frac{R_1}{(g_m + g_{mb})r_O}$$
密勒定理方法：
- 驱动 X 时，由 Y 点的基尔霍夫电流定律（KCL）$V_Y/R_1 + (V_Y - V_X)/r_O = (g_m + g_{mb})V_X$，可得从 X 到 Y 的电压增益为 $A_v = \dfrac{V_Y}{V_X} = \dfrac{[1 + (g_m + g_{mb})r_O]R_1}{R_1 + r_O}$。
- 用密勒定理拆分 $r_O$，X 侧的部分为 $\dfrac{r_O}{1 - A_v} = \dfrac{R_1 + r_O}{1 - (g_m + g_{mb})R_1}$。当 $(g_m + g_{mb})R_1 > 1$ 时它为负值。
- 它与受控源的等效电阻 $1/(g_m + g_{mb})$ 并联，得到 $R_{in} = \dfrac{R_1 + r_O}{1 + (g_m + g_{mb})r_O}$。
- 验证：$R_1 \to \infty$ 时 $R_{in} = \infty$（即电流源的情况）；$R_1 = 0$ 时为 $r_O\|1/(g_m+g_{mb})$。
