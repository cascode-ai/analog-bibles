用布莱克曼公式（Blackman's impedance formula）计算 [图 1] 所示叠接 MOSFET 结构的小信号输出电阻 $R_{out}$，其两个晶体管的漏源压降相同。M1（下管）的栅极由 $v_{IN}$ 驱动（本计算中令其为零），源极接地；M2 叠接在 M1 之上，其栅极经直流源 $V_{GS2}$ 接到由输出节点到地串联的两个相等电阻 $R$ 的中点。用所有相关的小信号参数表示结果，然后在 $g_m > g_{ds} > 1/R$ 的条件下化简。假设两个 MOSFET 完全相同，并忽略体效应。

布莱克曼公式：$R_x = R_x(k = 0)\,\dfrac{1 + RR(\text{port shorted})}{1 + RR(\text{port open})}$，其中 $RR$ 为参数为 $k$ 的受控源的回归比（return ratio）。
