$v_o/v_i \approx -2.96$；$T_0 \approx 0.74$ ns，$f_{-3\text{dB}} \approx 216$ MHz。

- $g_m = 1.94$ mA/V，$C_{gs} = 74.7$ fF。
- 增益：输出节点 $v_o(1/R_L + 1/R_F) = v_g(1/R_F - g_m)$ → $v_o = -8.71\,v_g$；栅极节点 $v_i/R_S = v_g(1/R_S + 1/R_F) - v_o/R_F$ → $v_g = 0.340\,v_i$；$v_o/v_i = -2.96$。
- $R_{gs0}$：栅极到地 $= R_S\|\dfrac{R_F + R_L}{1 + g_mR_L} = 10\ \mathrm{k}\|5.15\ \mathrm{k} = 3.40\ \mathrm{k\Omega}$ → 0.254 ns。
- $R_{gd0} = (R_S + R_L + g_mR_LR_S)\|R_F = 111.8\ \mathrm{k}\|50\ \mathrm{k} = 34.6\ \mathrm{k\Omega}$ → 0.484 ns。
- $T_0 = 0.737$ ns → $f_{-3\text{dB}} = 216$ MHz（精确值：222 MHz）。
