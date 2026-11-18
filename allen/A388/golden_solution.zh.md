$t_p \approx 40$ ns。
- 输入较大时，全部 100 µA 流过 M1（流入 M3）或流过 M2（流入 M4）。
- 拉电流：M4 流过 100 µA，M6 将其镜像放大 5 倍 → 500 µA 注入 $C_L$（M3/M8 中无电流，故 M7 截止）。灌电流：M3 流过 100 µA，M8 镜像放大 5 倍 → 500 µA 流入 M9，M7（= M9）吸收 500 µA（M6 截止）。
- 两个方向上 $SR = 500\ \mu\mathrm{A}/10\ \mathrm{pF} = 50$ V/µs。
- 输出摆幅为 ±2 V，因此半摆幅为 2 V：$t_p = \dfrac{V_{OH}-V_{OL}}{2\,SR} = \dfrac{4\ \mathrm{V}}{2\times50\ \mathrm{V/\mu s}} = 40$ ns（两个跳变沿相同）。
