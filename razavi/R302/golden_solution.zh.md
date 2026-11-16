$Z_{in} = \infty$，$\dfrac{V_{out}}{V_{in}} = +\dfrac{g_{m1}}{g_{m2}}$。
- 两个晶体管都只连接输入节点 X 和输出节点：$M_1$（NMOS，栅极接 $V_{b2}$，源极接 X，漏极接输出端）把 $-g_{m1}v_X$ 从输出端送到 X，$M_2$（PMOS，源极接输出端，栅极接 $V_{b1}$，漏极接 X）把 $g_{m2}v_{out}$ 从输出端送到 X。
- 输出端的基尔霍夫电流定律（KCL）方程（$I_1$ 理想）：$g_{m2}v_{out} - g_{m1}v_X = 0 \Rightarrow v_{out} = (g_{m1}/g_{m2})v_X$。
- X 点的 KCL（$I_2$ 理想）：$i_{in} + (g_{m2}v_{out} - g_{m1}v_X) = 0 \Rightarrow i_{in} = 0$，且对任何 $v_X$ 都成立：没有小信号电流能够流入，$Z_{in} = \infty$（流入 X 的电流都必须经输出节点流出，而输出节点上只有一个理想电流源）。
- $R_S$ 中没有电流，因此 $v_X = V_{in}$，$V_{out} = (g_{m1}/g_{m2})V_{in}$。
