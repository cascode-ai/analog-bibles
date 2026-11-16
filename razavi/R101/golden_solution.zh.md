$I_X = I_{D1} - (V_{DD} - V_X)/R_D$：它从 $-V_{DD}/R_D$ 开始上升，在 $M_1$ 处于线性区（triode region）时上升得很陡；在 $V_X = V_b - 0.7$ V 以上变为斜率为 $1/R_D$ 的直线，并在 $V_X = V_{DD}$ 时达到 $I_1 = \tfrac12\beta(V_b - 0.7)^2$。

- 漏极节点的基尔霍夫电流定律（KCL）：$I_X + (V_{DD} - V_X)/R_D = I_{D1}$。
- $V_X = 0$：$I_{D1} = 0$（$V_{DS} = 0$），$I_X = -3\ \mathrm{V}/R_D$。
- $0 < V_X < V_b - 0.7$ V：线性区，$I_{D1} = \beta[(V_b - 0.7)V_X - V_X^2/2]$；斜率为 $\beta(V_b - 0.7 - V_X) + 1/R_D$，在边界处减小到 $1/R_D$。
- $V_X \ge V_b - 0.7$ V：饱和区（saturation region），$I_{D1} = I_1$；$I_X = I_1 - (3 - V_X)/R_D$（斜率为 $1/R_D$，若计入沟道长度调制，还需加上 $\lambda I_1$）。
- 过零点满足 $I_{D1} = (3 - V_X)/R_D$。若 $V_b \le 0.7$ V，$M_1$ 截止，$I_X = (V_X - 3)/R_D$。
