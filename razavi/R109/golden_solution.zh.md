$I_X = I_{D1} - |I_{D2}|$，其中 $M_2$ 为二极管连接（diode-connected）：$I_X$ 从 $-\tfrac12\beta_p(2.2)^2 = -2.42\beta_p$ 开始上升（两个电流都使它增大），当 $V_X$ 同时高于 $V_b - 0.7$ V 和 2.2 V 时，平坦地保持在 $I_1 = \tfrac12\beta_n(V_b - 0.7)^2$。

- $M_2$：$V_{SG} = V_{SD} = 3 - V_X$，导通时处于饱和区（saturation region）：当 $V_X < 2.2$ V 时 $|I_{D2}| = \tfrac12\beta_p(2.2 - V_X)^2$，高于此值时为零。
- $M_1$：$V_X < V_b - 0.7$ V 时处于线性区（triode region），电流为 $\beta_n[(V_b - 0.7)V_X - V_X^2/2]$；高于此值时饱和，电流为 $I_1$。
- $I_X$ 单调增大；在 $I_{D1} = |I_{D2}|$ 处过零；终值为 $I_1$（若计入沟道长度调制，斜率为 $\lambda I_1$）。
- 转折点：$V_X = V_b - 0.7$ V（$M_1$ 进入饱和），$V_X = 2.2$ V（$M_2$ 截止）。
