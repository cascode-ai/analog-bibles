$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D(1 + R_GC_{GD}s)}{(1 + g_mR_S) + b_1s + (1 + g_mR_S)R_DR_GC_{GD}C_{DB}s^2}$$
$$b_1 = (1 + g_mR_S)R_DC_{DB} + [R_D + R_G + g_m(R_DR_S + R_DR_G + R_GR_S)]C_{GD}$$
- 直流增益为 $g_mR_D/(1 + g_mR_S)$；有两个极点；还有一个由 $R_G$ 产生、位于 $s = -1/(R_GC_{GD})$ 的左半平面零点（left-half-plane zero）。
- 验证：$R_G = 0$ 时得到 $\dfrac{g_mR_D}{(1 + g_mR_S)[1 + R_D(C_{GD} + C_{DB})s]}$（只有一个输出极点）。
- 主极点（dominant pole）估算：$\omega_{p1} \approx (1 + g_mR_S)/b_1$，即 $1/\{R_DC_{DB} + [R_D + (1 + \tfrac{g_mR_D}{1 + g_mR_S})R_G]C_{GD}\}$：$R_G$ 使 $C_{GD}$ 受到类似密勒效应（Miller effect）的倍增。

推导（节点 S、G、D；$V_{GS} = V_G - V_S$）：S 点：$\dfrac{V_{in} - V_S}{R_S} + g_m(V_G - V_S) = 0$；G 点：$-\dfrac{V_G}{R_G} + (V_{out} - V_G)C_{GD}s = 0$；D 点：$-\dfrac{V_{out}}{R_D} - V_{out}C_{DB}s + (V_G - V_{out})C_{GD}s - g_m(V_G - V_S) = 0$。
