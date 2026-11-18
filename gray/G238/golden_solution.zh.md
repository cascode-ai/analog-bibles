$i_o/i_i = 4$；$T_0 = 0.194$ ns → $f_{-3\text{dB}} \approx 823$ MHz；$t_r = 2.2T_0 \approx 0.43$ ns。

- $g_{m1} = 2I_{D1}/V_{ov} = 6.67$ mA/V，$g_{m2} = 26.7$ mA/V；$i_o/i_i = g_{m2}/g_{m1} = 4$。
- 只有栅极节点的电阻不为零，为 $1/g_{m1} = 150\ \Omega$。该节点上的电容：$C_{gs1} + C_{db1} + C_{gs2} + C_{gd2} = 0.2 + 0.09 + 0.8 + 0.2 = 1.29$ pF（$C_{gd1}$ 被二极管连接短路；$C_{sb1}$、$C_{sb2}$、$C_{db2}$ 两端都接交流地）。
- $T_0 = 150\ \Omega\times1.29\ \mathrm{pF} = 0.194$ ns → $\omega_{-3\text{dB}} = 5.17\times10^9$ rad/s，823 MHz（这是单极点，因此除了位于 $g_{m2}/C_{gd2}$ 的可忽略的右半平面零点外，该结果是精确的）。
- $t_r = 2.2\times0.194\ \mathrm{ns} = 0.43$ ns。
