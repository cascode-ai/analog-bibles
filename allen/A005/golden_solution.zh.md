$\dfrac{v_{out}}{v_{in}} = \dfrac{R_3R_4(1 - g_mR_2)}{R_1R_2 + R_1R_3 + R_1R_4 + R_2R_3 + R_3R_4 + g_mR_1R_3R_4}$。

推导：将 $g_mv_1 \parallel R_4$ 变换为戴维南形式（Thevenin form）：$R_4$ 与一个电压源串联，该电压源使开路输出为 $-g_mR_4v_1$。网孔电流：$i_a$ 顺时针流过 $v_{in}$、$R_1$、$R_3$；$i_b$ 顺时针流过 $R_3$、$R_2$ 和 $R_4$ 支路。于是 $v_1 = R_3(i_a - i_b)$，$v_{out} = R_4(i_b - g_mv_1)$。
- 网孔 a：$v_{in} = (R_1 + R_3)i_a - R_3i_b$。
- 网孔 b：$0 = -R_3i_a + (R_2 + R_3 + R_4)i_b - g_mR_4v_1 \Rightarrow 0 = -R_3(1 + g_mR_4)i_a + (R_2 + R_3 + R_4 + g_mR_3R_4)i_b$。
- 求解：$\Delta = R_1R_2 + R_1R_3 + R_1R_4 + R_2R_3 + R_3R_4 + g_mR_1R_3R_4$，$i_a = (R_2 + R_3 + R_4 + g_mR_3R_4)v_{in}/\Delta$，$i_b = R_3(1 + g_mR_4)v_{in}/\Delta$。
- $v_{out} = R_4[i_b - g_mR_3(i_a - i_b)] = R_4[(1 + g_mR_3)i_b - g_mR_3i_a]$，化简后为 $R_3R_4(1 - g_mR_2)v_{in}/\Delta$。
（等价地，$G_1(G_2 - g_m)/(G_1G_2 + G_1G_4 + G_2G_3 + G_2G_4 + G_3G_4 + g_mG_2)$。）
