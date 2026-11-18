$i_{out}/i_{in} \approx 0.99$（≈ 1），$R_{in} \approx 2.98$ kΩ，$R_{out} = 250$ kΩ，$f_{-3dB} \approx 97$ MHz。

- 两个器件均有 $g_m = \sqrt{2\times110\ \mu\times5\times100\ \mu} = 332\ \mu\mathrm{A/V}$，$g_{ds} = \lambda I = 4\ \mu\mathrm{A/V}$。
- 增益：$i_{out}/i_{in} = g_{m2}/(g_{m1} + g_{ds1}) = 332/336 = 0.988$。
- $R_{in} = 1/(g_{m1} + g_{ds1}) = 2.98$ kΩ（≈ $1/g_m$ = 3.0 kΩ）。
- $R_{out} = r_{ds2} = 1/(\lambda I) = 250$ kΩ。
- 栅极节点处的极点：输出端为交流地时，该节点的电容为 $C_{gs1} + C_{gs2} + C_{bd1} + C_{gd2} = 200 + 200 + 100 + 50 = 550$ fF（$C_{gd1}$ 被二极管连接短路，$C_{bd2}$ 位于接地的输出端）。$\omega_{-3dB} = (g_{m1} + g_{ds1})/550\ \mathrm{fF} = 6.1\times10^8$ rad/s，$f_{-3dB} = 97$ MHz。（经 $C_{gd2}$ 的前馈零点位于 $g_{m2}/C_{gd2}$ ≈ 1 GHz。）
