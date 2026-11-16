$V_{out} = -(R_{D1} + R_{D2})\,\dfrac{\dfrac{g_{m1}}{g_{m1}+g_{mb1}}V_{in1} - \dfrac{g_{m2}}{g_{m2}+g_{mb2}}V_{in2}}{R_{S1} + R_{S2} + \dfrac{1}{g_{m1}+g_{mb1}} + \dfrac{1}{g_{m2}+g_{mb2}}}$。

若两边的体效应系数（body-effect coefficient）相等，即两边都有 $g_{mb}/g_m = \eta$，则该式只取决于 $V_{in1} - V_{in2}$：
$\dfrac{V_{out}}{V_{in1} - V_{in2}} = -\dfrac{R_{D1} + R_{D2}}{(1+\eta)(R_{S1} + R_{S2}) + 1/g_{m1} + 1/g_{m2}}$。
- 小信号电流 $i_1$、$i_2$ 向下流过 $M_1$、$M_2$；理想的尾电流源（tail current source）迫使 $i_1 + i_2 = 0$。
- 源极电压：$v_{S1} = v_P + i_1R_{S1}$，$v_{S2} = v_P + i_2R_{S2}$；衬底接地时，$i_1 = g_{m1}(v_{in1} - v_{S1}) - g_{mb1}v_{S1}$，$M_2$ 同理。
- 消去 $v_P$：$i_1\left[R_{S1} + R_{S2} + \frac{1}{g_{m1}+g_{mb1}} + \frac{1}{g_{m2}+g_{mb2}}\right] = \frac{g_{m1}v_{in1}}{g_{m1}+g_{mb1}} - \frac{g_{m2}v_{in2}}{g_{m2}+g_{mb2}}$。
- 输出：$v_{D1} = -R_{D1}i_1$，$v_{D2} = -R_{D2}i_2 = +R_{D2}i_1$，因此 $v_{out} = -(R_{D1} + R_{D2})i_1$。
- 若 $g_{m1}/(g_{m1}+g_{mb1}) \ne g_{m2}/(g_{m2}+g_{mb2})$（源极电压不同），共模（common-mode）输入也会产生一定的输出，因此只有在 η 相等或纯差分驱动的情况下，比值 $V_{out}/(V_{in1} - V_{in2})$ 才是精确的。
