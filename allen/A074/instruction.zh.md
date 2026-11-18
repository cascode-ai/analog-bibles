考虑 [图 1] 所示电路：n 沟道开关 M1（$W = 5\ \mu$m，$L = 1\ \mu$m，衬底接地）将 2.0 V 电压源连接到电容 $C_1 = 30$ fF。其栅极由脉冲 $\phi_1$ 驱动，该脉冲在 10 ns 内从 0 V 上升到 5 V，保持在 5 V，再在 10 ns 内回落到 0 V；$t_1$ 为脉冲结束之后的某一时刻。初始时 $C_1$ 上的电荷为零，且 $\phi_1$ 保持高电平的时间足够长，使 $C_1$ 能完全充电。假设该电路适用电荷注入（charge injection）的慢速区（slow regime），此时误差（期望电压 $V_S$ 减去负载电容 $C_L$ 上的实际电压）为

$V_{error} = \left(\dfrac{W\cdot CGDO + C_{channel}/2}{C_L}\right)\sqrt{\dfrac{\pi U C_L}{2\beta}} + \dfrac{W\cdot CGDO}{C_L}\,(V_S + V_T - V_L)$，

其中栅极电压按 $v_G = V_H - Ut$ 从 $V_H$ 下降到 $V_L$，$\beta = K'W/L$，$C_{channel} = WLC_{ox}$，$V_T$ 为开关在其工作点处的阈值电压。计算 $t_1$ 时刻的 $v_{out}$。假设交叠电容（overlap capacitance）$W\cdot CGSO = W\cdot CGDO = 5$ fF。不能忽略体效应（body effect）。

器件参数（n 沟道）：$V_{T0} = 0.7$ V，$K' = 110\ \mu\mathrm{A/V^2}$，$\gamma = 0.4\ \mathrm{V^{1/2}}$，$2|\phi_F| = 0.7$ V，$C_{ox} = 24.7\times10^{-4}\ \mathrm{F/m^2}$。
