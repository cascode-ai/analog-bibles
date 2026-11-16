在源极节点注入电流激励 $I_{in}$（栅极为交流地；$V_1$ 为源极电压），闭环增益为
$\dfrac{V_{out}}{I_{in}} = \dfrac{R_PL_Ps(g_m + C_2s)}{R_PL_P[C_1C_2 + C_P(C_1+C_2)]s^3 + L_P(C_1 + C_2 + g_mR_PC_P)s^2 + [g_mL_P + R_P(C_1+C_2)]s + g_mR_P}$，
等价地，特征方程为 $Y_T(s)[g_m + (C_1+C_2)s] + C_1C_2s^2 = 0$，其中 $Y_T = 1/(L_Ps) + 1/R_P + C_Ps$。
- 令 $s = j\omega_R$ 处的虚部为零：$\omega_R^2 = \dfrac{g_mL_P + R_P(C_1+C_2)}{R_PL_P[C_1C_2 + C_P(C_1+C_2)]} \approx \dfrac{C_1+C_2}{L_P[C_1C_2 + C_P(C_1+C_2)]} = \dfrac{1}{L_P[C_P + C_1C_2/(C_1+C_2)]}$，这里利用了 $g_mL_P \ll R_P(C_1+C_2)$；对于 Q 值较高的典型谐振回路（tank），这一条件成立。$C_P$ 只是与 $C_1$、$C_2$ 的串联组合并联相加。
- 令实部为零：$g_mR_P(1 - L_PC_P\omega_R^2) = L_P(C_1+C_2)\omega_R^2$。代入上面的 $\omega_R$，$1 - L_PC_P\omega_R^2 = C_1C_2/[C_1C_2 + C_P(C_1+C_2)]$，因此起振条件仍为 $g_mR_P = (C_1+C_2)^2/(C_1C_2)$（≥ 4，在 $C_1 = C_2$ 时取最小值），不受 $C_P$ 影响。
- 节点方程：输出（漏极）节点：$V_{out}Y_T - g_mV_1 + C_2s(V_{out} - V_1) = 0$（$M_1$ 从漏极到源极的电流为 $g_m(0 - V_1)$）；源极节点：$-g_mV_1 + C_2s(V_{out} - V_1) - C_1sV_1 + I_{in} = 0$。消去 $V_1$ 即得上式。
