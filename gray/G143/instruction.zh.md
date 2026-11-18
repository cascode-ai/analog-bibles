[图 1] 是共源输出管 CMOS AB 类（class AB）输出级（output stage）的直流模型：p 沟道 $M_1$（源极接 $V_{DD}$）和 n 沟道 $M_2$（源极接 $-V_{SS}$）驱动输出 $V_o$（负载 $R_L$ 接地），每个栅极由一个增益为 $A$ 的误差放大器（error amplifier）驱动，误差放大器检测 $V_o$ 和 $V_i$；$V_{OSP}$ 和 $V_{OSN}$ 分别是两个误差放大器的输入参考失调电压（input-referred offset voltage）。假设：
- $k_p'(W/L)_1 = k_n'(W/L)_2 = k'(W/L)$，且 $-V_{t1} = V_{t2} = V_t$；器件服从平方律，忽略沟道长度调制和体效应。
- 当 $V_i = 0$ 且 $V_{OSP} = V_{OSN} = 0$ 时，误差放大器将器件偏置在 $-I_{D1} = I_{D2} = I_Q$，且 $V_o = 0$，因此 $V_{gs1} = -V_t - V_{ov}$，$V_{gs2} = V_t + V_{ov}$，其中 $V_{ov} = \sqrt{2I_Q/(k'(W/L))}$。
- 每个放大器输出的变化量等于其差分输入变化量的 $A$ 倍：$V_{gs1} = -V_t - V_{ov} + A[V_o - (V_i - V_{OSP})]$，$V_{gs2} = V_t + V_{ov} + A[V_o - (V_i - V_{OSN})]$。
- 漏极电流以流入漏极为正方向：在有源区内 $I_{d1} = -\tfrac{k'}{2}\tfrac{W}{L}(V_{gs1} + V_t)^2$，$I_{d2} = \tfrac{k'}{2}\tfrac{W}{L}(V_{gs2} - V_t)^2$；$I_o = V_o/R_L$，且 $I_o + I_{d1} + I_{d2} = 0$。

现在假设输入电压 $V_i$ 足够高，使 $M_1$ 工作在有源区，而 $M_2$ 截止。证明 $V_o$ 与 $V_i$ 的关系为
$$V_o = V_i + \frac{V_{ov}}{A} - V_{OSP} + \frac{1}{k'\frac{W}{L}A^2R_L} - \frac{1}{k'\frac{W}{L}A^2}\sqrt{\frac{1}{R_L^2} + 2k'\frac{W}{L}\frac{A^2}{R_L}\left(V_i + \frac{V_{ov}}{A} - V_{OSP}\right)}.$$
