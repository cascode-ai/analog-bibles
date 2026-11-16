$Z_{in} = 0$，$\dfrac{V_{out}}{V_{in}} = +\dfrac{1}{g_{m2}R_S}$。
- $M_1$ 是共栅（common-gate）NMOS 管（源极接输入节点 X，栅极接 $V_b$，漏极接输出端）；$M_2$ 是 PMOS 管，源极接 $V_{DD}$，栅极接 $V_{out}$，漏极接 X。
- 输出节点的基尔霍夫电流定律（KCL）：$I_1$ 是理想的，$M_2$ 的栅极不吸取电流，因此 $M_1$ 的小信号电流 $-g_{m1}v_X$ 必须为零：$v_X = 0$，即 $Z_{in} = 0$。这是环路增益（loop gain）为无穷大的负反馈。
- X 点的 KCL：输入电流被 $M_2$ 吸收，其流入 X 的漏极电流为 $-g_{m2}v_{out}$，故 $i_{in} - g_{m2}v_{out} = 0 \Rightarrow v_{out} = i_{in}/g_{m2} = V_{in}/(g_{m2}R_S)$。
