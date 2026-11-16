$(V_X - V_Y)/(2V_{in1}) = -g_m(R_D\|r_O)$，与半边电路法的结果相同。
- 从 $M_2$ 源极看进去的阻抗（栅极接地，漏极接负载 $R_D$）：$R_S = \dfrac{R_D + r_O}{1 + g_mr_O}$。
- 把 $M_1$ 看作带源极负反馈的共源级：$\dfrac{v_X}{v_{in}} = -\dfrac{g_mr_OR_D}{R_D + r_O + (1 + g_mr_O)R_S} = -\dfrac{g_mr_OR_D}{2(R_D + r_O)} = -\tfrac12 g_m(R_D\|r_O)$。
- 把 $M_2$ 看作共栅级，由 $M_1$ 在 P 点的戴维南等效电路（Thevenin equivalent）驱动（$V_T = \dfrac{g_mr_O}{1+g_mr_O}v_{in}$，$R_T = \dfrac{R_D + r_O}{1 + g_mr_O}$）：$\dfrac{v_Y}{V_T} = \dfrac{(1 + g_mr_O)R_D}{R_D + r_O + (1+g_mr_O)R_T} = \dfrac{(1 + g_mr_O)R_D}{2(R_D + r_O)}$，因此 $\dfrac{v_Y}{v_{in}} = +\tfrac12 g_m(R_D\|r_O)$。
- 仅左侧输入作用时：$v_X - v_Y = -g_m(R_D\|r_O)v_{in}$。由对称性，右侧输入（$-V_{in1}$）再贡献 $-g_m(R_D\|r_O)V_{in1}$；总计 $V_X - V_Y = -2g_m(R_D\|r_O)V_{in1}$。
