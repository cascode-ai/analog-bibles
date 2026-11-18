计算 [图 1] 所示电路中电荷馈通（charge feedthrough）的影响：一个 $W/L = 1.6\ \mu\mathrm{m}/0.8\ \mu\mathrm{m}$ 的 n 沟道开关（衬底接地）将源电压 $V_S = 1.5$ V 连接到负载电容 $C_L = 150$ fF。为了断开开关，栅极电压 $\phi_1$ 从 5 V 线性下降到 0 V。针对两种情况求 $C_L$ 上的误差电压和 $C_L$ 上的最终电压：情况 1，下降时间为 0.1 ns；情况 2，下降时间为 8 ns。忽略 ΔL 和 ΔW 效应。

电荷馈通模型：栅极电压为 $v_G = V_H - Ut$（$V_H$ = 5 V，$V_L$ = 0 V，$U$ 为斜率的大小）；$V_{HT} = V_H - V_S - V_T$，其中 $V_T$ 为开关在其工作点处的阈值电压；$\beta = K'W/L$，$C_{channel} = WLC_{ox}$。
- 慢速区（slow regime），$\beta V_{HT}^2/(2C_L) \gg U$：$V_{error} = \left(\dfrac{W\cdot CGDO + C_{channel}/2}{C_L}\right)\sqrt{\dfrac{\pi U C_L}{2\beta}} + \dfrac{W\cdot CGDO}{C_L}(V_S + V_T - V_L)$。
- 快速区（fast regime），$\beta V_{HT}^2/(2C_L) \ll U$：$V_{error} = \left(\dfrac{W\cdot CGDO + C_{channel}/2}{C_L}\right)\left(V_{HT} - \dfrac{\beta V_{HT}^3}{6UC_L}\right) + \dfrac{W\cdot CGDO}{C_L}(V_S + V_T - V_L)$。

器件参数（n 沟道）：$V_{T0} = 0.7$ V，$K' = 110\ \mu\mathrm{A/V^2}$，$\gamma = 0.4\ \mathrm{V^{1/2}}$，$2|\phi_F| = 0.7$ V，$C_{ox} = 24.7\times10^{-4}\ \mathrm{F/m^2}$，$CGDO = 220\times10^{-12}$ F/m。
