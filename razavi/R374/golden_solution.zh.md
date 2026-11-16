输入参考量与 $r_O$ 无关：
$$\overline{V_{n,in}^2} = \frac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2},\qquad \overline{I_{n,in}^2} = \frac{4kTR_Fg_m^2 + 4kT\gamma g_m}{(g_mR_F - 1)^2}$$
与 λ = 0 时相同。只有输出噪声电压发生变化：输入端短路时 $\overline{V_{n,out}^2} = 4kT\left(\dfrac{1}{R_F} + \gamma g_m\right)(R_F\|r_O)^2$（而不是 $R_F^2$）；输入端开路时 $\overline{V_{n,out}^2} = \dfrac{4kT(g_m^2R_F + \gamma g_m)}{(g_m + 1/r_O)^2}$（而不是 $4kTR_F + 4kT\gamma/g_m$）。

- $r_O$ 是跨接在输出端口上的无噪声元件。若用输出短路电流来分析，它中间没有电流，因此噪声电流和传递函数都与 λ = 0 的情况相同。
- 输入端短路：$I_{n,out} = I_{n,M1} + I_{n,RF}$，$G_m = g_m - 1/R_F$。
- 输入端开路：$R_F$ 中没有电流，因此 $V_{n,RF}$ 出现在栅极：$I_{n,out} = g_mV_{n,RF} + I_{n,M1}$；电流增益为 $g_mR_F - 1$。
- 若改用开路输出电压来分析，得到的输入参考值相同，因为 $r_O$ 使噪声和增益按相同比例变化。
