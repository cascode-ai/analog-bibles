$A_{DM} = -g_mR_D\,\dfrac{1 + 2g_mR_P}{1 + g_mR_D + 2g_mR_P} \approx -g_mR_D$；$A_{CM} = \dfrac{V_{out}}{V_{in,CM}} = \dfrac{2g_mR_D}{1 + g_mR_D + 2g_mR_P} \approx \dfrac{R_D}{R_P}$；CMRR $= \dfrac{1 + 2g_mR_P}{2} \approx g_mR_P$。
- 当 λ = 0 时，$M_3$ 是理想电流源（current source）：$i_1 + i_2 + i_{RP} = 0$，其中 $i_{RP} = (v_X - v_P)/R_P$ 从 $M_1$ 的漏极 X 流向 P。此外 $i_1 = g_m(v_{in1} - v_P)$，$i_2 = g_m(v_{in2} - v_P)$，$v_X = -R_D(i_1 + i_{RP})$，$v_Y = -R_Di_2$。（在直流下，栅极电压相等使 $I_{D1} = I_{D2}$，因此两者的 $g_m$ 相同。）
- 共模输入（$v_{in1} = v_{in2} = v_c$，$u = v_c - v_P$）：$i_1 = i_2 = g_mu$，$i_{RP} = -2g_mu$，因此 $v_X = g_muR_D$，$v_Y = -g_muR_D$，即输出是纯差分的，输出共模电平（common-mode level）不变；再由 $i_{RP} = (v_X - v_P)/R_P$ 得 $u = v_c/(1 + g_mR_D + 2g_mR_P)$，从而得到上面的 $A_{CM}$。
- 差分输入：在 $v_{in1} = -v_{in2}$ 下求解同一组方程，得到上面的 $A_{DM}$。
- 机理：$R_P$ 把尾节点与一个输出端连在一起，因此使 $V_P$ 变化的共模输入会驱动一个流过 $R_P$ 的电流，而这个电流只从一侧抽取，于是即使尾电流源是理想的，共模也会转换为差模（differential-mode）。
