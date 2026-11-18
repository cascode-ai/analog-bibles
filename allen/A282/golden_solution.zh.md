小信号参数：$g_{m1} = \sqrt{2(110\,\mu)(3)(15\,\mu)} = 99.5\ \mu$S，$g_{m6} = \sqrt{2(50\,\mu)(94)(95\,\mu)} = 945\ \mu$S，$G_I = g_{ds2}+g_{ds4} = (0.04+0.05)(15\ \mu\mathrm{A}) = 1.35\ \mu$S，$g_{ds6} = 4.75\ \mu$S，$g_{ds7} = 3.8\ \mu$S，$G_{II} = 8.55\ \mu$S；$A_v(0) = g_{m1}g_{m6}/(G_IG_{II}) \approx 8.1\times10^3$（78 dB）；$GB = g_{m1}/C_c = 33.2$ Mrad/s（5.3 MHz）；$|p_2| = g_{m6}/C_L = 94.5$ Mrad/s（15 MHz）。

按题中定义的比值，$A_v(s)$ 与电源增益的分母相同，因此运放极点 $p_1$ 和 $p_2$ 相互抵消，只剩下分子。

PSRR⁺ $= \dfrac{A_v}{A_{dd}} = \dfrac{g_{mI}g_{mII}}{G_Ig_{ds6}}\cdot\dfrac{1 - sC_c/g_{mII}}{1+s\,g_{mII}C_c/(G_Ig_{ds6})}$：
- 低频值 $g_{m1}g_{m6}/(G_Ig_{ds6}) \approx 1.47\times10^4$（83 dB）；
- 极点位于 $G_Ig_{ds6}/(g_{m6}C_c) = 2.26$ krad/s（≈ 360 Hz），即 $GB\,g_{ds6}/(G_{II}A_v(0))$；
- 从 360 Hz 起以 −20 dB/十倍频程下降，在 $GB$（5.3 MHz；极点 × 直流值 $= g_{m1}/C_c$）处 ≈ 0 dB；
- $A_v$ 位于 $g_{m6}/C_c = 315$ Mrad/s（≈ 50 MHz）的右半平面零点只是一个斜率转折（没有凹陷）：在它以上曲线趋于平坦，约为 $g_{m1}/g_{m6} \approx -20$ dB（在极高频率下电源增益超过差模增益）。

PSRR⁻（偏置与 $V_{SS}$ 无关）$= \dfrac{g_{mI}g_{mII}}{G_Ig_{ds7}}\cdot\dfrac{1 - sC_c/g_{mII}}{(1+sC_c/G_I)(1+sC_{gd7}/g_{ds7})}$：
- 低频值 $g_{m1}g_{m6}/(G_Ig_{ds7}) \approx 1.83\times10^4$（85 dB）；
- 极点位于 $G_I/C_c = 4.5\times10^5$ rad/s（≈ 72 kHz）；
- 以 −20 dB/十倍频程下降，在 $GB$ 处 ≈ 48 dB，在 50 MHz 处 ≈ 28 dB；
- 在右半平面零点 $g_{m6}/C_c$（≈ 50 MHz）与极点 $g_{ds7}/C_{gd7} = 3.8\times10^8$ rad/s（≈ 60 MHz）之间平坦，之后再次以 −20 dB/十倍频程下降（1 GHz 处 ≈ 4 dB）。

因此在几百赫兹以上，PSRR⁻ 远优于 PSRR⁺；PSRR⁺ 仅在 ≈ 360 Hz 就开始下降，并在 $GB$ 处 ≈ 0 dB，这是因为 M6 的栅极跟随 $V_{DD}$（其 $V_{SG}$ 由 M7 的电流固定），而 $C_c$ 又把该栅极耦合到输出。

推导（双节点模型，差模输入为零；$V_1$ 为第一级输出）：对于 $V_{DD}$ 纹波，$G_IV_{dd} = (G_I+sC_c)V_1 - sC_cV_{out}$，$(g_{mII}+g_{ds6})V_{dd} = (g_{mII}-sC_c)V_1 + (G_{II}+sC_c+sC_L)V_{out}$，因此 $A_{dd} = [G_Ig_{ds6} + sC_c(g_{mII}+g_{ds6}+G_I)]/D(s)$，其中 $D(s) = G_IG_{II} + s[C_c(g_{mII}+G_I+G_{II}) + C_LG_I] + s^2C_cC_L$，与 $A_v = g_{mI}(g_{mII}-sC_c)/D(s)$ 的分母相同。对于 $V_{SS}$，在 M7 栅源电压固定时，只有 $g_{ds7}$（及 $C_{gd7}$）注入纹波：$0 = (G_I+sC_c)V_1 - sC_cV_{out}$，$(g_{ds7}+sC_{gd7})V_{ss} = (g_{mII}-sC_c)V_1 + (G_{II}+sC_c+sC_L+sC_{gd7})V_{out}$，因此 $A_{ss} = (g_{ds7}+sC_{gd7})(G_I+sC_c)/D(s)$（$D$ 中的输出电容要加上 $C_{gd7}$）。对电路做完整的节点求解得到相同的曲线（PSRR⁺ 在 10 MHz 处 ≈ −5.5 dB，在 1 GHz 处 ≈ −19.6 dB）。

教材方法：教材在运放接成单位增益跟随器时测量 PSRR，得到的是 $(1+A_v)/A_{supply}$。在 $GB$ 以下它等于上述比值；在 $GB$ 以上，它的零点就是跟随器的闭环极点（≈ $GB$ 和 $|p_2|$；精确地说是 8.9 MHz 附近的一对复数），因此 PSRR⁺ 在 ≈ 15 MHz 以下一直保持在 0 dB 附近，然后上升，而 PSRR⁻ 在 48 dB 附近趋于平坦，再上升到 ≈ 60 dB。这种高频形状属于跟随器测量方法，而不属于题中定义的比值。

注：该双节点模型忽略了尾电流管 M5。在这个按比例匹配（ratio matched）的设计中，经 $g_{ds5}$ 注入的 $V_{SS}$ 纹波（由第一级和 M6 镜像到输出）几乎抵消了 $g_{ds7}$ 的注入，因此完整的小信号分析给出高得多的低频 PSRR⁻（约 100–120 dB，并在 kHz 范围内多出一个转折）；在 ≈ 70 kHz 以上，曲线与上述基本相同。
