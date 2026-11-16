$Z_{in} = 0$，即该节点为虚地（virtual ground）；$Z_{out} = \dfrac{1 + g_{m1}R_S}{g_{m1}g_{m2}R_S} = \dfrac{1}{g_{m2}} + \dfrac{1}{g_{m1}g_{m2}R_S}$；$\dfrac{V_{out}}{V_{in}} = +\dfrac{1}{g_{m2}R_S}$。

- 拓扑：$M_1$ 为共栅接法（输入在其源极 N，输出在其漏极，同相）；PMOS 共源（common-source）器件 $M_2$ 检测 $V_{out}$ 并驱动 N（反相）：这是电压并联反馈（shunt–shunt feedback），且为负反馈（N↑ → $V_{out}$↑ → $M_2$ 注入 N 的电流减少 → N↓）。
- 输出节点的开环电阻为无穷大（理想的 $I_1$、λ = 0、$M_2$ 的栅极），因此环路增益（loop gain）为无穷大，N 为虚地：$Z_{in} = 0$；$M_1$ 的小信号电流被迫为零。
- 增益：$M_2$ 必须吸收 $V_{in}/R_S$：$-g_{m2}V_{out} + V_{in}/R_S = 0$。
- $Z_{out}$（$V_{in}$ = 0）：$M_2$ 向 N 注入 $-g_{m2}v_X$，N 看到的是 $R_S\|(1/g_{m1})$：$v_N = -g_{m2}v_XR_S/(1 + g_{m1}R_S)$；$I_X = -g_{m1}v_N$ → 即上面的 $Z_{out}$。
