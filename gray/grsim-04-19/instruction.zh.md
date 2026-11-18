考虑 [图 1] 所示带电流镜负载的源极耦合对（source-coupled pair）（$T_1$、$T_2$ 为输入对管；$T_3$ 为二极管连接，$T_4$ 为电流镜输出管；$T_5$ 为尾电流源，其输出电阻为 $r_{tail}$），输出对小信号地短路。符号：$i_1$、$i_2$ 为 $T_1$、$T_2$ 的小信号漏极电流；$i_3 = -i_1$ 为二极管 $T_3$ 中的电流；$v_3$ 为 $T_3$/$T_4$ 的小信号栅极电压；平均值与差值为 $g_{m1-2} = (g_{m1}+g_{m2})/2$，$\Delta g_{m1-2} = g_{m1} - g_{m2}$，$r_{o(dp)} = (r_{o1}+r_{o2})/2$，$\Delta r_{o(dp)} = r_{o1} - r_{o2}$，$g_{m3-4}$、$\Delta g_{m3-4}$ 依此类推。对于纯共模输入 $v_{ic}$，由 $i_1 = i_2(1 - \epsilon_d)$ 定义差分对的增益误差（gain error）$\epsilon_d$，由 $g_{m4}v_3 = i_3(1 - \epsilon_m)$ 定义电流镜的增益误差 $\epsilon_m$；于是 $i_{out} = -(1-\epsilon_m)i_3 - i_2 \approx -i_2(\epsilon_d + \epsilon_m)$，因此 $G_m[cm] = i_{out}/v_{ic} \approx -(i_2/v_{ic})(\epsilon_d + \epsilon_m)$。

虽然 $G_m[cm]$ 可以由允许失配（mismatch）的小信号电路图精确算出，但由于各失配项相互作用，计算很复杂，结果也难以解释。实际中，失配项通常只是相应平均值的一小部分，失配项之间的相互作用往往可以忽略。以下列步骤为指导，计算计入失配影响的 $G_m[cm]$ 近似值。忽略体效应。

(a) 推导 $G_m[cm] \approx -(i_2/v_{ic})(\epsilon_d + \epsilon_m)$ 中出现的比值 $i_2/v_{ic}$，并证明当 $\epsilon_d \ll 2$、$g_{m2}r_{o2} \gg 1$ 且 $2g_{m2}r_{tail} \gg 1$ 时，该比值近似为 $1/(2r_{tail})$。
(b) 在完全匹配时，二极管 $T_3$ 在 $T_1$ 的漏极呈现 ≈ $1/g_{m(mir)}$，而 $T_2$ 的漏极接地；计算此情形下的 $\epsilon_d$（证明 $\epsilon_d \approx 1/(1 + g_{m(mir)}r_{o(dp)})$）。
(c) 若 $1/g_{m3} = 0$ 且唯一的失配是 $g_{m1} \ne g_{m2}$，计算 $\epsilon_d$。
(d) 若 $1/g_{m3} = 0$ 且唯一的失配是 $r_{o1} \ne r_{o2}$，计算 $\epsilon_d$。
(e) 将 (b)、(c) 和 (d) 中算出的值相加，估算计入失配的总 $\epsilon_d$。证明当 $g_{m3}r_{o(dp)} \gg 1$ 时，结果与 $\epsilon_d \simeq \dfrac{1}{g_{m3}r_{o(dp)}} - \dfrac{\Delta g_{m1-2}}{g_{m1-2}}\left(1 + \dfrac{2r_{tail}}{r_{o(dp)}}\right) - \dfrac{2r_{tail}}{r_{o(dp)}}\dfrac{\Delta r_{o(dp)}}{r_{o(dp)}}$ 一致。
(f) 计算 $\epsilon_m$（$r_{o3}$ 为有限值且 $g_{m3} \ne g_{m4}$），并证明结果与 $\epsilon_m = \dfrac{1}{1 + g_{m3}r_{o3}} + \dfrac{(g_{m3} - g_{m4})r_{o3}}{1 + g_{m3}r_{o3}} \simeq \dfrac{1}{g_{m3}r_{o3}} + \dfrac{\Delta g_{m3-4}}{g_{m3-4}}$ 一致。
(g) 对下列数据（采用这些数据时 $G_m[dm] \approx 0.907$ mA/V），用 $G_m[cm] \simeq -(\epsilon_d + \epsilon_m)/(2r_{tail})$ 计算 $G_m[cm]$ 的值，并计算 CMRR $= |G_m[dm]/G_m[cm]|$。将你的结果与 SPICE 仿真进行比较。另外，将你的结果与无失配时的结果进行比较。

| | $T_1$ | $T_2$ | $T_3$ | $T_4$ | $T_5$ |
|---|---|---|---|---|---|
| $g_m$ (mA/V) | 1.05 | 0.95 | 1.1 | 0.9 | 2.0 |
| $r_o$ (MΩ) | 0.95 | 1.05 | 1.0 | 1.0 | 0.5 |
