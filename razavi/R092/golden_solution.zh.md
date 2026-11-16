在 $M_1$ 导通之前，是一条过原点的直线（电阻分压）；之后进入斜率更陡的跟随器区域，斜率趋近 ≈ $1/(1+\eta)$。

- $M_1$ 截止：没有漏极电流，$R_F$ 和 $R_S$ 对输入分压：$V_{out} = V_{in}R_S/(R_S+R_F)$，斜率为 $R_S/(R_S+R_F)$。只要 $V_{GS} = V_{in}R_F/(R_F+R_S) < V_{TH}(V_{out})$，$M_1$ 就保持截止。
- 导通点为 $V_{in,on} = \dfrac{R_F+R_S}{R_F}V_{TH}(V_{out,on})$，由于体效应（body effect），它高于 $0.7(1 + R_S/R_F)$ V（$V_{SB} = V_{out,on} = V_{in,on}R_S/(R_F+R_S)$ 并不小；例如当 $R_S = R_F$ 时，$V_{in,on} \approx 1.74$ V，而不是 1.40 V）。若 $R_F/R_S < 0.527$，导通点高于 3 V，$M_1$ 在整个扫描过程中都保持截止，特性曲线就只是这条分压直线。
- 导通后：$M_1$ 始终处于饱和区（saturation region），因为漏极接 $V_{DD}$，而栅极电压至多为 $V_{DD}$。输出节点的基尔霍夫电流定律（KCL）：$(V_{in} - V_{out})/R_F + \tfrac12\beta(V_{in} - V_{out} - V_{TH})^2 = V_{out}/R_S$；斜率 $= (g_m + 1/R_F)/(g_m + g_{mb} + 1/R_F + 1/R_S)$，从 $R_S/(R_S+R_F)$ 开始上升，当 $g_m$ 较大时趋于 ≈ $1/(1+\eta)$。
- 在 $V_{in} = V_{DD}$ 时：$V_{out} \approx 3 - V_{TH}(V_{out}) - \sqrt{2I_D/\beta}$，略高于普通跟随器的值，因为 $R_F$ 也向 $R_S$ 提供电流。
- 转折点：上述导通点；终点位于 $V_{in} = 3$ V。
