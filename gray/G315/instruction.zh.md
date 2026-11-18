对于 [图 1] 的 CMOS 运放（电源 ±1.5 V，偏置电流 200 μA，画图长度 $L = 1$ μm，宽长比如图所示，补偿电容 5 pF），假设右半平面零点（right-half-plane zero）已被移到无穷远：$M_9$ 工作在线性区（triode region），其栅极电压由复制偏置（replica bias）电路产生，使其导通电阻（on-resistance）等于 $1/g_{m6}$。求在运放接成单位增益反馈时，仍能保持 45° 相位裕度（phase margin）的情况下，可直接接到输出端的最大负载电容。除负载电容引起的极点外，忽略所有高阶极点，并忽略所有晶体管的结电容（junction capacitance）。

器件参数（平方律模型）：$k'_n = 194$ μA/V²，$k'_p = 64.7$ μA/V²（$C_{ox}$ = 4.32 fF/μm²），$V_{tn} = 0.6$ V，$V_{tp} = -0.8$ V，$L_d = 0.09$ μm，有源区晶体管取 $X_d = 0.1$ μm（$L_{\text{eff}} = L_{\text{drwn}} - 2L_d - X_d$），交叠电容（overlap capacitance）为 0.35 fF/μm。
