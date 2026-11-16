$M_2$ 不产生净误差。误差来自 $M_1$ 的关断，并在多个周期中逐渐累积到其全部值：
$$\Delta V_{out} \to -\Delta V_1,\qquad \Delta V_1 \approx \frac{\alpha\,WLC_{ox}(V_{DD} - V_{in} - V_{TH}) + WC_{ov}V_{DD}}{C},$$
其中 α 是 $M_1$ 的沟道电荷中流向 $C_1$ 的比例（最坏情况为 1，平均分配时为 ½）。输入最低时（$V_{in} = 0$，$V_{TH} = V_{TH0}$）误差最大：$|\Delta V_{out}|_{max} \approx [WLC_{ox}(V_{DD} - V_{TH0}) + WC_{ov}V_{DD}]/C = (2.3\ \mathrm{V}\cdot WLC_{ox} + 3\ \mathrm{V}\cdot WC_{ov})/C$（全部电荷流向 $C_1$），若只有一半电荷流向该电容，则为 $(1.15\ \mathrm{V}\cdot WLC_{ox} + 3\ \mathrm{V}\cdot WC_{ov})/C$。

- $M_1$ 关断（CK 下降）时，把其沟道电荷 $WLC_{ox}(V_{DD} - V_{in} - V_{TH})$ 中的 α 部分注入 $C_1$，并经其交叠电容耦合 $-V_{DD}WC_{ov}/(C + WC_{ov})$。因此 $V_{C1} = V_{in} - \Delta V_1$：这是一个与输入相关的误差，包括增益误差、失调以及经由体效应（body effect）产生的非线性（nonlinearity）。
- $M_2$：当 $\overline{CK}$ 上升时，$M_2$ 从合并后的 $C_1$–$C_2$ 节点吸取 $q_2 = WLC_{ox}(V_{DD} - V_x - V_{TH})$ 以形成沟道，同时其上升的栅极经两侧交叠电容耦合电荷。当它在同一 $V_x$ 下关断时，又把 $q_2$ 归还，两个电容各得一半，而下降的栅极也把同样的交叠电荷耦合回去。由于 $C_1 = C_2$、两侧交叠电容相等且电荷平均分配，电荷守恒给出 $V_{1f} + V_{2f} = V_1 + V_2$ 以及 $V_{1f} = V_{2f}$，因此 $M_2$ 不引入净误差。
- 电荷分享（charge sharing）：$V_{out}[k] = (V_{in} - \Delta V_1 + V_{out}[k-1])/2$。第一次转移后输出误差为 $\Delta V_1/2$，经过许多周期后趋近于 $\Delta V_1$，且始终不超过 $\Delta V_1$。
- 如果忽略 $M_2$ 导通时吸收的电荷，它的关断看起来会在 $C_2$ 上叠加一个台阶误差（pedestal）$-[WLC_{ox}(V_{DD} - V_{out} - V_{TH})/2 + WC_{ov}V_{DD}]/C$。但这个台阶已被导通过程抵消。
- 与时钟相位的关系：上述值对应保持输出（$M_2$ 关断之后），这是一个周期中误差最大的时刻。$M_2$ 导通期间，$V_{out}$ 比它高 $[q_2/2 + WC_{ov}V_{DD}]/C$，即 $V_{out,on} \approx V_{in} + (\tfrac12 - \alpha)WLC_{ox}(V_{DD} - V_{in} - V_{TH})/C$；当 α = ½ 时，导通阶段的输出恰好等于 $V_{in}$，而保持值仍为 $V_{in} - \Delta V_1$。
- 二阶效应：两个节点上的寄生负载并不相等（$C_1$ 节点为 $C + 2WC_{ov}$，$V_{out}$ 处为 $C + WC_{ov}$），因此 $M_2$ 误差的抵消以及上述分母只在 $WC_{ov} \ll C$ 时才精确成立。保留这些寄生电容的集总分析，例如 α = ½ 时的 $|\Delta V_{out}| = [q_1/2 + WC_{ov}V_{DD}]/(C + WC_{ov})$，在一阶近似下与之等价。
