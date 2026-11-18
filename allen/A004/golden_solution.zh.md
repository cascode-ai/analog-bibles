$\dfrac{v_{out}}{v_{in}} = \dfrac{G_1(G_2 - g_m)}{G_1G_2 + G_1G_4 + G_2G_3 + G_2G_4 + G_3G_4 + g_mG_2} = \dfrac{R_3R_4(1 - g_mR_2)}{R_1R_2 + R_1R_3 + R_1R_4 + R_2R_3 + R_3R_4 + g_mR_1R_3R_4}$，其中 $G_k = 1/R_k$。

推导：未知量为 $v_1$（$R_3$ 上端的电压）和 $v_{out}$。
- 节点 $v_1$：$G_1(v_1 - v_{in}) + G_3v_1 + G_2(v_1 - v_{out}) = 0 \Rightarrow (G_1+G_2+G_3)v_1 - G_2v_{out} = G_1v_{in}$。
- 节点 $v_{out}$（$g_mv_1$ 从该节点流向地）：$G_2(v_{out} - v_1) + g_mv_1 + G_4v_{out} = 0 \Rightarrow (g_m - G_2)v_1 + (G_2+G_4)v_{out} = 0$。
- 克拉默法则（Cramer's rule）：行列式 $\Delta = (G_1+G_2+G_3)(G_2+G_4) + G_2(g_m - G_2) = G_1G_2 + G_1G_4 + G_2G_3 + G_2G_4 + G_3G_4 + g_mG_2$；$v_{out} = G_1(G_2 - g_m)v_{in}/\Delta$。
- 分子、分母同乘 $R_1R_2R_3R_4$ 即得电阻形式。分子 $1 - g_mR_2$ 反映了经 $R_2$ 的前馈（feedforward）作用：当 $g_m = G_2$ 时出现传输零点。
