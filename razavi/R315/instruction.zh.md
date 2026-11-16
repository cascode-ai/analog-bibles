传递函数 $V_{out}/V_{in}$ 的零点可以这样求得：它是使输入非零时 $V_{out}$ 为零的复频率 $s_z$。将输出节点对交流地短路，求出使流入该短路线的电流为零的 $s$ 值。用这种方法求 [图 1] 所示电路中 $V_{out}/V_{in}$ 的零点。

该电路是带有源电流镜（current mirror）负载的差分对（differential pair）的小信号模型（small-signal model）：二极管连接（diode-connected）的 PMOS 管 $M_3$ 用从 $V_{DD}$ 到电流镜节点 E 的电阻 $1/g_{mP}$ 表示；$C_E$ 是 E 点的总电容；$M_4$（栅极接 E）的跨导（transconductance）为 $g_{mP}$，其输出电阻已计入 $r_{OP}$；输入晶体管和 $V_{in}$ 用戴维南等效电路（Thevenin equivalent）$V_X = g_{mN}r_{ON}V_{in}$、$R_X = 2r_{ON}$ 代替；$C_L$ 和 $r_{OP}$ 是输出端的负载。
