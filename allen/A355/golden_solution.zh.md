$\overline{e_{eq}^2} \approx 1.0\times10^{-16}\ \mathrm{V^2/Hz}$，即 $e_{eq} \approx 10$ nV/√Hz。

- $g_m = \sqrt{2K'(W/L)I_D} = \sqrt{2\times25\ \mu\times15\times20\ \mu} = 122.5$ µS。
- MOSFET：$8kT/(3g_m) = 1.104\times10^{-20}/1.225\times10^{-4} = 9.01\times10^{-17}$ V²/Hz（9.5 nV/√Hz）。
- $R_D$：输出噪声电流为 $4kT/R_D$，除以 $g_m^2$ 折合到输入端：$4kT/(g_m^2R_D) = 1.656\times10^{-20}/(1.5\times10^{-8}\times10^5) = 1.10\times10^{-17}$ V²/Hz。
- 总计 $1.01\times10^{-16}$ V²/Hz → 10.1 nV/√Hz。（$r_{ds}$ 对输出端的信号和噪声影响相同，因而在结果中消去。）
