[图 1] 所示为一个放大级（偏置在 10 µA 的射极跟随器 $Q_1$、$Q_4$ 驱动带 1 mA 尾电流的差分对 $Q_2$、$Q_3$；集电极电阻为 5 kΩ；电源为 ±6 V；衬底接 −6 V）。
(a) 计算低频小信号电压增益 $v_o/v_i$。
(b) 对差模半边电路（half circuit）应用零值时间常数法（zero-value time-constant method），计算增益的 −3-dB 频率。参数：$C_{cs0} = 2$ pF，$C_{\mu0} = 0.5$ pF，$C_{je} = 4$ pF（偏置点处），$f_T = 500$ MHz（$I_C = 2$ mA 时），$\beta = 200$，$r_b = 0$，$r_o = \infty$，$V_T = 26$ mV，$V_{BE(\text{on})} = 0.7$ V。所有结电容都满足 $C = C_0/(1 + V_R/\psi_0)^n$，其中 $n = 0.5$，$\psi_0 = 0.55$ V。假设在 2 mA 时 $C_\pi + C_\mu = g_m/\omega_T$，且 $C_\pi = \tau_Fg_m + C_{je}$、$C_\mu = C_{\mu0}$，由 $f_T$ 求出 $\tau_F$。
(c) 用 SPICE 求出该放大器的小信号增益和带宽，以及传递函数在 100 MHz 处的幅值和相位。
(d) 取 $r_b = 200\ \Omega$ 重复 (c) 并比较结果，以研究基区电阻（base resistance）的影响。
