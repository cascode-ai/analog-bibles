$A_{vd} \approx g_mr_{ds}$（每个输出端为 $\pm\tfrac12 g_mr_{ds}v_{in}$；输出电阻每个输出端为 $r_{ds}$，两个输出端之间为 $2r_{ds}$）。

- 小信号电流：M1 和 M4 的栅极上为 $\pm v_{in}/2$，M2、M3 为交流地，每个差分对上的电压各分一半：$i_1 = 0.25g_mv_{in}$，$i_2 = -0.25g_mv_{in}$，$i_3 = 0.25g_mv_{in}$，$i_4 = -0.25g_mv_{in}$。
- M1 和 M3 的漏极共用 M7 漏极处的节点（M9 的源极）：$i_1 + i_3 = 0.5g_mv_{in}$ 被从 M9 抽走；M2 和 M4 的漏极共用 M8 的节点：M10 得到 $-0.5g_mv_{in}$。
- 输出电阻：向下为电流沉 $r_{ds11}$（或 $r_{ds12}$）= $r_{ds}$；向上为共源共栅管 M9 叠在约 $r_{ds}/2$ 的节点之上，约为 $g_mr_{ds}^2/2 \gg r_{ds}$。因此每个输出端 $R_{out} \approx r_{ds}$。
- $v_{out}^- \approx -0.5g_mr_{ds}v_{in}$，$v_{out}^+ \approx +0.5g_mr_{ds}v_{in}$；$v_{out} = v_{out}^+ - v_{out}^- \approx g_mr_{ds}v_{in}$（节点分析给出 0.94 $g_mr_{ds}$，差别来自有限的共源共栅电阻）。
