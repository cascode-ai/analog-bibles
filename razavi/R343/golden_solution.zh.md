$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + 4kTR_G + \frac{4kT}{g_m^2R_D},\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_D}$$

- 电压（输入短路，增益为 $g_mR_D$）：$M_1$ → $4kT\gamma/g_m$；$R_D$ → $4kT/(g_m^2R_D)$；$R_G$：由于没有栅极电流，其噪声电压 $4kTR_G$ 直接加在栅极上，作用与输入电压相同（只有 $V_{GS}$ 起作用）→ $4kTR_G$。
- 电流（输入开路）：源极上没有连接其他元件，因此 $M_1$ 的总电流（沟道电流加上其噪声）为零；$M_1$ 和 $R_G$ 的噪声都到达不了输出端。输出噪声为 $4kTR_D$；输入电流全部经 $M_1$ 流入 $R_D$，跨阻（transimpedance）为 $R_D$，因此 $\overline{I_{n,in}^2} = 4kT/R_D$。
