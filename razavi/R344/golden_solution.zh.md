$$\overline{V_{n,in}^2} = \frac{4kT\left(\gamma g_m + \dfrac{1}{R_D} + \dfrac{1}{R_1}\right)}{\left(g_m + \dfrac{1}{R_1}\right)^2},\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_D}$$

- 电压（输入短路）：$R_1$ 接在输出端与交流地之间，与 $R_D$ 并联。输出短路噪声电流为 $I_{n1} + I_{n,RD} + I_{n,R1}$。信号：用 $V_{in}$ 驱动源极，得到输出短路电流 $(g_m + 1/R_1)V_{in}$（电压增益为 $(g_m + 1/R_1)(R_D\|R_1)$）。两者相除即可。
- 电流（输入开路）：源极节点只与 $M_1$ 和 $R_1$ 相连，因此流过 $M_1$ 与 $R_1$ 的总电流为零；$M_1$ 和 $R_1$ 的噪声只在该回路中环流。输出噪声为 $4kTR_D$，输入电流经 $M_1$/$R_1$ 流入 $R_D$，跨阻（transimpedance）为 $R_D$，因此 $\overline{I_{n,in}^2} = 4kT/R_D$。
