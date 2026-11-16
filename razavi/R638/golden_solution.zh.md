$\dfrac{V_{out}}{V_{in}} = \dfrac{-g_mC_1R_PL_Ps^2}{R_PC_1C_2L_Ps^3 + (C_1+C_2)L_Ps^2 + [g_mL_P + R_P(C_1+C_2)]s + g_mR_P}$
其分母与在源极加电流激励时相同：只要激励置零后能恢复原电路（电压源为零时栅极回到交流地），电路的自然频率就与激励施加在何处无关。
- 令 $s = j\omega_R$ 处的虚部为零：$\omega_R^2 = \dfrac{g_mL_P + R_P(C_1+C_2)}{R_PL_PC_1C_2} \approx \dfrac{1}{L_P\,C_1C_2/(C_1+C_2)}$（当 $g_mL_P \ll R_P(C_1+C_2)$ 时）。
- 令实部为零：$(C_1+C_2)L_P\omega_R^2 = g_mR_P$ → $g_mR_P = \dfrac{(C_1+C_2)^2}{C_1C_2} = \dfrac{C_1}{C_2}\left(1 + \dfrac{C_2}{C_1}\right)^2$。振荡要求 $g_mR_P \ge (C_1+C_2)^2/(C_1C_2)$，其最小值 4 出现在 $C_1 = C_2$ 时。

推导：源极节点 S：$g_m(V_{in} - V_S) + C_2s(V_{out} - V_S) = C_1sV_S$。漏极节点：$V_{out}/(L_Ps) + V_{out}/R_P + g_m(V_{in} - V_S) + C_2s(V_{out} - V_S) = 0$，结合第一个方程，它化为 $V_{out}(1/L_Ps + 1/R_P) = -C_1sV_S$。解得 $V_S/V_{in} = g_m(R_P + L_Ps)/D(s)$，$V_{out}/V_{in}$ 如上式。
