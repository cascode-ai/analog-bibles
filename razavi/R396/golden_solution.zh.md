$Z_{in} = 1/g_{m1}$，$Z_{out} = \dfrac{1}{g_{m2}(1 + g_{m1}R_S)}$，$\dfrac{V_{out}}{V_{in}} = -\dfrac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)} = -\dfrac{1/g_{m2}}{R_S + 1/g_{m1}}$。

- 拓扑：$M_1$ 是共源放大器（common-source amplifier）；共栅（common-gate）PMOS 管 $M_2$ 的源极接 $V_{out}$，漏极接输入节点 N，因此它检测 $V_{out}$ 并向 N 注入 $g_{m2}v_{out}$：这是电压并联反馈（shunt–shunt feedback），且为负反馈。
- 开环：输出节点看到的是 $1/g_{m2}$（从 $M_2$ 的源极看进去），输入节点只看到 $R_S$（$M_2$ 的漏极和 $I_1$ 相当于开路），环路增益（loop gain）$T = g_{m1}R_S$。
- $Z_{out} = (1/g_{m2})/(1 + g_{m1}R_S)$。
- 输入：计入 $R_S$ 时，N 点的闭环电阻为 $R_S/(1 + g_{m1}R_S) = R_S\|(1/g_{m1})$，因此单独从 N 看进去的阻抗为 $1/g_{m1}$。直接分析：在 N 点加测试电流，对输出节点应用基尔霍夫电流定律（KCL）得 $g_{m2}v_{out} = -g_{m1}v_N$，因此返回的电流为 $-g_{m1}v_N$。
- 增益：采用诺顿（Norton）等效输入 $V_{in}/R_S$ 时，开环跨阻（transimpedance）为 $-g_{m1}R_S/g_{m2}$，闭环跨阻为 $-g_{m1}R_S/[g_{m2}(1+g_{m1}R_S)]$，再除以 $R_S$ 即得电压增益。
