源极跟随器（source follower）特性：在 0.7 V 之前为零；随后是 $M_2$ 处于线性区（triode region）的一小段；当 $M_2$ 成为恒定电流源（current source）后，曲线近似为斜率 $1/(1+\eta) < 1$ 的直线。令 $I_2 = \tfrac12\beta_2(V_b - 0.7)^2$。

- $V_{in} \le 0.7$ V：$M_1$ 截止，$V_{out} = 0$（$M_2$ 处于线性区，电流为零）。
- $M_1$ 导通，$V_{out} < V_b - 0.7$ V：$M_2$ 处于线性区（在 0 V 附近相当于电阻 ≈ $1/[\beta_2(V_b - 0.7)]$）；$V_{out}$ 以斜率 $g_{m1}R/[1 + (g_{m1}+g_{mb1})R]$ 上升，其中 $R$ 为 $M_2$ 的增量电阻；电流逐渐增大并趋于 $I_2$。
- $V_{out} \ge V_b - 0.7$ V：$M_2$ 处于饱和区（saturation region），电流固定为 $I_2$；$V_{out} = V_{in} - V_{TH1}(V_{out}) - \sqrt{2I_2/\beta_1}$，斜率为 $1/(1+\eta_1)$，例如在 $V_{out} = 1$ V 附近 ≈ 0.86（$\eta = 0.45/(2\sqrt{1.9}) \approx 0.16$）。
- $M_1$ 在整个范围内保持饱和（漏极接 $V_{DD}$，栅极电压至多为 $V_{DD}$）。
- 转折点：$V_{in} = 0.7$ V；$V_{out} = V_b - 0.7$ V，对应 $V_{in} = V_b + 0.45[\sqrt{V_b + 0.2} - \sqrt{0.9}] + (V_b - 0.7)\sqrt{\beta_2/\beta_1}$（若该值超过 3 V，$M_2$ 在整个扫描过程中都处于线性区）；终点为 $V_{in} = 3$ V 时的 $V_{out} = 3 - V_{TH1}(V_{out}) - \sqrt{2I_2/\beta_1}$。
