$Z_{in} = 0$，即该节点为虚地（virtual ground）；$Z_{out} = \dfrac{1 + g_{m2}R_S}{g_{m1}g_{m2}R_S} = \dfrac{1}{g_{m1}} + \dfrac{1}{g_{m1}g_{m2}R_S}$；$\dfrac{V_{out}}{V_{in}} = -\dfrac{1}{g_{m2}R_S}$。

- 拓扑：$M_1$ 是从输入节点 N 到 $V_{out}$ 的共源放大器（common-source amplifier）；源极跟随器（source follower）$M_2$ 检测 $V_{out}$ 并把电流送回 N：这是电压并联反馈（shunt–shunt feedback），也称电压-电流反馈（voltage–current feedback），且为负反馈（N↑ → $V_{out}$↓ → N↓）。
- 输出节点只与理想电流源、$M_1$ 的漏极（λ = 0）以及 $M_2$ 的栅极相连，因此开环输出电阻（output resistance）为无穷大，从而环路增益（loop gain）也为无穷大。
- $Z_{in}$：闭环值 $Z_{in,open}/(1+T) \to 0$；直接分析时，对输出节点应用基尔霍夫电流定律（KCL）迫使 $g_{m1}v_N = 0$，因此无论注入多大的电流（都被 $M_2$ 吸收），N 都保持在交流地。
- 增益：流入虚地的电流 $V_{in}/R_S$ 必须由 $M_2$ 引走：$g_{m2}(V_{out} - 0) = -V_{in}/R_S$。
- $Z_{out}$（$V_{in}$ = 0）：$v_N = g_{m2}v_X R_S/(1 + g_{m2}R_S)$，$I_X = g_{m1}v_N$；等价地，它是 $R_{out,open}/(1+T)$ 在 $R_{out,open} \to \infty$ 时的极限。
