计算 [图 1] 所示带有源负载的共源放大器的小信号电压增益（输入管 $T_1$ 为 n 沟道；$T_2$、$T_3$ 为 p 沟道，$T_3$ 为二极管连接并流过 $I_{REF}$）。假设 $V_{DD} = 3$ V，且所有晶体管都工作在有源区。分别对 $I_{REF}$ 为 1 mA、100 µA、10 µA 和 1 µA 进行计算。假设每个晶体管的版图尺寸为 $W = 100$ µm、$L = 1$ µm，且 $X_d = 0$。

(a) 首先，假设在所有情况下晶体管都工作在强反型（strong inversion）区。
(b) 计入弱反型（weak inversion）的影响，重做 (a)：用 $g_m = I_D/(nV_T)$（$n = 1.5$）计算 $T_1$ 的跨导（transconductance）。假设晶体管的过驱动电压小于 $2nV_T$ 时工作在弱反型区。
(c) 用 SPICE 检验你在 (a) 和 (b) 中的计算。

工艺数据：$k'_n = 194\ \mu\mathrm{A/V^2}$，$k'_p = 64.7\ \mu\mathrm{A/V^2}$（$t_{ox}$ = 80 Å，$\mu_n$ = 450，$\mu_p$ = 150 cm²/V·s），$V_{tn} = 0.6$ V，$V_{tp} = -0.8$ V，$L_d = 0.09$ µm（$L_{\text{eff}} = 0.82$ µm），$dX_d/dV_{DS}$ = 0.02 µm/V（n 沟道）和 0.04 µm/V（p 沟道），$\lambda = (dX_d/dV_{DS})/L_{\text{eff}}$：$\lambda_n = 0.0244\ \mathrm{V^{-1}}$，$\lambda_p = 0.0488\ \mathrm{V^{-1}}$；$V_T = 26$ mV。
