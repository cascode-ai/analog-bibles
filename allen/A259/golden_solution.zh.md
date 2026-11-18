$R_z = 1/g_{mII} = 2$ kΩ（零点位于无穷远处）。各极点（近似表达式；方括号内为三次方程的精确根）：

- $p_1 \approx \dfrac{-1}{g_{mII}R_{II}R_IC_c} = \dfrac{-1}{(500\ \mu)(100\ \mathrm k)(150\ \mathrm k)(30\ \mathrm p)} = -4.44\times10^3$ rad/s [精确值 −4.29 × 10³ rad/s]。
- $p_2 \approx -g_{mII}/C_{II} = -100\times10^6$ rad/s；较完整的形式 $-g_{mII}C_c/(C_IC_{II} + C_cC_I + C_cC_{II}) = -81\times10^6$ rad/s [精确值 −98.3 × 10⁶ rad/s]。
- $p_4 \approx -1/(R_zC_I) = -500\times10^6$ rad/s [精确值 −527 × 10⁶ rad/s]。

推导：$V_{out}/V_{in}$ 的分子为 $1 - s(C_c/g_{mII} - R_zC_c)$，当 $R_z = 1/g_{mII}$ 时其 $s$ 项消失。分母 $1 + bs + cs^2 + ds^3$ 中 $b = (C_{II}+C_c)R_{II} + (C_I+C_c)R_I + g_{mII}R_IR_{II}C_c + R_zC_c$，$c = R_IR_{II}(C_IC_{II} + C_cC_I + C_cC_{II}) + R_zC_c(R_IC_I + R_{II}C_{II})$，$d = R_IR_{II}R_zC_IC_{II}C_c$；对于相距很远的根，$p_1 \approx -1/b$，$p_2 \approx -b/c$，$p_4 \approx -c/d$。
