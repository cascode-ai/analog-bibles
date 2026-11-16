$\dfrac{V_{out}}{I_{in}} = L_Ps \parallel R_P \parallel \dfrac{1}{C_Ps} = \dfrac{R_PL_Ps}{R_PL_PC_Ps^2 + L_Ps + R_P}$：这就是谐振回路（tank）的阻抗。它在每个 $s = j\omega$ 处都是有限的（在 $\omega = 1/\sqrt{L_PC_P}$ 处达到最大值 $R_P$），而且其极点位于左半平面，因此闭环增益永远不会变为无穷大，电路不会振荡（在栅极加电压激励或在源极加电流激励，结论也相同）。

推导：
- 节点 X（$M_1$ 的源极）只与 $M_1$、$C_2$ 和理想的 $I_b$（对交流开路）相连。在 X 点应用 KCL：$-g_mV_X + (V_{out} - V_X)C_2s = 0$ → $V_X/V_{out} = C_2s/(g_m + C_2s)$。
- 经 $C_2$ 离开输出节点的电流 $(V_{out} - V_X)C_2s = g_mV_X$ 恰好被 $M_1$ 送回，它从漏极到源极的电流为 $g_m(0 - V_X) = -g_mV_X$。因此 $M_1$ 和 $C_2$ 合起来从输出节点吸取的净电流为零，$I_{in}$ 全部流入谐振回路。
