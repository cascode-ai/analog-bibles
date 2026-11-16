这是同相的共栅（common-gate）特性：$V_{out}$ 从 $V_{in} = 0$ 时的某个较低值单调上升到 $V_{in} = V_{DD}$ 时的 $V_{DD}$；$M_1$ 先处于线性区（triode region）——前提是驱动较强——然后进入饱和区（saturation region），最后截止；截止之后，曲线是 $R_D$–$R_F$ 分压器给出的直线。

- $M_1$（栅极接 $V_b$，源极 = $V_{in}$，漏极 = $V_{out}$）在 $V_{in} \ge V_{in,off}$ 时截止，其中 $V_b - V_{in,off} = V_{TH}(V_{in,off})$，$V_{TH}(V) = 0.7 + 0.45(\sqrt{0.9+V} - \sqrt{0.9})$。这里计入了体效应（body effect），$V_{SB} = V_{in}$；截止点略低于 $V_b - 0.7$。
- 截止时：$V_{out} = V_{in} + (V_{DD} - V_{in})\dfrac{R_F}{R_D+R_F} = \dfrac{R_FV_{DD} + R_DV_{in}}{R_D+R_F}$，这是一条斜率为 $R_D/(R_D+R_F)$ 的直线，终点为 $(V_{DD}, V_{DD})$。
- 导通时：$M_1$ 从输出节点吸取电流并注入输入源，因此 $V_{out}$ 位于该直线下方：$(V_{DD} - V_{out})/R_D = (V_{out} - V_{in})/R_F + I_{D1}$，且 $V_{in} \le V_{out}$。
- 当 $V_{out} \ge V_b - V_{TH}(V_{in})$ 时处于饱和区：$I_{D1} = \tfrac12\beta(V_b - V_{in} - V_{TH})^2$；斜率 $dV_{out}/dV_{in} = (g_m + g_{mb} + 1/R_F)(R_D\|R_F)$，大于 $R_D/(R_D+R_F)$，并在截止点降到该值（曲线与直线相切衔接）。
- 当 $V_{out} < V_b - V_{TH}(V_{in})$ 时处于线性区——若 β 较大，通常出现在 $V_{in} = 0$ 附近：$V_{out}(0)$ 由 $(V_{DD} - V_{out})/R_D = V_{out}/R_F + \beta[(V_b - 0.7)V_{out} - V_{out}^2/2]$ 求得；那里的斜率适中（约为 1），并朝线性区/饱和区边界增大，曲线在该边界处最陡。
- 转折点：$V_{out} = V_b - V_{TH}$（线性区 → 饱和区），$V_{in} = V_{in,off}$（截止，$V_{out} = (R_FV_{DD} + R_DV_{in,off})/(R_D+R_F)$），终点 $(V_{DD}, V_{DD})$。
