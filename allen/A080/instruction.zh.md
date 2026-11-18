计算 [图 1] 所示电路中电荷注入（charge injection）的影响：由 n 沟道 M1 和 p 沟道 M2 构成的 CMOS 开关（两管均为 $W/L = 0.8\ \mu\mathrm{m}/0.8\ \mu\mathrm{m}$）将 $v_{in} = 2.5$ V（直流）连接到 $C_L = 1$ pF。为断开开关，M1 的栅极从 5 V 线性下降到 0 V，同时 M2 的栅极从 0 V 线性上升到 5 V，斜率大小均为 $U = 5\ \mathrm{V}/50\ \mathrm{ns} = 10^8$ V/s。求 $v_{CL}$ 的变化量。忽略体效应。

n 沟道器件的电荷馈通（charge feedthrough）模型（栅极按 $v_G = V_H - Ut$ 从 $V_H$ = 5 V 下降到 $V_L$ = 0 V），其中 $V_{HT} = V_H - v_{in} - V_T$，$\beta = K'W/L$，$C_{channel} = WLC_{ox}$：
- 慢速区（slow regime）：$V_{error} = \left(\dfrac{W\cdot CGDO + C_{channel}/2}{C_L}\right)\sqrt{\dfrac{\pi U C_L}{2\beta}} + \dfrac{W\cdot CGDO}{C_L}(v_{in} + V_T - V_L)$。
- 快速区（fast regime）：$V_{error} = \left(\dfrac{W\cdot CGDO + C_{channel}/2}{C_L}\right)\left(V_{HT} - \dfrac{\beta V_{HT}^3}{6UC_L}\right) + \dfrac{W\cdot CGDO}{C_L}(v_{in} + V_T - V_L)$。

对 p 沟道器件采用镜像对称的表达式（栅极从 $V_L$ = 0 上升到 $V_H$ = 5 V，$V_{HT} = v_{in} - |V_T| - V_L$，交叠项为 $\frac{W\cdot CGDO}{C_L}(V_H - v_{in} + |V_T|)$）；其注入电荷的符号相反。对每个晶体管，若 $\beta V_{HT}^2/(2C_L) > U$ 则用慢速区表达式，若较小则用快速区表达式。

器件参数：n 沟道 $V_T = 0.7$ V，$K' = 110\ \mu\mathrm{A/V^2}$；p 沟道 $V_T = -0.7$ V，$K' = 50\ \mu\mathrm{A/V^2}$；两者均为 $C_{ox} = 24.7\times10^{-4}\ \mathrm{F/m^2}$，$CGDO = 220\times10^{-12}$ F/m。
