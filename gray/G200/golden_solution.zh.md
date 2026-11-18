$v_o/v_i = -g_mR_L = -9.68$；$T_0 = 1.35\ \mathrm{ns} + (101.8\ \mathrm{k\Omega})\,C_{gd}$，故 $f_{-3\text{dB}} = \dfrac{1}{2\pi[1.35\ \mathrm{ns} + 101.8\ \mathrm{k\Omega}\cdot C_{gd}]}$：$C_{gd} \to 0$ 时为 118 MHz，$C_{gd} = 5$ fF 时 ≈ 85 MHz，$C_{gd} = 14$ fF 时 ≈ 57 MHz。

- $g_m = \sqrt{2(60\ \mu)(62.5)(0.5\ \mathrm{m})} = 1.94$ mA/V；$C_{gs} + C_{gd} = g_m/(2\pi\cdot3\ \mathrm{GHz}) = 102.7$ fF，故 $C_{gs} = 102.7\ \mathrm{fF} - C_{gd}$。
- $C_{db0} = (500\ \mu\mathrm{m^2})(0.4) + (100\ \mu\mathrm{m})(0.4) = 240$ fF；$C_{db} = 240/\sqrt{1 + 7.5/0.6} = 65.3$ fF。
- 零值电阻：$R_{gs0} = R_S = 10\ \mathrm{k\Omega}$；$R_{gd0} = R_S + R_L + g_mR_LR_S = 111.8\ \mathrm{k\Omega}$；$R_{db0} = R_L = 5\ \mathrm{k\Omega}$。
- $T_0 = R_S(102.7\ \mathrm{fF} - C_{gd}) + 111.8\ \mathrm{k\Omega}\cdot C_{gd} + 5\ \mathrm{k\Omega}\times65.3\ \mathrm{fF} = 1.027\ \mathrm{ns} + 0.327\ \mathrm{ns} + 101.8\ \mathrm{k\Omega}\cdot C_{gd}$。
- 由于密勒倍增（Miller multiplication）作用于 $C_{gd}$（$R_{gd0}/R_S \approx 11$），带宽强烈依赖于未给定的 $C_{gd}$。
