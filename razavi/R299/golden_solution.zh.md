$$Z_{in} = \frac{r_{O2}}{1 - g_{m1}r_{O1}g_{m2}r_{O2}} \approx -\frac{1}{g_{m1}g_{m2}r_{O1}}\quad\text{(a negative resistance)}$$
$$\frac{V_{out}}{V_{in}} = \frac{-g_{m1}r_{O1}r_{O2}}{R_S + r_{O2} - g_{m1}g_{m2}r_{O1}r_{O2}R_S}$$
- 输出节点：$I_1$ 理想，$M_2$ 的栅极开路，故 $g_{m1}v_X + v_{out}/r_{O1} = 0 \Rightarrow v_{out} = -g_{m1}r_{O1}v_X$。
- 节点 X：$M_2$（源极接 $V_{DD}$，栅极接 $V_{out}$）注入的电流为 $-g_{m2}v_{out} - v_X/r_{O2}$；由于 $I_2$ 理想，$i_{in} = g_{m2}v_{out} + v_X/r_{O2} = v_X(1/r_{O2} - g_{m1}g_{m2}r_{O1})$。
- 环路 X → $M_1$（反相）→ $M_2$（反相）→ X 构成正反馈（positive feedback），因此输入电阻为负。
- $V_{out}/V_{in} = -g_{m1}r_{O1}\,Z_{in}/(Z_{in} + R_S)$，由此得到上面的表达式；当 $g_{m1}g_{m2}r_{O1}r_{O2} \gg 1$ 且 $g_{m1}g_{m2}r_{O1}R_S \gg 1$ 时，它 ≈ $+1/(g_{m2}R_S)$（$Z_{in}$ 的近似式同样需要 $g_{m1}g_{m2}r_{O1}r_{O2} \gg 1$）。
- 注：当 $R_S > |Z_{in}|$ 时，X 点的净电阻为负，电路实际上不稳定，会发生锁定（latch）；上面的公式只是形式上的小信号结果。
