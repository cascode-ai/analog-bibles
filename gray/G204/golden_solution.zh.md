$v_o/v_i = -\dfrac{\beta(\beta + 2)R_L}{R_S + r_{\pi1} + (\beta + 1)r_{\pi2}} \approx -49.1$。

- $r_{\pi1} = \beta/g_{m1} = 100/(0.385\ \mathrm{mA/V}) = 260\ \mathrm{k\Omega}$；$r_{\pi2} = 100/(38.5\ \mathrm{mA/V}) = 2.6\ \mathrm{k\Omega}$。
- 输入电阻（input resistance）$R_i = r_{\pi1} + (\beta + 1)r_{\pi2} = 260 + 262.6 = 522.6\ \mathrm{k\Omega}$；$i_{b1} = v_i/(R_S + R_i) = v_i/622.6\ \mathrm{k\Omega}$。
- $i_{b2} = (\beta + 1)i_{b1}$；输出电流 $i_{c1} + i_{c2} = \beta i_{b1} + \beta(\beta + 1)i_{b1} = \beta(\beta + 2)i_{b1} = 10200\,i_{b1}$。
- $v_o = -10200 \times 3\ \mathrm{k\Omega}\,i_{b1}$ → $v_o/v_i = -3.06\times10^7/622.6\times10^3 = -49.1$。
