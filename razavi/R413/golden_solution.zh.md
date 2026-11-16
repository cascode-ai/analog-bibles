$A_v = +100/134 \approx 0.746$；$R_{out} = 24\ \mathrm{k\Omega}/134 \approx 179\ \Omega$。一般地，若所有电阻均为 $R$，且 $g_{m1} = g_{m2} = g$：$A_v = \dfrac{(gR)^2}{(gR)^2 + 3gR + 4}$，$R_{out} = \dfrac{R(gR+2)}{(gR)^2 + 3gR + 4}$，这里 $gR = 10$。

- 拓扑：$M_1$ 是源极接有 $R_{S1}$ 的共源级（common-source stage），它驱动共源级 $M_2$。$R_{F1}$ 把输出送回 $M_1$ 的源极，构成电压串联反馈（series–shunt feedback），整个环路为负反馈：两个反相级使前向通路同相；$R_{F2}$ 则从输出端到 $M_2$ 的栅极构成一个局部的电压并联反馈（shunt–shunt feedback）环路。
- 节点方程（A 为 $M_1$ 的漏极，S 为 $M_1$ 的源极）：
  A：$-v_A/R_{D1} + (v_{out} - v_A)/R_{F2} - g_{m1}(v_{in} - v_S) = 0$；
  S：$g_{m1}(v_{in} - v_S) - v_S/R_{S1} + (v_{out} - v_S)/R_{F1} = 0$；
  输出：$-v_{out}/R_{D2} + (v_A - v_{out})/R_{F2} + (v_S - v_{out})/R_{F1} - g_{m2}v_A = 0$；
  → $v_{out} = 0.746v_{in}$（$v_A = -0.149v_{in}$，$v_S = 0.896v_{in}$）。在输出端加测试电流并令 $v_{in}$ = 0：$R_{out} = 179\ \Omega$。
- 二端口估算：$M_1$ 由 $R_{S1}\|R_{F1} = 1\ \mathrm{k\Omega}$ 提供源极负反馈（source degeneration），$G_m$ = 0.833 mS；节点 A 的负载为 $R_{D1}$ 以及 $M_2$/$R_{F2}$ 级经密勒效应（Miller effect）减小后的输入电阻（2 kΩ/4.6 = 435 Ω）→ 357 Ω；$M_2$ 级以 $R_{D2}\|(R_{F1}+R_{S1})$ 为负载时的增益：−3.6；$A_{v,open} = 1.07$，$\beta = 0.5$，环路增益（loop gain）0.54 → $A_v \approx 0.70$，$R_{out} \approx 286\ \Omega/1.54 \approx 186\ \Omega$。环路增益很小，是因为 $R_{F2}$ 对节点 A 构成很重的负载，所以增益远低于 $1/\beta = 2$。
