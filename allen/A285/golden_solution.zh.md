$\dfrac{v_{out}}{v_{ground}} = \dfrac{G_IG_{II} + sC_c(g_{mII}+G_I+G_{II})}{g_{mI}g_{mII} + G_IG_{II} + s\left[C_c(g_{mII}-g_{mI}+G_I+G_{II}) + C_LG_I\right] + s^2C_cC_L} \approx \dfrac{1}{A_v(0)}\cdot\dfrac{1+s/|p_1|}{(1+s/GB)(1+s/|p_2|)}$

- 低频增益：$G_IG_{II}/(g_{mI}g_{mII}+G_IG_{II}) \approx G_IG_{II}/(g_{mI}g_{mII}) = 1/A_v(0)$（同相）。
- 零点：$s \approx -G_IG_{II}/(C_cg_{mII}) = -|p_1|$，即运放的主极点（$= -GB/A_v(0)$）。
- 极点：$s^2C_cC_L + s\,C_c(g_{mII}-g_{mI}) + g_{mI}g_{mII} \approx 0$ 的根，即 $s \approx -g_{mI}/C_c = -GB$ 和 $s \approx -g_{mII}/C_L = -|p_2|$（闭环跟随器的极点，与 PSRR⁺ 的零点相同）。
- 曲线形状：直流时为 $1/A_v(0)$，从 $|p_1|$ 开始以 +20 dB/十倍频程上升，在 $GB$ 与 $|p_2|$ 之间 ≈ 1（0 dB），高于 $|p_2|$ 后以 −20 dB/十倍频程下降（此时 $C_L$ 把输出端与信号地连在一起）。

推导：由于偏置电池和两个电源都随 $v_{ground}$ 一起变化，把每个节点电压都平移 $-v_{ground}$。在这一参考系中，电源和偏置都是静止的，同相输入端（M1 栅极）和 $C_L$ 的下端处于 $-v_{ground}$，且 $v'_{out} = v_{out}-v_{ground}$。令 $v_{id} = -v_{ground} - v'_{out}$：
第一级：$(G_I + sC_c)V_1 - sC_cv'_{out} + g_{mI}v_{id} = 0$；
输出端：$G_{II}v'_{out} + sC_L(v'_{out}+v_{ground}) + sC_c(v'_{out}-V_1) + g_{mII}V_1 = 0$。
求解后再加回 $v_{ground}$，即得上式。因此，含噪声的地在低频时要除以环路增益后才出现在输出端，但在 $GB$ 与 $|p_2|$ 之间几乎不衰减地传到输出。

（完整的晶体管级模型还包括第一级相对于电源的共模增益，它使低频值乘以 $(1 - A_{cm})$，例如对典型的两级运放参数 ≈ 0.6；零极点不变。）
