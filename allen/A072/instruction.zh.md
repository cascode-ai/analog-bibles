对于 [图 1] 所示电路，假设 M1 没有任何寄生电容。M1 为 n 沟道晶体管，栅极接 5 V，衬底接地。电压源 $v_{in}$ 为小信号源，而电压源 $V_{DC}$ 的直流值为 3 V；负载为 2 pF 电容。设计 M1（求其 $W/L$），使 $|v_{out}/v_{in}|$ 达到 [图 2] 所示的渐近频率响应（asymptotic frequency response）。

器件参数（n 沟道）：$V_{T0} = 0.7$ V，$K' = 110\ \mu\mathrm{A/V^2}$，$\gamma = 0.4\ \mathrm{V^{1/2}}$，$2|\phi_F| = 0.7$ V。非饱和区（nonsaturation region）：$i_D = K'\frac{W}{L}\left[(v_{GS}-V_T)v_{DS} - \frac{v_{DS}^2}{2}\right]$；$V_T = V_{T0} + \gamma\left(\sqrt{2|\phi_F| + v_{SB}} - \sqrt{2|\phi_F|}\right)$。
