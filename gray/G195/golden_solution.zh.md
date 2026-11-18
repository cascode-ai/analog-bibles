$\dfrac{i_o}{i_i} = \dfrac{1}{1 + s\,C_{gs}/g_m}$（$g_{mb} = 0$，$C_{sb} = 0$）：低频时为单位增益，极点位于 $g_m/C_{gs} = 2.59\times10^{10}$ rad/s，因此 $f_{-3\text{dB}} \approx 4.1$ GHz。

- $g_m = \sqrt{2(60\ \mu)(62.5)(0.5\ \mathrm{m})} = 1.94$ mA/V；$C_{gs} = 74.7$ fF。
- 源极处的 KCL：$i_i = -v_{gs}(g_m + sC_{gs})$；$i_o = -g_mv_{gs}$（撇开符号约定，幅值如上）。
- $C_{gd}$ 接在栅极与漏极之间，二者都处于交流地，因此它不起作用；不存在密勒效应（Miller effect）。
