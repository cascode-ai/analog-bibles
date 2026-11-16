$Z_{in} = \dfrac{1}{g_{m1}}$，$\dfrac{V_{out}}{V_{in}} = -\dfrac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)}$。
- $M_2$ 是共栅（common-gate）PMOS 管（源极接输出节点，栅极接 $V_b$，漏极接输入节点 X）：它把电流 $g_{m2}v_{out}$ 从输出端送到 X。
- 输出节点的基尔霍夫电流定律（KCL）方程（$I_1$ 理想）：$g_{m1}v_X + g_{m2}v_{out} = 0 \Rightarrow v_{out} = -(g_{m1}/g_{m2})v_X$。
- X 点的 KCL（$I_2$ 理想，$M_1$ 的栅极开路）：$i_{in} + g_{m2}v_{out} = 0 \Rightarrow i_{in} = g_{m1}v_X$，因此 $Z_{in} = 1/g_{m1}$（$M_1$ 的信号电流全部经 $M_2$ 回到 X）。
- $v_X = V_{in}/(1 + g_{m1}R_S)$，由此得到传递函数。
