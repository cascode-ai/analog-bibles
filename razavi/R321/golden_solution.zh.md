$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D\left(1 + R_GC_{GD}s + \dfrac{R_GC_{GS}C_{GD}}{g_m}s^2\right)}{1 + g_mR_S + b_1s + b_2s^2}$$
$$b_1 = (R_S + R_G)C_{GS} + [R_D + R_G + g_m(R_DR_S + R_DR_G + R_GR_S)]C_{GD}$$
$$b_2 = (R_DR_G + R_DR_S + R_GR_S)C_{GS}C_{GD}$$
- 低频增益为 $g_mR_D/(1 + g_mR_S)$；有两个极点；还有两个由 $R_G$ 产生的左半平面零点（left-half-plane zero），即 $R_GC_{GS}C_{GD}s^2 + g_mR_GC_{GD}s + g_m = 0$ 的根（当 $R_G \to 0$ 时它们移向无穷远）。
- 验证：$C_{GD} = 0$ 时得到 $g_mR_D/[1 + g_mR_S + (R_S + R_G)C_{GS}s]$，即已知结果。$R_G = 0$ 时得到 $\dfrac{g_mR_D}{(1 + g_mR_S + R_SC_{GS}s)(1 + R_DC_{GD}s)}$。

推导（节点 S、G、D）：$\dfrac{V_{in} - V_S}{R_S} + (V_G - V_S)C_{GS}s + g_m(V_G - V_S) = 0$；$-\dfrac{V_G}{R_G} + (V_S - V_G)C_{GS}s + (V_{out} - V_G)C_{GD}s = 0$；$-\dfrac{V_{out}}{R_D} + (V_G - V_{out})C_{GD}s - g_m(V_G - V_S) = 0$。
