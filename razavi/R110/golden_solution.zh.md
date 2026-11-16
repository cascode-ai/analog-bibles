$A_v = -\left(g_{m1} - \dfrac{1}{R_F}\right)(R_D \| R_F \| r_{O1}) = -\dfrac{(g_{m1}R_F - 1)R_Dr_{O1}}{R_DR_F + R_Dr_{O1} + R_Fr_{O1}}$。

- 输入源直接驱动栅极，因此无论 $R_F$ 如何，都有 $v_{gs} = v_{in}$；$R_F$ 只是引入了一个前馈（feedforward）电流和一个负载。
- 输出节点的基尔霍夫电流定律（KCL）：$(v_{out} - v_{in})/R_F + v_{out}/R_D + v_{out}/r_{O1} + g_{m1}v_{in} = 0$ → $v_{out}(1/R_F + 1/R_D + 1/r_{O1}) = v_{in}(1/R_F - g_{m1})$。
