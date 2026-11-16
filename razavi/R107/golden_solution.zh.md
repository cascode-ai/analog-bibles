$R_1$ 中没有直流电流（它只连接栅极），因此两个栅极都位于 $V_X$，两个晶体管都是二极管连接（diode-connected）的：在各自导通的范围内，$I_X = \tfrac12\beta_n(V_X - 0.7)^2 - \tfrac12\beta_p(2.2 - V_X)^2$。

- $0 \le V_X \le 0.7$ V：$M_1$ 截止；$M_2$ 的 $V_{SG} = V_{SD} = 3 - V_X$，处于饱和区（saturation region），它向电压源注入电流：$I_X = -\tfrac12\beta_p(2.2 - V_X)^2$，从 0 V 时的 $-2.42\beta_p$ 变化到 0.7 V 时的 $-1.125\beta_p$。
- $0.7 \le V_X \le 2.2$ V：两管都导通且饱和：$I_X = \tfrac12\beta_n(V_X - 0.7)^2 - \tfrac12\beta_p(2.2 - V_X)^2$，上升；在 $V_X = (0.7\sqrt{\beta_n} + 2.2\sqrt{\beta_p})/(\sqrt{\beta_n} + \sqrt{\beta_p})$ 处过零（$\beta_n = \beta_p$ 时为 1.45 V，此时中间段是一条直线）。
- $2.2 \le V_X \le 3$ V：$M_2$ 截止；$I_X = \tfrac12\beta_n(V_X - 0.7)^2$，从 $1.125\beta_n$ 增大到 3 V 时的 $2.645\beta_n$。
- 转折点：0.7 V（$M_1$ 导通），2.2 V（$M_2$ 截止），以及过零点。
