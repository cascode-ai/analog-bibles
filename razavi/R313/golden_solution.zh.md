共栅（CG）级：低频增益 $g_mR_D/(1 + g_mR_S) \approx 1.68$；输入极点 ≈ $4.9\times10^{10}$ rad/s（≈ 7.8 GHz）；输出极点 ≈ $8.0\times10^9$ rad/s（≈ 1.28 GHz）。当 λ = 0 时，这两个极点是精确的（输入与输出相互隔离）。

推导：
- $g_m = \sqrt{2(134\ \mu)(100)(1\ \mathrm{mA})} = 5.18$ mS（$1/g_m = 193\ \Omega$）。
- $C_{GS} = \tfrac23(96) + 20 = 84$ fF，$C_{GD} = 20$ fF，$C_{SB} = C_{DB} = 75(0.56) + 2(51.5)(0.0035) = 42.4$ fF。
- $C_S = C_{GS} + C_{SB} = 126.4$ fF（栅极处于交流地）；$C_D = C_{GD} + C_{DB} = 62.4$ fF。
- $\omega_{in} = \dfrac{1}{(R_S\|1/g_m)C_S} = \dfrac{g_m + 1/R_S}{C_S} = \dfrac{6.18\ \mathrm{mS}}{126.4\ \mathrm{fF}} = 4.89\times10^{10}$ rad/s；$\omega_{out} = \dfrac{1}{R_DC_D} = 8.02\times10^9$ rad/s。
- $\dfrac{V_{out}}{V_{in}} = \dfrac{g_mR_D}{1 + g_mR_S}\cdot\dfrac{1}{(1 + s/\omega_{in})(1 + s/\omega_{out})}$。

与共源（CS）级的比较（相同器件、$R_S$、$R_D$，λ = 0）：
- 共源级增益为 $-g_mR_D = -10.4$，约大 6.2 倍（即 $1 + g_mR_S$）：在共栅级中，很低的输入电阻 $1/g_m$ 与 $R_S$ 构成了分压器。
- 共源级的极点（由其二阶分母精确求得）≈ $2.5\times10^9$ rad/s（≈ 0.39 GHz）和 ≈ $3.3\times10^{10}$ rad/s（≈ 5.3 GHz），另有一个位于 $g_m/C_{GD}$ ≈ 41 GHz 的右半平面零点（right-half-plane zero）。共源级的主极点（dominant pole）由经密勒效应（Miller effect）倍增的 $C_{GD}$ 决定（$1 + g_mR_D = 11.4$），比共栅级的最低极点约低 3 倍。
- 因此，共栅级以增益换取带宽（没有密勒倍增）；在本例中它的增益带宽积（gain–bandwidth product）反而较低：≈ 1.7 × 1.2 GHz，而共源级为 ≈ 10.4 × 0.39 GHz。
（若计入体效应，取 $V_{SB} = 0$，则 $g_{mb} \approx 1.23$ mS：增益 ≈ 1.73，输入极点 ≈ 9.3 GHz。）
