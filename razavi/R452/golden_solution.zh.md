$\mathrm{CMRR} = \dfrac{A_{DM}}{A_{CM}} \approx (1 + 2g_{m1,2}R_{SS})\,g_{m3,4}(r_{O1,2}\|r_{O3,4}) \approx 2g_{m1}g_{m3}R_{SS}(r_{O2}\|r_{O4})$；对于理想的尾电流源，它为无穷大。

- 差模增益（differential gain）：单端输出、以有源电流镜（active current mirror）为负载时，$A_{DM} = g_{m1,2}(r_{O2}\|r_{O4})$。
- 共模增益：共模输入使每个漏极电流变化 $\Delta I \approx g_{m1}v_{CM}/(1 + 2g_{m1}R_{SS})$。二极管连接（diode-connected）的 $M_3$ 把它分得的电流转换为 $-\Delta I/g_{m3}$，由对称性，输出跟随二极管节点：$A_{CM} \approx -\dfrac{1}{1 + 2g_{m1,2}R_{SS}}\cdot\dfrac{g_{m1,2}}{g_{m3,4}}$（与 $1/g_{m3}$ 相比忽略 $r_O$ 的影响），当 $R_{SS}$ 很大时 ≈ $-1/(2g_{m3,4}R_{SS})$。
- 两者相除即得上面的 CMRR；例如，当 $R_{SS} \sim r_O$ 时，其量级为 $(g_m r_O)^2$。
- 在这个闭环电路中，运放的输入共模电平（common-mode level）跟随 $V_{in}$，因此有限的 CMRR 表现为约 $V_{in,CM}/\mathrm{CMRR}$ 的输入参考误差。
