$f_{-3\text{dB}} \approx 71$ MHz（$\omega_{-3\text{dB}} \approx 4.46\times10^8$ rad/s）；低频增益为 $-g_mR_L \approx -9.68$。

- $L_{\text{eff}} = 1.6\ \mu$m，$W/L = 62.5$；$g_m = \sqrt{2k_n'(W/L)I_D} = \sqrt{2(60\ \mu)(62.5)(0.5\ \mathrm{m})} = 1.94$ mA/V。
- $C_{gs} = \tfrac23(100)(1.6)(0.7)\ \mathrm{fF} = 74.7$ fF。
- 密勒电容（Miller capacitance）$C_M = C_{gd}(1 + g_mR_L) = 14\ \mathrm{fF}\times(1 + 9.68) = 150$ fF；总输入电容 $C_t = C_{gs} + C_M = 224$ fF。
- 栅极节点看到的电阻是 $R_S$（没有 $r_\pi$，也没有 $r_b$）：$\omega_{-3\text{dB}} = 1/(R_SC_t) = 1/(10\ \mathrm{k\Omega}\times224\ \mathrm{fF}) = 4.46\times10^8$ rad/s → 71.0 MHz。
- （作为比较，计入 $R_L/R_S$ 项的主极点 $1/\{R_S[C_{gs} + C_{gd}(1 + g_mR_L + R_L/R_S)]\}$ 给出 68.8 MHz；精确的双极点响应的 −3-dB 点位于 69.5 MHz。）
