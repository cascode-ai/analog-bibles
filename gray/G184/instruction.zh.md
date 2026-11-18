对于交流电路图（ac schematic）如 [图 1] 所示的共源放大器，用密勒近似（Miller approximation）计算小信号电压增益 $v_o/v_i$ 的 −3-dB 频率。取 $R_S = 10\ \mathrm{k\Omega}$、$R_L = 5\ \mathrm{k\Omega}$，$I_D = 0.5$ mA。

NMOS 参数：$W = 100\ \mu$m，$L_{\text{drwn}} = 2\ \mu$m，$L_d = 0.2\ \mu$m，$X_d = 0$（有效沟道长度 $L_{\text{eff}} = L_{\text{drwn}} - 2L_d - X_d$），$k_n' = \mu_nC_{ox} = 60\ \mu\mathrm{A/V^2}$，$\lambda = 0$，$\gamma = 0$，$C_{ox} = 0.7\ \mathrm{fF/\mu m^2}$，$C_{gd} = 14$ fF，$C_{sb} = C_{db} = 0$。取 $C_{gs} = \tfrac{2}{3}WL_{\text{eff}}C_{ox}$，并采用平方律模型 $I_D = \tfrac{k_n'}{2}\tfrac{W}{L_{\text{eff}}}(V_{GS}-V_t)^2$。
