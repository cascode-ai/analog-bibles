$I_X = V_X/R_S - I_{D1}$：在 $V_X = 0$ 时为负（等于 $-I_{D1}$），随着 $M_1$ 的电流减小而上升；$M_1$ 截止后，它沿过原点的直线 $V_X/R_S$ 变化，在 $V_X = V_{DD}$ 时达到 $3\ \mathrm{V}/R_S$。

- $V_X$ 确定了 $M_1$ 的源极电压：$V_{GS} = V_b - V_X$，$V_{SB} = V_X$。源极节点的基尔霍夫电流定律（KCL）：$I_X + I_{D1} = V_X/R_S$。
- 当 $V_X < V_{X,off}$ 时 $M_1$ 导通，其中 $V_b - V_{X,off} = V_{TH}(V_{X,off})$；由于体效应（body effect），该值略低于 $V_b - 0.7$ V。
- 导通时，若漏极电压 $V_{DD} - I_{D1}R_D \ge V_b - V_{TH}$，$M_1$ 处于饱和区（saturation region）；当 $V_X$ 较小且电流较大（$R_D$ 较大）时，它可能先处于线性区（triode region），随着 $V_X$ 升高、电流减小再进入饱和区。在饱和区，$I_{D1} = \tfrac12\beta(V_b - V_X - V_{TH}(V_X))^2$，$I_X$ 的斜率为 $1/R_S + g_m + g_{mb}$。
- $I_X$ 在 $I_{D1} = V_X/R_S$ 处过零；当 $V_X \ge V_{X,off}$ 时：$I_X = V_X/R_S$。
- 转折点：可能出现的线性区/饱和区边界，$V_{X,off}$，终值 $3/R_S$。
