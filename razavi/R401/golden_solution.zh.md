$Z_{in} = \dfrac{1}{g_{m1}} + \dfrac{1}{sC_2}$（不计体效应；计入体效应时为 $\dfrac{1}{g_{m1}+g_{mb1}} + \dfrac{g_{m1}}{(g_{m1}+g_{mb1})sC_2}$）；$\quad Z_{out} = \dfrac{C_1+C_2}{C_1(g_{m1} + sC_2)} = \dfrac{1 + C_2/C_1}{g_{m1}}\ \Big\|\ \dfrac{1}{sC_1C_2/(C_1+C_2)}$，即低频时 ≈ $(1 + C_2/C_1)/g_{m1}$。

- 拓扑：$M_1$ 是输入加在源极的共栅级（common-gate stage）；分压器把 $V_P = V_{out}C_1/(C_1+C_2)$ 加到其栅极，因此输出电压与输入相串联地反馈回来，构成电压串联反馈（series–shunt feedback），使 $Z_{in}$ 提高。
- 开环（栅极接交流地）：$Z_{in,open} = 1/g_{m1}$（λ = 0）；输出端只接有负载 $C_s = C_1C_2/(C_1+C_2)$；环路增益（loop gain）$T = g_{m1}\dfrac{C_1}{C_1+C_2}\cdot\dfrac{1}{sC_s} = \dfrac{g_{m1}}{sC_2}$。闭环：$Z_{in} = (1/g_{m1})(1 + T)$。
- $Z_{out}$（输入端即源极接地）：$I_X = g_{m1}v_XC_1/(C_1+C_2) + sC_sv_X$；开环电阻为 ∞，闭环后降为 $1/(g_{m1}\beta)$，其中 $\beta = C_1/(C_1+C_2)$。
