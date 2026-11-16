$Z_{in} = 0$，$\dfrac{V_{out}}{V_{in}} = -\dfrac{1}{g_{m2}R_S}$。
- $M_1$（栅极接输入节点 X）驱动输出节点，而在输出节点处，$I_1$ 是理想的，$\lambda = 0$，且 $M_2$ 的栅极不吸取电流。因此输出节点的基尔霍夫电流定律（KCL）方程迫使 $g_{m1}v_X = 0$：对任何输入电流都有 $v_X = 0$。环路 X → $M_1$ → 输出 → 源极跟随器（source follower）$M_2$ → X 是一个环路增益（loop gain）为无穷大的负反馈环路。
- X 点的 KCL（$I_2$ 是理想的，$M_1$ 的栅极开路）：输入电流全部被 $M_2$ 吸收，$i_{in} + g_{m2}(v_{out} - v_X) = 0$，因此 $v_{out} = -i_{in}/g_{m2}$。由于 $v_X = 0$，$Z_{in} = v_X/i_{in} = 0$。
- 代入 $i_{in} = V_{in}/R_S$：$V_{out} = -V_{in}/(g_{m2}R_S)$，即跨阻（transimpedance）为 $-1/g_{m2}$。
- （若 $r_O$ 有限：$Z_{in} = r_{O2}/(1 + g_{m2}r_{O2} + g_{m1}g_{m2}r_{O1}r_{O2}) \approx 1/(g_{m1}g_{m2}r_{O1})$。）
