$$\overline{V_{n,in}^2} = \frac{4kT\left(\gamma g_m + \dfrac{1}{R_D} + \dfrac{1}{R_F}\right)}{\left(g_m - \dfrac{1}{R_F}\right)^2},\qquad \overline{I_{n,in}^2} = \frac{4kT\left(g_m^2R_F + \gamma g_m + \dfrac{1}{R_D}\right)}{(g_mR_F - 1)^2}$$

- 电压（输入短路，用输出短路电流计算）：此时 $R_F$ 把输出端接到地；噪声电流为 $I_{n1} + I_{n,RD} + I_{n,RF}$；跨导（transconductance）为 $G_m = g_m - 1/R_F$。
- 电流（输入开路）：$R_F$ 中没有电流，因此栅极电压等于输出电压加上 $R_F$ 的噪声电压：$V_G = V_{out} + V_{n,RF}$。输出：$V_{out}(g_m + 1/R_D) = -(g_mV_{n,RF} + I_{n1} - I_{n,RD})$，即输出噪声为 $\dfrac{4kT(g_m^2R_F + \gamma g_m + 1/R_D)}{(g_m + 1/R_D)^2}$。
- 对输入电流的跨阻（transimpedance）：$V_{out}/I_{in} = -\dfrac{R_D(g_mR_F - 1)}{1 + g_mR_D}$。两者相除即得 $\overline{I_{n,in}^2}$。
- 当 $R_D \to \infty$，即负载为电流源（current source）时，两者分别化为 $\dfrac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2}$ 和 $\dfrac{4kTR_Fg_m^2 + 4kT\gamma g_m}{(g_mR_F - 1)^2}$。
