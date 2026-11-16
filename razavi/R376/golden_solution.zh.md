$$V_{n,in} = \frac{g_mR_FV_{n,M1} - V_{n,RF}}{g_mR_F - 1},\qquad I_{n,in} = \frac{g_m(V_{n,M1} - V_{n,RF})}{g_mR_F - 1}$$
两者包含相同的两个噪声源，因此强相关（而不是相互独立）。它们的功率谱密度为：$\overline{V_{n,in}^2} = \dfrac{4kT\gamma g_mR_F^2 + 4kTR_F}{(g_mR_F - 1)^2} = \dfrac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2}$ 和 $\overline{I_{n,in}^2} = \dfrac{4kT\gamma g_m + 4kTR_Fg_m^2}{(g_mR_F - 1)^2}$；互谱（cross-spectrum）为 $\overline{V_{n,in}I_{n,in}^*} = \dfrac{4kTg_mR_F(1+\gamma)}{(g_mR_F - 1)^2}$。

- $V_{n,in}$（输入端短路，$V_G = 0$）：含噪声电路的 $V_{out} = V_{n,RF} - g_mR_FV_{n,M1}$；无噪声电路的增益 $V_{out}/V_G = 1 - g_mR_F$。令两者相等。
- $I_{n,in}$（输入端开路）：含噪声电路中 $R_F$ 没有电流，且 $g_m(V_G + V_{n,M1}) = 0$，因此 $V_{out} = V_{n,RF} - V_{n,M1}$；无噪声电路的跨阻（transimpedance）为 $V_{out}/I_{in} = (1 - g_mR_F)/g_m$。令两者相等。
