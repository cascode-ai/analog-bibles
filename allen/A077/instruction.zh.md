在 [图 1] 所示电路中，当栅极脉冲 $\phi_1$ 为高电平时，n 沟道开关 M1 从 2.0 V 电压源对电容 $C_1$ 充电；当 $\phi_1$ 从 $V_H$ 下降到 $V_L$（按 $v_G = V_H - Ut$）时，电荷馈通（charge feedthrough）会扰动 $C_1$ 上保持的电压。只考虑慢速区（slow regime）的电荷馈通，此时负载电容 $C_L$（$= C_1$）上的误差为

$V_{error} = \left(\dfrac{W\cdot CGDO + C_{channel}/2}{C_L}\right)\sqrt{\dfrac{\pi U C_L}{2\beta}} + \dfrac{W\cdot CGDO}{C_L}\,(V_S + V_T - V_L)$

（$V_S$ 为源电压，$V_T$ 为开关的阈值电压，$\beta = K'W/L$，$C_{channel} = WLC_{ox}$）。减小 $\phi_1$ 脉冲的幅度会影响所产生的电荷馈通吗？减小 $\phi_1$ 脉冲的幅度对电压传送到输出端的精度有什么影响？
